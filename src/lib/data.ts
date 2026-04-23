import type {
  HeaderData, HeroData, PromoData, AboutData, MenuData,
  DeliveryData, TestimonialData, BannerData, BlogData, FooterData
} from './types';

export const headerData: HeaderData = {
  logo: { text: 'EatBest', link: '#' },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Menu', href: '/menu' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
  ],
  cta: { text: 'Order Now' },
};

export const heroData: HeroData = {
  id: 'home',
  slides: [
    {
      id: 'burger',
      subtitle: 'Premium Choice',
      title: 'Experience The Best',
      highlightedText: 'Gourmet Burgers',
      description: 'Crafted with 100% organic beef and our secret house sauce. A true masterpiece on a brioche bun.',
      image: '/images/promo-4.png',
      accentColor: '#FA3C30',
      secondaryColor: '#FFECB3',
    },
    {
      id: 'pizza',
      subtitle: 'Italian Classic',
      title: 'Handcrafted Wood Fired',
      highlightedText: 'Cheesy Pizzas',
      description: 'Deep dish or thin crust, our pizzas are loaded with premium mozzarella and fresh farm toppings.',
      image: '/images/food-menu-3.png',
      accentColor: '#C1D544',
      secondaryColor: '#FFFFFF',
    },
    {
      id: 'chicken',
      subtitle: 'Stay Healthy',
      title: 'Sizzling Hot & Spicy',
      highlightedText: 'Fried Chicken',
      description: 'Golden, crispy, and tender. Our signature spice blend makes every bite a flavor explosion.',
      image: '/images/food-menu-1.png',
      accentColor: '#3EE0D2',
      secondaryColor: '#E0F7FA',
    }
  ],
  primaryButton: { text: 'Order Now', link: '#menu' },
  secondaryButton: { text: 'View Recipes', link: '/recipes' },
};

export const promoData: PromoData = {
  id: 'promo',
  items: [
    { title: 'Mexican Pizza', text: 'Food is any substance consumed to provide nutritional support for an organism.', icon: '/images/promo-icon-1.svg', image: '/images/promo-1.png' },
    { title: 'Soft Drinks', text: 'Food is any substance consumed to provide nutritional support for an organism.', icon: '/images/promo-icon-2.svg', image: '/images/promo-2.png' },
    { title: 'French Fry', text: 'Food is any substance consumed to provide nutritional support for an organism.', icon: '/images/promo-icon-3.svg', image: '/images/promo-3.png' },
    { title: 'Burger Kingo', text: 'Food is any substance consumed to provide nutritional support for an organism.', icon: '/images/promo-icon-4.svg', image: '/images/promo-4.png' },
  ],
};

export const aboutData: AboutData = {
  id: 'about',
  subtitle: 'About EatBest',
  title: 'We Serve Healthy & Delicious Food',
  description:
    'EatBest is committed to serving fresh, healthy, and delicious meals prepared by professional chefs using quality ingredients.',
  features: ['Fresh & Organic Ingredients', 'Experienced Professional Chefs', 'Fast & Reliable Delivery'],
  button: { text: 'Learn More', link: '#menu' },
  image: '/images/about-banner.png',
  deal: '/images/deal-shape-red.png',
};

export const menuData: MenuData = {
  id: 'menu',
  subtitle: 'Popular Dishes',
  title: 'Our Delicious Foods',
  description: 'Carefully crafted meals made with fresh ingredients and bold flavors.',
  categories: ['All', 'Pizza', 'Burger', 'Chicken'],
  items: [
    { id: 1, title: 'Fried Chicken Unlimited', category: 'Chicken', image: '/images/food-menu-1.png', price: '49.00', oldPrice: '69.00', discount: '-15%', rating: 5 },
    { id: 2, title: 'Burger King Whopper', category: 'Burger', image: '/images/food-menu-2.png', price: '29.00', oldPrice: '39.00', discount: '-10%', rating: 5 },
    { id: 3, title: 'White Castle Pizza', category: 'Pizza', image: '/images/food-menu-3.png', price: '49.00', oldPrice: '69.00', discount: '-25%', rating: 5 },
    { id: 4, title: 'Bell Burrito Supreme', category: 'Burger', image: '/images/food-menu-4.png', price: '59.00', oldPrice: '69.00', discount: '-20%', rating: 5 },
    { id: 5, title: 'Kung Pao Chicken BBQ', category: 'Chicken', image: '/images/food-menu-5.png', price: '49.00', oldPrice: '69.00', discount: '-5%', rating: 5 },
    { id: 6, title: "Wendy's Chicken", category: 'Chicken', image: '/images/food-menu-6.png', price: '49.00', oldPrice: '69.00', discount: '-15%', rating: 5 },
  ],
};

export const deliveryData: DeliveryData = {
  id: 'delivery',
  title: 'Fast Delivery, Right On Time',
  highlight: 'Every Order Matters',
  description: 'EatBest ensures your food arrives fresh, hot, and exactly when you expect it — no delays, no compromises.',
  buttonText: 'Order Now',
  imageBg: '/images/delivery-banner-bg.png',
  imageBoy: '/images/delivery-boy.svg',
};

export const testimonialData: TestimonialData = {
  id: 'testimonials',
  subtitle: 'Testimonials',
  title: 'What Our Customers Say',
  description: 'Real feedback from people who love EatBest and order with confidence.',
  items: [
    { name: 'Robert William', role: 'CEO, Kingfisher', image: '/images/avatar-1.jpg', review: 'EatBest completely changed how I order food, offering fast delivery and consistently amazing quality every single time.', rating: 5 },
    { name: 'Thomas Josef', role: 'Founder, Getforce', image: '/images/avatar-2.jpg', review: 'The food is always fresh and flavorful, making EatBest my trusted go-to platform for delicious daily meals.', rating: 5 },
    { name: 'Charles Richard', role: 'Product Manager', image: '/images/avatar-3.jpg', review: 'Excellent service, beautiful presentation, and quick delivery make EatBest a reliable choice I happily recommend to everyone.', rating: 5 },
  ],
};

export const bannerData: BannerData = {
  id: 'banners',
  items: [
    { size: 'large', image: '/images/banner-1.jpg', subtitle: 'Limited Offer', title: 'Get 50% Off Premium Burgers', text: 'Only this week on EatBest', button: 'Order Now' },
    { size: 'small', image: '/images/banner-2.jpg', title: 'Delicious Pizza', text: 'Flat 50% Off', button: 'Order Now' },
    { size: 'small', image: '/images/banner-3.jpg', title: 'American Burgers', text: 'Hot & Fresh', button: 'Order Now' },
    { size: 'medium', image: '/images/banner-4.jpg', title: 'Cheesy Pizza', text: 'Weekly Special', button: 'Order Now' },
  ],
};

export const blogData: BlogData = {
  id: 'blog',
  subtitle: 'Latest Articles',
  title: 'Food Stories & Updates',
  description: 'Discover tips, recipes, and stories from the EatBest kitchen and food experts.',
  posts: [
    { image: '/images/blog-1.jpg', category: 'Pizza', date: 'Jan 10, 2023', author: 'EatBest Team', title: 'What Makes a Perfect Cheese Pizza?', excerpt: 'From dough to toppings, discover the secrets behind a truly delicious cheese pizza.', link: '#' },
    { image: '/images/blog-2.jpg', category: 'Burger', date: 'Jan 08, 2023', author: 'EatBest Team', title: 'How We Craft Juicy Burgers Every Time', excerpt: 'Learn how EatBest prepares juicy, flavorful burgers using premium ingredients.', link: '#' },
    { image: '/images/blog-3.jpg', category: 'Chicken', date: 'Jan 05, 2023', author: 'EatBest Team', title: "Why Fresh Ingredients Are Our Best", excerpt: "Fresh ingredients make all the difference. Here's why quality matters at EatBest.", link: '#' },
  ],
};

export const footerData: FooterData = {
  brand: {
    name: 'EatBest',
    tagline: 'Fresh food. Smart choice.',
    description: 'EatBest brings you fresh, delicious meals crafted with premium ingredients. Taste quality in every bite.',
  },
  socials: [
    { icon: 'facebook', link: '#' },
    { icon: 'instagram', link: '#' },
    { icon: 'twitter', link: '#' },
  ],
  explore: [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  support: ['Help Center', 'Terms & Conditions', 'Privacy Policy', 'Contact Support'],
  newsletter: {
    title: 'Join Our Newsletter',
    text: 'Get special offers and updates straight to your inbox.',
    button: 'Subscribe',
  },
  copyright: '© 2025 EatBest. All rights reserved.',
};
