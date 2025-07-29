import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const handleNavClick = (sectionId: string) => {
    // This function ensures smooth scrolling on the homepage
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* UPDATED: Added responsive text alignment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center justify-center md:justify-start mb-6">
              <img src="/favicon.png" alt="Logo" className="w-10 h-10" />
              <span className="ml-3 text-2xl font-bold">GroupPortfolio</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We're a collective of passionate creators dedicated to bringing extraordinary ideas to life through cutting-edge technology and innovative design solutions.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://github.com/SiMoNRiLeY-141/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/adhiljahan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-500">Quick Links</h3>
            <ul className="space-y-4">
              <li><button onClick={() => handleNavClick('hero')} className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Home</button></li>
              <li><button onClick={() => handleNavClick('team')} className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Our Team</button></li>
              <li><button onClick={() => handleNavClick('projects')} className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Projects</button></li>
              <li><Link to="/store" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Store</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-500">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start justify-center md:justify-start">
                <Mail className="text-orange-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300">adhiljahan2@gmail.com</p>
                  <p className="text-gray-400 text-sm">We'd love to hear from you</p>
                </div>
              </div>
              <div className="flex items-start justify-center md:justify-start">
                <Phone className="text-orange-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300">+91 79947 15830</p>
                  <p className="text-gray-400 text-sm">Mon-Fri 9am-6pm IST</p>
                </div>
              </div>
              <div className="flex items-start justify-center md:justify-start">
                <MapPin className="text-orange-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300">Sreekrishnapuram, Kerala</p>
                  <p className="text-gray-400 text-sm">Remote-first team</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} GroupPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;