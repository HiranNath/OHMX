import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Team from '../components/Team';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // This hook checks if we navigated from another page with instructions to scroll
    if (location.state?.scrollToSection) {
      const element = document.getElementById(location.state.scrollToSection);
      if (element) {
        // Smoothly scrolls to the correct section (e.g., 'team' or 'projects')
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Team />
      <Projects />
      <Footer />
    </>
  );
};

export default HomePage;