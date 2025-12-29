'use client';

import Link from 'next/link';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { BUSINESS_INFO } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Order Online', href: '/order' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || mobileMenuOpen ? 'bg-cream/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className={cn(
            "font-serif text-2xl md:text-3xl font-bold tracking-tight leading-none transition-colors",
            isScrolled || mobileMenuOpen ? "text-espresso" : "text-cream"
          )}>
            Forever Blessed
          </span>
          <span className={cn(
            "text-xs uppercase tracking-[0.15em] font-semibold transition-colors",
            isScrolled || mobileMenuOpen ? "text-sage" : "text-cream/80"
          )}>
            Cafe & Breakfast
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 ml-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors uppercase tracking-wide",
                isScrolled ? "text-espresso/80 hover:text-sage" : "text-cream/90 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6 ml-8">
          <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}>
            <Button 
              variant="outline" 
              size="sm" 
              className={cn(
                "gap-2 transition-colors",
                !isScrolled ? "border-cream text-cream hover:bg-cream hover:text-espresso hover:border-cream" : ""
              )}
            >
              <Phone className="h-4 w-4" />
              Call
            </Button>
          </a>
          <Link href="/order">
            <Button variant="sage" className="gap-2 shadow-lg hover:shadow-xl transition-shadow px-8">
              <ShoppingBag className="h-4 w-4" />
              Order Online
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 transition-colors",
            isScrolled || mobileMenuOpen ? "text-espresso" : "text-cream"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-full left-0 right-0 bg-cream border-t border-espresso/10 shadow-lg lg:hidden"
          >
            <div className="p-6 flex flex-col gap-4 items-center text-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl font-serif font-medium text-espresso hover:text-sage"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-espresso/10 w-full my-2"></div>
              <Link href="/order" onClick={() => setMobileMenuOpen(false)} className="w-full">
                <Button variant="sage" className="w-full justify-center">Order Online</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
