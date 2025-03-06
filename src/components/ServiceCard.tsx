import React from 'react';
import { Check } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceFeature {
  text: string;
}

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: ServiceFeature[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, features }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="inline-block p-3 bg-[#fff5e6] rounded-full text-[#fd8f01] mb-4">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
            <span className="text-gray-700">{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;