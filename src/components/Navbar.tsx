import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Phone, Calendar, Clock } from 'lucide-react';
import { Logo } from './Logo';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
  activeView: 'home' | 'menu' | 'about' | 'gallery' | 'contact';
  setActiveView: (view: 'home' | 'menu' | 'about' | 'gallery' | 'contact') => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReservation,
  activeView,
  setActiveView,
  onNavigateSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks: { label: string; view: 'home' | 'menu' | 'about' | 'gallery' | 'contact'; sectionId?: string }[] = [
    { label: 'Home', view: 'home', sectionId: 'hero' },
    { label: 'Our Story', view: 'about', sectionId: 'about' },
    { label: 'Menu', view: 'menu', sectionId: 'menu' },
    { label: 'Gallery', view: 'gallery', sectionId: 'gallery' },
    { label: 'Contact', view: 'contact', sectionId: 'contact' }
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    setMobileMenuOpen(false);
    setActiveView(link.view);
    if (onNavigateSection && link.sectionId) {
      setTimeout(() => {
        onNavigateSection(link.sectionId!);
      }, 50);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#050505]/92 backdrop-blur-md border-b border-[#D4AF37]/15 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-[#050505]/80 via-[#050505]/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick(navLinks[0])}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="Vedha Restaurant Home"
          >
            <Logo size={isScrolled ? 'sm' : 'md'} variant="full" />
          </button>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = activeView === link.view;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="relative group py-1 text-[13px] tracking-[0.2em] uppercase font-medium transition-colors duration-300"
                >
                  <span
                    className={
                      isActive
                        ? 'text-[#E6C76A]'
                        : 'text-[#AFA99E] hover:text-[#FAF8F3]'
                    }
                  >
                    {link.label}
                  </span>

                  {/* Underline hover & active indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-[#D4AF37] to-[#E6C76A] transition-all duration-300 ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    }`}
                  />
                  {isActive && (
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D4AF37] shadow-[0_0_6px_#D4AF37]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenReservation}
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-[12px] tracking-[0.2em] uppercase font-semibold text-[#FAF8F3] border border-[#D4AF37]/50 rounded-[4px] hover:border-[#E6C76A] hover:bg-[#D4AF37]/10 transition-all duration-300 group shadow-[0_0_15px_rgba(212,175,55,0.08)] active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Reserve a Table
                <ArrowRight className="w-3.5 h-3.5 text-[#E6C76A] transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              {/* Subtle gold line glow */}
              <div className="absolute inset-0 rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#D4AF37]/10 via-[#E6C76A]/20 to-[#D4AF37]/10" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenReservation}
              className="px-3 py-1.5 text-[11px] tracking-[0.15em] uppercase font-medium text-[#FAF8F3] border border-[#D4AF37]/40 rounded-[3px]"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#FAF8F3] hover:text-[#E6C76A] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#E6C76A]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Dark Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#050505] flex flex-col justify-between p-6 sm:p-10 md:hidden overflow-y-auto"
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between border-b border-[#D4AF37]/15 pb-4">
              <Logo size="sm" variant="full" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#AFA99E] hover:text-[#FAF8F3] border border-[#D4AF37]/20 rounded-full"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5 text-[#E6C76A]" />
              </button>
            </div>

            {/* Links List with Staggered Framer Motion */}
            <div className="flex flex-col py-8 space-y-5">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.4 }}
                >
                  <button
                    onClick={() => handleNavClick(link)}
                    className="flex items-center justify-between w-full text-left group"
                  >
                    <span className="font-serif text-3xl font-light tracking-wide text-[#FAF8F3] group-hover:text-[#E6C76A] transition-colors">
                      {link.label}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] opacity-60 group-hover:opacity-100">
                      0{idx + 1}
                    </span>
                  </button>
                </motion.div>
              ))}

              <div className="pt-6">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-4 text-center text-xs tracking-[0.25em] uppercase font-semibold bg-gradient-to-r from-[#C89B35] via-[#D4AF37] to-[#E6C76A] text-[#050505] rounded-[4px] shadow-[0_4px_20px_rgba(212,175,55,0.25)] flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Reserve a Table
                </button>
              </div>
            </div>

            {/* Restaurant Quick Info Footer in Drawer */}
            <div className="pt-6 border-t border-[#D4AF37]/15 text-[#AFA99E] text-xs space-y-2">
              <div className="flex items-center gap-2 text-[#FAF8F3]">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Open Today: 11:30 AM – 10:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{RESTAURANT_INFO.formattedPhone}</span>
              </div>
              <p className="text-[11px] text-[#AFA99E]/70 pt-2">
                1428 Rue Sainte-Catherine Ouest, Montréal, QC
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
