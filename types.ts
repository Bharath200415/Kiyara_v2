export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
  rating?: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SlideData {
  id: number;
  image: string;
  heading: string;
  subheading: string;
  cta: string;
  align: 'left' | 'center' | 'right';
}

export interface Collection {
  title: string;
  image: string;
  cta: string;
}

export interface FeatureBlock {
  title: string;
  description: string;
  image: string;
  cta: string;
}