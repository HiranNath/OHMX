import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 py-1 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center justify-center w-[120px] ">
               <img src="/logo.png" alt="Logo"/>
            </div>
           
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-white transition-colors duration-200 hover:text-orange-500"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-white transition-colors duration-200 hover:text-orange-500"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white transition-colors duration-200 hover:text-orange-500"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white transition-colors duration-200 hover:text-orange-500"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white transition-colors duration-200 hover:text-orange-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="p-4 mt-2 rounded-lg md:hidden bg-black/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left text-white transition-colors duration-200 hover:text-orange-500"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-left text-white transition-colors duration-200 hover:text-orange-500"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-white transition-colors duration-200 hover:text-orange-500"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-white transition-colors duration-200 hover:text-orange-500"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;