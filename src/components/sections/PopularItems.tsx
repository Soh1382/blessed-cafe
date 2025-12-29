'use client';

import { MENU_ITEMS } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const POPULAR_IDS = [
  'small-breakfast',
  'large-breakfast',
  'mega-breakfast',
  'vegetarian-breakfast',
  'bacon-sandwich',
  'hot-beef-onion'
];

export function PopularItems() {
  const popularItems = MENU_ITEMS.filter(item => POPULAR_IDS.includes(item.id));

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-sage font-bold tracking-widest uppercase text-sm">Local Favourites</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-espresso mt-2 mb-4">Popular Choices</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-cream rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-espresso/5 hover:border-sage/30 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl font-bold text-espresso group-hover:text-sage transition-colors">{item.name}</h3>
                  <span className="font-bold text-lg text-gold">£{item.price.toFixed(2)}</span>
                </div>
                <div className="w-full h-px bg-espresso/10 mb-4"></div>
                <p className="text-espresso/70 mb-6">{item.description || "Freshly made to order."}</p>
              </div>
              <Button variant="outline" size="sm" className="w-full hover:bg-espresso hover:text-white hover:border-espresso transition-colors duration-200 border-espresso text-espresso font-semibold tracking-wide">
                Add to Order
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/menu">
            <Button variant="primary" size="lg" className="px-10">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
