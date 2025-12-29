import { Hero } from '@/components/sections/Hero';
import { PopularItems } from '@/components/sections/PopularItems';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { BreakfastBuilder } from '@/components/sections/BreakfastBuilder';
import { LocationTeaser } from '@/components/sections/LocationTeaser';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustStrip />
      <PopularItems />
      <BreakfastBuilder />
      <LocationTeaser />
    </div>
  );
}
