import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { submitTradeApplication, updateTradeStatus, saveTradesLocally, TradeApplication } from '../services/apiService';

interface FormData {
  name: string;
  businessName: string;
  trade: string;
  email: string;
  phone: string;
  postcode: string;
  proofDescription: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

interface Trade {
  name: string;
  claimed: boolean;
  pending: boolean;
}

const WebsiteTradeClaim = () => {
  // Get selected trade from URL parameters
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedTrade = queryParams.get('trade') || '';
  const navigate = useNavigate();
  
  const [tradeOptions, setTradeOptions] = useState<Trade[]>([
    { name: 'Electrical', claimed: false, pending: true },
    { name: 'Plumbing, Heating & Bathroom', claimed: false, pending: false },
    { name: 'Building', claimed: false, pending: false },
    { name: 'Carpentry & Kitchen Fitting', claimed: true, pending: false },
    { name: 'Roofing', claimed: false, pending: false },
    { name: 'Painting & Decorating', claimed: false, pending: true },
    { name: 'Landscaping & Gardening', claimed: false, pending: false },
    { name: 'Plastering', claimed: false, pending: false },
    { name: 'Tiling', claimed: false, pending: false },
    { name: 'Flooring', claimed: false, pending: true },
    { name: 'Paving', claimed: false, pending: false },
    { name: 'Solar Panel Installation', claimed: true, pending: false },
    { name: 'Window Cleaning', claimed: true, pending: false },
    { name: 'Windows & Doors', claimed: false, pending: false },
    { name: 'Locksmith', claimed: false, pending: false },
    { name: 'General Handyman', claimed: false, pending: false },
  ]);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    businessName: '',
    trade: selectedTrade,
    email: '',
    phone: '',
    postcode: '',
    proofDescription: '',
    consent: false
  });
  
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Update form data if selected trade changes
  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      trade: selectedTrade
    }));
  }, [selectedTrade]);
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.businessName.trim()) errors.businessName = "Business name is required";
    if (!formData.trade) errors.trade = "Please select your trade";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.postcode.trim()) errors.postcode = "Postcode is required";
    if (!formData.proofDescription.trim()) errors.proofDescription = "Please describe your proof of trade";
    if (!formData.consent) errors.consent = "You must agree to the terms";
    
    return errors;
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      try {
        // Prepare application data with timestamp
        const applicationData: TradeApplication = {
          ...formData,
          timestamp: Date.now()
        };
        
        // Submit the application to the API
        const applicationSubmitted = await submitTradeApplication(applicationData);
        
        if (applicationSubmitted) {
          // Update the trade status to pending
          await updateTradeStatus(formData.trade, 'pending');
          
          // Update local state
          const updatedTrades = tradeOptions.map(trade => 
            trade.name === formData.trade 
              ? {...trade, pending: true} 
              : trade
          );
          
          setTradeOptions(updatedTrades);
          
          // Save updated trades to localStorage for persistence
          saveTradesLocally(updatedTrades);
          
          setIsSubmitting(false);
          setSubmitSuccess(true);
          
          // Reset form after successful submission
          setFormData({
            name: '',
            businessName: '',
            trade: '',
            email: '',
            phone: '',
            postcode: '',
            proofDescription: '',
            consent: false
          });
          
          // Hide success message after 5 seconds and navigate back
          setTimeout(() => {
            setSubmitSuccess(false);
            navigate('/free-websites');
          }, 5000);
        } else {
          // Handle API submission failure
          setIsSubmitting(false);
          setFormErrors({
            api: "There was a problem submitting your application. Please try again."
          });
        }
      } catch (error) {
        console.error("Error in form submission:", error);
        setIsSubmitting(false);
        setFormErrors({
          api: "There was a problem submitting your application. Please try again."
        });
      }
    } else {
      setFormErrors(errors);
    }
  };
  
  return (
    <div className="bg-white">
      <Helmet>
        <title>Claim Your Free Website | Get Trades Online</title>
      </Helmet>
      <SEO
        title="Claim Your Free Website | Get Trades Online"
        description="Apply for your free trade website with Get Trades Online. Fill out the application form and we'll build your basic custom £3,000 website with free hosting."
        canonicalUrl="/claim-website"
      />
      <StructuredData
        name="Claim Your Free Website | Get Trades Online"
        description="Apply for your free trade website with Get Trades Online. Fill out the application form and we'll build your basic custom £3,000 website with free hosting."
        url="https://gettradesonline.co.uk/claim-website"
      />
      
      {/* Page Header */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Claim Your Free Website
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Complete the application form below to claim your free, basic custom-built website with free hosting. Perfect for tradespeople who need a simple online presence.
            </p>
          </div>
        </div>
      </div>
      
      {/* Application Form Section */}
      <div className="py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-8">
            {submitSuccess ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                <p>Thank you for your application! We'll review your information and get back to you within 7 days if your spot is confirmed.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formErrors.api && (
                    <div className="md:col-span-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                      <p>{formErrors.api}</p>
                    </div>
                  )}
                  
                  <div className="md:col-span-2">
                    <label htmlFor="trade" className="block text-sm font-medium text-gray-700 mb-1">
                      Select Your Trade<span className="text-red-500">*</span>
                    </label>
                    <select
                      id="trade"
                      name="trade"
                      value={formData.trade}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border ${formErrors.trade ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]`}
                    >
                      <option value="">-- Select Your Trade --</option>
                      {tradeOptions
                        .filter(trade => !trade.claimed && !trade.pending)
                        .map((trade, index) => (
                          <option key={index} value={trade.name}>
                            {trade.name}
                          </option>
                        ))
                      }
                    </select>
                    {formErrors.trade && <p className="mt-1 text-sm text-red-500">{formErrors.trade}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]`}
                    />
                    {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="e.g. John's Plumbing Services"
                      className={`w-full px-4 py-2 border ${formErrors.businessName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]`}
                    />
                    {formErrors.businessName && <p className="mt-1 text-sm text-red-500">{formErrors.businessName}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]`}
                    />
                    {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
                      UK Postcode<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="postcode"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border ${formErrors.postcode ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]`}
                    />
                    {formErrors.postcode && <p className="mt-1 text-sm text-red-500">{formErrors.postcode}</p>}
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="proofDescription" className="block text-sm font-medium text-gray-700 mb-1">
                      Proof of Trade Description<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="proofDescription"
                      name="proofDescription"
                      value={formData.proofDescription}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Describe what proof you can provide (e.g., business registration, trade certificates, photos of work, invoices). We'll contact you for verification after your application is submitted."
                      className={`w-full px-4 py-2 border ${formErrors.proofDescription ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]`}
                    />
                    {formErrors.proofDescription && <p className="mt-1 text-sm text-red-500">{formErrors.proofDescription}</p>}
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="consent"
                          name="consent"
                          type="checkbox"
                          checked={formData.consent}
                          onChange={handleInputChange}
                          className="focus:ring-[#fd8f01] h-4 w-4 text-[#fd8f01] border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="consent" className={`font-medium ${formErrors.consent ? 'text-red-500' : 'text-gray-700'}`}>
                          I confirm I am a UK-based tradesperson and agree to the <a href="/free-websites#terms" className="text-blue-600 hover:underline">terms and conditions</a>
                        </label>
                      </div>
                    </div>
                    {formErrors.consent && <p className="mt-1 text-sm text-red-500">{formErrors.consent}</p>}
                  </div>
                </div>
                
                <div className="mt-8 flex space-x-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 py-3 px-4 rounded-md text-white font-medium transition duration-200 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-[#fd8f01] hover:bg-[#e68101]'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/free-websites')}
                    className="py-3 px-4 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition duration-200"
                  >
                    Cancel
                  </button>
                </div>
                
                <div className="mt-6 text-center text-sm text-gray-500">
                  <p>Remember, you must purchase your own domain name separately. Additional premium features will incur extra costs.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteTradeClaim; 