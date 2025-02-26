import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  link?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ 
  image, 
  title, 
  category, 
  description, 
  link 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-slate-800">{title}</h3>
            <p className="text-blue-600 text-sm">{category}</p>
          </div>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600"
              aria-label={`Visit ${title} website`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;