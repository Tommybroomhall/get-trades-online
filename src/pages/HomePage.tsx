import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Search, 
  Smartphone, 
  Zap, 
  Globe, 
  Code, 
  ShoppingCart, 
  BarChart, 
  MessageSquare 
} from 'lucide-react';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ServiceCard from '../components/ServiceCard';
import PortfolioCard from '../components/PortfolioCard';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-slate-900 text-white py-20 md:py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI-Powered Trade Websites <span className="text-blue-400">in 72 Hours</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              100% automated websites with review aggregation, AI chat, and social sync - 
              focus on your trade while we handle your online presence
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300"
              >
                Get a Quote
              </Link>
              <Link 
                to="/portfolio" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold py-3 px-8 rounded-md transition duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build websites that work as hard as you do. Our solutions are designed specifically for tradesmen who want to grow their business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Palette size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Expert Design</h3>
              <p className="text-gray-600">
                Beautiful, professional designs that reflect your trade and attract your ideal customers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">SEO Optimized</h3>
              <p className="text-gray-600">
                Rank higher in local searches so customers can find you when they need your services.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Smartphone size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Mobile-Friendly</h3>
              <p className="text-gray-600">
                Responsive websites that look great and function perfectly on any device.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">AI-Powered Automation</h3>
              <p className="text-gray-600">
                Automatic review imports from Google, Facebook, and trade platforms + 
                social media integration
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Smart Maintenance</h3>
              <p className="text-gray-600">
                Hands-free updates with our trade-specific foundation - 
                we handle security, SEO, and content updates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what tradesmen like you have to say about working with us.
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web solutions tailored specifically for tradesmen and construction professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Palette size={32} />}
              title="Web Design"
              description="Custom website designs that reflect your brand and appeal to your target audience. We focus on creating user-friendly experiences that convert visitors into customers."
              link="/services#web-design"
            />
            
            <ServiceCard 
              icon={<Code size={32} />}
              title="Web Development"
              description="Professional website development with clean code and modern technologies. We build fast, secure, and scalable websites that work flawlessly on all devices."
              link="/services#web-development"
            />
            
            <ServiceCard 
              icon={<ShoppingCart size={32} />}
              title="E-commerce"
              description="Online stores that make it easy for customers to purchase your products or book your services. Secure payment processing and inventory management included."
              link="/services#e-commerce"
            />
            
            <ServiceCard 
              icon={<Search size={32} />}
              title="SEO"
              description="Search engine optimization to help your website rank higher in local searches. We target the keywords your potential customers are using to find services like yours."
              link="/services#seo"
            />
            
            <ServiceCard 
              icon={<BarChart size={32} />}
              title="Digital Marketing"
              description="Comprehensive digital marketing strategies to drive traffic to your website and generate leads. Includes social media, content marketing, and email campaigns."
              link="/services#digital-marketing"
            />
            
            <ServiceCard 
              icon={<MessageSquare size={32} />}
              title="Content Creation"
              description="Professional content writing services to showcase your expertise and improve your SEO. We create engaging content that resonates with your target audience."
              link="/services#content-creation"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Recent Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of the websites we've created for tradesmen just like you.
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
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/portfolio" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 bg-slate-900 text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url(https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business Online?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's build a website that works as hard as you do. Get in touch today for a free consultation.
            </p>
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Contact Us</h2>
              <p className="text-xl text-gray-600 mb-6">
                Have a question or ready to start your project? Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Our Process</h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-3">1</span>
                    <div>
                      <h4 className="font-semibold text-slate-800">Consultation</h4>
                      <p className="text-gray-600">We'll discuss your business goals and website needs.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-3">2</span>
                    <div>
                      <h4 className="font-semibold text-slate-800">Proposal</h4>
                      <p className="text-gray-600">We'll provide a detailed proposal and timeline.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-3">3</span>
                    <div>
                      <h4 className="font-semibold text-slate-800">Design & Development</h4>
                      <p className="text-gray-600">We'll create your website with regular updates.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-3">4</span>
                    <div>
                      <h4 className="font-semibold text-slate-800">Launch</h4>
                      <p className="text-gray-600">Your website goes live with our full support.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;