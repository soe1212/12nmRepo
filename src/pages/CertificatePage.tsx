import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  Award, 
  Download, 
  Share2, 
  Calendar, 
  User, 
  CheckCircle,
  Star,
  ExternalLink
} from 'lucide-react';

const CertificatePage: React.FC = () => {
  const { id } = useParams();

  // Mock certificate data
  const certificate = {
    id: id || '1',
    title: 'Complete React Developer Course',
    studentName: 'John Doe',
    instructorName: 'Sarah Johnson',
    completionDate: '2024-02-15',
    issueDate: '2024-02-16',
    courseHours: '42 hours',
    grade: 'A+',
    certificateNumber: 'LS-2024-001234',
    skills: ['React', 'JavaScript', 'JSX', 'Hooks', 'State Management']
  };

  const handleDownload = () => {
    // Mock download functionality
    console.log('Downloading certificate...');
  };

  const handleShare = () => {
    // Mock share functionality
    console.log('Sharing certificate...');
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-full">
              <Award className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Certificate of Completion</h1>
          <p className="text-gray-400">Congratulations on your achievement!</p>
        </div>

        {/* Certificate */}
        <div className="bg-white rounded-lg shadow-2xl p-8 mb-8">
          <div className="text-center border-4 border-gray-200 rounded-lg p-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">LearnSwift</h2>
              <p className="text-gray-600">Online Learning Platform</p>
            </div>

            {/* Certificate Content */}
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Certificate of Completion</h3>
              <p className="text-lg text-gray-600 mb-4">This is to certify that</p>
              <h4 className="text-4xl font-bold text-orange-600 mb-4">{certificate.studentName}</h4>
              <p className="text-lg text-gray-600 mb-2">has successfully completed the course</p>
              <h5 className="text-2xl font-semibold text-gray-800 mb-6">{certificate.title}</h5>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-gray-500 text-sm">Instructor</p>
                  <p className="font-semibold text-gray-800">{certificate.instructorName}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 text-sm">Completion Date</p>
                  <p className="font-semibold text-gray-800">{certificate.completionDate}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 text-sm">Course Duration</p>
                  <p className="font-semibold text-gray-800">{certificate.courseHours}</p>
                </div>
              </div>

              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-gray-700 font-medium">Grade: {certificate.grade}</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <p className="text-sm text-gray-500">Certificate ID</p>
                  <p className="font-mono text-gray-700">{certificate.certificateNumber}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Issue Date</p>
                  <p className="text-gray-700">{certificate.issueDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={handleDownload}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all flex items-center justify-center space-x-2"
          >
            <Download className="h-5 w-5" />
            <span>Download PDF</span>
          </button>
          <button
            onClick={handleShare}
            className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Share2 className="h-5 w-5" />
            <span>Share Certificate</span>
          </button>
          <button className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
            <ExternalLink className="h-5 w-5" />
            <span>Verify Online</span>
          </button>
        </div>

        {/* Certificate Details */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <h3 className="text-xl font-bold text-white mb-4">Certificate Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Course Information</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300">Instructor: {certificate.instructorName}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300">Completed: {certificate.completionDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-300">Status: Verified</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Skills Acquired</h4>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-orange-500 bg-opacity-20 text-orange-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;