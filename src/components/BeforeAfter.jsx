import React, { useState, useRef } from 'react';
import { MoveHorizontal } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const updatePosition = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setSliderPosition(pos);
  };

  const handlePointerDown = (e) => {
    isDragging.current = true;
    updatePosition(e.clientX);
    e.target.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (isDragging.current) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="reveal relative aspect-[16/10] cursor-ew-resize select-none overflow-hidden rounded-2xl border border-border shadow-soft touch-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* After image: Fast WebP Finished Luxury Interior */}
      <picture>
        <source type="image/webp" srcSet="/images/after.webp" />
        <img
          src="/images/after.jpg"
          alt="After luxury renovation by H-S Interiors"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      </picture>

      {/* Before image: Exact same room in raw bare-shell concrete */}
      <picture>
        <source type="image/webp" srcSet="/images/before.webp" />
        <img
          src="/images/before.jpg"
          alt="Before renovation empty bare shell"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          draggable={false}
        />
      </picture>

      {/* Badges */}
      <span className="absolute left-4 top-4 rounded-full bg-charcoal/80 px-3.5 py-1 text-xs uppercase tracking-widest text-cream backdrop-blur-md shadow-md border border-white/10">
        Before
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-gold px-3.5 py-1 text-xs uppercase tracking-widest text-[#12100F] font-semibold backdrop-blur-md shadow-md">
        After
      </span>

      {/* Drag line and handle */}
      <div
        className="absolute inset-y-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <span className="absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-charcoal shadow-2xl border border-border">
          <MoveHorizontal className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
}
