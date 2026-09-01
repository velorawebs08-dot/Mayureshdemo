import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Phone, 
  MapPin, 
  Calendar, 
  User, 
  Send, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Navigation,
  ArrowUp,
  Sparkles
} from 'lucide-react';
import { BRANCHES, STUDIO_CONFIG } from '../data/studioData.ts';

export const ContactFooterSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = `Hello Mayuresh Photo Studio! I would like to book a shoot.\n\n*Name:* ${formData.name || 'Client'}\n*Phone:* ${formData.phone || 'N/A'}\n*Event Type:* ${formData.eventType}\n*Target Date:* ${formData.date || 'Flexible'}\n*Message:* ${formData.message || 'Please share portfolio and slot availability.'}`;
    const url = `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative w-full pt-24 sm:pt-32 bg-[#060607] text-neutral-100 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-[#FF5E14]/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-20 w-96 h-96 rounded-full bg-[#FF5E14]/8 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Dedicated Video Background behind the Book Your Date / Let's Plan Your Shoot context */}
        <div className="relative max-w-4xl mx-auto mb-16 sm:mb-20 rounded-3xl overflow-hidden border border-white/10 p-8 sm:p-14 text-center shadow-2xl">
          {/* Video positioned exclusively behind this context - purely visible */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-90 scale-100 transition-opacity duration-700"
              src="https://www.image2url.com/r2/default/videos/1788265501215-b853c26e-8284-4cba-a311-cf7bc04e87c8.mp4"
            />
            {/* Subtle soft dark vignette to ensure text contrast while keeping video purely visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/70" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-widest text-[#FF5E14] uppercase mb-3 backdrop-blur-md"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Your Date</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight text-shadow-title drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            >
              Let's Plan Your Shoot
            </motion.h2>
            <p className="mt-4 text-neutral-200 text-sm sm:text-base lg:text-lg font-light max-w-2xl mx-auto">
              We take limited bookings to give every event our full attention. Reach out to check if your date is available.
            </p>

            {/* Quick Direct Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                id="booking-whatsapp-primary"
                href={STUDIO_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-full bg-[#FF5E14] hover:bg-[#e04e0b] text-white font-semibold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 transition-all duration-300 shadow-luxury-orange hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                id="booking-call-primary"
                href={STUDIO_CONFIG.callTel}
                className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base tracking-wide border border-white/15 flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-md"
              >
                <Phone className="w-4 h-4 text-[#FF5E14]" />
                <span>Call Us: 09922226779</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Booking Form & Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-24 items-start">
          {/* Booking Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 shadow-2xl relative"
          >
            <div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-2">
                Book Your Date
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mb-8 font-light">
                Fill in your event details below, or click to send us a direct message on WhatsApp.
              </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-4 h-4 text-neutral-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rohan Patil"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#FF5E14] focus:outline-none text-white text-sm placeholder-neutral-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Contact Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 w-4 h-4 text-neutral-500" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#FF5E14] focus:outline-none text-white text-sm placeholder-neutral-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Event Type */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Event Type *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141416] border border-white/10 focus:border-[#FF5E14] focus:outline-none text-white text-sm transition-colors cursor-pointer"
                  >
                    <option value="Wedding">Wedding Ceremony</option>
                    <option value="Pre-Wedding">Pre-Wedding Shoot</option>
                    <option value="Baby Shower">Baby Shower & Maternity</option>
                    <option value="Events">Event / Birthday / Party</option>
                    <option value="Other">Other Shoot</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141416] border border-white/10 focus:border-[#FF5E14] focus:outline-none text-white text-sm transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Event Location & Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention your venue, city, or any details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#FF5E14] focus:outline-none text-white text-sm placeholder-neutral-500 transition-colors resize-none"
                />
              </div>

              {/* Buttons Row */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-[#FF5E14] hover:bg-[#e04e0b] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-luxury-orange"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/10 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4 text-[#FF5E14]" />
                  <span>Submit Details</span>
                </button>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-green-950/40 border border-green-500/30 flex items-center gap-3 text-green-200 text-xs sm:text-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>
                    Thank you! We received your details and will contact you shortly. You can also click <strong>"Send via WhatsApp"</strong> for instant reply.
                  </span>
                </motion.div>
              )}
            </form>
            </div>
          </motion.div>

          {/* Quick Studio Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="p-8 rounded-3xl bg-[#0e0e10]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="w-10 h-10 rounded-full bg-[#FF5E14]/10 border border-[#FF5E14]/30 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-[#FF5E14]" />
              </div>
              <h4 className="font-serif-luxury text-2xl font-bold text-white mb-2">
                Talk to Us Directly
              </h4>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                Want to meet in person or talk on the phone? Visit our studio in Sangli or call us anytime to plan your shoot.
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-center gap-3 text-neutral-200">
                  <Phone className="w-4 h-4 text-[#FF5E14]" />
                  <span>Call: 09922226779</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-200">
                  <Phone className="w-4 h-4 text-[#FF5E14]" />
                  <span>Call: 09623335522</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-200">
                  <MessageCircle className="w-4 h-4 text-[#FF5E14]" />
                  <span>WhatsApp: +91 9595955220</span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-8 rounded-3xl bg-[#0e0e10]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
              <h4 className="font-serif-luxury text-xl font-bold text-white mb-4">
                Follow Our Work
              </h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href={STUDIO_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-[#FF5E14] text-neutral-300 hover:text-white border border-white/10 transition-all flex items-center gap-2 text-xs font-medium"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href={STUDIO_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-[#FF5E14] text-neutral-300 hover:text-white border border-white/10 transition-all flex items-center gap-2 text-xs font-medium"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
                <a
                  href={STUDIO_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-[#FF5E14] text-neutral-300 hover:text-white border border-white/10 transition-all flex items-center gap-2 text-xs font-medium"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 BRANCHES CARDS */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-white mb-2">
              Our Studio Locations
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              Visit us across our 3 premier studio branches in Sangli Miraj Kupwad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRANCHES.map((branch) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                  branch.isMain
                    ? 'bg-gradient-to-b from-[#141418] to-[#0d0d10] border-[#FF5E14]/60 shadow-xl shadow-[#FF5E14]/10'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                      branch.isMain ? 'bg-[#FF5E14] text-white' : 'bg-white/10 text-neutral-300'
                    }`}>
                      {branch.isMain ? 'Main Flagship Branch' : 'Studio Branch'}
                    </span>
                    <MapPin className="w-4 h-4 text-[#FF5E14]" />
                  </div>

                  <h4 className="font-serif-luxury text-xl font-bold text-white mb-3">
                    {branch.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                    {branch.address}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs text-neutral-300">
                    <span className="text-neutral-400">Phone:</span>
                    <a href={`tel:+91${branch.phone}`} className="hover:text-[#FF5E14] font-medium">
                      {branch.phone}
                    </a>
                  </div>

                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-[#FF5E14] text-neutral-200 hover:text-white border border-white/10 hover:border-[#FF5E14] text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Embedded Google Map (Main Branch) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl mb-24 h-80 sm:h-96 relative bg-neutral-900"
        >
          <iframe
            title="Mayuresh Photo Studio Main Branch Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.573210411802!2d74.56885697588383!3d16.847477983950133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc12304dc4a3951%3A0x6b820a4b7f83b630!2sUshakal%20Hospital%20Rd%2C%20near%20Radha%20Krishna%20Mandir%2C%20Sangli%2C%20Maharashtra%20416416!5e0!3m2!1sen!2sin!4v1709292800000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute top-4 left-4 p-3 rounded-2xl bg-[#080808]/90 backdrop-blur-md border border-white/15 text-xs text-white flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#FF5E14]" />
            <span>Main Branch • Ushakal Hospital Rd, Sangli</span>
          </div>
        </motion.div>
      </div>

      {/* PREMIUM FOOTER */}
      <footer className="border-t border-white/10 bg-[#040405] py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Studio Identity */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={STUDIO_CONFIG.logoUrl}
                  alt="Mayuresh Photo Wala"
                  className="h-10 sm:h-11 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="font-serif-luxury text-xl font-bold tracking-wider text-white">
                    MAYURESH
                  </span>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                    Photo Wala & Cinema
                  </p>
                </div>
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
                Capturing timeless moments across weddings, pre-weddings & celebrations. Trusted across Sangli, Maharashtra & destination venues worldwide.
              </p>
              <div className="text-xs text-[#FF5E14] font-medium">
                Founder: {STUDIO_CONFIG.founder}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-serif-luxury text-base font-bold text-white mb-4 tracking-wider uppercase">
                Quick Navigation
              </h5>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
                <li>
                  <a href="#hero" className="hover:text-[#FF5E14] transition-colors">
                    Home & Cinematic Reel
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-[#FF5E14] transition-colors">
                    Portfolio & Categories
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#FF5E14] transition-colors">
                    About Founder & Studio
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="hover:text-[#FF5E14] transition-colors">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-[#FF5E14] transition-colors">
                    Client Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#FF5E14] transition-colors">
                    Bookings & Locations
                  </a>
                </li>
              </ul>
            </div>

            {/* Branch Summary */}
            <div>
              <h5 className="font-serif-luxury text-base font-bold text-white mb-4 tracking-wider uppercase">
                Studio Branches
              </h5>
              <div className="space-y-3 text-xs text-neutral-400 font-light">
                <div>
                  <strong className="text-white block font-normal">Main Flagship:</strong>
                  <span>Ushakal Hospital Rd, Sangli</span>
                </div>
                <div>
                  <strong className="text-white block font-normal">Vishrambag Suite 1:</strong>
                  <span>Shop 1, Gandhi Nagar, Vishrambag</span>
                </div>
                <div>
                  <strong className="text-white block font-normal">Vishrambag Suite 2:</strong>
                  <span>Shop 1, Gandhi Nagar, Vishrambag</span>
                </div>
              </div>
            </div>

            {/* Connect & Direct WhatsApp */}
            <div>
              <h5 className="font-serif-luxury text-base font-bold text-white mb-4 tracking-wider uppercase">
                Instant Connect
              </h5>
              <p className="text-xs text-neutral-400 mb-4 font-light">
                Direct concierge line for dates and outstation bookings.
              </p>
              <a
                href={STUDIO_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#FF5E14] hover:bg-[#e04e0b] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-luxury-orange mb-4"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>WhatsApp: 919595955220</span>
              </a>

              <div className="flex items-center gap-3">
                <a
                  href={STUDIO_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-[#FF5E14] text-neutral-300 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={STUDIO_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-[#FF5E14] text-neutral-300 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={STUDIO_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-[#FF5E14] text-neutral-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Back to Top */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>
              © {new Date().getFullYear()} Mayuresh Photo Studio. All Rights Reserved. Crafted for High-End Celebrations.
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#FF5E14]" />
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
};
