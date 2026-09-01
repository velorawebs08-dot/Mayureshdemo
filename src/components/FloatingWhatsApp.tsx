import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData.ts';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Show polite tooltip invitation once after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Interactive Quick Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="p-3.5 pr-8 rounded-2xl bg-[#141418] border border-[#FF5E14]/40 shadow-2xl text-xs text-white max-w-xs relative backdrop-blur-lg"
          >
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="absolute top-2.5 right-2.5 text-neutral-400 hover:text-white"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <p className="font-semibold text-[#FF5E14] mb-0.5">Planning a Wedding or Shoot?</p>
            <p className="text-neutral-300 text-[11px] font-light">
              Chat directly with Vinayak on WhatsApp for date availability.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Buttons Stack */}
      <div className="flex items-center gap-2.5">
        <a
          href={STUDIO_CONFIG.callTel}
          className="p-3.5 rounded-full bg-[#17171c] hover:bg-neutral-800 text-white border border-white/20 shadow-xl transition-transform duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
          aria-label="Call studio directly"
        >
          <Phone className="w-5 h-5 text-[#FF5E14]" />
        </a>

        <a
          id="floating-whatsapp-btn"
          href={STUDIO_CONFIG.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-[#FF5E14] hover:bg-[#e04e0b] text-white shadow-2xl shadow-[#FF5E14]/40 transition-transform duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white text-transparent" />
        </a>
      </div>
    </div>
  );
};
