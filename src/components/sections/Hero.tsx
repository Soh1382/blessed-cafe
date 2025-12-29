'use client';

import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_breakfast_platter_1767036359601.png"
          alt="Delicious breakfast platter"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-espresso/40 bg-blend-overlay" />
        <div className="absolute inset-0 bg-linear-to-t from-espresso/80 via-transparent to-espresso/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-cream mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
            Breakfast, coffee & fresh sandwiches <br className="hidden md:block" />
            <span className="italic text-gold">made with love</span> in Huddersfield.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl font-medium mb-10 tracking-wide uppercase text-cream/90"
        >
          Eat in • Takeaway • Delivery
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/order">
            <Button size="lg" variant="sage" className="w-full sm:w-auto min-w-[180px] shadow-xl hover:scale-105 transition-transform">
              Order Online
            </Button>
          </Link>
          <a href="tel:07513200565">
            <Button size="lg" variant="outline" className="w-full sm:w-auto min-w-[180px] border-cream text-cream hover:bg-cream hover:text-espresso backdrop-blur-sm">
              Call 07513 200565
            </Button>
          </a>
          <a href="https://maps.google.com/?q=1+Brooks+Yard+Bradley+Huddersfield" target="_blank" rel="noreferrer">
             <Button size="lg" variant="ghost" className="w-full sm:w-auto text-cream hover:bg-cream/10 border border-transparent underline-offset-4 hover:underline">
              Get Directions
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
