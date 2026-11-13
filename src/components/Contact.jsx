import React, { useState } from 'react';
import { ArrowRight, MapPin, Phone, MessageCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';

const phone = '+92 324 9707424';
const phoneTel = 'tel:+923249707424';
const whatsappUrl = 'https://wa.me/923249707424';
const address = 'Javed Sheet Market, Gondlanwala Rd, near 1 Minaar Wali Masjid, Mohalla Noor Bawa, Gujranwala, 52250';
const businessMapsUrl = 'https://maps.google.com/?cid=13125711998086656642';
const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=H-S+INTERIORS,+Javed+Sheet+Market,+Gondlanwala+Rd,+near+1+Minaar+Wali+Masjid,+Mohalla+Noor+Bawa,+Gujranwala,+52250';

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
    'w-full border-b border-border bg-transparent py-3.5 text-sm outline-none transition-colors focus:border-charcoal text-foreground placeholder:text-muted-foreground/70 [&>option]:bg-white [&>option]:text-[#141413]';

  return (
    <section id="contact" className="px-6 py-24 bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact & Visit"
          title="Let's design your space"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="reveal space-y-6 bg-white p-8 md:p-12 rounded-2xl border border-border shadow-soft"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="sr-only">Full name</label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  maxLength={80}
                  placeholder="Full name"
                  aria-label="Full name"
                  autoComplete="name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="sr-only">Phone number</label>
                <input
                  id="contact-phone"
                  name="phone"
                  required
                  type="tel"
                  maxLength={20}
                  placeholder="Phone number"
                  aria-label="Phone number"
                  autoComplete="tel"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-service" className="sr-only">Service needed</label>
                <select
                  id="contact-service"
                  name="type"
                  required
                  defaultValue=""
                  aria-label="Service needed"
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
                  <option value="Artificial Grass">Artificial Grass</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-area" className="sr-only">Your area or city</label>
                <input
                  id="contact-area"
                  name="area"
                  required
                  maxLength={80}
                  placeholder="Your area / city (e.g. DHA Gujranwala)"
                  aria-label="Your area or city in Gujranwala or Punjab"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-time" className="sr-only">Preferred consultation time</label>
              <select
                id="contact-time"
                name="time"
                defaultValue="Morning (10am – 1pm)"
                aria-label="Preferred consultation time"
                className={inputClass}
              >
                <option value="Morning (10am – 1pm)">Morning (10am – 1pm)</option>
                <option value="Afternoon (1pm – 5pm)">Afternoon (1pm – 5pm)</option>
                <option value="Evening (5pm – 10pm)">Evening (5pm – 10pm)</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="sr-only">Project details or message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                maxLength={1000}
                placeholder="Room size, design idea or anything you'd like us to know"
                aria-label="Room size, design idea or project details"
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              aria-label="Send Enquiry to H-S Interiors via WhatsApp"
              className="inline-flex w-full items-center justify-center gap-3 bg-charcoal px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-gold shadow-sm rounded-full"
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
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
              <iframe
                title="H-S Interiors location"
                src="https://maps.google.com/maps?q=H-S+INTERIORS,+Javed+Sheet+Market,+Gondlanwala+Rd,+Gujranwala&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
              />
            </div>

            <div className="space-y-5 bg-white p-8 rounded-2xl border border-border shadow-soft">
              <a
                href={businessMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 hover:text-gold transition-colors text-foreground group"
              >
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold group-hover:scale-110 transition-transform" />
                <div className="flex-1">
                  <p className="text-sm sm:text-base">{address}, Pakistan</p>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:underline">
                    View on Google Maps →
                  </span>
                </div>
              </a>

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

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-whatsapp" />
                  </span>
                  <span className="text-foreground text-sm font-medium">Open daily until 10:00 PM</span>
                </div>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-charcoal hover:bg-charcoal hover:text-white transition-all shadow-xs"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
