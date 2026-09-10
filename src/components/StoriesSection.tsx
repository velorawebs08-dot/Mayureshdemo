import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

interface StoryItem {
  id: string;
  image: string;
  alt: string;
  quote: string;
  name: string;
  event: string;
  baseTilt: number;
  photoTilt: string;
  tapeAngle: string;
}

const clientStories: StoryItem[] = [
  {
    id: 'wedding',
    image: 'https://cdn.phototourl.com/member/2026-09-01-f5574e25-292f-4a5e-b8b9-3e7a9aedd157.webp',
    alt: 'Wedding couple celebration moment',
    quote: '“Captured our most precious day so beautifully.”',
    name: 'Dr. Rohan & Snehal Patil',
    event: 'Wedding Ceremony · Sangli',
    baseTilt: -3,
    photoTilt: 'rotate-[2.2deg]',
    tapeAngle: '-rotate-3',
  },
  {
    id: 'baby-shower',
    image: 'https://cdn.phototourl.com/free/2026-09-01-fe7deb5a-d5e4-4fe2-89be-684045a11147.jpg',
    alt: 'Baby shower celebration moments',
    quote: '“Captured our joy and blessings so beautifully.”',
    name: 'Pooja & Amit Deshmukh',
    event: 'Baby Shower · Kolhapur',
    baseTilt: 2.2,
    photoTilt: '-rotate-[1.8deg]',
    tapeAngle: 'rotate-2',
  },
  {
    id: 'pre-wedding',
    image: 'https://cdn.phototourl.com/free/2026-09-01-f56c433d-db48-4b81-961f-dc1c6bde444b.webp',
    alt: 'Pre-wedding couple outdoor romance session',
    quote: '“Captured our love story so beautifully.”',
    name: 'Aditya & Riya Kulkarni',
    event: 'Pre-Wedding Shoot · Mahabaleshwar',
    baseTilt: -2.2,
    photoTilt: 'rotate-[1.8deg]',
    tapeAngle: '-rotate-2',
  },
  {
    id: 'events',
    image: 'https://cdn.phototourl.com/free/2026-09-01-d8825e4b-54d7-48b7-a484-5820ed1385f6.jpg',
    alt: 'Celebration event moments',
    quote: '“Every special moment captured with perfection.”',
    name: 'The Shinde Family',
    event: 'Grand Jubilee · Pune',
    baseTilt: 2.8,
    photoTilt: '-rotate-[2.2deg]',
    tapeAngle: 'rotate-3',
  },
];

export const StoriesSection: React.FC = () => {
  const [shiftOffset, setShiftOffset] = useState<number>(0);

  // Seamless permanent marquee loop:
  // Each track contains 4 full cycles of client stories (16 cards = ~4,500px wide).
  // With duplicate cloned tracks moving continuously in unison via GPU-accelerated CSS keyframes,
  // the layout never ends, never stutters, and loops seamlessly forever.
  const TRACK_STORIES = [
    ...clientStories,
    ...clientStories,
    ...clientStories,
    ...clientStories,
  ];

  const slide = (direction: 'left' | 'right') => {
    const cardStep = typeof window !== 'undefined' && window.innerWidth < 640 ? 253 : 281;
    setShiftOffset((prev) => {
      const next = direction === 'left' ? prev + cardStep : prev - cardStep;
      const trackWidth = 16 * cardStep;
      // Seamlessly wrap shiftOffset so user clicks never run off into blank space
      if (next < -trackWidth) return next + trackWidth;
      if (next > 0) return next - trackWidth;
      return next;
    });
  };

  return (
    <section
      id="stories"
      className="relative w-full py-20 sm:py-28 bg-[#0A0806] text-[#F3F4F6] overflow-hidden scroll-mt-20"
    >
      {/* Soft Warm Gold/Amber Glow Blob (Candlelight feel in top corner) */}
      <div className="absolute top-0 left-0 w-[520px] h-[520px] bg-[radial-gradient(circle_at_top_left,rgba(201,162,39,0.18)_0%,rgba(184,134,11,0.08)_40%,transparent_70%)] blur-[90px] pointer-events-none -z-0" />

      {/* Decorative Dried Gold Leaf/Fern Branch (Top-Right Corner) */}
      <div className="absolute -top-6 -right-6 sm:top-0 sm:right-0 w-48 h-48 sm:w-72 sm:h-72 pointer-events-none z-10 overflow-hidden">
        <svg
          className="w-full h-full text-[#C9A227] opacity-50 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M195,5 C160,45 110,85 30,165" />
          <path d="M175,22 C160,16 148,18 142,25 C154,28 168,28 175,22" fill="currentColor" fillOpacity="0.25" />
          <path d="M165,36 C176,44 182,52 180,60 C170,58 160,50 165,36" fill="currentColor" fillOpacity="0.25" />
          <path d="M148,50 C132,44 120,48 116,56 C126,60 138,62 148,50" fill="currentColor" fillOpacity="0.25" />
          <path d="M136,66 C146,76 152,86 150,92 C140,90 132,80 136,66" fill="currentColor" fillOpacity="0.25" />
          <path d="M118,80 C102,76 90,82 86,92 C96,96 108,96 118,80" fill="currentColor" fillOpacity="0.25" />
          <path d="M104,98 C114,110 120,120 116,126 C108,124 100,112 104,98" fill="currentColor" fillOpacity="0.25" />
          <path d="M86,116 C70,112 60,120 56,130 C66,134 78,132 86,116" fill="currentColor" fillOpacity="0.25" />
          <path d="M70,134 C78,146 82,156 78,162 C70,158 64,148 70,134" fill="currentColor" fillOpacity="0.25" />
          <path d="M52,150 C38,148 30,156 26,166 C36,168 46,164 52,150" fill="currentColor" fillOpacity="0.25" />
        </svg>
      </div>

      {/* Decorative Dried Gold Leaf/Fern Branch (Bottom-Left Corner) */}
      <div className="absolute -bottom-6 -left-6 sm:bottom-0 sm:left-0 w-48 h-48 sm:w-72 sm:h-72 pointer-events-none z-10 overflow-hidden rotate-180">
        <svg
          className="w-full h-full text-[#C9A227] opacity-50 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M195,5 C160,45 110,85 30,165" />
          <path d="M175,22 C160,16 148,18 142,25 C154,28 168,28 175,22" fill="currentColor" fillOpacity="0.25" />
          <path d="M165,36 C176,44 182,52 180,60 C170,58 160,50 165,36" fill="currentColor" fillOpacity="0.25" />
          <path d="M148,50 C132,44 120,48 116,56 C126,60 138,62 148,50" fill="currentColor" fillOpacity="0.25" />
          <path d="M136,66 C146,76 152,86 150,92 C140,90 132,80 136,66" fill="currentColor" fillOpacity="0.25" />
          <path d="M118,80 C102,76 90,82 86,92 C96,96 108,96 118,80" fill="currentColor" fillOpacity="0.25" />
          <path d="M104,98 C114,110 120,120 116,126 C108,124 100,112 104,98" fill="currentColor" fillOpacity="0.25" />
          <path d="M86,116 C70,112 60,120 56,130 C66,134 78,132 86,116" fill="currentColor" fillOpacity="0.25" />
          <path d="M70,134 C78,146 82,156 78,162 C70,158 64,148 70,134" fill="currentColor" fillOpacity="0.25" />
          <path d="M52,150 C38,148 30,156 26,166 C36,168 46,164 52,150" fill="currentColor" fillOpacity="0.25" />
        </svg>
      </div>

      <div id="testimonials" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-[#C9A227]/30 text-xs font-semibold tracking-[0.25em] text-[#C9A227] uppercase mb-4 shadow-sm"
          >
            <span>Client Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight text-shadow-title drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
          >
            Memories Cherished Forever
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-3 text-neutral-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed"
          >
            Behind every photograph lies an unspoken emotion. Read how our couples and families felt reliving their most treasured milestones.
          </motion.p>

          {/* Elegant Muted Gold Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C9A227]/50" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A227]/70" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C9A227]/50" />
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* NEVER-ENDING SEAMLESS INFINITE SCRAPBOOK POLAROID MARQUEE           */}
      {/* =================================================================== */}
      <div className="relative w-full overflow-hidden pt-8 pb-4">
        {/* Soft edge fade masks on both sides */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#0A0806] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#0A0806] to-transparent z-20 pointer-events-none" />

        {/* Interactive slide offset wrapper */}
        <motion.div
          animate={{ x: shiftOffset }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative z-10"
        >
          {/* Never-ending seamless infinite marquee track container */}
          <div className="flex w-max py-6 select-none">
            {/* Track 1: First full continuous set */}
            <div className="flex gap-7 sm:gap-9 pr-7 sm:pr-9 shrink-0 animate-marquee-loop">
              {TRACK_STORIES.map((story, index) => (
                <StoryCardItem key={`t1-${story.id}-${index}`} story={story} index={index} />
              ))}
            </div>

            {/* Track 2: Seamless duplicate set that immediately follows */}
            <div className="flex gap-7 sm:gap-9 pr-7 sm:pr-9 shrink-0 animate-marquee-loop" aria-hidden="true">
              {TRACK_STORIES.map((story, index) => (
                <StoryCardItem key={`t2-${story.id}-${index}`} story={story} index={index} />
              ))}
            </div>

            {/* Track 3: Extra buffer set ensuring ultrawide screens never reach an end */}
            <div className="flex gap-7 sm:gap-9 pr-7 sm:pr-9 shrink-0 animate-marquee-loop" aria-hidden="true">
              {TRACK_STORIES.map((story, index) => (
                <StoryCardItem key={`t3-${story.id}-${index}`} story={story} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sliding Control Buttons (matching Portfolio motion & controls) */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
        <button
          type="button"
          onClick={() => slide('left')}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 hover:bg-[#C9A227] text-white hover:text-black border border-white/15 hover:border-[#C9A227] backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none"
          aria-label="Slide previous story"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] transition-transform group-hover:-translate-x-0.5" />
        </button>

        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />

        <button
          type="button"
          onClick={() => slide('right')}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 hover:bg-[#C9A227] text-white hover:text-black border border-white/15 hover:border-[#C9A227] backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none"
          aria-label="Slide next story"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </section>
  );
};

{/* Individual Scrapbook Story Card Item with Synchronized Connector Line */}
const StoryCardItem: React.FC<{
  story: typeof clientStories[0];
  index: number;
}> = ({ story, index }) => {
  return (
    <div className="group relative flex-shrink-0 w-[225px] sm:w-[245px] select-none cursor-pointer pt-9 pb-2">
      {/* ----------------------------------------------------------- */}
      {/* CONNECTIVE DOTTED LINE: MOVES AT THE EXACT SAME MOTION AS   */}
      {/* THE LAYOUT                                                  */}
      {/* ----------------------------------------------------------- */}
      <svg
        className="absolute top-1/2 -translate-y-1/2 left-1/2 w-[calc(100%+1.75rem)] sm:w-[calc(100%+2.25rem)] h-[150px] pointer-events-none -z-10 overflow-visible"
        viewBox="0 0 240 150"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <filter id={`candleGlow-${index}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#C9A227" floodOpacity="0.6" />
          </filter>
        </defs>

        {index % 2 === 0 ? (
          // High waving curve with a looped heart flourish visible above the gap between cards
          <>
            <path
              d="M 0,75 C 38,48 70,28 96,28 C 86,6 100,-7 114,8 C 128,-7 142,6 132,28 C 158,28 190,48 240,75"
              stroke="rgba(255, 255, 255, 0.85)"
              strokeWidth="2.5"
              strokeDasharray="4 7"
              strokeLinecap="round"
              filter={`url(#candleGlow-${index})`}
            />
            <g transform="translate(107, 14)">
              <Heart className="w-3.5 h-3.5 text-[#C9A227] fill-[#C9A227]/50 drop-shadow-[0_0_4px_rgba(201,162,39,0.8)]" />
            </g>
          </>
        ) : (
          // Low waving curve dipping gracefully between the cards
          <>
            <path
              d="M 0,75 C 45,108 85,128 120,128 C 155,128 195,108 240,75"
              stroke="rgba(255, 255, 255, 0.85)"
              strokeWidth="2.5"
              strokeDasharray="4 7"
              strokeLinecap="round"
              filter={`url(#candleGlow-${index})`}
            />
            <g transform="translate(113, 120)">
              <Star className="w-3 h-3 text-[#C9A227] fill-[#C9A227]/50 drop-shadow-[0_0_4px_rgba(201,162,39,0.8)]" />
            </g>
          </>
        )}
      </svg>

      {/* Soft Candlelight Amber Glow behind the card */}
      <div className="absolute -inset-1.5 bg-[#C9A227]/12 rounded-2xl blur-lg opacity-40 group-hover:opacity-100 transition-opacity -z-10" />

      {/* Card with Continuous Rotational Sway Movement (Always fully visible) */}
      <motion.div
        animate={{
          rotate: [story.baseTilt - 1.5, story.baseTilt + 1.5, story.baseTilt - 1.5],
          y: [0, -4, 0],
        }}
        transition={{
          rotate: {
            duration: 4.5 + (index % 4) * 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: (index % 4) * 0.3,
          },
          y: {
            duration: 3.8 + (index % 3) * 0.6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: (index % 4) * 0.25,
          },
        }}
        whileHover={{
          y: -8,
          scale: 1.04,
          rotate: 0,
          transition: { duration: 0.25 },
        }}
        className="relative"
      >
        {/* Scrapbook Polaroid Card Container: warm off-white/cream (#F5F0E8) */}
        <div className="relative bg-[#F5F0E8] rounded-[18px] pt-20 sm:pt-22 pb-5 px-4 shadow-[0_14px_32px_rgba(0,0,0,0.58)] group-hover:shadow-[0_22px_46px_rgba(0,0,0,0.85)] border border-[#E8E0D2] transition-shadow duration-300">
          {/* 1. Upper Photo Layout: Slightly short client photo in polaroid frame */}
          <div
            className={`absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 w-[82%] max-w-[170px] bg-white p-2 pb-3.5 rounded-[3px] shadow-[0_7px_18px_rgba(0,0,0,0.28)] ring-1 ring-black/5 ${story.photoTilt} transition-transform duration-300 group-hover:scale-[1.03]`}
          >
            {/* Rectangular Gold/Tan "Washi Tape" strip at top-center */}
            <div
              className={`absolute -top-2.5 left-1/2 -translate-x-1/2 w-11 sm:w-12 h-3.5 bg-[#D4B572]/90 border-t border-b border-[#B89647]/50 shadow-[0_1.5px_3px_rgba(0,0,0,0.2)] backdrop-blur-[0.5px] ${story.tapeAngle} z-20 pointer-events-none`}
              style={{
                clipPath: 'polygon(3% 0%, 100% 2%, 97% 100%, 0% 98%)',
              }}
            >
              <div className="w-full h-full opacity-35 bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            </div>

            {/* Short Client Photo Content (Compact landscape 16:10 aspect ratio) */}
            <div className="overflow-hidden aspect-[16/10] bg-neutral-900 shadow-inner rounded-[1px]">
              <img
                src={story.image}
                alt={story.alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* 2. Down Testimonial Layout: Restored to normal size as it was usually back */}
          <div className="flex flex-col items-center text-center">
            {/* Row of 5 gold/amber filled star icons */}
            <div className="flex items-center justify-center gap-1 mb-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#C9A227] text-[#C9A227]" />
              ))}
            </div>

            {/* Quote in italic serif font, dark charcoal */}
            <blockquote className="font-serif-luxury text-xs sm:text-sm text-[#2A2724] italic leading-snug font-normal my-1 px-1">
              {story.quote}
            </blockquote>

            {/* Thin gold divider with centered small gold heart */}
            <div className="flex items-center justify-center gap-2 my-2 w-full max-w-[120px] text-[#C9A227]">
              <div className="flex-1 h-[1px] bg-[#C9A227]/40" />
              <Heart className="w-2.5 h-2.5 fill-[#C9A227]/40 text-[#C9A227] flex-shrink-0" />
              <div className="flex-1 h-[1px] bg-[#C9A227]/40" />
            </div>

            {/* Client name in bold serif font */}
            <h3 className="font-serif-luxury text-sm sm:text-base font-bold text-[#1A1816] tracking-wide leading-tight">
              {story.name}
            </h3>

            {/* Location in small-caps, letter-spaced gold */}
            <p className="text-[10px] sm:text-[11px] text-[#C9A227] font-semibold tracking-wider uppercase mt-1">
              {story.event}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

