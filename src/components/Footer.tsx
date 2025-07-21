import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                <span className="text-xl font-bold text-black">GP</span>
              </div>
              <span className="ml-3 text-2xl font-bold">GroupPortfolio</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We're a collective of passionate creators dedicated to bringing extraordinary ideas to life through cutting-edge technology and innovative design solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
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
              <li>
                <a href="#hero" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-500">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-orange-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300">hello@groupportfolio.com</p>
                  <p className="text-gray-400 text-sm">We'd love to hear from you</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-orange-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-400 text-sm">Mon-Fri 9am-6pm</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-orange-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300">San Francisco, CA</p>
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