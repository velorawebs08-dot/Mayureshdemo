import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO_CATEGORIES } from '../data/studioData.ts';
import { PortfolioCategory } from '../types.ts';
import { GalleryModal } from './GalleryModal.tsx';

// Category video mappings strictly for Our Portfolio layout
const PORTFOLIO_LAYOUT_VIDEOS: Record<string, string> = {
  'baby-shower': 'https://www.image2url.com/r2/default/videos/1788242549062-e2358726-1ebb-48a7-862f-1d30da963f84.mp4',
  'pre-wedding': 'https://www.image2url.com/r2/default/videos/1788242674636-85b7b40f-fb24-4900-bc0b-b7a69c54a007.mp4',
  'events': 'https://www.image2url.com/r2/default/videos/1788242820632-89e82d53-b4b0-44ba-903c-810ca40b1edd.mp4',
  'wedding': 'https://www.image2url.com/r2/default/videos/1788242891454-68572c14-152d-4321-ab83-9dd2e535ecfd.mp4',
};

interface CategoryCardProps {
  category: PortfolioCategory;
  index: number;
  onExplore: (category: PortfolioCategory) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index, onExplore }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetVideoUrl = PORTFOLIO_LAYOUT_VIDEOS[category.id] || category.videoUrl;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;

    const playVideo = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    playVideo();

    // Auto-resume video playback on interaction if browser autoplay policy initially held it
    const handleInteraction = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    };

    window.addEventListener('click', handleInteraction, { passive: true, once: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true, once: true });
    window.addEventListener('scroll', handleInteraction, { passive: true, once: true });

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };
  }, [targetVideoUrl]);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative flex-shrink-0 w-[285px] sm:w-[330px] md:w-[350px] lg:w-[365px] xl:w-[380px] aspect-[3/4] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl hover:border-[#FF5E14]/60 hover:shadow-[0_20px_50px_rgba(255,94,20,0.22)] transition-all duration-500 cursor-pointer flex flex-col justify-between select-none"
      onClick={() => onExplore(category)}
    >
      {/* Background Media (Video + Poster / Cover Image) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src={targetVideoUrl}
          poster={category.coverImage}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onEnded={(e) => {
            const v = e.currentTarget;
            v.currentTime = 0;
            v.play().catch(() => {});
          }}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
          aria-label={`${category.title} cinematic showcase`}
        >
          <source src={targetVideoUrl} type="video/mp4" />
        </video>

        {/* Cinematic Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
      </div>

      {/* Top Header Control: Clean Circular Action Button */}
      <div className="relative z-10 p-5 sm:p-6 flex justify-end items-start pointer-events-none">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onExplore(category);
          }}
          className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FF5E14] group-hover:text-white pointer-events-auto"
          aria-label={`Explore ${category.title} gallery`}
        >
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      {/* Bottom Content Area: Category Title + Subtitle */}
      <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-end pointer-events-none">
        <h3 className="font-serif-luxury text-2xl sm:text-[30px] font-bold text-white tracking-tight leading-tight group-hover:text-[#FF5E14] transition-colors drop-shadow-md">
          {category.title}
        </h3>
        <p className="text-xs sm:text-sm text-neutral-300 line-clamp-1 mt-1 font-light drop-shadow">
          {category.subtitle}
        </p>
      </div>
    </motion.div>
  );
};

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | null>(null);
  const [shiftOffset, setShiftOffset] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Seamless permanent marquee loop:
  // Each set contains 3 cycles of the 4 categories (12 cards = ~4,700px wide).
  // Two identical sets inside one continuously moving parent container ensure
  // cards never run out, never jump, and loop infinitely without end.
  const PORTFOLIO_SET = [
    ...PORTFOLIO_CATEGORIES,
    ...PORTFOLIO_CATEGORIES,
    ...PORTFOLIO_CATEGORIES,
  ];

  const handleMouseEnter = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    // ONLY stop motion if the cursor has stopped/stayed on the layout for more than 2 seconds (2000ms)
    hoverTimerRef.current = setTimeout(() => {
      setIsPaused(true);
    }, 2000);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    setIsPaused(false);
  };

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    };
  }, []);

  const slide = (direction: 'left' | 'right') => {
    const cardStep = typeof window !== 'undefined' && window.innerWidth < 640 ? 309 : 393;
    setShiftOffset((prev) => {
      const next = direction === 'left' ? prev + cardStep : prev - cardStep;
      const trackWidth = 12 * cardStep;
      // Seamlessly wrap shiftOffset so user clicks never run off into blank space
      if (next < -trackWidth) return next + trackWidth;
      if (next > 0) return next - trackWidth;
      return next;
    });
  };

  return (
    <section
      id="portfolio"
      className="relative z-10 w-full min-h-screen bg-[#080808] text-[#F3F4F6] rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[56px] lg:rounded-t-[64px] pt-20 sm:pt-28 md:pt-32 pb-24 sm:pb-32 overflow-hidden scroll-mt-0"
    >
      {/* Background Subtle Luxury Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-[#FF5E14]/6 blur-[220px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#FF5E14] uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight text-shadow-title drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          >
            Signature Masterpieces
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-neutral-300 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-center font-light"
          >
            Explore our signature specialties in high-fashion portraiture and cinematic visual storytelling.
          </motion.p>
        </div>
      </div>

      {/* Auto-scrolling infinite horizontal marquee (Identical motion & effect as Loved by Our Clients) */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Gradient edge fades matching dark background */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#080808] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#080808] to-transparent z-20 pointer-events-none" />

        {/* Interactive slide offset wrapper */}
        <motion.div
          animate={{ x: shiftOffset }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          {/* Never-ending seamless marquee parent container */}
          <div
            className="flex w-max select-none animate-marquee-portfolio py-4"
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Set 1: First continuous set of 12 category cards */}
            <div className="flex gap-6 sm:gap-7 pr-6 sm:pr-7 shrink-0">
              {PORTFOLIO_SET.map((category, index) => (
                <CategoryCard
                  key={`p1-${category.id}-${index}`}
                  category={category}
                  index={index}
                  onExplore={(cat) => setActiveCategory(cat)}
                />
              ))}
            </div>

            {/* Set 2: Duplicate set for seamless mathematical infinite loop */}
            <div className="flex gap-6 sm:gap-7 pr-6 sm:pr-7 shrink-0" aria-hidden="true">
              {PORTFOLIO_SET.map((category, index) => (
                <CategoryCard
                  key={`p2-${category.id}-${index}`}
                  category={category}
                  index={index}
                  onExplore={(cat) => setActiveCategory(cat)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Simple Bottom Sliding Buttons */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
        <button
          type="button"
          onClick={() => slide('left')}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/5 hover:bg-[#FF5E14] text-white border border-white/15 hover:border-[#FF5E14] backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none"
          aria-label="Slide previous category"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5] transition-transform group-hover:-translate-x-0.5" />
        </button>

        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E14]" />

        <button
          type="button"
          onClick={() => slide('right')}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/5 hover:bg-[#FF5E14] text-white border border-white/15 hover:border-[#FF5E14] backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none"
          aria-label="Slide next category"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Lightbox / Gallery Modal */}
      <GalleryModal
        category={activeCategory}
        onClose={() => setActiveCategory(null)}
      />
    </section>
  );
};

