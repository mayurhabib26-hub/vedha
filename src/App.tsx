import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { SignatureDishes } from './components/SignatureDishes';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { CulinaryPhilosophy } from './components/CulinaryPhilosophy';
import { ExperienceAndGallery } from './components/ExperienceAndGallery';
import { WhyVedhaAndTestimonials } from './components/WhyVedhaAndTestimonials';
import { ReservationAndLocation } from './components/ReservationAndLocation';
import { InstagramAndFooter } from './components/InstagramAndFooter';
import { ReservationModal } from './components/ReservationModal';
import { DishDetailModal } from './components/DishDetailModal';
import { DedicatedMenuPage, DedicatedAboutPage, DedicatedContactPage } from './components/DedicatedViews';
import { MenuItem } from './types';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'menu' | 'about' | 'gallery' | 'contact'>('home');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  // Synchronize browser history / hash state
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['menu', 'about', 'contact'].includes(hash)) {
        setActiveView(hash as any);
      } else if (hash === 'gallery') {
        setActiveView('home');
        setTimeout(() => {
          document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (hash === 'reservation') {
        setIsReservationOpen(true);
      } else {
        setActiveView('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigateSection = (sectionId: string) => {
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const setViewWithHash = (view: 'home' | 'menu' | 'about' | 'gallery' | 'contact') => {
    setActiveView(view);
    if (view === 'home') {
      window.history.pushState(null, '', window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = view;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAF8F3] font-sans selection:bg-[#D4AF37]/30 selection:text-[#FAF8F3]">
      {/* Global Luxury Navbar */}
      <Navbar
        activeView={activeView}
        setActiveView={setViewWithHash}
        onOpenReservation={() => setIsReservationOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Router */}
      <main>
        {activeView === 'menu' && (
          <DedicatedMenuPage
            onBack={() => setViewWithHash('home')}
            onOpenReservation={() => setIsReservationOpen(true)}
            onSelectDish={(dish) => setSelectedDish(dish)}
          />
        )}

        {activeView === 'about' && (
          <DedicatedAboutPage
            onBack={() => setViewWithHash('home')}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}

        {activeView === 'contact' && (
          <DedicatedContactPage
            onBack={() => setViewWithHash('home')}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}

        {activeView === 'home' && (
          <>
            {/* 1. Hero Section */}
            <Hero
              onOpenReservation={() => setIsReservationOpen(true)}
              onExploreMenu={() => handleNavigateSection('menu')}
              onScrollToNext={() => handleNavigateSection('introduction')}
            />

            {/* 2. Introduction Section (Cream Background) */}
            <Introduction
              onDiscoverStory={() => handleNavigateSection('about')}
            />

            {/* 3. Signature Dishes (#080808) */}
            <SignatureDishes
              onSelectDish={(dish) => setSelectedDish(dish)}
              onViewAllMenu={() => setViewWithHash('menu')}
            />

            {/* 4. About Vedha & Heritage Stats */}
            <AboutSection />

            {/* 5. Menu Preview (Cream Background) */}
            <MenuSection
              onViewFullMenu={() => setViewWithHash('menu')}
              onOpenDishDetail={(dish) => setSelectedDish(dish)}
            />

            {/* 6. Culinary Philosophy */}
            <CulinaryPhilosophy />

            {/* 7 & 8. Dining Experience & Food Gallery with Lightbox */}
            <ExperienceAndGallery />

            {/* 9 & 10. Why Choose Vedha & Guest Testimonials */}
            <WhyVedhaAndTestimonials />

            {/* 11 & 12 & 13. Reservation CTA, Booking Form & Location/Hours */}
            <ReservationAndLocation
              onOpenReservationModal={() => setIsReservationOpen(true)}
            />
          </>
        )}
      </main>

      {/* 14 & 15. Instagram Section & Premium Footer */}
      <InstagramAndFooter
        onNavigateView={setViewWithHash}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Interactive Modals */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onReserve={() => setIsReservationOpen(true)}
      />
    </div>
  );
}
