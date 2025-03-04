import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const ReferralProgramPage = () => {
  const [domain, setDomain] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // Generate a unique referral code based on the domain
  const generateReferralCode = () => {
    if (!domain) return;
    
    setIsGenerating(true);
    
    // Use the full domain with random numbers at the end
    setTimeout(() => {
      // Remove protocol prefixes if present
      let cleanDomain = domain.replace(/^(https?:\/\/)?(www\.)?/, '');
      // Remove any file paths or query parameters
      cleanDomain = cleanDomain.split('/')[0];
      // Remove special characters and convert to uppercase
      cleanDomain = cleanDomain.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
      
      // Generate 2 random digits
      const randomDigits = Math.floor(10 + Math.random() * 90);
      
      // Limit to max 8 characters (6 from domain + 2 random digits)
      let domainPart = cleanDomain;
      if (domainPart.length > 6) {
        domainPart = domainPart.substring(0, 6);
      }
      
      const uniqueCode = `${domainPart}${randomDigits}`;
      setReferralCode(uniqueCode);
      setShowPopup(true);
      setIsGenerating(false);
    }, 800); // Simulated delay to show loading state
  };

  // Create a referral message with the code
  const getReferralMessage = () => {
    // Format the domain as a proper URL
    let websiteUrl = domain;
    // Add https:// if not present
    if (websiteUrl && !websiteUrl.match(/^https?:\/\//)) {
      websiteUrl = 'https://' + websiteUrl.replace(/^www\./, '');
    }
    
    return `Hey mate! I recently got my website set up with Get Trades Online and it's been great for my business. Check out my site: ${websiteUrl}. They're offering a great deal - you'll get £50 off your new website and I'll get £50 too if you sign up. Just mention my referral code: ${referralCode} when you contact them. Get in touch with them at https://gettradesonline.co.uk`;
  };

  // Check if Web Share API is available
  const isWebShareAvailable = () => {
    return typeof navigator !== 'undefined' && !!navigator.share;
  };

  // Handle sharing functionality
  const handleShare = async () => {
    const message = getReferralMessage();
    
    // Check if Web Share API is supported
    if (isWebShareAvailable()) {
      try {
        await navigator.share({
          title: 'Get Trades Online Referral',
          text: message,
          url: 'https://gettradesonline.co.uk/referral-program'
        });
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 3000);
      } catch (error) {
        console.error('Error sharing:', error);
        // Fallback to copying to clipboard
        copyToClipboard();
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      copyToClipboard();
    }
  };

  // Fallback copy to clipboard function
  const copyToClipboard = () => {
    if (messageRef.current) {
      messageRef.current.select();
      document.execCommand('copy');
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 3000);
    }
  };

  // Close the popup
  const closePopup = () => {
    setShowPopup(false);
    setReferralCode('');
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Referral Program | Get Trades Online</title>
      </Helmet>
      <SEO
        title="Referral Program | Get Trades Online"
        description="Refer a mate and earn £50. Learn about our referral program and how you can earn rewards by referring new customers to Get Trades Online."
        canonicalUrl="/referral-program"
      />
      <StructuredData
        name="Referral Program | Get Trades Online"
        description="Refer a mate and earn £50. Learn about our referral program and how you can earn rewards by referring new customers to Get Trades Online."
        url="https://gettradesonline.co.uk/referral-program"
      />
      
      {/* Hero Section */}
      <div className="relative py-16 md:py-24" style={{
        backgroundImage: "url('https://res.cloudinary.com/dbmj7rhwt/image/upload/v1741105086/Untitled_design_3_ljkbqj.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Refer a Mate, Earn £50
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              As a valued Get Trades customer, you can earn £50 for every successful referral you make to our services. Your referred mates also get £50 off their new website!
            </p>
            
            {/* Referral Code Generator */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto border-2 border-gray-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Generate Your Referral Link</h2>
              <div className="mb-4">
                <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Enter your website domain
                </label>
                <input
                  type="text"
                  id="domain"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="e.g. yourwebsite.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01]"
                />
                <p className="mt-1 text-sm text-gray-500 text-left">
                  This should be the domain we created for you
                </p>
              </div>
              <button
                onClick={generateReferralCode}
                disabled={!domain || isGenerating}
                className={`w-full py-2 px-4 rounded-md text-white font-medium transition duration-200 ${
                  !domain || isGenerating
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#8a9196] hover:bg-[#767e83]'
                }`}
              >
                {isGenerating ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </span>
                ) : (
                  'Generate Referral Code'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Referral Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={closePopup}></div>
            
            {/* Modal panel */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Your Referral Code: <span className="text-[#fd8f01] font-bold">{referralCode}</span>
                    </h3>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500 mb-2">
                        Share this message with your mates:
                      </p>
                      <div className="relative">
                        <textarea
                          ref={messageRef}
                          value={getReferralMessage()}
                          readOnly
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#fd8f01] focus:border-[#fd8f01] h-32"
                        />
                      </div>
                      
                      {shareSuccess && (
                        <div className="mt-2 p-2 bg-green-100 text-green-700 rounded-md">
                          {isWebShareAvailable() ? "Shared successfully!" : "Copied to clipboard!"}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={handleShare}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#fd8f01] text-base font-medium text-white hover:bg-[#e68101] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fd8f01] sm:ml-3 sm:w-auto sm:text-sm"
                >
                  {isWebShareAvailable() ? "Share Now" : "Copy to Clipboard"}
                </button>
                <button
                  type="button"
                  onClick={closePopup}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* How It Works Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Generate Your Code</h3>
              <p className="text-gray-600">Enter your domain above to get a unique referral code that's linked to your website.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Share With Your Mates</h3>
              <p className="text-gray-600">Send the referral message to your mates who might need a website for their trade business.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Both of You Benefit</h3>
              <p className="text-gray-600">Your mate gets £50 off their new website, and you'll receive your £50 reward within 30 days of their website going live.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Terms and Conditions Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Terms and Conditions</h2>
          
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Get Trades Referral Program Terms and Conditions</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Eligibility</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>To participate, you must be a current customer of Get Trades with an active website service.</li>
                  <li>Referrals are only valid for new customers (referred individuals) who do not currently have a website or service with Get Trades.</li>
                  <li>Employees, contractors, and immediate family members of Get Trades are not eligible to participate.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">How It Works</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Refer a friend (your "mate") to Get Trades by sharing your unique referral link or code (provided by Get Trades) or by directing them to sign up via our website or contact us directly, mentioning your referral.</li>
                  <li>Your friend must successfully purchase and set up a website service with Get Trades to qualify as a "successful referral."</li>
                  <li>As the referrer, you will receive £50 (in the form of a payment, voucher, or credit, as determined by Get Trades) once your friend's website service is active and paid for in full for at least one billing cycle (e.g., 30 days).</li>
                  <li>Your referred friend will receive £50 off the price of their new website when they mention your referral code during sign up.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Referral Limits</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>There is no limit to the number of friends you can refer, but you will only receive £50 per successful referral.</li>
                  <li>Get Trades reserves the right to limit the total number of referrals or rewards per customer at its discretion.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Payment of Rewards</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Rewards will be paid within 30 days of your friend's website service becoming active and paid in full.</li>
                  <li>Rewards will be issued via bank transfer, voucher, or account credit, at Get Trades' discretion. You must provide valid payment details (e.g., bank account or email for vouchers) to receive your reward.</li>
                  <li>Get Trades is not responsible for delays or issues caused by incorrect or incomplete payment information provided by the referrer.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Referral Process and Tracking</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>You must use the official referral link, code, or process provided by Get Trades to ensure your referral is tracked correctly. Verbal or informal referrals (e.g., without using the official method) may not be eligible for rewards.</li>
                  <li>Get Trades is not responsible for lost or untracked referrals due to technical issues, user error, or failure to use the official referral method.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Fraud and Abuse</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Referrals must be genuine and made in good faith. Self-referrals, referrals of fictitious persons, or any attempt to manipulate or abuse the program (e.g., creating multiple accounts, referring family members living at the same address) will result in disqualification from the program and forfeiture of any rewards.</li>
                  <li>Get Trades reserves the right to investigate any referral and withhold or cancel rewards if fraud or abuse is suspected.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Changes to the Program</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Get Trades may modify, suspend, or terminate the referral program at any time without notice. Any changes will apply to future referrals, but existing valid referrals will be honored unless otherwise stated.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Privacy and Data</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>By participating, you agree that Get Trades may collect and process your personal data (e.g., name, email, bank details) and your friend's contact information (with their consent) to administer the program. We will handle this data in accordance with our Privacy Policy and applicable data protection laws (e.g., GDPR).</li>
                  <li>You must obtain your friend's consent before sharing their contact information with Get Trades.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Liability</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Get Trades is not liable for any loss, damage, or inconvenience arising from participation in the referral program, except where such liability cannot be excluded by law.</li>
                  <li>Get Trades is not responsible for any failure by your friend to complete their website service purchase or for any issues with their service after sign-up.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Governing Law</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>These terms are governed by the laws of England and Wales. Any disputes will be resolved through the courts of England and Wales.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
                <p className="text-gray-700">For questions or issues with the referral program, contact us at <a href="mailto:support@gettradesonline.com" className="text-blue-600 hover:underline">support@gettradesonline.com</a> or call us on 0800 123 456.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">How do I refer someone?</h3>
              <p className="text-gray-700">Simply enter your domain name at the top of this page to generate your unique referral code, then share the message with your mates through WhatsApp, SMS, or email.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">When will I receive my £50 reward?</h3>
              <p className="text-gray-700">You'll receive your reward within 30 days after your referred friend's website service is active and they've completed their first payment cycle.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">How many people can I refer?</h3>
              <p className="text-gray-700">There's no limit! You can refer as many mates as you like and earn £50 for each successful referral.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">How will I receive my reward?</h3>
              <p className="text-gray-700">Rewards are typically paid via bank transfer, but may also be issued as vouchers or account credits at our discretion.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">What does my referred friend get?</h3>
              <p className="text-gray-700">Your referred friend gets £50 off the price of their new website when they mention your referral code during sign up. It's a win-win for both of you!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralProgramPage; 