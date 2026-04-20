'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, X, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { headerData } from '@/lib/data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-in-out ${
          scrolled ? 'bg-white/90 backdrop-blur-md border-b-4 border-[#18181A] py-3' : 'bg-transparent py-5 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between gap-6">

          {/* Logo - Neo Brutalist Item */}
          <Link href="/" className="flex items-center gap-4 group relative z-50 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-[#FA3C30] border-4 border-[#18181A] shadow-[4px_4px_0_#18181A] flex items-center justify-center transition-all duration-300 group-hover:rotate-6">
              <span className="font-heading text-white font-bold text-2xl leading-none">E</span>
            </div>
            <span className="font-heading text-3xl font-bold tracking-tight text-[#18181A]">
              Eat<span className="text-[#FA3C30]">Best</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 xl:gap-2">
            {headerData.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-5 py-2.5 font-heading font-extrabold text-sm uppercase tracking-wider transition-all duration-200 rounded-full border-4 border-transparent hover:border-[#18181A] hover:bg-white hover:shadow-[4px_4px_0_#18181A] ${
                    isActive ? 'border-[#18181A] bg-[#C1D544] shadow-[4px_4px_0_#18181A]' : 'text-[#18181A]/70 hover:text-[#18181A]'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action Group */}
          <div className="flex items-center gap-4 relative z-50">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-12 h-12 rounded-full border-4 border-[#18181A] bg-white shadow-[4px_4px_0_#18181A] flex items-center justify-center text-[#18181A] hover:bg-[#FA3C30] hover:text-white transition-all duration-200"
              aria-label="Search"
            >
              <Search size={20} strokeWidth={3} />
            </button>

            <Link
              href="/menu"
              className="btn btn-primary hidden sm:flex text-sm py-3 px-8 border-4 border-[#18181A] shadow-[4px_4px_0_#18181A]"
            >
              <ShoppingBag size={18} strokeWidth={3} />
              <span className="ml-1 uppercase tracking-widest font-extrabold">Order</span>
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-12 h-12 rounded-full border-4 border-[#18181A] bg-white shadow-[4px_4px_0_#18181A] flex items-center justify-center text-[#18181A] hover:bg-[#C1D544] transition-all duration-200"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div key="x" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 0.15 }}>
                    <X size={24} strokeWidth={3} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={24} strokeWidth={3} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute top-full left-0 w-full bg-white border-b-4 border-[#18181A] px-6 py-6 overflow-hidden"
            >
              <div className="max-w-3xl mx-auto">
                <div className="relative">
                  <Search size={24} className="absolute left-6 top-1/2 -translate-y-1/2 text-[#18181A]" />
                  <input
                    ref={searchRef}
                    type="text"
                    placeholder="WANT SOMETHING TASTY?..."
                    className="w-full bg-white border-4 border-[#18181A] rounded-2xl pl-16 pr-16 py-5 text-lg font-heading font-bold text-[#18181A] placeholder-[#18181A]/30 outline-none shadow-[6px_6px_0_#18181A] focus:translate-y-[-2px] focus:shadow-[8px_8px_0_#18181A] transition-all"
                  />
                  <button onClick={() => setSearchOpen(false)} className="absolute right-6 top-1/2 -translate-y-1/2 text-[#18181A] hover:text-[#FA3C30] transition-colors">
                    <X size={24} strokeWidth={3} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-28 px-8 pb-12 overflow-hidden"
          >
            <div className="flex flex-col gap-4 flex-1">
              {headerData.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block py-5 border-b-4 border-[#18181A] font-heading text-4xl font-extrabold uppercase transition-colors ${
                      pathname === item.href ? 'text-[#FA3C30]' : 'text-[#18181A] hover:bg-[#FA3C30]/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-12">
                <Link href="/menu" onClick={() => setOpen(false)} className="btn btn-primary w-full py-6 text-2xl justify-center border-4 border-[#18181A] shadow-[8px_8px_0_#18181A]">
                  ORDER NOW 🍕
                </Link>
              </div>
            </div>
            
            {/* Visual Flair in Mobile Menu */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#C1D544] border-4 border-[#18181A] rounded-full shadow-[8px_8px_0_#18181A] -z-10 animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
