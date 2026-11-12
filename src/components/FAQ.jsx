import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { faqs } from '../data/faqs';

const whatsappUrl = "https://wa.me/923249707424?text=Hello%20H-S%20Interiors%2C%20I%20have%20a%20question%20about%20an%20interior%20project.";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="px-6 py-28 bg-secondary/40 border-t border-border/50">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Answers & Guide"
          title="Frequently Asked Questions"
          text="Everything you need to know about hiring an interior designer in Gujranwala, material options, timelines, and free on-site estimates."
        />

        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.q}
                className={`reveal rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-gold/50 bg-card shadow-[0_10px_30px_-10px_rgba(197,155,39,0.2)]'
                    : 'border-border bg-card/60 hover:border-gold/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground">
                    {item.q}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Always keep answer in DOM for Search & AI crawlers (AEO/GEO) */}
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm md:text-base font-light leading-relaxed text-muted-foreground border-t border-border/40 pt-4">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-12 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-gold/40 bg-gold/10 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-[#12100F]"
          >
            <MessageCircle className="h-4 w-4" /> Ask Our Lead Designer on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
