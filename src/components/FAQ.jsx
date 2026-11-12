import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { faqs } from '../data/faqs';

const whatsappUrl = "https://wa.me/923249707424?text=Hello%20H-S%20Interiors%2C%20I%20have%20a%20question%20about%20an%20interior%20project.";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="px-6 py-24 bg-background">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Answers & Guide"
          title="Frequently Asked Questions"
          text="Everything you need to know about hiring an interior designer in Gujranwala, material options, timelines, and free on-site estimates."
        />

        <div className="reveal space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.q}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-gold/60 bg-white shadow-soft'
                    : 'border-border bg-[#FAFAF8] hover:border-gold/40 hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
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
                    <p className="px-6 pb-6 text-sm md:text-base leading-relaxed text-muted-foreground border-t border-border/60 pt-4">
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
            className="inline-flex items-center gap-3 rounded-full bg-charcoal px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-sm transition-all hover:bg-gold"
          >
            <MessageCircle className="h-4 w-4 text-[#E5C365]" /> Ask Our Lead Designer on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
