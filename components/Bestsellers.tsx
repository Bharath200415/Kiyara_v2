import React, { useRef, useState } from 'react';
import { PRODUCTS } from '../constants';
import { ProductCard } from './ProductCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Bestsellers: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Face Care', 'Body Care', 'Hair Care'];

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="bestsellers" className="py-24 bg-offwhite relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
          <FadeIn className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-2">Most Loved</h2>
            <p className="text-gray-500 font-light">Our customer favorites for a reason.</p>
          </FadeIn>
          
          {/* Category Toggles - Centered on Mobile, Right on Desktop */}
          <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-gray-200/50 shadow-sm overflow-x-auto max-w-full no-scrollbar relative">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300 z-10 whitespace-nowrap outline-none focus:outline-none"
              >
                {/* Text Color Logic */}
                <span className={`relative z-10 transition-colors duration-300 ${activeCategory === cat ? 'text-white' : 'text-gray-500 hover:text-primary'}`}>
                    {cat.replace(' Care', '')}
                </span>

                {/* Animated Background Pill */}
                {activeCategory === cat && (
                  <span className="absolute inset-0 bg-primary rounded-full shadow-md -z-0 animate-[fadeIn_0.3s_cubic-bezier(0.4,0,0.2,1)]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Container with Overlay Arrows */}
        <div className="relative group/carousel">
            {/* Left Arrow Overlay */}
            <button 
              onClick={() => scroll('left')} 
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-primary shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 -ml-3 md:-ml-7 opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0 hidden md:flex"
              aria-label="Previous items"
            >
              <ArrowLeft size={24} />
            </button>

            {/* Right Arrow Overlay */}
            <button 
              onClick={() => scroll('right')} 
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-primary shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 -mr-3 md:-mr-7 opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0 hidden md:flex"
               aria-label="Next items"
            >
              <ArrowRight size={24} />
            </button>

            {/* Product Scroll List */}
            <div 
              ref={scrollContainerRef}
              className="flex space-x-6 overflow-x-auto pb-12 pt-4 px-4 -mx-4 no-scrollbar scroll-smooth"
            >
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product.id} className="min-w-[280px] md:min-w-[340px] animate-[fadeIn_0.5s_ease-out]">
                    <ProductCard product={product} />
                  </div>
                ))
              ) : (
                <div className="w-full py-20 text-center flex flex-col items-center justify-center opacity-50">
                   <div className="w-16 h-1 bg-gray-300 mb-4 rounded-full"></div>
                   <p className="text-gray-400 font-sans uppercase tracking-widest text-sm">No products found in this category.</p>
                </div>
              )}
            </div>
        </div>
      </div>
    </section>
  );
};