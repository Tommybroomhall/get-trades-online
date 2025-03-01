import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const GetOnlinePage = () => {
  // Calculate delivery date (today + 3 days)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);
  const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  return (
    <div className="min-h-screen">
      {/* Combined Hero Section with Statistics */}
      <section 
        className="relative pt-12 pb-24 md:pt-16 md:pb-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(249, 250, 251, 0.95)), url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#fff5e6] rounded-full opacity-20 -mr-32 -mt-16 hidden md:block"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-[#fff5e6] rounded-full opacity-20 -ml-40 hidden md:block"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="bg-[#fd8f01] bg-opacity-10 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#fd8f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
                  <path d="M17.64 15 22 10.64" />
                  <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Websites For Trades. <span className="text-[#fd8f01]">No Tech Headaches.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get online by <span className="font-semibold text-slate-800">{formattedDeliveryDate}</span>. 
              Fill out our <span className="text-slate-800 font-medium">quick questionnaire</span>, 
              chat with your personal account manager via 
              <span className="text-green-500 font-medium"> WhatsApp</span>. 
              <span className="text-[#fd8f01] font-medium"> One payment, we handle everything.</span>
            </p>
            
            {/* Additional features list */}
            <div className="bg-white bg-opacity-70 backdrop-blur-sm p-4 rounded-lg shadow-sm max-w-2xl mx-auto mb-8 hidden md:block">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                <li className="flex items-start">
                  <Check className="text-[#fd8f01] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Custom website built specifically for your trade</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#fd8f01] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Mobile-friendly design that converts visitors to customers</span>
                </li>
                <li className="flex items-start">
                  <WhatsAppIcon className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Direct access to your account manager for changes</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#fd8f01] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>SEO optimized to get found by local customers</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a 
                href="https://wa.me/+447424163547" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 flex items-center space-x-2 shadow-lg transform hover:scale-105"
              >
                <WhatsAppIcon size={20} />
                <span>Quick Chat</span>
              </a>
              <Link 
                to="/get-started" 
                className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-6 rounded-md transition duration-300 shadow-lg transform hover:scale-105 group"
              >
                <span>Start Your Website</span>
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
          
          {/* Statistics section with better styling */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-slate-800 text-white rounded-lg shadow-xl overflow-hidden">
              <div className="p-4 md:p-6 text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">The Numbers Don't Lie</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Without a website, you're missing out on customers who are actively looking for tradespeople like you</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div className="bg-slate-700 rounded-lg p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="flex flex-col items-center">
                      <span className="text-4xl md:text-5xl font-bold text-[#fd8f01] mb-2">87%</span>
                      <div className="h-1 w-10 bg-[#fd8f01] rounded-full mb-3"></div>
                      <p className="text-sm text-gray-200">of customers check a tradesperson's website</p>
                    </div>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="flex flex-col items-center">
                      <span className="text-4xl md:text-5xl font-bold text-[#fd8f01] mb-2">64%</span>
                      <div className="h-1 w-10 bg-[#fd8f01] rounded-full mb-3"></div>
                      <p className="text-sm text-gray-200">won't consider trades without a website</p>
                    </div>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="flex flex-col items-center">
                      <span className="text-4xl md:text-5xl font-bold text-[#fd8f01] mb-2">3.2x</span>
                      <div className="h-1 w-10 bg-[#fd8f01] rounded-full mb-3"></div>
                      <p className="text-sm text-gray-200">more leads with a website</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-slate-700 bg-opacity-50 rounded-md inline-block">
                  <div className="flex items-center justify-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 mr-2">
                      <Check className="h-4 w-4 text-white" />
                    </span>
                    <p className="text-white">Get your professional website built in just 72 hours</p>
                  </div>
                </div>
              </div>
              
              {/* Mobile bottom CTA - visible only on mobile */}
              <div className="md:hidden bg-[#fd8f01] p-4 text-center">
                <Link 
                  to="/get-started" 
                  className="text-white font-bold inline-flex items-center"
                >
                  Get Your Website Now
                  <span className="ml-2 inline-block">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tradesperson Well-being Section */}
      <section className="py-12 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#fff5e6] rounded-full opacity-20 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fff5e6] rounded-full opacity-20 -ml-48 -mb-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <div className="bg-[#fd8f01] bg-opacity-10 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#fd8f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">A Website Isn't Just About Leads. It's About Your Life.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you're on the tools every day, a website should make your life easier, not add stress. Here's how it actually helps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Financial Stability Card */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative overflow-hidden transition-transform hover:transform hover:scale-105">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#fff5e6] opacity-20 rounded-full -mr-8 -mt-8 z-0"></div>
              <div className="flex items-start mb-4 relative z-10">
                <div className="bg-[#fff5e6] p-3 rounded-full mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#fd8f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Charge What You're Worth</h3>
              </div>
              <p className="text-gray-600 mb-4 relative z-10">
                With consistent leads, you can confidently raise your prices without fear of losing work. No more undercutting yourself just to keep busy.
              </p>
              <div className="mt-4 p-4 bg-slate-50 rounded-md border-l-4 border-[#fd8f01] relative z-10">
                <div className="absolute -right-2 -top-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.07-.56.136-.882.272-.318.122-.656.269-.96.485-.304.214-.646.435-.935.767-.29.33-.562.67-.79 1.069-.224.398-.465.789-.603 1.24-.142.452-.267.966-.324 1.48-.051.515-.051 1.029-.018 1.536.029.515.131 1.017.242 1.496.12.508.262.998.513 1.455.242.467.553.935.923 1.345.369.398.748.785 1.194 1.093.445.308.946.55 1.458.734.51.18 1.04.315 1.566.387.526.073 1.057.098 1.566.076.508-.027 1.015-.064 1.49-.2.476-.135.947-.293 1.383-.513.435-.223.857-.454 1.233-.752.372-.297.739-.595 1.042-.949.308-.35.581-.735.815-1.136.239-.396.45-.791.615-1.205.163-.415.3-.845.357-1.283.057-.434.096-.89.076-1.344-.018-.454-.089-.896-.215-1.336-.23-.858-.591-1.687-1.09-2.444-.498-.758-1.162-1.422-1.953-1.973-.787-.553-1.705-.97-2.669-1.263-.961-.292-1.982-.46-2.997-.51-.257-.01-.51-.022-.763-.022zm5 0c.223 0 .437.034.65.065-.069-.232-.14-.468-.254-.68-.114-.308-.292-.575-.469-.844-.148-.291-.409-.488-.601-.737-.201-.242-.475-.403-.692-.604-.213-.21-.492-.315-.714-.463-.232-.133-.434-.28-.65-.35-.208-.086-.39-.16-.539-.222-.302-.125-.474-.197-.474-.197l-.486.923c0 0 .218.052.597.144.191.048.424.104.689.171.271.07.56.136.882.272.317.122.656.269.959.485.304.214.646.435.935.767.29.33.562.67.79 1.069.224.398.465.789.603 1.24.142.452.267.966.324 1.48.051.515.051 1.029.018 1.536-.029.515-.131 1.017-.242 1.496-.12.508-.262.998-.513 1.455-.242.467-.553.935-.923 1.345-.369.398-.748.785-1.194 1.093-.445.308-.946.55-1.458.734-.51.18-1.04.315-1.566.387-.526.073-1.057.098-1.566.076-.508-.027-1.015-.064-1.49-.2-.476-.135-.947-.293-1.383-.513-.435-.223-.857-.454-1.233-.752-.372-.297-.739-.595-1.042-.949-.308-.35-.581-.735-.815-1.136-.239-.396-.45-.791-.615-1.205-.163-.415-.3-.845-.357-1.283-.057-.434-.096-.89-.076-1.344.018-.454.089-.896.215-1.336.23-.858.591-1.687 1.09-2.444.498-.758 1.162-1.422 1.953-1.973.787-.553 1.705-.97 2.669-1.263.961-.292 1.982-.46 2.997-.51.257-.01.51-.022.763-.022z"/>
                  </svg>
                </div>
                <p className="text-sm text-slate-700 italic">
                  "Since my website went live, I've increased my rates by 25% and still have more work than I can handle."
                </p>
              </div>
            </div>
            
            {/* Work-Life Balance Card */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative overflow-hidden transition-transform hover:transform hover:scale-105">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#fff5e6] opacity-20 rounded-full -mr-8 -mt-8 z-0"></div>
              <div className="flex items-start mb-4 relative z-10">
                <div className="bg-[#fff5e6] p-3 rounded-full mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#fd8f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Get Your Weekends Back</h3>
              </div>
              <p className="text-gray-600 mb-4 relative z-10">
                Choose better-paying jobs and clients, giving you more time with family while making more money. Your website filters out time-wasters.
              </p>
              <div className="mt-4 p-4 bg-slate-50 rounded-md border-l-4 border-[#fd8f01] relative z-10">
                <div className="absolute -right-2 -top-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.07-.56.136-.882.272-.318.122-.656.269-.96.485-.304.214-.646.435-.935.767-.29.33-.562.67-.79 1.069-.224.398-.465.789-.603 1.24-.142.452-.267.966-.324 1.48-.051.515-.051 1.029-.018 1.536.029.515.131 1.017.242 1.496.12.508.262.998.513 1.455.242.467.553.935.923 1.345.369.398.748.785 1.194 1.093.445.308.946.55 1.458.734.51.18 1.04.315 1.566.387.526.073 1.057.098 1.566.076.508-.027 1.015-.064 1.49-.2.476-.135.947-.293 1.383-.513.435-.223.857-.454 1.233-.752.372-.297.739-.595 1.042-.949.308-.35.581-.735.815-1.136.239-.396.45-.791.615-1.205.163-.415.3-.845.357-1.283.057-.434.096-.89.076-1.344-.018-.454-.089-.896-.215-1.336-.23-.858-.591-1.687-1.09-2.444-.498-.758-1.162-1.422-1.953-1.973-.787-.553-1.705-.97-2.669-1.263-.961-.292-1.982-.46-2.997-.51-.257-.01-.51-.022-.763-.022zm5 0c.223 0 .437.034.65.065-.069-.232-.14-.468-.254-.68-.114-.308-.292-.575-.469-.844-.148-.291-.409-.488-.601-.737-.201-.242-.475-.403-.692-.604-.213-.21-.492-.315-.714-.463-.232-.133-.434-.28-.65-.35-.208-.086-.39-.16-.539-.222-.302-.125-.474-.197-.474-.197l-.486.923c0 0 .218.052.597.144.191.048.424.104.689.171.271.07.56.136.882.272.317.122.656.269.959.485.304.214.646.435.935.767.29.33.562.67.79 1.069.224.398.465.789.603 1.24.142.452.267.966.324 1.48.051.515.051 1.029.018 1.536-.029.515-.131 1.017-.242 1.496-.12.508-.262.998-.513 1.455-.242.467-.553.935-.923 1.345-.369.398-.748.785-1.194 1.093-.445.308-.946.55-1.458.734-.51.18-1.04.315-1.566.387-.526.073-1.057.098-1.566.076-.508-.027-1.015-.064-1.49-.2-.476-.135-.947-.293-1.383-.513-.435-.223-.857-.454-1.233-.752-.372-.297-.739-.595-1.042-.949-.308-.35-.581-.735-.815-1.136-.239-.396-.45-.791-.615-1.205-.163-.415-.3-.845-.357-1.283-.057-.434-.096-.89-.076-1.344.018-.454.089-.896.215-1.336.23-.858.591-1.687 1.09-2.444.498-.758 1.162-1.422 1.953-1.973.787-.553 1.705-.97 2.669-1.263.961-.292 1.982-.46 2.997-.51.257-.01.51-.022.763-.022z"/>
                  </svg>
                </div>
                <p className="text-sm text-slate-700 italic">
                  "I used to work 7 days a week. Now I take weekends off with my kids and still make more than before."
                </p>
              </div>
            </div>
            
            {/* Escape the Hustle Card */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative overflow-hidden transition-transform hover:transform hover:scale-105">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#fff5e6] opacity-20 rounded-full -mr-8 -mt-8 z-0"></div>
              <div className="flex items-start mb-4 relative z-10">
                <div className="bg-[#fff5e6] p-3 rounded-full mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#fd8f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800">End the Constant Hustle</h3>
              </div>
              <p className="text-gray-600 mb-4 relative z-10">
                Replace exhausting quote-after-quote cycles with quality leads who already trust you before calling. Your portfolio does the selling for you.
              </p>
              <div className="mt-4 p-4 bg-slate-50 rounded-md border-l-4 border-[#fd8f01] relative z-10">
                <div className="absolute -right-2 -top-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.07-.56.136-.882.272-.318.122-.656.269-.96.485-.304.214-.646.435-.935.767-.29.33-.562.67-.79 1.069-.224.398-.465.789-.603 1.24-.142.452-.267.966-.324 1.48-.051.515-.051 1.029-.018 1.536.029.515.131 1.017.242 1.496.12.508.262.998.513 1.455.242.467.553.935.923 1.345.369.398.748.785 1.194 1.093.445.308.946.55 1.458.734.51.18 1.04.315 1.566.387.526.073 1.057.098 1.566.076.508-.027 1.015-.064 1.49-.2.476-.135.947-.293 1.383-.513.435-.223.857-.454 1.233-.752.372-.297.739-.595 1.042-.949.308-.35.581-.735.815-1.136.239-.396.45-.791.615-1.205.163-.415.3-.845.357-1.283.057-.434.096-.89.076-1.344-.018-.454-.089-.896-.215-1.336-.23-.858-.591-1.687-1.09-2.444-.498-.758-1.162-1.422-1.953-1.973-.787-.553-1.705-.97-2.669-1.263-.961-.292-1.982-.46-2.997-.51-.257-.01-.51-.022-.763-.022zm5 0c.223 0 .437.034.65.065-.069-.232-.14-.468-.254-.68-.114-.308-.292-.575-.469-.844-.148-.291-.409-.488-.601-.737-.201-.242-.475-.403-.692-.604-.213-.21-.492-.315-.714-.463-.232-.133-.434-.28-.65-.35-.208-.086-.39-.16-.539-.222-.302-.125-.474-.197-.474-.197l-.486.923c0 0 .218.052.597.144.191.048.424.104.689.171.271.07.56.136.882.272.317.122.656.269.959.485.304.214.646.435.935.767.29.33.562.67.79 1.069.224.398.465.789.603 1.24.142.452.267.966.324 1.48.051.515.051 1.029.018 1.536-.029.515-.131 1.017-.242 1.496-.12.508-.262.998-.513 1.455-.242.467-.553.935-.923 1.345-.369.398-.748.785-1.194 1.093-.445.308-.946.55-1.458.734-.51.18-1.04.315-1.566.387-.526.073-1.057.098-1.566.076-.508-.027-1.015-.064-1.49-.2-.476-.135-.947-.293-1.383-.513-.435-.223-.857-.454-1.233-.752-.372-.297-.739-.595-1.042-.949-.308-.35-.581-.735-.815-1.136-.239-.396-.45-.791-.615-1.205-.163-.415-.3-.845-.357-1.283-.057-.434-.096-.89-.076-1.344.018-.454.089-.896.215-1.336.23-.858.591-1.687 1.09-2.444.498-.758 1.162-1.422 1.953-1.973.787-.553 1.705-.97 2.669-1.263.961-.292 1.982-.46 2.997-.51.257-.01.51-.022.763-.022z"/>
                  </svg>
                </div>
                <p className="text-sm text-slate-700 italic">
                  "I've stopped stressing about where the next job is coming from. Clients now approach me already wanting to work with me."
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-slate-50 p-6 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#fd8f01] opacity-5 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#fd8f01] opacity-5 rounded-full -ml-20 -mb-20"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <div className="md:w-2/3">
                <div className="flex items-center mb-4">
                  <div className="bg-[#fd8f01] bg-opacity-10 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#fd8f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Build Real Wealth, Not Just Income</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Shift from a "need the next job" mindset to confidently growing a business that builds lasting wealth. A professional website helps you:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Set up automated invoicing systems that reduce late payment stress</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Pre-qualify leads so you only quote for serious, well-funded projects</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Build trust through testimonials and portfolio before you even speak to clients</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                <div className="relative">
                  <div className="absolute -top-2 -left-2 right-2 bottom-2 bg-[#fd8f01] opacity-10 rounded-lg transform -rotate-2"></div>
                  <div className="bg-white p-5 rounded-lg shadow-md relative">
                    <div className="absolute -top-4 -right-4 bg-green-500 text-white p-2 rounded-full shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80" 
                        alt="Tradesperson success" 
                        className="w-16 h-16 object-cover rounded-full mx-auto border-2 border-[#fd8f01]"
                      />
                    </div>
                    <h4 className="font-bold text-slate-800 mb-3 text-center">What about the cost?</h4>
                    <p className="text-gray-600 mb-4 text-center">
                      Our one-time payment model means no ongoing financial stress - unlike monthly subscription services that drain your profits year after year.
                    </p>
                    <div className="flex justify-center">
                      <Link 
                        to="/get-started" 
                        className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-2 px-4 rounded-md transition duration-300 text-center"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Website Success Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Real Tradespeople. Real Results.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how other builders and tradespeople transformed their business with a professional website.
            </p>
          </div>

          {/* Success Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Story 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12" 
                alt="Johnson Plumbing Website" 
                className="w-full h-48 object-cover"
                loading="lazy"
                width="400"
                height="200"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-800 mb-1">Johnson Plumbing</h3>
                <p className="text-[#fd8f01] font-semibold mb-4">Increased revenue by 40%</p>
                
                <div className="mb-4 text-yellow-500 flex">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                
                <p className="text-gray-700 italic mb-4">
                  "Since launching my website, I've been able to charge premium rates and still stay booked solid. Now I work fewer hours but make more money, giving me more time with my family."
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Dave Johnson</p>
                    <p className="text-sm text-gray-500">Plumber, Leeds</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Story 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e" 
                alt="Williams Electrical Website" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-800 mb-1">Williams Electrical</h3>
                <p className="text-[#fd8f01] font-semibold mb-4">Doubled client base in 6 months</p>
                
                <div className="mb-4 text-yellow-500 flex">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                
                <p className="text-gray-700 italic mb-4">
                  "My professional website set me apart from other sparkies in the area. I can now focus on bigger commercial jobs that pay better and are more interesting. Best business decision I ever made."
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Sarah Williams</p>
                    <p className="text-sm text-gray-500">Electrician, Manchester</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Story 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd" 
                alt="Davis Construction Website" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-800 mb-1">Davis Construction</h3>
                <p className="text-[#fd8f01] font-semibold mb-4">Landed 3 major renovation projects</p>
                
                <div className="mb-4 text-yellow-500 flex">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                
                <p className="text-gray-700 italic mb-4">
                  "Having a professional website gave clients confidence in my company. I'm now taken more seriously and can compete for larger projects against bigger firms. It's completely changed my business image."
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Mark Davis</p>
                    <p className="text-sm text-gray-500">Builder, Birmingham</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Value Proposition */}
          <div className="mt-12 bg-white rounded-lg p-6 shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">What a website truly means for your trade</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    </div>
                    <div>
                      <p className="text-gray-700">More time with family</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    </div>
                    <div>
                      <p className="text-gray-700">Professional credibility</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    </div>
                    <div>
                      <p className="text-gray-700">Better work-life balance</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="md:w-1/2 bg-[#fff5e6] p-5 rounded-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">Hear it from an ex-builder:</h3>
                <p className="text-gray-700 mb-4">
                  "I spent 15 years on the tools before moving into websites. The tradespeople who succeed today all have one thing in common - a professional online presence. It's not just about looking good - it's about making your life easier."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Mike Thompson</p>
                    <p className="text-sm text-gray-500">Founder, GetTradesOnline</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              to="/get-started" 
              className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-8 rounded-md transition duration-300"
            >
              Get Your Website Started Today
            </Link>
          </div>
        </div>
      </section> 

      
      {/* Add this after the Benefits Section but before the Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Easy Website Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No complicated logins or tech knowledge needed. Just message your account manager.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Need Website Changes?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Just WhatsApp your account manager with what you need. We handle all the technical work for you.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h4 className="font-bold text-xl text-slate-800 mb-4">How It Works:</h4>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#fd8f01] text-white font-bold mr-3">1</span>
                    <div>
                      <p className="text-gray-700">Message your account manager via WhatsApp</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#fd8f01] text-white font-bold mr-3">2</span>
                    <div>
                      <p className="text-gray-700">Tell us what changes you need</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#fd8f01] text-white font-bold mr-3">3</span>
                    <div>
                      <p className="text-gray-700">We'll make the updates for you</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#fd8f01] text-white font-bold mr-3">4</span>
                    <div>
                      <p className="text-gray-700">Changes live within 24 hours</p>
                    </div>
                  </li>
                </ol>
              </div>
              
             
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <img 
                src="https://res.cloudinary.com/dbmj7rhwt/image/upload/v1740798991/young-man-t-shirt-jacket-hat-holding-mobile-phone-looking-confused_pqlhz9.jpg" 
                alt="Young man looking confused while using mobile phone" 
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <WhatsAppIcon className="text-green-500" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium mb-1">Need to add new photos?</p>
                    <p className="text-gray-600 text-sm">Just WhatsApp them to me and I'll add them to your gallery within 24 hours.</p>
                    <p className="text-gray-500 text-xs mt-1">Your account manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How Your Website Will Transform Your Business</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              It's not just about having a website. It's about the freedom and confidence it brings to your life.
            </p>
            
            <div className="inline-block bg-[#fff5e6] text-[#fd8f01] text-lg font-semibold px-6 py-3 rounded-lg mb-12">
              "As a builder myself for 15 years, I've seen firsthand how a good website changes everything" - Tom, Founder
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-[#fff5e6] p-2 rounded-full mr-4">
                  <Check className="text-[#fd8f01]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Raise Your Prices</h3>
              </div>
              <p className="text-gray-600">
                With consistent leads, you can confidently charge what you're worth without fear of losing work.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-[#fff5e6] p-2 rounded-full mr-4">
                  <Check className="text-[#fd8f01]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Work Less, Earn More</h3>
              </div>
              <p className="text-gray-600">
                Choose better-paying jobs and clients, giving you more time with family while making more money.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-[#fff5e6] p-2 rounded-full mr-4">
                  <Check className="text-[#fd8f01]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Escape the Grind</h3>
              </div>
              <p className="text-gray-600">
                Replace exhausting quote-after-quote cycles with quality leads who already trust you before calling.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-[#fff5e6] p-2 rounded-full mr-4">
                  <Check className="text-[#fd8f01]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Build Real Wealth</h3>
              </div>
              <p className="text-gray-600">
                Shift from a "need the next job" mindset to confidently growing a business that builds lasting wealth.
              </p>
            </div>
          </div>
          
      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Choose Your Website Package</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the option that best fits your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* New Business Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform hover:transform hover:scale-105 flex flex-col">
              <div className="bg-[#fd8f01] text-white p-4 text-center">
                <h3 className="text-xl font-bold">New Business Package</h3>
                <p className="text-sm mt-1">For startups and new trades</p>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">£500</span>
                  <p className="text-gray-600 mt-1">One-time setup</p>
                  <p className="text-sm font-medium mt-2">+ £150/year after first year</p>
                  <div className="mt-3 bg-green-50 text-green-700 text-sm p-2 rounded">
                    Save £4,000+ compared to monthly subscriptions
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Perfect for new businesses with no online presence</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Simple branding and content creation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Basic local SEO setup</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Mobile-responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>WhatsApp integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>First year hosting included</span>
                  </li>
                </ul>
                
                <Link 
                  to="/get-started" 
                  className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-4 rounded-md transition duration-300 text-center w-full mt-auto"
                >
                  Get Started
                </Link>
              </div>
            </div>
            
            {/* Established Business Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform hover:transform hover:scale-105 flex flex-col">
              <div className="bg-slate-800 text-white p-4 text-center">
                <h3 className="text-xl font-bold">Established Business Package</h3>
                <p className="text-sm mt-1">For existing trades with more content</p>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">£750</span>
                  <p className="text-gray-600 mt-1">One-time setup</p>
                  <p className="text-sm font-medium mt-2">+ £150/year after first year</p>
                  <div className="mt-3 bg-green-50 text-green-700 text-sm p-2 rounded">
                    Save £4,000+ compared to monthly subscriptions
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Ideal for established businesses with existing content</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Migration of existing content and reviews</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Advanced local SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Portfolio/gallery of past work</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Review integration from multiple platforms</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>First year hosting included</span>
                  </li>
                </ul>
                
                <Link 
                  to="/get-started" 
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 text-center w-full mt-auto"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          
      {/* Statistics Banner */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800 text-white rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="text-3xl font-bold text-[#fd8f01] mb-1">87%</h3>
                <p className="text-sm">of customers check a tradesperson's website</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#fd8f01] mb-1">64%</h3>
                <p className="text-sm">won't consider trades without a website</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#fd8f01] mb-1">3.2x</h3>
                <p className="text-sm">more leads with a website</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
          {/* Add a section comparing our pricing to competitors */}
          <div className="max-w-4xl mx-auto mt-12 bg-gray-50 rounded-lg p-6 shadow">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">The Truth About Website Pricing</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full mb-6">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="py-3 text-left"></th>
                    <th className="py-3 text-center">Us</th>
                    <th className="py-3 text-center">Big Web Agencies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">First Year Cost</td>
                    <td className="py-3 text-center font-bold text-green-600">£500-£750 total</td>
                    <td className="py-3 text-center font-bold text-red-600">£1,980+VAT</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">Ongoing Annual Cost</td>
                    <td className="py-3 text-center font-bold text-green-600">£150/year</td>
                    <td className="py-3 text-center font-bold text-red-600">£780/year</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">5-Year Total Cost</td>
                    <td className="py-3 text-center font-bold text-green-600">£1,100-£1,350</td>
                    <td className="py-3 text-center font-bold text-red-600">£5,100+VAT</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">Support Method</td>
                    <td className="py-3 text-center">Direct WhatsApp to Tom</td>
                    <td className="py-3 text-center">Ticket system, call centers</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">Who Makes Changes</td>
                    <td className="py-3 text-center">We do it all for you</td>
                    <td className="py-3 text-center">Often DIY or extra charges</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Built By</td>
                    <td className="py-3 text-center">An actual tradesperson</td>
                    <td className="py-3 text-center">Corporate web designers</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-slate-800 text-white p-5 rounded-lg">
              <div className="flex items-start">
                <WhatsAppIcon className="text-green-400 mt-1 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-xl mb-2">Why pay them £65+VAT monthly when you can pay us £150 yearly?</h4>
                  <p className="text-gray-300">
                    The big agencies are charging you £780 a year (after your first expensive year at £1,980) for the same hosting and support services that we provide for just £150. We can do this because we don't have fancy offices or big marketing budgets - just a straight-talking tradesperson who wants to help other trades get online without being ripped off.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-10 bg-[#fff5e6] rounded-lg p-5">
            <div className="flex items-start">
              <WhatsAppIcon className="text-[#fd8f01] mt-1 mr-3 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Need a payment plan?</h3>
                <p className="text-gray-700">
                  Both packages can be split into 2 monthly payments. Just drop us a message on WhatsApp after filling out the questionnaire, and we'll sort it out for you.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <a 
                href="https://wa.me/+447424163547" 
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-md transition duration-300 flex items-center space-x-2"
              >
                <WhatsAppIcon size={20} />
                <span>Chat About Payment Options</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      
          
      
        </div>
      </section>

    </div>
  );
};

export default GetOnlinePage; 