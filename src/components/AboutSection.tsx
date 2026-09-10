import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  Sparkles, 
  Award, 
  CheckCircle2, 
  MessageCircle
} from 'lucide-react';
import { STUDIO_CONFIG, STATS } from '../data/studioData.ts';

// Counter Component with Smooth Animation
interface CounterProps {
  value: number;
  suffix: string;
  label: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = value / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-start p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF5E14]/40 transition-colors">
      <div className="flex items-baseline gap-1">
        <span className="font-serif-luxury text-4xl sm:text-5xl font-bold text-white tracking-tight">
          {count}
        </span>
        <span className="font-serif-luxury text-3xl font-bold text-[#FF5E14]">
          {suffix}
        </span>
      </div>
      <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-medium tracking-wide">
        {label}
      </p>
    </div>
  );
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-24 sm:py-32 bg-[#0c0c0e] overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-[#FF5E14]/8 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split: Founder & Brand Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Founder Image Slot (Easily swappable) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Luxury Frame Accent */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#FF5E14]/20 via-transparent to-white/5 blur-xl pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/15 shadow-2xl aspect-[4/5] group">
                {/* Founder Image */}
                <img
                  src={STUDIO_CONFIG.founderImageUrl}
                  alt={`${STUDIO_CONFIG.founder} - Founder of ${STUDIO_CONFIG.name}`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Founder Badge Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col gap-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5E14] text-white text-[11px] font-bold uppercase tracking-wider w-fit shadow-lg">
                    <Award className="w-3.5 h-3.5" />
                    <span>Founder & Creative Director</span>
                  </div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1">
                    {STUDIO_CONFIG.founder}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light">
                    {STUDIO_CONFIG.name} & Cinematography
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Brand Story Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#FF5E14] uppercase mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Mayuresh Photo Wala</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6 text-shadow-title drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Turning Moments Into Visual Legacies
            </h2>

            {/* Brand Story Block */}
            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Founded by visionary photographer <strong className="text-white font-medium">{STUDIO_CONFIG.founder}</strong>, <strong className="text-white font-medium">{STUDIO_CONFIG.name}</strong> has grown into a professional photography and cinematography team with <strong className="text-white font-medium">3 branches</strong>, serving clients across Western Maharashtra and destination venues across India.
              </p>
              <p>
                We combine <strong className="text-white font-medium">high-fashion aesthetics, cinematic storytelling, and genuine emotions</strong> to create visuals that feel timeless. From grand weddings and traditional celebrations to destination pre-weddings and milestone events, our experienced team brings together creative direction, professional lighting, cinematic filming, and premium color grading.
              </p>
              <p>
                With a strong focus on <strong className="text-white font-medium">quality, consistency, and personalized storytelling</strong>, Mayuresh Photo Wala captures every celebration with the craftsmanship it deserves — creating memories designed to last for generations.
              </p>
            </div>

            {/* Quick Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-[#FF5E14] flex-shrink-0" />
                <span>3 Branches & Professional Creative Team</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-[#FF5E14] flex-shrink-0" />
                <span>Pan-India & International Destination Ready</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-[#FF5E14] flex-shrink-0" />
                <span>Signature 8K High-Dynamic Cinematic Footage</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-[#FF5E14] flex-shrink-0" />
                <span>Complete Heritage & Modern Event Coverage</span>
              </div>
            </div>

            {/* Direct Founder Booking CTA */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={STUDIO_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FF5E14] hover:bg-[#e04e0b] text-white font-semibold text-sm transition-all duration-300 shadow-luxury-orange"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Consult with Vinayak on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Animated Stats Bar */}
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat, idx) => (
              <AnimatedCounter
                key={idx}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
