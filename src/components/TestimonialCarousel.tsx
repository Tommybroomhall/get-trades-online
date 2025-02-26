import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  trade: string;
  rating: number;
  text: string;
  image: string;
  deliveryTime: number;
  features: string[];
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mike Johnson",
    company: "Johnson Plumbing",
    trade: "Plumber",
    rating: 5,
    text: "TradesCraft Web transformed our online presence. Since launching our new website, we've seen a 40% increase in leads and our conversion rate has doubled. The team understood exactly what our plumbing business needed.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    deliveryTime: 48,
    features: ["AI Chat", "Review Aggregation", "Auto Updates"]
  },
  {
    id: 2,
    name: "Sarah Williams",
    company: "Williams Electrical",
    trade: "Electrician",
    rating: 5,
    text: "As an electrician, I needed a website that could generate leads while I'm out on jobs. TradesCraft delivered exactly that. Their SEO work has put me at the top of local search results, and the mobile-friendly design means customers can contact me easily.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    name: "Robert Davis",
    company: "Davis Construction",
    trade: "Builder",
    rating: 4,
    text: "The team at TradesCraft Web understood our construction business needs perfectly. They built us a website that showcases our projects beautifully and brings in quality leads. The investment has paid for itself many times over.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 4,
    name: "Lisa Thompson",
    company: "Thompson Painting",
    trade: "Painter",
    rating: 5,
    text: "Our painting business has grown exponentially since TradesCraft Web redesigned our website. The before and after project gallery they created has been instrumental in showing potential clients the quality of our work.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: number | undefined;
    
    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-500">
            <img 
              src={testimonials[currentIndex].image} 
              alt={testimonials[currentIndex].name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <div className="mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              Delivered in {testimonials[currentIndex].deliveryTime} hours
            </span>
          </div>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                size={20}
                fill={i < testimonials[currentIndex].rating ? "#FBBF24" : "none"}
                stroke={i < testimonials[currentIndex].rating ? "#FBBF24" : "#9CA3AF"}
                className="mr-1"
              />
            ))}
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-slate-800 mb-2">INCLUDED FEATURES:</h4>
            <div className="flex flex-wrap gap-2">
              {testimonials[currentIndex].features.map((feature, index) => (
                <span key={index} className="bg-gray-100 text-slate-800 px-2 py-1 rounded-md text-sm">
                  {feature}
                </span>
              ))}
            </div>
          </div>
          
          <blockquote className="text-lg italic text-gray-700 mb-4">
            "{testimonials[currentIndex].text}"
          </blockquote>
          
          <div>
            <p className="font-bold text-slate-800">{testimonials[currentIndex].name}</p>
            <p className="text-blue-600">{testimonials[currentIndex].company}</p>
            <p className="text-gray-500">{testimonials[currentIndex].trade}</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 p-2 rounded-full shadow-md"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 p-2 rounded-full shadow-md"
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default TestimonialCarousel;