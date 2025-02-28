import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Hammer, ChevronRight, CheckCircle2, Clock, ArrowLeft } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

// Define TypeScript types for form data
interface FormData {
  businessName: string;
  tradeName: string;
  phoneNumber: string;
  email: string;
  website: string;
  services: string[];
  areas: string;
  existingReviews: string[];
  photosAvailable: string;
  logoAvailable: string;
  preferredColors: string[];
  additionalInfo: string;
  preferredContact: string;
}

// Define API key from environment variable
declare global {
  interface Window {
    env: {
      REACT_APP_SUPERCHAT_API_KEY: string;
    }
  }
}

const WebsiteQuestionnairePage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    tradeName: '',
    phoneNumber: '',
    email: '',
    website: '',
    services: [],
    areas: '',
    existingReviews: [],
    photosAvailable: 'no',
    logoAvailable: 'no',
    preferredColors: [],
    additionalInfo: '',
    preferredContact: 'whatsapp'
  });
  
  const totalSteps = 4;
  
  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };
  
  const handleCheckboxChange = (field: keyof FormData, value: string) => {
    const currentValues = formData[field] as string[];
    if (currentValues.includes(value)) {
      updateFormData(field, currentValues.filter(item => item !== value));
    } else {
      updateFormData(field, [...currentValues, value]);
    }
  };
  
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  // Superchat integration
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      // Create a formatted message from form data
      const formattedMessage = formatFormDataForSuperchat(formData);
      
      // Open the WhatsApp conversation with the formatted data
      window.open(`https://wa.me/+447424163547?text=${encodeURIComponent(formattedMessage)}`, '_blank');
      
      // This direct API call is commented out because it should ideally be handled by a backend
      // to keep the API key secure. For now, we're using the WhatsApp deep link above.
      /*
      await fetch('https://api.superchat.de/api/v1/messenger/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_SUPERCHAT_API_KEY}`
        },
        body: JSON.stringify({
          recipient: {
            phoneNumber: formData.phoneNumber.replace(/\s+/g, '')
          },
          message: {
            text: formattedMessage
          }
        })
      });
      */
      
      // Wait a moment then redirect to success page
      setTimeout(() => {
        navigate('/thank-you');
      }, 1000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionError('There was an error submitting your form. Please try the WhatsApp button below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Format the form data into a readable message
  const formatFormDataForSuperchat = (data: FormData): string => {
    return `
🏗️ *NEW WEBSITE QUESTIONNAIRE SUBMISSION* 🏗️

*Business Details:*
- Business Name: ${data.businessName}
- Trade: ${data.tradeName}
- Phone: ${data.phoneNumber}
- Email: ${data.email}
- Website: ${data.website || 'None'}

*Services:*
${data.services.length > 0 ? data.services.map(service => `- ${service}`).join('\n') : '- None selected'}

*Service Areas:*
${data.areas || 'Not specified'}

*Review Platforms:*
${data.existingReviews.length > 0 ? data.existingReviews.map(platform => `- ${platform}`).join('\n') : '- None'}

*Assets:*
- Photos Available: ${data.photosAvailable === 'yes' ? '✅' : '❌'}
- Logo Available: ${data.logoAvailable === 'yes' ? '✅' : '❌'}
- Color Preferences: ${data.preferredColors.length > 0 ? data.preferredColors.join(', ') : 'None specified'}

*Additional Information:*
${data.additionalInfo || 'None provided'}

*Preferred Contact Method:*
${data.preferredContact}

This message was sent from the website questionnaire form.
    `;
  };
  
  const serviceOptions = [
    'Plumbing', 'Electrical', 'Building', 'Carpentry', 
    'Painting & Decorating', 'Roofing', 'Landscaping', 
    'Plastering', 'Tiling', 'Flooring', 'Heating & Gas',
    'Windows & Doors', 'Kitchen Fitting', 'Bathroom Fitting',
    'General Handyman', 'Other'
  ];
  
  const reviewPlatformOptions = [
    'Google Reviews', 'Facebook', 'CheckATrade', 'MyBuilder',
    'TrustATrader', 'Yell', 'None yet'
  ];
  
  const colorOptions = [
    'Blue', 'Green', 'Red', 'Orange', 'Black', 
    'Grey', 'Yellow', 'Brown', 'Not sure - you decide'
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center">
          <Link to="/get-online" className="flex items-center text-gray-600 hover:text-[#fd8f01]">
            <ArrowLeft size={20} className="mr-2" />
            <span>Back</span>
          </Link>
        </div>
        
        {/* Header */}
        <div className="bg-white rounded-t-lg shadow-sm p-6 border-b border-gray-200">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Get Your Trade Website Started</h1>
          <p className="text-gray-600">
            Fill out this quick form and we'll have your website ready in 48 hours. 
            Takes less than 5 minutes - perfect for your lunch break.
          </p>
          
          <div className="mt-6 flex items-center text-[#fd8f01]">
            <Clock size={20} className="mr-2" />
            <span className="font-medium">Most trades complete this in under 5 minutes</span>
          </div>
          
          {/* WhatsApp requirement notice */}
          <div className="mt-4 bg-green-50 p-3 rounded-md border border-green-100 flex items-start">
            <WhatsAppIcon className="text-green-500 mt-1 mr-2 flex-shrink-0" size={20} />
            <p className="text-sm text-gray-700">
              <span className="font-bold">WhatsApp Required:</span> This form uses WhatsApp to send your information. Please ensure you have WhatsApp installed on your device.
            </p>
          </div>
          
          {/* Progress indicator */}
          <div className="mt-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm font-medium">{Math.round((currentStep/totalSteps) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-[#fd8f01] h-2.5 rounded-full" 
                style={{ width: `${(currentStep/totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Form content */}
        <form onSubmit={handleSubmit} className="bg-white rounded-b-lg shadow-sm p-6 mb-6">
          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                Tell us about your business
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    What's your business called?
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                    placeholder="e.g. Smith Plumbing & Heating"
                    value={formData.businessName}
                    onChange={(e) => updateFormData('businessName', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    What trade are you in?
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                    value={formData.tradeName}
                    onChange={(e) => updateFormData('tradeName', e.target.value)}
                    required
                  >
                    <option value="">Select your main trade</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your best contact number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                    placeholder="e.g. 07123 456789"
                    value={formData.phoneNumber}
                    onChange={(e) => updateFormData('phoneNumber', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your email address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                    placeholder="e.g. john@smithplumbing.co.uk"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          )}
          
          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                Tell us about your services
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    What services do you offer? (tick all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceOptions.map((service) => (
                      <div key={service} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`service-${service}`}
                          className="h-4 w-4 text-[#fd8f01] focus:ring-[#fd8f01] border-gray-300 rounded"
                          checked={formData.services.includes(service)}
                          onChange={() => handleCheckboxChange('services', service)}
                        />
                        <label htmlFor={`service-${service}`} className="ml-2 text-gray-700">
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    What areas do you serve? (towns, counties or postcodes)
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                    placeholder="e.g. Manchester and surrounding areas, or M1, M2, M3 postcodes"
                    rows={3}
                    value={formData.areas}
                    onChange={(e) => updateFormData('areas', e.target.value)}
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Do you have an existing website? (It's fine if you don't)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                    placeholder="e.g. www.smithplumbing.co.uk (or leave blank)"
                    value={formData.website}
                    onChange={(e) => updateFormData('website', e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}
          
          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                Let's make your website look great
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Do you have reviews on any of these platforms? (tick all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {reviewPlatformOptions.map((platform) => (
                      <div key={platform} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`review-${platform}`}
                          className="h-4 w-4 text-[#fd8f01] focus:ring-[#fd8f01] border-gray-300 rounded"
                          checked={formData.existingReviews.includes(platform)}
                          onChange={() => handleCheckboxChange('existingReviews', platform)}
                        />
                        <label htmlFor={`review-${platform}`} className="ml-2 text-gray-700">
                          {platform}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Do you have photos of your work we can use?
                  </label>
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="photos-yes"
                        name="photos"
                        className="h-4 w-4 text-[#fd8f01] focus:ring-[#fd8f01] border-gray-300"
                        value="yes"
                        checked={formData.photosAvailable === 'yes'}
                        onChange={() => updateFormData('photosAvailable', 'yes')}
                      />
                      <label htmlFor="photos-yes" className="ml-2 text-gray-700">
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="photos-no"
                        name="photos"
                        className="h-4 w-4 text-[#fd8f01] focus:ring-[#fd8f01] border-gray-300"
                        value="no"
                        checked={formData.photosAvailable === 'no'}
                        onChange={() => updateFormData('photosAvailable', 'no')}
                      />
                      <label htmlFor="photos-no" className="ml-2 text-gray-700">
                        No - we can use stock photos
                      </label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Do you have a logo?
                  </label>
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="logo-yes"
                        name="logo"
                        className="h-4 w-4 text-[#fd8f01] focus:ring-[#fd8f01] border-gray-300"
                        value="yes"
                        checked={formData.logoAvailable === 'yes'}
                        onChange={() => updateFormData('logoAvailable', 'yes')}
                      />
                      <label htmlFor="logo-yes" className="ml-2 text-gray-700">
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="logo-no"
                        name="logo"
                        className="h-4 w-4 text-[#fd8f01] focus:ring-[#fd8f01] border-gray-300"
                        value="no"
                        checked={formData.logoAvailable === 'no'}
                        onChange={() => updateFormData('logoAvailable', 'no')}
                      />
                      <label htmlFor="logo-no" className="ml-2 text-gray-700">
                        No - we'll need one
                      </label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Any color preferences for your website? (tick all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {colorOptions.map((color) => (
                      <div key={color} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`color-${color}`}
                          className="h-4 w-4 text-[#fd8f01] focus:ring-[#fd8f01] border-gray-300 rounded"
                          checked={formData.preferredColors.includes(color)}
                          onChange={() => handleCheckboxChange('preferredColors', color)}
                        />
                        <label htmlFor={`color-${color}`} className="ml-2 text-gray-700">
                          {color}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {currentStep === 4 && (
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                Almost done! Just a few final details
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Anything else we should know about your business?
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                    placeholder="Any specific features you need, information about your business, etc."
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={(e) => updateFormData('additionalInfo', e.target.value)}
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    How would you prefer us to contact you?
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="contact-whatsapp"
                        name="contact"
                        className="h-4 w-4 text-[#fd8f01] focus:ring-[#fd8f01] border-gray-300"
                        value="whatsapp"
                        checked={formData.preferredContact === 'whatsapp'}
                        onChange={() => updateFormData('preferredContact', 'whatsapp')}
                      />
                      <label htmlFor="contact-whatsapp" className="ml-2 text-gray-700 flex items-center">
                        <WhatsAppIcon size={16} className="mr-1 text-green-500" />
                        WhatsApp (quickest response)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="contact-phone"
                        name="contact"
                        className="h-4 w-4 text-[#fd8f01] focus:ring-[#fd8f01] border-gray-300"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={() => updateFormData('preferredContact', 'phone')}
                      />
                      <label htmlFor="contact-phone" className="ml-2 text-gray-700">
                        Phone call
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="contact-email"
                        name="contact"
                        className="h-4 w-4 text-[#fd8f01] focus:ring-[#fd8f01] border-gray-300"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={() => updateFormData('preferredContact', 'email')}
                      />
                      <label htmlFor="contact-email" className="ml-2 text-gray-700">
                        Email
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* What Happens Next section - now shown only on the final step */}
              <div className="mt-8 bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">What Happens Next?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  After you submit this form, here's our simple process:
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <WhatsAppIcon className="text-green-500" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">Initial WhatsApp Chat</h3>
                      <p className="text-gray-700">Your dedicated account manager will message you with a few simple questions about your business, including:</p>
                      <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside pl-4">
                        <li>How long have you been in business?</li>
                        <li>Do you have social media accounts we can gather info from?</li>
                        <li>Any existing reviews or content we can use?</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Clock className="text-blue-500" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">Website Development (48 hours)</h3>
                      <p className="text-gray-700">We'll build your site based on your answers and keep you updated via WhatsApp.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#fff5e6] p-2 rounded-full mr-3">
                      <CheckCircle2 className="text-[#fd8f01]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">Review & Launch</h3>
                      <p className="text-gray-700">You'll review your site and we'll make any adjustments before going live.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-md">
                  <div className="flex">
                    <Hammer className="text-[#fd8f01] mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-800">
                      <span className="font-bold">Builder to Builder:</span> We know you're busy on site. That's why we handle everything and keep communication simple through WhatsApp, calls, texts or email - whatever works best for you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#fff5e6] rounded-lg p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-[#fd8f01]" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-800">Almost there!</h3>
                    <p className="mt-1 text-gray-600">
                      Once you submit this form, we'll be in touch within 12 hours to confirm a few details,
                      then your website will be ready in just 48 hours. <strong>Pay once, then we handle everything.</strong>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Show error message if there was an error submitting */}
              {submissionError && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
                  {submissionError}
                </div>
              )}
              
              {/* Information message explaining the WhatsApp process */}
              <div className="mt-8 bg-green-50 p-5 rounded-lg border border-green-100">
                <h3 className="text-lg font-bold text-gray-800 flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={20} />
                  Ready to submit your information
                </h3>
                <p className="mt-2 text-gray-700">
                  We've collected all your information. Click the WhatsApp button below to send it directly to our team. Your message will be pre-filled with all the details you've provided - just hit send when WhatsApp opens!
                </p>
              </div>
            </div>
          )}
          
          {/* Navigation buttons */}
          <div className={`mt-8 ${currentStep > 1 ? 'flex justify-between' : 'text-right'}`}>
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="p-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                disabled={isSubmitting}
                aria-label="Go back to previous step"
              >
                <ArrowLeft size={18} />
              </button>
            )}
            
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-[#fd8f01] hover:bg-[#e68101] text-white rounded-md flex items-center"
              >
                <span>Continue</span>
                <ChevronRight size={20} className="ml-2" />
              </button>
            ) : (
              <div className="space-y-4">
                <a
                  href="https://wa.me/+447424163547"
                  onClick={(e) => {
                    e.preventDefault();
                    // Format the message with the available data
                    const message = formatFormDataForSuperchat(formData);
                    window.open(`https://wa.me/+447424163547?text=${encodeURIComponent(message)}`, '_blank');
                    // Optional: Still navigate to thank you page after opening WhatsApp
                    setTimeout(() => {
                      navigate('/thank-you');
                    }, 1000);
                  }}
                  className="w-full flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium"
                >
                  <WhatsAppIcon size={20} className="mr-2" />
                  Send Information via WhatsApp
                </a>
                <p className="text-center text-gray-500 text-sm">
                  By clicking above, your information will be sent to our team via WhatsApp
                </p>
              </div>
            )}
          </div>
        </form>
        
        {/* Trust symbols */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center">
              <CheckCircle2 className="text-green-500 mr-2" size={20} />
              <span className="font-medium">37 trade websites delivered this month</span>
            </div>
            <div className="flex items-center">
              <WhatsAppIcon className="text-green-500 mr-2" size={20} />
              <span className="font-medium">Average response in 42 minutes</span>
            </div>
            <div className="flex items-center">
              <Clock className="text-[#fd8f01] mr-2" size={20} />
              <span className="font-medium">98% of sites delivered in 48 hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteQuestionnairePage; 