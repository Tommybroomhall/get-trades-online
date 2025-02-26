import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import CaseStudyCard from '../components/CaseStudyCard';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our showcase of websites we've built for tradesmen and construction professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              title="Johnson Plumbing"
              category="Plumbing Services"
              description="A modern, responsive website for a local plumbing company, featuring online booking and emergency service requests."
              link="#"
            />
            
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              title="Williams Electrical"
              category="Electrical Services"
              description="A clean, professional website for an electrical contractor, highlighting their services and showcasing their completed projects."
              link="#"
            />
            
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              title="Davis Construction"
              category="Construction Company"
              description="A comprehensive website for a construction company, featuring project galleries, testimonials, and service information."
              link="#"
            />
            
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1595844730298-b960ff98fee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              title="Thompson Painting"
              category="Painting Services"
              description="A visually striking website for a painting company, showcasing their portfolio of work with before and after galleries."
              link="#"
            />
            
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1613323593608-abc90fea564f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              title="Wilson HVAC"
              category="HVAC Services"
              description="A user-friendly website for an HVAC company, with service information, online scheduling, and maintenance tips."
              link="#"
            />
            
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1588012886079-6c2a6f692e3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              title="Parker Roofing"
              category="Roofing Contractor"
              description="A reliable website for a roofing contractor, highlighting their services, materials, and previous projects."
              link="#"
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore how our websites have helped tradesmen grow their businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard 
              image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              title="40% Increase in Local Leads"
              client="Johnson Plumbing"
              summary="How a custom website with AI Chat and review aggregation transformed this plumbing business."
              results={[
                "40% increase in qualified leads",
                "200% ROI within first 3 months",
                "Reduced customer service calls by 25%"
              ]}
              link="#"
            />
            
            <CaseStudyCard 
              image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              title="First Page Google Rankings"
              client="Williams Electrical"
              summary="How targeted SEO and content strategies helped this electrician dominate local search."
              results={[
                "First page rankings for 15 target keywords",
                "68% increase in organic traffic",
                "35% increase in quote requests"
              ]}
              link="#"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage; 