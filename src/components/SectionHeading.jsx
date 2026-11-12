import React from 'react';

export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="reveal mx-auto mb-16 max-w-2xl text-center">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">{title}</h2>
      {text && <p className="mt-4 font-normal text-muted-foreground leading-relaxed">{text}</p>}
    </div>
  );
}
