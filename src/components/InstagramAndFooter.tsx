import React from 'react';
import { Instagram, Facebook, ArrowUp, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Logo } from './Logo';
import { INSTAGRAM_POSTS, RESTAURANT_INFO } from '../data/restaurantData';

const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16.6 5.82c-.98-.87-1.6-2.06-1.7-3.4h-3.1v13.6c0 1.6-1.3 2.9-2.9 2.9a2.9 2.9 0 0 1-2.9-2.9c0-1.6 1.3-2.9 2.9-2.9.3 0 .58.04.85.13V10c-.28-.04-.56-.06-.85-.06-3.3 0-6 2.68-6 6s2.7 6 6 6 6-2.68 6-6V8.85a8.2 8.2 0 0 0 4.8 1.54V7.29a4.85 4.85 0 0 1-3.1-1.47Z" />
  </svg>
);

interface InstagramAndFooterProps {
  onNavigateView: (view: 'home' | 'menu' | 'about' | 'gallery' | 'contact') => void;
  onOpenReservation: () => void;
}

export const InstagramAndFooter: React.FC<InstagramAndFooterProps> = ({
  onNavigateView,
  onOpenReservation
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] text-[#FAF8F3] overflow-hidden">
      {/* 15. Instagram Section */}
      <div className="py-20 border-t border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <span className="text-xs tracking-[0.25em] uppercase font-semibold text-[#E6C76A] block mb-2">
            INSTAGRAM
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#FAF8F3]">
            Follow the <span className="italic text-[#E6C76A]">Flavours</span>
          </h3>
          <a
            href={RESTAURANT_INFO.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-2 text-xs tracking-[0.2em] uppercase text-[#AFA99E] hover:text-[#E6C76A] transition-colors"
          >
            @vedha.cuisine
          </a>
        </div>

        {/* 6-image Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={RESTAURANT_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-[4px] bg-[#141414]"
            >
              <img
                src={post.image}
                alt="Vedha Instagram post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#050505]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                <Instagram className="w-5 h-5 text-[#E6C76A] mb-2" />
                <span className="text-[10px] tracking-wider text-[#FAF8F3] uppercase">
                  {post.likes} Likes
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* 16. Main Footer */}
      <div className="relative pt-20 pb-10 border-t border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-14 text-center sm:text-left">
            {/* Brand Column */}
            <div className="flex flex-col items-center sm:items-start col-span-1 sm:col-span-2 lg:col-span-1">
              <Logo size="lg" className="hover:scale-105 transition-transform duration-500" />
              <p className="mt-6 max-w-xs text-sm text-[#AFA99E] font-light leading-relaxed">
                Authentic Indian cuisine, crafted with tradition and served with elegance in the heart of Canada.
              </p>
              <div className="flex items-center gap-3 mt-6 text-[#AFA99E]">
                <a
                  href={RESTAURANT_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-[#D4AF37]/25 flex items-center justify-center hover:text-[#E6C76A] hover:border-[#E6C76A] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={RESTAURANT_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-[#D4AF37]/25 flex items-center justify-center hover:text-[#E6C76A] hover:border-[#E6C76A] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={RESTAURANT_INFO.socials.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-[#D4AF37]/25 flex items-center justify-center hover:text-[#E6C76A] hover:border-[#E6C76A] transition-colors"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="text-xs tracking-[0.25em] uppercase font-semibold text-[#E6C76A] mb-5">
                Explore
              </h4>
              <div className="flex flex-col gap-3 text-sm text-[#AFA99E]">
                <button onClick={() => onNavigateView('home')} className="hover:text-[#FAF8F3] transition-colors text-left">
                  Home
                </button>
                <button onClick={() => onNavigateView('about')} className="hover:text-[#FAF8F3] transition-colors text-left">
                  Our Story
                </button>
                <button onClick={() => onNavigateView('menu')} className="hover:text-[#FAF8F3] transition-colors text-left">
                  Menu
                </button>
                <button onClick={() => onNavigateView('gallery')} className="hover:text-[#FAF8F3] transition-colors text-left">
                  Gallery
                </button>
                <button onClick={() => onNavigateView('contact')} className="hover:text-[#FAF8F3] transition-colors text-left">
                  Contact
                </button>
                <button onClick={onOpenReservation} className="text-[#E6C76A] hover:underline transition-colors text-left w-fit">
                  Reserve a Table
                </button>
              </div>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="text-xs tracking-[0.25em] uppercase font-semibold text-[#E6C76A] mb-5">
                Contact
              </h4>
              <div className="flex flex-col gap-4 text-sm text-[#AFA99E]">
                <a
                  href="https://maps.google.com/?q=1428+Rue+Sainte-Catherine+Ouest+Montreal+QC"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 hover:text-[#FAF8F3] transition-colors justify-center sm:justify-start"
                >
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-left">
                    {RESTAURANT_INFO.address.street}, {RESTAURANT_INFO.address.suite}
                    <br />
                    {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.province}{' '}
                    {RESTAURANT_INFO.address.postalCode}
                  </span>
                </a>
                <a
                  href={`tel:${RESTAURANT_INFO.formattedPhone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 hover:text-[#FAF8F3] transition-colors justify-center sm:justify-start"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{RESTAURANT_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="flex items-center gap-3 hover:text-[#FAF8F3] transition-colors justify-center sm:justify-start"
                >
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{RESTAURANT_INFO.email}</span>
                </a>
              </div>
            </div>

            {/* Hours Column */}
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="text-xs tracking-[0.25em] uppercase font-semibold text-[#E6C76A] mb-5">
                Opening Hours
              </h4>
              <div className="flex flex-col gap-4 text-sm text-[#AFA99E]">
                {RESTAURANT_INFO.hours.map((slot) => (
                  <div key={slot.days} className="flex items-start gap-3 justify-center sm:justify-start">
                    <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="text-left">
                      <span className="block text-[#FAF8F3]">{slot.days}</span>
                      <span className="block text-xs text-[#AFA99E]/80">{slot.times}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright and Back to Top */}
          <div className="pt-8 border-t border-white/5 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-[#AFA99E]/70 gap-4">
            <p>© 2026 Vedha – Chez Cuisine Indienne. All Rights Reserved.</p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#E6C76A] transition-colors uppercase tracking-wider text-[11px]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Huge Subtle Watermark Background Text */}
        <div className="pointer-events-none select-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 text-[22vw] font-serif font-bold text-[#101010] opacity-40 leading-none whitespace-nowrap z-0">
          VEDHA
        </div>
      </div>
    </footer>
  );
};
