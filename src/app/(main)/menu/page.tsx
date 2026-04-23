import Menu from '@/components/Menu';
import PageBanner from '@/components/PageBanner';
import BackgroundTypography from '@/components/BackgroundTypography';
import SectionReveal from '@/components/SectionReveal';

export default function MenuPage() {
  return (
    <>
      <BackgroundTypography />

      <SectionReveal zIndex={10} activeReveal={false} buffer={100}>
        <PageBanner
          title="Food Menu"
          subtitle="Delicious Foods"
          breadcrumbs={[{ label: 'Our Menu' }]}
        />
      </SectionReveal>

      <div className="relative -mt-[100vh]" style={{ zIndex: 20 }}>
        <SectionReveal zIndex={20} sticky={false} buffer={0}>
          <Menu />
        </SectionReveal>
      </div>
    </>
  );
}

