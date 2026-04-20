import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Preloader from '@/components/Preloader';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'EatBest – Premium Food Delivered Fresh & Fast',
  description:
    'EatBest is your premium food destination. Discover chef-crafted meals made with the finest ingredients, delivered fresh and fast — every single day.',
  keywords: ['food delivery', 'fresh food', 'restaurant', 'EatBest', 'order online', 'premium meals'],
  openGraph: {
    title: 'EatBest – Premium Food Delivered Fresh & Fast',
    description: 'Chef-crafted meals delivered fast. Fresh ingredients, bold flavors.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll>
          <Preloader />
          <Header />
          <main className="relative">{children}</main>
          <Footer />
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
