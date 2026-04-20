'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { deliveryData } from '@/lib/data';
import { CheckCircle2, ArrowRight, Zap, MapPin, FastForward, Star, Sparkles, Heart } from 'lucide-react';

const FEATURES = [
  'Delivery within 30 minutes',
  'Free delivery for orders over $50',
  'Live GPS tracking of your order',
];

export default function Delivery() {
  return (
    <section id="delivery" className="py-32 relative bg-white overflow-hidden noise">
      
      {/* Decorative Wavy Divider at top to prevent empty looking transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 transform rotate-180">
        <svg className="relative block w-full h-12 text-[#18181A]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C51.31,114.34,115.1,123,175.76,112.44,236.43,101.88,272.93,76.5,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[4rem] bg-[#FA3C30] border-8 border-[#18181A] shadow-[20px_20px_0_#18181A] overflow-hidden"
        >
          {/* Animated Background Icons */}
          <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute -top-20 -right-20">
              <Zap size={300} strokeWidth={1} />
            </motion.div>
            <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="absolute -bottom-20 -left-20">
              <MapPin size={250} strokeWidth={1} />
            </motion.div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 p-12 md:p-16 lg:p-24">

            {/* Content (Left) */}
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#C1D544] border-4 border-[#18181A] shadow-[4px_4px_0_#18181A] mb-10 transform -rotate-2"
              >
                <FastForward size={24} className="text-[#18181A]" />
                <span className="font-heading text-[#18181A] text-sm md:text-base font-black tracking-widest uppercase">
                  Sonic Fast Shipping
                </span>
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-heading font-black text-white mb-8 leading-tight drop-shadow-[4px_4px_0_#18181A]">
                Ready to Taste <br />
                <span className="text-[#18181A] bg-[#C1D544] px-4 rounded-xl inline-block -rotate-1">Perfect Food?</span>
              </h2>

              <p className="text-xl font-bold text-white mb-12 max-w-xl lg:mx-0 mx-auto leading-relaxed">
                {deliveryData.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 w-fit mx-auto lg:mx-0">
                {FEATURES.map((feat, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 p-4 rounded-2xl"
                  >
                    <CheckCircle2 size={24} className="text-[#C1D544]" strokeWidth={3} />
                    <span className="text-lg text-white font-black uppercase tracking-tight">{feat}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-white text-[#18181A] font-heading font-black text-2xl border-4 border-[#18181A] rounded-2xl shadow-[6px_6px_0_#18181A] hover:bg-[#C1D544] transition-colors"
                >
                  Order Now <ArrowRight className="ml-2 inline" />
                </motion.button>
              </div>
            </div>

            {/* Visual (Right) */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 15 }}
              className="w-full lg:w-2/5 flex justify-center"
            >
              <div className="relative w-full max-w-sm aspect-square">
                {/* Visual Flair Circles */}
                <div className="absolute inset-0 rounded-full border-8 border-dashed border-[#18181A] opacity-20 animate-spin-slow" />
                <div className="absolute inset-10 rounded-full bg-white/20 blur-2xl" />
                
                <Image
                  src={deliveryData.imageBoy}
                  alt="Delivery Hero"
                  fill
                  className="object-contain drop-shadow-[20px_30px_0_rgba(0,0,0,0.2)] animate-float"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Advanced Section End Marquee ── */}
      <div className="mt-24 overflow-hidden py-10 rotate-1 flex flex-col gap-4">
        <div className="animate-marquee whitespace-nowrap flex items-center opacity-10 hover:opacity-30 transition-opacity">
          {[1,2,3,4].map((_, i) => (
            <span key={i} className="font-heading text-8xl font-black text-[#18181A] uppercase mx-20 flex items-center gap-10">
              EATBEST • FRESH • <Zap size={80} /> • DELICIOUS • FAST • <Star size={80} />
            </span>
          ))}
        </div>
        <div className="animate-marquee-reverse whitespace-nowrap flex items-center opacity-10 hover:opacity-30 transition-opacity">
          {[1,2,3,4].map((_, i) => (
            <span key={i} className="font-heading text-8xl font-black text-[#18181A] uppercase mx-20 flex items-center gap-10">
              BEST IN TOWN • <Sparkles size={80} /> • QUALITY FIRST • <Heart size={80} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
