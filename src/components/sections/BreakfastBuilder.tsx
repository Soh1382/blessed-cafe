'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Minus, Phone, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_INFO } from '@/lib/data';

const BUILDER_ITEMS = [
  { id: 'bacon', name: 'Bacon', price: 1.20 },
  { id: 'sausage', name: 'Sausage', price: 1.20 },
  { id: 'spam', name: 'Spam', price: 1.20 },
  { id: 'hash-brown', name: 'Hash Brown', price: 0.90 },
  { id: 'egg', name: 'Egg', price: 0.90 },
  { id: 'mushroom', name: 'Mushroom', price: 0.90 },
  { id: 'beans', name: 'Beans', price: 0.90 },
  { id: 'tomatoes', name: 'Tomatoes', price: 0.90 },
  { id: 'toast', name: 'Toast', price: 0.90 },
];

export function BreakfastBuilder() {
  const [items, setItems] = useState<Record<string, number>>({});

  const updateItem = (id: string, delta: number) => {
    setItems(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const totalPrice = Object.entries(items).reduce((total, [id, count]) => {
    const item = BUILDER_ITEMS.find(i => i.id === id);
    return total + (item ? item.price * count : 0);
  }, 0);

  const hasItems = totalPrice > 0;

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-sage/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-sage font-bold tracking-widest uppercase text-sm">Your Way</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-espresso mt-2">Build Your Own Breakfast</h2>
          <p className="text-espresso/70 mt-4 max-w-xl mx-auto">
            Design your perfect plate starting from fresh ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Builder Interface */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-espresso/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BUILDER_ITEMS.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 rounded-xl bg-cream/50 hover:bg-cream transition-colors">
                  <div>
                    <span className="font-medium block text-espresso">{item.name}</span>
                    <span className="text-xs text-sage font-bold">£{item.price.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => updateItem(item.id, -1)}
                      className={cn("w-8 h-8 rounded-full flex items-center justify-center transition-colors", 
                        (items[item.id] || 0) > 0 ? "bg-espresso/10 text-espresso hover:bg-espresso hover:text-white" : "text-gray-300 cursor-not-allowed"
                      )}
                      disabled={!(items[item.id] || 0)}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-4 text-center font-bold text-espresso">{items[item.id] || 0}</span>
                    <button 
                      onClick={() => updateItem(item.id, 1)}
                      className="w-8 h-8 rounded-full bg-sage/10 text-sage hover:bg-sage hover:text-white flex items-center justify-center transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Result / CTA */}
          <div className="lg:sticky lg:top-24 bg-espresso text-cream p-8 rounded-3xl shadow-xl flex flex-col items-center text-center">
            <h3 className="font-serif text-2xl font-bold mb-6">Your Creation</h3>
            
            <div className="w-full space-y-2 mb-8 min-h-[100px] flex flex-col justify-center">
              {!hasItems ? (
                <p className="text-cream/50 italic">Add items to see the price...</p>
              ) : (
                <div className="space-y-1 w-full text-left">
                   {/* Summary List */}
                   {BUILDER_ITEMS.filter(i => (items[i.id] || 0) > 0).map(item => (
                     <div key={item.id} className="flex justify-between text-sm">
                       <span>{items[item.id]}x {item.name}</span>
                       <span>£{(items[item.id]! * item.price).toFixed(2)}</span>
                     </div>
                   ))}
                </div>
              )}
            </div>

            <div className="w-full border-t border-cream/20 pt-4 mb-8">
              <div className="flex justify-between items-end">
                <span className="text-cream/80">Estimated Total</span>
                <span className="text-4xl font-serif font-bold text-gold">£{totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <div className="w-full space-y-3">
              <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="w-full block">
                <Button variant="secondary" className="w-full gap-2">
                  <Phone className="w-4 h-4" /> Call to Order
                </Button>
              </a>
              <span className="block text-xs opacity-60">or</span>
              <Button variant="outline" className="w-full text-cream border-cream gap-2 hover:bg-cream hover:text-espresso">
                <ShoppingBag className="w-4 h-4" /> Order Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
