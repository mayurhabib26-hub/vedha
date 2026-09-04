import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
  onScrollToNext: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenReservation,
  onExploreMenu,
  onScrollToNext
}) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Image with slow cinematic scale-down animation */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0.6 }}
        animate={{ scale: 1.0, opacity: 0.72 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=85"
          alt="Vedha luxury Indian dining room table with warm candlelight and gold cutlery"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Cinematic Multi-Layer Vignette & Deep Black Gradients */}
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#050505] via-[#050505]/65 to-[#050505]/80 pointer-events-none" />
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#050505]/90 via-transparent to-[#050505]/90 pointer-events-none" />
      <div className="absolute inset-0 z-1 bg-radial-gold opacity-80 pointer-events-none" />

      {/* Grain / texture overlay simulation */}
      <div 
        className="absolute inset-0 z-1 opacity-[0.04] pointer-events-none bg-[radial-gradient(#FAF8F3_1px,transparent_1px)] [background-size:16px_16px]"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center flex flex-col items-center">
        {/* Actual Restaurant Logo Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 relative group"
        >
          <div className="absolute -inset-4 rounded-2xl bg-[#D4AF37]/15 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity" />
          <Logo size="xl" className="relative z-10 hover:scale-105 transition-transform duration-500" />
        </motion.div>

        {/* Main Heading: Split Line-by-Line Reveal */}
        <h1 className="font-serif font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FAF8F3] leading-[1.08] mb-6">
          <motion.span
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            A Taste of India,
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="block italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FAF8F3] via-[#E6C76A] to-[#D4AF37]"
          >
            Crafted with Elegance.
          </motion.span>
        </h1>

        {/* Supporting Line & Description */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto space-y-3 mb-10 text-center"
        >
          <p className="text-base sm:text-lg text-[#E6C76A]/90 font-serif tracking-wide italic">
            Where tradition, spices and culinary artistry come together.
          </p>
          <p className="text-sm sm:text-base text-[#AFA99E] leading-relaxed font-light">
            Experience authentic Indian flavours reimagined through refined presentation, warm hospitality and timeless culinary traditions in an intimate, modern sanctuary.
          </p>
        </motion.div>

        {/* Buttons: Staggered Appearance with Hover Microinteractions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          {/* Primary Gold Filled Button */}
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto relative group overflow-hidden px-8 py-3.5 text-xs sm:text-[13px] tracking-[0.22em] uppercase font-semibold bg-gradient-to-r from-[#C89B35] via-[#D4AF37] to-[#E6C76A] text-[#050505] rounded-[4px] shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(230,199,106,0.5)] active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Reserve a Table
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {/* Secondary Transparent Champagne Border Button */}
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto relative group px-8 py-3.5 text-xs sm:text-[13px] tracking-[0.22em] uppercase font-medium text-[#FAF8F3] border border-[#E6C76A]/40 rounded-[4px] hover:border-[#E6C76A] hover:bg-[#D4AF37]/10 transition-all duration-300 active:scale-[0.98]"
          >
            <span className="flex items-center justify-center gap-2">
              Explore Our Menu
            </span>
          </button>
        </motion.div>
      </div>

      {/* Animated "SCROLL TO DISCOVER ↓" at the bottom */}
      <motion.button
        onClick={onScrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
        aria-label="Scroll to discover Vedha"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#AFA99E] group-hover:text-[#E6C76A] transition-colors duration-300">
          Scroll to Discover
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-7 h-7 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#E6C76A]"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.button>
    </section>
  );
};
