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
  yearsInBusiness: string;
  services: string[];
  specificServices: string;
  uniqueSellingPoints: string;
  flagshipServices: string;
  pricingModel: string;
  certifications: string;
  serviceProcess: string;
  areas: string;
  existingReviews: string[];
  photosAvailable: string;
  logoAvailable: string;
  preferredColors: string[];
  additionalInfo: string;
  preferredContact: string;
  referralSource: string;
  businessChallenges: string;
  potentialImpact: string;
  advertisingStruggles: string;
  profitableWork: string;
  domainAvailable: string;
  domainName: string;
  websiteStyle: string[];
  competitorWebsites: string;
  callToAction: string;
  contentTone: string;
  specialFeatures: string[];
  testimonialSources: string[];
  socialMedia: string[];
  additionalPages: string;
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
    yearsInBusiness: '',
    services: [],
    specificServices: '',
    uniqueSellingPoints: '',
    flagshipServices: '',
    pricingModel: '',
    certifications: '',
    serviceProcess: '',
    areas: '',
    existingReviews: [],
    photosAvailable: 'no',
    logoAvailable: 'no',
    preferredColors: [],
    additionalInfo: '',
    preferredContact: 'whatsapp',
    referralSource: '',
    businessChallenges: '',
    potentialImpact: '',
    advertisingStruggles: '',
    profitableWork: '',
    domainAvailable: 'no',
    domainName: '',
    websiteStyle: [],
    competitorWebsites: '',
    callToAction: 'phone',
    contentTone: 'conversational',
    specialFeatures: [],
    testimonialSources: [],
    socialMedia: [],
    additionalPages: '',
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
🤖 *AI ASSISTANT PROMPT* 🤖
Please review this website questionnaire submission and identify any missing or incomplete information. Ask follow-up questions for any sections that need more detail, especially regarding services, target audience, and design preferences. Help the customer refine their website requirements.

🏗️ *NEW WEBSITE QUESTIONNAIRE SUBMISSION* 🏗️

*Business Details:*
- Business Name: ${data.businessName}
- Trade: ${data.tradeName}
- Years in Business: ${data.yearsInBusiness}
- Phone: ${data.phoneNumber}
- Email: ${data.email}
- Website: ${data.website || 'None'}

*Services:*
${data.specificServices || 'Not specified'}

*Unique Selling Points:*
${data.uniqueSellingPoints || 'Not specified'}

*Flagship Services:*
${data.flagshipServices || 'Not specified'}

*Pricing Model:*
${data.pricingModel || 'Not specified'}

*Certifications/Qualifications:*
${data.certifications || 'Not specified'}

*Service Process:*
${data.serviceProcess || 'Not specified'}

*Service Areas:*
${data.areas || 'Not specified'}

*Website Design Preferences:*
- Style: ${data.websiteStyle.length > 0 ? data.websiteStyle.join(', ') : 'None specified'}
- Similar Websites: ${data.competitorWebsites || 'None provided'}
- Main Call-to-Action: ${data.callToAction || 'Phone calls'}
- Content Tone: ${data.contentTone || 'Conversational'}
- Desired Features: ${data.specialFeatures.length > 0 ? data.specialFeatures.join(', ') : 'Standard features only'}
- Additional Pages: ${data.additionalPages || 'Standard pages only'}
- Social Media: ${data.socialMedia.length > 0 ? data.socialMedia.join(', ') : 'None provided'}
- Testimonial Sources: ${data.testimonialSources.length > 0 ? data.testimonialSources.join(', ') : 'None provided'}

*Review Platforms:*
${data.testimonialSources.length > 0 ? data.testimonialSources.filter(source => !source.includes('No Testimonials')).map(source => `- ${source}`).join('\n') : '- None'}

*Assets:*
- Photos Available: ${data.photosAvailable === 'yes' ? '✅' : '❌'}${data.photosAvailable === 'yes' ? '\n  ➡️ *Please send your photos via WhatsApp after sending this message*' : ''}
- Logo Available: ${data.logoAvailable === 'yes' ? '✅' : '❌'}
- Domain Available: ${data.domainAvailable === 'yes' ? '✅' : '❌'}
- Domain Name: ${data.domainAvailable === 'yes' ? data.domainName : 'Needs to purchase one'}
- Color Schemes: ${data.preferredColors.length > 0 ? data.preferredColors.join('\n  • ') : 'None specified'}

*Business Growth:*
- Current Challenges: ${data.businessChallenges || 'Not provided'}
- Potential Impact of New Leads: ${data.potentialImpact || 'Not provided'}
- Advertising Struggles: ${data.advertisingStruggles || 'Not provided'}
- Most Profitable Work: ${data.profitableWork || 'Not provided'}

*Additional Information:*
${data.additionalInfo || 'None provided'}

*Referral Source:*
${data.referralSource || 'Not specified'}

*Preferred Contact Method:*
${data.preferredContact}


PLEASE CLICK THE SEND BUTTON TO KEEP GOING ➡️➡️➡️
    `.trim();
  };
  
  const serviceOptions = [
    'Appliance Repair',
    'Bathroom Fitting',
    'Block Paving & Driveways',
    'Bricklaying',
    'Building',
    'Carpentry',
    'Carpet & Upholstery Cleaning',
    'Chimney Sweep',
    'Cleaning Services',
    'Concrete Work',
    'Damp Proofing',
    'Demolition',
    'Drainage',
    'Electrical',
    'Extensions',
    'Fencing',
    'Flat Roofing',
    'Flooring',
    'Gardening',
    'Garage Doors',
    'Groundwork',
    'Guttering',
    'Heating & Gas',
    'Home Security',
    'Insulation',
    'Kitchen Fitting',
    'Landscaping',
    'Locksmith',
    'Loft Conversion',
    'Painting & Decorating',
    'Paving',
    'Pest Control',
    'Plastering',
    'Plumbing',
    'Pressure Washing',
    'Restoration',
    'Roofing',
    'Scaffolding',
    'Screed & Resin Flooring',
    'Septic Tanks',
    'Skip Hire',
    'Solar Panel Installation',
    'Stone Masonry',
    'Tiling',
    'Tree Surgery',
    'Waste Removal',
    'Waterproofing',
    'Window Cleaning',
    'Windows & Doors',
    'General Handyman',
    'Other'
  ];
  
  const colorSchemeOptions = [
    'Modern Blue (Blue + White + Light Grey)',
    'Clean Green (Green + White + Light Grey)',
    'Bold Red (Red + Black + White)',
    'Eye-catching Orange (Orange + Dark Blue + White)',
    'Professional Navy (Navy Blue + Grey + White)',
    'Minimalist Black & White (Black + White + Grey)',
    'Industrial Grey (Dark Grey + Orange + White)',
    'Luxury Gold (Black + Gold + White)',
    'Friendly Teal (Teal + Orange + White)',
    'Approachable Purple (Purple + Light Grey + White)',
    'Earth Tones (Brown + Green + Cream)',
    'Not sure - you decide'
  ];
  
  const websiteStyleOptions = [
    'Modern & Clean', 
    'Bold & Eye-catching', 
    'Traditional & Professional',
    'Minimalist',
    'Industrial/Rugged',
    'Luxury/High-end',
    'Friendly & Approachable',
    'Not sure - you decide'
  ];
  
  // Update the special feature options to indicate premium features
  const specialFeatureOptions = [
    'Quote request form',
    'Image gallery/portfolio',
    'Customer reviews section',
    'Service area map',
    'Emergency contact button',
    'FAQ section',
    'Financing options',
    'Before/after project slider',
    'Project calculator (Premium)',
    'Online booking system (Premium - requires discussion)'
  ];
  
  // Update testimonial source options to be more comprehensive by combining both lists
  const testimonialSourceOptions = [
    'Google Reviews', 
    'Facebook Reviews', 
    'CheckATrade Reviews',
    'TrustATrader Reviews',
    'MyBuilder Reviews',
    'Yell Reviews',
    'Social Media Comments',
    'Email Testimonials',
    'Text Messages',
    'Written Testimonials',
    'No Testimonials Yet'
  ];
  
  // Add social media platform options
  const socialMediaOptions = [
    'Facebook',
    'Instagram',
    'LinkedIn',
    'Twitter/X',
    'TikTok',
    'YouTube',
    'Pinterest',
    'Snapchat',
    'Nextdoor',
    'None/Not interested'
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
            Fill out this quick form and we'll aim to have your website ready in 72 hours. 
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
                    How many years have you been in business?
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                    value={formData.yearsInBusiness}
                    onChange={(e) => updateFormData('yearsInBusiness', e.target.value)}
                    required
                  >
                    <option value="">Select years in business</option>
                    <option value="Less than 1 year">Less than 1 year</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="6-10 years">6-10 years</option>
                    <option value="10+ years">10+ years</option>
                  </select>
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
                    What specific services do you offer?
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                    placeholder="Please list all services your business provides. Be specific (e.g., 'bathroom renovation', 'emergency plumbing repairs')"
                    rows={4}
                    value={formData.specificServices}
                    onChange={(e) => updateFormData('specificServices', e.target.value)}
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    What makes your services unique compared to competitors?
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                    placeholder="e.g., 'Same-day service', 'Fixed price guarantee', '10-year warranty'"
                    rows={3}
                    value={formData.uniqueSellingPoints}
                    onChange={(e) => updateFormData('uniqueSellingPoints', e.target.value)}
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Do you have any flagship or signature services you'd like to emphasize?
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                    placeholder="e.g., 'Our bathroom renovation package' or 'Our emergency 24/7 callout service'"
                    rows={3}
                    value={formData.flagshipServices}
                    onChange={(e) => updateFormData('flagshipServices', e.target.value)}
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    How do you typically price your services?
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                    value={formData.pricingModel}
                    onChange={(e) => updateFormData('pricingModel', e.target.value)}
                  >
                    <option value="">Select pricing model</option>
                    <option value="Flat rate">Flat rate per job</option>
                    <option value="Hourly">Hourly rate</option>
                    <option value="Project-based">Project-based quotes</option>
                    <option value="Custom quotes">Custom quotes only</option>
                    <option value="Mixed pricing">Mixed pricing methods</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Do you have any certifications or qualifications related to your services?
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                    placeholder="e.g., 'Gas Safe registered', 'City & Guilds qualified', 'NICEIC approved'"
                    rows={3}
                    value={formData.certifications}
                    onChange={(e) => updateFormData('certifications', e.target.value)}
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    What is your typical process for delivering services?
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                    placeholder="e.g., 'Initial consultation, written quote, scheduling, completion, follow-up'"
                    rows={3}
                    value={formData.serviceProcess}
                    onChange={(e) => updateFormData('serviceProcess', e.target.value)}
                  ></textarea>
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
                    What style of website are you looking for? (select all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {websiteStyleOptions.map((style) => (
                      <div key={style} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`style-${style}`}
                          className="h-4 w-4 text-[#fd8f01] focus:ring-[#fd8f01] border-gray-300 rounded"
                          checked={formData.websiteStyle.includes(style)}
                          onChange={() => handleCheckboxChange('websiteStyle', style)}
                        />
                        <label htmlFor={`style-${style}`} className="ml-2 text-gray-700">
                          {style}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Are there any competitor or example websites you like? (optional)
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                    placeholder="e.g., www.example.com - I like their clean layout and easy navigation"
                    rows={3}
                    value={formData.competitorWebsites}
                    onChange={(e) => updateFormData('competitorWebsites', e.target.value)}
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    What special features would you like on your website? (select all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {specialFeatureOptions.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`feature-${feature}`}
                          className="h-4 w-4 text-[#fd8f01] focus:ring-[#fd8f01] border-gray-300 rounded"
                          checked={formData.specialFeatures.includes(feature)}
                          onChange={() => handleCheckboxChange('specialFeatures', feature)}
                        />
                        <label htmlFor={`feature-${feature}`} className="ml-2 text-gray-700">
                          {feature}
                        </label>
                      </div>
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Note: Features marked as "Premium" may incur additional costs. The online booking system requires further discussion to determine your specific needs.
                  </p>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    What's the main action you want visitors to take on your website?
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                    value={formData.callToAction}
                    onChange={(e) => updateFormData('callToAction', e.target.value)}
                  >
                    <option value="phone">Call your business</option>
                    <option value="contact-form">Fill out a contact form</option>
                    <option value="quote">Request a quote</option>
                    <option value="whatsapp">Message on WhatsApp</option>
                    <option value="booking">Book an appointment</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Where can we find reviews/testimonials for your business? (tick all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {testimonialSourceOptions.map((source) => (
                      <div key={source} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`testimonial-${source}`}
                          className="h-4 w-4 text-[#fd8f01] focus:ring-[#fd8f01] border-gray-300 rounded"
                          checked={formData.testimonialSources.includes(source)}
                          onChange={() => handleCheckboxChange('testimonialSources', source)}
                        />
                        <label htmlFor={`testimonial-${source}`} className="ml-2 text-gray-700">
                          {source}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    What tone would you prefer for your website content?
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                    value={formData.contentTone}
                    onChange={(e) => updateFormData('contentTone', e.target.value)}
                  >
                    <option value="conversational">Friendly & Conversational</option>
                    <option value="professional">Professional & Formal</option>
                    <option value="technical">Technical & Detailed</option>
                    <option value="direct">Direct & No-nonsense</option>
                    <option value="reassuring">Reassuring & Helpful</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Which social media platforms would you like linked on your website? (tick all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {socialMediaOptions.map((platform) => (
                      <div key={platform} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`social-${platform}`}
                          className="h-4 w-4 text-[#fd8f01] focus:ring-[#fd8f01] border-gray-300 rounded"
                          checked={formData.socialMedia.includes(platform)}
                          onChange={() => handleCheckboxChange('socialMedia', platform)}
                        />
                        <label htmlFor={`social-${platform}`} className="ml-2 text-gray-700">
                          {platform}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Any specific additional pages you'd like beyond the basics? (optional)
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                    placeholder="e.g., Project Gallery, Financing Options, Careers, Blog"
                    rows={3}
                    value={formData.additionalPages}
                    onChange={(e) => updateFormData('additionalPages', e.target.value)}
                  ></textarea>
                  <p className="mt-1 text-sm text-gray-500">Standard pages include Home, About, Services, and Contact</p>
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
                  {formData.logoAvailable === 'no' && (
                    <p className="mt-1 text-sm text-gray-500">Note: There will be an additional cost for logo design.</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Do you already have a domain name (website address)?
                  </label>
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="domain-yes"
                        name="domain"
                        className="h-4 w-4 text-[#fd8f01] focus:ring-[#fd8f01] border-gray-300"
                        value="yes"
                        checked={formData.domainAvailable === 'yes'}
                        onChange={() => updateFormData('domainAvailable', 'yes')}
                      />
                      <label htmlFor="domain-yes" className="ml-2 text-gray-700">
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="domain-no"
                        name="domain"
                        className="h-4 w-4 text-[#fd8f01] focus:ring-[#fd8f01] border-gray-300"
                        value="no"
                        checked={formData.domainAvailable === 'no'}
                        onChange={() => updateFormData('domainAvailable', 'no')}
                      />
                      <label htmlFor="domain-no" className="ml-2 text-gray-700">
                        No - we'll need to purchase one
                      </label>
                    </div>
                  </div>
                  {formData.domainAvailable === 'no' && (
                    <p className="mt-1 text-sm text-gray-500">Note: There will be an additional cost for domain registration.</p>
                  )}
                  
                  {formData.domainAvailable === 'yes' && (
                    <div className="mt-3">
                      <label className="block text-gray-700 text-sm font-medium mb-1">
                        What is your domain name?
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                        placeholder="e.g. www.yourbusiness.com"
                        value={formData.domainName}
                        onChange={(e) => updateFormData('domainName', e.target.value)}
                      />
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Which color scheme would you prefer for your website? (tick all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {colorSchemeOptions.map((scheme) => (
                      <div key={scheme} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`color-${scheme}`}
                          className="h-4 w-4 text-[#fd8f01] focus:ring-[#fd8f01] border-gray-300 rounded"
                          checked={formData.preferredColors.includes(scheme)}
                          onChange={() => handleCheckboxChange('preferredColors', scheme)}
                        />
                        <label htmlFor={`color-${scheme}`} className="ml-2 text-gray-700">
                          {scheme}
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
                    How did you find out about our services?
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                    value={formData.referralSource}
                    onChange={(e) => updateFormData('referralSource', e.target.value)}
                    required
                  >
                    <option value="">Select option</option>
                    <option value="Word of mouth">Word of mouth/Recommendation</option>
                    <option value="Google search">Google search</option>
                    <option value="Social media">Social media (Facebook, Instagram, etc.)</option>
                    <option value="Trade directory">Trade directory</option>
                    <option value="Local advertisement">Local advertisement</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-bold text-slate-800 mb-3">Business Growth Reflection <span className="text-sm font-normal text-gray-600">(optional but helps with our research)</span></h3>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                      What challenges are you currently facing in growing your business?
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                      placeholder="e.g. not enough leads, competition, pricing pressure, etc."
                      rows={3}
                      value={formData.businessChallenges}
                      onChange={(e) => updateFormData('businessChallenges', e.target.value)}
                    ></textarea>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                      How would a steady flow of quality leads impact your business?
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                      placeholder="e.g. hire more staff, take on bigger projects, expand service areas, etc."
                      rows={3}
                      value={formData.potentialImpact}
                      onChange={(e) => updateFormData('potentialImpact', e.target.value)}
                    ></textarea>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                      Have you struggled with advertising your business in the past?
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                      placeholder="e.g. expensive Google Ads, confusing social media, ineffective flyers, etc."
                      rows={3}
                      value={formData.advertisingStruggles}
                      onChange={(e) => updateFormData('advertisingStruggles', e.target.value)}
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      What type of work is most profitable for you that you also enjoy doing?
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                      placeholder="e.g. bathroom renovations, emergency callouts, commercial installations, etc."
                      rows={3}
                      value={formData.profitableWork}
                      onChange={(e) => updateFormData('profitableWork', e.target.value)}
                    ></textarea>
                    <p className="mt-1 text-sm text-gray-500">This helps us target your ideal customers in our research</p>
                  </div>
                </div>
              </div>
              
              {/* What Happens Next section - now shown only on the final step */}
              <div className="mt-8 bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center mb-4">
                  <CheckCircle2 className="text-[#fd8f01] mr-2" size={24} />
                  What Happens Next?
                </h2>
                <p className="text-gray-700 mb-6 text-lg">
                  After submitting, we'll connect on WhatsApp to create your tailored business plan.
                </p>
                
                <div className="mb-6">
                  <h3 className="font-bold text-slate-800 mb-4 flex items-center text-lg">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <WhatsAppIcon className="text-green-500" size={20} />
                    </div>
                    Our Simple Process
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                      <h4 className="font-semibold text-slate-800 mb-2">1. Research & Planning</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                          <span>Expand on your form responses</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                          <span>Research local competition</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                          <span>Identify high-ticket opportunities</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                      <h4 className="font-semibold text-slate-800 mb-2">2. Development & Launch</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                          <span>Payment only after your website is completed</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                          <span>Regular WhatsApp updates</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                          <span>Ongoing support after launch</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#fff5e6] p-5 rounded-md border border-[#ffe4bc]">
                  <div className="flex">
                    <Hammer className="text-[#fd8f01] mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Our Promise to You</h3>
                      <p className="text-gray-800">
                        Our goal is to make you money and save you time, so you can spend more time with family and not work for rubbish money. We're committed to getting you the right leads for those high-value jobs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#fff5e6] rounded-lg p-5 border border-[#ffe4bc]">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#fd8f01]" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-800">Almost there!</h3>
                    <p className="mt-1 text-gray-600">
                      Once you submit this form, we'll be in touch within 12 hours to confirm a few details,
                      then we aim to have your website ready in 72 hours. <strong>You only pay after your website is completed.</strong>
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
              <span className="font-medium">98% of sites delivered in 72 hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteQuestionnairePage; 