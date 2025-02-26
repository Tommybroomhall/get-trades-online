import React from 'react';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  popular = false
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
      popular ? 'border-2 border-blue-500 relative' : ''
    }`}>
      {popular && (
        <div className="bg-blue-500 text-white text-sm font-bold py-1 px-4 absolute top-0 right-0 rounded-bl-lg">
          Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-slate-800">{price}</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              ) : (
                <X size={18} className="text-red-500 mt-0.5 mr-2 flex-shrink-0" />
              )}
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
        
        <Link
          to="/contact"
          className={`block w-full py-2 px-4 text-center rounded-md font-medium transition-colors duration-300 ${
            popular
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-slate-800 hover:bg-gray-200'
          }`}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;