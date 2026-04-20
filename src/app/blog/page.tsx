import Blog from '@/components/Blog';
import PageBanner from '@/components/PageBanner';

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Our Blog"
        subtitle="Food Stories"
        breadcrumbs={[{ label: 'Blog' }]}
      />
      <Blog />
    </>
  );
}
