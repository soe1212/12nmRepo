import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  BarChart3, 
  Brain, 
  MessageSquare, 
  Award, 
  Settings, 
  Users,
  DollarSign,
  Star,
  Plus,
  Calendar,
  FileText,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: 'student' | 'instructor' | 'admin';
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, userRole }) => {
  const location = useLocation();

  const studentNavItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard/student' },
    { icon: BookOpen, label: 'My Courses', path: '/dashboard/student/courses' },
    { icon: Calendar, label: 'Schedule', path: '/dashboard/student/schedule' },
    { icon: Award, label: 'Certificates', path: '/dashboard/student/certificates' },
    { icon: BarChart3, label: 'Progress', path: '/dashboard/student/progress' },
    { icon: Brain, label: 'AI Suite', path: '/ai-suite' },
    { icon: MessageSquare, label: 'Community', path: '/community' },
    { icon: Settings, label: 'Settings', path: '/dashboard/student/settings' },
  ];

  const instructorNavItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard/instructor' },
    { icon: BookOpen, label: 'My Courses', path: '/dashboard/instructor/courses' },
    { icon: Plus, label: 'Create Course', path: '/dashboard/instructor/create' },
    { icon: DollarSign, label: 'Revenue', path: '/dashboard/instructor/revenue' },
    { icon: Star, label: 'Reviews', path: '/dashboard/instructor/reviews' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { icon: Brain, label: 'AI Suite', path: '/ai-suite' },
    { icon: MessageSquare, label: 'Community', path: '/community' },
    { icon: Settings, label: 'Settings', path: '/dashboard/instructor/settings' },
  ];

  const adminNavItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard/admin' },
    { icon: Users, label: 'Users', path: '/dashboard/admin/users' },
    { icon: BookOpen, label: 'Courses', path: '/dashboard/admin/courses' },
    { icon: DollarSign, label: 'Revenue', path: '/dashboard/admin/revenue' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { icon: FileText, label: 'Reports', path: '/dashboard/admin/reports' },
    { icon: Brain, label: 'AI Suite', path: '/ai-suite' },
    { icon: MessageSquare, label: 'Community', path: '/community' },
    { icon: Settings, label: 'Settings', path: '/dashboard/admin/settings' },
  ];

  const getNavItems = () => {
    switch (userRole) {
      case 'student':
        return studentNavItems;
      case 'instructor':
        return instructorNavItems;
      case 'admin':
        return adminNavItems;
      default:
        return studentNavItems;
    }
  };

  const navItems = getNavItems();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-gray-800 border-r border-gray-700 transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-0
      `}>
        <div className="flex items-center justify-between p-4 border-b border-gray-700 lg:hidden">
          <span className="text-lg font-semibold text-white">Menu</span>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-4 border-b border-gray-700 hidden lg:block">
          <h2 className="text-lg font-semibold text-white capitalize">
            {userRole} Dashboard
          </h2>
        </div>
        
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`
                  flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
                  ${isActive 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }
                `}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;