import React, { useState } from 'react';
import { 
  MessageSquare, 
  Users, 
  Search, 
  Filter, 
  ThumbsUp, 
  MessageCircle, 
  Clock,
  Star,
  Award,
  Plus,
  Eye,
  ChevronDown,
  Pin,
  Flag
} from 'lucide-react';

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [searchQuery, setSearchQuery] = useState('');

  const discussions = [
    {
      id: 1,
      title: 'Best practices for React state management in 2024?',
      author: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      category: 'React',
      replies: 23,
      likes: 45,
      views: 1250,
      timeAgo: '2 hours ago',
      isPinned: true,
      tags: ['react', 'state-management', 'redux']
    },
    {
      id: 2,
      title: 'How to optimize machine learning model performance?',
      author: 'Dr. Michael Chen',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      category: 'Machine Learning',
      replies: 18,
      likes: 32,
      views: 890,
      timeAgo: '5 hours ago',
      isPinned: false,
      tags: ['ml', 'optimization', 'performance']
    },
    {
      id: 3,
      title: 'UI/UX design trends for mobile applications',
      author: 'Emma Rodriguez',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      category: 'Design',
      replies: 12,
      likes: 28,
      views: 567,
      timeAgo: '1 day ago',
      isPinned: false,
      tags: ['ui', 'ux', 'mobile', 'design']
    },
    {
      id: 4,
      title: 'JavaScript async/await vs Promises - Which is better?',
      author: 'Alex Thompson',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      category: 'JavaScript',
      replies: 35,
      likes: 67,
      views: 2100,
      timeAgo: '2 days ago',
      isPinned: false,
      tags: ['javascript', 'async', 'promises']
    }
  ];

  const topContributors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      points: 2450,
      badge: 'Expert',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      points: 1890,
      badge: 'Mentor',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      points: 1650,
      badge: 'Helper',
      badgeColor: 'bg-green-500'
    }
  ];

  const categories = [
    { name: 'All', count: 1250, active: true },
    { name: 'React', count: 340 },
    { name: 'JavaScript', count: 280 },
    { name: 'Python', count: 220 },
    { name: 'Machine Learning', count: 180 },
    { name: 'Design', count: 150 },
    { name: 'Career', count: 80 }
  ];

  const tabs = [
    { id: 'discussions', label: 'Discussions', icon: MessageSquare },
    { id: 'questions', label: 'Q&A', icon: MessageCircle },
    { id: 'showcase', label: 'Showcase', icon: Star }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Community</h1>
        <p className="text-gray-400">Connect, learn, and share with fellow learners</p>
      </div>

      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
        
        <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>New Discussion</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Search and Filters */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 hover:text-white hover:bg-gray-600 transition-colors">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Discussions List */}
          <div className="space-y-4">
            {discussions.map((discussion) => (
              <div
                key={discussion.id}
                className="bg-gray-800 rounded-lg border border-gray-700 p-6 hover:border-orange-500 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={discussion.avatar}
                    alt={discussion.author}
                    className="w-12 h-12 rounded-full"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {discussion.isPinned && (
                        <Pin className="h-4 w-4 text-orange-500" />
                      )}
                      <h3 className="text-lg font-semibold text-white hover:text-orange-500 cursor-pointer">
                        {discussion.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span>by {discussion.author}</span>
                      <span>in {discussion.category}</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{discussion.timeAgo}</span>
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {discussion.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full hover:bg-gray-600 cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{discussion.replies} replies</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{discussion.likes} likes</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{discussion.views} views</span>
                        </div>
                      </div>
                      
                      <button className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700 transition-colors">
                        <Flag className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg border border-gray-700 transition-colors">
              Load More Discussions
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Categories */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                    category.active
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">{category.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Top Contributors */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
              <Award className="h-5 w-5 text-yellow-500" />
              <span>Top Contributors</span>
            </h3>
            <div className="space-y-4">
              {topContributors.map((contributor, index) => (
                <div key={contributor.id} className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-gray-700 rounded-full text-xs text-gray-300">
                    {index + 1}
                  </div>
                  <img
                    src={contributor.avatar}
                    alt={contributor.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{contributor.name}</p>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-0.5 ${contributor.badgeColor} text-white text-xs rounded-full`}>
                        {contributor.badge}
                      </span>
                      <span className="text-gray-400 text-xs">{contributor.points} pts</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Stats */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Community Stats</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Total Members</span>
                <span className="text-white font-medium">125,890</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Active Today</span>
                <span className="text-green-500 font-medium">2,340</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Discussions</span>
                <span className="text-white font-medium">45,670</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Questions Answered</span>
                <span className="text-blue-500 font-medium">89,230</span>
              </div>
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Community Guidelines</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Be respectful and constructive</li>
              <li>• Search before posting</li>
              <li>• Use clear, descriptive titles</li>
              <li>• Tag your posts appropriately</li>
              <li>• Help others when you can</li>
            </ul>
            <button className="mt-4 text-orange-500 hover:text-orange-400 text-sm font-medium">
              Read Full Guidelines →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;