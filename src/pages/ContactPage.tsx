import React from 'react';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../components/WhatsAppIcon';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Straight-talking support from real tradespeople who understand your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Card for Existing Customers */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Existing Customers
              </h3>
              <p className="text-gray-600 mb-6">
                Already have a website with us? Your account manager is just a WhatsApp message away.
              </p>
              <div className="bg-green-50 p-4 rounded-md mb-6">
                <div className="flex items-center mb-3">
                  <WhatsAppIcon className="text-green-600 mr-2" size={20} />
                  <span className="font-bold text-gray-800">The Quickest Way:</span>
                </div>
                <p className="text-gray-700 mb-3">
                  Just message your account manager directly - you already have their number!
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Need photos added to your gallery? Just send them over.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Want to update your service area? Just let us know.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Any other changes or questions? We're here to help.</span>
                  </li>
                </ul>
              </div>
              <a 
                href="https://wa.me/+447424163547" 
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 flex items-center justify-center w-full"
              >
                <WhatsAppIcon size={20} className="mr-2" />
                <span>Message Your Account Manager</span>
              </a>
            </div>
            
            {/* Card for New Customers */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#fd8f01]">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Need a New Website?
              </h3>
              <p className="text-gray-600 mb-6">
                Ready to boost your trade business with a website that actually brings in jobs?
              </p>
              <div className="bg-[#fff5e6] p-4 rounded-md mb-6">
                <h4 className="font-bold text-gray-800 mb-3">Get Your Website in 48 Hours</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#fd8f01] mr-2">✓</span>
                    <span>One-time setup fee from £500</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fd8f01] mr-2">✓</span>
                    <span>First year hosting included, then just £150/year</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fd8f01] mr-2">✓</span>
                    <span>No tech headaches - we handle everything</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fd8f01] mr-2">✓</span>
                    <span>Built by a tradesperson who gets it</span>
                  </li>
                </ul>
              </div>
              <Link 
                to="/get-online" 
                className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-6 rounded-md transition duration-300 block text-center"
              >
                Start Your Website
              </Link>
            </div>
            
            {/* Card for Other Inquiries */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Other Inquiries
              </h3>
              <p className="text-gray-600 mb-6">
                Have feedback, business inquiries, or other questions? We'd love to hear from you.
              </p>
              <div className="bg-blue-50 p-4 rounded-md mb-6">
                <h4 className="font-bold text-gray-800 mb-3">Direct to the Decision Maker</h4>
                <p className="text-gray-700 mb-3">
                  Your message goes directly to Tom - the founder and decision maker. No customer service team to navigate.
                </p>
                <p className="text-gray-700">
                  Whether you have feedback, a complaint, or want to discuss business opportunities, just fill out the form below.
                </p>
              </div>
              <div className="text-center">
                <a 
                  href="#contact-form" 
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 inline-block"
                >
                  Go to Contact Form
                </a>
              </div>
            </div>
          </div>
          
          {/* Meet Tom Section */}
          <div className="bg-gray-50 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Tom Broomhall" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Meet Tom, Your Contact</h3>
                <p className="text-gray-700 mb-4">
                  I'm a carpenter from Bristol who got fed up with web agencies charging my mates ridiculous prices for template websites. I understand trades because I've been there - on the tools, dealing with clients, managing jobs.
                </p>
                <p className="text-gray-700 mb-4">
                  When you contact us, you're not talking to a customer service rep reading from a script. You're talking to me or one of my small team - all of whom have either worked in trades or have family who do.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://wa.me/+447424163547" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 flex items-center"
                  >
                    <WhatsAppIcon size={18} className="mr-2" />
                    <span>WhatsApp Tom</span>
                  </a>
                  <a 
                    href="mailto:tom@gettradesonline.com" 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                  >
                    Email Tom
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form Section */}
          <div id="contact-form" className="scroll-mt-24">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 