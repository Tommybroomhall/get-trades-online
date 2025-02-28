import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Search, 
  Smartphone, 
  Zap, 
  Globe, 
  Code, 
  Clock, 
  Hammer,
  BarChart,
  ShoppingCart,
  Check
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import PortfolioCard from '../components/PortfolioCard';
import WhatsAppIcon from '../components/WhatsAppIcon';

const HomePage = () => {
  // Calculate delivery date (today + 3 days)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);
  const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-slate-900 text-white py-20 md:py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(https://res.cloudinary.com/dbmj7rhwt/image/upload/v1740781791/pexels-olly-3760613_lkl32c.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Need a website to keep you busy? <span className="text-[#fd8f01]">You're in the right place.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-300">
              Fill out our quick questionnaire, then chat with your personal account manager via <span className="text-[#25D366] font-bold">WhatsApp</span>. Your site will be live by <span className="text-[#fd8f01] font-semibold">{formattedDeliveryDate}</span>.
            </p>
            
            <div className="bg-slate-800 bg-opacity-70 p-4 rounded-lg mb-8">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <WhatsAppIcon className="text-green-400 mt-1 mr-3 flex-shrink-0" size={20} />
                  <span>Personal account manager to guide you through the entire process</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                  <span>Request changes anytime through our simple questionnaire system</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                  <span>Get real-time progress updates as your site comes to life</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/get-started" 
                className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-8 rounded-md transition duration-300"
              >
                Get Started
              </Link>
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
                "Why do I need a website when I get most of my work through word of mouth?"
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  While word-of-mouth recommendations are valuable, <strong className="text-slate-800">the trades industry is changing rapidly</strong>. Today's customers research online before making decisions, even when referred by a friend.
                </p>
                
                <p className="text-lg text-gray-700 mb-6">
                  <strong className="text-slate-800">Without a website, you're missing pre-qualified leads</strong> who already trust you through recommendation but need to see your professional online presence before making contact.
                </p>

                <div className="bg-slate-800 text-white rounded-lg p-5 mb-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-[#fd8f01] mr-3">87%</span>
                      <p className="text-sm">of customers check a tradesperson's website before hiring - even after a personal recommendation</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-[#fd8f01] mr-3">64%</span>
                      <p className="text-sm">won't consider trades without a professional website, regardless of recommendations</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-[#fd8f01] mr-3">3.2x</span>
                      <p className="text-sm">more leads with a website vs. relying solely on word-of-mouth</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-700">
                  <strong className="text-slate-800 text-xl">Times are changing.</strong> Your competitors are getting online, and customers expect to find you there too.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-bold text-slate-800 mb-4">A builder's website helps you:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span>Show off the work you're most proud of - the jobs where you stepped back and thought "I built that"</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span>Let your happy customers sell for you with reviews that build trust before you even meet</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span>Get enquiries while you're on the tools - no more missing calls or interruptions on site</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span>Look more professional than competitors with just a Facebook page or homemade site</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span>Break free from relying on the same customers - bring in new jobs from people who've never heard of you</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span><strong>Convert those word-of-mouth recommendations</strong> that would otherwise research you online and choose someone else</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Your Personal Website Team, On WhatsApp</h2>
              <p className="text-xl text-gray-600 mb-6">
                Complete our questionnaire to get started, then work with your personal account manager. Need a change? Our streamlined process makes it easy. We'll keep you updated at every step and have your site ready within 72 hours.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                  <span>Custom website ready in just 72 hours</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                  <span>Simple questionnaire to gather all your requirements</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                  <span>Real-time progress updates as we build</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                  <span>Quick changes and updates whenever you need them</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/get-started" 
                  className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-8 rounded-md transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1618090584176-7132b9911657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Tradesperson using digital tablet at construction site" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our essential web solutions for tradespeople. Additional services can be added to your package based on your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Palette size={32} />}
              title="Custom Website Design"
              description="Professional designs built specifically for tradespeople that showcase your work and services. Mobile-friendly and designed to convert visitors into customers."
              link="/services#web-design"
            />
            
            <ServiceCard 
              icon={<Search size={32} />}
              title="Local SEO"
              description="Get found by local customers searching for your trade. We optimize your site to appear in local searches and Google Maps, bringing you qualified leads in your service area."
              link="/services#seo"
            />
            
            <ServiceCard 
              icon={<Code size={32} />}
              title="Ongoing Support"
              description="Hassle-free updates and changes whenever you need them. We handle all the technical maintenance so you can focus on running your business."
              link="/services#support"
            />
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Need Additional Services?</h3>
            <p className="text-gray-700 text-center mb-6">
              We offer premium add-ons including e-commerce, content creation, review management, and digital marketing. Just ask your account manager for details and pricing.
            </p>
            <div className="text-center">
              <Link 
                to="/get-started" 
                className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-8 rounded-md transition duration-300"
              >
                Get Started
              </Link>
            </div>
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

export default HomePage;