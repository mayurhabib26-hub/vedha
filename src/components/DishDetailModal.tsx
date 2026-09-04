import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Utensils, Wine } from 'lucide-react';
import { MenuItem } from '../types';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onReserve: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose, onReserve }) => {
  if (!dish) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-2xl w-full bg-[#0E0E0E] border border-[#D4AF37]/35 rounded-[8px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-[#FAF8F3] hover:text-[#E6C76A] border border-white/10"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative h-64 sm:h-72 w-full bg-[#141414]">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-black/30" />
            <div className="absolute bottom-4 left-6">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#E6C76A] bg-[#050505]/90 px-2.5 py-1 rounded-[3px] border border-[#D4AF37]/30">
                {dish.category}
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between gap-4 border-b border-[#D4AF37]/15 pb-4">
              <div>
                {dish.hindiName && (
                  <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium mb-1">
                    {dish.hindiName}
                  </p>
                )}
                <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF8F3] font-light">
                  {dish.name}
                </h3>
              </div>
              <div className="text-right shrink-0">
                <span className="font-serif text-2xl sm:text-3xl text-[#E6C76A] font-medium">
                  CA${dish.price.toFixed(2)}
                </span>
                <p className="text-[10px] text-[#AFA99E] uppercase tracking-wider">CAD + Tax</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#FAF8F3]/90 font-light leading-relaxed">
              {dish.description}
            </p>

            {dish.pairing && (
              <div className="p-4 rounded-[4px] bg-[#141414] border border-[#D4AF37]/20 flex items-center gap-3 text-xs text-[#E6C76A]">
                <Wine className="w-4 h-4 shrink-0" />
                <span>
                  <strong>Sommelier Pairing:</strong> {dish.pairing}
                </span>
              </div>
            )}

            <div className="flex items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap gap-1.5">
                {dish.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-wider uppercase font-medium bg-[#1a1a1a] text-[#FAF8F3]/80 px-2.5 py-1 rounded-[3px] border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  onClose();
                  onReserve();
                }}
                className="px-6 py-2.5 rounded-[4px] bg-gradient-to-r from-[#C89B35] to-[#E6C76A] text-[#050505] text-xs uppercase tracking-[0.2em] font-semibold hover:shadow-lg transition-all shrink-0"
              >
                Reserve a Table
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
