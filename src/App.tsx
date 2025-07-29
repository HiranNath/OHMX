import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import AllProjectsPage from './components/AllProjectsPage';
import AllTeamPage from './components/AllTeamPage';
import StorePage from './components/StorePage';
import HomePage from './components/HomePage';
import { Loader2 } from 'lucide-react';

function App() {
  const [showLogo, setShowLogo] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 2000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (location.state?.scrollToSection) {
      const element = document.getElementById(location.state.scrollToSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    // This div is the main container for the entire app
    <div className="relative min-h-screen bg-black text-white">

      {/* The main content with the blur effect */}
      <div className={`transition-opacity duration-1000 flex flex-col min-h-screen ${showLogo ? 'opacity-0' : 'opacity-100'}`}>
        <Header isScrolled={isScrolled} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/projects" element={<><AllProjectsPage /><Footer /></>} />
            <Route path="/team" element={<><AllTeamPage /><Footer /></>} />
            <Route path="/store" element={<><StorePage /><Footer /></>} />
          </Routes>
        </main>
      </div>

      {/* The Logo Popup is now separate and will correctly overlay everything */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-1000 ${
        showLogo ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className={`transform transition-all duration-1000 flex items-center ${
          showLogo ? 'scale-100 rotate-0' : 'scale-50 rotate-180'
        }`}>
          <img src="/logo.png" alt="Logo" className="w-[200px]" />
          <Loader2 className="animate-spin text-orange-500" size={25} />
        </div>
      </div>
    </div>
  );
}

export default App;