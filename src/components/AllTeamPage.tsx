import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
// CHANGED: The import path is now for the same directory
import Team from './Team'; 

const AllTeamPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </button>
      </div>

      {/* Reusing the Team component to show all members */}
      <Team showAll={true} />
    </div>
  );
};

export default AllTeamPage;