import React from 'react';
import { Link } from 'react-router-dom';

const PricingSection: React.FC = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-8 text-center">
      <h3 className="text-2xl font-bold text-slate-800 mb-4">Simple, Straightforward Pricing</h3>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
        One-time setup fee, then just £150 per year for hosting and support.
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-6">
        <h4 className="font-bold text-xl text-slate-800 mb-3">How Other Agencies Rob Tradespeople</h4>
        <div className="flex items-center justify-between mb-3 border-b pb-3">
          <span className="font-medium">First Year Cost:</span>
          <span className="font-bold text-red-600">£1,980+VAT</span>
        </div>
        <div className="flex items-center justify-between mb-3 border-b pb-3">
          <span className="font-medium">Ongoing Annual Cost:</span>
          <span className="font-bold text-red-600">£780+VAT</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-medium">5-Year Total Cost:</span>
          <span className="font-bold text-red-600">£5,100+VAT</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">Source: builtfortrades.co.uk (Grow Website package)</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-6 border-2 border-green-500">
        <h4 className="font-bold text-xl text-slate-800 mb-3">Our Fair Trades Pricing</h4>
        <div className="flex items-center justify-between mb-3 border-b pb-3">
          <span className="font-medium">One-time Setup:</span>
          <span className="font-bold text-green-600">£500-£750</span>
        </div>
        <div className="flex items-center justify-between mb-3 border-b pb-3">
          <span className="font-medium">Annual Maintenance:</span>
          <span className="font-bold text-green-600">£150/year (after year 1)</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-medium">5-Year Total Cost:</span>
          <span className="font-bold text-green-600">£1,100-£1,350</span>
        </div>
        <p className="text-gray-700 mt-2 font-medium">Save over £3,750 compared to subscription models</p>
      </div>
      
      <Link 
        to="/prices" 
        className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-8 rounded-md transition duration-300 inline-block"
      >
        See Detailed Pricing Options
      </Link>
    </div>
  );
};

export default PricingSection; 