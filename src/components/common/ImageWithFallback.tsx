import React, { useState } from 'react';
import { ImageConfig } from '../../types/portfolio';
import { Camera, Image as ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps {
  image: ImageConfig;
  className?: string;
  categoryLabel?: string;
  title?: string;
  showCaption?: boolean;
  priority?: boolean;
  aspectClass?: string;
  onClick?: () => void;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  image,
  className = '',
  categoryLabel,
  title,
  showCaption = false,
  aspectClass = 'aspect-[16/10]',
  onClick
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-ivory-200 border border-ivory-300 group ${aspectClass} ${className} ${
        onClick ? 'cursor-pointer' : ''
      }`}
    >
      {!hasError && image.src ? (
        <img
          src={image.src}
          alt={image.alt || title || 'Portfolio visual'}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          style={{
            objectPosition: image.objectPosition || 'center'
          }}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : null}

      {/* Aesthetic Editorial Placeholder shown when image is loading or missing */}
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-ivory-100 via-ivory-200 to-ivory-300/80">
          {/* Subtle architectural grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#111 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}
          />

          <div className="relative z-10 flex flex-col items-center max-w-[85%]">
            <div className="w-12 h-12 rounded-full bg-white/80 border border-ivory-300 flex items-center justify-center text-earth-500 mb-3 shadow-sm transition-transform group-hover:scale-110">
              {categoryLabel ? <ImageIcon className="w-5 h-5" /> : <Camera className="w-5 h-5" />}
            </div>

            {categoryLabel && (
              <span className="text-[10px] uppercase font-mono tracking-widest text-earth-600 font-semibold mb-1">
                {categoryLabel}
              </span>
            )}

            <h4 className="text-sm font-semibold text-ink-900 line-clamp-1 mb-1">
              {title || image.alt || 'Visual Artifact'}
            </h4>

            <p className="text-[11px] font-mono text-ink-500 line-clamp-1 opacity-75">
              {image.caption || image.src.replace('/assets/images/', '')}
            </p>

            <div className="mt-3 px-2.5 py-1 text-[10px] font-mono rounded bg-white/70 text-ink-600 border border-ivory-300/80 shadow-xs">
              Configurable in portfolio.ts
            </div>
          </div>
        </div>
      )}

      {/* Overlay caption if requested */}
      {showCaption && image.caption && isLoaded && !hasError && (
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink-900/85 via-ink-900/40 to-transparent p-4 text-white text-xs">
          <p className="font-medium tracking-tight line-clamp-2">{image.caption}</p>
        </div>
      )}
    </div>
  );
};
