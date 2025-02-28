import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import CaseStudyCard from '../components/CaseStudyCard';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { Link } from 'react-router-dom';
import { Hammer } from 'lucide-react';


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
      {/* Add this new section at the bottom of the HomePage before the closing </div> */}
      <section className="py-16 bg-[#fff5e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <WhatsAppIcon className="text-green-600" size={40} />
                </div>
                
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">Got an idea for your website?</h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Just chat to your account manager. Send photos, explain what you want, and we'll give you a straightforward quote.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    <strong>No tech talk. No complicated forms.</strong> Just tell us what would make your life easier, and we'll sort it.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://wa.me/+447424163547" 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 flex items-center"
                    >
                      <WhatsAppIcon size={20} className="mr-2" />
                      <span>Chat About Your Ideas</span>
                    </a>
                    <Link 
                      to="/get-started" 
                      className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-6 rounded-md transition duration-300"
                    >
                      Start Your Website
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
              <div className="flex items-start">
                <Hammer className="text-[#fd8f01] mr-3 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">
                  <span className="font-semibold">Builder to Builder:</span> We know what it's like on site. You have ideas and no time for complicated tech stuff. That's why we keep it simple.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage; 