import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="About Get Trades Online | Built by a Tradesperson for Tradespeople"
        description="Learn about Get Trades Online, founded by a former tradesperson who understands the unique website needs of builders, plumbers, and electricians."
        keywords="tradesperson website service, about get trades online, websites for trades, tradesperson-focused web design"
        canonicalUrl="https://gettradesonline.com/about"
      />
      
      {/* Hero Section */}
      <section 
        className="relative bg-slate-900 text-white py-16 md:py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h1>
            <p className="text-xl text-gray-300 mb-6">
              Founded by a carpenter, built for tradespeople who are tired of being ripped off for websites.
            </p>
            <a 
              href="https://wa.me/+447424163547" 
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md transition duration-300 inline-flex items-center"
            >
              <WhatsAppIcon size={20} className="mr-2" />
              <span>Chat With Tom</span>
            </a>
          </div>
        </div>
      </section>

      {/* Founder's Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Why I Started This</h2>
              <p className="text-lg text-gray-700 mb-5">
                <span className="font-bold text-slate-800">I'm Tom Broomhall, a carpenter from Bristol.</span> For 5 years, I've been on the tools, but I've always kept one foot in the tech world too.
              </p>
              <p className="text-lg text-gray-700 mb-5">
                I got fed up watching my mates pay £1000+ deposits to fancy London web agencies who'd just use templates anyway. They'd wait weeks, sit through pointless Zoom calls, and end up with something they could barely update themselves.
              </p>
              <p className="text-lg text-gray-700 mb-5">
                Let's be honest - we don't live in 2009 anymore. These agencies don't care about your business. They have meetings about meetings and charge by the hour.
              </p>
              <p className="text-lg text-gray-700 mb-5">
                As tradespeople, we all know what dayworks is like. <span className="italic">Yawn.</span> You're just their cash cow for two weeks, then they're onto the next one.
              </p>
              <p className="text-lg text-gray-700">
                So I built this service instead - no bullshit, fixed price, WhatsApp support, and everything just works. The way it should be.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Carpenter working in workshop" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How We're Different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No jargon. No hourly billing. No corporate nonsense.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Traditional Web Agencies</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>Hourly billing that adds up quickly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>Multiple meetings with account managers who don't understand trades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>Long wait times - often 6-8 weeks to launch</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>Complicated CMS you need a degree to understand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>Charge extra for every small change</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>Need to schedule a call just to update your phone number</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Get Trades Online (Us)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>One fixed price - no surprises, no hidden fees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Built by someone who's been on the tools and gets it</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>48-hour turnaround from payment to live website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Just WhatsApp your changes - we handle the tech</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>All updates included in your one-time payment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Real person (that's me, Tom) responds to your messages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">No Corporate Bullshit. Just Websites That Work.</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            One fixed price. 48-hour turnaround. Support from a real person who gets trade work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/+447424163547" 
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md transition duration-300 flex items-center"
            >
              <WhatsAppIcon size={20} className="mr-2" />
              <span>Chat With Tom</span>
            </a>
            <Link 
              to="/get-started" 
              className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-8 rounded-md transition duration-300"
            >
              Start Your Website
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;