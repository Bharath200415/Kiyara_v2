import React from 'react';
import { RevealText, FadeIn } from './FadeIn';
import { Parallax } from './Parallax';

// Custom SVG Illustrations for that "Handcrafted/Organic" look
const BotanicalBranch: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 300C100 300 100 200 100 150C100 100 160 50 180 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M100 250C70 240 40 230 20 200" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M100 200C130 190 160 180 180 150" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M100 150C70 140 50 120 40 90" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M100 100C120 90 140 70 150 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="180" cy="20" r="3" fill="currentColor" />
    <circle cx="20" cy="200" r="3" fill="currentColor" />
    <circle cx="180" cy="150" r="3" fill="currentColor" />
    <circle cx="40" cy="90" r="3" fill="currentColor" />
  </svg>
);

const OliveBranch: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 180C50 150 100 100 150 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <ellipse cx="60" cy="140" rx="15" ry="8" transform="rotate(-45 60 140)" stroke="currentColor" strokeWidth="1.5"/>
    <ellipse cx="90" cy="170" rx="15" ry="8" transform="rotate(-45 90 170)" stroke="currentColor" strokeWidth="1.5"/>
    <ellipse cx="100" cy="100" rx="15" ry="8" transform="rotate(-45 100 100)" stroke="currentColor" strokeWidth="1.5"/>
    <ellipse cx="130" cy="130" rx="15" ry="8" transform="rotate(-45 130 130)" stroke="currentColor" strokeWidth="1.5"/>
    <ellipse cx="140" cy="60" rx="15" ry="8" transform="rotate(-45 140 60)" stroke="currentColor" strokeWidth="1.5"/>
    <ellipse cx="170" cy="90" rx="15" ry="8" transform="rotate(-45 170 90)" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const AbstractShape: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.3,-41.2C83.5,-26.8,87.7,-11.7,85.1,2.4C82.5,16.5,73.1,29.6,63.1,40.7C53.1,51.8,42.5,60.9,30.6,67.6C18.7,74.3,5.5,78.6,-7.1,77.7C-19.7,76.8,-32.1,70.7,-43.3,63.1C-54.5,55.5,-64.5,46.4,-72.1,35.2C-79.7,24,-84.9,10.7,-83.8,-2.1C-82.7,-14.9,-75.3,-27.2,-65.7,-37.2C-56.1,-47.2,-44.3,-54.9,-32.2,-62.4C-20.1,-69.9,-7.7,-77.2,5.2,-78.3C18.1,-79.4,32.5,-83.3,45.7,-76.3Z" transform="translate(100 100)" />
  </svg>
);

const LavenderSprig: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 200V50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M50 50L40 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M50 60L60 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M50 70L35 60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M50 80L65 70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M50 90L35 80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M50 100L65 90" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M50 110L35 100" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M50 120L65 110" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <ellipse cx="40" cy="40" rx="3" ry="5" fill="currentColor"/>
    <ellipse cx="60" cy="50" rx="3" ry="5" fill="currentColor"/>
    <ellipse cx="35" cy="60" rx="3" ry="5" fill="currentColor"/>
    <ellipse cx="65" cy="70" rx="3" ry="5" fill="currentColor"/>
    <ellipse cx="35" cy="80" rx="3" ry="5" fill="currentColor"/>
    <ellipse cx="65" cy="90" rx="3" ry="5" fill="currentColor"/>
    <ellipse cx="50" cy="30" rx="4" ry="6" fill="currentColor"/>
  </svg>
);

const EucalyptusBranch: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 200Q40 100 50 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="35" cy="160" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="65" cy="130" r="12" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="30" cy="100" r="11" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="70" cy="70" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="35" cy="40" r="8" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="50" cy="20" r="6" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="pt-20 md:pt-32 pb-10 bg-white px-6 relative overflow-hidden">
      
      {/* Background Illustrations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Blur Gradient */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl mix-blend-multiply" />
        
        {/* Top Left Botanical */}
        <div className="absolute -top-20 -left-10 md:left-10 text-secondary/20 opacity-60">
           <Parallax offset={30} className="w-64 h-96 md:w-96 md:h-[500px]">
             <BotanicalBranch className="w-full h-full" />
           </Parallax>
        </div>

        {/* New Eucalyptus (Top Rightish) */}
        <div className="absolute top-[10%] right-[15%] md:right-[20%] text-primary/15 opacity-40">
           <Parallax offset={-25} className="w-24 h-48 md:w-32 md:h-64 rotate-12">
             <EucalyptusBranch className="w-full h-full" />
           </Parallax>
        </div>

        {/* Bottom Right Botanical */}
        <div className="absolute bottom-0 right-0 md:right-20 text-primary/10 opacity-50">
           <Parallax offset={-40} className="w-48 h-48 md:w-80 md:h-80">
             <OliveBranch className="w-full h-full" />
           </Parallax>
        </div>

        {/* New Lavender (Bottom Left) */}
        <div className="absolute bottom-[10%] left-[5%] text-secondary/15 opacity-50">
           <Parallax offset={20} className="w-20 h-40 md:w-28 md:h-56 -rotate-12">
             <LavenderSprig className="w-full h-full" />
           </Parallax>
        </div>

         {/* Abstract Shape Middle */}
         <div className="absolute top-1/2 right-10 md:right-1/4 text-accent/5">
           <Parallax offset={20} className="w-64 h-64">
             <AbstractShape className="w-full h-full" />
           </Parallax>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <FadeIn className="mb-12">
             <span className="inline-block border border-primary/20 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary/60 bg-white/50 backdrop-blur-sm">
               Est. 2008
             </span>
          </FadeIn>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-primary leading-[1.15] md:leading-[1.1] tracking-tight mb-16 max-w-4xl mx-auto">
            <span className="block mb-2 text-gray-400 italic text-2xl md:text-3xl font-sans font-light tracking-normal">From the founder, Kiran Dutt</span>
            
            <RevealText delay={100} className="inline-block mr-3">Kiyara is dedicated to</RevealText> 
            <RevealText delay={200} className="inline-block mr-3">crafting <span className="italic text-secondary font-serif">herbal</span> and</RevealText>
            <RevealText delay={300} className="inline-block mr-3">Ayurvedic cosmetics that are</RevealText>
            <RevealText delay={400} className="inline-block mr-3">free from harmful chemicals</RevealText>
            <RevealText delay={500} className="inline-block">and cruelty-free.</RevealText>
          </h2>

          <div className="flex flex-col md:flex-row gap-12 items-start text-left max-w-4xl mx-auto mt-7 mb-5">
            <div className="flex-1">
               <FadeIn delay={600}>
                  <p className="text-lg mt-7 md:text-xl text-primary/80 font-light leading-relaxed">
                    With a vision rooted in harmony with nature, our sustainable and affordable products empower health- and eco-conscious individuals to embrace beauty that’s kind to both skin and planet.
                  </p>
               </FadeIn>
            </div>
            <div className="flex-1 border-l border-primary/20 pl-8">
               <FadeIn delay={800}>
                  <p className="text-md font-bold uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    Our Promise
                  </p>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                    We believe in transparency and tradition. Every jar, bottle, and bar is a testament to the healing power of nature, designed to bring out your inner radiance without compromising on ethics.
                  </p>
               </FadeIn>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};