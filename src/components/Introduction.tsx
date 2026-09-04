import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface IntroductionProps {
  onDiscoverStory: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onDiscoverStory }) => {
  return (
    <section id="introduction" className="relative bg-[#F5EFE3] text-[#0B0B0B] py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Premium Indian Food Photograph with Clip-path Reveal */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0 }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)', opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[8px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group"
            >
              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=85"
                alt="Chef preparing authentic slow-cooked Indian curry with fragrant spices at Vedha"
                className="w-full h-[460px] sm:h-[560px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Minimal Indian-inspired decorative corner accent */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none" />

              {/* Subtle badge floating */}
              <div className="absolute bottom-6 left-6 bg-[#0B0B0B]/90 backdrop-blur-sm px-4 py-3 rounded-[4px] border border-[#D4AF37]/30 text-white">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#E6C76A] font-semibold">
                  Hand-Ground Spices
                </p>
                <p className="font-serif text-sm italic text-[#FAF8F3]">
                  Authentic North Indian Recipes
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Text Composition */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:pl-4">
            {/* Small Label with Decorative Gold Line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="w-8 h-[1.5px] bg-[#9D6B32]" />
              <span className="text-xs sm:text-[13px] tracking-[0.25em] uppercase font-semibold text-[#9D6B32]">
                WELCOME TO VEDHA
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#0B0B0B] leading-[1.12]"
            >
              Indian Heritage. <br />
              <span className="italic font-normal text-[#9D6B32]">Modern Expression.</span>
            </motion.h2>

            {/* Minimal Indian-inspired motif / gold separator */}
            <div className="flex items-center gap-2 py-1">
              <span className="w-12 h-[1px] bg-[#C89B35]" />
              <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
              <span className="w-24 h-[1px] bg-[#C89B35]" />
            </div>

            {/* Editorial Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#38332C] text-base sm:text-lg leading-relaxed font-light"
            >
              At Vedha, Indian cuisine is celebrated through timeless recipes, fragrant spices and thoughtful presentation. Every dish honours its roots while embracing a refined contemporary dining experience.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-[#595248] text-sm sm:text-base leading-relaxed font-light"
            >
              Rooted in Montreal's prestigious Golden Square Mile, our kitchen marries royal Awadhi techniques, coastal spice infusions, and clay tandoor roasts with fresh local Canadian produce.
            </motion.p>

            {/* Interactive Link: Discover Our Story → with animated underline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-4"
            >
              <button
                onClick={onDiscoverStory}
                className="group relative inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase font-semibold text-[#0B0B0B] transition-colors hover:text-[#9D6B32] pb-1"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-[#9D6B32]" />
                
                {/* Expanding animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#9D6B32] transition-all duration-300 group-hover:w-full" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
