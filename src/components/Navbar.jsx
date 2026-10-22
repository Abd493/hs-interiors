import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['Portfolio', '#portfolio'],
  ['About Us', '#about'],
  ['Reviews', '#reviews'],
  ['Contact', '#contact']
];

const consultationUrl = "https://wa.me/923249707424?text=Hello%20H-S%20Interiors%2C%20I'd%20like%20to%20book%20a%20free%20consultation.";

export function Logo({ light }) {
  return (
    <a href="#home" className="flex items-center gap-3.5 group">
      <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold/40 bg-gradient-to-br from-[#221E1B] via-[#161413] to-[#0D0B0A] shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:border-gold">
        <span className="font-serif text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FBF2D5] via-[#E5C365] to-[#C59B27]">
          HS
        </span>
      </div>
      <div className="leading-tight">
        <span className={`block font-serif text-2xl font-semibold tracking-[0.12em] transition-colors ${light ? 'text-cream' : 'text-foreground'}`}>
          H-S <span className="text-gold">INTERIORS</span>
        </span>
        <span className={`mt-0.5 block text-[0.6rem] uppercase tracking-[0.3em] ${light ? 'text-cream/70' : 'text-muted-foreground'}`}>
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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent py-6'
          : 'bg-background/95 py-3 shadow-soft backdrop-blur'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Logo light={isTransparent} />

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`text-sm tracking-wide transition-colors hover:text-gold ${
                isTransparent ? 'text-cream' : 'text-foreground'
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href={consultationUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-gold px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground transition-colors hover:bg-gold-soft"
          >
            Book Free Consultation
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          className={`lg:hidden ${isTransparent ? 'text-cream' : 'text-foreground'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav dropdown */}
      {mobileOpen && (
        <nav className="flex flex-col gap-4 border-t border-border bg-background/98 px-6 py-6 backdrop-blur lg:hidden">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-xl text-foreground hover:text-gold"
            >
              {label}
            </a>
          ))}
          <a
            href={consultationUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 bg-gold px-5 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground"
          >
            Book Free Consultation
          </a>
        </nav>
      )}
    </header>
  );
}
