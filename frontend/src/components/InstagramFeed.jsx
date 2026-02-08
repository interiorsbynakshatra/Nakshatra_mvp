import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

const InstagramFeed = () => {
  // Replace these with your actual Instagram post URLs
  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=400&h=400&fit=crop',
      caption: 'Modern kitchen design for 3BHK apartment in Pune',
      url: 'https://www.instagram.com/nakshatra.interior'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1642541070065-3912f347e7c6?w=400&h=400&fit=crop',
      caption: 'Contemporary bedroom interior with elegant finishing',
      url: 'https://www.instagram.com/nakshatra.interior'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=400&fit=crop',
      caption: 'Warm living room design with cozy atmosphere',
      url: 'https://www.instagram.com/nakshatra.interior'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?w=400&h=400&fit=crop',
      caption: 'Sleek modular kitchen with island design',
      url: 'https://www.instagram.com/nakshatra.interior'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop',
      caption: 'Elegant living space with natural light',
      url: 'https://www.instagram.com/nakshatra.interior'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1653974123568-b5eff6d851e1?w=400&h=400&fit=crop',
      caption: 'Minimalist bedroom with modern touches',
      url: 'https://www.instagram.com/nakshatra.interior'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <Instagram className="w-8 h-8 text-[#E1306C]" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Follow Us on Instagram
            </h2>
          </div>
          <p className="text-lg text-gray-600 mb-4">
            @nakshatra.interior - Get daily design inspiration
          </p>
          <a
            href="https://www.instagram.com/nakshatra.interior"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <Instagram className="w-5 h-5" />
            <span>Follow on Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <Instagram className="w-6 h-6 mb-2" />
                  <p className="text-xs line-clamp-2">{post.caption}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            📸 These are demo images. Replace with your actual Instagram posts by updating the URLs in{' '}
            <code className="bg-gray-100 px-2 py-1 rounded text-xs">
              /app/frontend/src/components/InstagramFeed.jsx
            </code>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
