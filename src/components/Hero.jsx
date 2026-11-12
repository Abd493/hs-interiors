import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle, MapPin, ShieldCheck, Ruler, Clock, Sparkles } from 'lucide-react';

const heroImages = [
  '/images/hero-slide-1.jpg',
  '/images/hero-slide-2.jpg',
  '/images/hero-slide-3.jpg'
];

const trustItems = [
  { icon: Sparkles, label: 'In-House Craftsmanship' },
  { icon: Ruler, label: 'Free On-Site Measurements' },
  { icon: Clock, label: 'On-Time Turnkey Delivery' },
  { icon: ShieldCheck, label: 'Trusted Across Gujranwala' }
];

const whatsappUrl = "https://wa.me/923249707424";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesReady, setSlidesReady] = useState(false);

  useEffect(() => {
    // Lazy-mount extra background slides after initial Hero paint so first screen loads instantly
    const preloadTimer = setTimeout(() => setSlidesReady(true), 1200);
    const timer = setInterval(() => {
      setSlidesReady(true);
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 6000);
    return () => {
      clearTimeout(preloadTimer);
      clearInterval(timer);
    };
  }, []);

  const prevSlide = () => {
    setSlidesReady(true);
    setCurrentSlide(prev => (prev - 1 + heroImages.length) % heroImages.length);
  };
  const nextSlide = () => {
    setSlidesReady(true);
    setCurrentSlide(prev => (prev + 1) % heroImages.length);
  };

  return (
    <section id="home" className="bg-white pt-[72px]">
      {/* Full-Screen 4K Background Image Slider */}
      <div className="relative h-[calc(100vh-72px)] min-h-[600px] w-full overflow-hidden bg-charcoal">
        {heroImages.map((src, idx) => {
          const isFirst = idx === 0;
          if (!isFirst && !slidesReady && idx !== currentSlide) return null;
          const basePath = src.replace(/\.(jpg|jpeg)$/i, '');
          return (
            <picture key={src}>
              <source
                type="image/webp"
                srcSet={`${basePath}-2k.webp 1920w, ${basePath}.webp 3840w`}
                sizes="100vw"
              />
              <img
                src={src}
                alt="Luxury interior by H-S Interiors Gujranwala"
                width={3840}
                height={2160}
                loading={isFirst ? 'eager' : 'lazy'}
                fetchpriority={isFirst ? 'high' : 'low'}
                decoding={isFirst ? 'sync' : 'async'}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${
                  idx === currentSlide ? 'animate-kenburns opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              />
            </picture>
          );
        })}

        {/* Clean High-Contrast Scrim for sharp typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-10 pointer-events-none" />

        {/* Hero Foreground Content */}
        <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
          {/* Clean Location Pill */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/45 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-white backdrop-blur-md font-medium shadow-md">
              <MapPin className="h-3.5 w-3.5 text-[#E5C365]" /> Gujranwala, Pakistan
            </span>
          </div>

          {/* Main Editorial Heading */}
          <h1 className="max-w-4xl font-serif text-5xl leading-[1.06] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)] md:text-7xl lg:text-8xl">
            Transforming Spaces into{' '}
            <em className="font-normal italic text-[#E5C365] drop-shadow-[0_2px_12px_rgba(197,155,39,0.45)]">
              Timeless Luxury
            </em>
          </h1>

          {/* Clean Readable Description Card */}
          <div className="mt-7 max-w-2xl rounded-2xl border border-white/15 bg-black/40 p-5 sm:p-6 backdrop-blur-md shadow-xl">
            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-[#FAF7F2]">
              Bespoke residential and commercial interiors — custom media walls, modern false ceilings, PVC pelling, imported wallpapers, LVT flooring &amp; artificial grass across Gujranwala.
            </p>
          </div>

          {/* Neat Rounded-Full Action Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal shadow-lg transition-all hover:bg-[#E5C365] hover:text-charcoal"
            >
              View Portfolio{' '}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-black/40 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md shadow-lg transition-all hover:border-white hover:bg-white hover:text-charcoal"
            >
              <MessageCircle className="h-4 w-4 text-[#E5C365]" /> Chat on WhatsApp
            </a>
          </div>

          {/* Bottom Slide Controls: Bars on left, Arrows on right */}
          <div className="absolute bottom-8 inset-x-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'w-12 bg-[#E5C365] shadow-md' : 'w-6 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous showcase"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-charcoal shadow-md transition-all hover:bg-white hover:scale-105"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next showcase"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-charcoal shadow-md transition-all hover:bg-white hover:scale-105"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Trust & Value Strip directly under Full-Bleed Hero */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-6 pb-4">
        <div className="grid grid-cols-2 gap-3 rounded-2xl border border-border bg-[#FAFAFA] px-5 py-4 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3 px-2 py-1">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white border border-border text-gold shadow-xs">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
