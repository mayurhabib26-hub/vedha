import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Search, Filter, Wine, Sparkles, MapPin, Phone, Mail, Clock, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { Logo } from './Logo';
import { FULL_MENU, GALLERY_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuCategory, MenuItem } from '../types';

interface ViewProps {
  onBack: () => void;
  onOpenReservation: () => void;
  onSelectDish?: (dish: MenuItem) => void;
}

// 1. DEDICATED /menu PAGE
export const DedicatedMenuPage: React.FC<ViewProps> = ({ onBack, onOpenReservation, onSelectDish }) => {
  const [activeCat, setActiveCat] = useState<MenuCategory | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [dietary, setDietary] = useState<string>('All');

  const categories: MenuCategory[] = [
    'Appetizers',
    'Non - Veg',
    'Veg Curry',
    'Non-Veg Curry',
    'Lamb Curry',
    'South Indian',
    'Thalis',
    'Biryani et Riz',
    'Bread and Rice',
    'Desi Chinese Veg',
    'Desi Chinese Non-Veg',
    'Wraps and Burgers'
  ];

  const filtered = FULL_MENU.filter((dish) => {
    const matchesCat = activeCat === 'All' || dish.category === activeCat;
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          dish.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDiet = dietary === 'All' || dish.tags.includes(dietary as any);
    return matchesCat && matchesSearch && matchesDiet;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAF8F3] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E6C76A] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Main Experience
        </button>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E6C76A] font-semibold">
            THE COMPLETE COLLECTION
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FAF8F3] font-light mt-2">
            The Vedha <span className="italic text-[#E6C76A]">Menu</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#AFA99E]">
            All dishes are prepared freshly upon order. Prices in Canadian Dollars (CA$). Please inform our team of any dietary requirements.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-[#0B0B0B] p-4 rounded-[8px] border border-[#D4AF37]/20 mb-10">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#AFA99E] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes or ingredients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#141414] border border-[#D4AF37]/20 rounded-[4px] text-xs text-[#FAF8F3] focus:outline-none focus:border-[#E6C76A]"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 w-full md:w-auto justify-start md:justify-end">
            {['All', 'Vegetarian', 'Vegan', 'Gluten-Friendly', 'Chef Special'].map((tag) => (
              <button
                key={tag}
                onClick={() => setDietary(tag)}
                className={`text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-[4px] border transition-colors ${
                  dietary === tag
                    ? 'bg-[#E6C76A] text-black font-semibold border-[#E6C76A]'
                    : 'border-[#D4AF37]/20 text-[#AFA99E] hover:border-[#D4AF37]/50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Category Selector */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            onClick={() => setActiveCat('All')}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider whitespace-nowrap ${
              activeCat === 'All' ? 'bg-[#D4AF37] text-black font-semibold' : 'bg-[#141414] text-[#AFA99E]'
            }`}
          >
            All Courses
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider whitespace-nowrap ${
                activeCat === c ? 'bg-[#D4AF37] text-black font-semibold' : 'bg-[#141414] text-[#AFA99E]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectDish?.(item)}
              className="group cursor-pointer rounded-[6px] bg-[#0E0E0E] border border-[#D4AF37]/15 p-5 flex flex-col justify-between hover:border-[#D4AF37]/45 transition-colors"
            >
              <div>
                <div className="h-48 rounded-[4px] overflow-hidden mb-4 bg-[#141414]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex justify-between items-baseline gap-2 mb-1">
                  <h3 className="font-serif text-xl text-[#FAF8F3] group-hover:text-[#E6C76A] transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-serif text-lg text-[#E6C76A] font-semibold whitespace-nowrap">
                    CA${item.price.toFixed(2)}
                  </span>
                </div>
                {item.hindiName && (
                  <p className="text-[10px] uppercase tracking-widest text-[#D4AF37]/80 mb-2">
                    {item.hindiName}
                  </p>
                )}
                <p className="text-xs text-[#AFA99E] line-clamp-2 font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-[#AFA99E]">
                  {item.category}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#E6C76A] group-hover:underline">
                  View Details →
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={onOpenReservation}
            className="px-8 py-3.5 bg-gradient-to-r from-[#C89B35] to-[#E6C76A] text-black font-semibold text-xs uppercase tracking-[0.22em] rounded-[4px]"
          >
            Reserve a Table for Dining
          </button>
        </div>
      </div>
    </div>
  );
};

// 2. DEDICATED /about PAGE
export const DedicatedAboutPage: React.FC<ViewProps> = ({ onBack, onOpenReservation }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#FAF8F3] pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E6C76A] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Main Experience
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#E6C76A] font-semibold block">
              OUR HERITAGE & VISION
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#FAF8F3] font-light mt-2">
              The Story of <span className="italic text-[#E6C76A]">Vedha</span>
            </h1>
          </div>
          <Logo size="lg" className="shrink-0 hover:scale-105 transition-transform" />
        </div>

        <div className="relative h-96 rounded-[8px] overflow-hidden border border-[#D4AF37]/25 mb-12">
          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=85"
            alt="Vedha restaurant dining area"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6 text-base text-[#AFA99E] font-light leading-relaxed">
          <p className="text-lg text-[#FAF8F3]">
            Vedha was established with an uncompromising vision: to liberate authentic Indian cuisine from clichés, presenting it with the gravitas, nuance, and visual beauty of fine dining.
          </p>
          <p>
            The name <em>Vedha</em> is inspired by knowledge, wisdom, and timeless Vedic culinary traditions—where food is considered an offering and spices are medicinal elixirs.
          </p>
          <p>
            In our kitchen in Canada, we honor ancient Awadhi dum techniques, traditional Punjabi clay tandoor cooking, and coastal Kerala coconut broths. We hand-pound our garam masala fresh daily, simmer our signature lentils for 24 continuous hours, and source high-quality Canadian poultry, pasture-raised lamb, and wild prawns.
          </p>
          <p>
            Every detail of the dining room—from the acoustic discretion and deep charcoal stone tables to the warm candlelight and gold cutlery—is designed to create a haven of calm sophistication.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-[#D4AF37]/20 flex gap-4">
          <button
            onClick={onOpenReservation}
            className="px-8 py-3.5 bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-[0.2em] rounded-[4px]"
          >
            Experience Vedha Tonight
          </button>
        </div>
      </div>
    </div>
  );
};

// 3. DEDICATED /contact PAGE
export const DedicatedContactPage: React.FC<ViewProps> = ({ onBack, onOpenReservation }) => {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAF8F3] pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E6C76A] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Main Experience
        </button>

        <span className="text-xs uppercase tracking-[0.25em] text-[#E6C76A] font-semibold block">
          INQUIRIES & RESERVATIONS
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#FAF8F3] font-light mt-2 mb-10">
          Contact <span className="italic text-[#E6C76A]">Vedha</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-6 text-sm text-[#AFA99E]">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#E6C76A] font-semibold mb-1">
                Location
              </h3>
              <p className="text-[#FAF8F3]">
                {RESTAURANT_INFO.address.street}, {RESTAURANT_INFO.address.suite}
              </p>
              <p>
                {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.province} {RESTAURANT_INFO.address.postalCode}, Canada
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#E6C76A] font-semibold mb-1">
                Direct Inquiries
              </h3>
              <p className="text-[#FAF8F3]">Phone: {RESTAURANT_INFO.phone}</p>
              <p className="text-[#FAF8F3]">General: {RESTAURANT_INFO.email}</p>
              <p className="text-[#FAF8F3]">Private Dining: {RESTAURANT_INFO.reservationsEmail}</p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#E6C76A] font-semibold mb-2">
                Service Hours
              </h3>
              <div className="space-y-1 text-xs">
                {RESTAURANT_INFO.hours.map((h) => (
                  <div key={h.days} className="flex justify-between border-b border-white/5 py-1">
                    <span className="text-[#FAF8F3]">{h.days}</span>
                    <span className="text-[#E6C76A]">{h.times}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenReservation}
              className="w-full py-3.5 rounded-[4px] bg-[#D4AF37] text-black text-xs uppercase tracking-[0.2em] font-semibold mt-4"
            >
              RESERVE A TABLE
            </button>
          </div>

          {/* Message Form */}
          <div className="p-6 rounded-[8px] bg-[#0E0E0E] border border-[#D4AF37]/20">
            {sent ? (
              <div className="text-center py-10 space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#E6C76A] mx-auto" />
                <h3 className="font-serif text-2xl text-[#FAF8F3]">Message Dispatched</h3>
                <p className="text-xs text-[#AFA99E]">
                  Our hospitality concierge will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 text-xs">
                <h3 className="font-serif text-xl text-[#FAF8F3] font-light">
                  Send an Inquiry or Private Event Request
                </h3>
                <div>
                  <label className="block text-[#AFA99E] uppercase tracking-wider mb-1">Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-3 py-2 bg-[#141414] border border-[#D4AF37]/25 rounded-[4px] text-[#FAF8F3] focus:outline-none focus:border-[#E6C76A]"
                  />
                </div>
                <div>
                  <label className="block text-[#AFA99E] uppercase tracking-wider mb-1">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full px-3 py-2 bg-[#141414] border border-[#D4AF37]/25 rounded-[4px] text-[#FAF8F3] focus:outline-none focus:border-[#E6C76A]"
                  />
                </div>
                <div>
                  <label className="block text-[#AFA99E] uppercase tracking-wider mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Private dining, catering, dietary consultations..."
                    className="w-full px-3 py-2 bg-[#141414] border border-[#D4AF37]/25 rounded-[4px] text-[#FAF8F3] focus:outline-none focus:border-[#E6C76A]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#141414] border border-[#D4AF37]/40 text-[#E6C76A] uppercase tracking-[0.2em] font-semibold hover:bg-[#D4AF37]/10"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
