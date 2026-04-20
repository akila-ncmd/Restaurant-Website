'use client';
import { motion } from 'framer-motion';

import Image from 'next/image';
import { bannerData } from '@/lib/data';
import type { BannerItem } from '@/lib/types';
import { ArrowRight, Sparkles } from 'lucide-react';
import JaggedDivider from './JaggedDivider';

function getGridClass(size: BannerItem['size']) {
  switch (size) {
    case 'large':  return 'lg:col-span-2 lg:row-span-2 min-h-[400px] md:min-h-[480px]';
    case 'medium': return 'lg:col-span-2 min-h-[300px]';
    default:       return 'min-h-[300px]';
  }
}

export default function Banners() {
  return (
    <div className="relative">
      {/* The "Curtain" Section that covers the previous one */}
      <motion.section 
        id="banners"
        style={{ 
          boxShadow: '0 -50px 100px rgba(0,0,0,0.2)'
        }}
        className="relative bg-white py-40 md:py-48 min-h-[100vh]"
      >
        <JaggedDivider color="white" position="top" />
        {/* Curtain Puller/Indicator */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-2 bg-[#18181A]/10 rounded-full" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full border-4 border-[#18181A] bg-[#FA3C30] shadow-[6px_6px_0_#18181A] mb-10 -rotate-2"
            >
              <Sparkles size={20} className="text-white fill-white" />
              <span className="font-heading text-sm md:text-base font-black uppercase tracking-widest text-white">Weekend Specials</span>
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-heading text-[#18181A] font-black leading-none tracking-tighter mb-10">
              Limited <br/>
              <span className="text-[#C1D544] drop-shadow-[8px_8px_0_#18181A]">Deals</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-[#18181A]/40 max-w-2xl mx-auto font-bold uppercase tracking-widest italic">
              &quot;The ultimate flavor experience is arriving soon. Grab it before it&apos;s gone.&quot;
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-10">
            {bannerData.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8, rotate: i % 2 === 0 ? -3 : 3 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  transition: { delay: 0.2 + (i * 0.1), duration: 0.6 }
                }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-[3.5rem] cursor-pointer border-4 border-[#18181A] shadow-[15px_15px_0_#18181A] hover:shadow-[25px_25px_0_#18181A] hover:-translate-y-4 hover:rotate-1 transition-all duration-300 ${getGridClass(item.size)}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#18181A] via-transparent to-transparent opacity-60" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-10 z-10">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-5 py-2 bg-[#C1D544] text-[#18181A] border-4 border-[#18181A] shadow-[4px_4px_0_#18181A] rounded-2xl text-xs font-heading font-black uppercase mb-6">
                      {item.subtitle || 'Exclusive'}
                    </span>

                    <h3 className="font-heading text-4xl font-black text-white leading-[0.9] mb-4">
                      {item.title}
                    </h3>

                    <button className="flex items-center gap-4 mt-6 group/btn">
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-[#18181A] shadow-[4px_4px_0_#C1D544] flex items-center justify-center group-hover/btn:bg-[#FA3C30] transition-colors">
                        <ArrowRight size={32} className="text-[#18181A]" />
                      </div>
                      <span className="font-heading font-black text-white text-sm uppercase tracking-widest">{item.button}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Decoration Background */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
           <div className="absolute top-1/4 left-10 w-64 h-64 border-8 border-[#FA3C30] rounded-full rotate-12" />
           <div className="absolute bottom-1/4 right-10 w-96 h-96 border-8 border-[#C1D544] rounded-full -rotate-12" />
        </div>
      </motion.section>
    </div>
  );
}
