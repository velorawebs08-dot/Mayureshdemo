import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData.ts';

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback handled gracefully
      });
    }
  }, []);

  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('portfolio');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black pb-20 pt-32 sm:pb-24 lg:pb-28"
    >
      {/* Full-Screen Looping Background Video - 100% vivid, clear, and unshaded */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          src={STUDIO_CONFIG.heroVideoUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
          aria-label="Mayuresh Photo Studio Cinematic Reel"
        />
      </div>

      {/* Floating subtle luxury decorative glow orbs with low opacity */}
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-[#FF5E14]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-80 h-80 rounded-full bg-[#FF5E14]/8 blur-[100px] pointer-events-none" />

      {/* Hero Content Block */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Studio Name Headline - Editorial Luxury Display */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-white leading-tight flex items-center justify-center select-none"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-300 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              Mayuresh
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-neutral-200 font-light leading-relaxed max-w-2xl text-center"
          >
            <p className="tracking-wide">{STUDIO_CONFIG.heroSubtitleLine1}</p>
          </motion.div>

          {/* Centered Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-10 flex items-center justify-center"
          >
            <a
              id="hero-view-work-cta"
              href="#portfolio"
              onClick={scrollToPortfolio}
              className="px-8 py-4 rounded-full bg-white/15 hover:bg-[#FF5E14] text-white font-medium text-sm sm:text-base tracking-wide border border-white/25 hover:border-[#FF5E14] backdrop-blur-md flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              <Play className="w-4 h-4 fill-white text-white" />
              <span>View Our Work</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#portfolio"
        onClick={scrollToPortfolio}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 right-8 hidden lg:flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors"
        aria-label="Scroll down to portfolio"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium rotate-90 origin-right translate-x-2 mb-4">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-8 h-12 rounded-full border border-white/20 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-2 rounded-full bg-[#FF5E14]" />
        </motion.div>
      </motion.a>
    </section>
  );
};
