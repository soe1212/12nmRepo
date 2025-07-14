import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Play, 
  Pause, 
  Volume2, 
  Settings, 
  Maximize, 
  BookOpen, 
  Star, 
  Users, 
  Clock,
  Download,
  Bookmark,
  MessageSquare,
  ChevronRight,
  CheckCircle,
  Lock
} from 'lucide-react';

const CoursePage: React.FC = () => {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const courseData = {
    title: 'Complete React Developer Course',
    instructor: 'Sarah Johnson',
    rating: 4.9,
    students: 25420,
    duration: '42 hours',
    description: 'Master React from beginner to advanced level with hands-on projects and real-world applications.',
    thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1',
    progress: 65
  };

  const chapters = [
    { id: 1, title: 'Introduction to React', duration: '45 min', completed: true, locked: false },
    { id: 2, title: 'Components and JSX', duration: '1h 20min', completed: true, locked: false },
    { id: 3, title: 'State and Props', duration: '1h 15min', completed: true, locked: false },
    { id: 4, title: 'Event Handling', duration: '50 min', completed: false, locked: false },
    { id: 5, title: 'React Hooks', duration: '2h 10min', completed: false, locked: false },
    { id: 6, title: 'Context API', duration: '1h 30min', completed: false, locked: true },
    { id: 7, title: 'Advanced Patterns', duration: '2h 45min', completed: false, locked: true }
  ];

  const reviews = [
    {
      id: 1,
      user: 'Alex Thompson',
      rating: 5,
      comment: 'Excellent course! The instructor explains everything clearly.',
      date: '2 days ago',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      id: 2,
      user: 'Maria Garcia',
      rating: 4,
      comment: 'Great content, but could use more practical examples.',
      date: '1 week ago',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'community', label: 'Q&A' },
    { id: 'resources', label: 'Resources' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto p-6">
        {/* Course Header */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-2/3">
              <h1 className="text-3xl font-bold text-white mb-4">{courseData.title}</h1>
              <p className="text-gray-300 mb-4">{courseData.description}</p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>{courseData.rating}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{courseData.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{courseData.duration}</span>
                </div>
              </div>
              <p className="text-gray-400 mt-2">by {courseData.instructor}</p>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Progress</span>
                    <span className="text-sm text-orange-500">{courseData.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                      style={{ width: `${courseData.progress}%` }}
                    />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all">
                    Continue Learning
                  </button>
                  <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player and Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <div className="relative aspect-video bg-black">
                <img
                  src={courseData.thumbnail}
                  alt="Course video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full transition-colors"
                  >
                    {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
                  </button>
                </div>
              </div>
              <div className="p-4 bg-gray-900 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="text-gray-400 hover:text-white">
                    <Volume2 className="h-5 w-5" />
                  </button>
                  <span className="text-sm text-gray-400">0:00 / 45:30</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-white">
                    <Settings className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-white">
                    <Maximize className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-gray-800 rounded-lg border border-gray-700">
              <div className="border-b border-gray-700">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-orange-500 text-orange-500'
                          : 'border-transparent text-gray-400 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">About this course</h3>
                    <p className="text-gray-300">
                      This comprehensive React course will take you from beginner to advanced level. 
                      You'll learn modern React concepts, hooks, context API, and build real-world projects.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <h4 className="font-medium text-white mb-2">What you'll learn</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li>• Modern React with Hooks</li>
                          <li>• Component-based architecture</li>
                          <li>• State management with Context</li>
                          <li>• Building real-world applications</li>
                        </ul>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <h4 className="font-medium text-white mb-2">Requirements</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li>• Basic JavaScript knowledge</li>
                          <li>• HTML & CSS fundamentals</li>
                          <li>• Code editor (VS Code recommended)</li>
                          <li>• Node.js installed</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Student Reviews</h3>
                    <div className="space-y-4">
                      {reviews.map((review) => (
                        <div key={review.id} className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                          <div className="flex items-center space-x-3 mb-3">
                            <img
                              src={review.avatar}
                              alt={review.user}
                              className="w-10 h-10 rounded-full"
                            />
                            <div>
                              <p className="text-white font-medium">{review.user}</p>
                              <div className="flex items-center space-x-2">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-600'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-xs text-gray-400">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-300">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'community' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Questions & Answers</h3>
                    <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 text-center">
                      <MessageSquare className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-400">No questions yet. Be the first to ask!</p>
                      <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">
                        Ask a Question
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'resources' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Course Resources</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-gray-900 p-3 rounded-lg border border-gray-700">
                        <div className="flex items-center space-x-3">
                          <Download className="h-5 w-5 text-orange-500" />
                          <span className="text-white">Course Slides.pdf</span>
                        </div>
                        <button className="text-orange-500 hover:text-orange-400">Download</button>
                      </div>
                      <div className="flex items-center justify-between bg-gray-900 p-3 rounded-lg border border-gray-700">
                        <div className="flex items-center space-x-3">
                          <Download className="h-5 w-5 text-orange-500" />
                          <span className="text-white">Source Code.zip</span>
                        </div>
                        <button className="text-orange-500 hover:text-orange-400">Download</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar - Course Content */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Course Content</span>
              </h3>
              <div className="space-y-2">
                {chapters.map((chapter) => (
                  <div
                    key={chapter.id}
                    className={`flex items-center justify-between p-3 rounded-lg border transition-colors cursor-pointer ${
                      chapter.locked
                        ? 'border-gray-700 bg-gray-900 opacity-50'
                        : 'border-gray-700 bg-gray-900 hover:border-orange-500'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {chapter.completed ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : chapter.locked ? (
                        <Lock className="h-5 w-5 text-gray-500" />
                      ) : (
                        <Play className="h-5 w-5 text-orange-500" />
                      )}
                      <div>
                        <p className="text-white font-medium">{chapter.title}</p>
                        <p className="text-gray-400 text-sm">{chapter.duration}</p>
                      </div>
                    </div>
                    {!chapter.locked && (
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;