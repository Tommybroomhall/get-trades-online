import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../components/WhatsAppIcon';

const AboutPage = () => {
  return (
    <div>
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
              href="https://wa.me/+441234567890" 
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

      {/* Real Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">From Tradespeople Like You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Actual messages from actual clients. No marketing BS.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First testimonial - WhatsApp style */}
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
              {/* WhatsApp header */}
              <div className="bg-[#128C7E] text-white p-3 flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3">
                  <img 
                    src="https://randomuser.me/api/portraits/men/43.jpg" 
                    alt="Dave" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Dave Wilson</p>
                  <p className="text-xs opacity-80">Electrician, Leeds</p>
                </div>
              </div>
              
              {/* Chat area */}
              <div className="bg-[#e5ded8] p-3 h-[280px] overflow-y-auto">
                <div className="flex flex-col space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-gray-800">Tom mate, website is fantastic. Leagues better than what I paid £2k for last year. Already had 3 calls from it this week!</p>
                      <p className="text-xs text-gray-500 text-right mt-1">09:42</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-gray-800">That's great Dave! Glad it's working for you. Let me know if you want to add those new photos.</p>
                      <p className="text-xs text-gray-500 text-right mt-1">09:45</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-gray-800">Will do. Should have recommended you to my mate sooner instead of watching him waste money with that agency.</p>
                      <p className="text-xs text-gray-500 text-right mt-1">09:49</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-2 text-center text-xs text-gray-500">
                Messages from May 2, 2024
              </div>
            </div>
            
            {/* Second testimonial - WhatsApp style */}
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
              {/* WhatsApp header */}
              <div className="bg-[#128C7E] text-white p-3 flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3">
                  <img 
                    src="https://randomuser.me/api/portraits/women/22.jpg" 
                    alt="Kate" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Kate Murphy</p>
                  <p className="text-xs opacity-80">Painter & Decorator, Manchester</p>
                </div>
              </div>
              
              {/* Chat area */}
              <div className="bg-[#e5ded8] p-3 h-[280px] overflow-y-auto">
                <div className="flex flex-col space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-gray-800">Tom I've got a client who wants to see more kitchen cabinet painting examples. Can we add a new section for that?</p>
                      <p className="text-xs text-gray-500 text-right mt-1">16:24</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-gray-800">Of course! Send over the photos and I'll add a dedicated kitchen cabinet gallery today.</p>
                      <p className="text-xs text-gray-500 text-right mt-1">16:26</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-gray-800">Perfect, you're a lifesaver. So much better than having to learn WordPress like my last site!</p>
                      <p className="text-xs text-gray-500 text-right mt-1">16:30</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-2 text-center text-xs text-gray-500">
                Messages from June 18, 2024
              </div>
            </div>
            
            {/* Third testimonial - WhatsApp style */}
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
              {/* WhatsApp header */}
              <div className="bg-[#128C7E] text-white p-3 flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3">
                  <img 
                    src="https://randomuser.me/api/portraits/men/52.jpg" 
                    alt="Raj" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Raj Singh</p>
                  <p className="text-xs opacity-80">Plumber, Birmingham</p>
                </div>
              </div>
              
              {/* Chat area */}
              <div className="bg-[#e5ded8] p-3 h-[280px] overflow-y-auto">
                <div className="flex flex-col space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-gray-800">Been thinking about this website for 2 years but kept putting it off. Should have done it sooner!</p>
                      <p className="text-xs text-gray-500 text-right mt-1">11:03</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-gray-800">Better late than never! How's it working out for you?</p>
                      <p className="text-xs text-gray-500 text-right mt-1">11:05</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-gray-800">Honestly brilliant. Got my first bathroom refit job through it yesterday. Paid for itself already!</p>
                      <p className="text-xs text-gray-500 text-right mt-1">11:08</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-2 text-center text-xs text-gray-500">
                Messages from April 29, 2024
              </div>
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
              href="https://wa.me/+441234567890" 
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Common Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Straight answers, no jargon.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Do I really get 5 years of hosting included?</h3>
              <p className="text-gray-700">
                Yep, not a typo. Your one-time payment includes 5 years of hosting, domain name, and SSL certificate. No surprise bills or annual fees.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-3">How do I make changes to my website?</h3>
              <p className="text-gray-700">
                Just WhatsApp me. Need new photos added? Text 'em over. Want to change your service area? Just let me know. I'll handle all the technical stuff.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-3">What happens after 5 years?</h3>
              <p className="text-gray-700">
                You'll have the option to renew hosting for a small fee (currently £150 for another 5 years), or take your website elsewhere - I'll help with that too.
              </p>
        </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Can I see examples of websites you've built?</h3>
              <p className="text-gray-700">
                Sure. Check out the <Link to="/portfolio" className="text-blue-600 hover:underline">portfolio page</Link> or just ask me on WhatsApp and I'll send you links to sites for your specific trade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;