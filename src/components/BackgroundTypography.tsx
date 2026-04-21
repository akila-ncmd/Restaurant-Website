'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function BackgroundTypography() {
  const { scrollY } = useScroll();

  // Create smooth scroll-linked movements for horizontal marquees
  // The slow multipliers ensure a premium, buttery-smooth parallax feel
  const x1 = useTransform(scrollY, (v) => `${(v * -0.05)}vw`);
  const x2 = useTransform(scrollY, (v) => `${(v * 0.08) - 50}vw`);
  const x3 = useTransform(scrollY, (v) => `${(v * -0.06)}vw`);
  
  // Vertical column movement
  const yColumn = useTransform(scrollY, (v) => `${v * -0.1}px`);

  const repeatedText1 = "EAT BEST • DELISH • YUMMY • EAT BEST • DELISH • YUMMY • EAT BEST • DELISH • YUMMY • ";
  const repeatedText2 = "TASTY • FRESH • CRISPY • TASTY • FRESH • CRISPY • TASTY • FRESH • CRISPY • ";

  return (
    <div className="fixed inset-0 z-[9990] pointer-events-none overflow-hidden mix-blend-overlay opacity-30 select-none">
      
      {/* ── Subtitle Horizontal Marquees ── */}
      <div className="absolute inset-0 flex flex-col justify-between py-[15vh]">
        <motion.div 
          style={{ x: x1, WebkitTextStroke: '2px rgba(24, 24, 26, 0.4)' }} 
          className="whitespace-nowrap font-heading text-[10vw] md:text-[8vw] uppercase tracking-widest text-transparent"
        >
          {repeatedText1}{repeatedText1}
        </motion.div>

        <motion.div 
          style={{ x: x2, WebkitTextStroke: '2px rgba(24, 24, 26, 0.4)' }} 
          className="whitespace-nowrap font-heading text-[10vw] md:text-[8vw] uppercase tracking-widest text-transparent"
        >
          {repeatedText2}{repeatedText2}
        </motion.div>

        <motion.div 
          style={{ x: x3, WebkitTextStroke: '2px rgba(24, 24, 26, 0.4)' }} 
          className="whitespace-nowrap font-heading text-[10vw] md:text-[8vw] uppercase tracking-widest text-transparent"
        >
          {repeatedText1}{repeatedText1}
        </motion.div>
      </div>

      {/* ── Massive Vertical Typography ── */}
      <motion.div 
        style={{ y: yColumn, WebkitTextStroke: '3px rgba(24, 24, 26, 0.2)' }}
        className="absolute top-0 right-[5%] flex flex-col opacity-60 text-transparent"
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="font-heading text-[15vw] md:text-[12vw] leading-[0.8] uppercase" style={{ writingMode: 'vertical-rl' }}>
            EAT BEST
          </div>
        ))}
      </motion.div>

    </div>
  );
}
