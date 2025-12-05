import React from 'react';
import { Sprout, ShieldCheck, Heart, Gem, Smile, Globe } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { Parallax } from './Parallax';

// Decorative background SVGs
const OrganicShape: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M41.7,-68.6C54.4,-63.9,65.5,-55,73.4,-44.1C81.3,-33.2,86,-20.3,84.4,-7.9C82.8,4.5,74.9,16.4,66.3,27.3C57.7,38.2,48.4,48.1,37.3,55.9C26.2,63.7,13.1,69.4,0.4,68.7C-12.3,68,-24.5,60.9,-36.8,53.8C-49.1,46.7,-61.4,39.6,-69.3,29.1C-77.2,18.6,-80.7,4.7,-78.4,-8.1C-76.1,-20.9,-68,-32.6,-58.3,-42.6C-48.6,-52.6,-37.3,-60.9,-25.6,-66.2C-13.9,-71.5,0,-73.8,13.2,-72.4C26.4,-71,39,-69,41.7,-68.6Z" transform="translate(100 100)" />
</svg>
);

const LeafSimple: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 90C50 90 50 20 50 10" />
    <path d="M50 30C70 20 80 40 50 60" />
    <path d="M50 40C30 30 20 50 50 70" />
    <path d="M50 20C65 15 70 25 50 35" />
    <path d="M50 25C35 20 30 30 50 40" />
  </svg>
);

export const BrandValues: React.FC = () => {
  const values = [
    { 
      icon: <Sprout size={24} />, 
      title: "Real Ingredients", 
      desc: "Crafted with real herbal ingredients, essential oils and extracts like coconut, sesame, and jojoba." 
    },
    { 
      icon: <ShieldCheck size={24} />, 
      title: "Pure & Safe", 
      desc: "Free from harmful chemicals, parabens, sulphates, animal fats. pH Balanced." 
    },
    { 
      icon: <Heart size={24} />, 
      title: "Cruelty-Free", 
      desc: "Cruelty-free, with no animal testing. We love our furry friends." 
    },
    { 
      icon: <Gem size={24} />, 
      title: "Handcrafted", 
      desc: "Handmade in small batches under strict quality control ensuring potency." 
    },
    { 
      icon: <Smile size={24} />, 
      title: "For All Skin Types", 
      desc: "Formulated to be safe and effective for all skin types, including sensitive skin." 
    },
    { 
      icon: <Globe size={24} />, 
      title: "Eco-Friendly", 
      desc: "Eco-friendly, sustainable care for skin and planet with conscious packaging." 
    }
  ];

  return (
    <section className="pt-10 pb-24 bg-white relative overflow-hidden">
      {/* Background Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Parallax offset={40} className="absolute top-0 left-[-5%] w-96 h-96 text-secondary/5 opacity-60">
           <OrganicShape className="w-full h-full" />
        </Parallax>
        
        <Parallax offset={-40} className="absolute bottom-[-10%] right-[-5%] w-[30rem] h-[30rem] text-primary/5 opacity-50">
           <OrganicShape className="w-full h-full rotate-90" />
        </Parallax>

        <Parallax offset={20} className="absolute top-[20%] right-[10%] w-32 h-32 text-accent/10">
           <LeafSimple className="w-full h-full" />
        </Parallax>
        
        <Parallax offset={-20} className="absolute bottom-[20%] left-[10%] w-40 h-40 text-secondary/10">
           <LeafSimple className="w-full h-full -scale-x-100" />
        </Parallax>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-primary leading-none mb-6">
            Consciously <span className="italic text-accent">Crafted.</span>
          </h2>
          <p className="max-w-xl text-gray-500 text-lg">
            We honor nature's wisdom with formulations that are pure, potent, and proven.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 100} className="h-full">
              <div className="bg-[#f9f9f7]/80 backdrop-blur-sm p-8 rounded-[2rem] h-full hover:bg-primary hover:text-white transition-all duration-500 group cursor-default flex flex-col items-start border border-transparent hover:border-primary/10 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden">
                {/* Subtle gradient blob on card hover */}
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm relative z-10">
                  {item.icon}
                </div>
                <h4 className="text-xl font-serif mb-3 relative z-10">{item.title}</h4>
                <p className="text-sm opacity-70 leading-relaxed font-light group-hover:opacity-90 relative z-10">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};