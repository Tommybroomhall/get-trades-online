import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const GetOnlinePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Websites For Builders. No Tech Headaches.</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Get online in 48 hours. One payment, we handle everything.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/+447424163547" target="_blank" rel="noopener noreferrer" 
                 className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 flex items-center space-x-2">
                <WhatsAppIcon size={20} />
                <span>Quick Chat</span>
              </a>
              <Link to="/get-started" className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-6 rounded-md transition duration-300">
                Start Your Website
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics Banner */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800 text-white rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="text-3xl font-bold text-[#fd8f01] mb-1">87%</h3>
                <p className="text-sm">of customers check a tradesperson's website</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#fd8f01] mb-1">64%</h3>
                <p className="text-sm">won't consider trades without a website</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#fd8f01] mb-1">3.2x</h3>
                <p className="text-sm">more leads with a website</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Website Success Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Real Tradespeople. Real Results.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how other builders and tradespeople transformed their business with a professional website.
            </p>
          </div>

          {/* Success Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Story 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12" 
                alt="Johnson Plumbing Website" 
                className="w-full h-48 object-cover"
                loading="lazy"
                width="400"
                height="200"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-800 mb-1">Johnson Plumbing</h3>
                <p className="text-[#fd8f01] font-semibold mb-4">Increased revenue by 40%</p>
                
                <div className="mb-4 text-yellow-500 flex">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                
                <p className="text-gray-700 italic mb-4">
                  "Since launching my website, I've been able to charge premium rates and still stay booked solid. Now I work fewer hours but make more money, giving me more time with my family."
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Dave Johnson</p>
                    <p className="text-sm text-gray-500">Plumber, Leeds</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Story 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e" 
                alt="Williams Electrical Website" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-800 mb-1">Williams Electrical</h3>
                <p className="text-[#fd8f01] font-semibold mb-4">Doubled client base in 6 months</p>
                
                <div className="mb-4 text-yellow-500 flex">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                
                <p className="text-gray-700 italic mb-4">
                  "My professional website set me apart from other sparkies in the area. I can now focus on bigger commercial jobs that pay better and are more interesting. Best business decision I ever made."
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Sarah Williams</p>
                    <p className="text-sm text-gray-500">Electrician, Manchester</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Story 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd" 
                alt="Davis Construction Website" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-800 mb-1">Davis Construction</h3>
                <p className="text-[#fd8f01] font-semibold mb-4">Landed 3 major renovation projects</p>
                
                <div className="mb-4 text-yellow-500 flex">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                
                <p className="text-gray-700 italic mb-4">
                  "Having a professional website gave clients confidence in my company. I'm now taken more seriously and can compete for larger projects against bigger firms. It's completely changed my business image."
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Mark Davis</p>
                    <p className="text-sm text-gray-500">Builder, Birmingham</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Value Proposition */}
          <div className="mt-12 bg-white rounded-lg p-6 shadow-md">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">What a website truly means for your trade</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="text-green-500" size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">More time with family</p>
                      <p className="text-gray-600">Work with better-paying clients and reduce time spent chasing low-value jobs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="text-green-500" size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Professional credibility</p>
                      <p className="text-gray-600">Stand out from competitors and be seen as an established, trustworthy business</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="text-green-500" size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Better work-life balance</p>
                      <p className="text-gray-600">Choose the jobs you want, when you want them</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="md:w-1/2 bg-[#fff5e6] p-5 rounded-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Hear it from an ex-builder:</h3>
                <p className="text-gray-700 mb-4">
                  "I spent 15 years on the tools before moving into websites. The tradespeople who succeed today all have one thing in common - a professional online presence. It's not just about looking good - it's about making your life easier."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Mike Thompson</p>
                    <p className="text-sm text-gray-500">Founder, GetTradesOnline</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              to="/get-started" 
              className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-8 rounded-md transition duration-300 inline-block"
            >
              Get Your Website Started Today
            </Link>
          </div>
        </div>
      </section> 

      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How Your Website Will Transform Your Business</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              It's not just about having a website. It's about the freedom and confidence it brings to your life.
            </p>
            
            <div className="inline-block bg-[#fff5e6] text-[#fd8f01] text-lg font-semibold px-6 py-3 rounded-lg mb-12">
              "As a builder myself for 15 years, I've seen firsthand how a good website changes everything" - Tom, Founder
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-[#fff5e6] p-2 rounded-full mr-4">
                  <Check className="text-[#fd8f01]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Raise Your Prices</h3>
              </div>
              <p className="text-gray-600">
                With consistent leads, you can confidently charge what you're worth without fear of losing work.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-[#fff5e6] p-2 rounded-full mr-4">
                  <Check className="text-[#fd8f01]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Work Less, Earn More</h3>
              </div>
              <p className="text-gray-600">
                Choose better-paying jobs and clients, giving you more time with family while making more money.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-[#fff5e6] p-2 rounded-full mr-4">
                  <Check className="text-[#fd8f01]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Escape the Grind</h3>
              </div>
              <p className="text-gray-600">
                Replace exhausting quote-after-quote cycles with quality leads who already trust you before calling.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-[#fff5e6] p-2 rounded-full mr-4">
                  <Check className="text-[#fd8f01]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Build Real Wealth</h3>
              </div>
              <p className="text-gray-600">
                Shift from a "need the next job" mindset to confidently growing a business that builds lasting wealth.
              </p>
            </div>
          </div>
          
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
                  <p className="text-gray-600 mt-1">One-time setup</p>
                  <p className="text-sm font-medium mt-2">+ £150/year after first year</p>
                  <div className="mt-3 bg-green-50 text-green-700 text-sm p-2 rounded">
                    Save £4,000+ compared to monthly subscriptions
                  </div>
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
                    <span>First year hosting included</span>
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
                  <p className="text-gray-600 mt-1">One-time setup</p>
                  <p className="text-sm font-medium mt-2">+ £150/year after first year</p>
                  <div className="mt-3 bg-green-50 text-green-700 text-sm p-2 rounded">
                    Save £4,000+ compared to monthly subscriptions
                  </div>
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
                    <span>First year hosting included</span>
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
          
          {/* Add a section comparing our pricing to competitors */}
          <div className="max-w-4xl mx-auto mt-12 bg-gray-50 rounded-lg p-6 shadow">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">The Truth About Website Pricing</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full mb-6">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="py-3 text-left"></th>
                    <th className="py-3 text-center">Us</th>
                    <th className="py-3 text-center">Big Web Agencies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">First Year Cost</td>
                    <td className="py-3 text-center font-bold text-green-600">£500-£750 total</td>
                    <td className="py-3 text-center font-bold text-red-600">£1,980+VAT</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">Ongoing Annual Cost</td>
                    <td className="py-3 text-center font-bold text-green-600">£150/year</td>
                    <td className="py-3 text-center font-bold text-red-600">£780/year</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">5-Year Total Cost</td>
                    <td className="py-3 text-center font-bold text-green-600">£1,100-£1,350</td>
                    <td className="py-3 text-center font-bold text-red-600">£5,100+VAT</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">Support Method</td>
                    <td className="py-3 text-center">Direct WhatsApp to Tom</td>
                    <td className="py-3 text-center">Ticket system, call centers</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">Who Makes Changes</td>
                    <td className="py-3 text-center">We do it all for you</td>
                    <td className="py-3 text-center">Often DIY or extra charges</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Built By</td>
                    <td className="py-3 text-center">An actual tradesperson</td>
                    <td className="py-3 text-center">Corporate web designers</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-slate-800 text-white p-5 rounded-lg">
              <div className="flex items-start">
                <WhatsAppIcon className="text-green-400 mt-1 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-xl mb-2">Why pay them £65+VAT monthly when you can pay us £150 yearly?</h4>
                  <p className="text-gray-300">
                    The big agencies are charging you £780 a year (after your first expensive year at £1,980) for the same hosting and support services that we provide for just £150. We can do this because we don't have fancy offices or big marketing budgets - just a straight-talking tradesperson who wants to help other trades get online without being ripped off.
                  </p>
                </div>
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
                href="https://wa.me/+447424163547" 
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
          {/* Additional Benefits Section */}
          <div className="mt-12 bg-slate-50 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center text-slate-800">The Real-Life Impact Our Clients See</h3>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">Real WhatsApp messages from real tradespeople who transformed their businesses</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* First WhatsApp chat */}
              <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                {/* WhatsApp header */}
                <div className="bg-[#128C7E] text-white p-3 flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="Mark" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Mark Edwards</p>
                    <p className="text-xs opacity-80">Electrician, Leeds</p>
                  </div>
                </div>
                
                {/* Chat area */}
                <div className="bg-[#e5ded8] p-3 h-[320px] overflow-y-auto">
                  <div className="flex flex-col space-y-3">
                    {/* Account manager message */}
                    <div className="flex">
                      <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                        <p className="text-gray-800">Hi Mark! Just checking in to see how things are going with your new website. Any feedback so far?</p>
                        <p className="text-xs text-gray-500 text-right mt-1">14:22</p>
                      </div>
                    </div>
                    
                    {/* Client reply */}
                    <div className="flex justify-end">
                      <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] shadow-sm">
                        <p className="text-gray-800">Just wanted to let you know that since the website went live, things have completely changed for me.</p>
                        <p className="text-xs text-gray-500 text-right mt-1">14:45</p>
                      </div>
                    </div>
                    
                    {/* Client continue */}
                    <div className="flex justify-end">
                      <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] shadow-sm">
                        <p className="text-gray-800">I used to work 7 days a week just to keep up with bills. Now I take weekends off with my kids and still make more than before.</p>
                        <p className="text-xs text-gray-500 text-right mt-1">14:46</p>
                      </div>
                    </div>
                    
                    {/* Account manager response */}
                    <div className="flex">
                      <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                        <p className="text-gray-800">That's amazing to hear, Mark! Family time is priceless. Have you been able to be more selective with your jobs?</p>
                        <p className="text-xs text-gray-500 text-right mt-1">14:50</p>
                      </div>
                    </div>
                    
                    {/* Client response */}
                    <div className="flex justify-end">
                      <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] shadow-sm">
                        <p className="text-gray-800">Absolutely! I'm turning down small jobs now and focusing on complete home rewires. The customers from the website are higher quality too.</p>
                        <p className="text-xs text-gray-500 text-right mt-1">15:02</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Date footer */}
                <div className="bg-white p-2 text-center text-xs text-gray-500">
                  Messages from June 14, 2024 • Managed by Emma
                </div>
              </div>
              
              {/* Second WhatsApp chat */}
              <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                {/* WhatsApp header */}
                <div className="bg-[#128C7E] text-white p-3 flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://randomuser.me/api/portraits/women/48.jpg" 
                      alt="Sarah" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Sarah Palmer</p>
                    <p className="text-xs opacity-80">Plumber, Manchester</p>
                  </div>
                </div>
                
                {/* Chat area */}
                <div className="bg-[#e5ded8] p-3 h-[320px] overflow-y-auto">
                  <div className="flex flex-col space-y-3">
                    {/* Client message */}
                    <div className="flex justify-end">
                      <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] shadow-sm">
                        <p className="text-gray-800">Hey Jack, need to update my website with the new bathroom renovation photos. The one I just finished is my best work yet!</p>
                        <p className="text-xs text-gray-500 text-right mt-1">09:15</p>
                      </div>
                    </div>
                    
                    {/* Account manager reply */}
                    <div className="flex">
                      <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                        <p className="text-gray-800">Morning Sarah! Of course, just send them over and I'll add them today. How's business been since your website redesign?</p>
                        <p className="text-xs text-gray-500 text-right mt-1">09:17</p>
                      </div>
                    </div>
                    
                    {/* Client response */}
                    <div className="flex justify-end">
                      <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] shadow-sm">
                        <p className="text-gray-800">It's been incredible honestly. I've stopped chasing small repairs and now focus on full renovations that pay 3x better.</p>
                        <p className="text-xs text-gray-500 text-right mt-1">09:20</p>
                      </div>
                    </div>
                    
                    {/* Client continue */}
                    <div className="flex justify-end">
                      <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] shadow-sm">
                        <p className="text-gray-800">The gallery page you created really sells my work. Customers have already decided they want to hire me before we even speak.</p>
                        <p className="text-xs text-gray-500 text-right mt-1">09:21</p>
                      </div>
                    </div>
                    
                    {/* Account manager response */}
                    <div className="flex">
                      <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                        <p className="text-gray-800">That's exactly what we want to hear! Quality photos + professional website = premium clients. Let me know when you've sent the new photos.</p>
                        <p className="text-xs text-gray-500 text-right mt-1">09:24</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Date footer */}
                <div className="bg-white p-2 text-center text-xs text-gray-500">
                  Messages from May 22, 2024 • Managed by Jack
                </div>
              </div>
              
              {/* Third WhatsApp chat */}
              <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                {/* WhatsApp header */}
                <div className="bg-[#128C7E] text-white p-3 flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://randomuser.me/api/portraits/men/75.jpg" 
                      alt="James" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">James Wilson</p>
                    <p className="text-xs opacity-80">Builder, Birmingham</p>
                  </div>
                </div>
                
                {/* Chat area */}
                <div className="bg-[#e5ded8] p-3 h-[320px] overflow-y-auto">
                  <div className="flex flex-col space-y-3">
                    {/* Account manager message */}
                    <div className="flex">
                      <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                        <p className="text-gray-800">Hey James! I saw your website traffic doubled last month. How's that translating to business for you?</p>
                        <p className="text-xs text-gray-500 text-right mt-1">16:03</p>
                      </div>
                    </div>
                    
                    {/* Client reply */}
                    <div className="flex justify-end">
                      <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] shadow-sm">
                        <p className="text-gray-800">It's been transformative Lisa. I hired my first employee last month!</p>
                        <p className="text-xs text-gray-500 text-right mt-1">16:20</p>
                      </div>
                    </div>
                    
                    {/* Account manager response */}
                    <div className="flex">
                      <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                        <p className="text-gray-800">That's huge news! Congratulations 🎉 What made you decide to take that step?</p>
                        <p className="text-xs text-gray-500 text-right mt-1">16:22</p>
                      </div>
                    </div>
                    
                    {/* Client continue */}
                    <div className="flex justify-end">
                      <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] shadow-sm">
                        <p className="text-gray-800">The consistent work coming in gave me the confidence to expand. I've got more projects than I can handle alone now.</p>
                        <p className="text-xs text-gray-500 text-right mt-1">16:25</p>
                      </div>
                    </div>
                    
                    {/* Client additional */}
                    <div className="flex justify-end">
                      <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] shadow-sm">
                        <p className="text-gray-800">I used to worry about where the next job would come from. Now I'm thinking about how to scale and maybe even open a showroom next year.</p>
                        <p className="text-xs text-gray-500 text-right mt-1">16:26</p>
                      </div>
                    </div>
                    
                    {/* Account manager response */}
                    <div className="flex">
                      <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                        <p className="text-gray-800">From solo builder to showroom owner - that's the journey we love to see! Let me know when you're ready and we can add a showroom page to your site.</p>
                        <p className="text-xs text-gray-500 text-right mt-1">16:30</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Date footer */}
                <div className="bg-white p-2 text-center text-xs text-gray-500">
                  Messages from April 3, 2024 • Managed by Lisa
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">These are real conversations with our clients. See how we can transform your business too.</p>
            <a 
              href="https://wa.me/+447424163547" 
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md transition duration-300 inline-flex items-center space-x-2"
            >
              <WhatsAppIcon size={20} />
              <span>Chat With Us About Your Website</span>
            </a>
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
                  href="https://wa.me/+447424163547" 
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
      
      
      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Your Trade Online?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join hundreds of tradespeople already growing their business with a website that works as hard as they do.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/+447424163547" 
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

      <div className="fixed bottom-0 left-0 right-0 bg-white p-3 shadow-lg z-50 md:hidden">
        <div className="flex justify-between gap-2">
          <a href="https://wa.me/+447424163547" target="_blank" rel="noopener noreferrer" 
             className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center flex-1">
            <WhatsAppIcon size={18} className="mr-1" />
            <span>Chat</span>
          </a>
          <Link to="/get-started" 
             className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-2 px-4 rounded-md flex items-center justify-center flex-1">
            Start Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetOnlinePage; 