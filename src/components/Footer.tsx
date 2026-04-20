'use client';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { footerData } from '@/lib/data';

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
};

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden border-t-[6px] border-[#18181A]" style={{ background: 'var(--bg-primary)' }}>
      {/* Decorative Floating Elements (Cartoon Style) */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#C1D544]/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#FA3C30]/10 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Simplified Header-like Footer Top */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 pb-20 border-b-4 border-[#18181A]">
          
          {/* Brand & Mission */}
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-4 mb-8 group">
              <div className="w-12 h-12 rounded-2xl bg-[#FA3C30] border-4 border-[#18181A] shadow-[4px_4px_0_#18181A] flex items-center justify-center transition-transform group-hover:rotate-12">
                <span className="font-heading text-white font-bold text-2xl">E</span>
              </div>
              <span className="font-heading text-3xl font-bold tracking-tight text-[#18181A]">
                Eat<span className="text-[#FA3C30]">Best</span>
              </span>
            </Link>
            <p className="text-xl font-medium text-[#18181A]/80 leading-relaxed italic mb-8">
              &quot;Bringing the joy of fresh food to your doorstep, one happy plate at a time.&quot;
            </p>
            <div className="flex gap-4">
              {footerData.socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon] ?? Facebook;
                return (
                  <a
                    key={s.icon}
                    href={s.link}
                    className="w-14 h-14 rounded-full bg-white border-4 border-[#18181A] shadow-[4px_4px_0_#18181A] flex items-center justify-center hover:bg-[#C1D544] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#18181A] transition-all duration-200"
                  >
                    <Icon size={24} className="text-[#18181A]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-20">
            <div>
              <h4 className="font-heading text-xl font-bold text-[#18181A] mb-8 uppercase tracking-widest">Shop</h4>
              <ul className="space-y-4">
                {footerData.explore.slice(0, 3).map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-lg font-bold text-[#18181A]/70 hover:text-[#FA3C30] transition-colors relative group">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#FA3C30] group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-xl font-bold text-[#18181A] mb-8 uppercase tracking-widest">Info</h4>
              <ul className="space-y-4">
                {['About Us', 'Contact', 'Blog'].map((label) => (
                  <li key={label}>
                    <Link href="#" className="text-lg font-bold text-[#18181A]/70 hover:text-[#C1D544] transition-colors relative group">
                      {label}
                      <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#C1D544] group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden sm:block">
              <h4 className="font-heading text-xl font-bold text-[#18181A] mb-8 uppercase tracking-widest">Support</h4>
              <ul className="space-y-4">
                {['FAQ', 'Shipping', 'Returns'].map((label) => (
                  <li key={label}>
                    <Link href="#" className="text-lg font-bold text-[#18181A]/70 hover:text-[#3EE0D2] transition-colors relative group">
                      {label}
                      <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#3EE0D2] group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="font-heading text-sm font-bold text-[#18181A]/40 uppercase tracking-widest">
            {footerData.copyright}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#18181A]/60">
            <a href="#" className="hover:text-[#FA3C30] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#FA3C30] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#FA3C30] transition-colors">Cookies</a>
            <div className="flex items-center gap-2 px-3 py-1 bg-[#18181A] text-white rounded-full">
              <Clock size={12} />
              <span>24/7 Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Retro Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply noise" />
    </footer>
  );
}
