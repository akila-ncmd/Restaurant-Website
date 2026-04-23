import About from '@/components/About';
import Delivery from '@/components/Delivery';
import PageBanner from '@/components/PageBanner';
import BackgroundTypography from '@/components/BackgroundTypography';
import SectionReveal from '@/components/SectionReveal';

export default function AboutPage() {
  return (
    <>
      <BackgroundTypography />

      <SectionReveal zIndex={10} activeReveal={false} buffer={100}>
        <PageBanner
          title="About Us"
          subtitle="Our Story"
          breadcrumbs={[{ label: 'About Us' }]}
        />
      </SectionReveal>

      <div className="relative -mt-[100vh]" style={{ zIndex: 20 }}>
        <SectionReveal zIndex={20}>
          <About />
        </SectionReveal>
      </div>

      <div className="relative -mt-[100vh]" style={{ zIndex: 30 }}>
        <SectionReveal zIndex={30} sticky={false} buffer={0}>
          <Delivery />
        </SectionReveal>
      </div>
    </>
  );
}

