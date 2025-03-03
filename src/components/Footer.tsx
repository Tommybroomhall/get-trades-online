import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, MessageSquare, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">GetTradesOnline</h3>
            <p className="text-gray-400 mb-4">
              We build professional websites for builders and tradespeople with a 48-hour turnaround. Founded by Tom, a former carpenter from the South West who understands the trades industry firsthand.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#fd8f01]">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#fd8f01]">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#fd8f01]">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#fd8f01]">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#fd8f01]">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#fd8f01]">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#fd8f01]">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-[#fd8f01]">Our Work</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#fd8f01]">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MessageSquare className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={18} />
                <span>WhatsApp: +44 7424 163547</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={18} />
                <span>info@gettradesonline.co.uk</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={18} />
                <span>Based in Bristol, serving tradespeople across the UK</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-4">
              Questions? Send us a message through WhatsApp or our contact form.
            </p>
            <div className="space-y-4">
              <a 
                href="https://wa.me/+447424163547" 
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md w-max transition duration-200"
              >
                <WhatsAppIcon size={20} />
                <span>WhatsApp Us</span>
              </a>
              <Link 
                to="/contact" 
                className="flex items-center space-x-2 bg-[#fd8f01] hover:bg-[#e68101] text-white px-4 py-2 rounded-md w-max transition duration-200"
              >
                <Mail size={20} />
                <span>Contact Form</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} GetTradesOnline. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;