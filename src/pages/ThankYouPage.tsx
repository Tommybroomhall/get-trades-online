import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, Hammer } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const ThankYouPage = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-center">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Thank You!</h1>
          <p className="text-xl text-gray-600 mb-6">
            Your website questionnaire has been submitted successfully.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-800 mb-4">What Happens Next?</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 p-2 rounded-full">
                  <WhatsAppIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4 text-left">
                  <h3 className="font-semibold text-gray-800">1. Initial Contact</h3>
                  <p className="text-gray-600">
                    We'll reach out to you via WhatsApp within the next few hours to confirm your details.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4 text-left">
                  <h3 className="font-semibold text-gray-800">2. Website Development</h3>
                  <p className="text-gray-600">
                    Our team will begin building your website immediately, with a 48-hour turnaround.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#fff5e6] p-2 rounded-full">
                  <CheckCircle2 className="h-6 w-6 text-[#fd8f01]" />
                </div>
                <div className="ml-4 text-left">
                  <h3 className="font-semibold text-gray-800">3. Review & Launch</h3>
                  <p className="text-gray-600">
                    You'll review the site and we'll make any adjustments before going live.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-5 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <WhatsAppIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-3 text-left">
                <h3 className="font-bold text-gray-800">Need to share something with us now?</h3>
                <p className="text-gray-700 mb-4">
                  If you have photos, social media links, or other information you'd like to share right away, 
                  you can send it directly to us on WhatsApp.
                </p>
                <a 
                  href="https://wa.me/+447424163547" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  <WhatsAppIcon size={18} className="mr-2" />
                  <span>Message Us on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/" 
              className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
            >
              Return to Homepage
            </Link>
            <Link 
              to="/get-online" 
              className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-medium py-2 px-6 rounded-md transition duration-300"
            >
              Back to Services
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center">
              <Hammer className="text-[#fd8f01] mr-2" size={20} />
              <span className="font-medium">Built by an ex-builder</span>
            </div>
            <div className="flex items-center">
              <Clock className="text-[#fd8f01] mr-2" size={20} />
              <span className="font-medium">48-hour delivery</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="text-[#fd8f01] mr-2" size={20} />
              <span className="font-medium">Pay once, then we handle everything</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage; 