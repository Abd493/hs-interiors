import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews } from '../data/reviews';

export default function Reviews() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = reviews[currentIdx];

  return (
    <section id="reviews" className="bg-charcoal px-6 py-28 text-cream">
      <div className="mx-auto max-w-4xl text-center">
        <p className="eyebrow mb-4">Client Reviews</p>

        {/* 5 Stars */}
        <div className="mb-8 flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-gold text-gold" />
          ))}
        </div>

        {/* Testimonial Quote */}
        <blockquote
          key={currentIdx}
          className="font-serif text-3xl italic leading-snug md:text-4xl transition-opacity duration-700"
        >
          “{current.text}”
        </blockquote>

        <p className="mt-8 text-sm uppercase tracking-[0.2em]">{current.name}</p>
        <p className="mt-1 text-sm font-light text-cream/60">{current.place}</p>

        {/* Navigation Arrows & Progress Bars */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={() =>
              setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length)
            }
            aria-label="Previous review"
            className="grid h-11 w-11 place-items-center rounded-full border border-cream/30 transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <span
                key={idx}
                className={`h-[2px] transition-all duration-300 ${
                  idx === currentIdx ? 'w-8 bg-gold' : 'w-4 bg-cream/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentIdx((prev) => (prev + 1) % reviews.length)}
            aria-label="Next review"
            className="grid h-11 w-11 place-items-center rounded-full border border-cream/30 transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
