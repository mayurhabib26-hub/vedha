import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';

export const ExperienceAndGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Curries', 'Tandoor', 'Biryani', 'Desserts', 'Restaurant'];

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="bg-[#050505] text-[#FAF8F3] py-28 sm:py-36 overflow-hidden">
      {/* 8. Dining Experience Parallax / Collage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.25em] uppercase font-semibold text-[#E6C76A] block mb-2">
            ATMOSPHERE & ESSENCE
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#FAF8F3]">
            More Than a <span className="italic text-[#E6C76A]">Meal</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#AFA99E] font-light">
            A dining experience designed around flavour, atmosphere and hospitality.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[6px] overflow-hidden border border-[#D4AF37]/20 h-64 sm:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
              alt="Restaurant interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-[6px] overflow-hidden border border-[#D4AF37]/20 h-80 sm:h-96 md:-mt-8"
          >
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
              alt="Tandoor plating"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-[6px] overflow-hidden border border-[#D4AF37]/20 h-72 sm:h-88"
          >
            <img
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
              alt="Golden bar cocktails"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-[6px] overflow-hidden border border-[#D4AF37]/20 h-64 sm:h-76 md:mt-6"
          >
            <img
              src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
              alt="Plated biryani"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>

      {/* 9. Food Gallery with Lightbox */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-[#D4AF37]/15">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs tracking-[0.25em] uppercase font-semibold text-[#E6C76A] block mb-2">
              VISUAL REPERTOIRE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#FAF8F3]">
              A Feast for <span className="italic text-[#E6C76A]">the Senses</span>
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#E6C76A] text-[#050505] font-semibold'
                    : 'bg-[#141414] text-[#AFA99E] hover:text-white border border-[#D4AF37]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setSelectedPhoto(item)}
              className="group relative cursor-pointer h-72 rounded-[6px] overflow-hidden border border-[#D4AF37]/15 bg-[#0E0E0E]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#E6C76A]">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg text-white font-light mt-1">
                  {item.title}
                </h4>
                <div className="w-8 h-[1px] bg-[#D4AF37] my-2" />
                <p className="text-[11px] text-[#AFA99E] line-clamp-2">
                  {item.caption}
                </p>
                <div className="absolute top-4 right-4 text-[#FAF8F3]">
                  <Maximize2 className="w-4 h-4 text-[#E6C76A]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#0B0B0B] border border-[#D4AF37]/30 rounded-[8px] overflow-hidden"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-[#FAF8F3] hover:text-[#E6C76A]"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full max-h-[70vh] object-cover"
              />
              <div className="p-6 bg-[#0E0E0E]">
                <span className="text-xs uppercase tracking-[0.2em] text-[#E6C76A] font-semibold">
                  {selectedPhoto.category}
                </span>
                <h3 className="font-serif text-2xl text-[#FAF8F3] font-light mt-1">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-[#AFA99E] mt-2">
                  {selectedPhoto.caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
