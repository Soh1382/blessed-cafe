'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const GALLERY_IMAGES = [
  { src: '/images/hero_breakfast_platter_1767036359601.png', alt: 'Full Breakfast Platter', aspect: 'landscape' },
  { src: '/images/coffee_latte_art_1767036376072.png', alt: 'Latte Art', aspect: 'square' },
  { src: '/images/sandwich_breakfast_1767036393128.png', alt: 'Breakfast Sandwich', aspect: 'landscape' },
  { src: '/images/sweet_treats_assorted_1767036429123.png', alt: 'Sweet Treats', aspect: 'square' },
  { src: '/images/cafe_interior_cozy_1767036443035.png', alt: 'Cozy Interior', aspect: 'landscape' },
  { src: '/images/made_fresh_hands_1767036520754.png', alt: 'Freshly Prepared', aspect: 'landscape' },
  { src: '/images/takeaway_packaging_minimal_1767036498505.png', alt: 'Takeaway Packaging', aspect: 'square' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-cream">
      <div className="bg-espresso text-cream py-16 mb-8 text-center px-4">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
        <p className="max-w-xl mx-auto text-cream/80 text-lg">
          A glimpse into the warmth, coffee, and delicious food that awaits you.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="relative break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow border border-espresso/5"
              onClick={() => setSelectedImage(img.src)}
            >
              <div className="relative w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.aspect === 'landscape' ? 800 : 600}
                  height={img.aspect === 'landscape' ? 450 : 600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn className="text-white w-8 h-8" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-espresso/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-4 right-4 text-white hover:text-sage transition-colors">
              <X className="w-10 h-10" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] aspect-video rounded-xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Gallery Preview"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
