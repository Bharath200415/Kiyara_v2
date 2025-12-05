import React from 'react';
import { Product } from '../types';
import { Heart, Star, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group/card relative w-full min-w-[280px] cursor-pointer">
      {/* Badge */}
      {product.isNew && (
        <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur text-primary text-[10px] uppercase font-bold px-3 py-1.5 rounded-full tracking-wider border border-primary/10 shadow-sm">
          New Arrival
        </span>
      )}

      {/* Wishlist Button - Gen Z pill style */}
      <button className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center text-primary/60 hover:text-red-500 hover:bg-white transition-all duration-300 shadow-sm opacity-0 group-hover/card:opacity-100 translate-y-2 group-hover/card:translate-y-0">
        <Heart size={18} />
      </button>

      {/* Image Container */}
      <div className="relative aspect-[3.5/5] overflow-hidden rounded-[2rem] bg-white mb-6">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/card:scale-110"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/5 transition-colors duration-300" />
        
        {/* View on Amazon Button - Appears from bottom */}
        <div className="absolute inset-x-4 bottom-4 translate-y-20 group-hover/card:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
           <a 
             href="https://www.amazon.com" 
             target="_blank" 
             rel="noopener noreferrer"
             className="w-full bg-white/90 backdrop-blur-md text-primary py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:bg-[#FF9900] hover:text-white transition-colors duration-300 group/btn"
           >
             <span className="text-xs font-bold uppercase tracking-widest">View on Amazon</span>
             <ExternalLink size={16} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
           </a>
        </div>
      </div>

      {/* Info */}
      <div className="px-2 group-hover/card:-translate-y-1 transition-transform duration-300">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-2xl text-primary leading-none group-hover/card:underline decoration-1 underline-offset-4 decoration-accent/60">
            {product.name}
          </h3>
          <span className="font-sans font-bold text-lg text-primary ml-4">${product.price}</span>
        </div>
        
        <div className="flex items-center justify-between">
           <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">{product.category}</p>
           {product.rating && (
             <div className="flex items-center gap-1">
               <Star size={12} className="fill-accent text-accent" />
               <span className="text-xs font-medium text-gray-600">{product.rating}.0</span>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};