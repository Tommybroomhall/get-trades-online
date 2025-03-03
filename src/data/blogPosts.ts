import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Get More Leads for Your Trade Business in 2025',
    slug: 'how-to-get-more-leads-for-your-trade-business-2025',
    excerpt: 'Discover proven strategies to attract more customers and grow your trade business in the digital age. Learn how to leverage online marketing, build trust, and measure your success.',
    content: `
      <div class="mb-12">
        <img 
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Tradesperson using digital tools for business growth"
          class="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>

      <h2>Introduction</h2>
      <p><strong>As a tradesperson, finding new leads is essential for business success.</strong> In 2025, potential customers are increasingly turning to the internet to find tradespeople in their local area. If you're not visible online, you're missing out on a huge opportunity to grow your business and could even be losing customers to competitors with a stronger online presence.</p>
      
      <div class="my-12 bg-[#0F172A] text-white p-8 rounded-lg relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-[#fd8f01]/10 to-transparent"></div>
        <div class="relative z-10">
          <div class="flex items-center gap-3 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#fd8f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 class="text-2xl font-bold">The Digital Reality for Tradespeople in 2025</h3>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
              <div class="flex items-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#fd8f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h4 class="font-bold text-lg">Online Search Dominance</h4>
              </div>
              <p class="text-3xl font-bold text-[#fd8f01] mb-2">85%</p>
              <p class="text-sm text-gray-300">of customers search for local tradespeople online</p>
              <p class="text-xs text-gray-400 mt-2">Without a website, you're invisible to most potential customers</p>
            </div>

            <div class="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
              <div class="flex items-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#fd8f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <h4 class="font-bold text-lg">Lead Generation Impact</h4>
              </div>
              <p class="text-3xl font-bold text-[#fd8f01] mb-2">60%</p>
              <p class="text-sm text-gray-300">of tradespeople report increased leads from their website</p>
              <p class="text-xs text-gray-400 mt-2">Your competitors are already reaping these benefits</p>
            </div>

            <div class="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
              <div class="flex items-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#fd8f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h4 class="font-bold text-lg">Customer Trust Factor</h4>
              </div>
              <p class="text-3xl font-bold text-[#fd8f01] mb-2">45%</p>
              <p class="text-sm text-gray-300">of customers won't hire a tradesperson without an online presence</p>
              <p class="text-xs text-gray-400 mt-2">You're losing nearly half of potential customers</p>
            </div>
          </div>

          <div class="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h4 class="font-bold text-red-500 mb-2">The Hidden Cost of No Online Presence</h4>
                <p class="text-sm text-gray-300">Without a professional website, you're forced to:</p>
                <ul class="text-sm text-gray-300 mt-2 space-y-1">
                  <li>• Scramble for leads in Facebook groups</li>
                  <li>• Rely solely on word-of-mouth referrals</li>
                  <li>• Miss out on high-value customers</li>
                  <li>• Work harder for fewer opportunities</li>
                </ul>
                <p class="text-xs text-red-400 mt-3">Don't let your business fade into obscurity - get online today.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>Why is a Strong Online Presence Important for Tradespeople?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Professional tradesperson website showcasing work"
            class="w-full h-[300px] object-cover rounded-lg shadow-md"
          />
        </div>
        <div>
          <p><strong>Having a strong online presence is no longer optional for tradespeople; it's a necessity.</strong> Here's why:</p>
          <ul class="mt-4 space-y-3">
            <li><strong>Increased Visibility and Accessibility:</strong> When potential customers search for services online, a website and social media presence make it easier for them to find you.</li>
            <li><strong>Credibility and Professionalism:</strong> A well-maintained website shows that you are serious about your business.</li>
            <li><strong>Showcase Your Work:</strong> A website provides the perfect platform to display photos and videos of your projects.</li>
          </ul>
        </div>
      </div>

      <h2>Most Effective Online Marketing Strategies for Tradespeople</h2>
      
      <div class="my-12">
        <h3 class="text-2xl font-bold mb-6">1. Develop a Strong Website</h3>
        <img 
          src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Mobile-friendly website design for tradespeople"
          class="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
        />
        <p><strong>Your website is the foundation of your online presence and often the first impression potential customers have of your business.</strong> It should be well-designed, user-friendly, and optimized for search engines.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h4 class="font-bold text-lg mb-3">Essential Information</h4>
            <ul class="space-y-2">
              <li><strong>Clear service descriptions</strong></li>
              <li><strong>Service area details</strong></li>
              <li><strong>Contact information</strong></li>
              <li><strong>Project gallery</strong></li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h4 class="font-bold text-lg mb-3">Trust Signals</h4>
            <ul class="space-y-2">
              <li><strong>Customer testimonials</strong></li>
              <li><strong>Accreditations</strong></li>
              <li><strong>Reviews and ratings</strong></li>
              <li><strong>Professional certifications</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="my-12">
        <h3 class="text-2xl font-bold mb-6">2. Search Engine Optimization (SEO)</h3>
        <img 
          src="https://images.unsplash.com/photo-1486406146923-c433d7b6b3b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="SEO optimization for local tradespeople"
          class="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h4 class="font-bold text-lg mb-3">Keyword Research</h4>
            <p><strong>Research and target the right keywords that your potential customers are searching for.</strong></p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h4 class="font-bold text-lg mb-3">On-page Optimization</h4>
            <p><strong>Optimize your website's content and structure for better search engine visibility.</strong></p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h4 class="font-bold text-lg mb-3">Local SEO</h4>
            <p><strong>Focus on local search optimization to attract customers in your service area.</strong></p>
          </div>
        </div>
      </div>

      <div class="my-12">
        <h3 class="text-2xl font-bold mb-6">3. Social Media Marketing</h3>
        <img 
          src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Social media marketing for tradespeople"
          class="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-bold text-lg mb-3">Platform Strategy</h4>
            <ul class="space-y-2">
              <li><strong>Facebook for community building</strong></li>
              <li><strong>Instagram for visual content</strong></li>
              <li><strong>LinkedIn for professional networking</strong></li>
              <li><strong>YouTube for video tutorials</strong></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-lg mb-3">Content Types</h4>
            <ul class="space-y-2">
              <li><strong>Before/after project photos</strong></li>
              <li><strong>Customer testimonials</strong></li>
              <li><strong>Behind-the-scenes content</strong></li>
              <li><strong>Educational content</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="my-12">
        <h3 class="text-2xl font-bold mb-6">4. Measuring Success</h3>
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Analytics and tracking for trade businesses"
          class="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
        />
        <div class="bg-slate-50 p-6 rounded-lg">
          <h4 class="font-bold text-lg mb-4">Key Metrics to Track</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 class="font-semibold mb-2">Website Performance</h5>
              <ul class="space-y-2">
                <li><strong>Website traffic</strong></li>
                <li><strong>Time on site</strong></li>
                <li><strong>Bounce rate</strong></li>
                <li><strong>Conversion rate</strong></li>
              </ul>
            </div>
            <div>
              <h5 class="font-semibold mb-2">Business Impact</h5>
              <ul class="space-y-2">
                <li><strong>Lead generation</strong></li>
                <li><strong>Customer acquisition cost</strong></li>
                <li><strong>Customer lifetime value</strong></li>
                <li><strong>ROI</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="my-12 bg-[#fd8f01] text-white p-8 rounded-lg">
        <h3 class="text-2xl font-bold mb-4">Ready to Grow Your Trade Business Online?</h3>
        <p class="mb-6"><strong>Get started with a professional website that helps you attract more customers and grow your business.</strong></p>
        <a href="/get-online" class="inline-block bg-white text-[#fd8f01] px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors duration-300">
          Start Your Website Today
        </a>
      </div>

      <h2>Conclusion</h2>
      <p><strong>By implementing these strategies and tracking your results, you can significantly increase your lead generation and grow your trade business in 2025.</strong> Remember to stay up-to-date with the latest marketing trends and technologies, and always focus on providing value to your customers. With a strong online presence and effective marketing strategies, you can attract more leads and build a successful trade business.</p>
    `,
    author: 'Tom Broomhall',
    date: '2025-03-15',
    readTime: '10 min read',
    category: 'Marketing',
    tags: ['leads', 'marketing', 'business growth', 'digital presence', 'SEO', 'social media', 'content marketing', 'ROI'],
    image: {
      url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Business growth strategies for tradespeople'
    },
    featured: true
  },
  {
    id: '2',
    title: 'Essential Features Every Tradesperson Website Needs',
    slug: 'essential-features-tradesperson-website',
    excerpt: 'Discover the must-have features that will help your website stand out and convert visitors into customers.',
    content: `
      <h2>Introduction</h2>
      <p>Your website is your digital shop window. Here are the essential features that every tradesperson website needs to succeed.</p>
      
      <h2>1. Clear Contact Information</h2>
      <p>Make it easy for potential customers to reach you:</p>
      <ul>
        <li>Prominent phone number</li>
        <li>WhatsApp contact button</li>
        <li>Contact form</li>
        <li>Business hours</li>
      </ul>
      
      <h2>2. Portfolio Gallery</h2>
      <p>Showcase your work effectively:</p>
      <ul>
        <li>High-quality images</li>
        <li>Before and after comparisons</li>
        <li>Project descriptions</li>
        <li>Easy navigation</li>
      </ul>
      
      <h2>3. Service Areas</h2>
      <p>Help customers understand your coverage area:</p>
      <ul>
        <li>Interactive map</li>
        <li>List of covered areas</li>
        <li>Travel radius information</li>
        <li>Service area limitations</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Implementing these features will help your website attract and convert more customers.</p>
    `,
    author: 'Tom Broomhall',
    date: '2024-03-10',
    readTime: '4 min read',
    category: 'Web Design',
    tags: ['website features', 'web design', 'user experience', 'conversion'],
    image: {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Essential website features for tradespeople'
    },
    featured: true
  }
]; 