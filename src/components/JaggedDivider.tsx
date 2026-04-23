'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function JaggedDivider({ color = 'white', position = 'top', animate = false }: { color?: string, position?: 'top' | 'bottom', animate?: boolean }) {
  const containerRef = useRef(null);
  const rotation = position === 'bottom' ? 'rotate-180' : '';

  // Calculate horizontal parallax based on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <div 
      ref={containerRef}
      style={{ position: 'absolute' }}
      className={`absolute left-0 w-[110%] overflow-hidden leading-[0] z-30 ${position === 'top' ? '-top-[1px]' : '-bottom-[1px]'} ${rotation}`}
    >
      <motion.svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[100px] drop-shadow-[0_10px_15px_rgba(0,0,0,0.1)]"
        style={{ 
          fill: color,
          x: animate ? xTranslate : 0,
        }}
      >
        {/* Torn Paper Wrapper - Fills the TOP part, jagged edge at bottom pointing INTO the section */}
        <path d="M0,0 L1200,0 L1200,80 L1180,50 L1160,95 L1140,40 L1120,85 L1100,30 L1080,75 L1060,40 L1040,100 L1020,55 L1000,90 L980,45 L960,110 L940,60 L920,85 L900,40 L880,105 L860,65 L840,95 L820,55 L800,115 L780,70 L760,100 L740,50 L720,110 L700,65 L680,85 L660,45 L640,105 L620,60 L600,90 L580,50 L560,110 L540,70 L520,100 L500,55 L480,115 L460,70 L440,90 L420,50 L400,105 L380,60 L360,85 L340,45 L320,110 L300,65 L280,100 L260,50 L240,90 L220,40 L200,105 L180,60 L160,95 L140,50 L120,110 L100,65 L80,90 L60,45 L40,100 L20,55 L0,80 Z"></path>
      </motion.svg>
    </div>
  );
}
