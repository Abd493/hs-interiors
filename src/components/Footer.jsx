import React from 'react';
import { Instagram } from 'lucide-react';
import { Logo } from './Navbar';

const navLinks = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['Portfolio', '#portfolio'],
  ['About Us', '#about'],
  ['Reviews', '#reviews'],
  ['FAQ', '#faq'],
  ['Contact', '#contact']
];

const socialLinks = [
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/hs_interiors_solution/'
  }
];

const phone = '+92 324 9707424';
const phoneTel = 'tel:+923249707424';
const whatsappUrl = 'https://wa.me/923249707424';
const address = 'Javed Sheet Market, Gondlanwala Rd, near 1 Minaar Wali Masjid, Mohalla Noor Bawa, Gujranwala, 52250';

export default function Footer() {
  return (
    <footer className="bg-[#F2F1EC] border-t border-border px-6 pt-20 pb-10 text-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        {/* Brand */}
        <div>
          <Logo light={false} />
          <p className="mt-6 max-w-xs text-sm text-muted-foreground leading-relaxed">
            Timeless interiors for homes and businesses across Gujranwala and Pakistan.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full bg-white border border-border text-charcoal shadow-xs transition-all hover:border-charcoal hover:bg-charcoal hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="eyebrow mb-5">Quick Links</p>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
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
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>{address}</li>
            <li>
              <a href={phoneTel} className="hover:text-gold transition-colors font-medium text-foreground">
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

      <p className="mx-auto mt-16 max-w-7xl border-t border-border pt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} H-S Interiors. All rights reserved.
      </p>
    </footer>
  );
}
