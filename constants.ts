import { Product, SlideData, Collection, FeatureBlock } from './types';
import carousel1 from './Source/carousel1.png';
import sample1 from './Source/sample1.jpg';
const shampoo = new URL('./Source/shampoo.png', import.meta.url).href;
const sample2= new URL('./Source/sample2.jpg', import.meta.url).href;
const sandalwood = new URL('./Source/sandalwood.png', import.meta.url).href;
const bodycare= new URL('./Source/bodycare_1.png', import.meta.url).href;
const skincare = new URL('./Source/skincare1.png', import.meta.url).href;
const carousel2 = new URL('./Source/carousel2.png', import.meta.url).href;
const nightskincare = new URL('./Source/nightskincare.png', import.meta.url).href;
const bodyscrub = new URL('./Source/bodyscrub.png', import.meta.url).href;
const bodylotion = new URL('./Source/bodylotion.png', import.meta.url).href;
const charcoal = new URL('./Source/charcoal.png', import.meta.url).href;
const serum = new URL('./Source/serum1.png', import.meta.url).href;

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
    image: carousel2,
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
    name: 'Kiyara Handwash with Aloevera Extract',
    category: 'Body Care',
    price: 12.00,
    image: sample1,
    rating: 5,
    amazonLink: 'https://amzn.in/d/9VzPeNP',
  },
  {
    id: '2',
    name: 'Kiyara Serum',
    category: 'Face Care',
    price: 12.00,
    image: serum,
    rating: 5,
    amazonLink: 'https://amzn.in/d/gqeq9ds',
  },
  {
    id: '3',
    name: 'Kiyara Body Lotion enriched with Aloevera Extract',
    category: 'Body Care',
    price: 32.00,
    image: bodylotion,
    rating: 4,
    amazonLink: 'https://amazon.in/',
  },
  {
    id: '4',
    name: 'Kiyara Walnut Body Scrub',
    category: 'Body Care',
    price: 68.00,
    image:bodyscrub,
    // image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=800&auto=format&fit=crop',
    rating: 5,
    isNew: true,
    amazonLink: 'https://amazon.in/',
  },
  {
    id: '5',
    name: 'Kiyara Charcoal Handmade Herbal Soap',
    category: 'Body Care',
    price: 45.00,
    image: charcoal,
    rating: 5,
    amazonLink: 'https://amazon.in/',
  },
  {
    id: '6',
    name: 'Kiyara Sandalwood Handmade Herbal Soap',
    category: 'Body Care',
    price: 28.00,
    image: sandalwood,
    rating: 4,
    amazonLink: 'https://amazon.in/',
  },
  {
    id: '7',
    name: 'Kiyara Shampoo',
    category: 'Hair Care',
    price: 38.00,
    image: shampoo,
    rating: 5,
    isNew: true,
    amazonLink: 'https://amazon.in/',
  },
  // Added dummy products to populate Body Care
  {
    id: '8',
    name: 'Kiyara Walnut Body Scrub',
    category: 'Face Care',
    price: 24.00,
    image: bodyscrub,
    rating: 4,
    amazonLink: 'https://amazon.in/',
  },
  {
    id: '9',
    name: 'Kiyara Neem & Tulsi Handmade Herbal Soap',
    category: 'Body Care',
    price: 35.00,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=800&auto=format&fit=crop',
    rating: 5,
    amazonLink: 'https://amazon.in/',
  },
  // Added dummy products to populate Hair Care
  {
    id: '10',
    name: 'Hibiscus Hair Mask',
    category: 'Hair Care',
    price: 42.00,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop',
    rating: 5,
    amazonLink: 'https://amazon.in/',
  },
   {
    id: '11',
    name: 'Amla Scalp Tonic',
    category: 'Hair Care',
    price: 29.00,
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=800&auto=format&fit=crop',
    rating: 4,
    amazonLink: 'https://amazon.in/',
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
    image: nightskincare,
    cta: 'Discover Night',
  },
];