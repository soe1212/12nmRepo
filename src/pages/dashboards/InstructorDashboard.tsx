import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Star, 
  Play,
  Plus,
  Eye,
  Award
} from 'lucide-react';

const InstructorDashboard: React.FC = () => {
  const myCourses = [
    {
      id: 1,
      title: 'Complete React Developer Course',
      students: 25420,
      revenue: 45780,
      rating: 4.9,
      status: 'Published',
      thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      title: 'Advanced JavaScript Patterns',
      students: 12890,
      revenue: 28900,
      rating: 4.8,
      status: 'Published',
      thumbnail: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      createdAt: '2024-02-01'
    },
    {
      id: 3,
      title: 'Node.js Masterclass',
      students: 0,
      revenue: 0,
      rating: 0,
      status: 'Draft',
      thumbnail: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      createdAt: '2024-02-10'
    }
  ];

  const recentReviews = [
    {
      id: 1,
      student: 'Alice Johnson',
      course: 'Complete React Developer Course',
      rating: 5,
      comment: 'Amazing course! The instructor explains complex concepts in a simple way.',
      date: '2 days ago',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      id: 2,
      student: 'Bob Smith',
      course: 'Advanced JavaScript Patterns',
      rating: 4,
      comment: 'Great content, but could use more practical examples.',
      date: '1 week ago',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    }
  ];

  const stats = [
    {
      label: 'Total Students',
      value: '38,310',
      icon: Users,
      color: 'text-blue-500',
      change: '+12.5%'
    },
    {
      label: 'Total Revenue',
      value: '$74,680',
      icon: DollarSign,
      color: 'text-green-500',
      change: '+8.2%'
    },
    {
      label: 'Avg Rating',
      value: '4.8',
      icon: Star,
      color: 'text-yellow-500',
      change: '+0.1'
    },
    {
      label: 'Active Courses',
      value: '12',
      icon: BookOpen,
      color: 'text-orange-500',
      change: '+2'
    }
  ];

  const monthlyEarnings = [
    { month: 'Jan', amount: 5200 },
    { month: 'Feb', amount: 6800 },
    { month: 'Mar', amount: 8400 },
    { month: 'Apr', amount: 7200 },
    { month: 'May', amount: 9600 },
    { month: 'Jun', amount: 11200 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-900 text-green-300 border-green-500';
      case 'Draft':
        return 'bg-yellow-900 text-yellow-300 border-yellow-500';
      case 'Under Review':
        return 'bg-blue-900 text-blue-300 border-blue-500';
      default:
        return 'bg-gray-900 text-gray-300 border-gray-500';
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Instructor Dashboard</h1>
        <p className="text-gray-400">Manage your courses and track your performance</p>
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
        {/* My Courses */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">My Courses</h2>
              <Link
                to="/dashboard/instructor/create"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-orange-600 hover:to-red-600 transition-all inline-flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Create Course</span>
              </Link>
            </div>
            
            <div className="space-y-4">
              {myCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-orange-500 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-16 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-medium">{course.title}</h3>
                        <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(course.status)}`}>
                          {course.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-4 w-4" />
                          <span>${course.revenue.toLocaleString()}</span>
                        </div>
                        {course.rating > 0 && (
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span>{course.rating}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Link
                        to={`/course/${course.id}/edit`}
                        className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <Eye className="h-4 w-4" />
                      </Link>
                      <Link
                        to={`/course/${course.id}/analytics`}
                        className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <TrendingUp className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Revenue Chart */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Monthly Revenue</h3>
            <div className="space-y-3">
              {monthlyEarnings.map((item) => (
                <div key={item.month} className="flex items-center justify-between">
                  <span className="text-gray-400">{item.month}</span>
                  <span className="text-white font-medium">${item.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Reviews */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Recent Reviews</h3>
              <Star className="h-5 w-5 text-gray-400" />
            </div>
            
            <div className="space-y-4">
              {recentReviews.map((review) => (
                <div key={review.id} className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src={review.avatar}
                      alt={review.student}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="text-white text-sm font-medium">{review.student}</p>
                      <p className="text-gray-400 text-xs">{review.course}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm">{review.comment}</p>
                  <p className="text-gray-400 text-xs mt-2">{review.date}</p>
                </div>
              ))}
            </div>
            
            <Link
              to="/dashboard/instructor/reviews"
              className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <span>View All Reviews</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;