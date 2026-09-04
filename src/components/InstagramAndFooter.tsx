import React from 'react';
import { Instagram, Facebook, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { INSTAGRAM_POSTS, RESTAURANT_INFO } from '../data/restaurantData';

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
      <div className="relative pt-20 pb-12 border-t border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Actual Restaurant Logo */}
            <div className="flex flex-col items-center">
              <Logo size="xl" className="hover:scale-105 transition-transform duration-500" />
            </div>

            <p className="max-w-md text-sm text-[#AFA99E] font-light leading-relaxed">
              Authentic Indian cuisine, crafted with tradition and served with elegance in the heart of Canada.
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-xs uppercase tracking-[0.2em] font-medium">
              <button onClick={() => onNavigateView('home')} className="text-[#FAF8F3] hover:text-[#E6C76A] transition-colors">
                Home
              </button>
              <button onClick={() => onNavigateView('about')} className="text-[#FAF8F3] hover:text-[#E6C76A] transition-colors">
                Our Story
              </button>
              <button onClick={() => onNavigateView('menu')} className="text-[#FAF8F3] hover:text-[#E6C76A] transition-colors">
                Menu
              </button>
              <button onClick={() => onNavigateView('gallery')} className="text-[#FAF8F3] hover:text-[#E6C76A] transition-colors">
                Gallery
              </button>
              <button onClick={onOpenReservation} className="text-[#E6C76A] hover:underline transition-colors">
                Reservations
              </button>
              <button onClick={() => onNavigateView('contact')} className="text-[#FAF8F3] hover:text-[#E6C76A] transition-colors">
                Contact
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-[#AFA99E]">
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
        </div>

        {/* Huge Subtle Watermark Background Text */}
        <div className="pointer-events-none select-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 text-[22vw] font-serif font-bold text-[#101010] opacity-40 leading-none whitespace-nowrap z-0">
          VEDHA
        </div>
      </div>
    </footer>
  );
};
