'use client';

import Hero from '@/components/Hero';
import Promo from '@/components/Promo';
import Menu from '@/components/Menu';
import Banners from '@/components/Banners';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Delivery from '@/components/Delivery';
import SectionReveal from '@/components/SectionReveal';
import BackgroundTypography from '@/components/BackgroundTypography';

export default function Home() {
  return (
    <>
      <BackgroundTypography />

      <SectionReveal zIndex={10} activeReveal={false} buffer={100}>
        <Hero />
      </SectionReveal>

      <div className="relative -mt-[100vh]" style={{ zIndex: 20 }}>
        <SectionReveal zIndex={20}>
          <Promo />
        </SectionReveal>
      </div>

      {/* 
        Menu folds backwards smoothly. Buffer of 60vh provides a balanced, fluid transition.
      */}
      <SectionReveal zIndex={30} viewMode="fold" buffer={60}>
        <Menu />
      </SectionReveal>

      {/* 
        Banners slides OVER Menu immediately as it folds. 
        The -mt-[60vh] matches the buffer to ensure it starts sliding instantly.
      */}
      <div className="relative -mt-[60vh]" style={{ zIndex: 40 }}>
        <SectionReveal zIndex={40}>
          <Banners />
        </SectionReveal>
      </div>

      {/* 
        Testimonials gracefully flips backwards smoothly. 
        Buffer of 100vh keeps it pinned while the next section slides over.
      */}
      <SectionReveal zIndex={50} viewMode="flip" buffer={100}>
        <Testimonials />
      </SectionReveal>

      {/* 
        Blog slides OVER Testimonials immediately. 
        The -100vh margin cancels the buffer's physical gap 
        and turns it into an overlap window.
      */}
      <div className="relative -mt-[100vh]" style={{ zIndex: 60 }}>
        <SectionReveal zIndex={60} viewMode="zoom" buffer={100}>
          <Blog />
        </SectionReveal>
      </div>

      <div className="relative -mt-[100vh]" style={{ zIndex: 120 }}>
        <SectionReveal zIndex={120} sticky={false} buffer={0}>
          <Delivery />
        </SectionReveal>
      </div>
    </>
  );
}
