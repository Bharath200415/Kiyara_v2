import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../constants';
import { Button } from './Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { RevealText } from './FadeIn';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); // Slower slide time to enjoy the animation
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];
  const headingParts = slide.heading.split('\n');

  return (
    <section className="relative w-full h-[90vh] bg-offwhite p-2 md:p-4 pb-0">
      <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-primary">
        {/* Images with Ken Burns Effect */}
        {HERO_SLIDES.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className={`w-full h-full ${index === currentSlide ? 'scale-110' : 'scale-100'} transition-transform duration-[10000ms] ease-linear origin-center`}>
               <img 
                 src={s.image} 
                 alt={s.heading.replace('\n', ' ')} 
                 className="w-full h-full object-cover"
               />
            </div>
            {/* Grain Overlay for Texture */}
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay opacity-50 pointer-events-none"></div>
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        ))}

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-16 md:pb-28 px-6 md:px-16">
          <div className="max-w-5xl">
            <div className="flex items-center gap-2 mb-8 animate-[fadeIn_0.8s_ease-out]">
               <span className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 shadow-lg">
                 <Sparkles size={14} className="text-accent" />
                 {slide.subheading}
               </span>
            </div>
            
            <div className="mb-10 overflow-hidden">
                {/* We use a key to force re-render of reveal text on slide change */}
                <h1 key={currentSlide} className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[0.9] tracking-tighter">
                  <RevealText delay={100} className="pb-2">{headingParts[0]}</RevealText>
                  <RevealText delay={200} className="text-accent/90 italic pb-4">{headingParts[1] || ''}</RevealText>
                </h1>
            </div>
            
            <div className="animate-[fadeIn_0.8s_ease-out_400ms_both]">
              <Button variant="white" className="group rounded-full px-10 py-5 text-sm">
                {slide.cta} 
                <span className="inline-block transition-transform group-hover:translate-x-1 duration-300 ml-2">
                    <ArrowRight size={18} />
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Custom Progress Navigation */}
        <div className="absolute bottom-10 right-10 z-30 flex gap-4">
          {HERO_SLIDES.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group relative h-1 md:h-2 w-16 md:w-24 rounded-full overflow-hidden bg-white/20 transition-all hover:h-3"
            >
              <div 
                className={`absolute left-0 top-0 h-full bg-accent transition-all duration-[6000ms] ease-linear ${
                  index === currentSlide ? 'w-full' : 'w-0'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};