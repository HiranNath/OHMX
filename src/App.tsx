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
    const timer = setTimeout(() => { setShowLogo(false); }, 2000);
    const handleScroll = () => { setIsScrolled(window.scrollY > 50); };
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
    <div className={`relative min-h-screen text-white bg-black flex flex-col transition-all duration-1000 ${showLogo ? 'blur-sm' : 'blur-none'}`}>
      <Header isScrolled={isScrolled} />
      
      {/* ADDED <main> tag to ensure content pushes footer down */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/projects" element={<><AllProjectsPage /><Footer /></>} />
          <Route path="/team" element={<><AllTeamPage /><Footer /></>} />
          <Route path="/store" element={<><StorePage /><Footer /></>} />
        </Routes>
      </main>

      {/* Logo Popup - Moved outside the main content flow */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-1000 ${
        showLogo ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className={`transform transition-all duration-1000 flex item-center ${
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