import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart, ExternalLink } from 'lucide-react';
import { INSTAGRAM_POSTS, STUDIO_CONFIG } from '../data/studioData.ts';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="relative w-full py-24 sm:py-32 bg-[#080808] overflow-hidden scroll-mt-20">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#FF5E14]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#FF5E14] uppercase mb-3"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>Live Social Feed</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white tracking-tight text-shadow-title drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            Follow Our Daily Stories
          </motion.h2>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href={STUDIO_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-[#FF5E14] text-white font-medium text-sm transition-all duration-300 border border-white/15 hover:border-[#FF5E14] shadow-md hover:shadow-luxury-orange"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow {STUDIO_CONFIG.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* 6-Item Instagram Visual Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {INSTAGRAM_POSTS.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-[#FF5E14] transition-all duration-300 shadow-md flex flex-col justify-end"
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hover overlay with likes and Instagram icon */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center gap-2">
                <Instagram className="w-6 h-6 text-white" />
                <div className="flex items-center gap-1.5 text-xs text-white font-semibold">
                  <Heart className="w-3.5 h-3.5 fill-[#FF5E14] text-[#FF5E14]" />
                  <span>{post.likes}</span>
                </div>
                <p className="text-[10px] text-neutral-300 line-clamp-2">
                  {post.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
