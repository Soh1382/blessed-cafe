'use client';

import { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { Search, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // If searching, ignore category unless explicitly selected? 
    // Usually searching searches everything. Let's make search override category if query exists, OR just filter within category.
    // Let's do: if search query > 0, search ALL items. If empty, show active category.
    if (searchQuery.length > 0) {
      return matchesSearch;
    }
    return matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-20 bg-cream">
      {/* Header */}
      <div className="bg-espresso text-cream py-16 mb-8 text-center px-4">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
        <p className="max-w-xl mx-auto text-cream/80 text-lg">
          From hearty breakfasts to fresh bean coffee, everything is made with care.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        
        {/* Search */}
        <div className="max-w-md mx-auto mb-10 relative">
          <input
            type="text"
            placeholder="Search for breakfast, sandwiches, drinks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-espresso/10 focus:border-sage focus:outline-none bg-white shadow-sm transition-colors text-espresso"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-espresso/40 w-5 h-5" />
        </div>

        {/* Categories (Hidden if searching) */}
        {searchQuery.length === 0 && (
          <div className="flex overflow-x-auto gap-3 pb-6 mb-8 no-scrollbar md:justify-center px-4 md:px-0">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all",
                  activeCategory === cat 
                    ? "bg-sage text-white shadow-md" 
                    : "bg-white text-espresso/70 hover:bg-espresso/5 border border-espresso/5"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={item.id}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-espresso/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="font-bold text-lg text-espresso">{item.name}</h3>
                       <span className="font-serif font-bold text-lg text-gold whitespace-nowrap">£{item.price.toFixed(2)}</span>
                    </div>
                    {item.description && (
                      <p className="text-sm text-espresso/60 mb-4">{item.description}</p>
                    )}
                  </div>
                  
                  {/* Category tag if searching */}
                  {searchQuery.length > 0 && (
                    <span className="text-xs text-sage font-bold uppercase tracking-wider mt-2">{item.category}</span>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-espresso/50">
                <Info className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">No items found matching your search.</p>
                {activeCategory !== 'All Day Breakfast' && searchQuery.length === 0 && (
                  <p className="text-sm mt-2">Try switching categories or check back later!</p>
                )}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
