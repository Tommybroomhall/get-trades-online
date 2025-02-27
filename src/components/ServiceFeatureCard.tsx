import React, { ReactNode } from 'react';

interface ServiceFeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceFeatureCard: React.FC<ServiceFeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="inline-block p-3 bg-[#fff5e6] rounded-full text-[#fd8f01] mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceFeatureCard; 