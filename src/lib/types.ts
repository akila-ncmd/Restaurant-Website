export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderData {
  logo: { text: string; link: string };
  nav: NavItem[];
  cta: { text: string };
}

export interface HeroSlide {
  id: string;
  subtitle: string;
  title: string;
  highlightedText: string;
  description: string;
  image: string;
  accentColor: string;
  secondaryColor: string;
}

export interface HeroData {
  id: string;
  slides: HeroSlide[];
  primaryButton: { text: string; link: string };
  secondaryButton: { text: string; link: string };
}

export interface PromoItem {
  title: string;
  text: string;
  icon: string;
  image: string;
}

export interface PromoData {
  id: string;
  items: PromoItem[];
}

export interface AboutData {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  features: string[];
  button: { text: string; link: string };
  image: string;
  deal: string;
}

export interface MenuItem {
  id: number;
  title: string;
  category: string;
  image: string;
  price: string;
  oldPrice: string;
  discount: string;
  rating: number;
}

export interface MenuData {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  categories: string[];
  items: MenuItem[];
}

export interface DeliveryData {
  id: string;
  title: string;
  highlight: string;
  description: string;
  buttonText: string;
  imageBg: string;
  imageBoy: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
}

export interface TestimonialData {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  items: TestimonialItem[];
}

export interface BannerItem {
  size: 'large' | 'medium' | 'small';
  image: string;
  subtitle?: string;
  title: string;
  text: string;
  button: string;
}

export interface BannerData {
  id: string;
  items: BannerItem[];
}

export interface BlogPost {
  image: string;
  category: string;
  date: string;
  author: string;
  title: string;
  excerpt: string;
  link: string;
}

export interface BlogData {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  posts: BlogPost[];
}

export interface FooterData {
  brand: { name: string; tagline: string; description: string };
  socials: { icon: string; link: string }[];
  explore: { label: string; href: string }[];
  support: string[];
  newsletter: { title: string; text: string; button: string };
  copyright: string;
}
