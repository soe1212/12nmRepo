import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Homepage from './pages/Homepage';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import StudentDashboard from './pages/dashboards/StudentDashboard';
import InstructorDashboard from './pages/dashboards/InstructorDashboard';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import CoursePage from './pages/CoursePage';
import CheckoutFlow from './pages/CheckoutFlow';
import AnalyticsPage from './pages/AnalyticsPage';
import AIEnhancementSuite from './pages/AIEnhancementSuite';
import CommunityPage from './pages/CommunityPage';
import CertificatePage from './pages/CertificatePage';
import { ToastProvider } from './contexts/ToastContext';
import Toast from './components/ui/Toast';

function AppContent() {
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isDashboardRoute = location.pathname.includes('/dashboard') || 
                          location.pathname.includes('/analytics') ||
                          location.pathname.includes('/ai-suite') ||
                          location.pathname.includes('/community');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        {user && isDashboardRoute && (
          <Sidebar 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)}
            userRole={user.role}
          />
        )}
        
        <main className={`flex-1 ${user && isDashboardRoute ? 'lg:ml-64' : ''}`}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard/student" element={<StudentDashboard />} />
            <Route path="/dashboard/instructor" element={<InstructorDashboard />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/course/:id" element={<CoursePage />} />
            <Route path="/checkout" element={<CheckoutFlow />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/ai-suite" element={<AIEnhancementSuite />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/certificate/:id" element={<CertificatePage />} />
          </Routes>
        </main>
      </div>
      
      <Toast />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Router>
          <AppContent />
        </Router>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;