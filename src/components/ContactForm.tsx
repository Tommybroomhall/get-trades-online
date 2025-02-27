import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from './WhatsAppIcon';

interface FormData {
  name: string;
  email: string;
  phone: string;
  contactType: string;
  company: string;
  message: string;
}

const ContactForm = ({ detailed = false }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    contactType: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        contactType: '',
        company: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6 text-slate-800">Send Us a Message</h3>
      
      {/* Check if customer is in the right place first */}
      <div className="mb-8 bg-gray-50 p-5 rounded-lg">
        <h4 className="font-bold text-lg text-slate-800 mb-3">Are you in the right place?</h4>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-[#fff5e6] p-1 rounded-full mr-3 mt-1">
              <WhatsAppIcon className="text-[#fd8f01]" size={18} />
            </div>
            <div>
              <p className="font-medium text-gray-800">Existing customer with update request?</p>
              <p className="text-gray-600 text-sm mt-1">Just WhatsApp your account manager directly for the fastest service.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-[#fff5e6] p-1 rounded-full mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#fd8f01]">
                <path d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"></path>
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-800">Want a new website?</p>
              <p className="text-gray-600 text-sm mt-1">Go to <Link to="/get-online" className="text-blue-600 underline">Get Online</Link> for our 48-hour website service.</p>
            </div>
          </div>
        </div>
      </div>
      
      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
          <p className="font-bold">Thank you for your message!</p>
          <p>Tom or a member of the team will get back to you within 24 hours (usually much faster).</p>
        </div>
      )}
      
      {submitError && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
          There was an error sending your message. Please try WhatsApp instead or check back later.
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Smith"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="john@example.com"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number (preferably WhatsApp)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="07123 456789"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="contactType" className="block text-sm font-medium text-gray-700 mb-1">
            What's this about? *
          </label>
          <select
            id="contactType"
            name="contactType"
            value={formData.contactType}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Please select...</option>
            <option value="feedback">Feedback or Suggestion</option>
            <option value="complaint">Issue or Complaint</option>
            <option value="partnership">Business Partnership Opportunity</option>
            <option value="press">Press or Media Inquiry</option>
            <option value="other">Something Else</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Your Company (if applicable)
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your business name"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="How can we help you today?"
          ></textarea>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-8 rounded-md transition duration-300 flex justify-center items-center"
          >
            {isSubmitting ? (
              <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
            ) : null}
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          <div className="flex-1 text-gray-600 text-sm mt-3 md:mt-0 md:ml-4">
            We'll get back to you within 24 hours, but usually much faster.
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-gray-700 font-medium mb-3">Prefer a faster response?</p>
          <a 
            href="https://wa.me/+441234567890" 
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 flex items-center justify-center md:justify-start md:inline-flex"
          >
            <WhatsAppIcon size={20} className="mr-2" />
            <span>WhatsApp Us Instead</span>
          </a>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;