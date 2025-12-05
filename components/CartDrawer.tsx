import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Button } from './Button';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 max-w-md w-full bg-white z-[70] shadow-2xl transform transition-transform duration-500 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-primary" />
            <h2 className="text-xl font-serif text-primary">Your Cart</h2>
            <span className="text-sm text-gray-500">(2 items)</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {/* Mock Cart Item 1 */}
          <div className="flex gap-4 mb-6">
            <div className="w-20 h-24 bg-gray-100 flex-shrink-0">
               <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Product" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className="font-serif text-primary">Saffron Glow Elixir</h4>
                <span className="text-sm font-medium">$85.00</span>
              </div>
              <p className="text-xs text-gray-500 mb-3">30ml / 1.0 fl oz</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-300">
                  <button className="px-2 py-1 hover:bg-gray-100"><Minus size={12} /></button>
                  <span className="px-2 text-sm">1</span>
                  <button className="px-2 py-1 hover:bg-gray-100"><Plus size={12} /></button>
                </div>
                <button className="text-xs text-gray-400 hover:text-red-500 underline">Remove</button>
              </div>
            </div>
          </div>

           {/* Mock Cart Item 2 */}
           <div className="flex gap-4 mb-6">
            <div className="w-20 h-24 bg-gray-100 flex-shrink-0">
               <img src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Product" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className="font-serif text-primary">Rose Mist</h4>
                <span className="text-sm font-medium">$32.00</span>
              </div>
              <p className="text-xs text-gray-500 mb-3">100ml / 3.4 fl oz</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-300">
                  <button className="px-2 py-1 hover:bg-gray-100"><Minus size={12} /></button>
                  <span className="px-2 text-sm">1</span>
                  <button className="px-2 py-1 hover:bg-gray-100"><Plus size={12} /></button>
                </div>
                <button className="text-xs text-gray-400 hover:text-red-500 underline">Remove</button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t bg-offwhite">
          <div className="flex justify-between mb-4 text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-bold text-lg">$117.00</span>
          </div>
          <p className="text-xs text-gray-500 mb-6 text-center">Shipping & taxes calculated at checkout.</p>
          <Button fullWidth onClick={onClose}>Checkout Now</Button>
          <div className="mt-4 text-center">
             <span className="text-xs text-gray-500">Secure Checkout with Amazon Pay</span>
          </div>
        </div>
      </div>
    </>
  );
};