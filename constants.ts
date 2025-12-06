import { Product, SlideData, Collection, FeatureBlock } from './types';
import carousel1 from './Source/carousel1.png';
import sample1 from './Source/sample1.jpg';
import sample2 from './Source/sample2.jpg';
import sample3 from './Source/sandalw.jpg';
import bodycare from './Source/bodycare_1.png'
import skincare from './Source/skincare1.png'
const nightskincare = new URL('./Source/nightskincare.png', import.meta.url).href;

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Shop', href: '#shop' },
  { label: 'Bestsellers', href: '#bestsellers' },
  { label: 'Collections', href: '#collections' },
  { label: 'Gifting', href: '#gifting' }
,
];

export const HERO_SLIDES: SlideData[] = [
  {
    id: 1,
    image: carousel1,
    heading: 'Start your Skincare\nJourney',
    subheading: 'Limited Edition Collection',
    cta: 'Explore Now',
    align: 'left',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2680&auto=format&fit=crop',
    heading: 'Festive Season\nSpecial',
    subheading: "Nature's Gift for Radiant Skin",
    cta: 'Shop Collection',
    align: 'center',
  },
];

export const CATEGORIES: Collection[] = [
  {
    title: 'Skin Care',
    image: skincare,
    cta: 'Shop Face',
  },
  {
    title: 'Hair Care',
    image: 'https://images.unsplash.com/photo-1564141696939-9eb6e957ccfc?q=80&w=1241&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cta: 'Shop Body',
  },
  {
    title: 'Body Care',
    image: bodycare,
    cta: 'Shop Hair',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Handwash with Aloevera Extract',
    category: 'Body Care',
    price: 12.00,
    image: sample1,
    rating: 5,
  },
  {
    id: '2',
    name: 'Body Lotion enriched with Aloevera Extract',
    category: 'Body Care',
    price: 32.00,
    image: sample2,
    rating: 4,
  },
  {
    id: '3',
    name: 'Kumkumadi Night Cream',
    category: 'Face Care',
    price: 68.00,
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=800&auto=format&fit=crop',
    rating: 5,
    isNew: true,
  },
  {
    id: '4',
    name: 'Jasmine Body Oil',
    category: 'Body Care',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: '5',
    name: 'Neem Purifying Cleanser',
    category: 'Body Care',
    price: 28.00,
    image: sample3,
    rating: 4,
  },
  {
    id: '6',
    name: 'Bhringraj Hair Oil',
    category: 'Hair Care',
    price: 38.00,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=800&auto=format&fit=crop',
    rating: 5,
    isNew: true,
  },
  // Added dummy products to populate Body Care
  {
    id: '7',
    name: 'Sandalwood Body Wash',
    category: 'Body Care',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1556228720-1987635c5c03?q=80&w=800&auto=format&fit=crop',
    rating: 4,
  },
  {
    id: '8',
    name: 'Shea Butter Lotion',
    category: 'Body Care',
    price: 35.00,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=800&auto=format&fit=crop',
    rating: 5,
  },
  // Added dummy products to populate Hair Care
  {
    id: '9',
    name: 'Hibiscus Hair Mask',
    category: 'Hair Care',
    price: 42.00,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop',
    rating: 5,
  },
   {
    id: '10',
    name: 'Amla Scalp Tonic',
    category: 'Hair Care',
    price: 29.00,
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=800&auto=format&fit=crop',
    rating: 4,
  }
];

export const DUAL_FEATURES: FeatureBlock[] = [
  {
    title: 'The Light of Day',
    description: 'Fresh & Revitalizing herbal blends to awaken your skin.',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1200&auto=format&fit=crop',
    cta: 'Discover Day',
  },
  {
    title: 'The Calm of Night',
    description: 'Nourishing & Restorative formulas for deep repair.',
    image:nightskincare,
    cta: 'Discover Night',
  },
];