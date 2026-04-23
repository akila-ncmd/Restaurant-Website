'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Zap, Star, Sparkles, Utensils, Pizza, Apple } from 'lucide-react';
import SmoothMarquee from './SmoothMarquee';

interface PageBannerProps {
  title: string;
  subtitle: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageBanner({ title, subtitle, breadcrumbs }: PageBannerProps) {
  const floatItems = ['🍕', '🍔', '🥗', '🥤', '🍟'];
  const { scrollY } = useScroll();
  
  // Parallax effects for background elements
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 20]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden text-center bg-[#FFECB3] border-b-[8px] border-[#18181A] noise">
      
      {/* ── Background Animations (Brars/Cartoon style) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatItems.map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl md:text-8xl opacity-15"
            style={{ 
              left: `${10 + i * 20}%`, 
              top: i % 2 === 0 ? '15%' : '65%',
              y: i % 2 === 0 ? y1 : y2
            }}
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            {emoji}
          </motion.div>
        ))}

        {/* Large Decorative Elements */}
        <motion.div 
          style={{ rotate }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border-[20px] border-[#FA3C30]/5 opacity-30" 
        />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#C1D544]/10 opacity-30 blur-3xl" />
        
        {/* Massive Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <h2 className="text-[30vw] font-heading font-black leading-none uppercase translate-y-20">
            {title.split(' ')[0]}
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -20, opacity: 0 }}
          animate={{ scale: 1, rotate: -3, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full border-4 border-[#18181A] bg-[#FA3C30] shadow-[8px_8px_0_#18181A] mb-12"
        >
          <Zap size={28} className="text-white fill-white animate-pulse" />
          <span className="font-heading text-white text-base md:text-lg font-black tracking-[0.25em] uppercase">
            {subtitle}
          </span>
        </motion.div>

        {/* Dynamic Heading */}
        <div className="relative mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-9xl lg:text-[10rem] font-heading text-[#18181A] font-black drop-shadow-[8px_8px_0_rgba(0,0,0,0.05)] leading-[0.9] tracking-tighter"
          >
            {title}
          </motion.h1>
          
          {/* Animated Highlight Scribble */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.6, duration: 1 }}
            className="absolute -bottom-6 left-0 h-4 bg-[#C1D544] skew-x-[-20deg] z-[-1]"
          />
        </div>

        {/* Breadcrumbs - Premium Grid/Button style */}
        {breadcrumbs && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <Link href="/" className="group relative px-8 py-3 rounded-2xl border-4 border-[#18181A] bg-white shadow-[6px_6px_0_#18181A] font-heading font-black text-[#18181A] hover:bg-[#C1D544] hover:translate-y-1 hover:shadow-[2px_2px_0_#18181A] transition-all">
              <span className="relative z-10 flex items-center gap-2">Home</span>
            </Link>
            <ChevronRight size={32} className="text-[#18181A] stroke-[4]" />
            <div className="px-8 py-3 rounded-2xl border-4 border-[#18181A] bg-[#FA3C30] shadow-[6px_6px_0_#18181A] font-heading font-black text-white">
              {breadcrumbs[0].label}
            </div>
          </motion.div>
        )}
      </div>

      {/* ── Premium Smooth Marquee (The "Marquee Scroll" from Home) ── */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="relative h-20 md:h-28 overflow-hidden flex items-center">
          <div className="absolute inset-x-0 h-full bg-[#18181A] border-t-[6px] border-[#18181A] -rotate-1 translate-y-4 shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
            <SmoothMarquee baseVelocity={-3} className="py-2 md:py-4">
              <span className="font-heading text-4xl md:text-6xl font-black text-[#C1D544] uppercase mx-12 flex items-center gap-10">
                {title} • <Sparkles className="fill-[#C1D544] w-10 h-10" /> 
                STAY HUNGRY • <Star className="fill-[#C1D544] w-10 h-10" /> 
                {subtitle} • <Utensils className="text-[#C1D544] w-10 h-10" /> 
                BEST IN TOWN • <Pizza className="text-[#C1D544] w-10 h-10" />
                DINE WITH US • <Apple className="text-[#C1D544] w-10 h-10" />
              </span>
            </SmoothMarquee>
          </div>
        </div>
      </div>
    </section>
  );
}

