'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Award, Heart, Star, Users, type LucideIcon } from 'lucide-react';
import { aboutData } from '@/lib/data';

interface StatItemProps {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
}

function StatCard({ icon: Icon, value, label, color }: StatItemProps) {
  return (
    <motion.div
      whileHover={{ y: -10, rotate: 2 }}
      className="bg-white border-4 border-[#18181A] rounded-[2rem] p-8 shadow-[8px_8px_0_#18181A] flex flex-col items-center text-center"
    >
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center border-4 border-[#18181A] mb-4 shadow-[4px_4px_0_#18181A]"
        style={{ backgroundColor: color }}
      >
        <Icon size={32} className="text-[#18181A]" />
      </div>
      <h3 className="text-4xl font-heading font-black text-[#18181A] mb-1">{value}</h3>
      <p className="font-heading text-sm font-bold uppercase tracking-widest text-[#18181A]/60">{label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 relative bg-white overflow-hidden noise">
      
      {/* ── Background Flair ── */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-[#C1D544]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-64 h-64 bg-[#FA3C30]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Content: Main About Info */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Left: Premium Image Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#C1D544] border-4 border-[#18181A] rounded-[4rem] rotate-3 shadow-[12px_12px_0_#18181A]" />
            <div className="relative bg-white border-4 border-[#18181A] rounded-[4rem] overflow-hidden p-8 aspect-square flex items-center justify-center">
              <Image
                src={aboutData.image}
                alt="Our Story"
                width={500}
                height={500}
                className="object-contain drop-shadow-[20px_20px_0_rgba(0,0,0,0.1)]"
              />
              {/* Sticker Badge */}
              <motion.div 
                animate={{ rotate: [12, 15, 12] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute top-10 right-10 w-28 h-28 bg-[#FA3C30] border-4 border-[#18181A] rounded-full shadow-[6px_6px_0_#18181A] flex items-center justify-center -rotate-12"
              >
                <div className="text-center text-white">
                  <span className="block text-2xl font-black">100%</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Fresh</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="text-center lg:text-left">
            <span className="section-label lg:justify-start justify-center">{aboutData.subtitle}</span>
            <h2 className="text-5xl md:text-6xl font-heading font-black text-[#18181A] leading-tight mb-8">
              We Cook With <br />
              <span className="text-[#FA3C30] drop-shadow-[4px_4px_0_#18181A]">Real Passion</span>
            </h2>
            <p className="text-xl font-bold text-[#18181A]/70 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              At EatBest, we don&apos;t just deliver food; we deliver experiences. Our chefs select every ingredient by hand, ensuring your meals are as healthy as they are delicious.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {['Natural Ingredients', 'Chef Crafted', 'Daily New Menu', 'Safe Packaging'].map((item) => (
                <li key={item} className="flex items-center gap-4 px-6 py-4 bg-white border-4 border-[#18181A] rounded-2xl shadow-[4px_4px_0_#18181A]">
                  <CheckCircle2 className="text-[#C1D544]" size={24} strokeWidth={3} />
                  <span className="font-heading font-bold text-[#18181A]">{item}</span>
                </li>
              ))}
            </ul>

            <button className="btn btn-primary px-10 py-5 text-xl">
              Explore Our History <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        {/* ── NEW: Filling the Space with Stats ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard icon={Heart} value="15k+" label="Happy Lovers" color="#FB7185" />
          <StatCard icon={Award} value="25+" label="Awards Won" color="#FACC15" />
          <StatCard icon={Users} value="40+" label="Top Chefs" color="#60A5FA" />
          <StatCard icon={Star} value="4.9" label="Rating Average" color="#C1D544" />
        </div>

      </div>
    </section>
  );
}
