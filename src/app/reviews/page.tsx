'use client';

import { Star, MessageSquareQuote } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const REVIEWS = [
  {
    name: "Sarah Jenkins",
    date: "2 weeks ago",
    rating: 5,
    text: "Absolutely stunning little cafe! The breakfast was hot, fresh, and the portion sizes were generous. The coffee is easily the best in Bradley. Will definitely be returning!",
  },
  {
    name: "Mark Thompson",
    date: "1 month ago",
    rating: 5,
    text: "Great atmosphere and friendly staff. Had the Mega Breakfast and it kept me going all day. Highly recommend for anyone looking for proper food.",
  },
  {
    name: "Emma Louise",
    date: "3 weeks ago",
    rating: 5,
    text: "Build your own breakfast option is brilliant. Love that I can picky exactly what I want. Hash browns were perfectly crispy.",
  },
  {
    name: "David Wilson",
    date: "2 months ago",
    rating: 4,
    text: "Lovely spot. Service was a bit busy but the staff were smiling throughout. Sandwich was delicious.",
  },
  {
    name: "Jade Williams",
    date: "1 week ago",
    rating: 5,
    text: "My new regular spot. The decor is beautiful and the food matches it. 10/10.",
  },
  {
    name: "Chris P.",
    date: "3 weeks ago",
    rating: 5,
    text: "Fast service, clean tables, and amazing bacon butties. Can't ask for more.",
  },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-cream">
      <div className="bg-espresso text-cream py-16 mb-8 text-center px-4">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h1>
        <p className="max-w-xl mx-auto text-cream/80 text-lg">
          See what our lovely customers have to say about us.
        </p>
        <div className="flex justify-center gap-1 mt-6 text-gold">
          {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-8 h-8 fill-current" />)}
        </div>
        <p className="mt-2 font-bold text-xl">5.0 / 5.0 Average</p>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-espresso/5 flex flex-col h-full relative">
              <MessageSquareQuote className="absolute top-6 right-6 text-sage/20 w-10 h-10" />
              <div className="flex gap-1 text-gold mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-espresso/80 mb-6 italic grow">&quot;{review.text}&quot;</p>
              <div className="mt-auto pt-4 border-t border-espresso/5">
                <p className="font-bold text-espresso">{review.name}</p>
                <p className="text-xs text-espresso/40">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-white p-10 rounded-3xl border border-dashed border-espresso/20 max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl font-bold mb-4 text-espresso">Have you visited us recently?</h2>
          <p className="text-espresso/70 mb-6">We&apos;d love to hear your feedback! Please leave us a review on Google.</p>
          <a href="#" target="_blank" rel="noreferrer"> {/* Placeholder for Google Review Link */}
            <Button size="lg" variant="secondary">
              Leave a Review
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
