import About from '@/components/About';
import Delivery from '@/components/Delivery';
import PageBanner from '@/components/PageBanner';

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Our Story"
        breadcrumbs={[{ label: 'About Us' }]}
      />
      <About />
      <Delivery />
    </>
  );
}
