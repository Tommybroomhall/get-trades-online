import React from 'react';
import ServiceCard from '../components/ServiceCard';
import MarketResearchSection from '../components/MarketResearchSection';
import PricingSection from '../components/PricingSection';
import { services } from '../data/services';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our No-Nonsense Website Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for trades by someone who's been on site. Everything you need, nothing you don't.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
          
          <div className="mt-16 mb-16">
            <MarketResearchSection />
          </div>
          
          <div className="mt-16">
            <PricingSection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 