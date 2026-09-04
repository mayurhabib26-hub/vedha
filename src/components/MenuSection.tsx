import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Flame, Info, Check } from 'lucide-react';
import { FULL_MENU } from '../data/restaurantData';
import { MenuCategory, MenuItem } from '../types';

interface MenuSectionProps {
  onViewFullMenu: () => void;
  onOpenDishDetail?: (dish: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onViewFullMenu,
  onOpenDishDetail
}) => {
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

  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Appetizers');
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const filteredItems = FULL_MENU.filter((item) => {
    const matchesCategory = item.category === activeCategory;
    const matchesTag = selectedTag === 'All' || item.tags.includes(selectedTag as any);
    return matchesCategory && matchesTag;
  });

  return (
    <section id="menu" className="relative bg-[#F5EFE3] text-[#0B0B0B] py-28 sm:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#9D6B32]" />
            <span className="text-xs tracking-[0.25em] uppercase font-semibold text-[#9D6B32]">
              CURATED GASTRONOMY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#0B0B0B]"
          >
            Explore Our <span className="italic font-normal text-[#9D6B32]">Menu</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-3 text-base sm:text-lg text-[#595248] font-light"
          >
            A tribute to regional Indian culinary heritage, prepared with slow fire, clay tandoors, and hand-selected aromatics.
          </motion.p>
        </div>

        {/* Category Tabs (Scrollable on mobile) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 no-scrollbar gap-2 sm:gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative whitespace-nowrap px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-[#0B0B0B] text-[#FAF8F3] shadow-[0_4px_15px_rgba(0,0,0,0.15)]'
                    : 'bg-[#EAE2D3] text-[#595248] hover:bg-[#DDD3C2] hover:text-[#0B0B0B]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Dietary Filter Chips */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {['All', 'Vegetarian', 'Vegan', 'Gluten-Friendly', 'Chef Special'].map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`text-[11px] tracking-wider uppercase px-3 py-1 rounded-[4px] border transition-colors ${
                selectedTag === tag
                  ? 'border-[#9D6B32] bg-[#9D6B32] text-white font-medium'
                  : 'border-[#9D6B32]/30 text-[#6B6154] hover:border-[#9D6B32]/70'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Menu Items Grid with Framer Motion AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((dish) => (
              <motion.div
                layout
                key={dish.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                onClick={() => onOpenDishDetail?.(dish)}
                className="group flex items-start gap-4 sm:gap-6 p-4 rounded-[6px] hover:bg-white/60 transition-all duration-300 border border-transparent hover:border-[#D4AF37]/30 cursor-pointer"
              >
                {/* Thumbnail Image */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-[4px] overflow-hidden shrink-0 bg-[#E0D7C6]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-108"
                  />
                  {dish.isSignature && (
                    <span className="absolute top-1 left-1 bg-[#050505] text-[#D4AF37] text-[9px] tracking-wider uppercase px-1.5 py-0.5 rounded-[2px] font-semibold">
                      Signature
                    </span>
                  )}
                </div>

                {/* Dish Information */}
                <div className="flex-grow">
                  <div className="flex items-baseline justify-between gap-4 border-b border-[#D8CEBE] pb-1.5 mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0B0B0B] group-hover:text-[#9D6B32] transition-colors">
                        {dish.name}
                      </h3>
                      {dish.spiceLevel && dish.spiceLevel > 0 ? (
                        <span className="inline-flex items-center text-amber-700 text-xs" title={`Spice Level: ${dish.spiceLevel}/3`}>
                          {'🌶️'.repeat(dish.spiceLevel)}
                        </span>
                      ) : null}
                    </div>
                    <span className="font-serif text-lg sm:text-xl font-semibold text-[#9D6B32] whitespace-nowrap">
                      CA${dish.price.toFixed(2)}
                    </span>
                  </div>

                  {dish.hindiName && (
                    <p className="text-[10px] tracking-[0.16em] uppercase text-[#887C6D] font-medium mb-1">
                      {dish.hindiName}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-[#4E473D] font-light leading-relaxed">
                    {dish.description}
                  </p>

                  {/* Dietary Tags */}
                  <div className="mt-2.5 flex items-center gap-1.5 flex-wrap">
                    {dish.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-wider uppercase font-medium bg-[#E5DCCF] text-[#554D41] px-2 py-0.5 rounded-[2px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 text-[#6B6154]">
            <p className="text-base font-serif italic">No dishes match the selected dietary filter in this category.</p>
            <button
              onClick={() => setSelectedTag('All')}
              className="mt-3 text-xs uppercase tracking-[0.2em] text-[#9D6B32] underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Action Button & Allergy Disclaimer */}
        <div className="mt-16 text-center space-y-6">
          <button
            onClick={onViewFullMenu}
            className="inline-flex items-center gap-3 px-9 py-3.5 rounded-[4px] bg-[#0B0B0B] text-[#FAF8F3] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#9D6B32] transition-colors duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] group"
          >
            <span>View Full Menu Experience</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <div className="max-w-2xl mx-auto flex items-center justify-center gap-2 text-xs text-[#736858]">
            <Info className="w-4 h-4 shrink-0 text-[#9D6B32]" />
            <p className="font-light italic">
              Please inform our team of any allergies or dietary restrictions. Menu items and pricing may change without notice. All prices in Canadian Dollars (CA$).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
