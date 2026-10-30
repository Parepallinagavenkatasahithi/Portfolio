import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { GalleryItem } from '../../types/portfolio';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { LightboxModal } from '../common/LightboxModal';
import { Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { gallery } = portfolioData;
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 border-b border-ivory-300/80 bg-ivory-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-ivory-300">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-earth-600 font-semibold block mb-2">
              07 // MOMENTS & COMPETITION STAGES
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-ink-900 tracking-tight">
              Event Gallery
            </h2>
          </div>
          <div className="text-sm font-mono text-ink-500 max-w-sm">
            Live jury defenses, quantum team sprints, and award ceremonies.
          </div>
        </div>

        {/* Clean Balanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-ivory-300 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <ImageWithFallback
                  image={item.image}
                  title={item.title}
                  categoryLabel={item.category}
                  aspectClass="aspect-[4/3]"
                  className="w-full"
                />
              </div>

              {/* Caption Footer */}
              <div className="p-4 bg-white border-t border-ivory-200 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-ink-500 mb-1">
                    <span className="text-earth-600 font-semibold">{item.category}</span>
                    <span>{item.date}</span>
                  </div>
                  <h4 className="text-sm font-bold text-ink-900 group-hover:text-earth-600 transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-ink-500 line-clamp-2 mt-1 font-mono">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Hover overlay hint */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-ink-900/70 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Lightbox Modal */}
      {selectedPhoto && (
        <LightboxModal
          isOpen={!!selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          title={selectedPhoto.title}
          subtitle={`${selectedPhoto.category} • ${selectedPhoto.date}`}
          imageSrc={selectedPhoto.image.src}
          imageAlt={selectedPhoto.image.alt}
          caption={selectedPhoto.caption}
          details={
            <p className="text-xs font-mono text-ink-500">
              Configure or replace this photo in <code className="text-ink-800">src/data/portfolio.ts</code> under <code className="text-ink-800">gallery</code>.
            </p>
          }
        />
      )}
    </section>
  );
};
