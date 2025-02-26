import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudyCardProps {
  image: string;
  title: string;
  client: string;
  summary: string;
  results: string[];
  link: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  image,
  title,
  client,
  summary,
  results,
  link
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-1">{title}</h3>
        <p className="text-blue-600 text-sm mb-3">Client: {client}</p>
        <p className="text-gray-600 mb-4">{summary}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-slate-800 mb-2">Results:</h4>
          <ul className="space-y-1">
            {results.map((result, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-600">{result}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Link 
          to={link} 
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
        >
          View Full Case Study <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;