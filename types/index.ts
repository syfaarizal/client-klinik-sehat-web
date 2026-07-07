export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  productCount: number;
}

export interface BaseProduct {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  highlights: string[];
  badge?: string;
}

export interface Doctor extends BaseProduct {
  specialization: string;
  schedule: string;
}

export interface Service extends BaseProduct {
  duration?: string;
}

export type Product = Doctor | Service;

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  message: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Promo {
  id: string;
  title: string;
  highlight: string;
  description: string;
  discountLabel: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
}

export interface CompanySocial {
  platform: string;
  href: string;
  icon: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  operationalHours: string;
  socials: CompanySocial[];
  paymentMethods: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
  featured: boolean;
}

export interface NavChild {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavChild[];
}
