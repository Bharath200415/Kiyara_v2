import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CategoryGrid } from './components/CategoryGrid';
import { Bestsellers } from './components/Bestsellers';
import { FeaturedCollection } from './components/FeaturedCollection';
import { DualShowcase } from './components/DualShowcase';
import { BrandValues } from './components/BrandValues';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { Button } from './components/Button';
import { FadeIn } from './components/FadeIn';
const gifting = new URL('./Source/gifting.png', import.meta.url).href;

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="antialiased text-gray-900 bg-white">
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <AboutSection />
        <BrandValues />
        <CategoryGrid />
        <Bestsellers />
        <FeaturedCollection />
        <DualShowcase />
        
        {/* Gift Section - Gen Z Poster Style */}
        <section id="gifting" className="py-4 px-2 md:px-4">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-accent h-[600px] flex items-center justify-center text-center">
            {/* Background Texture/Image */}
            <div className="absolute inset-0">
               <img src={gifting} className="w-full h-full object-cover opacity-80 mix-blend-multiply" alt="" />
               <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
            </div>

            <div className="relative z-10 px-6 max-w-3xl">
               <FadeIn>
                <span className="inline-block bg-white text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  Limited Edition
                </span>
                <h2 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-none">
                  The Art of <br/><span className="italic">Gifting.</span>
                </h2>
                <p className="text-white text-lg md:text-xl font-light mb-10 max-w-xl mx-auto leading-relaxed">
                  Curated boxes of nature's finest treasures. Wrapped in sustainable luxury.
                </p>
                <Button variant="white" className="min-w-[200px]">Shop Gift Sets</Button>
               </FadeIn>
            </div>
          </div>
        </section>

        
      </main>

      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default App;