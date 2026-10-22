import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { services } from '../data/services';

const consultationUrl = "https://wa.me/923249707424?text=Hello%20H-S%20Interiors%2C%20I'd%20like%20to%20book%20a%20free%20consultation.";

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-28 overflow-hidden bg-background">
      {/* Background ambient gold lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Ceiling to floor, all under one roof"
          text="False ceilings, gypsum, PVC pelling, wallpapers, custom media walls and vinyl flooring — done by our own team."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="reveal group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-b from-[#221F1D] to-[#161413] shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-[0_20px_45px_-10px_rgba(197,155,39,0.3)]"
                style={{ transitionDelay: `${idx * 70}ms` }}
              >
                {/* 4K Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Subtle dark gradient overlay to blend image into card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#221F1D] via-transparent to-black/30 opacity-90" />

                  {/* Floating Number Tag */}
                  <span className="absolute top-4 right-4 grid h-8 w-8 place-items-center rounded-full border border-cream/20 bg-black/70 font-serif text-xs font-semibold text-cream backdrop-blur-md transition-colors group-hover:border-gold group-hover:text-gold">
                    0{idx + 1}
                  </span>

                  {/* Verified Craft Tag */}
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-black/75 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-widest text-gold-soft backdrop-blur-md">
                    <Sparkles className="h-3 w-3 text-gold" /> In-House Team
                  </span>
                </div>

                {/* Content: Logo ke samne Name, aur description neechy (NO redundant footer) */}
                <div className="p-7">
                  {/* Header: Icon (Logo) and Name horizontally aligned */}
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-gold/35 bg-gold/10 text-gold shadow-sm transition-all duration-500 group-hover:scale-105 group-hover:border-gold group-hover:bg-gold group-hover:text-charcoal group-hover:shadow-[0_0_20px_rgba(197,155,39,0.5)]">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-2xl font-semibold tracking-tight text-cream transition-colors group-hover:text-gold">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description below */}
                  <p className="mt-4 font-light text-sm leading-relaxed text-cream/75">
                    {item.text}
                  </p>
                </div>

                {/* Animated Gold Line at bottom */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-gold via-gold-soft to-gold transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}

          {/* Consultation Banner Card */}
          <a
            href={consultationUrl}
            target="_blank"
            rel="noreferrer"
            className="reveal group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-r from-[#181514] via-[#24201D] to-[#181514] p-10 text-cream shadow-soft transition-all duration-500 hover:border-gold hover:shadow-[0_20px_50px_-15px_rgba(197,155,39,0.35)] md:col-span-2 lg:col-span-3"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl transition-transform duration-700 group-hover:scale-125" />
            
            <div className="relative">
              <p className="eyebrow flex items-center gap-2 text-gold-soft">
                <Sparkles className="h-3.5 w-3.5 text-gold-soft" /> Free Consultation
              </p>
              <h3 className="mt-4 font-serif text-3xl md:text-4xl text-cream">
                Not sure where to start? Let's talk with our lead designer.
              </h3>
              <p className="mt-3 max-w-2xl font-light text-cream/75 leading-relaxed">
                Get itemised estimates, material samples, and 3D layout options for your home or commercial project in Gujranwala.
              </p>
            </div>

            <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-cream/10 pt-6">
              <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gold font-medium transition-transform group-hover:translate-x-2">
                Book now on WhatsApp <ArrowRight className="h-4 w-4" />
              </span>
              <span className="text-xs uppercase tracking-widest text-cream/50">
                Response within 30 minutes
              </span>
            </div>

            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-gold via-gold-soft to-gold transition-all duration-500 group-hover:w-full" />
          </a>
        </div>
      </div>
    </section>
  );
}
