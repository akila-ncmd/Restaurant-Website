'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, User, ArrowRight, Bookmark, Flame, TrendingUp, Zap } from 'lucide-react';
import { blogData } from '@/lib/data';
import Link from 'next/link';
import JaggedDivider from './JaggedDivider';

export default function Blog() {
  const featuredPost = blogData.posts[0];

  return (
    <section 
      id="blog" 
      className="py-24 md:py-32 relative bg-white overflow-hidden noise shadow-[0_-20px_40px_rgba(0,0,0,0.15)]"
    >
      <JaggedDivider color="white" position="top" />
      
      {/* ── Background Flair (Cartoon Elements) ── */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-[#FA3C30]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#C1D544]/5 rounded-full blur-[80px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="section-label justify-center">{blogData.subtitle}</span>
          <h2 className="text-6xl md:text-7xl font-heading text-[#18181A] font-black mt-4">
            Kitchen <span className="text-[#FA3C30] drop-shadow-[4px_4px_0_#18181A]">Stories</span>
          </h2>
          <p className="text-xl font-bold text-[#18181A]/60 mt-6 max-w-2xl mx-auto italic">
            &quot;{blogData.description}&quot;
          </p>
        </motion.div>

        {/* ── Spotlight Section ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-24 relative"
        >
          <div className="absolute inset-0 bg-[#C1D544] border-4 border-[#18181A] rounded-[3rem] rotate-1 translate-x-3 translate-y-3 shadow-[12px_12px_0_#18181A]" />
          <div className="relative flex flex-col lg:flex-row bg-white border-8 border-[#18181A] rounded-[3rem] overflow-hidden">
            
            <div className="lg:w-1/2 relative h-80 lg:h-auto overflow-hidden">
              <Image src={featuredPost.image} alt="Featured" fill className="object-cover" />
              <div className="absolute top-8 left-8 bg-[#FA3C30] text-white font-heading font-black px-6 py-2 border-4 border-[#18181A] shadow-[4px_4px_0_#18181A] rotate-[-5deg]">
                FEATURED STORY
              </div>
            </div>

            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white border-4 border-[#18181A] flex items-center justify-center">
                  <Flame size={24} className="text-[#FA3C30]" />
                </div>
                <span className="font-heading font-bold text-[#18181A]/40 uppercase tracking-widest">Trending Now</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-black text-[#18181A] mb-6 leading-tight hover:text-[#FA3C30] transition-colors cursor-pointer">
                {featuredPost.title}
              </h3>
              <p className="text-lg font-bold text-[#18181A]/60 mb-10 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <Link href={featuredPost.link} className="btn btn-primary px-8 py-4">
                  Read Full Story <ArrowRight size={20} className="ml-2" />
                </Link>
                <button className="p-4 rounded-2xl border-4 border-[#18181A] bg-white hover:bg-[#C1D544] transition-colors">
                  <Bookmark size={24} className="text-[#18181A]" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Regular Grid Section Title */}
        <div className="flex items-center gap-6 mb-12">
          <div className="h-2 flex-1 bg-[#18181A] rounded-full" />
          <h3 className="font-heading text-3xl font-black text-[#18181A] uppercase tracking-tighter">More Articles</h3>
          <div className="h-2 flex-1 bg-[#18181A] rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border-4 border-[#18181A] rounded-[2.5rem] overflow-hidden shadow-[8px_8px_0_#18181A] hover:translate-y-[-8px] hover:shadow-[12px_12px_0_#18181A] transition-all group flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform group-hover:scale-105" />
                <div className="absolute top-4 right-4 bg-[#C1D544] font-heading font-bold text-xs uppercase px-4 py-2 border-4 border-[#18181A] rounded-full shadow-[4px_4px_0_#18181A]">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs font-heading font-bold text-[#18181A]/40 uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <h4 className="text-2xl font-heading font-black text-[#18181A] mb-4 line-clamp-2 hover:text-[#FA3C30] transition-colors">
                  {post.title}
                </h4>
                <p className="text-base font-bold text-[#18181A]/60 mb-8 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-auto border-t-4 border-[#18181A]/5 pt-6 flex justify-between items-center group/btn">
                  <Link href={post.link} className="font-heading font-black text-[#18181A] uppercase tracking-widest flex items-center gap-2 group-hover:text-[#FA3C30] transition-colors">
                    View Post <ArrowRight size={18} className="translate-y-[1px]" />
                  </Link>
                  <TrendingUp size={20} className="text-[#C1D544]" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Filling Box */}
        <div className="mt-32 relative group">
          <div className="absolute inset-0 bg-[#FA3C30] border-4 border-[#18181A] rounded-[3rem] -rotate-1 shadow-[10px_10px_0_#18181A]" />
          <div className="relative bg-[#3EE0D2] border-4 border-[#18181A] rounded-[3rem] p-12 md:p-20 text-center overflow-hidden">
            {/* Cartoon Sparkles */}
            <Zap className="absolute top-10 left-10 text-white/20 -rotate-12" size={120} />
            <Zap className="absolute bottom-10 right-10 text-white/20 rotate-12" size={100} />
            
            <h3 className="text-4xl md:text-6xl font-heading font-black text-[#18181A] mb-6 relative z-10">
              LOVE OUR STORIES?
            </h3>
            <p className="text-xl font-black text-[#18181A]/70 mb-10 max-w-xl mx-auto uppercase tracking-tighter">
              Get weekly recipes and food culture tips delivered in a bubbly envelope!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="YOUR COOL EMAIL..." 
                className="flex-1 px-8 py-5 bg-white border-4 border-[#18181A] rounded-2xl font-heading font-bold shadow-[4px_4px_0_#18181A] outline-none"
              />
              <button className="btn btn-primary px-10 py-5 text-xl min-w-[200px] border-4 border-[#18181A] shadow-[6px_6px_0_#18181A]">
                JOIN US!
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
