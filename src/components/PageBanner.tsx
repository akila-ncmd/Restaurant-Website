'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Zap } from 'lucide-react';

interface PageBannerProps {
  title: string;
  subtitle: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageBanner({ title, subtitle, breadcrumbs }: PageBannerProps) {
  const floatItems = ['🍕', '🍔', '🥗', '🥤', '🍟'];

  return (
    <section className="relative pt-48 pb-32 md:pt-56 md:pb-40 overflow-hidden text-center bg-[#FFECB3] border-b-[6px] border-[#18181A] noise">
      
      {/* ── Background Animations (Brars/Cartoon style) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatItems.map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-5xl md:text-7xl opacity-20"
            style={{ 
              left: `${15 + i * 20}%`, 
              top: i % 2 === 0 ? '20%' : '60%' 
            }}
            animate={{
              y: [0, -40, 0],
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

        {/* Large Decorative Circle */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[12px] border-[#FA3C30]/10 opacity-50" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#C1D544]/10 opacity-40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="inline-flex items-center gap-3 px-8 py-3 rounded-full border-4 border-[#18181A] bg-[#FA3C30] shadow-[6px_6px_0_#18181A] mb-10"
        >
          <Zap size={24} className="text-white fill-white" />
          <span className="font-heading text-white text-sm md:text-base font-black tracking-[0.2em] uppercase">
            {subtitle}
          </span>
        </motion.div>

        {/* Dynamic Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="relative inline-block mb-12"
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-heading text-[#18181A] font-black drop-shadow-[6px_6px_0_rgba(0,0,0,0.05)] leading-tight">
            {title}
          </h1>
          {/* Scribble effect under title */}
          <svg className="absolute -bottom-4 left-0 w-full h-8 text-[#C1D544]" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path d="M0 10 Q 25 20, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="6" />
          </svg>
        </motion.div>

        {/* Breadcrumbs - Styled as buttons */}
        {breadcrumbs && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/" className="px-6 py-2 rounded-xl border-4 border-[#18181A] bg-white shadow-[4px_4px_0_#18181A] font-heading font-extrabold text-[#18181A] hover:bg-[#C1D544] transition-colors">
              Home
            </Link>
            <ChevronRight size={24} className="text-[#18181A] stroke-[3]" />
            <div className="px-6 py-2 rounded-xl border-4 border-[#18181A] bg-[#FA3C30] shadow-[4px_4px_0_#18181A] font-heading font-extrabold text-white">
              {breadcrumbs[0].label}
            </div>
          </motion.div>
        )}
      </div>

      {/* Marquee Strip at the very bottom of the banner */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-[#18181A] py-3 -rotate-1 translate-y-2 z-20">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[1,2,3,4,5].map((_, i) => (
            <span key={i} className="font-heading text-xl font-bold text-white uppercase mx-10">
              Fresh Daily • Real Ingredients • Order Now • Best In Town • 
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
