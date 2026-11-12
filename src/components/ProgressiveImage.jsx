import React, { useState, useRef, useEffect } from 'react';

export default function ProgressiveImage({
  src,
  alt = '',
  className = '',
  containerClassName = '',
  priority = false,
  aspectRatio = '',
  sizes = '(max-width: 640px) 95vw, (max-width: 1024px) 48vw, 440px',
  onClick = null,
  draggable = false,
  style = {}
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  // Derive responsive WebP, full 4K WebP, fallback JPG/JPEG, and fast blur thumb paths
  const basePath = src.replace(/\.(jpg|jpeg|png|webp)$/i, '');
  const cardWebpSrc = `${basePath}_card.webp`;
  const webpSrc = `${basePath}.webp`;
  const jpgSrc = src.endsWith('.jpeg') ? `${basePath}.jpeg` : `${basePath}.jpg`;
  const thumbSrc = `${basePath}_thumb.webp`;

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-[#F1F0EC] ${aspectRatio} ${containerClassName}`}
      style={style}
    >
      {/* 1. Blurred mini-thumbnail placeholder while downloading */}
      {!isLoaded && (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-[#F1F0EC]">
          <img
            src={thumbSrc}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover filter blur-md opacity-45 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
      )}

      {/* 2. Responsive WebP (1280w for fast grid cards, 3840w for 4K / DPR >= 2) */}
      <picture>
        <source
          type="image/webp"
          srcSet={`${cardWebpSrc} 1280w, ${webpSrc} 3840w`}
          sizes={sizes}
        />
        <img
          ref={imgRef}
          src={jpgSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchpriority={priority ? 'high' : 'auto'}
          decoding={priority ? 'sync' : 'async'}
          draggable={draggable}
          onLoad={() => setIsLoaded(true)}
          className={`${className} transition-opacity duration-300 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </picture>
    </div>
  );
}
