'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, ChevronDown, ChevronUp } from 'lucide-react';

const CONTACT_ITEMS = [
  { icon: Phone,  label: 'Text or Call',    value: '+1 234 567 890',       color: '#FA3C30', bg: '#FFEBEE' },
  { icon: Mail,   label: 'Email Support',    value: 'hello@eatbest.com',    color: '#3EE0D2', bg: '#E0F7FA' },
  { icon: MapPin, label: 'Visit Kitchen', value: '123 Food St, Gourmet', color: '#C1D544', bg: '#F9FBE7' },
];

const FAQS_DATA = [
  { q: "How fast is delivery?", a: "We aim for 30 mins or it's on us! Fast and fresh delivery directly to your doorstep in Gourmet City." },
  { q: "Where do you ship?", a: "Everywhere in the Gourmet City region, 24/7. We have multiple cloud kitchens to ensure wide coverage." },
  { q: "Can I customize my order?", a: "Absolutely! Every dish has a 'Special Instructions' box where you can ask for extra spice, no onions, etc." },
  { q: "Do you offer vegan options?", a: "Yes, we have a specific 'Green Menu' dedicated to 100% plant-based and high-protein vegan meals." },
  { q: "Is there a loyalty program?", a: "Yes! Sign up for an account to earn 'Bestie Points' on every order, which you can redeem for free meals." }
];

export default function Contact() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 relative bg-[#FFFDF2] overflow-hidden noise">
      
      {/* ── Background Flourish ── */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#C1D544] border-8 border-[#18181A] rounded-full -translate-y-1/2 translate-x-1/2 opacity-20" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#FA3C30] border-8 border-[#18181A] rounded-2xl rotate-12 opacity-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="inline-flex items-center gap-3 px-8 py-3 bg-[#C1D544] border-4 border-[#18181A] rounded-full shadow-[6px_6px_0_#18181A] mb-10 transform rotate-1"
          >
            <Globe size={24} className="text-[#18181A]" />
            <span className="font-heading text-[#18181A] text-lg font-black uppercase tracking-widest">Global Support</span>
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-heading font-black text-[#18181A] leading-none">
            SAY <span className="text-[#FA3C30] drop-shadow-[5px_5px_0_#18181A]">HELLO!</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-32">

          {/* Left info column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 xl:col-span-5 space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {CONTACT_ITEMS.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-6 p-8 rounded-[2rem] bg-white border-4 border-[#18181A] shadow-[8px_8px_0_#18181A]"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center border-4 border-[#18181A] shadow-[4px_4px_0_#18181A]" style={{ backgroundColor: item.color }}>
                    <item.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-[#18181A]/40 text-sm uppercase tracking-[0.2em] mb-1">
                      {item.label}
                    </h4>
                    <p className="text-2xl font-black text-[#18181A] break-words">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Office Hours Filler */}
            <div className="p-10 bg-[#FFECB3] border-4 border-[#18181A] rounded-[2.5rem] shadow-[8px_8px_0_#18181A] relative overflow-hidden">
              <Clock size={100} className="absolute -bottom-5 -right-5 text-[#18181A]/10 rotate-12" />
              <h4 className="text-3xl font-heading font-black text-[#18181A] mb-6 flex items-center gap-3">
                <Clock className="text-[#FA3C30]" size={28} /> WE&apos;RE OPEN!
              </h4>
              <ul className="space-y-4 font-heading font-black text-xl italic text-[#18181A]/70 uppercase">
                <li className="flex justify-between border-b-4 border-[#18181A]/5 pb-2">
                  <span>Mon - Fri</span>
                  <span className="text-[#FA3C30]">08:00 - 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sat - Sun</span>
                  <span className="text-[#C1D544]">10:00 - 16:00</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right form column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 xl:col-span-7"
          >
            <div className="relative">
              {/* ── NEW: Automatic Color Changing Decorative Layer ── */}
              <motion.div 
                className="absolute inset-0 border-4 border-[#18181A] rounded-[3rem] rotate-1 translate-x-4 translate-y-4"
                animate={{ 
                  backgroundColor: ['#C1D544', '#FA3C30', '#3EE0D2', '#C1D544'],
                  rotate: [1, -1, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative bg-white border-8 border-[#18181A] rounded-[3rem] p-10 md:p-14">
                <h3 className="text-4xl font-heading font-black text-[#18181A] mb-10 flex items-center gap-4">
                  <MessageSquare size={32} className="text-[#FA3C30]" /> DROP A LINE
                </h3>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="font-heading font-black text-[#18181A]/40 uppercase text-xs tracking-widest pl-2">Name</label>
                    <input type="text" placeholder="YOUR NAME..." className="w-full h-16 rounded-2xl px-6 bg-[#F9F9F9] border-4 border-[#18181A] font-heading font-bold shadow-[4px_4px_0_#18181A] outline-none focus:bg-[#F9FBE7] focus:translate-y-[-2px] transition-all" />
                  </div>
                  <div className="space-y-3">
                    <label className="font-heading font-black text-[#18181A]/40 uppercase text-xs tracking-widest pl-2">Email</label>
                    <input type="email" placeholder="YOUR EMAIL..." className="w-full h-16 rounded-2xl px-6 bg-[#F9F9F9] border-4 border-[#18181A] font-heading font-bold shadow-[4px_4px_0_#18181A] outline-none focus:bg-[#E0F7FA] focus:translate-y-[-2px] transition-all" />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="font-heading font-black text-[#18181A]/40 uppercase text-xs tracking-widest pl-2">How can we help?</label>
                    <textarea rows={4} placeholder="TELL US EVERYTHING..." className="w-full rounded-2xl p-6 bg-[#F9F9F9] border-4 border-[#18181A] font-heading font-bold shadow-[4px_4px_0_#18181A] outline-none focus:bg-[#FFEBEE] focus:translate-y-[-2px] transition-all resize-none" />
                  </div>
                  <div className="md:col-span-2">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn btn-primary w-full py-6 text-2xl border-4 border-[#18181A] shadow-[8px_8px_0_#18181A]"
                    >
                      SEND MESSAGE <Send className="ml-2 inline" size={24} strokeWidth={3} />
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── NEW: FAQ Accordion Section ── */}
        <div className="mt-40 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label">Questions?</span>
            <h3 className="text-5xl font-heading font-black text-[#18181A] mb-12">FREQUENTLY ASKED</h3>
            
            <div className="space-y-4">
              {FAQS_DATA.map((faq, i) => (
                <div 
                  key={i} 
                  className={`border-4 border-[#18181A] rounded-[2rem] overflow-hidden transition-all duration-300 ${expandedIndex === i ? 'bg-white shadow-[8px_8px_0_#18181A]' : 'bg-[#FFFDF2]'}`}
                >
                  <button 
                    onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                    className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                  >
                    <h4 className="text-xl md:text-2xl font-heading font-black text-[#18181A] leading-tight pr-4">
                      {faq.q}
                    </h4>
                    <div className={`shrink-0 w-10 h-10 rounded-full border-2 border-[#18181A] flex items-center justify-center transition-transform ${expandedIndex === i ? 'bg-[#FA3C30] text-white rotate-180' : 'bg-white text-[#18181A]'}`}>
                      {expandedIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {expandedIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 md:p-8 pt-0 font-heading font-bold text-lg text-[#18181A]/60 italic leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="sticky top-32 flex flex-col items-center">
            <div className="relative w-full max-w-sm aspect-square bg-[#3EE0D2] border-8 border-[#18181A] rounded-full shadow-[20px_20px_0_#18181A] flex items-center justify-center animate-float overflow-hidden">
               <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
               >
                 <Mail size={150} className="text-white drop-shadow-[10px_10px_0_#18181A]" strokeWidth={1} />
               </motion.div>
            </div>
            
            {/* Quick Helper Badge */}
            <div className="mt-12 p-8 bg-white border-4 border-[#18181A] rounded-[2rem] shadow-[8px_8px_0_#18181A] rotate-2">
              <p className="font-heading font-black text-[#18181A] text-center">
                Still Need Help? <br/>
                <span className="text-[#FA3C30]">SUPPORT@EATBEST.COM</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
