import Link from 'next/link';
import { Facebook, Instagram, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-espresso text-cream pt-16 pb-24 lg:pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-3xl font-bold">Forever Blessed</h3>
            <p className="text-cream/80 max-w-xs">
              Fresh breakfast, hot coffee, and warm smiles. Served daily in the heart of Huddersfield.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-cream/10 rounded-full hover:bg-sage transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-cream/10 rounded-full hover:bg-sage transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold">Explore</h4>
            <ul className="space-y-3">
              {['Home', 'Menu', 'Gallery', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-') === 'home' ? '' : item.toLowerCase().replace(' ', '-')}`} className="text-cream/70 hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-cream/80">
                <MapPin className="h-5 w-5 shrink-0 text-sage" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-cream/80">
                <Phone className="h-5 w-5 shrink-0 text-sage" />
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Trust */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold">Opening Hours</h4>
            <ul className="space-y-2 text-cream/80">
              <li className="flex justify-between">
                <span>Mon – Fri</span>
                <span>{BUSINESS_INFO.hours.mon_fri}</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-sage font-medium">{BUSINESS_INFO.hours.sat}</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-sage font-medium">{BUSINESS_INFO.hours.sun}</span>
              </li>
            </ul>
            
            <div className="mt-8 p-4 bg-cream text-espresso rounded-xl flex items-center justify-between">
              <span className="font-bold text-sm">Food Hygiene<br/>Rating</span>
              <span className="font-serif text-3xl font-black text-sage">{BUSINESS_INFO.rating}</span>
            </div>
          </div>

        </div>
        
        <div className="border-t border-cream/10 mt-16 pt-8 text-center text-cream/40 text-sm">
          <p>© {new Date().getFullYear()} Forever Blessed Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
