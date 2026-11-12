import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ProgressiveImage from './ProgressiveImage';
import { services } from '../data/services';

const consultationUrl = "https://wa.me/923249707424?text=Hello%20H-S%20Interiors%2C%20I'd%20like%20to%20book%20a%20free%20consultation.";

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-24 overflow-hidden bg-background">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Ceiling to floor, all under one roof"
          text="False ceilings, gypsum, PVC pelling, wallpapers, custom media walls, vinyl flooring, and artificial grass — done by our own team."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="reveal group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-lg"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                {/* Clean Gallery Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F1F0EC]">
                  <ProgressiveImage
                    src={item.img}
                    alt={item.title}
                    containerClassName="h-full w-full"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Floating Number Tag */}
                  <span className="absolute top-3.5 right-3.5 grid h-8 w-8 place-items-center rounded-full border border-black/10 bg-white/95 font-serif text-xs font-semibold text-charcoal shadow-sm backdrop-blur-sm transition-colors group-hover:border-gold group-hover:text-gold">
                    0{idx + 1}
                  </span>

                  {/* Verified Craft Tag */}
                  <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/95 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-charcoal shadow-sm backdrop-blur-sm">
                    <Sparkles className="h-3 w-3 text-gold" /> In-House Team
                  </span>
                </div>

                {/* Clean Card Body */}
                <div className="p-7 bg-white">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[#E8D9A8] bg-[#FAF6EA] text-gold transition-all duration-300 group-hover:scale-105 group-hover:border-gold group-hover:bg-charcoal group-hover:text-[#E5C365]">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-gold">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>

                {/* Subtle Bottom Accent Line */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}

          {/* Consultation Banner Card */}
          <a
            href={consultationUrl}
            target="_blank"
            rel="noreferrer"
            className="reveal group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E5E3DB] bg-gradient-to-br from-[#F8F7F3] to-[#F1EFE7] p-10 text-foreground shadow-soft transition-all duration-300 hover:border-gold/70 hover:shadow-lg md:col-span-2 lg:col-span-2"
          >
            <div className="relative">
              <p className="eyebrow flex items-center gap-2 text-gold">
                <Sparkles className="h-3.5 w-3.5 text-gold" /> Free Consultation
              </p>
              <h3 className="mt-4 font-serif text-3xl md:text-4xl font-semibold text-foreground">
                Not sure where to start? Let&apos;s talk with our lead designer.
              </h3>
              <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                Get itemised estimates, material samples, and 3D layout options for your home or commercial project in Gujranwala.
              </p>
            </div>

            <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-xs uppercase tracking-[0.16em] text-white font-semibold transition-all group-hover:bg-gold">
                Book now on WhatsApp <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                Response within 30 minutes
              </span>
            </div>

            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
          </a>
        </div>
      </div>
    </section>
  );
}
