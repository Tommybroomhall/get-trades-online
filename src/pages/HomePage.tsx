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
  MessageSquare,
  BarChart,
  ShoppingCart,
  Check
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import PortfolioCard from '../components/PortfolioCard';
import ContactForm from '../components/ContactForm';
import WhatsAppIcon from '../components/WhatsAppIcon';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-slate-900 text-white py-20 md:py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Websites For Builders <span className="text-[#fd8f01]">In 48 Hours</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Get online while you're on the tools. One payment, then we handle everything.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/get-started" 
                className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-8 rounded-md transition duration-300"
              >
                Get Started
              </Link>
              <a 
                href="https://wa.me/+447424163547" 
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md transition duration-300 flex items-center space-x-2"
              >
                <WhatsAppIcon size={20} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Objection Handling Section */}
      <section className="py-12 bg-[#fff5e6]">
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
                  Whilst word-of-mouth recommendations are valuable, a professional website acts as a 24/7 portfolio and booking system. 
                  <strong className="text-slate-800"> When satisfied customers recommend you, the first thing potential clients do is search for you online.</strong>
                </p>
                
                <p className="text-lg text-gray-700">
                  Without a website, you might miss out on these pre-qualified leads who already trust you through recommendation.
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
                    <span>Look more professional than that guy down the road with just a Facebook page or homemade site</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                    <span>Break free from relying on the same customers - bring in new jobs from people who've never heard of you</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Built By Tradesmen, For Tradesmen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our founder was a builder for 15 years. We understand you need a website that works as hard as you do, with no tech headaches.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-[#fff5e6] rounded-full text-[#fd8f01] mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">48-72 Hour Delivery</h3>
              <p className="text-gray-600">
                Your complete website up and running within 3 days - no waiting for weeks.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-[#fff5e6] rounded-full text-[#fd8f01] mb-4">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Local SEO Built-In</h3>
              <p className="text-gray-600">
                Show up when local customers search for your trade - we optimize it all for you.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-[#fff5e6] rounded-full text-[#fd8f01] mb-4">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Automatic Reviews</h3>
              <p className="text-gray-600">
                We pull in your Google, Facebook and CheckaTrade reviews automatically.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-[#fff5e6] rounded-full text-[#fd8f01] mb-4">
                <Smartphone size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Perfect on Mobile</h3>
              <p className="text-gray-600">
                Looks great on phones, tablets and computers - where most of your customers will find you.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-[#fff5e6] rounded-full text-[#fd8f01] mb-4">
                <Hammer size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Builder to Builder</h3>
              <p className="text-gray-600">
                Founded by an ex-builder who understands what your business really needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-[#fff5e6] rounded-full text-[#fd8f01] mb-4">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Simple Pricing</h3>
              <p className="text-gray-600">
                One clear price, no hidden costs, no ongoing maintenance headaches.
              </p>
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
              Simple, transparent pricing. No hidden fees. No surprise bills.
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
          
          {/* Add a new comparison section */}
          <div className="max-w-4xl mx-auto mt-16 bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Why Pay £165/Month When You Can Pay Once?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">The "Big Agency" Way:</h4>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="text-red-500 font-bold text-lg mb-2">£165+VAT/month (first year)</div>
                  <div className="text-red-500 font-bold text-lg mb-4">£65+VAT/month (after first year)</div>
                  <p className="text-gray-700 mb-3">That's <span className="font-bold">£1,980 in year one</span> and <span className="font-bold">£780 every year after</span>.</p>
                  <div className="text-2xl font-bold text-red-600 mt-4 mb-2">5-Year Cost: £5,100+VAT</div>
                  <p className="text-sm text-gray-500">Source: builtfortrades.co.uk (Grow Website package)</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Our Trades-Friendly Way:</h4>
                <div className="bg-white p-5 rounded-lg shadow-sm border-2 border-green-500">
                  <div className="text-green-600 font-bold text-lg mb-2">£500-£750 one-time setup</div>
                  <div className="text-green-600 font-bold text-lg mb-4">+ £150/year maintenance after year one</div>
                  <p className="text-gray-700 mb-3">That's <span className="font-bold">£500-£750 in year one</span> and just <span className="font-bold">£150 every year after</span>.</p>
                  <div className="text-2xl font-bold text-green-600 mt-4 mb-2">5-Year Cost: £1,100-£1,350</div>
                  <p className="text-sm text-gray-700 mt-2">That's less than what they charge for just 8 months!</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-slate-800 text-white p-5 rounded-lg">
              <div className="flex items-start">
                <WhatsAppIcon className="text-green-400 mt-1 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-xl mb-2">Why the yearly fee?</h4>
                  <p className="text-gray-300">
                    The £150/year covers your hosting, domain name, SSL security, and ongoing support. It's like £12.50 a month - less than a few coffees - to make sure your website stays fast, secure, and up-to-date. Unlike agencies charging £65+ monthly, we keep it affordable while still giving you the service you deserve.
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
      {/* Get Online Feature Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-[#fff5e6] p-2 inline-block rounded-lg text-[#fd8f01] mb-4">
                <Hammer size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Get Your Trade Business Online in 48 Hours</h2>
              <p className="text-xl text-gray-600 mb-6">
                Stop losing jobs to competitors who show up online. Our complete website package is designed specifically for builders and tradespeople - with one simple payment.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                  <span>Custom website ready in just 48 hours</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                  <span>Mobile-friendly design that works on all devices</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                  <span>Built to attract local customers searching for your services</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
                  <span>WhatsApp integration for easy customer contact</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/get-online" 
                  className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-8 rounded-md transition duration-300"
                >
                  Learn More
                </Link>
                <a 
                  href="https://wa.me/+447424163547" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md transition duration-300 flex items-center space-x-2"
                >
                  <WhatsAppIcon size={20} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Builder with laptop looking at website" 
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
              icon={<WhatsAppIcon size={32} />}
              title="Content Creation"
              description="Professional content writing services to showcase your expertise and improve your SEO. We create engaging content that resonates with your target audience."
              link="/services#content-creation"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-8 rounded-md transition duration-300"
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
              className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-8 rounded-md transition duration-300"
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
              className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-8 rounded-md transition duration-300"
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

export default HomePage;