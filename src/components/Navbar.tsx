import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Hammer, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Hammer size={32} className="text-blue-500" />
              <span className="text-xl font-bold">TradesCraft Web</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/services" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link to="/portfolio" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Portfolio</Link>
              <Link to="/contact" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Phone size={18} />
            <span className="font-medium">1-800-TRADES-WEB</span>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center space-x-2 px-3 py-2">
              <Phone size={18} />
              <span>1-800-TRADES-WEB</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;