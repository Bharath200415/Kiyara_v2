import React from 'react';
import { Button } from './Button';
import { FadeIn, RevealText } from './FadeIn';
import { Parallax } from './Parallax';
import { ArrowUpRight } from 'lucide-react';

export const FeaturedCollection: React.FC = () => {
  return (
    <section id="collections" className="py-10 md:py-24 px-4 bg-cream">
      <div className="container mx-auto">
        <div className="bg-[#e8ece9] rounded-[3rem] overflow-hidden p-0 relative">
          
          <div className="flex flex-col lg:flex-row min-h-[700px]">
            
            {/* Content Side */}
            <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-24 order-2 lg:order-1 relative z-10">
              <FadeIn className="max-w-xl relative w-full">
                {/* Big decorative number */}
                <div className="absolute -top-24 -left-16 text-[12rem] md:text-[15rem] font-serif text-primary/5 select-none leading-none pointer-events-none font-black">
                  01
                </div>

                <div className="flex items-center gap-3 mb-6">
                   <span className="w-12 h-[1px] bg-primary/40"></span>
                   <span className="text-primary text-xs font-bold uppercase tracking-[0.25em]">The Royal Ritual</span>
                </div>
                
                <h2 className="text-5xl md:text-8xl font-serif text-primary mb-8 leading-[0.85] tracking-tighter">
                  <RevealText>Saffron &</RevealText>
                  <RevealText delay={150} className="italic text-accent">Gold Glow</RevealText>
                </h2>
                
                <p className="text-primary/70 mb-12 leading-relaxed text-lg md:text-xl font-light relative z-10 max-w-md">
                  Ancient Kumkumadi secrets met with modern formulation. 24 precious herbs designed to illuminate your complexion.
                </p>
                
                <div className="flex gap-4">
                  <Button variant="primary" className="rounded-full px-8">Shop The Drop</Button>
                  <button className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                    <ArrowUpRight size={24} />
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Image Side with Parallax */}
            <div className="lg:w-1/2 w-full h-[500px] lg:h-auto relative order-1 lg:order-2 overflow-hidden">
               <Parallax offset={80} className="h-[120%] w-full -mt-10">
                  <img 
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?q=80&w=2574&auto=format&fit=crop" 
                    alt="Saffron Collection" 
                    className="w-full h-full object-cover"
                  />
               </Parallax>
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};