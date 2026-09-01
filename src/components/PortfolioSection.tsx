import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_CATEGORIES } from '../data/studioData.ts';
import { PortfolioCategory } from '../types.ts';
import { GalleryModal } from './GalleryModal.tsx';

interface CategoryCardProps {
  category: PortfolioCategory;
  index: number;
  onExplore: (category: PortfolioCategory) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index, onExplore }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.25 });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {
          // Silent fallback for strict browser autoplay policies
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10, scale: 1.025 }}
      className="group relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] min-h-[450px] sm:min-h-[500px] lg:min-h-[540px] xl:min-h-[560px] rounded-[30px] overflow-hidden bg-neutral-900 border border-white/15 shadow-2xl hover:border-[#FF5E14] hover:shadow-[0_24px_60px_rgba(255,94,20,0.28)] transition-all duration-500 cursor-pointer flex flex-col justify-between"
      onClick={() => onExplore(category)}
    >
      {/* Video Background (Tall Luxury Portrait, Loop, Muted, Autoplay on view) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          src={category.videoUrl}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
          aria-label={`${category.title} cinematic showcase`}
        />

        {/* Minimal gradient at bottom purely for label & button legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
      </div>

      {/* Top action indicator */}
      <div className="relative z-10 p-5 sm:p-6 flex justify-end items-start">
        <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-[#FF5E14] group-hover:border-[#FF5E14] transition-all duration-300 shadow-md">
          <ArrowUpRight className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300" />
        </span>
      </div>

      {/* Bottom Pinned Category Name + Explore More Button */}
      <div className="relative z-10 p-6 sm:p-7 flex flex-col gap-3.5">
        {/* Category Name Label */}
        <h3 className="font-serif-luxury text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white tracking-wide leading-none drop-shadow-lg group-hover:text-white transition-colors">
          {category.title}
        </h3>

        {/* Explore More Button pinned at bottom */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onExplore(category);
          }}
          className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-white/15 hover:bg-[#FF5E14] text-white text-xs sm:text-[13px] font-semibold tracking-wider uppercase backdrop-blur-md border border-white/20 hover:border-[#FF5E14] flex items-center justify-center gap-2 transition-all duration-300 shadow-lg group-hover:shadow-luxury-orange"
        >
          <span>Explore More</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | null>(null);

  return (
    <section id="portfolio" className="relative w-full py-28 sm:py-36 bg-[#080808] overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-[#FF5E14]/6 blur-[220px] pointer-events-none" />

      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 flex flex-col items-center">
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
            Explore our four core specialties in high-fashion portraiture and cinematic visual storytelling. Click any category to view exclusive client stills.
          </motion.p>
        </div>

        {/* Responsive Category Cards Grid - Wraps down to 2 columns on medium/laptop screens for wider cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 xl:gap-8">
          {PORTFOLIO_CATEGORIES.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
              onExplore={(cat) => setActiveCategory(cat)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox / Gallery Modal */}
      <GalleryModal
        category={activeCategory}
        onClose={() => setActiveCategory(null)}
      />
    </section>
  );
};
