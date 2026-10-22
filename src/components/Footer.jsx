import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { Logo } from './Navbar';

const navLinks = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['Portfolio', '#portfolio'],
  ['About Us', '#about'],
  ['Reviews', '#reviews'],
  ['Contact', '#contact']
];

const phone = '+92 324 9707424';
const phoneTel = 'tel:+923249707424';
const whatsappUrl = 'https://wa.me/923249707424';
const address = 'Javiad Sheet Market, Gondlanwala Rd, near 1 Minaar Wali Masjid, Mohalla Noor Bawa, Gujranwala, 52250';

export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 pt-20 pb-10 text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        {/* Brand */}
        <div>
          <Logo light={true} />
          <p className="mt-6 max-w-xs text-sm font-light text-cream/60">
            Timeless interiors for homes and businesses across Pakistan.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="eyebrow mb-5">Quick Links</p>
          <ul className="space-y-2 text-sm font-light text-cream/80">
            {navLinks.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="hover:text-gold transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <p className="eyebrow mb-5">Contact</p>
          <ul className="space-y-3 text-sm font-light text-cream/80">
            <li>{address}</li>
            <li>
              <a href={phoneTel} className="hover:text-gold transition-colors">
                {phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold transition-colors"
              >
                WhatsApp: {phone}
              </a>
            </li>
            <li>Open daily until 10:00 PM</li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-16 max-w-7xl border-t border-cream/10 pt-8 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} H-S Interiors. All rights reserved.
      </p>
    </footer>
  );
}
