import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Play, 
  Clock, 
  Award, 
  TrendingUp, 
  Calendar,
  Star,
  ChevronRight
} from 'lucide-react';

const StudentDashboard: React.FC = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: 'Complete React Developer Course',
      instructor: 'Sarah Johnson',
      progress: 65,
      thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      duration: '42 hours',
      lastWatched: '2 days ago'
    },
    {
      id: 2,
      title: 'Advanced Machine Learning',
      instructor: 'Dr. Michael Chen',
      progress: 30,
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      duration: '36 hours',
      lastWatched: '1 week ago'
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      instructor: 'Emma Rodriguez',
      progress: 85,
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      duration: '28 hours',
      lastWatched: '1 day ago'
    }
  ];

  const certificates = [
    {
      id: 1,
      title: 'JavaScript Fundamentals',
      completedOn: '2024-01-15',
      instructor: 'John Smith'
    },
    {
      id: 2,
      title: 'Python for Beginners',
      completedOn: '2024-01-10',
      instructor: 'Alice Johnson'
    }
  ];

  const upcomingSchedule = [
    {
      id: 1,
      title: 'React Advanced Patterns',
      time: '2:00 PM',
      date: 'Today',
      type: 'Live Session'
    },
    {
      id: 2,
      title: 'Assignment: Build Portfolio',
      time: '11:59 PM',
      date: 'Tomorrow',
      type: 'Deadline'
    },
    {
      id: 3,
      title: 'Machine Learning Quiz',
      time: '10:00 AM',
      date: 'Friday',
      type: 'Assessment'
    }
  ];

  const stats = [
    {
      label: 'Courses Enrolled',
      value: '12',
      icon: BookOpen,
      color: 'text-blue-500'
    },
    {
      label: 'Hours Watched',
      value: '284',
      icon: Clock,
      color: 'text-green-500'
    },
    {
      label: 'Certificates',
      value: '8',
      icon: Award,
      color: 'text-yellow-500'
    },
    {
      label: 'Streak Days',
      value: '15',
      icon: TrendingUp,
      color: 'text-orange-500'
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back, John!</h1>
        <p className="text-gray-400">Continue your learning journey</p>
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
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Enrolled Courses */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Continue Learning</h2>
              <Link
                to="/courses"
                className="text-orange-500 hover:text-orange-400 text-sm font-medium"
              >
                View All
              </Link>
            </div>
            
            <div className="space-y-4">
              {enrolledCourses.map((course) => (
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
                      <h3 className="text-white font-medium mb-1">{course.title}</h3>
                      <p className="text-gray-400 text-sm">by {course.instructor}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex-1 bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-400">{course.progress}%</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <Link
                        to={`/course/${course.id}`}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center space-x-2"
                      >
                        <Play className="h-4 w-4" />
                        <span>Continue</span>
                      </Link>
                      <p className="text-gray-400 text-xs mt-1">{course.lastWatched}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Schedule */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Schedule</h3>
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            
            <div className="space-y-3">
              {upcomingSchedule.map((item) => (
                <div key={item.id} className="bg-gray-900 rounded-lg p-3 border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-medium">{item.title}</p>
                      <p className="text-gray-400 text-xs">{item.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-orange-500 text-sm font-medium">{item.time}</p>
                      <p className="text-gray-400 text-xs">{item.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Recent Certificates</h3>
              <Award className="h-5 w-5 text-gray-400" />
            </div>
            
            <div className="space-y-3">
              {certificates.map((cert) => (
                <div key={cert.id} className="bg-gray-900 rounded-lg p-3 border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-medium">{cert.title}</p>
                      <p className="text-gray-400 text-xs">{cert.instructor}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-500 text-sm">Completed</p>
                      <p className="text-gray-400 text-xs">{cert.completedOn}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Link
              to="/certificates"
              className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <span>View All Certificates</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;