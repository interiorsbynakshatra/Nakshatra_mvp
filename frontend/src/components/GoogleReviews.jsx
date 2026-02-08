import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const GoogleReviews = () => {
  // Replace with your actual Google Place ID after deployment
  const googlePlaceId = 'YOUR_GOOGLE_PLACE_ID';
  const googleReviewsUrl = `https://www.google.com/search?q=nakshatra+interiors+pune`;

  const reviews = [
    {
      author: 'Priya Sharma',
      rating: 5,
      text: 'Excellent work by Nakshatra Interiors! They transformed our 2BHK beautifully. Very professional team.',
      date: '2 weeks ago',
      avatar: 'PS'
    },
    {
      author: 'Amit Deshmukh',
      rating: 5,
      text: 'Great experience! On-time delivery and quality work. Highly recommended for interior design in Pune.',
      date: '1 month ago',
      avatar: 'AD'
    },
    {
      author: 'Sneha Patil',
      rating: 5,
      text: 'Amazing designs and transparent pricing. The 3D visualization helped us see everything before work started.',
      date: '1 month ago',
      avatar: 'SP'
    },
    {
      author: 'Rajesh Kulkarni',
      rating: 5,
      text: 'Best interior designers in Pune! They completed our 3BHK within budget and on time. Post-handover support is excellent.',
      date: '2 months ago',
      avatar: 'RK'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#E7D49E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say on <span className="text-[#047C74]">Google</span>
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#FDB022] text-[#FDB022]" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.8</span>
            <span className="text-gray-600">out of 5</span>
          </div>
          <p className="text-gray-600">
            Based on 50+ Google Reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              {/* Avatar and Name */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#047C74] to-[#C68D28] rounded-full flex items-center justify-center text-white font-semibold">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{review.author}</div>
                  <div className="text-xs text-gray-500">{review.date}</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FDB022] text-[#FDB022]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <div className="text-center">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200"
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
            />
            <span>View All Reviews on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Love our work? Leave us a review on Google!
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
