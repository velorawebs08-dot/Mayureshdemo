import React from 'react';
import { motion } from 'motion/react';
import { 
  Camera, 
  Sparkles, 
  Compass, 
  Clock, 
  ShieldCheck, 
  Award 
} from 'lucide-react';
import { TRUST_POINTS } from '../data/studioData.ts';

// Dynamic Lucide Icon Mapper
const getTrustIcon = (name: string) => {
  switch (name) {
    case 'Camera':
      return <Camera className="w-6 h-6 text-[#FF5E14]" />;
    case 'Sparkles':
      return <Sparkles className="w-6 h-6 text-[#FF5E14]" />;
    case 'Compass':
      return <Compass className="w-6 h-6 text-[#FF5E14]" />;
    case 'Clock':
      return <Clock className="w-6 h-6 text-[#FF5E14]" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-6 h-6 text-[#FF5E14]" />;
    default:
      return <Sparkles className="w-6 h-6 text-[#FF5E14]" />;
  }
};

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="relative w-full py-24 sm:py-32 bg-[#0c0c0e] overflow-hidden scroll-mt-20">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-[#FF5E14]/8 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#FF5E14] uppercase mb-3"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Why Choose Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white tracking-tight text-shadow-title drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            Why Choose Mayuresh
          </motion.h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base font-light">
            We make sure your special celebrations are captured with pure joy, great quality, and memories you will love forever.
          </p>
        </div>

        {/* 5 Trust Points as Clean Icon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_POINTS.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#FF5E14]/50 transition-all duration-300 flex flex-col justify-between group ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-[#FF5E14]/10 border border-[#FF5E14]/30 flex items-center justify-center mb-6 group-hover:bg-[#FF5E14] group-hover:border-[#FF5E14] transition-all duration-300">
                  <div className="group-hover:brightness-200">
                    {getTrustIcon(point.iconName)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#FF5E14] transition-colors">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-300 text-sm leading-relaxed font-light">
                  {point.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors">
                <span>Top Quality Work</span>
                <Sparkles className="w-3.5 h-3.5 text-[#FF5E14]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
