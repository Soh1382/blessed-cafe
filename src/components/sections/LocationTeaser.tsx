import { Button } from '@/components/ui/Button';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { BUSINESS_INFO } from '@/lib/data';

export function LocationTeaser() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sage font-bold tracking-widest uppercase text-sm">Find Us</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-espresso mt-2 mb-6">In the heart of Bradley</h2>
            <p className="text-lg text-espresso/80 mb-8 leading-relaxed">
              We're located at <strong>1 Brooks Yard</strong>, serving the Bradley community with fresh food and great coffee. Come say hello!
            </p>
            
            <div className="flex items-start gap-4 mb-8 p-6 bg-cream rounded-2xl border border-espresso/5">
              <div className="p-3 bg-white rounded-full shadow-sm text-sage">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-espresso mb-1">Address</h4>
                <p className="text-espresso/70">{BUSINESS_INFO.address}</p>
              </div>
            </div>

            <a href={BUSINESS_INFO.links.maps} target="_blank" rel="noreferrer">
              <Button size="lg" variant="primary">
                Get Directions
              </Button>
            </a>
          </div>

          <div className="relative aspect-video md:aspect-square bg-cream rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
             <Image
              src="/images/location_illustration_1767036534002.png"
              alt="Location Illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
