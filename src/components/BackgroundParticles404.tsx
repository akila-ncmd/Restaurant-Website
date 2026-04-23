'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

const PARTICLE_COLORS = ['#FA3C30', '#C1D544', '#3EE0D2', '#18181A'];

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  type: 'circle' | 'pill' | 'star';
  blur: number;
  depth: number; // 0 (far) to 1 (near)
}

export default function BackgroundParticles404() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement for parallax
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Generate constant set of particles on client
    const p: Particle[] = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 4,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
      type: Math.random() > 0.8 ? (Math.random() > 0.5 ? 'star' : 'pill') : 'circle',
      blur: i % 10 === 0 ? Math.random() * 4 + 2 : 0, // 1 in 10 are blurred (foreground/background depth)
      depth: Math.random(),
    }));
    setParticles(p);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <ParticleItem 
          key={p.id} 
          particle={p} 
          mouseX={smoothMouseX} 
          mouseY={smoothMouseY} 
        />
      ))}
    </div>
  );
}

function ParticleItem({ 
  particle, 
  mouseX, 
  mouseY 
}: { 
  particle: Particle; 
  mouseX: any; 
  mouseY: any; 
}) {
  // Parallax shift based on depth: Nearer particles (depth ~ 1) move MORE with the mouse
  const parallaxX = useTransform(mouseX, [0, 2000], [particle.depth * 50, particle.depth * -50]);
  const parallaxY = useTransform(mouseY, [0, 1200], [particle.depth * 50, particle.depth * -50]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: particle.blur > 0 ? 0.4 : 0.8,
        scale: 1,
        x: [
          `${particle.x}vw`, 
          `${particle.x + (Math.random() * 4 - 2)}vw`, 
          `${particle.x}vw`
        ],
        y: [
          `${particle.y}vh`, 
          `${particle.y + (Math.random() * 4 - 2)}vh`, 
          `${particle.y}vh`
        ],
      }}
      transition={{
        opacity: { duration: 1 },
        x: { duration: particle.duration, repeat: Infinity, ease: 'linear', delay: particle.delay },
        y: { duration: particle.duration, repeat: Infinity, ease: 'linear', delay: particle.delay },
      }}
      style={{
        position: 'absolute',
        left: parallaxX,
        top: parallaxY,
        width: particle.size,
        height: particle.type === 'pill' ? particle.size * 2.5 : particle.size,
        borderRadius: particle.type === 'pill' ? '999px' : '50%',
        backgroundColor: particle.type === 'star' ? 'transparent' : particle.color,
        filter: particle.blur > 0 ? `blur(${particle.blur}px)` : 'none',
        zIndex: Math.floor(particle.depth * 10),
        transform: `rotate(${particle.id * 45}deg)`,
        clipPath: particle.type === 'star' 
          ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' 
          : 'none',
        boxShadow: particle.type === 'star' ? `0 0 10px ${particle.color}` : 'none',
        border: particle.type === 'star' ? `1px solid ${particle.color}` : 'none',
      }}
    >
      {particle.type === 'star' && (
        <div className="w-full h-full" style={{ backgroundColor: particle.color, opacity: 0.8 }} />
      )}
    </motion.div>
  );
}
