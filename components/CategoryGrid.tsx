import React from 'react';
import { CATEGORIES } from '../constants';
import { FadeIn, RevealText } from './FadeIn';
import { ArrowUpRight } from 'lucide-react';

export const CategoryGrid: React.FC = () => {
  return (
    <section id="shop" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 px-2 text-center md:text-left">
          <div className="mb-5 md:mb-0">
             <RevealText className="flex justify-center md:justify-start">
               <h2 className="text-5xl md:text-7xl font-serif text-primary tracking-tight leading-none">Curated</h2>
             </RevealText>
             <RevealText delay={100} className="flex justify-center md:justify-start">
               {/* Added pb-4 to allow space for descenders like 'g' */}
               <h2 className="text-5xl md:text-7xl font-serif text-primary tracking-tight italic text-secondary leading-tight pb-4">Categories.</h2>
             </RevealText>
          </div>
          <span className="hidden md:block text-sm font-bold uppercase tracking-widest text-gray-400 border-l border-gray-300 pl-6 h-12 flex items-center">
             Botanical Solutions <br/> For Every Need
          </span>
        </div>

        {/* Modern Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-auto md:h-[650px]">
          
          {/* Main Large Item */}
          <FadeIn className="md:col-span-2 relative group rounded-[2.5rem] overflow-hidden h-[450px] md:h-full cursor-pointer" direction="up" duration={0.8}>
            <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Placeholder */}
            <img 
              src={CATEGORIES[0].image} 
              alt={CATEGORIES[0].title} 
              className="relative z-10 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 z-10 bg-black/10 group-hover:bg-black/20 transition-colors" />
            
            {/* Arrow Icon */}
            <div className="absolute top-8 right-8 z-20 bg-white/30 backdrop-blur-md rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-45 group-hover:rotate-0 transform translate-y-4 group-hover:translate-y-0 border border-white/20">
               <ArrowUpRight size={28} className="text-white" />
            </div>
            
            <div className="absolute bottom-0 left-0 p-8 md:p-14 z-20 max-w-lg w-full text-left">
              <h3 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-none">{CATEGORIES[0].title}</h3>
              <div className="h-[1px] w-0 group-hover:w-full bg-white/50 transition-all duration-700 mb-4"></div>
              <p className="text-white/90 text-sm md:text-base uppercase tracking-widest font-bold flex items-center gap-2">
                 Explore Collection 
                 <ArrowUpRight size={16} />
              </p>
            </div>
          </FadeIn>

          {/* Right Column Stacked */}
          <div className="flex flex-col gap-4 md:gap-6 h-full">
            {CATEGORIES.slice(1).map((cat, idx) => (
              <FadeIn key={cat.title} delay={(idx + 1) * 200} className="relative flex-1 group rounded-[2.5rem] overflow-hidden min-h-[320px] md:min-h-0 cursor-pointer" direction="left">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                
                {/* Arrow Icon and Underline (Added consistent styling) */}
                <div className="absolute top-6 right-6 z-20 bg-white/30 backdrop-blur-md rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-45 group-hover:rotate-0 transform translate-y-4 group-hover:translate-y-0 border border-white/20">
                   <ArrowUpRight size={24} className="text-white" />
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end text-left">
                   <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0 w-full">
                      <h3 className="text-3xl font-serif text-white mb-2 leading-none">{cat.title}</h3>
                      
                      {/* Underline Animation */}
                      <div className="h-[1px] w-0 group-hover:w-full bg-white/50 transition-all duration-700 mb-3"></div>
                      
                      <p className="text-white/80 text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{cat.cta}</p>
                   </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};