import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, ArrowRight, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationAndLocationProps {
  onOpenReservationModal: () => void;
}

export const ReservationAndLocation: React.FC<ReservationAndLocationProps> = ({
  onOpenReservationModal
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '2026-09-08',
    time: '19:00',
    guests: '2',
    specialRequests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  return (
    <section id="reservation" className="relative bg-[#050505] text-[#FAF8F3]">
      {/* 12. Reservation Banner / CTA */}
      <div className="relative py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
            alt="Reserved luxury dining table at Vedha"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-[#050505]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs tracking-[0.25em] uppercase font-semibold text-[#E6C76A] block mb-3">
            YOUR TABLE AWAITS
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#FAF8F3] leading-tight mb-4">
            Reserve Your <span className="italic text-[#E6C76A]">Vedha Experience.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#AFA99E] max-w-xl mx-auto mb-10 font-light">
            Join us for an unforgettable journey through the flavours of India. We recommend reserving at least 48 hours in advance for evening seatings.
          </p>

          {/* 13. Embedded Reservation Form */}
          <div className="max-w-2xl mx-auto p-6 sm:p-10 rounded-[8px] bg-[#0B0B0B]/95 border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md text-left">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-4"
              >
                <CheckCircle2 className="w-12 h-12 text-[#E6C76A] mx-auto" />
                <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F3]">
                  Thank you, {formData.name}.
                </h3>
                <p className="text-sm text-[#AFA99E]">
                  Your reservation request has been received. Our concierge will send an SMS and email confirmation to {formData.email}.
                </p>
                <div className="p-4 rounded-[4px] bg-[#141414] border border-[#D4AF37]/20 text-xs text-[#FAF8F3]/80 inline-block text-left mt-2">
                  <p><strong>Party:</strong> {formData.guests} Guests</p>
                  <p><strong>Date & Time:</strong> {formData.date} at {formData.time}</p>
                  <p><strong>Reference:</strong> VDH-{Math.floor(100000 + Math.random() * 900000)}</p>
                </div>
                <div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-xs tracking-wider uppercase text-[#E6C76A] underline"
                  >
                    Modify Request
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] text-[#AFA99E] mb-1.5 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] bg-[#141414] border border-[#D4AF37]/25 text-[#FAF8F3] text-sm focus:outline-none focus:border-[#E6C76A] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] text-[#AFA99E] mb-1.5 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@example.ca"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] bg-[#141414] border border-[#D4AF37]/25 text-[#FAF8F3] text-sm focus:outline-none focus:border-[#E6C76A] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] text-[#AFA99E] mb-1.5 font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (514) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] bg-[#141414] border border-[#D4AF37]/25 text-[#FAF8F3] text-sm focus:outline-none focus:border-[#E6C76A] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] text-[#AFA99E] mb-1.5 font-medium">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] bg-[#141414] border border-[#D4AF37]/25 text-[#FAF8F3] text-sm focus:outline-none focus:border-[#E6C76A] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] text-[#AFA99E] mb-1.5 font-medium">
                      Time & Guests *
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-1/2 px-2 py-2.5 rounded-[4px] bg-[#141414] border border-[#D4AF37]/25 text-[#FAF8F3] text-sm focus:outline-none focus:border-[#E6C76A]"
                      >
                        <option value="12:00">12:00 PM</option>
                        <option value="13:30">1:30 PM</option>
                        <option value="17:30">5:30 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="21:00">9:00 PM</option>
                      </select>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-1/2 px-2 py-2.5 rounded-[4px] bg-[#141414] border border-[#D4AF37]/25 text-[#FAF8F3] text-sm focus:outline-none focus:border-[#E6C76A]"
                      >
                        {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] text-[#AFA99E] mb-1.5 font-medium">
                    Special Requests or Dietary Restrictions
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Anniversary celebration, quiet booth, nut allergy"
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-[4px] bg-[#141414] border border-[#D4AF37]/25 text-[#FAF8F3] text-sm focus:outline-none focus:border-[#E6C76A] transition-colors"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs text-rose-400 font-medium">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-[4px] bg-gradient-to-r from-[#C89B35] via-[#D4AF37] to-[#E6C76A] text-[#050505] text-xs uppercase tracking-[0.25em] font-semibold hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all active:scale-[0.99]"
                >
                  REQUEST RESERVATION
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* 14. Location & Opening Hours */}
      <div id="contact" className="py-24 sm:py-32 border-t border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Interactive Styled Map View Placeholder */}
            <div className="lg:col-span-6 relative rounded-[8px] overflow-hidden border border-[#D4AF37]/25 h-[400px] sm:h-[480px] bg-[#0E0E0E]">
              {/* Custom Dark Gold Map Visual */}
              <iframe
                title="Vedha Restaurant Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.385559388301!2d-73.5796245!3d45.4972627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a420b92d6e3%3A0xb36b5ecfe0a80e1c!2sRue%20Sainte-Catherine%20O%2C%20Montr%C3%A9al%2C%20QC!5e0!3m2!1sen!2sca!4v1709560000000!5m2!1sen!2sca"
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-70 hover:opacity-90 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 bg-[#0B0B0B]/90 backdrop-blur-sm px-4 py-2.5 rounded-[4px] border border-[#D4AF37]/30">
                <span className="text-xs uppercase tracking-wider text-[#E6C76A] font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Vedha • Golden Square Mile
                </span>
                <p className="text-[11px] text-[#AFA99E]">Valet Parking Available</p>
              </div>
            </div>

            {/* Right: Visit Vedha Details */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs tracking-[0.25em] uppercase font-semibold text-[#E6C76A] block mb-2">
                  FIND US
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#FAF8F3]">
                  Visit <span className="italic text-[#E6C76A]">Vedha</span>
                </h2>
              </div>

              <div className="space-y-6 text-sm text-[#AFA99E]">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#E6C76A] font-semibold mb-1">
                    Restaurant Address
                  </h4>
                  <p className="text-[#FAF8F3] font-light">
                    {RESTAURANT_INFO.address.street}, {RESTAURANT_INFO.address.suite}
                  </p>
                  <p className="text-[#AFA99E]">
                    {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.province}, {RESTAURANT_INFO.address.postalCode}, Canada
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#E6C76A] font-semibold mb-1">
                      Phone
                    </h4>
                    <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-[#FAF8F3] hover:text-[#E6C76A] transition-colors font-light">
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#E6C76A] font-semibold mb-1">
                      Email
                    </h4>
                    <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-[#FAF8F3] hover:text-[#E6C76A] transition-colors font-light">
                      {RESTAURANT_INFO.email}
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#E6C76A] font-semibold mb-2">
                    Opening Hours
                  </h4>
                  <div className="space-y-1.5 border-l-2 border-[#D4AF37]/30 pl-3">
                    {RESTAURANT_INFO.hours.map((h) => (
                      <div key={h.days} className="flex justify-between max-w-sm text-xs">
                        <span className="text-[#FAF8F3] font-medium">{h.days}</span>
                        <span className="text-[#E6C76A]">{h.times}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://maps.google.com/?q=1428+Rue+Sainte-Catherine+Ouest+Montreal+QC"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-[4px] border border-[#E6C76A] text-xs uppercase tracking-[0.2em] font-semibold text-[#FAF8F3] hover:bg-[#D4AF37]/10 transition-colors"
                >
                  GET DIRECTIONS
                </a>
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="px-6 py-3 rounded-[4px] bg-[#141414] border border-[#D4AF37]/20 text-xs uppercase tracking-[0.2em] font-semibold text-[#E6C76A] hover:border-[#E6C76A] transition-colors"
                >
                  CALL RESTAURANT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
