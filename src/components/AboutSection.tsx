import React from 'react';
import { motion } from 'motion/react';
import { Award, UtensilsCrossed, Leaf, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: '100%',
      label: 'Authentic Recipes',
      subtext: 'Passed through generations of royal master chefs'
    },
    {
      icon: Leaf,
      value: 'Fresh',
      label: 'Local Ingredients',
      subtext: 'Sourced responsibly across Canadian growers'
    },
    {
      icon: UtensilsCrossed,
      value: '30+',
      label: 'Premium Spices',
      subtext: 'Directly imported whole and stone-ground in-house'
    },
    {
      icon: HeartHandshake,
      value: 'Atithi Devo',
      label: 'Warm Hospitality',
      subtext: 'Treating each dining guest as a revered royal patron'
    }
  ];

  return (
    <section id="about" className="relative bg-[#050505] text-[#FAF8F3] py-28 sm:py-36 overflow-hidden border-t border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Dark Luxury Restaurant Interior Visual */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[8px] overflow-hidden border border-[#D4AF37]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85"
                alt="Vedha dining room interior with warm ambient gold lighting and private booth seating"
                className="w-full h-[480px] sm:h-[580px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30" />

              {/* Floating Testimonial/Heritage Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0B0B0B]/90 backdrop-blur-md rounded-[6px] border border-[#D4AF37]/25">
                <p className="font-serif italic text-sm sm:text-base text-[#FAF8F3]/90">
                  “Indian cuisine is not merely spice; it is an architectural symphony of aromatics, slow-roasting, and mindful hospitality.”
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#E6C76A] font-semibold">
                    Master Culinary Team • Vedha
                  </span>
                  <span className="text-[10px] text-[#AFA99E]">Canada</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Story & Animated Statistics */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 mb-3"
              >
                <span className="w-8 h-[1px] bg-[#D4AF37]" />
                <span className="text-xs tracking-[0.25em] uppercase font-semibold text-[#E6C76A]">
                  OUR STORY
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#FAF8F3] leading-[1.12]"
              >
                A Journey Through <br />
                <span className="italic text-[#E6C76A]">India's Culinary Heritage.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-6 text-base sm:text-lg text-[#FAF8F3]/90 font-light leading-relaxed"
              >
                Vedha was born from a singular passion: bringing the true depth, regal nuance, and artisanal splendour of authentic Indian cuisine to Canada.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mt-4 text-sm sm:text-base text-[#AFA99E] font-light leading-relaxed"
              >
                By combining century-old royal recipes with carefully selected heritage spices and contemporary presentation, we offer our guests a dining sanctuary where every dish tells a story of India’s grand culinary tapestry.
              </motion.p>
            </div>

            {/* 4 Animated Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * idx }}
                    className="p-4 sm:p-5 rounded-[6px] bg-[#0E0E0E] border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#E6C76A] mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="font-serif text-2xl sm:text-3xl font-normal text-[#FAF8F3]">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-[#E6C76A] tracking-wider uppercase mt-1">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-[#AFA99E] mt-1 font-light leading-snug">
                      {stat.subtext}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
