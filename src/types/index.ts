export type Locale = 'ar' | 'he' | 'en';

export type Direction = 'rtl' | 'ltr';

export interface ServiceItem {
  slug: string;
  icon: string;
  image: string;
}

export interface Project {
  slug: string;
  title: { ar: string; he: string; en: string };
  category: ProjectCategory;
  description: { ar: string; he: string; en: string };
  images: string[];
  materials: string[];
  isDemo: boolean;
}

export type ProjectCategory = 'kitchens' | 'bedrooms' | 'wardrobes' | 'doors' | 'furniture' | 'commercial';

export interface Material {
  slug: string;
  name: { ar: string; he: string; en: string };
  description: { ar: string; he: string; en: string };
  characteristics: { ar: string; he: string; en: string };
  applications: { ar: string; he: string; en: string };
  finishes: { ar: string; he: string; en: string };
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: { ar: string; he: string; en: string };
  project: { ar: string; he: string; en: string };
  isDemo: boolean;
}

export interface BlogPost {
  slug: string;
  title: { ar: string; he: string; en: string };
  excerpt: { ar: string; he: string; en: string };
  content: { ar: string; he: string; en: string };
  category: string;
  author: string;
  date: string;
  image: string;
  isDemo: boolean;
}

export interface FAQItem {
  id: string;
  category: string;
  question: { ar: string; he: string; en: string };
  answer: { ar: string; he: string; en: string };
}

export interface ProcessStep {
  number: string;
  title: { ar: string; he: string; en: string };
  description: { ar: string; he: string; en: string };
  icon: string;
}

export interface QuoteRequest {
  id?: string;
  full_name: string;
  phone: string;
  whatsapp: string;
  email: string;
  project_type: string;
  location: string;
  dimensions: string;
  budget: string;
  completion_date: string;
  notes: string;
  created_at?: string;
  status?: QuoteStatus;
}

export type QuoteStatus = 'NEW' | 'REVIEWING' | 'CONTACTED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';

export interface ContactMessage {
  id?: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
}
