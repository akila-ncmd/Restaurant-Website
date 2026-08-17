'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Utensils } from 'lucide-react';

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
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FFECB3] px-4 py-4 md:px-8">
      
      {/* ── Texture Overlay (Noise & Patterns) ── */}
      <div className="absolute inset-0 noise pointer-events-none z-0" />

      {/* ── INTERACTIVE 3D SCENE (Particles are now handled inside the WebGL Canvas for true 3D depth) ── */}

      {/* ── Large Background Typography ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] select-none pointer-events-none z-0 rotate-[-12deg] flex flex-col items-center">
        <span className="font-heading text-[25vw] leading-none uppercase">LOST</span>
        <span className="font-heading text-[25vw] leading-none uppercase mt-[-5vw]">404</span>
      </div>

      {/* ── Floating Glow Blobs ── */}
      <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-circle-float pointer-events-none" style={{ opacity: 0.15 }} />
      <div className="absolute bottom-[5%] right-[0%] w-[35vw] h-[35vw] bg-circle-float pointer-events-none" style={{ animationDelay: '-5s', opacity: 0.1 }} />
      <div className="absolute top-[40%] right-[10%] w-[25vw] h-[25vw] bg-circle-float pointer-events-none" style={{ animationDelay: '-10s', filter: 'blur(100px)', background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)', opacity: 0.05 }} />

      {/* ── The "Lost Burger" Asset (Subtle) ── */}
      <motion.div
        initial={{ opacity: 0, x: 100, rotate: 20 }}
        animate={{ opacity: 0.15, x: 0, rotate: -15 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute -right-[10%] -bottom-[5%] w-[45vw] max-w-[600px] pointer-events-none select-none z-0"
      >
        <Image
          src="/lost_burger_404.png"
          alt=""
          width={600}
          height={600}
          className="w-full h-auto opacity-30 blur-[1px]"
        />
      </motion.div>

      {/* ── Subtle warm radial gradient backdrop (Layered) ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(250,60,48,0.08) 0%, rgba(255,236,179,0) 70%)',
        }}
      />

      {/* ── Grid dot pattern (very subtle) ── */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(#18181A 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── 3D Scene (404) Full Screen Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FoodScene404 initialDelay={0} />
      </div>

      {/* ── Text content ── */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mt-2 pointer-events-none px-4">
        {/* Main Heading with Word Reveal */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-5xl lg:text-[4.5rem] leading-[1.05] tracking-tight mb-4 overflow-hidden">
          {["Oops…", "this", "page", "is"].map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em]"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                type: 'spring', 
                damping: 20, 
                stiffness: 100, 
                delay: i * 0.1 
              }}
            >
              {word}
            </motion.span>
          ))}
          <br className="hidden sm:block" />
          <motion.span 
            initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ 
              type: 'spring', 
              damping: 12, 
              stiffness: 100, 
              delay: 0.6 
            }}
            className="text-[#FA3C30] drop-shadow-[6px_6px_0_#18181A] pointer-events-auto inline-block mt-2 sm:mt-0"
          >
            not on the menu
          </motion.span>
        </h1>

        {/* Subtext with Spring Drift */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ 
             type: 'spring', 
             damping: 25, 
             stiffness: 80, 
             delay: 0.8 
           }}
        >
          <p className="font-body text-base md:text-xl text-[#18181A]/70 mb-2 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <p className="font-body text-base md:text-xl text-[#18181A] mb-0 leading-relaxed font-black uppercase tracking-tight">
            Let&apos;s get you back to something delicious.
          </p>
        </motion.div>
      </div>

      {/* ── Spacer for the 404 pastries ── */}
      <div className="h-[35vh] md:h-[45vh] flex items-center justify-center pointer-events-none opacity-0">
        <div className="text-9xl font-heading">404</div>
      </div>

      {/* ── Buttons with Bouncy Entrance ── */}
      <div className="relative z-10 flex flex-col items-center mb-6 px-4">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ 
              type: 'spring', 
              damping: 15, 
              stiffness: 120, 
              delay: 1.1 
            }}
          >
            <Link
              href="/"
              className="btn btn-primary !py-4 !px-10 !text-lg md:!py-5 md:!px-12 md:!text-xl"
              aria-label="Go back to the EatBest homepage"
            >
              <Home size={24} />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: 10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ 
              type: 'spring', 
              damping: 15, 
              stiffness: 120, 
              delay: 1.25 
            }}
          >
            <Link
              href="/menu"
              className="btn btn-ghost !py-4 !px-10 !text-lg md:!py-5 md:!px-12 md:!text-xl"
              aria-label="Browse the EatBest food menu"
            >
              <Utensils size={24} />
              View Menu
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
