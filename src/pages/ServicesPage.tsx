import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Palette, Code, ShoppingCart, Search, BarChart, MessageSquare } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive website solutions for tradespeople and builders - delivered in 48 hours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Palette size={32} />}
              title="Trade Websites"
              description="Custom websites designed specifically for builders and tradespeople, ready in just 48 hours."
              link="#web-design"
            />
            
            <ServiceCard 
              icon={<Code size={32} />}
              title="Ongoing Support"
              description="We handle all the technical stuff so you can focus on your trade. One payment, then forget about it."
              link="#web-development"
            />
            
            <ServiceCard 
              icon={<ShoppingCart size={32} />}
              title="Online Booking"
              description="Let customers book your services online, even when you're on the tools."
              link="#e-commerce"
            />
            
            <ServiceCard 
              icon={<Search size={32} />}
              title="Local SEO"
              description="Show up when local customers search for trades like yours. We optimize everything for you."
              link="#seo"
            />
            
            <ServiceCard 
              icon={<BarChart size={32} />}
              title="Review Collection"
              description="Automatically collect and display your reviews from Google, Facebook and trade platforms."
              link="#digital-marketing"
            />
            
            <ServiceCard 
              icon={<MessageSquare size={32} />}
              title="WhatsApp Integration"
              description="Let customers contact you directly through WhatsApp for quick communication."
              link="#content-creation"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 