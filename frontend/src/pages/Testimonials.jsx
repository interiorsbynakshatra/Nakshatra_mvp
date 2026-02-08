import React from 'react';
import { Star, Quote, MessageCircle } from 'lucide-react';
import SEO, { pageSEO } from '../components/SEO';
import { getWhatsAppUrl } from '../utils/whatsapp';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Hinjewadi, Pune',
      project: '2BHK Full Interiors',
      rating: 5,
      text: 'Nakshatra Interiors transformed our 2BHK into a beautiful, functional home. The 3D designs helped us visualize everything perfectly. Their post-handover support is exceptional!',
      image: null
    },
    {
      name: 'Amit Deshmukh',
      location: 'Wakad, Pune',
      project: '3BHK Renovation',
      rating: 5,
      text: 'Professional team, transparent pricing, and on-time delivery. What more could we ask for? Our home looks stunning, and the modular kitchen is exactly what we envisioned.',
      image: null
    },
    {
      name: 'Sneha & Rahul Patil',
      location: 'Baner, Pune',
      project: '2BHK Complete Interiors',
      rating: 5,
      text: 'As first-time homeowners, we were nervous about the process. Akanksha and Namrata guided us every step of the way. They understood our budget and delivered beyond expectations!',
      image: null
    },
    {
      name: 'Kiran Joshi',
      location: 'Viman Nagar, Pune',
      project: 'Modular Kitchen & Wardrobes',
      rating: 5,
      text: 'The attention to detail and quality of work is outstanding. Our kitchen is now the heart of our home. Highly recommend Nakshatra Interiors for anyone looking for reliable designers.',
      image: null
    },
    {
      name: 'Manish & Pooja Kulkarni',
      location: 'Aundh, Pune',
      project: '1BHK Studio Apartment',
      rating: 5,
      text: 'Working with Nakshatra Interiors was a breeze. They maximized space in our small apartment beautifully. The team is friendly, creative, and truly cares about client satisfaction.',
      image: null
    },
    {
      name: 'Rajesh Mehta',
      location: 'Kharadi, Pune',
      project: '3BHK Luxury Interiors',
      rating: 5,
      text: 'From concept to completion, everything was handled professionally. The 3D designs were incredibly accurate, and the final result exceeded our expectations. Worth every rupee!',
      image: null
    }
  ];

  const whatsappUrl = getWhatsAppUrl("Hi Nakshatra Interiors, I'd like to discuss my interior design project after seeing your testimonials.");

  return (
    <div className="min-h-screen">
      <SEO 
        title={pageSEO.testimonials.title}
        description={pageSEO.testimonials.description}
        keywords={pageSEO.testimonials.keywords}
        canonicalUrl="https://nakshatrainterior.com/testimonials"
      />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-[#E7D49E]/20 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-[#047C74]">Clients Say</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Real stories from homeowners who trusted us to transform their spaces. Join 50+ satisfied clients across Pune, Mumbai, Dhule & Nashik.
          </p>

          {/* Overall Rating */}
          <div className="inline-flex items-center space-x-4 bg-white rounded-2xl px-8 py-4 shadow-lg">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#C68D28] text-[#C68D28]" />
              ))}
            </div>
            <div className="text-left border-l border-gray-200 pl-4">
              <div className="text-3xl font-bold text-[#047C74]">4.8/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-[#E7D49E]/5 to-white border border-gray-200 rounded-2xl p-8 hover:border-[#047C74] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#047C74] to-[#C68D28] rounded-lg flex items-center justify-center mb-4">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#C68D28] text-[#C68D28]"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                  <div className="text-xs text-[#047C74] mt-1 font-medium">
                    {testimonial.project}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#E7D49E]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Homeowners Across India
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#047C74] mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#047C74] mb-2">4.8</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#047C74] mb-2">100%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#047C74] mb-2">4+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>

          {/* Decorative motif */}
          <div className="mt-12 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#047C74] to-transparent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#047C74] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Be Our Next Happy Client?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Experience the same quality, care, and creativity that our clients rave about
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#047C74] hover:bg-gray-100 px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center space-x-2 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Start Your Journey Today</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
