import React from 'react';
import { Search, Check, Hammer } from 'lucide-react';

const MarketResearchSection: React.FC = () => {
  return (
    <div className="bg-slate-800 text-white rounded-lg overflow-hidden">
      <div className="p-8">
        <div className="flex items-start mb-6">
          <Search size={36} className="text-[#fd8f01] mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-2xl font-bold mb-3">Deep Market Research For Your Trade</h3>
            <p className="text-lg text-gray-300">
              Your website isn't built from a template. It's crafted based on what actually works for your specific trade.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h4 className="text-xl font-bold mb-3 text-[#fd8f01]">We analyze your competition so you can beat them</h4>
            <p className="text-gray-300 mb-4">
              We research the top-performing builders, plumbers, or electricians in your area and across the UK to see what's working right now.
            </p>
            <ul className="space-y-3">
              {[
                "See what makes your successful competitors stand out",
                "Identify gaps and opportunities they're missing",
                "Apply proven strategies from the best in your trade"
              ].map((text, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-green-400 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-3 text-[#fd8f01]">Get a website that actually brings in jobs</h4>
            <p className="text-gray-300 mb-4">
              Every element on your site is designed to turn visitors into customers who call, message, or book you.
            </p>
            <ul className="space-y-3">
              {[
                "Highlight the services that are most profitable for you",
                "Showcase what makes your work better than the competition",
                "Target the exact type of customers you want to work with"
              ].map((text, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-green-400 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 bg-slate-700 p-6 rounded-md">
          <div className="flex items-start">
            <Hammer className="text-[#fd8f01] mr-3 flex-shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-bold text-xl mb-2">Builder to Builder: The Real Difference</h4>
              <p className="text-gray-300">
                "Most web designers just ask what colors you like. We dig deeper to understand your business, your best customers, and what jobs make you the most money - then we build a site that delivers exactly that."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketResearchSection; 