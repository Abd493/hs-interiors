import React from 'react';

export default function ProgressiveImage({
  src,
  alt = '',
  className = '',
  containerClassName = '',
  priority = false,
  aspectRatio = '',
  sizes = '(max-width: 640px) 95vw, (max-width: 1024px) 48vw, 420px',
  onClick = null,
  draggable = false,
  style = {}
}) {
  // Fast 800px grid card WebP (20-55KB), crisp 1280px Retina WebP, plus JPG fallback
  const basePath = src.replace(/\.(jpg|jpeg|png|webp)$/i, '');
  const smWebpSrc = `${basePath}_sm.webp`;
  const cardWebpSrc = `${basePath}_card.webp`;
  const jpgSrc = src.endsWith('.jpeg') ? `${basePath}.jpeg` : `${basePath}.jpg`;

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-[#EFEEE9] ${aspectRatio} ${containerClassName}`}
      style={style}
    >
      <picture>
        <source
          type="image/webp"
          srcSet={`${smWebpSrc} 800w, ${cardWebpSrc} 1280w`}
          sizes={sizes}
        />
        <img
          src={jpgSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchpriority={priority ? 'high' : 'low'}
          decoding={priority ? 'sync' : 'async'}
          draggable={draggable}
          className={className}
        />
      </picture>
    </div>
  );
}
