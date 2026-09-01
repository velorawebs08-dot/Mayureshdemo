import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  Camera, 
  Sparkles, 
  Compass, 
  Clock, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { STUDIO_CONFIG, TRUST_POINTS, STATS } from '../data/studioData.ts';

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
        <div className="mb-24">
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

        {/* Section 3 Part 2: WHY CHOOSE US */}
        <div id="why-us" className="pt-8">
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
      </div>
    </section>
  );
};
