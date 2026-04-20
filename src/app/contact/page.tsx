import Contact from '@/components/Contact';
import PageBanner from '@/components/PageBanner';

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get In Touch"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />
      <Contact />
    </>
  );
}
