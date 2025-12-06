import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Marquee } from './Marquee';
import { Button } from './Button';

interface NavbarProps {
  onCartClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Marquee items={["Free Shipping on Orders Over ₹499", "100% Natural Ingredients", "New Festive Collection Out Now"]} />

      <nav 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/70 backdrop-blur-md border-b border-stone-100 py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-6 md:px-10 flex items-center justify-between relative">
          
          {/* Logo - Left Aligned */}
          <div className="text-2xl lg:text-4xl font-serif text-primary tracking-tighter font-medium cursor-pointer z-50 relative">
            <a href="#">kiyara.</a>
          </div>

          {/* Desktop Links - Centered (Shifted slightly left with -ml-12 for optical balance) */}
          <div className="hidden lg:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2 -ml-12">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="text-sm font-bold uppercase tracking-[0.15em] text-primary/70 hover:text-primary transition-colors hover:underline decoration-accent decoration-1 underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action - Shop on Amazon */}
          <div className="hidden lg:block">
            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="py-2.5 px-6 text-[10px] h-12 gap-1">
                Shop on Amazon <ExternalLink size={12} />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button (Visible only on mobile) */}
          <button 
            className="lg:hidden text-primary z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`fixed inset-0 z-40 transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="absolute inset-0 bg-white" /> {/* Full screen white background for clean look */}
          
          <div className="relative h-full flex flex-col justify-center items-center p-8 space-y-8">
             {NAV_LINKS.map((link, idx) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="text-4xl font-serif text-primary hover:text-accent transition-colors"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-8">
                <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" className="py-3 px-8 text-xs">
                    Shop on Amazon
                  </Button>
                </a>
              </div>

              <div className="absolute bottom-10 flex gap-6 text-sm text-gray-400 font-sans uppercase tracking-widest">
                <span>Instagram</span>
                <span>Facebook</span>
              </div>
          </div>
        </div>
      </nav>
    </>
  );
};