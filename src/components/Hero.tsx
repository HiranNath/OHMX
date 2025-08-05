import React from 'react';
import { ChevronDown } from 'lucide-react';
// REMOVED: useNavigate is not needed here

const Hero: React.FC = () => {

  const handleNavClick = (sectionId: string) => {
    // This function ensures smooth scrolling
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
            We Create
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Amazing Things
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collective of passionate creators, innovators, and problem solvers 
            dedicated to bringing extraordinary ideas to life through cutting-edge technology and design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => handleNavClick('team')}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Meet Our Team
            </button>
            <button 
              onClick={() => handleNavClick('projects')}
              className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;