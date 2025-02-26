import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a question or ready to discuss your project? We're here to help!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="text-blue-600 mt-1 mr-4" size={20} />
                    <div>
                      <h4 className="font-semibold text-slate-800">Phone</h4>
                      <p className="text-gray-600">1-800-TRADES-WEB</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-blue-600 mt-1 mr-4" size={20} />
                    <div>
                      <h4 className="font-semibold text-slate-800">Email</h4>
                      <p className="text-gray-600">info@tradescraftweb.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="text-blue-600 mt-1 mr-4" size={20} />
                    <div>
                      <h4 className="font-semibold text-slate-800">Office</h4>
                      <p className="text-gray-600">
                        123 Trade Street<br />
                        Suite 456<br />
                        Craftsville, TR 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm detailed={true} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 