'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';
import { testimonialData } from '@/lib/data';
import JaggedDivider from './JaggedDivider';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-40 relative overflow-hidden bg-[#FFECB3]">
      <JaggedDivider color="#FFECB3" position="top" />
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(212,168,83,0.2) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-20"
        >
          <span className="section-label justify-center">{testimonialData.subtitle}</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-black font-bold mt-4">
            Loved by <span style={{ background: 'var(--grad-gold)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Thousands</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-8 md:p-10"
            >
              <div className="flex gap-1 mb-6" aria-label={`Rated ${item.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={18}
                    className={idx < item.rating ? 'text-[#C1D544]' : 'text-black/15'}
                    fill={idx < item.rating ? '#C1D544' : 'currentColor'}
                  />
                ))}
              </div>
              
              <Quote size={40} className="text-black/10 mb-6 absolute top-8 right-8" />
              
              <p className="text-lg text-[#2C2C2E] italic mb-8 relative z-10">
                &quot;{item.review}&quot;
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#C1D544]/30">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-black text-lg">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between p-8 rounded-3xl"
          style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)', border: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <div className="flex -space-x-4">
              {[
                "/images/customer_1_1776590030072.png",
                "/images/customer_2_1776590052499.png",
                "/images/customer_3_1776590093848.png",
                "/images/customer_4_1776590133498.png"
              ].map((src, i) => (
                <div key={i} className="relative w-12 h-12 rounded-full border-2 border-[#141420] overflow-hidden bg-white shadow-[2px_2px_0_#141420]">
                  <Image src={src} alt={`Happy customer ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
            <div>
              <p className="font-heading font-bold text-black text-xl">10,000+</p>
              <p className="text-sm text-[#2C2C2E]">Happy Customers</p>
            </div>
          </div>
          <p className="text-[#2C2C2E] text-center md:text-right max-w-sm">
            Join thousands of food lovers who trust EatBest for their daily meals and special occasions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
