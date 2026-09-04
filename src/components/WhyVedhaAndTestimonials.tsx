import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Utensils, Heart, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';

export const WhyVedhaAndTestimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const benefits = [
    {
      icon: Sparkles,
      title: 'Authentic Indian Flavours',
      desc: 'Heritage spice blends toasted in ghee, slow cooked to unlock complex regional aromatics.'
    },
    {
      icon: ShieldCheck,
      title: 'Premium Ingredients',
      desc: 'Halal certified, antibiotic-free meats paired with fresh Quebec organic dairy and herbs.'
    },
    {
      icon: Utensils,
      title: 'Traditional Techniques',
      desc: 'Hand-crimped pastries, charcoal dum steam pots, and high-heat clay tandoor roasts.'
    },
    {
      icon: Heart,
      title: 'Warm Canadian Hospitality',
      desc: 'Attentive, discreet bilingual service ensuring a relaxed and regal dining experience.'
    }
  ];

  return (
    <>
      {/* 10. Why Choose Vedha (Cream Background) */}
      <section className="bg-[#F5EFE3] text-[#0B0B0B] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.25em] uppercase font-semibold text-[#9D6B32] block mb-2">
              THE ESSENCE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#0B0B0B]">
              The Vedha <span className="italic text-[#9D6B32]">Experience</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group p-6 rounded-[6px] bg-[#FAF8F3] border border-[#D8CEBE] hover:border-[#9D6B32]/60 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full border border-[#9D6B32]/40 flex items-center justify-center text-[#9D6B32] mb-5 group-hover:rotate-6 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#0B0B0B] mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-[#595248] font-light leading-relaxed">
                    {b.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. Testimonials (Dark Background) */}
      <section className="bg-[#080808] text-[#FAF8F3] py-28 sm:py-36 border-t border-b border-[#D4AF37]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs tracking-[0.25em] uppercase font-semibold text-[#E6C76A] block mb-2">
            OUR GUESTS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#FAF8F3] mb-12">
            What They're <span className="italic text-[#E6C76A]">Saying</span>
          </h2>

          <div className="relative min-h-[220px] flex flex-col items-center justify-center">
            {/* Stars */}
            <div className="flex gap-1.5 text-[#E6C76A] mb-6">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="w-4 h-4 fill-current" />
              ))}
            </div>

            {/* Quote */}
            <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light italic text-[#FAF8F3] leading-relaxed max-w-3xl">
              “{TESTIMONIALS[currentTestimonial].quote}”
            </p>

            {/* Author */}
            <div className="mt-8">
              <span className="text-base font-serif font-medium text-[#E6C76A] block">
                — {TESTIMONIALS[currentTestimonial].author}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#AFA99E]">
                {TESTIMONIALS[currentTestimonial].role} • {TESTIMONIALS[currentTestimonial].location}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
              className="p-2.5 rounded-full border border-[#D4AF37]/30 text-[#FAF8F3] hover:text-[#E6C76A] hover:border-[#E6C76A] transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`h-1.5 transition-all rounded-full ${
                    currentTestimonial === i ? 'w-6 bg-[#E6C76A]' : 'w-2 bg-[#D4AF37]/30'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)}
              className="p-2.5 rounded-full border border-[#D4AF37]/30 text-[#FAF8F3] hover:text-[#E6C76A] hover:border-[#E6C76A] transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
