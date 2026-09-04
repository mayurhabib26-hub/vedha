import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, CheckCircle2, Phone, Mail, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '2026-09-08',
    time: '19:00',
    guests: '2',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-lg w-full bg-[#0E0E0E] border border-[#D4AF37]/30 rounded-[8px] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] text-[#FAF8F3]"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-[#AFA99E] hover:text-[#FAF8F3]"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#E6C76A] mx-auto" />
              <h3 className="font-serif text-3xl font-light text-[#FAF8F3]">
                Reservation Confirmed
              </h3>
              <p className="text-sm text-[#AFA99E]">
                Thank you, {formData.name}. We look forward to hosting you on {formData.date} at {formData.time} for {formData.guests} guests.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 rounded-[4px] bg-[#D4AF37] text-black text-xs font-semibold uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center pb-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#E6C76A] font-semibold">
                  FINE DINING RESERVATIONS
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#FAF8F3] mt-1">
                  Reserve at Vedha
                </h3>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#AFA99E] mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-3 py-2 rounded-[4px] bg-[#141414] border border-[#D4AF37]/25 text-sm text-[#FAF8F3] focus:outline-none focus:border-[#E6C76A]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#AFA99E] mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@domain.ca"
                    className="w-full px-3 py-2 rounded-[4px] bg-[#141414] border border-[#D4AF37]/25 text-sm text-[#FAF8F3] focus:outline-none focus:border-[#E6C76A]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#AFA99E] mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (514)..."
                    className="w-full px-3 py-2 rounded-[4px] bg-[#141414] border border-[#D4AF37]/25 text-sm text-[#FAF8F3] focus:outline-none focus:border-[#E6C76A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#AFA99E] mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-2 py-2 rounded-[4px] bg-[#141414] border border-[#D4AF37]/25 text-xs text-[#FAF8F3] focus:outline-none focus:border-[#E6C76A]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#AFA99E] mb-1">
                    Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-2 py-2 rounded-[4px] bg-[#141414] border border-[#D4AF37]/25 text-xs text-[#FAF8F3] focus:outline-none focus:border-[#E6C76A]"
                  >
                    <option value="12:00">12:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#AFA99E] mb-1">
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-2 py-2 rounded-[4px] bg-[#141414] border border-[#D4AF37]/25 text-xs text-[#FAF8F3] focus:outline-none focus:border-[#E6C76A]"
                  >
                    {[1, 2, 3, 4, 5, 6, 8].map((g) => (
                      <option key={g} value={g}>
                        {g} {g === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#AFA99E] mb-1">
                  Notes
                </label>
                <input
                  type="text"
                  placeholder="Dietary requirements or special occasion"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-[4px] bg-[#141414] border border-[#D4AF37]/25 text-sm text-[#FAF8F3] focus:outline-none focus:border-[#E6C76A]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-[4px] bg-gradient-to-r from-[#C89B35] via-[#D4AF37] to-[#E6C76A] text-[#050505] text-xs font-semibold uppercase tracking-[0.2em] mt-2 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all"
              >
                CONFIRM TABLE REQUEST
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
