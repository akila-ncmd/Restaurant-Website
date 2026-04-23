import Blog from '@/components/Blog';
import PageBanner from '@/components/PageBanner';
import BackgroundTypography from '@/components/BackgroundTypography';
import SectionReveal from '@/components/SectionReveal';

export default function BlogPage() {
  return (
    <>
      <BackgroundTypography />

      <SectionReveal zIndex={10} activeReveal={false} buffer={100}>
        <PageBanner
          title="Our Blog"
          subtitle="Food Stories"
          breadcrumbs={[{ label: 'Blog' }]}
        />
      </SectionReveal>

      <div className="relative -mt-[100vh]" style={{ zIndex: 20 }}>
        <SectionReveal zIndex={20} sticky={false} buffer={0}>
          <Blog />
        </SectionReveal>
      </div>
    </>
  );
}

