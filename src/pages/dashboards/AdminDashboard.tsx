import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp, 
  UserPlus,
  Eye,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const stats = [
    {
      label: 'Total Users',
      value: '125,890',
      icon: Users,
      color: 'text-blue-500',
      change: '+15.3%'
    },
    {
      label: 'Total Courses',
      value: '2,456',
      icon: BookOpen,
      color: 'text-green-500',
      change: '+8.7%'
    },
    {
      label: 'Platform Revenue',
      value: '$892,340',
      icon: DollarSign,
      color: 'text-yellow-500',
      change: '+23.1%'
    },
    {
      label: 'Active Instructors',
      value: '1,234',
      icon: UserPlus,
      color: 'text-orange-500',
      change: '+5.2%'
    }
  ];

  const recentUsers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Student',
      joinDate: '2024-02-15',
      status: 'Active',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      role: 'Instructor',
      joinDate: '2024-02-14',
      status: 'Active',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike@example.com',
      role: 'Student',
      joinDate: '2024-02-13',
      status: 'Pending',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    }
  ];

  const pendingCourses = [
    {
      id: 1,
      title: 'Advanced Python Programming',
      instructor: 'Dr. Emily White',
      submittedOn: '2024-02-15',
      category: 'Programming',
      status: 'Under Review'
    },
    {
      id: 2,
      title: 'Digital Marketing Mastery',
      instructor: 'Mark Thompson',
      submittedOn: '2024-02-14',
      category: 'Marketing',
      status: 'Under Review'
    },
    {
      id: 3,
      title: 'Data Science Fundamentals',
      instructor: 'Dr. Lisa Chang',
      submittedOn: '2024-02-13',
      category: 'Data Science',
      status: 'Needs Revision'
    }
  ];

  const systemAlerts = [
    {
      id: 1,
      message: 'Server maintenance scheduled for Sunday 3:00 AM',
      type: 'info',
      time: '2 hours ago'
    },
    {
      id: 2,
      message: 'Payment gateway experiencing intermittent issues',
      type: 'warning',
      time: '6 hours ago'
    },
    {
      id: 3,
      message: 'Database backup completed successfully',
      type: 'success',
      time: '1 day ago'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-900 text-green-300 border-green-500';
      case 'Pending':
        return 'bg-yellow-900 text-yellow-300 border-yellow-500';
      case 'Under Review':
        return 'bg-blue-900 text-blue-300 border-blue-500';
      case 'Needs Revision':
        return 'bg-red-900 text-red-300 border-red-500';
      default:
        return 'bg-gray-900 text-gray-300 border-gray-500';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-blue-500" />;
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
        <p className="text-gray-400">Manage platform operations and monitor system health</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-green-500 text-sm mt-1">{stat.change}</p>
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Users */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Recent Users</h2>
              <Link
                to="/dashboard/admin/users"
                className="text-orange-500 hover:text-orange-400 text-sm font-medium"
              >
                View All
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div
                  key={user.id}
                  className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-orange-500 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-medium">{user.name}</h3>
                        <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(user.status)}`}>
                          {user.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{user.email}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                        <span className="capitalize">{user.role}</span>
                        <span>Joined {user.joinDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* System Alerts */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h3 className="text-lg font-bold text-white mb-4">System Alerts</h3>
            <div className="space-y-3">
              {systemAlerts.map((alert) => (
                <div key={alert.id} className="bg-gray-900 rounded-lg p-3 border border-gray-700">
                  <div className="flex items-start space-x-3">
                    {getAlertIcon(alert.type)}
                    <div className="flex-1">
                      <p className="text-white text-sm">{alert.message}</p>
                      <p className="text-gray-400 text-xs mt-1">{alert.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Course Reviews */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Course Reviews</h3>
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                {pendingCourses.length}
              </span>
            </div>
            
            <div className="space-y-3">
              {pendingCourses.map((course) => (
                <div key={course.id} className="bg-gray-900 rounded-lg p-3 border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white text-sm font-medium">{course.title}</h4>
                    <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(course.status)}`}>
                      {course.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs">by {course.instructor}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-400 text-xs">{course.category}</span>
                    <span className="text-gray-400 text-xs">{course.submittedOn}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <Link
              to="/dashboard/admin/courses"
              className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <span>Review All Courses</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;