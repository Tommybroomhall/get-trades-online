import React from 'react';
import { Link } from 'react-router-dom';
import TeamMember from '../components/TeamMember';
import TestimonialCarousel from '../components/TestimonialCarousel';
import CaseStudyCard from '../components/CaseStudyCard';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-slate-900 text-white py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About TradesCraft Web</h1>
            <p className="text-xl text-gray-300 mb-8">
              We're a team of web professionals dedicated to helping tradesmen and construction businesses succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                TradesCraft Web was founded in 2018 with a simple mission: to help hardworking tradesmen and construction professionals establish a powerful online presence that generates real business results.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our founder, Michael Thompson, spent years working in the construction industry before transitioning to web development. He noticed that many excellent tradesmen were being overlooked because they lacked an effective online presence.
              </p>
              <p className="text-lg text-gray-600">
                Today, our team combines technical expertise with industry knowledge to create websites that speak directly to the needs of tradesmen and their customers. We understand your business and the unique challenges you face.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Team meeting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're guided by a set of core principles that inform everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To empower tradesmen and construction professionals with powerful websites that generate leads, build trust, and grow their businesses.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Quality First</h3>
              <p className="text-gray-600">
                Just like you take pride in your craftsmanship, we take pride in ours. We never cut corners and always deliver excellence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Industry Knowledge</h3>
              <p className="text-gray-600">
                We understand the trades industry and speak your language. This allows us to create websites that truly represent your business.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Results-Driven</h3>
              <p className="text-gray-600">
                We focus on creating websites that drive real business results - more leads, more customers, and more revenue.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Honest Communication</h3>
              <p className="text-gray-600">
                We believe in straightforward, jargon-free communication. We'll always be upfront about what we can deliver.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Long-Term Partnerships</h3>
              <p className="text-gray-600">
                We're not just here to build your website and disappear. We're committed to supporting your online success for the long haul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented people behind TradesCraft Web who make digital magic happen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember 
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              name="Michael Thompson"
              role="Founder & Lead Developer"
              bio="Former construction worker turned web developer. Michael combines his industry knowledge with technical expertise to create websites that truly work for tradesmen."
              linkedin="#"
              twitter="#"
              email="michael@tradescraft.com"
            />
            
            <TeamMember 
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              name="Sarah Johnson"
              role="Lead Designer"
              bio="With over 10 years of design experience, Sarah creates beautiful, functional websites that reflect the unique character of each trade business."
              linkedin="#"
              twitter="#"
              email="sarah@tradescraft.com"
            />
            
            <TeamMember 
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              name="David Williams"
              role="SEO Specialist"
              bio="David ensures your website ranks high in local searches, helping potential customers find you when they need your services."
              linkedin="#"
              twitter="#"
              email="david@tradescraft.com"
            />
            
            <TeamMember 
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              name="Emily Chen"
              role="Content Strategist"
              bio="Emily crafts compelling content that showcases your expertise and connects with your target audience."
              linkedin="#"
              twitter="#"
              email="emily@tradescraft.com"
            />
            
            <TeamMember 
              image="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              name="James Rodriguez"
              role="Project Manager"
              bio="James ensures your website project runs smoothly from start to finish, keeping everything on track and on budget."
              linkedin="#"
              twitter="#"
              email="james@tradescraft.com"
            />
            
            <TeamMember 
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              name="Lisa Taylor"
              role="Client Success Manager"
              bio="Lisa works closely with clients after launch to ensure their websites continue to perform and drive business results."
              linkedin="#"
              twitter="#"
              email="lisa@tradescraft.com"
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped tradesmen like you transform their online presence and grow their businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard 
              image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              title="Local Plumber Doubles Leads"
              client="Johnson Plumbing"
              summary="Johnson Plumbing was struggling to generate leads online. We created a conversion-focused website with clear calls to action and local SEO optimization."
              results={[
                "120% increase in website traffic",
                "98% increase in lead generation",
                "45% reduction in cost per lead",
                "First page Google ranking for key local terms"
              ]}
              link="/portfolio/johnson-plumbing"
            />
            
            <CaseStudyCard 
              image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              title="Electrician Expands Service Area"
              client="Williams Electrical"
              summary="Williams Electrical wanted to expand beyond their local area. We implemented a targeted SEO strategy to help them reach customers in neighboring cities."
              results={[
                "300% increase in organic traffic",
                "Expanded service area from 1 to 5 cities",
                "75% increase in quote requests",
                "Reduced dependency on paid advertising"
              ]}
              link="/portfolio/williams-electrical"
            />
            
            <CaseStudyCard 
              image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              title="Construction Company Showcases Portfolio"
              client="Davis Construction"
              summary="Davis Construction needed a better way to showcase their impressive project portfolio. We created a visual-focused website that highlights their craftsmanship."
              results={[
                "150% increase in time spent on site",
                "65% increase in high-value project inquiries",
                "Improved client perception of quality",
                "Featured in local business publication"
              ]}
              link="/portfolio/davis-construction"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what tradesmen like you have to say about working with us.
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's work together to create a website that showcases your craftsmanship and brings in more customers.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;