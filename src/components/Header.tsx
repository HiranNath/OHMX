import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToSection: sectionId } });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 py-1 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <div className="flex items-center justify-center w-[120px]">
                <img src="/logo.png" alt="Logo"/>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            <button onClick={() => handleNavClick('hero')} className="text-white transition-colors duration-200 hover:text-orange-500">Home</button>
            <button onClick={() => handleNavClick('team')} className="text-white transition-colors duration-200 hover:text-orange-500">Team</button>
            {/* CHANGED: This is now a button that scrolls */}
            <button onClick={() => handleNavClick('projects')} className="text-white transition-colors duration-200 hover:text-orange-500">Projects</button>
            <button onClick={() => handleNavClick('contact')} className="text-white transition-colors duration-200 hover:text-orange-500">Contact</button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white transition-colors duration-200 hover:text-orange-500">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="p-4 mt-2 rounded-lg md:hidden bg-black/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => handleNavClick('hero')} className="text-left text-white transition-colors duration-200 hover:text-orange-500">Home</button>
              <button onClick={() => handleNavClick('team')} className="text-left text-white transition-colors duration-200 hover:text-orange-500">Team</button>
              {/* CHANGED: This is now a button that scrolls */}
              <button onClick={() => handleNavClick('projects')} className="text-left text-white transition-colors duration-200 hover:text-orange-500">Projects</button>
              <button onClick={() => handleNavClick('contact')} className="text-left text-white transition-colors duration-200 hover:text-orange-500">Contact</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;