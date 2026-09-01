import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, MessageCircle, Maximize2, Sparkles } from 'lucide-react';
import { PortfolioCategory } from '../types.ts';
import { STUDIO_CONFIG } from '../data/studioData.ts';

interface GalleryModalProps {
  category: PortfolioCategory | null;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ category, onClose }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedPhotoIndex !== null) {
          setSelectedPhotoIndex(null);
        } else {
          onClose();
        }
      }
      if (selectedPhotoIndex !== null && category) {
        if (e.key === 'ArrowRight') {
          setSelectedPhotoIndex((prev) => (prev! + 1) % category.photos.length);
        }
        if (e.key === 'ArrowLeft') {
          setSelectedPhotoIndex((prev) => (prev! - 1 + category.photos.length) % category.photos.length);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, category, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (category) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [category]);

  if (!category) return null;

  const currentPhoto = selectedPhotoIndex !== null ? category.photos[selectedPhotoIndex] : null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 overflow-y-auto bg-black/95 backdrop-blur-xl">
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-6xl min-h-screen md:min-h-0 md:max-h-[90vh] flex flex-col bg-[#0d0d0f] md:rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 bg-[#0d0d0f]/95 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5E14]" />
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-white tracking-wide">
                  {category.title} Portfolio
                </h3>
                <p className="text-xs text-neutral-400 font-light hidden sm:block">
                  {category.subtitle} • {category.photos.length} Master-grade captures
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`${STUDIO_CONFIG.whatsappLink}?text=${encodeURIComponent(`Hi Mayuresh Studio, I am exploring your ${category.title} portfolio and would love to check availability.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FF5E14] text-white text-xs font-semibold hover:bg-[#e04e0b] transition-all shadow-luxury-orange"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
                Book for {category.title}
              </a>

              <button
                type="button"
                onClick={onClose}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-all focus:outline-none"
                aria-label="Close gallery"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Photos Grid - NO description text under images, just image with tag on hover only */}
          <div className="flex-1 p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-140px)]">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {category.photos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedPhotoIndex(index)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer bg-neutral-900 border border-white/10 break-inside-avoid shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5E14]/70 hover:shadow-2xl"
                >
                  {/* Photo Display */}
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Hover Overlay: Shows category tag only on hover, no bottom description text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                    <div className="flex justify-end">
                      <span className="p-2 rounded-full bg-black/60 text-white/90 backdrop-blur-md">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    <div>
                      {/* Tag on hover only */}
                      <span className="inline-block px-3 py-1 rounded-full bg-[#FF5E14] text-white text-[11px] font-semibold tracking-wider uppercase shadow-lg">
                        {photo.tag}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-4 bg-[#0d0d0f] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5E14]" />
              <span>Captured on High-Resolution Prime Cinema Sensors</span>
            </div>
            <a
              href={STUDIO_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden w-full py-2.5 rounded-xl bg-[#FF5E14] text-white font-medium text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              Book on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Fullscreen Lightbox Single Photo View */}
        <AnimatePresence>
          {currentPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-60 bg-black/98 flex items-center justify-center p-4"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPhotoIndex(null)}
                className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close single photo view"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Button */}
              <button
                type="button"
                onClick={() => setSelectedPhotoIndex((prev) => (prev! - 1 + category.photos.length) % category.photos.length)}
                className="absolute left-4 sm:left-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={() => setSelectedPhotoIndex((prev) => (prev! + 1) % category.photos.length)}
                className="absolute right-4 sm:right-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Central Photo */}
              <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
                <img
                  src={currentPhoto.url}
                  alt={currentPhoto.alt}
                  className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl border border-white/15"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-4 flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-[#FF5E14] text-white text-xs font-semibold uppercase tracking-wider">
                    {currentPhoto.tag}
                  </span>
                  <span className="text-xs text-neutral-400">
                    {selectedPhotoIndex! + 1} of {category.photos.length}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
};
