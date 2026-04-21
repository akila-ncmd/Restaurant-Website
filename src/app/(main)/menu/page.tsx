import Menu from '@/components/Menu';
import PageBanner from '@/components/PageBanner';

export default function MenuPage() {
  return (
    <>
      <PageBanner
        title="Food Menu"
        subtitle="Delicious Foods"
        breadcrumbs={[{ label: 'Our Menu' }]}
      />
      <Menu />
    </>
  );
}
