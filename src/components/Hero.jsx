import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, MapPin } from 'lucide-react';

const heroImages = [
  '/images/work-3.jpg',
  '/images/work-12.jpg',
  '/images/work-9.jpg'
];

const whatsappUrl = "https://wa.me/923249707424";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[640px] overflow-hidden bg-charcoal">
      {/* Ultra-Fast Optimized Background Slides */}
      {heroImages.map((src, idx) => {
        const basePath = src.replace(/\.(jpg|jpeg)$/i, '');
        const isFirst = idx === 0;
        return (
          <picture key={src}>
            <source type="image/webp" srcSet={`${basePath}.webp`} />
            <img
              src={src}
              alt="Luxury interior by H-S Interiors"
              width={1920}
              height={1080}
              loading={isFirst ? 'eager' : 'lazy'}
              fetchpriority={isFirst ? 'high' : 'auto'}
              decoding={isFirst ? 'sync' : 'async'}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${
                idx === currentSlide ? 'animate-kenburns opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            />
          </picture>
        );
      })}

      {/* Dual High-Contrast Cinematic Scrims for 100% text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#12100F] via-transparent to-black/50 z-10 pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
        {/* Eyebrow Pill */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold-soft backdrop-blur-md font-medium shadow-lg">
            <MapPin className="h-3.5 w-3.5 text-gold-soft" /> Gujranwala · Pakistan
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] md:text-7xl lg:text-8xl">
          Transforming Spaces into{' '}
          <em className="font-normal italic text-gold-soft drop-shadow-[0_2px_12px_rgba(197,155,39,0.5)]">
            Timeless Luxury
          </em>
        </h1>

        {/* Description: High-contrast, crystal-clear and visible over all 3 images */}
        <div className="mt-8 max-w-2xl rounded-2xl border border-white/15 bg-black/50 p-5 sm:p-6 backdrop-blur-md shadow-2xl">
          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-[#FAF7F2] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            Bespoke residential and commercial interiors — designed, crafted and delivered by our studio in Gujranwala for clients across Pakistan.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-3 rounded-xl bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#12100F] transition-all hover:bg-gold-soft hover:shadow-[0_0_25px_rgba(197,155,39,0.5)]"
          >
            View Portfolio{' '}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-white/40 bg-black/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-charcoal shadow-lg"
          >
            <MessageCircle className="h-4 w-4 text-gold-soft" /> Chat on WhatsApp
          </a>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-6 flex gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-12 bg-gold shadow-md' : 'w-6 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
