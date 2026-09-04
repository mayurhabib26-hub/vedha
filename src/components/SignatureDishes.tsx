import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Flame } from 'lucide-react';
import { SIGNATURE_DISHES } from '../data/restaurantData';
import { MenuItem } from '../types';

interface SignatureDishesProps {
  onSelectDish: (dish: MenuItem) => void;
  onViewAllMenu: () => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({
  onSelectDish,
  onViewAllMenu
}) => {
  const [mousePosition, setMousePosition] = useState<{ [key: string]: { x: number; y: number } }>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition((prev) => ({
      ...prev,
      [id]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }));
  };

  return (
    <section id="signature-dishes" className="relative bg-[#080808] text-[#FAF8F3] py-28 sm:py-36 overflow-hidden">
      {/* Background ambient radial gold glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C89B35]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-[#D4AF37]/15 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-3"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E6C76A]" />
              <span className="text-xs tracking-[0.25em] uppercase font-semibold text-[#E6C76A]">
                CULINARY MASTERPIECES
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#FAF8F3]"
            >
              Our Signature <span className="italic text-[#E6C76A]">Creations</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-3 text-sm sm:text-base text-[#AFA99E] max-w-xl font-light"
            >
              A curated selection of dishes that define the Vedha experience, balancing ancient techniques with refined modern craft.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={onViewAllMenu}
              className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium text-[#FAF8F3] hover:text-[#E6C76A] transition-colors py-2 border-b border-transparent hover:border-[#E6C76A]"
            >
              <span>Explore Complete Menu</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#D4AF37]" />
            </button>
          </motion.div>
        </div>

        {/* 4 Signature Dish Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SIGNATURE_DISHES.map((dish, index) => {
            const pos = mousePosition[dish.id] || { x: 0, y: 0 };
            return (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                onMouseMove={(e) => handleMouseMove(e, dish.id)}
                onClick={() => onSelectDish(dish)}
                className="group relative cursor-pointer flex flex-col rounded-[8px] bg-[#0E0E0E] border border-[#D4AF37]/15 overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/45 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
              >
                {/* React Bits Spotlight effect */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(212, 175, 55, 0.12), transparent 70%)`
                  }}
                />

                {/* Large Dish Image with Hover Zoom 1.05 */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#141414]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle dark gradient over image bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-black/20" />

                  {/* Price Tag in Canadian Dollars CA$ */}
                  <div className="absolute top-4 right-4 bg-[#050505]/85 backdrop-blur-md px-3.5 py-1.5 rounded-[4px] border border-[#D4AF37]/30 text-right">
                    <span className="font-serif text-base font-semibold text-[#E6C76A]">
                      CA${dish.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Dietary / Signature Badges */}
                  <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
                    {dish.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-[0.1em] uppercase font-medium bg-[#050505]/80 text-[#FAF8F3]/90 px-2 py-0.5 rounded-[2px] border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    {/* Hindi / Royal Reference Name */}
                    {dish.hindiName && (
                      <p className="text-[11px] tracking-[0.18em] uppercase text-[#D4AF37]/80 font-medium mb-1">
                        {dish.hindiName}
                      </p>
                    )}

                    {/* Dish Title with upward motion & expanding gold underline */}
                    <div className="relative inline-block pb-1">
                      <h3 className="font-serif text-2xl font-light text-[#FAF8F3] group-hover:text-[#E6C76A] transition-all duration-300 group-hover:-translate-y-0.5">
                        {dish.name}
                      </h3>
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#AFA99E] line-clamp-3 font-light leading-relaxed mt-2.5">
                      {dish.description}
                    </p>
                  </div>

                  {/* Pairing / Subtle Footer */}
                  {dish.pairing && (
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#AFA99E]/80">
                      <span className="italic truncate">Pair: {dish.pairing}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
