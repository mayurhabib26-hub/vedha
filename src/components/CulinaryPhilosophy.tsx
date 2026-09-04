import React from 'react';
import { motion } from 'motion/react';
import { Flame, Sparkles, Heart } from 'lucide-react';

export const CulinaryPhilosophy: React.FC = () => {
  const pillars = [
    {
      icon: Flame,
      title: 'Authentic Recipes',
      desc: 'Recipes inspired by generations of Indian culinary tradition, preserved with sacred fidelity.'
    },
    {
      icon: Sparkles,
      title: 'Premium Ingredients',
      desc: 'Fresh Canadian produce paired with single-estate spices flown directly from source regions.'
    },
    {
      icon: Heart,
      title: 'Crafted With Passion',
      desc: 'Each dish prepared with painstaking attention, slow-fire reduction, and contemporary finesse.'
    }
  ];

  return (
    <section className="relative bg-[#070707] text-[#FAF8F3] py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=2000&q=80"
          alt="Artisanal Indian spices"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#070707]/90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-3 text-xs tracking-[0.25em] uppercase font-semibold text-[#E6C76A]"
        >
          OUR PHILOSOPHY
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#FAF8F3] max-w-3xl mx-auto leading-tight"
        >
          Tradition in Every Spice. <br />
          <span className="italic text-[#E6C76A]">Artistry in Every Plate.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-8 rounded-[8px] bg-[#0E0E0E]/80 border border-[#D4AF37]/20 backdrop-blur-sm hover:border-[#D4AF37]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#E6C76A] mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-light text-[#FAF8F3] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#AFA99E] font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
