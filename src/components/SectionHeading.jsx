import React from 'react';

export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="reveal mx-auto mb-16 max-w-2xl text-center">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-serif text-4xl md:text-5xl">{title}</h2>
      {text && <p className="mt-5 font-light text-muted-foreground">{text}</p>}
    </div>
  );
}
