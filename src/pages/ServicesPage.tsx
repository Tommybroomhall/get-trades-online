import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Palette, Code, ShoppingCart, Search, BarChart, MessageSquare, Smartphone, Clock, Hammer, Wrench, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../components/WhatsAppIcon';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our No-Nonsense Website Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for trades by someone who's been on site. Everything you need, nothing you don't.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="inline-block p-3 bg-[#fff5e6] rounded-full text-[#fd8f01] mb-4">
                <Palette size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Professional Design</h3>
              <p className="text-gray-600 mb-4">
                Looks like you spent thousands, but without the price tag. Shows your work in the best possible light so you stand out from the competition.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Mobile-friendly so customers can find you on their phones</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Your trade colors and style - not some generic template</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="inline-block p-3 bg-[#fff5e6] rounded-full text-[#fd8f01] mb-4">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Local SEO That Works</h3>
              <p className="text-gray-600 mb-4">
                When someone searches for a builder in your area, you'll show up. No technical mumbo-jumbo - we handle everything behind the scenes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Optimized for your specific service area postcodes</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Google Business profile setup and optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="inline-block p-3 bg-[#fff5e6] rounded-full text-[#fd8f01] mb-4">
                <Smartphone size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Made For The Van</h3>
              <p className="text-gray-600 mb-4">
                Update your site from the job site. Send us photos of your latest work from your phone, and we'll add them for you.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-700">No computer needed - manage everything from your phone</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Fast loading - even on site with poor signal</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="inline-block p-3 bg-[#fff5e6] rounded-full text-[#fd8f01] mb-4">
                <BarChart size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Competitor-Beating Strategy</h3>
              <p className="text-gray-600 mb-4">
                We research what works best in your specific trade across the UK. Your site isn't just pretty - it's built to convert lookers into bookers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-700">We analyze the top-performing tradespeople in your area</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Focus on what makes customers choose one builder over another</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Highlight what makes your business special and different</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="inline-block p-3 bg-[#fff5e6] rounded-full text-[#fd8f01] mb-4">
                <WhatsAppIcon className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">WhatsApp Integration</h3>
              <p className="text-gray-600 mb-4">
                Customers can message you directly through WhatsApp. No more playing phone tag or missing calls when you're on the tools.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-700">One-click customer contact - no forms to fill</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Handle inquiries when you have a spare moment</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="inline-block p-3 bg-[#fff5e6] rounded-full text-[#fd8f01] mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">48-Hour Delivery</h3>
              <p className="text-gray-600 mb-4">
                Your website up and running in just 48 hours. No lengthy design processes or endless meetings. Just quick results.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-700">From order to live site in 2 days (not weeks)</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Start getting new business right away</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Add this before the Custom Upgrades Section */}
          <div className="bg-slate-800 text-white rounded-lg overflow-hidden mt-16 mb-16">
            <div className="p-8">
              <div className="flex items-start mb-6">
                <Search size={36} className="text-[#fd8f01] mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Deep Market Research For Your Trade</h3>
                  <p className="text-lg text-gray-300">
                    Your website isn't built from a template. It's crafted based on what actually works for your specific trade.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-[#fd8f01]">We analyze your competition so you can beat them</h4>
                  <p className="text-gray-300 mb-4">
                    We research the top-performing builders, plumbers, or electricians in your area and across the UK to see what's working right now.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-green-400 mt-1 mr-3 flex-shrink-0" size={18} />
                      <span>See what makes your successful competitors stand out</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-400 mt-1 mr-3 flex-shrink-0" size={18} />
                      <span>Identify gaps and opportunities they're missing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-400 mt-1 mr-3 flex-shrink-0" size={18} />
                      <span>Apply proven strategies from the best in your trade</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-3 text-[#fd8f01]">Get a website that actually brings in jobs</h4>
                  <p className="text-gray-300 mb-4">
                    Every element on your site is designed to turn visitors into customers who call, message, or book you.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-green-400 mt-1 mr-3 flex-shrink-0" size={18} />
                      <span>Highlight the services that are most profitable for you</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-400 mt-1 mr-3 flex-shrink-0" size={18} />
                      <span>Showcase what makes your work better than the competition</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-400 mt-1 mr-3 flex-shrink-0" size={18} />
                      <span>Target the exact type of customers you want to work with</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 bg-slate-700 p-6 rounded-md">
                <div className="flex items-start">
                  <Hammer className="text-[#fd8f01] mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-xl mb-2">Builder to Builder: The Real Difference</h4>
                    <p className="text-gray-300">
                      "Most web designers just ask what colors you like. We dig deeper to understand your business, your best customers, and what jobs make you the most money - then we build a site that delivers exactly that."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Custom Upgrades Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 mt-12">
            <div className="bg-slate-800 text-white p-6">
              <div className="flex items-center mb-4">
                <Wrench size={32} className="text-[#fd8f01] mr-3" />
                <h3 className="text-2xl font-bold">Custom Upgrades - Just Ask</h3>
              </div>
              <p className="text-lg text-gray-300">
                Got an idea for your website? Need something special? Just ask your account manager.
              </p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-2 mr-3">
                    <WhatsAppIcon className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Send a WhatsApp</h4>
                    <p className="text-gray-600">
                      Just snap some photos or describe what you need. No technical explanation required.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#fff5e6] rounded-full p-2 mr-3">
                    <Hammer className="text-[#fd8f01]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Builder to Builder</h4>
                    <p className="text-gray-600">
                      We'll talk through your idea in plain English - no tech jargon or upselling.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-3">
                    <Check className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Straightforward Quote</h4>
                    <p className="text-gray-600">
                      Get a clear price for your idea with no hidden costs or surprises.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-100 rounded-full p-2 mr-3">
                    <Clock className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Quick Turnaround</h4>
                    <p className="text-gray-600">
                      Most custom features can be added within 24-48 hours of approval.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
                <p className="text-gray-700 font-medium mb-4 sm:mb-0">
                  What could make your life easier on site? Let's make it happen.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://wa.me/+447424163547" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 flex items-center"
                  >
                    <WhatsAppIcon size={18} className="mr-2" />
                    <span>Discuss Your Idea</span>
                  </a>
                  <Link 
                    to="/get-started" 
                    className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-medium py-2 px-4 rounded-md transition duration-300"
                  >
                    Start Your Website
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pricing Section Teaser */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Simple, Straightforward Pricing</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              One-time setup fee, then just £150 per year for hosting and support.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-6">
              <h4 className="font-bold text-xl text-slate-800 mb-3">How Other Agencies Rob Tradespeople</h4>
              <div className="flex items-center justify-between mb-3 border-b pb-3">
                <span className="font-medium">First Year Cost:</span>
                <span className="font-bold text-red-600">£1,980+VAT</span>
              </div>
              <div className="flex items-center justify-between mb-3 border-b pb-3">
                <span className="font-medium">Ongoing Annual Cost:</span>
                <span className="font-bold text-red-600">£780+VAT</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium">5-Year Total Cost:</span>
                <span className="font-bold text-red-600">£5,100+VAT</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Source: builtfortrades.co.uk (Grow Website package)</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-6 border-2 border-green-500">
              <h4 className="font-bold text-xl text-slate-800 mb-3">Our Fair Trades Pricing</h4>
              <div className="flex items-center justify-between mb-3 border-b pb-3">
                <span className="font-medium">One-time Setup:</span>
                <span className="font-bold text-green-600">£500-£750</span>
              </div>
              <div className="flex items-center justify-between mb-3 border-b pb-3">
                <span className="font-medium">Annual Maintenance:</span>
                <span className="font-bold text-green-600">£150/year (after year 1)</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium">5-Year Total Cost:</span>
                <span className="font-bold text-green-600">£1,100-£1,350</span>
              </div>
              <p className="text-gray-700 mt-2 font-medium">Save over £3,750 compared to subscription models</p>
            </div>
            
            <Link 
              to="/get-online" 
              className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-8 rounded-md transition duration-300 inline-block"
            >
              See Detailed Pricing Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 