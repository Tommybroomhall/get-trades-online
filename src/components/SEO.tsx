import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterImage?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl = 'https://gettradesonline.com',
  ogImage = 'https://gettradesonline.com/og-image.jpg',
  ogType = 'website',
  twitterImage = 'https://gettradesonline.com/twitter-image.jpg',
}) => {
  // Ensure the title is properly formatted with the brand name
  const formattedTitle = title.includes('Get Trades Online') 
    ? title 
    : `${title} | Get Trades Online`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={formattedTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={twitterImage} />
    </Helmet>
  );
};

export default SEO; 