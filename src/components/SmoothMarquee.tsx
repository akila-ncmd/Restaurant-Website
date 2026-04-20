'use client';
import { useRef, useEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue
} from 'framer-motion';
/**
 * Helper function to wrap a value between a range.
 * This replaces the @motionone/utils dependency to fix the "Module not found" error.
 */
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface MarqueeProps {
  children: React.ReactNode;
  baseVelocity: number;
  className?: string;
}

function MarqueeContent({ children, baseVelocity = 100, className = "" }: MarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * We repeat the child 4 times, so we wrap between -50% and -25%
   * to create a perfect seamless loop.
   */
  const x = useTransform(baseX, (v) => `${wrap(-50, -25, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll based on scroll speed
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the content so it fills the screen
   */
  return (
    <div className={`overflow-hidden whitespace-nowrap flex flex-nowrap ${className}`}>
      <motion.div className="flex whitespace-nowrap flex-nowrap" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function SmoothMarquee({ children, baseVelocity = 5, className = "" }: MarqueeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const velocity = isHovered ? baseVelocity * 0.2 : baseVelocity;
  const smoothBaseVelocity = useSpring(velocity, { damping: 20, stiffness: 100 });
  
  // We use state to track the actual velocity value for the MarqueeContent
  const [currentVelocity, setCurrentVelocity] = useState(baseVelocity);

  useEffect(() => {
    return smoothBaseVelocity.on("change", (latest) => {
      setCurrentVelocity(latest);
    });
  }, [smoothBaseVelocity]);

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Edge Fades for smoothness */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-inherit to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-inherit to-transparent z-10 pointer-events-none" />
      
      <MarqueeContent baseVelocity={currentVelocity} className={className}>
        {children}
      </MarqueeContent>
    </div>
  );
}
