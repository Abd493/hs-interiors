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
    <section id="about" className="px-6 py-28 bg-background">
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
            <div className="absolute -bottom-8 -right-4 rounded-2xl border border-gold/30 bg-charcoal p-8 text-white shadow-xl md:-right-8">
              <p className="font-serif text-4xl text-gold-soft font-medium">100%</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/80">
                In-house team &amp; finishing
              </p>
            </div>
          </div>

          {/* Text content */}
          <div className="reveal">
            <p className="eyebrow mb-4">About Us</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Crafted in Gujranwala, admired across Pakistan
            </h2>
            <p className="mt-6 font-light leading-relaxed text-muted-foreground">
              H-S Interiors is a design and build studio rooted in Javiad Sheet Market. We combine architectural thinking with hands-on craftsmanship — from precision sheet work and custom joinery to complete turnkey renovations.
            </p>
            <p className="mt-4 font-light leading-relaxed text-muted-foreground">
              Our promise is simple: spaces that feel calm, considered and unmistakably yours.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-28 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="reveal rounded-2xl border border-border/80 border-t-2 border-t-gold bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-t-gold-soft"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold mb-6 border border-gold/20">
                  <Icon className="h-6 w-6" strokeWidth={1.4} />
                </div>
                <h3 className="font-serif text-2xl text-foreground font-medium">{item.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
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
