'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { menuData } from '@/lib/data';
import { Star, ShoppingCart, Flame, Tag, ChefHat } from 'lucide-react';
import JaggedDivider from './JaggedDivider';

export default function Menu() {
  const [activeCat, setActiveCat] = useState('all');
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yMove = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const categories = ['all', ...Array.from(new Set(menuData.items.map((item) => item.category)))];
  const filteredItems = activeCat === 'all' ? menuData.items : menuData.items.filter((item) => item.category === activeCat);

  return (
    <section 
      ref={sectionRef} 
      id="menu" 
      className="py-40 relative overflow-hidden noise"
      style={{ position: 'relative' }}
    >
      {/* ── Section Background filled among spikes ── */}
      <div className="absolute inset-0 bg-white z-0" />
      
      <JaggedDivider color="white" position="top" animate={true} />
      
      {/* ── Background Typography Foreground (Premium Scroll Detail) ── */}
      <div className="absolute top-40 left-0 w-full opacity-[0.03] pointer-events-none select-none z-0">
        <h2 className="text-[20vw] font-heading font-black whitespace-nowrap -translate-x-1/2">
          DELICIOUS SELECTION
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header with Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border-4 border-[#18181A] bg-[#3EE0D2] shadow-[4px_4px_0_#18181A] mb-8 transform -rotate-1">
            <ChefHat size={18} fill="#18181A" />
            <span className="font-heading text-xs font-black uppercase tracking-widest text-[#18181A]">Freshly prepared</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-heading font-black text-[#18181A] leading-none mb-8">
            Our <span className="text-[#C1D544] drop-shadow-[5px_5px_0_#18181A]">Masterpieces</span>
          </h2>
          <p className="text-xl font-bold text-[#18181A]/50 max-w-2xl mx-auto uppercase tracking-tighter">
            {menuData.description}
          </p>
        </motion.div>

        {/* Categories Tab (Premium Pill Style) */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCat(cat)}
              className={`px-10 py-4 rounded-2xl font-heading font-black text-lg uppercase tracking-widest transition-all ${
                activeCat === cat
                  ? 'bg-[#FA3C30] text-white border-4 border-[#18181A] shadow-[6px_6px_0_#18181A]'
                  : 'bg-white text-[#18181A] border-4 border-[#18181A] shadow-[4px_4px_0_#18181A] hover:bg-white'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Items Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 2 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={item.id}
                className="group relative bg-white border-4 border-[#18181A] rounded-[3.5rem] p-8 shadow-[10px_10px_0_#18181A] hover:translate-y-[-10px] hover:shadow-[15px_15px_0_#18181A] transition-all"
              >
                {/* ── Stickers/Badges ── */}
                <div className="absolute top-6 right-6 z-20">
                  {item.discount && (
                    <div className="bg-[#FA3C30] text-white text-xs font-heading font-black px-4 py-2 border-4 border-[#18181A] rounded-full shadow-[4px_4px_0_#18181A] -rotate-12 translate-x-4">
                      {item.discount} OFF
                    </div>
                  )}
                  {item.rating >= 4.8 && (
                    <div className="mt-4 bg-[#C1D544] text-[#18181A] text-xs font-heading font-black px-4 py-2 border-4 border-[#18181A] rounded-full shadow-[4px_4px_0_#18181A] rotate-3">
                      MUST TRY
                    </div>
                  )}
                </div>

                {/* ── Image ── */}
                <div className="relative h-64 mb-8 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#C1D544]/5 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-110 rounded-full transition-all duration-700" />
                  <motion.div style={{ y: yMove }} className="relative z-10 w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={item.id <= 4}
                      className="object-contain drop-shadow-[20px_20px_0_rgba(0,0,0,0.1)] group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                </div>

                {/* ── Info ── */}
                <div className="relative">
                  <h3 className="text-3xl font-heading font-black text-[#18181A] mb-4 group-hover:text-[#FA3C30] transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mt-8 border-t-8 border-[#18181A]/5 pt-8">
                    <div className="flex flex-col">
                      {item.oldPrice && (
                        <span className="text-sm font-heading font-bold text-[#18181A]/30 line-through">
                          ${item.oldPrice}
                        </span>
                      )}
                      <span className="text-4xl font-heading font-black text-[#18181A]">
                        ${item.price}
                      </span>
                    </div>
                    
                    <button className="w-16 h-16 rounded-2xl bg-[#18181A] flex items-center justify-center text-white hover:bg-[#FA3C30] hover:rotate-12 transition-all duration-300 shadow-[6px_6px_0_rgba(0,0,0,0.1)] group/btn">
                      <ShoppingCart size={28} strokeWidth={3} className="group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

    </section>
  );
}
