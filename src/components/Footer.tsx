import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Hammer size={24} className="text-blue-500" />
              <span className="text-xl font-bold">TradesCraft Web</span>
            </div>
            <p className="text-gray-300 mb-4">
              Crafting powerful websites for tradesmen that convert visitors into customers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-blue-400">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-blue-400">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400">Web Design</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400">Web Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400">E-commerce</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400">SEO</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400">Digital Marketing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300">1-800-TRADES-WEB</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-300">info@tradescraft.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Builder Street, Construction City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TradesCraft Web. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;