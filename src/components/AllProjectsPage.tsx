import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Projects from '../components/Projects';

const AllProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black pt-24"> {/* Padding to clear the fixed header */}
      
      {/* This container aligns the button to the left */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </button>
      </div>

      <Projects showAll={true} />
    </div>
  );
};

export default AllProjectsPage;