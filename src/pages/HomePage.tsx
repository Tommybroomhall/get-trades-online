import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Search, 
  Code, 
  Hammer,
  Check,
  Star,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const HomePage = () => {
  // Calculate delivery date (today + 3 days)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);
  const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-GB', {
    weekday: 'long'
  });

  return (
    <div>
      <SEO 
        title="Websites for Tradespeople | Get Online in 72 Hours"
        description="Professional websites for builders, plumbers, and electricians. One-time payment, no monthly fees. Get your trade business online with a mobile-friendly website in just 72 hours."
        keywords="tradesperson website, builder website, plumber website, electrician website, one-time payment website, no subscription website"
        canonicalUrl="https://gettradesonline.com/"
      />
      
      <StructuredData
        name="Get Trades Online"
        description="Professional websites for tradespeople. One-time payment, no subscriptions. Get online with a mobile-friendly website in just 72 hours."
        url="https://gettradesonline.com"
        telephone="+447424163547"
        priceRange="£££"
        sameAs={[
          "https://www.facebook.com/gettradesonline",
          "https://www.instagram.com/gettradesonline"
        ]}
      />
      
      {/* Hero Section */}
      <section 
        className="relative bg-slate-900 text-white py-20 md:py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url(https://images.deepai.org/art-image/ef234b93b2104fe6a96c1eff0f44028e/create-image-little-uk-town-from-perspective-of-model.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Need a website to keep you busy? <span className="text-[#fd8f01]" style={{ fontSize: 'calc(1.5rem + 1px)' }}>You're in the right place.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-gray-300">
                <span style={{ fontSize: 'calc(1.25rem + 1px)' }}>Fill out our quick questionnaire</span>, then chat with your personal account manager via <span className="text-[#25D366] font-bold" style={{ fontSize: 'calc(1.25rem + 1px)' }}>WhatsApp</span>. We could get you up and running by <span className="text-[#fd8f01] font-semibold" style={{ fontSize: 'calc(1.25rem + 1px)' }}>{formattedDeliveryDate}</span>.
              </p>
              
              <div className="bg-slate-800 bg-opacity-70 p-4 rounded-lg mb-8">
                <h3 className="text-white text-lg font-semibold mb-3 flex items-center">
                  <WhatsAppIcon className="text-green-400 mr-2 flex-shrink-0" size={22} />
                  <span>All Services Delivered via <span className="text-[#25D366]">WhatsApp</span></span>
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span style={{ fontSize: 'calc(1rem + 1px)' }}>Personal account manager to guide you through the entire process</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span style={{ fontSize: 'calc(1rem + 1px)' }}>Request changes anytime through our simple questionnaire system</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span style={{ fontSize: 'calc(1rem + 1px)' }}>Get real-time progress updates and weekly website stats</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/get-started" 
                  className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-4 px-10 rounded-md transition duration-300 transform hover:scale-105 shadow-lg text-lg md:text-xl relative overflow-hidden group"
                >
                  <span style={{ fontSize: 'calc(1.25rem + 1px)' }}>Get Started</span>
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  <span className="absolute inset-0 bg-white rounded-md opacity-10 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objection Handling Section with Statistics */}
      <section className="py-16 bg-[#fff5e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="bg-[#fd8f01] text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">?</span>
                <span style={{ fontSize: 'calc(1.75rem + 1px)' }}>"Why do I need a website when I get most of my work through word of mouth?"</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  While word-of-mouth recommendations are valuable, <strong className="text-slate-800" style={{ fontSize: 'calc(1.125rem + 1px)' }}>the trades industry is changing rapidly</strong>. Today's customers <span style={{ fontSize: 'calc(1.125rem + 1px)' }}>research online before making decisions</span>, even when referred by a friend.
                </p>
                
                <p className="text-lg text-gray-700 mb-6">
                  <strong className="text-slate-800" style={{ fontSize: 'calc(1.125rem + 1px)' }}>Without a website, you're missing pre-qualified leads</strong> who already trust you through recommendation but need to see your <span style={{ fontSize: 'calc(1.125rem + 1px)' }}>professional online presence</span> before making contact.
                </p>

                <div className="bg-slate-800 text-white rounded-lg p-5 mb-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-[#fd8f01] mr-3" style={{ fontSize: 'calc(1.875rem + 1px)' }}>87%</span>
                      <p className="text-sm" style={{ fontSize: 'calc(0.875rem + 1px)' }}>of customers check a tradesperson's website before hiring - even after a personal recommendation</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-[#fd8f01] mr-3" style={{ fontSize: 'calc(1.875rem + 1px)' }}>64%</span>
                      <p className="text-sm" style={{ fontSize: 'calc(0.875rem + 1px)' }}>won't consider trades without a professional website, regardless of recommendations</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-[#fd8f01] mr-3" style={{ fontSize: 'calc(1.875rem + 1px)' }}>3.2x</span>
                      <p className="text-sm" style={{ fontSize: 'calc(0.875rem + 1px)' }}>more leads with a website vs. relying solely on word-of-mouth</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-700">
                  <strong className="text-slate-800 text-xl" style={{ fontSize: 'calc(1.25rem + 1px)' }}>Times are changing.</strong> Your competitors are getting online, and <span style={{ fontSize: 'calc(1.125rem + 1px)' }}>customers expect to find you there too</span>.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-bold text-slate-800 mb-4" style={{ fontSize: 'calc(1.25rem + 1px)' }}>A builder's website helps you:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span style={{ fontSize: 'calc(1rem + 1px)' }}>Show off the work you're most proud of - the jobs where you stepped back and thought "I built that"</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span style={{ fontSize: 'calc(1rem + 1px)' }}>Let your happy customers sell for you with reviews that build trust before you even meet</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span style={{ fontSize: 'calc(1rem + 1px)' }}>Get enquiries while you're on the tools - no more missing calls or interruptions on site</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span style={{ fontSize: 'calc(1rem + 1px)' }}>Look more professional than competitors with just a Facebook page or homemade site</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span style={{ fontSize: 'calc(1rem + 1px)' }}>Break free from relying on the same customers - bring in new jobs from people who've never heard of you</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span><strong style={{ fontSize: 'calc(1rem + 1px)' }}>Convert those word-of-mouth recommendations</strong> that would otherwise research you online and choose someone else</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Online Feature Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-[#fff5e6] p-2 inline-block rounded-lg text-[#fd8f01] mb-4">
                <Hammer size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4" style={{ fontSize: 'calc(2rem + 1px)' }}>Your Personal Website Team, On WhatsApp</h2>
              <p className="text-xl text-gray-600 mb-6">
               <span className="text-[#25D366] font-bold">WhatsApp</span>. Need a change? <span style={{ fontSize: 'calc(1.25rem + 1px)' }}>Just send a quick message</span>. All website updates are handled with a simple text - no complicated forms or technical knowledge needed. We'll keep you updated at every step and have your site ready within <strong style={{ fontSize: 'calc(1.25rem + 1px)' }}>3 days</strong>.
              </p>
              
              <div className="bg-gray-50 p-5 rounded-lg mb-8">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center">
                  <WhatsAppIcon className="text-green-400 mr-2 flex-shrink-0" size={22} />
                  <span style={{ fontSize: 'calc(1.125rem + 1px)' }}>Everything managed through WhatsApp:</span>
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span style={{ fontSize: 'calc(1rem + 1px)' }}>Custom website ready in around 3 days with progress updates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span style={{ fontSize: 'calc(1rem + 1px)' }}>Make changes with just a quick message - no complicated forms</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span style={{ fontSize: 'calc(1rem + 1px)' }}>Receive weekly performance stats and visitor analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span style={{ fontSize: 'calc(1rem + 1px)' }}>24/7 assistance and technical support from your personal team</span>
                  </li>
                </ul>
              </div>
              
              
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="w-full h-full bg-gray-50 rounded-lg shadow-md p-6 border border-gray-300" 
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dbmj7rhwt/image/upload/v1740877163/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21_x3ed31.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* WhatsApp inspired header */}
                <div className="bg-[#25D366] text-white p-3 rounded-t-lg -mt-6 -mx-6 mb-4 flex items-center shadow-md">
                  <WhatsAppIcon className="mr-2" size={24} />
                  <div>
                    <h3 className="font-bold">Your Personal Website Team</h3>
                    <p className="text-xs text-white text-opacity-90">Online now - Message anytime</p>
                  </div>
                </div>
                
                <h3 className="text-center text-xl font-bold text-slate-800 mb-4 bg-white bg-opacity-80 py-2 rounded-lg">See How Easy It Is To Update Your Website</h3>
                
                {/* Chat conversation */}
                <div className="flex flex-col gap-4">
                  {/* First chat bubble - tradesperson request */}
                  <div 
                    className="bg-white p-4 rounded-lg shadow-lg max-w-xs self-end transform transition-transform duration-500 ease-in-out hover:scale-105"
                    style={{ 
                      animationName: 'slideInRight',
                      animationDuration: '0.5s',
                      animationTimingFunction: 'ease-out',
                      animationFillMode: 'both'
                    }}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-2">JB</div>
                      <div>
                        <p className="font-bold text-sm">John Builder</p>
                        <p className="text-xs text-gray-500">Today, 10:15 AM</p>
                      </div>
                    </div>
                    <p className="text-sm mb-2">Hi, I'd like to add a new kitchen renovation service to my website. Can you help me with that?</p>
                  </div>
                  
                  {/* Second chat bubble - response */}
                  <div 
                    className="bg-green-50 p-4 rounded-lg shadow-lg max-w-xs self-start transform transition-transform duration-500 ease-in-out hover:scale-105"
                    style={{ 
                      animationName: 'slideInRight',
                      animationDuration: '0.5s',
                      animationTimingFunction: 'ease-out',
                      animationDelay: '0.7s',
                      animationFillMode: 'both'
                    }}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full mr-2 overflow-hidden">
                        <img 
                          src="https://res.cloudinary.com/dbmj7rhwt/image/upload/v1740875969/436498359_122096960582290069_3053565152688399100_n_yzsbey.jpg" 
                          alt="Get Trades Online WhatsApp profile" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-sm">Get Trades Online</p>
                        <p className="text-xs text-gray-500">Today, 10:18 AM</p>
                      </div>
                    </div>
                    <p className="text-sm mb-2">Great idea, John! We've researched kitchen renovation services in your area and attached some price guides so you don't underquote. We'll have the changes live within 24 hours.</p>
                    <div className="bg-white p-2 rounded text-xs flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                      <span>Kitchen_Pricing_Guide.pdf</span>
                    </div>
                  </div>

                  {/* Third chat bubble - builder response */}
                  <div 
                    className="bg-white p-4 rounded-lg shadow-lg max-w-xs self-end transform transition-transform duration-500 ease-in-out hover:scale-105"
                    style={{ 
                      animationName: 'slideInRight',
                      animationDuration: '0.5s',
                      animationTimingFunction: 'ease-out',
                      animationDelay: '1.4s',
                      animationFillMode: 'both'
                    }}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-2">JB</div>
                      <div>
                        <p className="font-bold text-sm">John Builder</p>
                        <p className="text-xs text-gray-500">Today, 10:25 AM</p>
                      </div>
                    </div>
                    <p className="text-sm mb-2">That's fantastic! Here are some photos of our latest kitchen project - could you add these to the new section?</p>
                  </div>

                  {/* Image message from builder - now with multiple images */}
                  <div 
                    className="bg-white p-4 rounded-lg shadow-lg max-w-xs self-end transform transition-transform duration-500 ease-in-out hover:scale-105"
                    style={{ 
                      animationName: 'slideInRight',
                      animationDuration: '0.5s',
                      animationTimingFunction: 'ease-out',
                      animationDelay: '1.9s',
                      animationFillMode: 'both'
                    }}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-2">JB</div>
                      <div>
                        <p className="font-bold text-sm">John Builder</p>
                        <p className="text-xs text-gray-500">Today, 10:26 AM</p>
                      </div>
                    </div>
                    
                    {/* Gallery-style layout for multiple images */}
                    <div className="space-y-1">
                      {/* Main larger image */}
                      <div className="rounded-lg overflow-hidden">
                        <img 
                          src="https://res.cloudinary.com/dbmj7rhwt/image/upload/v1740878505/620f901a2f6b3-1645187098_tevmye.jpg" 
                          alt="Kitchen renovation main view" 
                          className="w-full h-auto"
                        />
                      </div>
                      
                      {/* Row of smaller images */}
                      <div className="flex space-x-1">
                        <div className="rounded-lg overflow-hidden w-1/2">
                          <img 
                            src="https://res.cloudinary.com/dbmj7rhwt/image/upload/v1740878526/620f901b95c6e-1645187099_oibuu9.jpg" 
                            alt="Kitchen renovation detail 1" 
                            className="w-full h-auto"
                          />
                        </div>
                        <div className="rounded-lg overflow-hidden w-1/2">
                          <img 
                            src="https://res.cloudinary.com/dbmj7rhwt/image/upload/v1740878527/620f901b0d497-1645187099_gketab.jpg" 
                            alt="Kitchen renovation detail 2" 
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Fourth chat bubble - GTO response */}
                  <div 
                    className="bg-green-50 p-4 rounded-lg shadow-lg max-w-xs self-start transform transition-transform duration-500 ease-in-out hover:scale-105"
                    style={{ 
                      animationName: 'slideInRight',
                      animationDuration: '0.5s',
                      animationTimingFunction: 'ease-out',
                      animationDelay: '2.4s',
                      animationFillMode: 'both'
                    }}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full mr-2 overflow-hidden">
                        <img 
                          src="https://res.cloudinary.com/dbmj7rhwt/image/upload/v1740875969/436498359_122096960582290069_3053565152688399100_n_yzsbey.jpg" 
                          alt="Get Trades Online WhatsApp profile" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-sm">Get Trades Online</p>
                        <p className="text-xs text-gray-500">Today, 10:40 AM</p>
                      </div>
                    </div>
                    <p className="text-sm mb-2">Perfect! I've updated your website with the new kitchen renovation service and added those photos to the gallery. The changes are now live. Take a look and let me know what you think!</p>
                    <div className="bg-white p-2 rounded text-xs flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                      </svg>
                      <span className="text-blue-500">https://johnbuilder.co.uk</span>
                    </div>
                  </div>

                  {/* Final thank you message */}
                  <div 
                    className="bg-white p-4 rounded-lg shadow-lg max-w-xs self-end transform transition-transform duration-500 ease-in-out hover:scale-105"
                    style={{ 
                      animationName: 'slideInRight',
                      animationDuration: '0.5s',
                      animationTimingFunction: 'ease-out',
                      animationDelay: '2.9s',
                      animationFillMode: 'both'
                    }}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-2">JB</div>
                      <div>
                        <p className="font-bold text-sm">John Builder</p>
                        <p className="text-xs text-gray-500">Today, 10:45 AM</p>
                      </div>
                    </div>
                    <p className="text-sm mb-2">Wow, that was quick! The new section looks amazing. Thank you so much for your help!</p>
                  </div>
                </div>
              </div>
              
              {/* Add animation keyframes */}
              <style>{`
                @keyframes slideInRight {
                  0% { 
                    opacity: 0;
                    transform: translateX(40px);
                  }
                  100% { 
                    opacity: 1;
                    transform: translateX(0);
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>


      {/* Case Study Section - CustomWoodworx */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-[#fff5e6] p-2 inline-block rounded-lg text-[#fd8f01] mb-4">
              <Star size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Case Study: CustomWoodworx</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we transformed this carpentry business with a stunning website and custom links page
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Modern Website That Showcases Craftsmanship</h3>
              <p className="text-lg text-gray-600 mb-6">
                CustomWoodworx needed a website that would highlight their exceptional carpentry and joinery work. We delivered a responsive, visually stunning site that:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Showcases their portfolio with high-quality project galleries</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Highlights customer testimonials to build trust</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Makes it easy for potential clients to request quotes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Optimized for mobile devices and fast loading times</span>
                </li>
              </ul>
              
              <a 
                href="https://custom-woodworx.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-[#fd8f01] font-semibold hover:text-[#e68101] transition-colors"
              >
                <span>Visit the CustomWoodworx website</span>
                <ExternalLink size={18} className="ml-2" />
              </a>
            </div>
            
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dbmj7rhwt/image/upload/v1740955287/Add_a_heading_rzu0uk.png" 
                alt="CustomWoodworx website on laptop and mobile devices" 
                className="rounded-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-lg hidden md:block">
                <div className="text-sm font-bold text-slate-800">Built & Delivered in</div>
                <div className="text-2xl font-bold text-[#fd8f01]">Just 3 Days</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://res.cloudinary.com/dbmj7rhwt/image/upload/v1740955287/Copy_of_Add_a_heading_lsvg8n.png" 
                alt="CustomWoodworx links page" 
                className="rounded-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#fd8f01] p-3 rounded-lg shadow-lg text-white hidden md:block">
                <div className="text-sm font-bold">Bonus Feature</div>
                <div className="text-2xl font-bold">Custom Links Page</div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Custom Links Page: One Link For Everything</h3>
              <p className="text-lg text-gray-600 mb-6">
                We also created a custom "links" page that works like a personalized Linktree. This gives CustomWoodworx:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">A single, easy-to-share link for social media profiles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Direct access to their portfolio, services, and contact info</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Consistent branding that matches their main website</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Analytics to track which links get the most engagement</span>
                </li>
              </ul>
              
              <a 
                href="https://custom-woodworx.vercel.app/links" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-[#fd8f01] font-semibold hover:text-[#e68101] transition-colors"
              >
                <span>See their custom links page</span>
                <ExternalLink size={18} className="ml-2" />
              </a>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready for a website that sets your trade business apart?</h3>
            <Link 
              to="/contact" 
              className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-8 rounded-md transition duration-300 inline-block"
            >
              Get Your Own Custom Website
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontSize: 'calc(2rem + 1px)' }}>Ready to Grow Your Business Online?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8" style={{ fontSize: 'calc(1.25rem + 1px)' }}>
              Let's build a website that <span style={{ fontSize: 'calc(1.25rem + 1px)' }}>works as hard as you do</span>. Get in touch today for a <span style={{ fontSize: 'calc(1.25rem + 1px)' }}>free consultation</span>.
            </p>
            <Link 
              to="/contact" 
              className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-8 rounded-md transition duration-300"
            >
              <span style={{ fontSize: 'calc(1rem + 1px)' }}>Get Started</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;