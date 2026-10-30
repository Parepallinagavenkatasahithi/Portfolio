import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { AchievementItem } from '../../types/portfolio';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { LightboxModal } from '../common/LightboxModal';
import { Trophy, CheckCircle2, ChevronRight } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const { achievements } = portfolioData;
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementItem | null>(null);

  return (
    <section id="achievements" className="py-24 md:py-32 border-b border-ivory-300/80 bg-ivory-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-ivory-300">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-earth-600 font-semibold block mb-2">
              05 // HONORS, AWARDS & HACKATHON TITLES
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-ink-900 tracking-tight">
              Achievements & Honors
            </h2>
          </div>
          <div className="text-sm font-mono text-ink-500 max-w-sm">
            National hackathon semifinal victories, international research selections, and innovation accolades.
          </div>
        </div>

        {/* Editorial Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-ivory-300 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1"
            >
              <div>
                {/* Visual Thumbnail */}
                <div
                  className="mb-5 rounded-xl overflow-hidden border border-ivory-200 cursor-pointer"
                  onClick={() => setSelectedAchievement(item)}
                >
                  <ImageWithFallback
                    image={item.image}
                    title={item.title}
                    categoryLabel={item.badge}
                    aspectClass="aspect-[16/10]"
                  />
                </div>

                {/* Badge & Stage */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-earth-100 text-earth-800 text-[11px] font-mono font-bold">
                    <Trophy className="w-3.5 h-3.5 text-earth-600" />
                    {item.badge}
                  </span>
                  <span className="text-[11px] font-mono text-ink-400">
                    {item.stage}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-ink-900 tracking-tight group-hover:text-earth-600 transition-colors mb-2">
                  {item.title}
                </h3>

                {/* Organization */}
                <p className="text-xs font-mono text-earth-700 font-semibold mb-3">
                  {item.organization}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-ink-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Impact Points */}
                <div className="space-y-1.5 mb-6">
                  {item.impactPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-ink-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-earth-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Details trigger */}
              <button
                onClick={() => setSelectedAchievement(item)}
                className="w-full pt-3 border-t border-ivory-200 flex items-center justify-between text-xs font-mono text-ink-600 hover:text-earth-600 transition-colors"
              >
                <span>View Recognition Artifact</span>
                <ChevronRight className="w-4 h-4 text-earth-500" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Detail Lightbox Modal */}
      {selectedAchievement && (
        <LightboxModal
          isOpen={!!selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
          title={selectedAchievement.title}
          subtitle={`${selectedAchievement.badge} • ${selectedAchievement.stage}`}
          imageSrc={selectedAchievement.image.src}
          imageAlt={selectedAchievement.image.alt}
          caption={selectedAchievement.image.caption}
          externalLink={selectedAchievement.credentialUrl}
          externalLinkText="View Credential / Source"
          details={
            <div className="space-y-4">
              <p className="text-xs font-mono text-earth-700 font-semibold">{selectedAchievement.organization}</p>
              <p className="text-sm text-ink-700 leading-relaxed">{selectedAchievement.description}</p>
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono font-bold text-ink-800 block">Key Milestones:</span>
                {selectedAchievement.impactPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-ink-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-earth-500 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          }
        />
      )}
    </section>
  );
};
