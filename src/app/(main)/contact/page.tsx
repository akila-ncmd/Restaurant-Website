import Contact from '@/components/Contact';
import PageBanner from '@/components/PageBanner';
import BackgroundTypography from '@/components/BackgroundTypography';
import SectionReveal from '@/components/SectionReveal';

export default function ContactPage() {
  return (
    <>
      <BackgroundTypography />

      <SectionReveal zIndex={10} activeReveal={false} buffer={100}>
        <PageBanner
          title="Contact Us"
          subtitle="Get In Touch"
          breadcrumbs={[{ label: 'Contact Us' }]}
        />
      </SectionReveal>

      <div className="relative -mt-[100vh]" style={{ zIndex: 20 }}>
        <SectionReveal zIndex={20} sticky={false} buffer={0}>
          <Contact />
        </SectionReveal>
      </div>
    </>
  );
}

