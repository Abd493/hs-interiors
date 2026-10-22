import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { services } from '../data/services';

const consultationUrl = "https://wa.me/923249707424?text=Hello%20H-S%20Interiors%2C%20I'd%20like%20to%20book%20a%20free%20consultation.";

export default function ServicesOriginal() {
  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Ceiling to floor, all under one roof"
          text="False ceilings, gypsum, PVC pelling, wallpapers, custom media walls and vinyl flooring — done by our own team."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="reveal group relative overflow-hidden border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-gold"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="relative p-8">
                  <span className="absolute right-8 top-6 font-serif text-5xl text-muted font-light select-none">
                    0{idx + 1}
                  </span>
                  <Icon className="h-9 w-9 text-gold" strokeWidth={1.2} />
                  <h3 className="mt-6 font-serif text-2xl">{item.title}</h3>
                  <p className="mt-3 font-light text-muted-foreground">{item.text}</p>
                </div>
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}

          {/* Free consultation banner card spanning columns */}
          <a
            href={consultationUrl}
            target="_blank"
            rel="noreferrer"
            className="reveal flex flex-col justify-between bg-charcoal p-10 text-cream shadow-soft transition-colors hover:bg-primary md:col-span-2 lg:col-span-3"
          >
            <div>
              <p className="eyebrow">Free Consultation</p>
              <h3 className="mt-6 font-serif text-3xl">Not sure where to start? Let's talk.</h3>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gold">
              Book now <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
