/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { PortfolioSection } from './components/PortfolioSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { StoriesSection } from './components/StoriesSection.tsx';
import { WhyUsSection } from './components/WhyUsSection.tsx';
import { InstagramSection } from './components/InstagramSection.tsx';
import { ContactFooterSection } from './components/ContactFooterSection.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-neutral-100 selection:bg-[#FF5E14] selection:text-white flex flex-col">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero Section (Sticky / Frozen Cinematic Backdrop) */}
        <HeroSection />

        {/* Foreground Layer (Slides smoothly over Hero) */}
        <div className="relative z-10">
          {/* Section 2: Portfolio / Gallery Section */}
          <PortfolioSection />

          {/* Section 3: About Founder & Brand */}
          <AboutSection />

          {/* Section 4: Stories Section (1st) */}
          <StoriesSection />

          {/* Section 5: Why Us Section (then) */}
          <WhyUsSection />

          {/* Section 6: Instagram Social Feed */}
          <InstagramSection />

          {/* Section 7: Contact / Booking + Footer */}
          <ContactFooterSection />
        </div>
      </main>

      {/* Floating Quick Action Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
