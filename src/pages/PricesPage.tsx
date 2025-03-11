import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Clock, Wrench } from 'lucide-react';
import SEO from '../components/SEO';

const PricesPage = () => {
  // Custom WhatsApp icon component
  const WhatsAppIcon = ({ size = 24, className = "" }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
      <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
    </svg>
  );

  // Hammer icon component
  const Hammer = ({ size = 24, className = "" }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
      <path d="M17.64 15 22 10.64" />
      <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Tradesperson Website Pricing | One-time Payment, No Subscriptions"
        description="Affordable website packages for tradespeople with one-time payment options. No monthly subscriptions or hidden fees. Compare our pricing with other web agencies."
        keywords="tradesperson website cost, builder website pricing, plumber website package, electrician website price, one-time website payment"
        canonicalUrl="https://gettradesonline.com/prices"
      />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Built Specifically For Tradespeople</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Everything you need to dominate your local market online - designed exclusively for trades.
            </p>
          </div>
          
          {/* Hero Package Section */}
          <div className="flex justify-center mb-8 md:mb-16 pt-8 px-4 md:px-0">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-4 md:p-8 rounded-xl shadow-xl border border-slate-700 hover:shadow-2xl transition-shadow relative w-full max-w-5xl mx-auto">
              <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-[#fd8f01]/10 rounded-full blur-3xl -mr-16 md:-mr-32 -mt-16 md:-mt-32"></div>
              
              <div className="absolute -top-4 left-4 md:left-6 bg-[#fd8f01] text-white py-2 px-4 md:px-6 rounded-full font-medium transform -rotate-2 z-20 shadow-lg text-sm md:text-base">
                Complete Trade Website Package
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 mt-6">
                {/* Main Features - 8 columns */}
                <div className="lg:col-span-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Your Complete Website Solution</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                    {/* Website & Online Presence */}
                    <div className="bg-slate-800/50 p-4 md:p-6 rounded-lg backdrop-blur-sm">
                      <h4 className="flex items-center text-white font-semibold mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#fd8f01] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Professional Website
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="text-[#fd8f01] h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">5-8 page custom website built for your trade</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-[#fd8f01] h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">Mobile-friendly design that looks great everywhere</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-[#fd8f01] h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">Project gallery to showcase your best work</span>
                        </li>
                      </ul>
                    </div>

                    {/* Marketing & Growth */}
                    <div className="bg-slate-800/50 p-4 md:p-6 rounded-lg backdrop-blur-sm">
                      <h4 className="flex items-center text-white font-semibold mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#fd8f01] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        Local Marketing
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="text-[#fd8f01] h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">Google Business Profile setup & optimization</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-[#fd8f01] h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">Local SEO to rank in your service area</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-[#fd8f01] h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">Listed on major trade directories</span>
                        </li>
                      </ul>
                    </div>

                    {/* Business Support */}
                    <div className="bg-slate-800/50 p-4 md:p-6 rounded-lg backdrop-blur-sm">
                      <h4 className="flex items-center text-white font-semibold mb-4">
                        <WhatsAppIcon className="h-5 w-5 text-[#fd8f01] mr-2" />
                        Ongoing Support
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="text-[#fd8f01] h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">WhatsApp support for quick changes</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-[#fd8f01] h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">Monthly performance check-ins</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-[#fd8f01] h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">Regular updates & improvements</span>
                        </li>
                      </ul>
                    </div>

                    {/* Additional Benefits */}
                    <div className="bg-slate-800/50 p-4 md:p-6 rounded-lg backdrop-blur-sm">
                      <h4 className="flex items-center text-white font-semibold mb-4">
                        <Hammer className="h-5 w-5 text-[#fd8f01] mr-2" />
                        Extra Benefits
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="text-[#fd8f01] h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">Free logo design included</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-[#fd8f01] h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">Social media integration</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-[#fd8f01] h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">Customer review system</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#fd8f01]/10 p-2 rounded-lg">
                        <Clock className="h-6 w-6 text-[#fd8f01]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Quick Launch</h4>
                        <p className="text-gray-300 text-sm">Live in 2-3 days</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="bg-[#fd8f01]/10 p-2 rounded-lg">
                        <Check className="h-6 w-6 text-[#fd8f01]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">No Hidden Fees</h4>
                        <p className="text-gray-300 text-sm">Clear, simple pricing</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="bg-[#fd8f01]/10 p-2 rounded-lg">
                        <Hammer className="h-6 w-6 text-[#fd8f01]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Trade Focused</h4>
                        <p className="text-gray-300 text-sm">Built for your business</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing Section - 4 columns */}
                <div className="lg:col-span-4">
                  <div className="bg-slate-900/50 p-4 md:p-6 rounded-lg backdrop-blur-sm sticky top-4">
                    <div className="text-center mb-6">
                      <p className="text-4xl font-bold text-white">£500</p>
                      <p className="text-lg text-gray-300">one-time payment</p>
                      <div className="mt-2 pt-2 border-t border-slate-700">
                        <p className="text-gray-300">+ £30/month maintenance</p>
                        <p className="text-sm text-gray-400">Total: £860 first year</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <Link 
                        to="/get-started" 
                        className="w-full block text-center bg-[#fd8f01] hover:bg-[#e68101] text-white py-3 px-6 rounded-md font-medium transition-colors duration-300"
                      >
                        Start Your Journey
                      </Link>
                      
                      <div className="text-center">
                        <p className="text-sm text-gray-400">
                          No long-term contracts
                          <br />
                          Cancel maintenance anytime
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Monthly Maintenance Section */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-8 mb-16 border border-gray-100">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-8 w-6 sm:w-8 text-[#fd8f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800">Monthly Maintenance & Support</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <div>
                <div className="bg-slate-50 p-4 sm:p-6 rounded-lg">
                  <p className="text-2xl sm:text-3xl font-bold text-[#fd8f01] mb-1 sm:mb-2">£30</p>
                  <p className="text-base sm:text-lg text-slate-700 mb-3 sm:mb-4">per month</p>
                  <div className="bg-white p-3 sm:p-4 rounded-md mb-3 sm:mb-4">
                    <p className="text-sm text-gray-600">First Year Total:</p>
                    <p className="text-base sm:text-lg font-bold text-slate-800">£360</p>
                    <p className="text-xs text-gray-500">(£30 × 12 months)</p>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Small content updates and changes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Regular maintenance and updates</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Technical support when needed</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                      <span className="text-gray-700">You own the code - always</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Easy WhatsApp communication for all changes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Weekly check-ins with performance stats</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-slate-50 p-4 sm:p-6 rounded-lg">
                  <h4 className="font-bold text-base sm:text-lg text-slate-800 mb-3 sm:mb-4">Why Choose Our Maintenance Plan?</h4>
                  <div className="bg-white p-3 sm:p-4 rounded-md mb-3 sm:mb-4">
                    <p className="text-sm text-gray-600">Package Totals (First Year):</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Completely Flat Out:</span>
                        <span className="font-bold">£860</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                      <span className="text-gray-700">No large hosting fees</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Regular updates keep your site fresh</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Peace of mind with ongoing support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Your website stays competitive</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Weekly performance reports via WhatsApp</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Quick response to all your requests</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Costs Section */}
          <div className="bg-gray-50 rounded-lg p-4 sm:p-8 mb-16">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2 sm:mb-3">Additional Services</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">Take your online presence to the next level with our premium add-ons</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="bg-[#fd8f01]/10 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#fd8f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-800">Business Growth Services</h4>
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6">
                  Enhance your online presence and streamline your business operations with our additional services.
                </p>
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-slate-800 mb-2">Google My Business Management</h5>
                        <p className="text-gray-600 mb-3">Professional management of your Google Business Profile, including review monitoring and optimization.</p>
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold text-[#fd8f01]">£50/month</p>
                          <Link 
                            to="/services/google-business-management"
                            className="text-sm font-medium text-slate-700 hover:text-[#fd8f01] flex items-center gap-1 group"
                          >
                            Learn More
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-50 p-3 rounded-lg group-hover:bg-purple-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-slate-800 mb-2">AI Call Handling</h5>
                        <p className="text-gray-600 mb-3">Never miss a call with our AI-powered call handling system that manages inquiries 24/7.</p>
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold text-[#fd8f01]">£40/month</p>
                          <Link 
                            to="/services/ai-call-handling"
                            className="text-sm font-medium text-slate-700 hover:text-[#fd8f01] flex items-center gap-1 group"
                          >
                            Learn More
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-50 p-3 rounded-lg group-hover:bg-green-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-slate-800 mb-2">Social Media Management</h5>
                        <p className="text-gray-600 mb-3">Professional management of your social media presence, content creation, and engagement.</p>
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold text-[#fd8f01]">£60/month</p>
                          <Link 
                            to="/services/social-media-management"
                            className="text-sm font-medium text-slate-700 hover:text-[#fd8f01] flex items-center gap-1 group"
                          >
                            Learn More
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="bg-[#fd8f01]/10 p-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#fd8f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-800">Custom Integrations</h4>
                  </div>
                  <div className="bg-[#fd8f01]/5 p-3 sm:p-4 rounded-lg border border-[#fd8f01]/10 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2">
                      <div className="bg-[#fd8f01] rounded-full p-1 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-800 font-medium">Save 10% on all integrations when added during initial website creation!</p>
                        <p className="text-gray-600 text-sm mt-1">While these features can be added at any time, you'll get the best value by including them in your initial build.</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 sm:mb-6">
                    Streamline your business operations with custom integrations and advanced features.
                  </p>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                      <div className="flex items-start gap-4">
                        <div className="bg-teal-50 p-3 rounded-lg group-hover:bg-teal-100 transition-colors">
                          <WhatsAppIcon size={24} className="text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-slate-800 mb-2">Custom WhatsApp Integration</h5>
                          <p className="text-gray-600 mb-3">Advanced AI-powered integration of WhatsApp and Facebook messages with automated responses to ensure your customers are always attended to.</p>
                          <div className="flex flex-col mb-2">
                            <p className="text-sm text-gray-600">Includes:</p>
                            <ul className="text-sm text-gray-600 mt-1 ml-4 list-disc space-y-1">
                              <li>Full AI automations for WhatsApp & Facebook messages</li>
                              <li>Smart response system ensuring no customer is left on read</li>
                              <li>Automated customer updates and follow-ups</li>
                              <li>Seamless handover from AI to human when needed</li>
                            </ul>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-lg font-bold text-[#fd8f01]">£300 upfront</p>
                              <p className="text-sm text-gray-500">+ £150/month</p>
                            </div>
                            <Link 
                              to="/services/whatsapp-integration"
                              className="text-sm font-medium text-slate-700 hover:text-[#fd8f01] flex items-center gap-1 group"
                            >
                              Learn More
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                      <div className="flex items-start gap-4">
                        <div className="bg-indigo-50 p-3 rounded-lg group-hover:bg-indigo-100 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-slate-800 mb-2">Direct Booking System</h5>
                          <p className="text-gray-600 mb-3">Allow customers to book your services directly through your website.</p>
                          <div className="flex items-center justify-between">
                            <p className="text-lg font-bold text-[#fd8f01]">£300 one-time</p>
                            <Link 
                              to="/services/direct-booking"
                              className="text-sm font-medium text-slate-700 hover:text-[#fd8f01] flex items-center gap-1 group"
                            >
                              Learn More
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                      <div className="flex items-start gap-4">
                        <div className="bg-rose-50 p-3 rounded-lg group-hover:bg-rose-100 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-slate-800 mb-2">Online Quote Generator</h5>
                          <p className="text-gray-600 mb-3">Custom quote generation system tailored to your specific services and pricing.</p>
                          <div className="flex items-center justify-between">
                            <p className="text-lg font-bold text-[#fd8f01]">£250 one-time</p>
                            <Link 
                              to="/services/quote-generator"
                              className="text-sm font-medium text-slate-700 hover:text-[#fd8f01] flex items-center gap-1 group"
                            >
                              Learn More
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Custom Upgrades Section - moved from ServicesPage */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 mb-16">
            <div className="bg-slate-800 text-white p-6">
              <div className="flex items-center mb-4">
                <Wrench size={32} className="text-[#fd8f01] mr-3" />
                <h3 className="text-2xl font-bold">Fully Custom Built - Your Vision, Your Website</h3>
              </div>
              <p className="text-lg text-gray-300">
                Every website is built from the ground up based on your exact needs. No templates, no restrictions.
              </p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-2 mr-3">
                    <WhatsAppIcon className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Simple Communication</h4>
                    <p className="text-gray-600">
                      Just describe what you need in plain English. No technical knowledge required.
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
                      We'll talk through your needs in plain English - no tech jargon or upselling.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-3">
                    <Check className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Straightforward Pricing</h4>
                    <p className="text-gray-600">
                      Get a clear price for your custom features with no hidden costs or surprises.
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
                  Have something specific in mind? Advanced features like quote engines and custom integrations are available by agreement.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link 
                    to="/get-started" 
                    className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-medium py-2 px-4 rounded-md transition duration-300"
                  >
                    Fill Out Questionnaire
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Frequently Asked Questions</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-700 mb-2">Do I need to pay for hosting right away?</h4>
                <p className="text-gray-600">
                  No, your website package includes the first month of hosting. After that, its an annual payment.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-slate-700 mb-2">Can I pay in installments?</h4>
                <p className="text-gray-600">
                  Yes, we offer a payment plan where you can split the cost over two monthly payments. Simply mention this on the questionnaire and your account manager will arrange it.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-slate-700 mb-2">How long will it take to build my website?</h4>
                <p className="text-gray-600">
                  Most trade websites are completed within 2-3 Days from the date we receive all your content and information.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-slate-700 mb-2">Do I need to provide my own photos?</h4>
                <p className="text-gray-600">
                  We recommend using your own project photos when possible as they showcase your actual work. However, we can provide stock images to complement your content if needed.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-slate-700 mb-2">Can I request custom features not listed here?</h4>
                <p className="text-gray-600">
                  Absolutely! Our websites are fully custom-built from the ground up. If you need specific features like quote engines or custom software integrations, just mention them in your questionnaire and we'll discuss options and pricing.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-slate-800 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to boost your trade business online?</h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Fill out our quick questionnaire to get started. We'll build you a custom website tailored exactly to your trade business needs.
            </p>
            <Link 
              to="/get-started" 
              className="inline-block bg-[#fd8f01] hover:bg-[#e68101] text-white py-3 px-8 rounded-md font-medium text-lg transition-colors duration-300"
            >
              Start Your Questionnaire
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricesPage; 