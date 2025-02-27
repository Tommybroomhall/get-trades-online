import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import logoImage from './images/timmeman (560 x 130 px).png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef(null);

  // Setup auto-close timer when menu opens
  useEffect(() => {
    if (isOpen) {
      // Clear any existing timer
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      
      // Set new timer to close menu after 4 seconds
      timerRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 4000);
    }

    // Cleanup timer when component unmounts or menu closes
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close menu when a navigation item is clicked
  const closeMenu = () => {
    setIsOpen(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
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
              <Link to="/get-online" className="hover:text-[#fd8f01] px-3 py-2 rounded-md text-sm font-medium">Get Online</Link>
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
              <WhatsAppIcon size={18} />
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
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#fd8f01]"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/get-online" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#fd8f01]"
              onClick={closeMenu}
            >
              Get Online
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#fd8f01]"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#fd8f01]"
              onClick={closeMenu}
            >
              Our Work
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#fd8f01]"
              onClick={closeMenu}
            >
              Contact
            </Link>
            
            <a 
              href="https://wa.me/+441234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white mt-4 px-4 py-2 rounded-md"
              onClick={closeMenu}
            >
              <WhatsAppIcon size={18} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;