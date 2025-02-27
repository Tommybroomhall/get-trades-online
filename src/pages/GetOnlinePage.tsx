import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Smartphone, Zap, Search, MessageSquare, Hammer, Check } from 'lucide-react';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ServiceFeatureCard from '../components/ServiceFeatureCard';
import ProcessStep from '../components/ProcessStep';
import WhatsAppIcon from '../components/WhatsAppIcon';

const GetOnlinePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">Websites For Builders. No Tech Headaches.</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Get online in 48 hours while you're on the tools. One payment, then we handle everything.
            </p>
            <p className="text-lg text-[#fd8f01] font-semibold mb-8">
              Built by an ex-builder who understands your business
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://wa.me/+441234567890" 
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md transition duration-300 flex items-center space-x-2"
              >
                <WhatsAppIcon size={20} />
                <span>Quick WhatsApp Chat</span>
              </a>
              <Link 
                to="/get-started" 
                className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-8 rounded-md transition duration-300"
              >
                Start Your Website
              </Link>
            </div>
          </div>
          
          {/* Add trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 mb-10 px-4">
            <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2 shadow-sm">
              <Clock className="text-[#fd8f01] mr-2" size={20} />
              <span className="font-semibold text-gray-700">48 Hour Delivery</span>
            </div>
            <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2 shadow-sm">
              <Smartphone className="text-[#fd8f01] mr-2" size={20} />
              <span className="font-semibold text-gray-700">Works on All Devices</span>
            </div>
            <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2 shadow-sm">
              <Hammer className="text-[#fd8f01] mr-2" size={20} />
              <span className="font-semibold text-gray-700">Builder to Builder</span>
            </div>
          </div>
          
          {/* Website Examples */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12" 
                alt="Plumbing Website Example" 
                className="w-full h-64 object-cover"
              />
              <div className="bg-white p-4 text-center">
                <h3 className="font-bold text-lg">Johnson Plumbing</h3>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e" 
                alt="Electrical Website Example" 
                className="w-full h-64 object-cover"
              />
              <div className="bg-white p-4 text-center">
                <h3 className="font-bold text-lg">Williams Electrical</h3>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd" 
                alt="Construction Website Example" 
                className="w-full h-64 object-cover"
              />
              <div className="bg-white p-4 text-center">
                <h3 className="font-bold text-lg">Davis Construction</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Stand Out Online With Your Website</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In today's digital world, your online presence is essential. We craft websites specifically for tradespeople.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceFeatureCard 
              icon={<Hammer size={32} />}
              title="Built For Trades"
              description="Created specifically for builders and tradespeople, with features you'll actually use."
            />
            <ServiceFeatureCard 
              icon={<Smartphone size={32} />}
              title="Mobile Responsive"
              description="Works perfectly on phones, tablets and computers - where your customers will find you."
            />
            <ServiceFeatureCard 
              icon={<Search size={32} />}
              title="SEO Optimised"
              description="Appears when local customers search for your services on Google."
            />
            <ServiceFeatureCard 
              icon={<Clock size={32} />}
              title="Ready in 48 Hours"
              description="Your complete website live and working in just 2 days."
            />
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why You'll Love Your Website</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Pay once, then get on with your actual job. We handle everything else.
            </p>
            
            <div className="inline-block bg-[#fff5e6] text-[#fd8f01] text-lg font-semibold px-6 py-3 rounded-lg mb-12">
              "As a builder myself for 15 years, I've built this service for what you actually need" - Tom, Founder
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-[#fff5e6] p-2 rounded-full mr-4">
                  <Check className="text-[#fd8f01]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">More Local Jobs</h3>
              </div>
              <p className="text-gray-600">
                Get found by customers in your area looking for exactly what you offer.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-[#fff5e6] p-2 rounded-full mr-4">
                  <Check className="text-[#fd8f01]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Pay & Not Worry</h3>
              </div>
              <p className="text-gray-600">
                No monthly fees, no surprise costs. One payment covers everything for 5 years.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-[#fff5e6] p-2 rounded-full mr-4">
                  <Check className="text-[#fd8f01]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">No Tech Headaches</h3>
              </div>
              <p className="text-gray-600">
                We handle everything technical so you can focus on your real job.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-[#fff5e6] p-2 rounded-full mr-4">
                  <Check className="text-[#fd8f01]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">One Clear Price</h3>
              </div>
              <p className="text-gray-600">
                No hidden costs or surprises. Pay once and we handle everything.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-[#fff5e6] p-2 rounded-full mr-4">
                  <Check className="text-[#fd8f01]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Built by a Builder</h3>
              </div>
              <p className="text-gray-600">
                Our founder was a tradesman for 15 years. He knows what you really need.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Add this after the Benefits Section but before the Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Easy Website Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No complicated logins or tech knowledge needed. Just message your account manager.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Need Website Changes?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Just WhatsApp your account manager with what you need. We handle all the technical work for you.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h4 className="font-bold text-xl text-slate-800 mb-4">How It Works:</h4>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#fd8f01] text-white font-bold mr-3">1</span>
                    <div>
                      <p className="text-gray-700">Message your account manager via WhatsApp</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#fd8f01] text-white font-bold mr-3">2</span>
                    <div>
                      <p className="text-gray-700">Tell us what changes you need</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#fd8f01] text-white font-bold mr-3">3</span>
                    <div>
                      <p className="text-gray-700">We'll make the updates for you</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#fd8f01] text-white font-bold mr-3">4</span>
                    <div>
                      <p className="text-gray-700">Changes live within 24 hours</p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/+441234567890" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md transition duration-300 flex items-center space-x-2"
                >
                  <WhatsAppIcon size={20} />
                  <span>Chat With Us</span>
                </a>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <img 
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Tradesperson messaging on phone" 
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <WhatsAppIcon className="text-green-500" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium mb-1">Need to add new photos?</p>
                    <p className="text-gray-600 text-sm">Just WhatsApp them to me and I'll add them to your gallery by tomorrow.</p>
                    <p className="text-gray-500 text-xs mt-1">Your account manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Choose Your Website Package</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the option that best fits your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* New Business Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform hover:transform hover:scale-105 flex flex-col">
              <div className="bg-[#fd8f01] text-white p-4 text-center">
                <h3 className="text-xl font-bold">New Business Package</h3>
                <p className="text-sm mt-1">For startups and new trades</p>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">£500</span>
                  <p className="text-gray-600 mt-1">One-time payment</p>
                  <p className="text-sm text-blue-600 font-medium mt-2">Or £250 x 2 monthly payments</p>
                </div>
                
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Perfect for new businesses with no online presence</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Simple branding and content creation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Basic local SEO setup</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Mobile-responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>WhatsApp integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Domain name & hosting (5 years)</span>
                  </li>
                </ul>
                
                <Link 
                  to="/get-started" 
                  className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-4 rounded-md transition duration-300 text-center w-full mt-auto"
                >
                  Get Started
                </Link>
              </div>
            </div>
            
            {/* Established Business Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform hover:transform hover:scale-105 flex flex-col">
              <div className="bg-slate-800 text-white p-4 text-center">
                <h3 className="text-xl font-bold">Established Business Package</h3>
                <p className="text-sm mt-1">For existing trades with more content</p>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">£750</span>
                  <p className="text-gray-600 mt-1">One-time payment</p>
                  <p className="text-sm text-blue-600 font-medium mt-2">Or £375 x 2 monthly payments</p>
                </div>
                
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Ideal for established businesses with existing content</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Migration of existing content and reviews</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Advanced local SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Portfolio/gallery of past work</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Review integration from multiple platforms</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Everything in New Business package, plus more</span>
                  </li>
                </ul>
                
                <Link 
                  to="/get-started" 
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 text-center w-full mt-auto"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-10 bg-[#fff5e6] rounded-lg p-5">
            <div className="flex items-start">
              <WhatsAppIcon className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Need a payment plan?</h3>
                <p className="text-gray-700">
                  Both packages can be split into 2 monthly payments. Just drop us a message on WhatsApp after filling out the questionnaire, and we'll sort it out for you.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <a 
                href="https://wa.me/+441234567890" 
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-md transition duration-300 flex items-center space-x-2"
              >
                <WhatsAppIcon size={20} />
                <span>Chat About Payment Options</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Your Trade Online?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join hundreds of tradespeople already growing their business with a website that works as hard as they do.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/+441234567890" 
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md transition duration-300 flex items-center space-x-2"
            >
              <WhatsAppIcon size={20} />
              <span>WhatsApp Us</span>
            </a>
            <Link 
              to="/get-started" 
              className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-8 rounded-md transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetOnlinePage; 