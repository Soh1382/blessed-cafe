'use client';

import { Button } from '@/components/ui/Button';
import { Phone, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';
import Image from 'next/image';

export default function OrderPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-cream">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-espresso">Order Online</h1>
        <p className="text-lg text-espresso/80 mb-12 max-w-2xl mx-auto">
          Get your favourite breakfast and sandwiches delivered straight to your door, or order for collection.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Collection */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-sage/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-sage text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
              FASTEST
            </div>
            <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center text-sage group-hover:bg-sage group-hover:text-white transition-colors">
              <Phone className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-2xl font-bold mb-4">Click & Collect</h2>
            <p className="text-espresso/60 mb-8">
              Call us directly to place your order and pick it up fresh from the cafe. No fees, just food.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}>
              <Button size="lg" variant="sage" className="w-full">
                Call {BUSINESS_INFO.phone}
              </Button>
            </a>
          </div>

          {/* Delivery */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-espresso/5 flex flex-col justify-center">
            <h2 className="font-serif text-2xl font-bold mb-6">Delivery Partners</h2>
            <div className="space-y-4">
              <a href={BUSINESS_INFO.links.uber_eats} target="_blank" rel="noreferrer" className="block">
                <Button variant="outline" className="w-full h-16 text-lg justify-between px-6 hover:border-green-500 hover:text-green-600 group">
                  <span>Uber Eats</span>
                  <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100" />
                </Button>
              </a>
              <a href={BUSINESS_INFO.links.just_eat} target="_blank" rel="noreferrer" className="block">
                <Button variant="outline" className="w-full h-16 text-lg justify-between px-6 hover:border-red-500 hover:text-red-600 group">
                  <span>Just Eat</span>
                  <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100" />
                </Button>
              </a>
              <a href={BUSINESS_INFO.links.too_good_to_go} target="_blank" rel="noreferrer" className="block">
                <Button variant="outline" className="w-full h-16 text-lg justify-between px-6 hover:border-teal-600 hover:text-teal-700 group">
                  <span>Too Good To Go</span>
                  <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Feature Image */}
        <div className="relative w-full aspect-21/9 rounded-3xl overflow-hidden shadow-2xl">
           <Image
            src="/images/takeaway_packaging_minimal_1767036498505.png"
            alt="Takeaway Packaging"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-espresso/60 to-transparent flex items-end justify-center pb-8">
            <p className="text-white text-xl font-bold tracking-wider uppercase">Fresh & Hot to Your Door</p>
          </div>
        </div>

      </div>
    </div>
  );
}
