'use client';

import Image from 'next/image';
import { Heart, Coffee, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-cream">
      {/* Hero */}
      <div className="container mx-auto px-4 md:px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
             <span className="text-sage font-bold tracking-widest uppercase text-sm">Our Story</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-espresso">More Than Just a Cafe</h1>
            <p className="text-lg text-espresso/80 mb-6 leading-relaxed">
              Forever Blessed Cafe began with a simple mission: to bring warmth, community, and delicious homemade food to Bradley. We believe that a great day starts with a great breakfast.
            </p>
            <p className="text-lg text-espresso/80 leading-relaxed">
              Located at 1 Brooks Yard, we are a proud local business dedicated to serving our neighbors. Whether you&apos;re grabbing a quick coffee before work or settling in for a lazy Sunday brunch (well, maybe not Sunday as we&apos;re closed!), we want you to feel right at home.
            </p>
          </div>
          <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
            <Image
              src="/images/cafe_interior_cozy_1767036443035.png"
              alt="Cafe Interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center text-sage mb-6">
                 <Heart className="w-8 h-8" />
               </div>
               <h3 className="font-serif text-2xl font-bold mb-3 text-espresso">Made with Love</h3>
               <p className="text-espresso/70">Every sandwich, every coffee, and every breakfast is prepared with care and attention to detail.</p>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-6">
                 <ShieldCheck className="w-8 h-8" />
               </div>
               <h3 className="font-serif text-2xl font-bold mb-3 text-espresso">Quality Ingredients</h3>
               <p className="text-espresso/70">We source the best local ingredients to ensure freshness and flavor in every bite.</p>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 bg-espresso/10 rounded-full flex items-center justify-center text-espresso mb-6">
                 <Coffee className="w-8 h-8" />
               </div>
               <h3 className="font-serif text-2xl font-bold mb-3 text-espresso">Community First</h3>
               <p className="text-espresso/70">We love our regulars and efficient service with a smile is our guarantee.</p>
             </div>
           </div>
        </div>
      </div>

      {/* Team / Kitchen */}
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-21/9">
          <Image
            src="/images/made_fresh_hands_1767036520754.png"
            alt="Preparing food fresh"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-espresso/80 via-transparent to-transparent flex items-center p-8 md:p-16">
            <div className="max-w-lg text-cream">
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Freshness You Can Taste</h2>
              <p className="text-lg opacity-90">
                Our kitchen is the heart of Forever Blessed. We don&apos;t cut corners - we cook everything fresh to order, just the way you like it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
