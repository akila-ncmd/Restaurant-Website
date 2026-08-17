'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface SectionRevealProps {
  children: React.ReactNode;
  sticky?: boolean;
  zIndex?: number;
  activeReveal?: boolean;
  viewMode?: 'recede' | 'zoom' | 'still' | 'flip' | 'blur' | 'fold';
  buffer?: number; // Distance to wait after content ends (in vh units)
}

export default function SectionReveal({
  children,
  sticky = true,
  zIndex = 1,
  activeReveal = true,
  viewMode = 'recede',
  buffer = 50 // Default buffer is 50vh
}: SectionRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  // Measure content and window height for precise scroll mapping
  useEffect(() => {
    const updateHeights = () => {
      if (contentRef.current) setContentHeight(contentRef.current.offsetHeight);
      setWindowHeight(window.innerHeight);
    };

    updateHeights();
    window.addEventListener('resize', updateHeights);

    // Check for height changes (e.g. images loading)
    const observer = new ResizeObserver(updateHeights);
    const content = contentRef.current;
    if (content) observer.observe(content);

    return () => {
      window.removeEventListener('resize', updateHeights);
      observer.disconnect();
    };
  }, []);

  // Total scroll distance = distance to view all content + buffer
  const scrollDistance = Math.max(contentHeight - windowHeight, 0) + (windowHeight * (buffer / 100));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apply a smooth spring for buttery-soft 3D reveals
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100, // Balanced for speed and smoothness
    damping: 30,    // High damping for a smooth, non-bouncy finish
    restDelta: 0.001
  });

  // Calculate the 'climax' point where content has finished scrolling
  const contentFinishedPoint = scrollDistance > windowHeight
    ? (contentHeight - windowHeight) / scrollDistance
    : 0;

  // 1. Move the content UP as the user scrolls
  const yTranslate = useTransform(
    scrollYProgress,
    [0, contentFinishedPoint || 0.001],
    [0, -Math.max(contentHeight - windowHeight, 0)]
  );

  // Wait until content is totally displayed at the bottom before folding
  // We use contentFinishedPoint as the baseline. If no scrolling is needed, start at 0.1
  const foldStart = Math.min(contentFinishedPoint > 0 ? contentFinishedPoint : 0.1, 0.9);

  // 2. Scale down, Zoom in, or Flip based on viewMode
  const scale = useTransform(
    smoothProgress,
    [foldStart, 1],
    viewMode === 'zoom' ? [1, 1.1] : viewMode === 'flip' ? [1, 0.92] : viewMode === 'fold' ? [1, 0.8] : viewMode === 'blur' ? [1, 0.9] : [1, 0.85]
  );
  const opacity = useTransform(
    smoothProgress,
    [foldStart, 1],
    [1, viewMode === 'flip' ? 0.4 : viewMode === 'blur' ? 0.2 : viewMode === 'fold' ? 1 : 0.7]
  );
  const overlayOpacity = useTransform(
    smoothProgress, 
    [foldStart, 1], 
    [0, viewMode === 'flip' ? 0.7 : viewMode === 'fold' ? 0 : 0.5]
  );

  // 3. 3D Flip/Fold rotation
  const rotateX = useTransform(
    smoothProgress,
    [foldStart, 1],
    viewMode === 'flip' ? [0, -15] : viewMode === 'fold' ? [0, 160] : [0, 0]
  );
  const translateZ = useTransform(
    smoothProgress,
    [foldStart, 1],
    viewMode === 'flip' ? [0, -200] : viewMode === 'fold' ? [0, -100] : [0, 0]
  );
  const filter = useTransform(
    smoothProgress,
    [foldStart, 1],
    viewMode === 'blur' ? ['blur(0px)', 'blur(30px)'] : ['blur(0px)', 'blur(0px)']
  );

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${viewMode === 'fold' ? 'bg-transparent' : 'bg-transparent'}`}
      style={{
        height: sticky ? `${scrollDistance + windowHeight}px` : 'auto',
        zIndex,
        position: 'relative'
      }}
    >
      {sticky ? (
        <div
          className="sticky top-0 h-screen w-full overflow-hidden"
          style={{ 
            position: 'sticky',
            perspective: (viewMode === 'flip' || viewMode === 'fold') ? '1200px' : 'none' 
          }}
        >
          <motion.div
            style={{
              scale: activeReveal ? scale : 1,
              opacity: activeReveal ? opacity : 1,
              rotateX: activeReveal ? rotateX : 0,
              z: activeReveal ? translateZ : 0,
              filter: activeReveal ? filter : 'none',
              transformOrigin: (viewMode === 'flip' || viewMode === 'fold') ? (viewMode === 'flip' ? 'center top' : 'center bottom') : 'center center',
            }}
            className="relative w-full h-full"
          >
            <motion.div
              ref={contentRef}
              style={{ y: yTranslate }}
              className="w-full absolute top-0 left-0"
            >
              {children}
            </motion.div>

            {/* Darkening Overlay for Depth */}
            <motion.div
              style={{ opacity: activeReveal ? overlayOpacity : 0 }}
              className="absolute inset-0 bg-black pointer-events-none z-50"
            />
          </motion.div>
        </div>
      ) : (
        <div ref={contentRef}>{children}</div>
      )}
    </div>
  );
}
