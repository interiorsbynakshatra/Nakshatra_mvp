import React from 'react';
import { Helmet } from 'react-helmet-async';

// SEO Configuration for Nakshatra Interiors
const seoConfig = {
  siteName: 'Nakshatra Interiors',
  siteUrl: 'https://nakshatrainterior.com',
  defaultTitle: 'Nakshatra Interiors | Best Interior Designers in Pune',
  defaultDescription: 'Transform your home with Nakshatra Interiors - Pune\'s leading interior design company. Specializing in 1BHK, 2BHK, 3BHK interiors, modular kitchens, and complete home solutions. 50+ projects completed. Get free consultation!',
  defaultKeywords: 'interior designer pune, home interior pune, modular kitchen pune, 2bhk interior design, 3bhk interior design, interior design company pune, best interior designer pune, affordable interior design pune, home decor pune, wardrobe design pune, false ceiling pune, interior designer pimpri chinchwad, interior designer nashik, interior designer dhule, nakshatra interiors',
  phone: '+91 8999100590',
  email: 'interiorsbynakshatra@gmail.com',
  address: 'Pune, Maharashtra, India',
  socialLinks: {
    instagram: 'https://www.instagram.com/nakshatra.interior'
  }
};

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'Nakshatra Interiors | Best Interior Designers in Pune, Pimpri-Chinchwad',
    description: 'Looking for top interior designers in Pune? Nakshatra Interiors offers complete home interior solutions - modular kitchens, bedroom designs, living room interiors. 50+ homes transformed. Free consultation!',
    keywords: 'best interior designer pune, home interior pune, modular kitchen pune, living room design pune, bedroom interior pune, interior designer pimpri chinchwad, affordable interior design pune'
  },
  about: {
    title: 'About Us | Nakshatra Interiors - Interior Design Company Pune',
    description: 'Learn about Nakshatra Interiors - a leading interior design company in Pune with 4+ years experience. Founded by Er. Akanksha Bari & Er. Namrata Hivrale. We transform spaces into dream homes.',
    keywords: 'about nakshatra interiors, interior design company pune, interior designers pune, professional interior designers'
  },
  portfolio: {
    title: 'Our Portfolio | Interior Design Projects in Pune | Nakshatra Interiors',
    description: 'Explore our portfolio of 50+ completed interior design projects in Pune, Pimpri-Chinchwad, and Maharashtra. View before/after transformations of kitchens, bedrooms, and living rooms.',
    keywords: 'interior design portfolio pune, home interior projects, modular kitchen designs, bedroom designs pune, living room interior pune'
  },
  contact: {
    title: 'Contact Us | Nakshatra Interiors Pune | Get Free Consultation',
    description: 'Contact Nakshatra Interiors for your home interior needs. Located in Pune, serving Pimpri-Chinchwad, Nashik, Dhule. Call +91 8999100590 for free consultation.',
    keywords: 'contact interior designer pune, interior design consultation pune, nakshatra interiors contact, interior designer near me pune'
  },
  costCalculator: {
    title: 'Interior Design Cost Calculator | Estimate Your Home Interior Budget',
    description: 'Calculate your home interior design cost with our free calculator. Get instant estimates for 1BHK, 2BHK, 3BHK interiors in Pune. Budget-friendly to premium options available.',
    keywords: 'interior design cost pune, home interior budget calculator, 2bhk interior cost, 3bhk interior cost, modular kitchen cost pune'
  },
  faq: {
    title: 'FAQ | Interior Design Questions Answered | Nakshatra Interiors',
    description: 'Get answers to frequently asked questions about interior design, costs, timelines, and process. Learn about our services and how we transform homes in Pune.',
    keywords: 'interior design faq, home interior questions, interior design process, interior design timeline'
  },
  getQuote: {
    title: 'Get Free Quote | Interior Design Estimate | Nakshatra Interiors Pune',
    description: 'Get a free quote for your home interior project. We offer competitive pricing for 1BHK (₹5-7L), 2BHK (₹7-10L), 3BHK (₹10-15L) interiors in Pune.',
    keywords: 'interior design quote pune, free interior consultation, interior design estimate, affordable interior design'
  },
  testimonials: {
    title: 'Client Reviews | Nakshatra Interiors | 4.8★ Rated Interior Designers Pune',
    description: 'Read what our clients say about Nakshatra Interiors. 4.8★ rated interior design company in Pune with 100+ happy customers. See our Google reviews.',
    keywords: 'nakshatra interiors reviews, interior designer reviews pune, best rated interior designer pune, client testimonials'
  }
};

// Schema.org structured data for Local Business
export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': seoConfig.siteUrl,
  name: seoConfig.siteName,
  image: `${seoConfig.siteUrl}/logo.png`,
  url: seoConfig.siteUrl,
  telephone: seoConfig.phone,
  email: seoConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Pune',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '18.5204',
    longitude: '73.8567'
  },
  areaServed: [
    { '@type': 'City', name: 'Pune' },
    { '@type': 'City', name: 'Pimpri-Chinchwad' },
    { '@type': 'City', name: 'Nashik' },
    { '@type': 'City', name: 'Dhule' }
  ],
  priceRange: '₹₹',
  openingHours: 'Mo-Sa 10:00-19:00',
  sameAs: [
    seoConfig.socialLinks.instagram
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '50'
  }
});

// Schema.org structured data for Organization
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: seoConfig.siteName,
  url: seoConfig.siteUrl,
  logo: `${seoConfig.siteUrl}/logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: seoConfig.phone,
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['en', 'hi', 'mr']
  },
  sameAs: [
    seoConfig.socialLinks.instagram
  ]
});

// SEO Component
const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage = '/logo.png',
  ogType = 'website',
  noIndex = false,
  schemaData = null 
}) => {
  const pageTitle = title || seoConfig.defaultTitle;
  const pageDescription = description || seoConfig.defaultDescription;
  const pageKeywords = keywords || seoConfig.defaultKeywords;
  const canonical = canonicalUrl || seoConfig.siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content={seoConfig.siteName} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={`${seoConfig.siteUrl}${ogImage}`} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${seoConfig.siteUrl}${ogImage}`} />
      
      {/* Geographic Tags */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Pune" />
      <meta name="geo.position" content="18.5204;73.8567" />
      <meta name="ICBM" content="18.5204, 73.8567" />
      
      {/* Additional Meta */}
      <meta name="theme-color" content="#047C74" />
      <meta name="msapplication-TileColor" content="#047C74" />
      <meta httpEquiv="content-language" content="en-IN" />
      
      {/* Mobile */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={seoConfig.siteName} />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(getLocalBusinessSchema())}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(getOrganizationSchema())}
      </script>
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
export { seoConfig };
