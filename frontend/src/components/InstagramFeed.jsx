import React, { useEffect } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

const InstagramFeed = () => {
  const instagramUsername = 'nakshatra.interior';
  const instagramUrl = 'https://www.instagram.com/nakshatra.interior';

  // Load Elfsight widget script for embedded Instagram feed
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Trigger Instagram embed processing
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-xl">
              <Instagram className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Follow Our Journey
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            @{instagramUsername}
          </p>
          <p className="text-base text-gray-500 mb-6">
            Daily design inspiration, project updates & behind-the-scenes
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] hover:opacity-90 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            data-testid="instagram-follow-btn"
          >
            <Instagram className="w-5 h-5" />
            <span>Follow @{instagramUsername}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Instagram Profile Embed */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex flex-col items-center">
              {/* Instagram Profile Card */}
              <div className="w-full text-center mb-8">
                <div className="inline-block p-1 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] mb-4">
                  <div className="bg-white p-1 rounded-full">
                    <img
                      src="/logo.png"
                      alt="Nakshatra Interiors"
                      className="w-24 h-24 rounded-full object-contain p-2"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Nakshatra Interiors</h3>
                <p className="text-gray-500 mb-3">@{instagramUsername}</p>
                <p className="text-sm text-gray-600 max-w-md mx-auto mb-4">
                  🏠 Interior Design Studio | Pune, Maharashtra<br />
                  ✨ Transforming spaces into dream homes<br />
                  📞 +91 8999100590
                </p>
                <div className="flex justify-center gap-8 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-sm text-gray-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">4+</div>
                    <div className="text-sm text-gray-500">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">100+</div>
                    <div className="text-sm text-gray-500">Happy Clients</div>
                  </div>
                </div>
              </div>

              {/* Recent Posts Preview */}
              <div className="w-full">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Recent Posts</h4>
                <div className="grid grid-cols-3 gap-2 md:gap-4">
                  {[
                    { img: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=400&h=400&fit=crop', alt: 'Modern Kitchen' },
                    { img: 'https://images.unsplash.com/photo-1642541070065-3912f347e7c6?w=400&h=400&fit=crop', alt: 'Elegant Bedroom' },
                    { img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=400&fit=crop', alt: 'Cozy Living Room' },
                    { img: 'https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?w=400&h=400&fit=crop', alt: 'Premium Kitchen' },
                    { img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop', alt: 'Living Space' },
                    { img: 'https://images.unsplash.com/photo-1653974123568-b5eff6d851e1?w=400&h=400&fit=crop', alt: 'Minimalist Bedroom' },
                  ].map((post, index) => (
                    <a
                      key={index}
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aspect-square overflow-hidden rounded-lg group relative"
                    >
                      <img
                        src={post.img}
                        alt={post.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </a>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-[#E1306C] hover:text-[#833AB4] font-medium transition-colors duration-200"
                  >
                    <span>View all posts on Instagram</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note for owner */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-400">
            To show live Instagram posts, consider using Instagram's oEmbed API or a third-party widget service
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
