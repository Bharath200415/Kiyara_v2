import React from 'react';
import { Facebook, Instagram, Twitter, MoveRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-offwhite pt-24 pb-8 rounded-t-[2.5rem] mt-10 mx-2 md:mx-4">
      <div className="container mx-auto px-6">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-6xl md:text-8xl font-serif leading-none tracking-tighter mb-8">
              Nature's <br/> <span className="italic text-accent">Touch.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-xl font-light mb-8 max-w-md">
              Join our community for exclusive offers, skincare tips, and a 10% discount on your first order.
            </p>
            <form className="flex border-b border-white/30 pb-4 max-w-md group focus-within:border-white transition-colors">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent w-full text-white placeholder-white/40 focus:outline-none text-sm tracking-widest uppercase font-bold"
              />
              <button type="button" className="text-white hover:text-accent transition-colors">
                <MoveRight size={24} />
              </button>
            </form>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16 mb-16">
           <div>
            <h4 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">Shop</h4>
            <ul className="space-y-4 text-sm font-medium text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Face Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Body Rituals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Sets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm font-medium text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ingredients</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest text-white/40">
          <p>&copy; {new Date().getFullYear()} Kiyara Herbals</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};