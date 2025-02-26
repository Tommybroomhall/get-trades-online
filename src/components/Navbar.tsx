import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import logoImage from './images/timmeman (560 x 130 px).png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-slate-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={logoImage} 
                alt="GetTradesOnline Logo" 
                className="h-10" 
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="hover:text-[#fd8f01] px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="hover:text-[#fd8f01] px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/services" className="hover:text-[#fd8f01] px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link to="/portfolio" className="hover:text-[#fd8f01] px-3 py-2 rounded-md text-sm font-medium">Our Work</Link>
              <Link to="/contact" className="hover:text-[#fd8f01] px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://wa.me/+441234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-200"
            >
              <MessageSquare size={18} />
              <span className="font-medium">WhatsApp Us</span>
            </a>
            <div className="flex items-center space-x-2 text-slate-800">
              <Phone size={18} className="text-[#fd8f01]" />
              <span className="font-medium">01234 567890</span>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-800 hover:text-[#fd8f01] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#fd8f01]"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#fd8f01]"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#fd8f01]"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#fd8f01]"
              onClick={toggleMenu}
            >
              Our Work
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#fd8f01]"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            
            <a 
              href="https://wa.me/+441234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white mt-4 px-4 py-2 rounded-md"
            >
              <MessageSquare size={18} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;