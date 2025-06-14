import React, { useState } from 'react';
import { Menu, X, HelpCircle, User } from 'lucide-react';

const IndeedNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-400">
              indeed
            </div>
            <div className="text-xs text-gray-300 ml-1 mt-2">
              for employers
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-blue-400 transition-colors duration-200 font-medium">
              Post a job
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors duration-200 font-medium">
              Find CVs
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors duration-200 font-medium">
              Products
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors duration-200 font-medium">
              Resources
            </a>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-300 hover:text-white cursor-pointer transition-colors duration-200">
              <HelpCircle size={20} />
              <span className="font-medium">Help Centre</span>
            </div>
            <div className="p-2 rounded-full hover:bg-gray-700 cursor-pointer transition-colors duration-200">
              <User size={20} />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-700">
              <a
                href="#"
                className="block px-3 py-2 text-white hover:bg-gray-700 hover:text-blue-400 rounded-md transition-colors duration-200 font-medium"
              >
                Post a job
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-white hover:bg-gray-700 hover:text-blue-400 rounded-md transition-colors duration-200 font-medium"
              >
                Find CVs
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-white hover:bg-gray-700 hover:text-blue-400 rounded-md transition-colors duration-200 font-medium"
              >
                Products
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-white hover:bg-gray-700 hover:text-blue-400 rounded-md transition-colors duration-200 font-medium"
              >
                Resources
              </a>
              <div className="border-t border-gray-700 pt-2">
                <div className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md cursor-pointer transition-colors duration-200">
                  <HelpCircle size={20} className="mr-2" />
                  <span className="font-medium">Help Centre</span>
                </div>
                <div className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md cursor-pointer transition-colors duration-200">
                  <User size={20} className="mr-2" />
                  <span className="font-medium">Profile</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default IndeedNavbar;