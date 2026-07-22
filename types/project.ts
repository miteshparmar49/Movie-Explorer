export type ProjectCategory =
  | "All"
  | "Website"
  | "Ecommerce"
  | "Web App"
  | "Mobile App"
  | "UI/UX"
  | "WordPress"
  | "Neto by Maropost"
  |"Shopify";

export interface ProjectStat {
  label: string;
  value: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  caseStudyUrl?: string;
  featured?: boolean;
  client?: string;
  industry?: string;
  timeline?: string;
  stats?: ProjectStat[];
  results?: string[];
  gradient?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface CounterStat {
  value: number;
  suffix: string;
  label: string;
}
