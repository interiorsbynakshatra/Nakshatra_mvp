# Nakshatra Interiors Website - Product Requirements Document

## Original Problem Statement
Build a modern, mobile-first marketing website for Nakshatra Interiors, an interior design firm based in Pune, India. The website should be conversion-optimized to generate leads through WhatsApp inquiries and consultation form submissions, targeting first-time homeowners looking for full home interiors.

**Domain:** nakshtrainterior.com

## Project Overview
- **Business:** Interior Design Services
- **Target Audience:** First-time homeowners, mid-segment buyers in Pune, Mumbai, Dhule, Nashik
- **Primary Goal:** Lead generation via WhatsApp and consultation forms
- **Key Services:** 1BHK/2BHK/3BHK full interiors, modular kitchens, wardrobes, renovations

## Brand Identity
- **Brand Name:** Nakshatra Interiors
- **Tagline:** "Adding aesthetics to life"
- **Founded:** August 2021
- **Experience:** 4+ years, 50+ projects completed
- **Founders:** Er. Akanksha Bari & Er. Namrata Hivrale

### Brand Colors
- **Pine Green:** #047C74 (Primary accent, buttons, key backgrounds)
- **Chalky:** #E7D49E (Light backgrounds, cards, highlights)
- **Brandy Punch:** #C68D28 (Secondary accent for CTAs, hover states)

### Design Aesthetic
- Light, airy, minimal (inspired by Aureleo Interiors)
- Modern, trendy interactions
- Ample whitespace
- Clean, uncluttered layout
- Subtle Marathi traditional motifs (minimal, in dividers)

## User Personas

### Primary Persona: First-Time Homeowner
- **Age:** 28-40
- **Income:** Mid-segment (₹6-15 lakh annual household income)
- **Location:** Pune, Mumbai, Dhule, Nashik
- **Property:** Recently purchased 1BHK/2BHK/3BHK
- **Pain Points:** Budget concerns, lack of design knowledge, fear of delays
- **Goals:** Transform new flat into dream home, transparent pricing, reliable execution

### Secondary Persona: Renovation Client
- **Age:** 35-55
- **Property:** Existing home needing updates
- **Goals:** Modernize interiors, improve functionality, maximize space

## Core Requirements (Static)

### Technical Stack
- **Frontend:** React 19, Tailwind CSS, Shadcn UI components
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Toasts:** Sonner
- **Responsive:** Mobile-first design
- **No Backend:** Lead capture via WhatsApp + Google Forms

### Site Structure
1. **Home** - Hero, Services, Process, Portfolio, USPs, CTA
2. **About** - Story, Founders, Mission & Vision, Values
3. **Get Quote** - Process explanation, pricing ranges, WhatsApp CTA
4. **Testimonials** - Client reviews, trust indicators
5. **Contact** - Contact info, form, WhatsApp CTA

### Key Features
- ✅ Sticky navigation with logo and menu
- ✅ Floating WhatsApp button (all pages)
- ✅ Timed consultation popup (10s, once per session)
- ✅ Multiple WhatsApp CTAs throughout site
- ✅ Google Form integration placeholders
- ✅ Responsive design (mobile-first)
- ✅ Smooth animations (fade-in, slide-up)
- ✅ SEO-optimized structure

## What's Been Implemented ✅

### Date: December 7, 2025

#### Components Created
1. **Navbar.jsx** - Sticky navigation with logo, menu items, mobile hamburger
2. **Footer.jsx** - Complete footer with brand, links, services, contact info
3. **WhatsAppButton.jsx** - Floating WhatsApp button with hover tooltip
4. **ConsultationPopup.jsx** - Timed popup (10s) with form options

#### Pages Created
1. **Home.jsx** - Complete landing page with:
   - Hero section with stats and CTAs
   - Services section (4 service cards)
   - Process section (4-step journey)
   - Portfolio grid (6 project cards with images)
   - USPs section (6 trust indicators)
   - CTA band

2. **About.jsx** - Company information with:
   - Story section with company history
   - Mission & Vision cards
   - Core Values (5 values with icons)
   - Founders section

3. **GetQuote.jsx** - Quote request page with:
   - How quoting process works (4 steps)
   - Pricing ranges (1BHK, 2BHK, 3BHK)
   - Why get quote section
   - WhatsApp and phone CTAs

4. **Testimonials.jsx** - Social proof with:
   - 6 testimonial cards (placeholders)
   - Overall rating display (4.8/5)
   - Trust indicators grid
   - CTA section

5. **Contact.jsx** - Contact page with:
   - Contact info cards (phone, email, Instagram, service areas)
   - Contact form (frontend only, Google Form integration ready)
   - WhatsApp quick contact card
   - Business hours

#### Styling & UX
- Custom animations (fadeIn, slideUp)
- Brand colors consistently applied
- Hover states and transitions
- Proper spacing and typography
- Mobile-responsive grid layouts
- Gradient accents (subtle, following 80/20 rule)

#### Integration Points
- WhatsApp: +91 8999100590 (configured in all CTAs)
- Google Forms: Placeholder links (to be replaced by owner)
- Instagram: @nakshatra.interior
- Email: interiorsbynakshatra@gmail.com

#### Images Used
- Hero: Modern Indian living room
- Portfolio: 6 realistic interior project images (bedrooms, kitchens, living rooms)
- All images from Unsplash (curated for Indian aesthetic)

## Prioritized Backlog

### P0 - Critical (Owner Action Required)
- [ ] Replace placeholder Google Form URLs with actual form links
- [ ] Replace stock images with actual project photos
- [ ] Add real client testimonials with names and reviews
- [ ] Set up Google Analytics and Meta Pixel tracking
- [ ] Configure actual WhatsApp business number link
- [ ] Add company logo file (currently using placeholder)

### P1 - High Priority
- [ ] SEO optimization (meta tags, descriptions, keywords)
- [ ] Add more project portfolio items (expand from 6 to 15-20)
- [ ] Create dedicated Projects/Portfolio page
- [ ] Add FAQ section on Get Quote page
- [ ] Implement form submission to email (mailto or backend)
- [ ] Add Instagram feed integration
- [ ] Performance optimization (image lazy loading, compression)

### P2 - Medium Priority
- [ ] Blog section for interior design tips
- [ ] Before/After image sliders for projects
- [ ] Video testimonials
- [ ] Virtual tour integration
- [ ] Live chat widget (alternative to WhatsApp)
- [ ] Cost calculator tool
- [ ] Client portal login

## Next Tasks
1. ✅ Complete frontend with all 5 pages
2. ⏭️ Owner to replace placeholders (Google Forms, images, testimonials, logo)
3. ⏭️ SEO setup (meta tags, sitemap, robots.txt)
4. ⏭️ Analytics integration (GA4, Meta Pixel)
5. ⏭️ Performance testing and optimization
6. ⏭️ Deploy to nakshtrainterior.com domain

## Latest Updates

### Date: February 8, 2026

#### Video Support in Portfolio ✅
- **Added full video support** to portfolio system
- Supports **YouTube**, **Vimeo**, and **direct video files**
- Videos displayed below image gallery on project detail pages
- "Video" badge shown on portfolio cards for projects with videos
- Updated documentation (`HOW_TO_ADD_PHOTOS.md`) with video instructions

#### Files Modified
- `/app/frontend/src/data/mockProjects.js` - Updated data structure for videos
- `/app/frontend/src/pages/ProjectDetail.jsx` - Added VideoPlayer component with YouTube/Vimeo embed support
- `/app/frontend/src/pages/Portfolio.jsx` - Added Video badge indicator on project cards
- `/app/HOW_TO_ADD_PHOTOS.md` - Added comprehensive video instructions

#### Video Data Structure
```javascript
videos: [
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=VIDEO_ID', title: 'Video Title' },
  { type: 'vimeo', url: 'https://vimeo.com/VIDEO_ID', title: 'Video Title' },
  { type: 'direct', url: 'https://your-server.com/video.mp4', title: 'Video Title' }
]
```

### Previously Completed Features
- Portfolio system with dedicated project pages
- Before/After image slider
- Cost Calculator page
- FAQ page
- Form validation (name, email, phone)
- FormSubmit.io integration for inquiries
- Google Reviews section (static)
- Instagram feed widget (static)
- WhatsApp floating button
- SEO optimization guide created

## Remaining Tasks

### P0 - Critical
- [ ] User to verify form validation works correctly
- [ ] User to replace demo YouTube videos with actual project walkthroughs
- [ ] User to configure FormSubmit.io email address

### P1 - High Priority
- [ ] Implement on-page SEO (react-helmet for meta tags)
- [ ] Add real project photos and videos to portfolio

### P2 - Future Enhancements
- [ ] Custom backend for inquiry storage (replace FormSubmit.io)
- [ ] Live Google Reviews integration
- [ ] Live Instagram feed widget
- [ ] Analytics integration (GA4)
