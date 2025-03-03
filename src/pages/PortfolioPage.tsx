import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Calendar, CheckCircle, Clock, ArrowRight, Star, ExternalLink, Construction, Factory, PenTool, CheckSquare, Code, Rocket, Circle } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import Lottie from 'react-lottie-player';
import constructionAnimation from '../assets/construction-animation.json';

// Project type definitions
interface BaseProject {
  id: string;
  title: string;
  businessType: string;
  description: string;
  image: string;
  logoImage?: string;
}

interface CompletedProject extends BaseProject {
  websiteUrl: string;
  completionDate: string;
  reviews: {
    text: string;
    author: string;
    rating: number;
  }[];
}

interface InProgressProject extends BaseProject {
  startDate: string;
  progress: number; // 0-100
  estimatedCompletion: string;
  currentPhase: string;
  phaseNumber: number; // 1-4 indicating which phase the project is in
}

interface UpcomingProject extends BaseProject {
  queuePosition: number;
  estimatedStartDate: string;
  clientName: string;
  clientLocation: string;
}

const PortfolioPage = () => {
  // Data for completed projects
  const completedProjects: CompletedProject[] = [
    {
      id: "johnson-plumbing",
      title: "Johnson Plumbing",
      businessType: "Plumbing Services",
      description: "A modern, responsive website featuring online booking, emergency service requests, and a comprehensive service catalog.",
      image: "https://res.cloudinary.com/dbmj7rhwt/image/upload/v1740850892/481044673_2232268817228929_4486988628446735392_n_giivtf.jpg",
      logoImage: "https://res.cloudinary.com/dbmj7rhwt/image/upload/v1740851021/451430775_793872029400696_77012643611861594_n_imbyya.jpg",
      websiteUrl: "https://johnsonplumbing.co.uk",
      completionDate: "27 February 2025",
      reviews: [
        {
          text: "Since launching my website, I've been able to charge premium rates and still stay booked solid. Now I work fewer hours but make more money.",
          author: "Dave Johnson, Leeds",
          rating: 5
        }
      ]
    },
    {
      id: "custom-woodworx",
      title: "Custom Woodworx",
      businessType: "Kitchen & Carpentry",
      description: "A visually stunning portfolio website showcasing custom kitchen installations and woodworking projects with detailed galleries.",
      image: "https://res.cloudinary.com/dbmj7rhwt/image/upload/v1740940143/Untitled_1400_x_900_px_1_plhnyz.png",
      logoImage: "https://res.cloudinary.com/dbmj7rhwt/image/upload/v1740851642/249182591_601724691263411_6691079301606056254_n_xftz5u.jpg",
      websiteUrl: "https://customwoodworx.co.uk",
      completionDate: "22 February 2025",
      reviews: [
        {
          text: "I had no idea how much work I was missing until I got my website. The quality of inquiries is much higher, and clients come to me already knowing what we can do.",
          author: "Jamie Hoare, Bristol",
          rating: 5
        }
      ]
    },
    {
      id: "cheshire-painting",
      title: "Cheshire Painting and Decorating",
      businessType: "Painting & Decorating",
      description: "A professional website with an extensive portfolio gallery, client testimonials, and service area information for this painting business.",
      image: "https://res.cloudinary.com/dbmj7rhwt/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1740854868/unnamed_xf4gml.webp",
      logoImage: "https://res.cloudinary.com/dbmj7rhwt/image/upload/v1740854868/unnamed_1_rjt2va.webp",
      websiteUrl: "https://cheshirepaintingdecorating.co.uk",
      completionDate: "18 February 2025",
      reviews: [
        {
          text: "Get Trades Online got me up and running in no time. I was shocked at how easy it is to manage the website. It looks so professional and has already brought in several high-end clients.",
          author: "Paul Roberts, Cheshire",
          rating: 5
        }
      ]
    }
  ];

  // Data for in-progress projects
  const inProgressProjects: InProgressProject[] = [
    {
      id: "sunset-landscaping",
      title: "Sunset Landscaping & Gardens",
      businessType: "Landscaping Services",
      description: "Developing a website showcasing garden transformations, maintenance services, and seasonal offerings with an integrated booking system.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      logoImage: "https://placehold.co/100x100/orange/white?text=SL",
      startDate: "27 February 2025",
      progress: 90,
      estimatedCompletion: "3 March 2025",
      currentPhase: "Launch Preparation",
      phaseNumber: 4
    },
    {
      id: "elite-roofing",
      title: "Elite Roofing Solutions",
      businessType: "Roofing Contractor",
      description: "Developing a complete roofing service website with before/after gallery, emergency repair information, and free quote functionality.",
      image: "https://images.unsplash.com/photo-1588012886079-6c2a6f692e3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      logoImage: "https://placehold.co/100x100/orange/white?text=ER",
      startDate: "28 February 2025",
      progress: 40,
      estimatedCompletion: "3 March 2025",
      currentPhase: "Design Approval",
      phaseNumber: 2
    },
    {
      id: "smith-electrical",
      title: "Smith Electrical Services",
      businessType: "Electrical Contractor",
      description: "Building a professional website with emergency callout features, service area maps, and certifications display.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      logoImage: "https://placehold.co/100x100/orange/white?text=SE",
      startDate: "1 March 2025",
      progress: 75,
      estimatedCompletion: "4 March 2025",
      currentPhase: "Content Implementation",
      phaseNumber: 3
    },
    {
      id: "brighton-builders",
      title: "Brighton Builders & Renovations",
      businessType: "General Contractor",
      description: "Creating a showcase website with project galleries, service breakdown, and client testimonials for this established building firm.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89f12d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      logoImage: "https://placehold.co/100x100/orange/white?text=BB",
      startDate: "2 March 2025",
      progress: 20,
      estimatedCompletion: "5 March 2025",
      currentPhase: "Initial Design",
      phaseNumber: 1
    }
  ];

  // Data for upcoming projects
  const upcomingProjects: UpcomingProject[] = [
    {
      id: "jones-landscaping",
      title: "Jones Landscaping & Garden Design",
      businessType: "Landscaping Services",
      description: "Creating a portfolio-focused website with season-specific services, maintenance plans, and interactive project galleries.",
      image: "https://images.unsplash.com/photo-1599629954294-14df9f8291bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      queuePosition: 1,
      estimatedStartDate: "5 March 2025",
      clientName: "Mark Jones",
      clientLocation: "Manchester"
    },
    {
      id: "superior-tiling",
      title: "Superior Tiling & Bathroom Fitting",
      businessType: "Tiling & Bathroom Installation",
      description: "Building a comprehensive service website with detailed bathroom renovation portfolio, free consultations, and pricing guides.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      queuePosition: 2,
      estimatedStartDate: "8 March 2025",
      clientName: "Steve Williams",
      clientLocation: "Birmingham"
    },
    {
      id: "reynolds-hvac",
      title: "Reynolds Heating & Cooling",
      businessType: "HVAC Services",
      description: "Creating a service-focused website with emergency repair information, maintenance plans, and seasonal special offers.",
      image: "https://images.unsplash.com/photo-1613323593608-abc90fea564f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      queuePosition: 3,
      estimatedStartDate: "11 March 2025",
      clientName: "Alan Reynolds",
      clientLocation: "Sheffield"
    }
  ];

  // Function to render star ratings
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={`${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };

  // Function to render progress bar
  const renderProgressBar = (progress: number) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
        <div 
          className="bg-[#fd8f01] h-4 rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };

  // Function to render progress tracker (Domino's pizza style)
  const renderProgressTracker = (phaseNumber: number) => {
    const phases = [
      { name: "Initial Design", icon: "PenTool" },
      { name: "Design Approval", icon: "CheckSquare" },
      { name: "Content Implementation", icon: "Code" },
      { name: "Launch Preparation", icon: "Rocket" }
    ];
    
    return (
      <div className="w-full my-4">
        <div className="relative">
          {/* Background track */}
          <div className="h-2 bg-slate-700 rounded-full w-full absolute top-4"></div>
          
          {/* Phases container */}
          <div className="flex justify-between relative">
            {phases.map((phase, index) => {
              const isComplete = index + 1 <= phaseNumber;
              const isCurrent = index + 1 === phaseNumber;
              
              // Icon based on phase
              let PhaseIcon;
              switch(phase.icon) {
                case "PenTool": 
                  PhaseIcon = <PenTool size={16} />;
                  break;
                case "CheckSquare":
                  PhaseIcon = <CheckSquare size={16} />;
                  break;
                case "Code":
                  PhaseIcon = <Code size={16} />;
                  break;
                case "Rocket":
                  PhaseIcon = <Rocket size={16} />;
                  break;
                default:
                  PhaseIcon = <Circle size={16} />;
              }
              
              return (
                <div key={index} className="flex flex-col items-center relative z-10">
                  {/* Phase circle */}
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isComplete 
                        ? 'bg-[#fd8f01] text-white' 
                        : isCurrent 
                          ? 'bg-white border-2 border-[#fd8f01] text-[#fd8f01]' 
                          : 'bg-slate-700 text-slate-500'
                    } ${isCurrent ? 'ring-4 ring-[#fd8f01]/20' : ''}`}
                  >
                    {PhaseIcon}
                  </div>
                  
                  {/* Phase name */}
                  <p className={`text-xs font-medium mt-2 text-center ${
                    isComplete || isCurrent ? 'text-white' : 'text-slate-500'
                  }`}>
                    {phase.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // Sort inProgressProjects by progress percentage (highest first)
  const sortedInProgressProjects = [...inProgressProjects].sort((a, b) => {
    return b.progress - a.progress;
  });

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-12 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our Portfolio & Project Pipeline
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See our completed websites, current projects in development, and upcoming work in our queue.
          </p>
        </div>
      </section>

      {/* Completed Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-10">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800">Completed Projects</h2>
              <p className="text-gray-600">Websites we've built and launched for happy clients</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map(project => (
              project.id === "custom-woodworx" ? (
                /* Custom card for CustomWoodworx */
                <div key={project.id} className="col-span-1 lg:col-span-2 bg-gradient-to-tr from-[#1B2637] to-[#2d3b50] rounded-lg shadow-lg overflow-hidden border border-[#fd8f01] transition-transform hover:transform hover:scale-102 flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-0 right-0 m-4">
                      <div className="bg-white p-1 rounded-full overflow-hidden shadow-md h-12 w-12 flex items-center justify-center">
                        {project.logoImage && (
                          <img 
                            src={project.logoImage} 
                            alt={`${project.title} logo`}
                            className="w-10 h-10 object-contain"
                          />
                        )}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1B2637] to-transparent p-4">
                      <div className="flex items-center">
                        <div className="bg-[#fd8f01] text-white text-xs px-3 py-1 rounded-full font-bold flex items-center">
                          <Star size={12} className="mr-1" />
                          Featured Project
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-bold text-2xl text-white mb-1">{project.title}</h3>
                          <p className="text-[#fd8f01] text-sm font-medium">{project.businessType}</p>
                        </div>
                        <span className="text-gray-300 text-sm">Completed {project.completionDate}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      
                      {/* Additional feature highlights */}
                      <div className="mb-4">
                        <h4 className="text-white font-medium mb-2">Special Features:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle size={16} className="text-[#fd8f01] mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">Custom portfolio showcasing</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={16} className="text-[#fd8f01] mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">Personalized "links" page like Linktree</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={16} className="text-[#fd8f01] mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">Mobile-optimized gallery</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Reviews section */}
                    {project.reviews.length > 0 && (
                      <div className="bg-[#2d3b50] p-4 rounded-md mb-4">
                        <div className="flex items-center mb-2">
                          <div className="flex mr-2">
                            {renderStars(project.reviews[0].rating)}
                          </div>
                          <span className="text-sm text-gray-400">Client Testimonial</span>
                        </div>
                        <p className="text-white italic text-sm mb-2">"{project.reviews[0].text}"</p>
                        <p className="text-gray-400 text-sm font-medium">- {project.reviews[0].author}</p>
                      </div>
                    )}
                    
                    <div className="flex space-x-3 mt-2">
                      <a 
                        href={project.websiteUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-white bg-[#fd8f01] hover:bg-[#e68101] px-3 py-2 rounded-md font-medium transition-colors text-sm"
                      >
                        Visit Website <ExternalLink size={14} className="ml-2" />
                      </a>
                      <a 
                        href={`${project.websiteUrl}/links`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-[#fd8f01] border border-[#fd8f01] hover:bg-[#fd8f01] hover:text-white px-3 py-2 rounded-md font-medium transition-colors text-sm"
                      >
                        See Links Page <ExternalLink size={14} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                /* Standard card for other projects */
                <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform hover:transform hover:scale-105 flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-0 right-0 m-4">
                      <div className="bg-white p-1 rounded-full overflow-hidden shadow-md h-10 w-10 flex items-center justify-center">
                        {project.logoImage && (
                          <img 
                            src={project.logoImage} 
                            alt={`${project.title} logo`}
                            className="w-8 h-8 object-contain"
                          />
                        )}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <div className="flex items-center">
                        <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center">
                          <CheckCircle size={12} className="mr-1" />
                          Completed
                        </div>
                        <span className="text-white text-sm ml-2">{project.completionDate}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <h3 className="font-bold text-xl text-slate-800 mb-1">{project.title}</h3>
                    <p className="text-[#fd8f01] text-sm font-medium mb-3">{project.businessType}</p>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    
                    {/* Reviews section */}
                    {project.reviews.length > 0 && (
                      <div className="bg-gray-50 p-4 rounded-md mb-4">
                        <div className="flex items-center mb-2">
                          <div className="flex mr-2">
                            {renderStars(project.reviews[0].rating)}
                          </div>
                          <span className="text-sm text-gray-500">Client Review</span>
                        </div>
                        <p className="text-gray-700 italic text-sm mb-2">"{project.reviews[0].text}"</p>
                        <p className="text-gray-600 text-sm font-medium">- {project.reviews[0].author}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 border-t border-gray-200 bg-gray-50">
                    <a 
                      href={project.websiteUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-slate-800 font-medium hover:text-[#fd8f01] transition-colors"
                    >
                      Visit Website <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>
      
      {/* In Progress Projects Section */}
      <section className="py-16 bg-[#1B2637]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-10">
            <div className="bg-[#fd8f01] p-3 rounded-full mr-4">
              <Construction className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">In Progress</h2>
              <p className="text-gray-300">Websites currently being built for our clients</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="hidden md:flex md:w-1/3 justify-center mb-8 md:mb-0">
              <Lottie
                loop
                animationData={constructionAnimation}
                play
                style={{ width: 250, height: 250 }}
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-white text-lg mb-4">
                Our team is currently working on these projects in real-time. From initial design to final launch, we build custom websites in just <span className="font-bold text-[#fd8f01]">3 days</span>.
              </p>
              
              {/* Our 4-phase process explanation */}
              <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 mb-4">
                <h3 className="text-white font-medium mb-2 flex items-center">
                  <Factory className="h-5 w-5 mr-2 text-[#fd8f01]" />
                  Our Website Factory
                </h3>
                <p className="text-gray-300 text-sm">
                  Every website goes through our 4-phase production line. Track exactly where your project is in our development process.
                </p>
              </div>
            </div>
          </div>
          
          {/* Horizontal scroll indicator for mobile */}
          <div className="md:hidden flex items-center justify-center mb-4 text-gray-300">
            <ArrowRight className="h-4 w-4 mr-2 animate-pulse" />
            <span className="text-sm">Swipe to see more projects</span>
            <ArrowRight className="h-4 w-4 ml-2 animate-pulse" />
          </div>

          {/* Horizontal scrollable container for mobile, grid for larger screens */}
          <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex overflow-x-auto pb-4 sm:pb-0 sm:grid sm:grid-cols-1 md:grid-cols-2 sm:gap-8 snap-x">
              {sortedInProgressProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="flex-shrink-0 w-[90vw] max-w-[360px] sm:w-full sm:max-w-none mr-4 sm:mr-0 snap-start"
                >
                  <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700 h-full">
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          {project.logoImage && (
                            <div className="bg-white p-1 rounded-full overflow-hidden shadow-md h-10 w-10 flex items-center justify-center mr-3">
                              <img 
                                src={project.logoImage} 
                                alt={`${project.title} logo`}
                                className="w-8 h-8 object-contain"
                              />
                            </div>
                          )}
                          <div>
                            <h3 className="font-bold text-xl text-white">{project.title}</h3>
                            <p className="text-[#fd8f01] text-sm font-medium">{project.businessType}</p>
                          </div>
                        </div>
                        <div className="bg-[#fd8f01] text-white text-xs px-3 py-1 rounded-full font-medium flex items-center shadow-md">
                          <Construction size={12} className="mr-1" />
                          <span>Phase {project.phaseNumber}</span>
                        </div>
                      </div>
                      
                      {/* Domino's style tracker */}
                      {renderProgressTracker(project.phaseNumber)}
                      
                      <div className="mt-4 mb-2">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-300">{project.progress}% Complete</span>
                          <span className="text-sm font-medium text-gray-300">{project.currentPhase}</span>
                        </div>
                        {renderProgressBar(project.progress)}
                      </div>
                      
                      <div className="flex justify-between text-xs text-gray-400 mt-3">
                        <span>Started: {project.startDate}</span>
                        <span>Est. Completion: {project.estimatedCompletion}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-10">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800">Coming Soon</h2>
              <p className="text-gray-600">Websites scheduled for development in our upcoming queue</p>
            </div>
          </div>
          
          <div className="space-y-6">
            {upcomingProjects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-xl text-slate-800 mb-1">{project.title}</h3>
                      <p className="text-[#fd8f01] text-sm font-medium">{project.businessType}</p>
                    </div>
                    <div className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full font-medium flex items-center shadow-md">
                      <span>Queue #{project.queuePosition}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                      <div className="bg-gray-100 p-2 rounded-full mr-3">
                        <Calendar size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Estimated Start</p>
                        <p className="font-medium">{project.estimatedStartDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-gray-100 p-2 rounded-full mr-3">
                        <Hammer size={16} className="text-slate-800" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Client</p>
                        <p className="font-medium">{project.clientName}, {project.clientLocation}</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="bg-blue-50 p-3 rounded-md inline-flex items-center">
                    <Clock size={16} className="text-blue-600 mr-2" />
                    <span className="text-sm text-blue-800">
                      {project.queuePosition === 1 
                        ? "Next in our queue - starting soon!" 
                        : `${project.queuePosition}${project.queuePosition === 2 ? 'nd' : 'rd'} in our development queue`}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-[#fff5e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <WhatsAppIcon className="text-green-600" size={40} />
                </div>
                
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">Want to join our project queue?</h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Ready to get your trade business online with a professional website? Chat with us about your ideas and requirements.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    <strong>No tech talk. No complicated forms.</strong> Just tell us what would make your life easier, and we'll sort it.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://wa.me/+447424163547" 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 flex items-center"
                    >
                      <WhatsAppIcon size={20} className="mr-2" />
                      <span>Chat About Your Ideas</span>
                    </a>
                    <Link 
                      to="/get-started" 
                      className="bg-[#fd8f01] hover:bg-[#e68101] text-white font-bold py-3 px-6 rounded-md transition duration-300 flex items-center"
                    >
                      <span>Start Your Website</span>
                      <ArrowRight size={20} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
              <div className="flex items-start">
                <Hammer className="text-[#fd8f01] mr-3 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">
                  <span className="font-semibold">Builder to Builder:</span> We know what it's like on site. You have ideas and no time for complicated tech stuff. That's why we keep it simple.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage; 