import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['Portfolio', '#portfolio'],
  ['About Us', '#about'],
  ['Reviews', '#reviews'],
  ['FAQ', '#faq'],
  ['Contact', '#contact']
];

const consultationUrl = "https://wa.me/923249707424?text=Hello%20H-S%20Interiors%2C%20I'd%20like%20to%20book%20a%20free%20consultation.";

export function Logo({ light = false }) {
  return (
    <a href="#home" className="flex items-center gap-3 group">
      <div className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-charcoal shadow-sm transition-transform duration-300 group-hover:scale-105">
        <span className="font-serif text-lg font-bold tracking-tight text-[#E5C365]">
          HS
        </span>
      </div>
      <div className="leading-tight">
        <span className={`block font-serif text-xl sm:text-2xl font-semibold tracking-[0.1em] transition-colors ${light ? 'text-white' : 'text-foreground'}`}>
          H-S <span className="text-gold">INTERIORS</span>
        </span>
        <span className={`block text-[0.58rem] uppercase tracking-[0.26em] ${light ? 'text-white/70' : 'text-muted-foreground'}`}>
          Interior Architecture &amp; Design
        </span>
      </div>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 border-b border-border/80 ${
        scrolled
          ? 'bg-white/95 py-3 shadow-sm backdrop-blur-md'
          : 'bg-white/98 py-4 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Logo light={false} />

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-gold"
            >
              {label}
            </a>
          ))}
          <a
            href={consultationUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-charcoal px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all hover:bg-gold shadow-sm"
          >
            Book Consultation
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          className="lg:hidden text-foreground p-1.5 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav dropdown */}
      {mobileOpen && (
        <nav className="flex flex-col gap-3 border-t border-border bg-white px-6 py-6 shadow-lg lg:hidden">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-xl text-foreground hover:text-gold py-1"
            >
              {label}
            </a>
          ))}
          <a
            href={consultationUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 rounded-full bg-charcoal px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white hover:bg-gold transition-colors"
          >
            Book Free Consultation
          </a>
        </nav>
      )}
    </header>
  );
}
