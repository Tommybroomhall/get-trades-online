import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { getTrades, getTradesLocally, saveTradesLocally } from '../services/apiService';

interface Trade {
  name: string;
  claimed: boolean;
  pending: boolean;
}

const FreeWebsitesPage = () => {
  const navigate = useNavigate();
  // Use the default trades as a fallback
  const defaultTrades: Trade[] = [
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
  ];
  
  const [tradeOptions, setTradeOptions] = useState<Trade[]>(defaultTrades);
  const [availableTradesCount, setAvailableTradesCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // Fetch trades data when component mounts
  useEffect(() => {
    const fetchTradesData = async () => {
      setIsLoading(true);
      
      // First try to get from localStorage for instant display
      const localTrades = getTradesLocally();
      if (localTrades) {
        setTradeOptions(localTrades);
      }
      
      try {
        // Then fetch from API for latest data
        const apiTrades = await getTrades();
        
        if (apiTrades && apiTrades.length > 0) {
          setTradeOptions(apiTrades);
          // Update localStorage with the latest data
          saveTradesLocally(apiTrades);
        }
      } catch (error) {
        console.error('Error fetching trades:', error);
        // If API fails, we already have local data or defaults
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchTradesData();
  }, []);
  
  // Calculate available trades count
  useEffect(() => {
    const count = tradeOptions.filter(trade => !trade.claimed && !trade.pending).length;
    setAvailableTradesCount(count);
  }, [tradeOptions]);
  
  const handleClaimTrade = (tradeName: string) => {
    // Navigate to the application page with the selected trade as a query parameter
    navigate(`/claim-website?trade=${encodeURIComponent(tradeName)}`);
  };
  
  return (
    <div className="bg-white">
      <Helmet>
        <title>Free Website Giveaway | Get Trades Online</title>
      </Helmet>
      <SEO
        title="Free Website Giveaway | Get Trades Online"
        description="Get a FREE £3,000 Website for Your Trade – Limited Spots! We're offering one free, custom-built website with free hosting to one representative from each trade in the UK."
        canonicalUrl="/free-websites"
      />
      <StructuredData
        name="Free Website Giveaway | Get Trades Online"
        description="Get a FREE £3,000 Website for Your Trade – Limited Spots! We're offering one free, custom-built website with free hosting to one representative from each trade in the UK."
        url="https://gettradesonline.co.uk/free-websites"
      />
      
      {/* Page Header */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Get a FREE £3,000 Website for Your Trade
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get Trades is revolutionizing the industry—we're offering one free, basic custom-built website with free hosting to one representative from each trade in the UK. Perfect for tradespeople who need a simple online presence. <span className="font-bold text-[#fd8f01]">Only {availableTradesCount} spots left!</span>
            </p>
            
            <div className="mt-8">
              <button
                onClick={() => navigate('/claim-website')}
                className="inline-block bg-[#fd8f01] hover:bg-[#e68101] text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300"
              >
                Apply Now
              </button>
            </div>
          </div>
          
          {/* How It Works - Now part of header */}
          <div className="mt-16 pb-8">
            <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#fd8f01] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-3">Check Availability</h3>
                <p className="text-gray-600">Browse the list below to see if your trade is still available. Once a trade spot is filled, that's it!</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#fd8f01] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-3">Apply With Proof</h3>
                <p className="text-gray-600">Fill out the application form and provide proof that you're a UK-based tradesperson in your specific trade.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#fd8f01] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-3">Get Your Free Basic Website</h3>
                <p className="text-gray-600">Once approved, we'll build your basic custom £3,000 website with free hosting tailored to your trade business. You'll need to purchase your domain separately.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Available Trades Section */}
      <div className="py-16 bg-[#0F172A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Available Trades</h2>
          <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Check if your trade is still available. We're offering one free website per trade. Once claimed, that trade spot is gone forever!
          </p>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#fd8f01]"></div>
              <span className="ml-3 text-white">Loading trades...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {tradeOptions.map((trade, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg border ${
                    trade.claimed 
                      ? 'border-red-200 bg-red-50' 
                      : trade.pending 
                        ? 'border-yellow-200 bg-yellow-50' 
                        : 'border-green-200 bg-green-50'
                  }`}
                >
                  <div className="flex items-center">
                    {trade.claimed ? (
                      <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    ) : trade.pending ? (
                      <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className={`${
                      trade.claimed 
                        ? 'text-red-800' 
                        : trade.pending 
                          ? 'text-yellow-800' 
                          : 'text-green-800'
                    }`}>
                      {trade.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-sm">
                      {trade.claimed 
                        ? 'Claimed' 
                        : trade.pending 
                          ? 'Pending Review' 
                          : 'Available'
                      }
                    </div>
                    {!trade.claimed && !trade.pending && (
                      <button
                        onClick={() => handleClaimTrade(trade.name)}
                        className="px-3 py-1 text-sm bg-[#fd8f01] hover:bg-[#e68101] text-white rounded-md transition-colors"
                      >
                        Claim
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Terms and Conditions Section */}
      <div id="terms" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Terms and Conditions</h2>
          
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Get Trades Free Website Offer Terms and Conditions</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Eligibility</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>You must be a UK-based tradesperson actively working in one of the recognized trades listed on this page.</li>
                  <li>Only one free website per tradesperson or business. Employees, contractors, and immediate family of Get Trades are not eligible.</li>
                  <li>You must provide valid proof of your trade (e.g., business registration, certificates, photos of work, invoices) and a UK business address.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Offer Details</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Get Trades offers one free, basic custom-built website (£3,000 value) with 1 year of free hosting to one representative from each trade listed on our website.</li>
                  <li>The website will be designed and built from scratch, tailored to your trade, with basic functionality suitable for a simple web presence.</li>
                  <li><strong>Domains are NOT included</strong> in the free offer - you must purchase your own domain name.</li>
                  <li>Additional services including but not limited to: domain registration, premium design elements, advanced functionality, ongoing maintenance, search engine optimization campaigns, and content creation will incur additional fees.</li>
                  <li>Spots are limited—once all trade spots are filled, the offer ends, and no further free websites will be provided.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Application Process</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Apply via the application form, selecting your trade from the dropdown and providing all required information and proof of trade.</li>
                  <li>Get Trades will review applications and contact you within 7 days if your spot is confirmed. Incomplete or fraudulent applications will be rejected.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Website Development Process</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Once approved, you'll be contacted to provide information and materials for your website.</li>
                  <li>Development typically takes 14-21 days, depending on your responsiveness and the complexity of your requirements.</li>
                  <li>You'll receive one round of revisions after the initial build. Additional revisions may incur extra costs.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Hosting and Maintenance</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Free hosting is provided for 1 year from the launch date of your website.</li>
                  <li>After the free period, hosting will be available at our standard rates (currently £15/month).</li>
                  <li>Basic security updates are included in hosting. Content updates and feature additions are not included and will be charged separately.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Ownership and Rights</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>You retain ownership of your content and information provided for the website.</li>
                  <li>Get Trades reserves the right to display a small "Created by Get Trades Online" credit with a link on your website.</li>
                  <li>Get Trades may use your website in its portfolio and marketing materials.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">What's included in the free website offer?</h3>
                <p className="text-gray-700">Your free website includes a custom-designed, mobile-responsive website with up to 5 basic pages (Home, About, Services, Gallery, Contact), a contact form, basic SEO setup, and Google Maps integration. It also includes 1 year of free hosting.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">What's NOT included in the free offer?</h3>
                <p className="text-gray-700">Domain registration, premium design elements, advanced functionality (booking systems, e-commerce, etc.), ongoing maintenance, content creation, and search engine optimization campaigns are not included in the free offer. These services are available at additional costs.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">How do I qualify for a free website?</h3>
                <p className="text-gray-700">You must be a UK-based tradesperson actively working in one of the trades listed on this page. You'll need to provide proof of your trade business (such as business registration, certificates, or examples of your work) during the application process.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">How long does it take to build my website?</h3>
                <p className="text-gray-700">Once your application is approved, the website development process typically takes 14-21 days, depending on how quickly you provide the necessary information and materials, and the complexity of your requirements.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">What happens after the free hosting period ends?</h3>
                <p className="text-gray-700">After the first year, you can continue hosting with us at our standard rates (currently £15/month) or we can help you migrate the website to a hosting provider of your choice.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Can I make changes to my website after it's built?</h3>
                <p className="text-gray-700">You'll receive one round of revisions after the initial build. Additional revisions or updates will incur extra costs based on our standard hourly rates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeWebsitesPage; 