'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    // Slight delay to ensure the browser has settled from the navigation
    const startProgress = () => {
      timeoutId = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timeoutId);
            setTimeout(() => setIsVisible(false), 500);
            return 100;
          }
          const increment = Math.floor(Math.random() * 12) + 4; // Faster, punchier progress
          return Math.min(prev + increment, 100);
        });
      }, 80);
    };

    const initialTimeout = setTimeout(startProgress, 100);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(timeoutId);
    };
  }, []);

  // Prevent scrolling while loading
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{ 
            clipPath: 'inset(0% 0% 100% 0%)',
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white overflow-hidden"
        >
          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20 noise" />

          {/* Animated Background Circles (Custom Gradient) */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[150vw] h-[150vw] bg-gradient-to-tr from-[#FA3C30]/20 via-transparent to-[#C1D544]/20 blur-[120px]" 
          />

          <div className="relative z-10 flex flex-col items-center w-full px-10">
            {/* Logo Group */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center mb-12"
            >
              <div className="w-20 h-20 bg-[#FA3C30] border-4 border-[#18181A] shadow-[6px_6px_0px_#18181A] rounded-3xl flex items-center justify-center rotate-[-8deg] mb-6">
                <span className="font-display text-white text-4xl">E</span>
              </div>
              <p className="font-heading text-[#18181A]/40 uppercase tracking-[0.4em] text-xs">Premium Dining</p>
            </motion.div>

            {/* Counter Section */}
            <div className="relative">
                <div className="flex items-baseline justify-center">
                    <motion.span 
                        className="font-display text-[25vw] md:text-[18rem] text-[#18181A] leading-[0.85] tracking-tighter"
                    >
                        {progress}
                    </motion.span>
                    <span className="font-heading text-6xl md:text-8xl text-[#FA3C30] absolute -right-12 md:-right-24 bottom-10 md:bottom-20">%</span>
                </div>
            </div>

            {/* Loading Indicator */}
            <div className="mt-12 w-full max-w-md">
                <div className="flex justify-between items-end mb-4 font-body font-black text-[#18181A] text-sm uppercase tracking-widest">
                    <span>Authenticity</span>
                    <span>{progress}%</span>
                </div>
                <div className="h-4 border-4 border-[#18181A] bg-white rounded-full overflow-hidden shadow-[4px_4px_0px_#18181A]">
                    <motion.div 
                        className="h-full bg-[#FA3C30]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                    />
                </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 text-center"
            >
              <p className="font-display text-xl md:text-2xl text-[#18181A]">
                {progress < 30 && "Gathering fresh ingredients..."}
                {progress >= 30 && progress < 70 && "Heating the wood-fired oven..."}
                {progress >= 70 && progress < 100 && "Plating your experience..."}
                {progress === 100 && "Bon Appétit!"}
              </p>
            </motion.div>
          </div>

          {/* Location / Meta Info (Inspired by high-end restaurant sites) */}
          <div className="absolute bottom-12 left-12 right-12 hidden md:flex justify-between items-center pointer-events-none">
            <div className="flex gap-12">
                <div>
                    <p className="font-heading text-[10px] uppercase text-[#18181A]/40 mb-1">Location</p>
                    <p className="font-body font-bold text-xs uppercase text-[#18181A]">Colombo - SL</p>
                </div>
                <div>
                    <p className="font-heading text-[10px] uppercase text-[#18181A]/40 mb-1">Concept</p>
                    <p className="font-body font-bold text-xs uppercase text-[#18181A]">Neo-Brutalist Eat</p>
                </div>
            </div>
            <div className="text-right">
                <p className="font-heading text-[10px] uppercase text-[#18181A]/40 mb-1">Since</p>
                <p className="font-body font-bold text-xs uppercase text-[#18181A]">MMXXVI</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
