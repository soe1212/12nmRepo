import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Bell, User, GraduationCap, BookOpen, BarChart3, Brain, MessageSquare, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface NavbarProps {
  onSidebarToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSidebarToggle }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const mockNotifications = [
    { id: 1, message: 'New course "Advanced React" is now available', time: '2 hours ago' },
    { id: 2, message: 'Assignment due tomorrow for JavaScript Fundamentals', time: '1 day ago' },
    { id: 3, message: 'Certificate ready for download', time: '3 days ago' }
  ];

  return (
    <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side */}
          <div className="flex items-center">
            {user && (
              <button
                onClick={onSidebarToggle}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            )}
            
            <Link to="/" className="flex items-center space-x-2 ml-2 lg:ml-0">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">LearnSwift</span>
            </Link>
          </div>

          {/* Center - Search */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses, instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {!user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/signin"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                {/* Navigation Links */}
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors hidden sm:block"
                >
                  Home
                </Link>
                <Link
                  to="/courses"
                  className="text-gray-300 hover:text-white transition-colors hidden sm:block"
                >
                  Courses
                </Link>
                <Link
                  to={`/dashboard/${user.role}`}
                  className="text-gray-300 hover:text-white transition-colors hidden sm:block"
                >
                  Dashboard
                </Link>

                {/* Notifications */}
                <div className="relative">
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="p-2 text-gray-400 hover:text-white transition-colors relative"
                  >
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      3
                    </span>
                  </button>
                  
                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-50">
                      <div className="p-4 border-b border-gray-700">
                        <h3 className="text-sm font-semibold text-white">Notifications</h3>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        {mockNotifications.map(notification => (
                          <div key={notification.id} className="p-4 border-b border-gray-700 hover:bg-gray-700 transition-colors">
                            <p className="text-sm text-white">{notification.message}</p>
                            <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* User Menu */}
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-8 w-8 rounded-full border-2 border-gray-600"
                    />
                  </button>
                  
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-50">
                      <div className="p-4 border-b border-gray-700">
                        <p className="text-sm font-semibold text-white">{user.name}</p>
                        <p className="text-xs text-gray-400 capitalize">{user.role}</p>
                      </div>
                      <div className="p-2">
                        <button
                          onClick={() => setShowUserMenu(false)}
                          className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                        >
                          Profile Settings
                        </button>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-gray-700 rounded-md transition-colors flex items-center space-x-2"
                        >
                          <LogOut className="h-4 w-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;