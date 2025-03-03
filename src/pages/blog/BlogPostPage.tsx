import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import SEO from '../../components/SEO';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Post Not Found</h1>
          <Link 
            to="/blog" 
            className="text-[#fd8f01] hover:text-[#e68101]"
          >
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={`${post.title} | Get Trades Online Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        canonicalUrl={`https://gettradesonline.com/blog/${post.slug}`}
      />
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-16">
        <div className="absolute inset-0">
          <img 
            src={post.image.url} 
            alt={post.image.alt}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-gray-300 hover:text-white mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center text-sm text-gray-300 mb-4">
              <div className="flex items-center mr-4">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{post.excerpt}</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#fd8f01] flex items-center justify-center text-white font-bold">
                {post.author.charAt(0)}
              </div>
              <div className="ml-3">
                <div className="text-sm font-medium">{post.author}</div>
                <div className="text-sm text-gray-300">Author</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center mb-4">
              <Tag size={20} className="text-gray-400 mr-2" />
              <span className="text-gray-600">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span 
                  key={tag}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Share this post</h3>
            <div className="flex space-x-4">
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://gettradesonline.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#fd8f01]"
              >
                Twitter
              </a>
              <a 
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://gettradesonline.com/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#fd8f01]"
              >
                LinkedIn
              </a>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://gettradesonline.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#fd8f01]"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage; 