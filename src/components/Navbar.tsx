import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import logoImage from './images/timmeman (560 x 130 px).png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const timerRef = useRef(null);
  const moreDropdownRef = useRef(null);

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

  // Close more dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target)) {
        setIsMoreDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const toggleMoreDropdown = () => {
    setIsMoreDropdownOpen(!isMoreDropdownOpen);
  };

  const toggleMobileMore = () => {
    setIsMobileMoreOpen(!isMobileMoreOpen);
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
              <Link to="/prices" className="hover:text-[#fd8f01] px-3 py-2 rounded-md text-sm font-medium">Prices</Link>
              <Link 
                to="/get-online" 
                className="bg-[#fd8f01] text-white hover:bg-[#e68101] px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Get Online
              </Link>
              <Link to="/services" className="hover:text-[#fd8f01] px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link to="/portfolio" className="hover:text-[#fd8f01] px-3 py-2 rounded-md text-sm font-medium">Our Work</Link>
              
              {/* More dropdown menu */}
              <div className="relative" ref={moreDropdownRef}>
                <button 
                  onClick={toggleMoreDropdown}
                  className="flex items-center hover:text-[#fd8f01] px-3 py-2 rounded-md text-sm font-medium"
                >
                  More
                  {isMoreDropdownOpen ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
                </button>
                
                {isMoreDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link
                      to="/blog"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#fd8f01]"
                      onClick={() => setIsMoreDropdownOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link
                      to="/referral-program"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#fd8f01]"
                      onClick={() => setIsMoreDropdownOpen(false)}
                    >
                      Refer a Mate
                    </Link>
                    <Link
                      to="/free-websites"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#fd8f01]"
                      onClick={() => setIsMoreDropdownOpen(false)}
                    >
                      Free Websites
                    </Link>
                  </div>
                )}
              </div>
              
              <Link to="/contact" className="hover:text-[#fd8f01] px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://wa.me/+447424163547" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-200"
            >
              <WhatsAppIcon size={18} />
              <span className="font-medium">WhatsApp Us</span>
            </a>
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
              to="/prices" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#fd8f01]"
              onClick={closeMenu}
            >
              Prices
            </Link>
            <Link 
              to="/get-online" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-[#fd8f01] text-white hover:bg-[#e68101]"
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
            
            {/* Mobile More dropdown */}
            <div>
              <button
                onClick={toggleMobileMore}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium hover:text-[#fd8f01]"
              >
                More
                {isMobileMoreOpen ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
              </button>
              
              {isMobileMoreOpen && (
                <div className="pl-4 space-y-1">
                  <Link 
                    to="/blog" 
                    className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#fd8f01]"
                    onClick={closeMenu}
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/referral-program" 
                    className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#fd8f01]"
                    onClick={closeMenu}
                  >
                    Refer a Mate
                  </Link>
                  <Link 
                    to="/free-websites" 
                    className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#fd8f01]"
                    onClick={closeMenu}
                  >
                    Free Websites
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#fd8f01]"
              onClick={closeMenu}
            >
              Contact
            </Link>
            
            <a 
              href="https://wa.me/+447424163547" 
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