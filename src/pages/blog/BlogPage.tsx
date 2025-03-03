import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import SEO from '../../components/SEO';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Blog | Get Trades Online - Tips & Insights for Tradespeople"
        description="Expert advice and insights for tradespeople on website design, digital marketing, and growing your business online."
        keywords="tradesperson blog, website tips, digital marketing, business growth"
        canonicalUrl="https://gettradesonline.com/blog"
      />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-gray-300">
              Expert insights and tips to help tradespeople grow their business online.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts
              .filter(post => post.featured)
              .map(post => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={post.image.url} 
                      alt={post.image.alt}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#fd8f01] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-[#fd8f01]">Read more →</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">All Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`}
                className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={post.image.url} 
                    alt={post.image.alt}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#fd8f01] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span 
                        key={tag}
                        className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage; 