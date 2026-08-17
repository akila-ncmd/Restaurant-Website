'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, Zap, ChefHat, Cookie, Coffee, IceCream, Utensils, Pizza, Soup, Apple } from 'lucide-react';
import Image from 'next/image';
import { heroData } from '@/lib/data';

const FOOD_ICONS = [
  { Icon: ChefHat, top: '15%', left: '5%', rotate: -15, size: 40 },
  { Icon: Cookie, top: '25%', right: '10%', rotate: 20, size: 30 },
  { Icon: Coffee, bottom: '20%', left: '8%', rotate: -10, size: 35 },
  { Icon: IceCream, top: '10%', right: '25%', rotate: 15, size: 45 },
  { Icon: Utensils, bottom: '30%', right: '5%', rotate: -25, size: 30 },
  { Icon: Pizza, top: '40%', left: '2%', rotate: 10, size: 50 },
  { Icon: Apple, bottom: '15%', right: '20%', rotate: 45, size: 35 },
  { Icon: Soup, top: '60%', left: '10%', rotate: -5, size: 30 },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = heroData.slides[currentSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/*
        min-h-screen, not h-screen: on shorter viewports the content is taller than
        100vh, and a fixed height clipped it while justify-center pushed the badge
        up underneath the fixed header.
      */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center pt-32 md:pt-40 pb-6 overflow-hidden transition-colors duration-1000 noise"
        style={{ backgroundColor: slide.secondaryColor }}
      >
        
        {/* ── Background Typography ── */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.div 
            key={`bg-text-${currentSlide}`}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: '-100%', opacity: 0.03 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="bg-type-overlay top-20"
          >
            {slide.highlightedText} {slide.highlightedText}
          </motion.div>
        </div>

        {/* ── Dynamic Foodie Background (Adapts to accent color) ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {FOOD_ICONS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.1, 
                scale: 1,
                y: [0, 10, 0]
              }}
              transition={{ delay: i * 0.1, duration: 5, repeat: Infinity }}
              style={{ position: 'absolute', top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
            >
              <item.Icon 
                size={item.size} 
                className="transition-colors duration-1000" 
                style={{ color: slide.accentColor }} 
                strokeWidth={2}
              />
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full flex-grow flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
            
            {/* ── Text Content ── */}
            <div className="relative flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-center lg:text-left"
                >
                  {/* Badge */}
                  <motion.div 
                    variants={{ initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 } }}
                    className="inline-flex items-center gap-3 px-6 py-2 rounded-full border-4 border-[#18181A] shadow-[4px_4px_0_#18181A] mb-8 transform -rotate-1"
                    style={{ backgroundColor: slide.accentColor, color: 'white' }}
                  >
                    <Zap size={18} fill="currentColor" />
                    <span className="font-heading text-[11px] md:text-xs font-black tracking-widest uppercase">{slide.subtitle}</span>
                  </motion.div>

                  {/* Heading */}
                  <div className="overflow-hidden mb-6">
                    <motion.h1 
                      variants={{ initial: { y: "110%" }, animate: { y: 0 } }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="text-3xl md:text-4xl lg:text-6xl font-heading font-extrabold text-[#18181A] leading-[1.05]"
                    >
                      {slide.title}
                      <br />
                      <span className="inline-block drop-shadow-[4px_4px_0_#18181A]" style={{ color: slide.accentColor }}>
                        {slide.highlightedText}
                      </span>
                    </motion.h1>
                  </div>

                  <motion.p 
                    variants={{ initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 } }}
                    transition={{ delay: 0.2 }}
                    className="text-sm md:text-base text-[#18181A]/70 font-bold mb-10 max-w-lg leading-relaxed mx-auto lg:mx-0"
                  >
                    {slide.description}
                  </motion.p>

                  {/* CTAs (Positioned as bottom part of Hero screen) */}
                  <motion.div 
                    variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12 lg:mb-16"
                  >
                    <motion.button 
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      className="btn btn-primary px-8 py-3 text-base text-white border-4 border-[#18181A] shadow-[8px_8px_0_#18181A]"
                      style={{ backgroundColor: slide.accentColor }}
                    >
                      Order Now <ArrowRight size={24} className="ml-2" />
                    </motion.button>
                    
                    <button className="flex items-center gap-3 group">
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-[#18181A] shadow-[4px_4px_0_#18181A] flex items-center justify-center group-hover:bg-[#C1D544] transition-colors">
                        <Play size={24} className="text-[#18181A] ml-1" />
                      </div>
                      <span className="font-heading text-base font-bold text-[#18181A] group-hover:text-[#FA3C30] transition-colors">
                        Watch Video
                      </span>
                    </button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Visual ── */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, scale: 0.5, rotate: -30, y: 10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, y: -40 }}
                  exit={{ opacity: 0, scale: 1.2, rotate: 30, y: -100 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full h-full max-w-md lg:max-w-xl z-10"
                >
                   <Image src={slide.image} alt={slide.title} fill className="object-contain drop-shadow-[20px_20px_0_rgba(0,0,0,0.1)]" priority />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </section>
    </>
  );
}

