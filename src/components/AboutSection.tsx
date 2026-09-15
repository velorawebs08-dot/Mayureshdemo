import React from 'react';
import { motion } from 'motion/react';
import { STUDIO_CONFIG } from '../data/studioData.ts';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#0a0a0a] text-white pt-24 pb-0 lg:pt-32 lg:pb-0 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*
          Desktop Layout: 3 Columns
          Left column ≈ 30% (1.2fr)
          Center photo column ≈ 35% (1.4fr)
          Right text column ≈ 35% (1.4fr)

          Mobile Stack Order:
          1. Heading block (order-1)
          2. Photo with organic blob (order-2)
          3. Body text & signature (order-3)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.4fr_1.4fr] gap-y-12 lg:gap-x-12 xl:gap-x-16 items-end relative">
          
          {/* LEFT COLUMN: Eyebrow, Heading & Pull Quote (≈30%) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center order-1 lg:order-1 z-10 pb-4 lg:pb-16"
          >
            {/* 1. Small eyebrow label: ABOUT ME with inline horizontal orange dash */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#FF6B1A] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
                ABOUT ME
              </span>
              <span className="w-10 h-[2px] bg-[#FF6B1A] inline-block" />
            </div>

            {/* 2. Heading, two lines, large serif/display font */}
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.08] tracking-tight mb-8">
              <span className="block text-white font-normal">The Vision Behind</span>
              <span className="block text-[#FF6B1A] font-normal">
                Mayuresh Photo Wala
              </span>
            </h2>

            {/* 3. Pull-quote block with left vertical orange border (4px) and padding-left ~24px */}
            <div className="border-l-4 border-[#FF6B1A] pl-6 py-1">
              <p className="text-[#CFCFCF] text-base sm:text-lg leading-relaxed font-light">
                Founded by visionary photographer {STUDIO_CONFIG.founder}, Mayuresh Photo Wala has grown into a professional photography and cinematography team with <strong className="font-bold text-[#FF6B1A]">3 branches</strong>, serving clients across Western Maharashtra and destination venues across India.
              </p>
            </div>
          </motion.div>

          {/* CENTER COLUMN: Photo & Asymmetric Organic Blob (≈35%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-end relative order-2 lg:order-2 self-end pt-6 lg:pt-0"
          >
            <div className="relative w-full max-w-[520px] lg:max-w-none flex items-end justify-center">
              {/*
                Abstract Organic Blob shape in solid brand orange (#FF6B1A)
                - Positioned upper and to one side of the subject (behind the head/shoulder area, shifted toward top-left)
                - Slightly larger layout footprint
                - Stays clear of both left heading and right paragraph text
                - Asymmetric rounded-triangle organic shape, ~65-72% height of photo
              */}
              <div
                className="absolute top-[4%] sm:top-[5%] lg:top-[6%] left-0 sm:left-[1%] lg:left-[2%] w-[295px] sm:w-[355px] lg:w-[395px] h-[315px] sm:h-[375px] lg:h-[420px] pointer-events-none z-0"
              >
                <svg
                  viewBox="0 0 360 390"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M140 18 C 230 6, 335 70, 350 170 C 365 270, 285 350, 205 375 C 125 400, 40 340, 18 245 C -2 150, 50 30, 140 18 Z"
                    fill="#FF6B1A"
                  />
                </svg>
              </div>

              {/*
                Vinayak's Portrait:
                - Black-and-white / desaturated cutout, no background
                - Positioned to bleed off the bottom of the section
                - Sized larger, with commanding presence and natural depth
                - Flat background with subtle depth against the solid orange blob
              */}
              <div className="relative z-10 w-full flex justify-center -mb-1">
                <img
                  id="about-founder-portrait"
                  src={STUDIO_CONFIG.founderImageUrl}
                  alt={`${STUDIO_CONFIG.founder} - Mayuresh Photo Wala`}
                  className="relative z-10 w-[104%] sm:w-[100%] lg:w-[136%] lg:-mx-[18%] max-w-none h-auto max-h-[640px] sm:max-h-[720px] lg:max-h-[820px] object-contain filter grayscale contrast-[1.08] brightness-[1.02] select-none pointer-events-none drop-shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== '/images/about-mayuresh-nobg.png') {
                      target.src = '/images/about-mayuresh-nobg.png';
                    }
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Body Text & Signature (≈35%) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between self-stretch order-3 lg:order-3 z-10 space-y-8 lg:space-y-12 pb-6 lg:pb-16"
          >
            {/* Body Paragraph */}
            <p className="text-[#CFCFCF] text-base sm:text-lg leading-[1.85] font-light">
              We combine <strong className="font-bold text-white">high-fashion aesthetics, cinematic storytelling, and genuine emotions</strong> to create visuals that feel timeless. From grand weddings and traditional celebrations to destination pre-weddings and milestone events, our experienced team brings together creative direction, professional lighting, cinematic filming, and premium color grading.
            </p>

            {/* Signature & Brand Caption (Right-aligned near bottom of the column) */}
            <div className="flex flex-col items-end pt-4 sm:pt-6 mt-auto">
              {/* Handwritten script mark / signature graphic element in white */}
              <div className="mb-2 text-white opacity-95">
                <svg
                  className="w-40 sm:w-48 h-14"
                  viewBox="0 0 220 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Vinayak Mharugude Signature"
                >
                  <path
                    d="M12 48 C 24 16, 42 8, 52 32 C 60 50, 70 54, 82 22 C 92 8, 98 28, 108 42 C 118 52, 134 32, 146 36 C 158 40, 168 28, 182 32 C 195 35, 204 22, 212 28"
                    stroke="#FFFFFF"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M44 40 C 60 42, 94 45, 126 42 C 152 40, 185 46, 202 44"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle cx="214" cy="28" r="2.2" fill="#FF6B1A" />
                </svg>
              </div>

              {/* Signature Caption */}
              <div className="flex flex-col items-end">
                <span className="text-[#FF6B1A] text-xs font-bold tracking-[0.25em] uppercase">
                  MAYURESH PHOTO WALA
                </span>
                <span className="w-16 h-[2px] bg-[#FF6B1A] mt-1.5 inline-block" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
