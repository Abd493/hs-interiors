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
    <section id="reviews" className="bg-[#F7F6F2] border-y border-border px-6 py-24 text-foreground">
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
          className="font-serif text-3xl italic leading-snug text-charcoal md:text-4xl transition-opacity duration-700"
        >
          “{current.text}”
        </blockquote>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal">{current.name}</p>
        <p className="mt-1 text-sm text-muted-foreground">{current.place}</p>

        {/* Navigation Arrows & Progress Bars */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={() =>
              setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length)
            }
            aria-label="Previous review"
            className="grid h-11 w-11 place-items-center rounded-full bg-white border border-border text-charcoal shadow-xs transition-all hover:border-charcoal hover:bg-charcoal hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <span
                key={idx}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  idx === currentIdx ? 'w-8 bg-charcoal' : 'w-4 bg-charcoal/20'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentIdx((prev) => (prev + 1) % reviews.length)}
            aria-label="Next review"
            className="grid h-11 w-11 place-items-center rounded-full bg-white border border-border text-charcoal shadow-xs transition-all hover:border-charcoal hover:bg-charcoal hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
