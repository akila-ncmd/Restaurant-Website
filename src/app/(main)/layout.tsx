import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Preloader from '@/components/Preloader';
import SmoothScroll from '@/components/SmoothScroll';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <Preloader />
      <Header />
      <main className="relative">{children}</main>
      <Footer />
      <BackToTop />
    </SmoothScroll>
  );
}
