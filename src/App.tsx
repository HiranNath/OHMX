import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Team from './components/Team';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import { Loader2 } from 'lucide-react';

function App() {
  const [showLogo, setShowLogo] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Hide logo popup after 3 seconds
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000);

    // Handle scroll for navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen text-white bg-black">
      {/* Logo Popup */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-1000 ${
        showLogo ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className={`transform transition-all duration-1000 flex item-center   ${
          showLogo ? 'scale-100 rotate-0' : 'scale-50 rotate-180'
        }`}>
              <img src="/logo.png" alt="Logo" className=" w-[200px]"/>
              <Loader2 className="animate-spin text-orange-500" size={25} />         
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-1000 ${showLogo ? 'blur-sm' : 'blur-none'}`}>
        <Header isScrolled={isScrolled} />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Team />
              <Projects />
              <Footer />
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;