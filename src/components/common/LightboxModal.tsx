import React, { useEffect } from 'react';
import { X, ExternalLink, Download } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  caption?: string;
  externalLink?: string;
  externalLinkText?: string;
  details?: React.ReactNode;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  caption,
  externalLink,
  externalLinkText = "View Source",
  details
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-ink-900/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-ivory-100 rounded-xl border border-ivory-300 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-ivory-100/95 backdrop-blur border-b border-ivory-300">
          <div>
            {subtitle && (
              <span className="text-[11px] font-mono uppercase tracking-widest text-earth-500 font-semibold block mb-0.5">
                {subtitle}
              </span>
            )}
            <h3 className="text-xl font-bold text-ink-900 tracking-tight">{title}</h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-ivory-200 text-ink-700 transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-6">
          {imageSrc && (
            <div className="relative rounded-lg overflow-hidden border border-ivory-300 bg-ivory-200 max-h-[50vh] flex items-center justify-center">
              <img
                src={imageSrc}
                alt={imageAlt || title}
                className="max-h-[50vh] w-auto object-contain"
                onError={(e) => {
                  // Fallback container
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          )}

          {caption && (
            <p className="text-sm font-mono text-ink-600 bg-ivory-200/60 p-3 rounded border border-ivory-300/80">
              {caption}
            </p>
          )}

          {details && <div className="text-sm text-ink-700 space-y-3">{details}</div>}

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-ivory-300">
            {externalLink && (
              <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-earth-500 hover:bg-earth-600 text-white text-xs font-semibold tracking-wide transition-all shadow-sm"
              >
                <span>{externalLinkText}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {imageSrc && (
              <a
                href={imageSrc}
                download
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-mono text-ink-600 hover:text-ink-900 transition-colors ml-auto"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Image</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
