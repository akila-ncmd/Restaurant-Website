'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { promoData } from '@/lib/data';
import { ArrowUpRight, Plus } from 'lucide-react';
import Link from 'next/link';
import JaggedDivider from './JaggedDivider';
import SmoothMarquee from './SmoothMarquee';
import { Sparkles, Star, Utensils, Apple, Pizza, Coffee, IceCream, Zap, Soup } from 'lucide-react';

export default function Promo() {
  return (
    <section className="relative bg-white overflow-hidden noise">
      {/* ── Premium Smooth Marquee as Starting Edge ── */}
      <div className="relative z-40 flex flex-col gap-0 -translate-y-4">
        <div className="bg-[#18181A] py-6 rotate-[-1.5deg] border-y-4 border-[#C1D544] shadow-[10px_10px_0_rgba(0,0,0,0.1)] relative overflow-hidden">
          <SmoothMarquee baseVelocity={-2} className="py-2">
            <span className="font-heading text-3xl md:text-5xl font-black text-[#C1D544] uppercase mx-12 flex items-center gap-8">
              STAY HUNGRY <Star className="fill-[#C1D544]" /> ORDER NOW <Utensils className="text-[#C1D544]" /> FRESH DAILY <Pizza className="text-[#C1D544]" /> PREMIUM FOOD <Apple className="text-[#C1D544]" />
            </span>
          </SmoothMarquee>
        </div>
        
        <div className="bg-[#FA3C30] py-5 rotate-[1.5deg] -translate-y-8 border-y-4 border-[#18181A] shadow-[10px_10px_0_rgba(0,0,0,0.1)] relative overflow-hidden">
          <SmoothMarquee baseVelocity={2} className="py-2">
            <span className="font-heading text-xl md:text-3xl font-black text-white uppercase mx-12 flex items-center gap-8">
              BEST IN TOWN <Zap className="fill-white" /> OPEN 24/7 <Coffee className="text-white" /> LOCAL INGREDIENTS <IceCream className="text-white" /> FASTEST DELIVERY <Soup className="text-white" />
            </span>
          </SmoothMarquee>
        </div>
      </div>
      
      {/* ── Background Typography ── */}
      <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[25vw] font-heading font-black leading-none transform translate-x-1/4 -translate-y-1/4 drop-shadow-[10px_10px_0_#000]">
          MENU
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-20 pb-40">
        
        {/* Header with Reveal */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border-4 border-[#18181A] bg-[#C1D544] shadow-[4px_4px_0_#18181A] mb-6">
              <Sparkles size={16} fill="#18181A" />
              <span className="font-heading text-xs font-black uppercase tracking-widest">Fresh categories</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-heading font-black text-[#18181A] leading-tight">
              Pick Your <br/>
              <span className="text-[#FA3C30] drop-shadow-[5px_5px_0_#18181A]">Favorite Dish</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/menu" className="btn btn-primary px-10 py-5 text-xl">
              Explore All <ArrowUpRight className="ml-2" />
            </Link>
          </motion.div>
        </div>

        {/* Categories Grid - Reveal Staggered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promoData.items.map((promo, i) => (
            <motion.div
              key={promo.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white border-4 border-[#18181A] rounded-[2rem] p-8 shadow-[10px_10px_0_#18181A] hover:translate-y-[-10px] hover:shadow-[15px_15px_0_#18181A] transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full cursor-pointer"
            >
              {/* Bottom-to-top color fill */}
              <div className="absolute inset-x-0 bottom-0 bg-[#FA3C30] h-0 group-hover:h-full transition-all duration-500 ease-out z-0" />

              {/* Content Wrapper */}
              <div className="relative z-10 flex flex-col items-center h-full w-full">
                {/* Icon */}
                <div className="mb-6 group-hover:brightness-0 group-hover:invert transition-all duration-300">
                  <Image
                    src={promo.icon}
                    alt="category icon"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>

                <h3 className="text-3xl font-heading font-black text-[#18181A] mb-4 group-hover:text-white transition-colors duration-300">
                  {promo.title}
                </h3>
                
                <p className="text-base font-bold text-[#18181A]/60 mb-10 group-hover:text-white/90 transition-colors duration-300 leading-relaxed max-w-[200px]">
                  {promo.text}
                </p>

                {/* Dish Image at Bottom */}
                <div className="mt-auto relative w-full aspect-square scale-110 group-hover:scale-125 transition-transform duration-500">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    fill
                    priority={i < 4}
                    className="object-contain drop-shadow-[10px_10px_15px_rgba(0,0,0,0.1)]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Advanced Section Transition Marquee ── */}
      <div className="mt-32 relative h-16 md:h-24 overflow-hidden">
        {/* Track 1: Backwards */}
        <div className="absolute inset-x-0 top-0 py-4 bg-[#18181A] border-y-4 border-[#C1D544] -rotate-1 z-10 overflow-hidden">
          <SmoothMarquee baseVelocity={-2}>
            <span className="font-heading text-2xl md:text-4xl font-black text-[#C1D544] uppercase mx-10 flex items-center gap-4">
              QUALITY FOOD <Sparkles className="fill-[#C1D544] w-6 h-6" /> CRAFTED WITH LOVE <Star className="fill-[#C1D544] w-6 h-6" /> FRESH INGREDIENTS <Utensils className="text-[#C1D544] w-6 h-6" /> HIGHEST STANDARDS <Apple className="text-[#C1D544] w-6 h-6" />
            </span>
          </SmoothMarquee>
        </div>
      </div>

    </section>
  );
}
