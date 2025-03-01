import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LocalBusinessStructuredDataProps {
  name: string;
  description: string;
  url: string;
  telephone?: string;
  image?: string;
  priceRange?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  geo?: {
    latitude?: number;
    longitude?: number;
  };
  sameAs?: string[];
}

const StructuredData: React.FC<LocalBusinessStructuredDataProps> = ({
  name,
  description,
  url,
  telephone,
  image,
  priceRange,
  address,
  geo,
  sameAs
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    url,
    ...(telephone && { telephone }),
    ...(image && { image }),
    ...(priceRange && { priceRange }),
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        ...address
      }
    }),
    ...(geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude
      }
    }),
    ...(sameAs && { sameAs })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData; 