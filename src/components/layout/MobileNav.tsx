'use client';

import { Phone, MapPin, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function MobileNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 lg:hidden transition-transform duration-300 pb-safe",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex justify-around items-center p-3">
        <a 
          href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} 
          className="flex flex-col items-center gap-1 text-espresso/70 hover:text-espresso"
        >
          <div className="p-2 rounded-full bg-cream">
            <Phone className="h-5 w-5" />
          </div>
          <span className="text-[10px] font-medium uppercase tracking-wider">Call</span>
        </a>

        <a 
          href={BUSINESS_INFO.links.maps}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 text-espresso/70 hover:text-espresso"
        >
          <div className="p-2 rounded-full bg-cream">
            <MapPin className="h-5 w-5" />
          </div>
          <span className="text-[10px] font-medium uppercase tracking-wider">Directions</span>
        </a>

        <Link 
          href="/order"
          className="flex flex-col items-center gap-1 text-sage font-bold"
        >
          <div className="p-3 -mt-6 rounded-full bg-sage text-white shadow-lg border-4 border-white">
            <ShoppingBag className="h-6 w-6" />
          </div>
          <span className="text-[10px] uppercase tracking-wider">Order</span>
        </Link>
      </div>
    </div>
  );
}
