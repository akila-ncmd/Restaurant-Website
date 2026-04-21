'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Utensils, ArrowLeft } from 'lucide-react';

// Lazy-load the heavy 3D scene — avoids SSR issues and speeds up initial paint
const FoodScene404 = dynamic(() => import('@/components/FoodScene404'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="font-heading text-8xl md:text-9xl text-black/10 select-none"
      >
        404
      </motion.div>
    </div>
  ),
});

export default function NotFound() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAFAF7] px-4 py-4 md:px-8">
      
      {/* ── Subtle warm radial gradient backdrop ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(212,136,58,0.07) 0%, rgba(255,255,255,0) 70%)',
        }}
      />

      {/* ── Grid dot pattern (very subtle) ── */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#18181A 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />

      {/* ── Text content ── */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-2xl mx-auto mt-2"
      >
        {/* Main Heading */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-5xl lg:text-[4rem] leading-[1.05] tracking-tight mb-3">
          Oops… this page is{' '}
          <span className="text-[#FA3C30] drop-shadow-[3px_3px_0_#18181A]">
            not on the menu
          </span>
        </h1>

        {/* Subtext */}
        <p className="font-body text-base md:text-lg text-[#55555A] mb-1 leading-snug">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <p className="font-body text-base md:text-lg text-[#55555A] mb-0 leading-snug font-semibold">
          Let's get you back to something delicious.
        </p>
      </motion.div>

      {/* ── 3D Scene (404) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.1, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-6xl h-[45vh] md:h-[55vh] min-h-[250px] max-h-[550px] my-2 md:my-4"
        aria-hidden="true"
      >
        <FoodScene404 initialDelay={0} />
      </motion.div>

      {/* ── Buttons ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center mb-2"
      >
        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="btn btn-primary !py-3 !px-8 !text-base md:!py-4 md:!px-10 md:!text-lg shadow-[4px_4px_0_#18181A]"
            aria-label="Go back to the EatBest homepage"
          >
            <Home size={20} />
            Back to Home
          </Link>

          <Link
            href="/menu"
            className="btn btn-ghost !py-3 !px-8 !text-base md:!py-4 md:!px-10 md:!text-lg shadow-[4px_4px_0_#18181A]"
            aria-label="Browse the EatBest food menu"
          >
            <Utensils size={20} />
            View Menu
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
