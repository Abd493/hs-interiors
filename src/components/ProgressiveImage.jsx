import React, { useState } from 'react';

export default function ProgressiveImage({
  src,
  alt = '',
  className = '',
  containerClassName = '',
  priority = false,
  aspectRatio = '',
  onClick = null,
  draggable = false,
  style = {}
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Derive webp, jpg, and thumb paths
  const basePath = src.replace(/\.(jpg|jpeg|png|webp)$/i, '');
  const webpSrc = `${basePath}.webp`;
  const jpgSrc = src.endsWith('.jpeg') ? `${basePath}.jpeg` : `${basePath}.jpg`;
  const thumbSrc = `${basePath}_thumb.webp`;

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-[#181513] ${aspectRatio} ${containerClassName}`}
      style={style}
    >
      {/* 1. Shimmer Skeleton Placeholder while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#181513]">
          {/* Subtle blurred mini-thumbnail if loaded */}
          <img
            src={thumbSrc}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover filter blur-md opacity-40 scale-105"
          />
          {/* Shimmer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent animate-shimmer" />
        </div>
      )}

      {/* 2. Modern Picture with WebP priority and smooth fade-in */}
      <picture>
        <source type="image/webp" srcSet={webpSrc} />
        <img
          src={jpgSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchpriority={priority ? 'high' : 'auto'}
          decoding={priority ? 'sync' : 'async'}
          draggable={draggable}
          onLoad={() => setIsLoaded(true)}
          className={`${className} transition-opacity duration-700 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </picture>
    </div>
  );
}
