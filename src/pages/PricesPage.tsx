import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Clock, Wrench } from 'lucide-react';
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
      <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every website is fully custom-built from the ground up with exactly what you want. No templates, no limitations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Basic Package */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">The Apprentice</h3>
                  <p className="text-gray-600 mt-1">For trade businesses 0-2 years old or just wanting a basic web presence</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-slate-800">£499</p>
                  <p className="text-sm text-gray-500">one-time payment</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-slate-700">What's included:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Mobile-friendly website (3-5 pages)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-700">WhatsApp Support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Local SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Dives Customers into your business</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Photo gallery for your work</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Full in-depth analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Free logo design service</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <Link 
                  to="/get-started" 
                  className="w-full block text-center bg-[#fd8f01] hover:bg-[#e68101] text-white py-3 px-4 rounded-md font-medium transition-colors duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
            
            {/* Premium Package */}
            <div className="bg-slate-800 p-8 rounded-lg shadow-md border border-slate-700 hover:shadow-lg transition-shadow">
              <div className="absolute -mt-12 ml-4 bg-[#fd8f01] text-white py-1 px-4 rounded-full font-medium">
                Most Popular
              </div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Completely Flat Out Package</h3>
                  <p className="text-gray-300 mt-1">For trades ready to go all-in and dominate their local market</p>
                  <p className="text-gray-300 mt-2 text-sm">A website that evolves with your business - never truly finished, always improving</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">£799</p>
                  <p className="text-sm text-gray-300">one-time payment</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-300">Everything in The Apprentice, plus:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-green-400 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Expanded website (5-8 pages)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-400 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Google Business Profile setup & optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-400 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Listing on additional trade platforms & directories</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-400 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Customer testimonial section</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-400 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Social media integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-400 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Enhanced photo/video galleries</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-400 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Focus on perfection with ongoing refinements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-400 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Monthly check-ins to optimize performance</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4 border-t border-slate-700">
                <Link 
                  to="/get-started" 
                  className="w-full block text-center bg-white hover:bg-gray-100 text-slate-800 py-3 px-4 rounded-md font-medium transition-colors duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          
          {/* Additional Costs Section */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Additional Costs</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-slate-700 mb-3">Hosting & Maintenance</h4>
                <p className="text-gray-600 mb-4">
                  All websites require ongoing hosting and maintenance to stay secure and up-to-date.
                </p>
                <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                  <p className="text-slate-800 font-medium">£350/year</p>
                  <p className="text-sm text-gray-500 mt-1">Includes domain name renewal, regular security updates, and SEO updates and a review of the site every year, this also includes the hosting for the year.</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-slate-700 mb-3">Advanced Features</h4>
                <p className="text-gray-600 mb-4">
                  Additional features can be added to your custom website based on your specific needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="text-[#fd8f01] mt-1 mr-2 flex-shrink-0" size={16} />
                    <div>
                      <span className="text-slate-700 font-medium">Quote engine integration</span>
                      <p className="text-sm text-gray-500">Price agreed upon consultation</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-[#fd8f01] mt-1 mr-2 flex-shrink-0" size={16} />
                    <div>
                      <span className="text-slate-700 font-medium">Custom software integrations</span>
                      <p className="text-sm text-gray-500">Price agreed upon consultation</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-[#fd8f01] mt-1 mr-2 flex-shrink-0" size={16} />
                    <div>
                      <span className="text-slate-700 font-medium">E-commerce functionality</span>
                      <p className="text-sm text-gray-500">Starting at £699</p>
                    </div>
                  </li>
                </ul>
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