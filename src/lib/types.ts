export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderData {
  nav: NavItem[];
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
  slides: HeroSlide[];
}

export interface PromoItem {
  title: string;
  text: string;
  icon: string;
  image: string;
}

export interface PromoData {
  items: PromoItem[];
}

export interface AboutData {
  subtitle: string;
  image: string;
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
  description: string;
  items: MenuItem[];
}

export interface DeliveryData {
  description: string;
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
  subtitle: string;
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
  subtitle: string;
  description: string;
  posts: BlogPost[];
}

export interface FooterData {
  socials: { icon: string; link: string }[];
  explore: NavItem[];
  support: NavItem[];
  copyright: string;
}
