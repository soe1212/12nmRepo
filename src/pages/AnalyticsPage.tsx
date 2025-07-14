import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  BookOpen, 
  Eye, 
  Clock, 
  Star,
  Calendar,
  Download,
  Filter,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

const AnalyticsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  const stats = [
    {
      label: 'Total Revenue',
      value: '$124,580',
      change: '+23.1%',
      icon: DollarSign,
      color: 'text-green-500'
    },
    {
      label: 'Total Students',
      value: '38,420',
      change: '+15.3%',
      icon: Users,
      color: 'text-blue-500'
    },
    {
      label: 'Course Views',
      value: '156,890',
      change: '+8.7%',
      icon: Eye,
      color: 'text-orange-500'
    },
    {
      label: 'Avg Rating',
      value: '4.8',
      change: '+0.2',
      icon: Star,
      color: 'text-yellow-500'
    }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 8200, students: 145 },
    { month: 'Feb', revenue: 9800, students: 178 },
    { month: 'Mar', revenue: 12400, students: 234 },
    { month: 'Apr', revenue: 10600, students: 198 },
    { month: 'May', revenue: 15200, students: 289 },
    { month: 'Jun', revenue: 18900, students: 356 }
  ];

  const topCourses = [
    {
      id: 1,
      title: 'Complete React Developer Course',
      revenue: 45780,
      students: 1234,
      rating: 4.9,
      views: 25420
    },
    {
      id: 2,
      title: 'Advanced JavaScript Patterns',
      revenue: 32100,
      students: 892,
      rating: 4.8,
      views: 18750
    },
    {
      id: 3,
      title: 'Node.js Masterclass',
      revenue: 28900,
      students: 756,
      rating: 4.7,
      views: 15680
    },
    {
      id: 4,
      title: 'Python for Data Science',
      revenue: 24500,
      students: 634,
      rating: 4.6,
      views: 12890
    }
  ];

  const trafficSources = [
    { source: 'Organic Search', percentage: 45, color: 'bg-orange-500' },
    { source: 'Direct', percentage: 25, color: 'bg-blue-500' },
    { source: 'Social Media', percentage: 15, color: 'bg-green-500' },
    { source: 'Referrals', percentage: 10, color: 'bg-purple-500' },
    { source: 'Email', percentage: 5, color: 'bg-yellow-500' }
  ];

  const timeRanges = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
            <p className="text-gray-400">Track your performance and growth metrics</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {timeRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
            <button className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-orange-500 transition-colors">
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
        {/* Revenue Chart */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Revenue Overview</h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setSelectedMetric('revenue')}
                  className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                    selectedMetric === 'revenue'
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Revenue
                </button>
                <button
                  onClick={() => setSelectedMetric('students')}
                  className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                    selectedMetric === 'students'
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Students
                </button>
              </div>
            </div>
            
            {/* Mock Chart */}
            <div className="h-64 bg-gray-900 rounded-lg border border-gray-700 p-4">
              <div className="flex items-end justify-between h-full space-x-2">
                {revenueData.map((data, index) => {
                  const value = selectedMetric === 'revenue' ? data.revenue : data.students;
                  const maxValue = selectedMetric === 'revenue' ? 20000 : 400;
                  const height = (value / maxValue) * 100;
                  
                  return (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div
                        className="bg-gradient-to-t from-orange-500 to-red-500 rounded-t w-full transition-all duration-300 hover:from-orange-400 hover:to-red-400"
                        style={{ height: `${height}%` }}
                      />
                      <span className="text-gray-400 text-xs mt-2">{data.month}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
              <PieChart className="h-5 w-5" />
              <span>Traffic Sources</span>
            </h3>
            <div className="space-y-4">
              {trafficSources.map((source, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">{source.source}</span>
                    <span className="text-white font-medium">{source.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`${source.color} h-2 rounded-full transition-all duration-300`}
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-gray-900 hover:bg-gray-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center space-x-3">
                <BarChart3 className="h-5 w-5 text-orange-500" />
                <span>Generate Report</span>
              </button>
              <button className="w-full bg-gray-900 hover:bg-gray-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-blue-500" />
                <span>Schedule Analysis</span>
              </button>
              <button className="w-full bg-gray-900 hover:bg-gray-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center space-x-3">
                <Activity className="h-5 w-5 text-green-500" />
                <span>View Insights</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Top Performing Courses */}
      <div className="mt-8">
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <h2 className="text-xl font-bold text-white mb-6">Top Performing Courses</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left text-gray-400 font-medium py-3">Course</th>
                  <th className="text-left text-gray-400 font-medium py-3">Revenue</th>
                  <th className="text-left text-gray-400 font-medium py-3">Students</th>
                  <th className="text-left text-gray-400 font-medium py-3">Rating</th>
                  <th className="text-left text-gray-400 font-medium py-3">Views</th>
                </tr>
              </thead>
              <tbody>
                {topCourses.map((course) => (
                  <tr key={course.id} className="border-b border-gray-700 hover:bg-gray-900 transition-colors">
                    <td className="py-4">
                      <div className="text-white font-medium">{course.title}</div>
                    </td>
                    <td className="py-4">
                      <div className="text-green-500 font-medium">${course.revenue.toLocaleString()}</div>
                    </td>
                    <td className="py-4">
                      <div className="text-white">{course.students.toLocaleString()}</div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-white">{course.rating}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="text-gray-300">{course.views.toLocaleString()}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;