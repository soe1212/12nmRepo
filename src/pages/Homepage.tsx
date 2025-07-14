import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, Users, Trophy, ArrowRight, BookOpen, Code, AtSign as Design, Briefcase, Brain, ChevronDown, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Homepage: React.FC = () => {
  const categories = [
    { icon: Code, name: 'Programming', courses: 150 },
    { icon: Design, name: 'Design', courses: 89 },
    { icon: Briefcase, name: 'Business', courses: 67 },
    { icon: Brain, name: 'AI & ML', courses: 45 },
  ];

  const featuredCourses = [
    {
      id: 1,
      title: 'Complete React Developer Course',
      instructor: 'Sarah Johnson',
      rating: 4.9,
      students: 25420,
      price: 89.99,
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      duration: '42 hours'
    },
    {
      id: 2,
      title: 'Advanced Machine Learning',
      instructor: 'Dr. Michael Chen',
      rating: 4.8,
      students: 18750,
      price: 129.99,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      duration: '36 hours'
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      instructor: 'Emma Rodriguez',
      rating: 4.7,
      students: 12890,
      price: 79.99,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      duration: '28 hours'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Software Engineer',
      company: 'Google',
      content: 'LearnSwift transformed my career. The AI-powered recommendations helped me discover courses I never knew I needed.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'Maria Garcia',
      role: 'Product Designer',
      company: 'Meta',
      content: 'The interactive learning experience and community support made complex concepts easy to understand.',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'David Kim',
      role: 'Data Scientist',
      company: 'Microsoft',
      content: 'Quality content, expert instructors, and cutting-edge technology. Everything you need to advance your skills.',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    }
  ];

  const faqItems = [
    {
      question: 'How does the AI enhancement work?',
      answer: 'Our AI analyzes your learning patterns and preferences to provide personalized course recommendations, generate custom quizzes, and offer smart content summaries.'
    },
    {
      question: 'Can I access courses offline?',
      answer: 'Yes, our mobile app allows you to download course content for offline viewing. Premium subscribers get unlimited downloads.'
    },
    {
      question: 'Do you offer certificates?',
      answer: 'Yes, we provide verified certificates upon course completion. These are recognized by top employers and can be shared on LinkedIn.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with a course, you can request a full refund within 30 days of purchase.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI-Powered Learning for the{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Future
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master in-demand skills with personalized learning paths, interactive content, 
              and AI-driven insights. Join millions of learners worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Start Learning Today</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">2M+</div>
              <div className="text-gray-300">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">10K+</div>
              <div className="text-gray-300">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-300">Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">95%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Explore Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <Icon className="h-12 w-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-400">{category.courses} courses</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden hover:border-orange-500 transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 mb-4">by {course.instructor}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-white font-medium">{course.rating}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-500">
                      ${course.price}
                    </span>
                    <span className="text-gray-400">{course.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden"
              >
                <summary className="px-6 py-4 cursor-pointer hover:bg-gray-800 transition-colors flex items-center justify-between">
                  <span className="text-white font-medium">{item.question}</span>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </summary>
                <div className="px-6 pb-4 text-gray-300">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">LearnSwift</h3>
              <p className="text-gray-400 mb-4">
                Empowering learners worldwide with AI-powered education technology.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Mobile App</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">For Business</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">
              © 2024 LearnSwift. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;