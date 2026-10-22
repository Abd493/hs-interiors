import React, { useState } from 'react';
import { ArrowRight, MapPin, Phone, MessageCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';

const phone = '+92 324 9707424';
const phoneTel = 'tel:+923249707424';
const whatsappUrl = 'https://wa.me/923249707424';
const address = 'Javiad Sheet Market, Gondlanwala Rd, near 1 Minaar Wali Masjid, Mohalla Noor Bawa, Gujranwala, 52250';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = `Hello H-S Interiors,\n\nName: ${formData.get('name')}\nPhone: ${formData.get('phone')}\nProject: ${formData.get('type')}\nArea: ${formData.get('area')}\nBest time to call: ${formData.get('time')}\n\n${formData.get('message')}`;
    
    window.open(`${whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  const inputClass =
    'w-full border-b border-border bg-transparent py-3.5 font-light outline-none transition-colors focus:border-gold text-foreground placeholder:text-muted-foreground/60 [&>option]:bg-[#1C1917] [&>option]:text-cream';

  return (
    <section id="contact" className="px-6 py-28 bg-background">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact & Visit"
          title="Let's design your space"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="reveal space-y-6 bg-card p-8 md:p-12 rounded-2xl border border-border shadow-soft"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <input
                name="name"
                required
                maxLength={80}
                placeholder="Full name"
                className={inputClass}
              />
              <input
                name="phone"
                required
                type="tel"
                maxLength={20}
                placeholder="Phone number"
                className={inputClass}
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <select
                name="type"
                required
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled>
                  Service needed
                </option>
                <option value="False Ceiling">False Ceiling</option>
                <option value="Gypsum Work">Gypsum Work</option>
                <option value="PVC Pelling">PVC Pelling</option>
                <option value="Wallpapers">Wallpapers</option>
                <option value="Customized Media Wall">Customized Media Wall</option>
                <option value="Vinyl Flooring">Vinyl Flooring</option>
              </select>

              <input
                name="area"
                required
                maxLength={80}
                placeholder="Your area / city (e.g. Satellite Town)"
                className={inputClass}
              />
            </div>

            <select
              name="time"
              defaultValue="Morning (10am – 1pm)"
              className={inputClass}
            >
              <option value="Morning (10am – 1pm)">Morning (10am – 1pm)</option>
              <option value="Afternoon (1pm – 5pm)">Afternoon (1pm – 5pm)</option>
              <option value="Evening (5pm – 10pm)">Evening (5pm – 10pm)</option>
            </select>

            <textarea
              name="message"
              rows={4}
              maxLength={1000}
              placeholder="Room size, design idea or anything you'd like us to know"
              className={inputClass}
            />

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-3 bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#12100F] transition-all hover:bg-gold-soft hover:shadow-[0_0_25px_rgba(197,155,39,0.4)] rounded-xl"
            >
              Send Enquiry <ArrowRight className="h-4 w-4" />
            </button>

            {submitted && (
              <p className="text-center text-sm font-medium text-gold">
                Thank you! Your message opened in WhatsApp — just press send.
              </p>
            )}
          </form>

          {/* Location Map & Details */}
          <div className="reveal flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="H-S Interiors location"
                src="https://www.google.com/maps?q=558M%2B2P+Gujranwala&output=embed"
                className="h-72 w-full border-0 grayscale-[25%]"
                loading="lazy"
              />
            </div>

            <div className="space-y-5 bg-secondary p-8 rounded-2xl border border-border shadow-soft">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <p className="font-light text-foreground">{address}, Pakistan</p>
              </div>

              <a href={phoneTel} className="flex gap-4 hover:text-gold transition-colors text-foreground">
                <Phone className="h-5 w-5 text-gold" />
                <span>{phone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 hover:text-gold transition-colors text-foreground"
              >
                <MessageCircle className="h-5 w-5 text-gold" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="flex items-center gap-4">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-whatsapp" />
                </span>
                <span className="font-light text-foreground">Open daily until 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
