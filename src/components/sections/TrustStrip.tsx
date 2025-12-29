import { Star, Clock, MapPin, ChefHat } from 'lucide-react';

export function TrustStrip() {
  const items = [
    { icon: Star, text: "5 Star Hygiene", sub: "Top Rating" },
    { icon: ChefHat, text: "Freshly Made", sub: "Made with Love" },
    { icon: MapPin, text: "Local Favourite", sub: "Bradley, Huddersfield" },
    { icon: Clock, text: "Fast Breakfast", sub: "Worth the wait" },
  ];

  return (
    <section className="py-12 bg-espresso text-cream border-y border-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-3">
              <div className="p-3 rounded-full bg-cream/10 text-gold">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">{item.text}</h3>
                <p className="text-sm text-cream/60">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
