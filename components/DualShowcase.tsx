import React, { useRef, useState, useEffect } from 'react';
import { DUAL_FEATURES } from '../constants';
import { Button } from './Button';

export const DualShowcase: React.FC = () => {
  return (
    <section className="py-6 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {DUAL_FEATURES.map((feature, idx) => (
           <FeaturePanel key={feature.title} feature={feature} index={idx} />
        ))}
      </div>
    </section>
  );
};

const FeaturePanel: React.FC<{ feature: typeof DUAL_FEATURES[0], index: number }> = ({ feature, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.3 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className="relative h-[80vh] overflow-hidden group rounded-3xl"
      style={{
        clipPath: isVisible ? 'inset(0 0 0 0)' : 'inset(10% 10% 10% 10%)',
        opacity: isVisible ? 1 : 0.5,
        transition: 'clip-path 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease-out'
      }}
    >
      <img 
        src={feature.image} 
        alt={feature.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] scale-110 group-hover:scale-100"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
           <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/80 mb-4 block">Collection 0{index + 1}</span>
           <h3 className="text-5xl md:text-7xl font-serif text-white mb-4 leading-none">{feature.title}</h3>
           <p className="text-white/90 mb-10 text-lg max-w-sm mx-auto font-light">{feature.description}</p>
           <Button variant="white" className="rounded-full px-10 hover:scale-105 transition-transform">
             {feature.cta}
           </Button>
        </div>
      </div>
    </div>
  );
};