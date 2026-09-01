/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { PortfolioSection } from './components/PortfolioSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { TestimonialsInstagramSection } from './components/TestimonialsInstagramSection.tsx';
import { ContactFooterSection } from './components/ContactFooterSection.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-neutral-100 selection:bg-[#FF5E14] selection:text-white flex flex-col">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections (5 Total as Specified) */}
      <main className="flex-grow">
        {/* Section 1: Hero Section */}
        <HeroSection />

        {/* Section 2: Portfolio / Gallery Section */}
        <PortfolioSection />

        {/* Section 3: About + Why Choose Us (Combined) */}
        <AboutSection />

        {/* Section 4: Testimonials + Instagram (Combined) */}
        <TestimonialsInstagramSection />

        {/* Section 5: Contact / Booking + Footer (Combined) */}
        <ContactFooterSection />
      </main>

      {/* Floating Quick Action Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
