import React from 'react';
import { Ruler, Wallet, Gem, Clock } from 'lucide-react';
import ProgressiveImage from './ProgressiveImage';

const values = [
  {
    icon: Ruler,
    title: 'Tailored Designs',
    text: 'Every space is drawn from scratch for you — never a template.'
  },
  {
    icon: Wallet,
    title: 'Transparent Budgeting',
    text: 'Itemised quotes with no hidden costs or surprises.'
  },
  {
    icon: Gem,
    title: 'Premium Craftsmanship',
    text: 'Hand-picked materials and skilled in-house craftsmen.'
  },
  {
    icon: Clock,
    title: 'On-Time Execution',
    text: 'Clear timelines, managed daily, delivered as promised.'
  }
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image with overlay badge */}
          <div className="reveal relative">
            <ProgressiveImage
              src="/images/work-7.jpg"
              alt="H-S Interiors Craftsmanship"
              aspectRatio="aspect-[4/3]"
              containerClassName="rounded-2xl border border-border shadow-soft"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-8 -right-4 rounded-2xl border border-border bg-white p-7 text-foreground shadow-xl md:-right-8">
              <p className="font-serif text-4xl text-gold font-bold">100%</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                In-house team &amp; finishing
              </p>
            </div>
          </div>

          {/* Text content */}
          <div className="reveal">
            <p className="eyebrow mb-3">About Us</p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
              Crafted in Gujranwala, admired across Pakistan
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              H-S Interiors is a premier interior design and build studio rooted in Javed Sheet Market, Gondlanwala Road. We combine architectural thinking with hands-on craftsmanship — from precision sheet work and custom joinery to complete turnkey renovations across DHA Gujranwala, DC Colony, Citi Housing, Model Town, Satellite Town, and Garden Town.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our promise is simple: spaces that feel calm, considered and unmistakably yours.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="reveal rounded-2xl border border-border border-t-2 border-t-gold bg-[#FAFAF8] p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft"
                style={{ transitionDelay: `${idx * 70}ms` }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#FAF6EA] text-gold mb-6 border border-[#E8D9A8]">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-foreground font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
