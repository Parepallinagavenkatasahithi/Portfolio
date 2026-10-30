import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ExpertiseSection: React.FC = () => {
  const { expertise } = portfolioData;
  const [activeItem, setActiveItem] = useState<string>(expertise[0].id);

  return (
    <section id="expertise" className="py-24 md:py-32 border-b border-ivory-300/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-ivory-300">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-earth-600 font-semibold block mb-2">
              02 // Focus & Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-ink-900 tracking-tight">
              Technical Expertise
            </h2>
          </div>
          <div className="text-sm font-mono text-ink-500 max-w-sm">
            Core capabilities, architectural frameworks, and engineering competencies.
          </div>
        </div>

        {/* Editorial Numbered Accordion / Interactive Row Layout */}
        <div className="divide-y divide-ivory-300 border-y border-ivory-300">
          {expertise.map((item) => {
            const isExpanded = activeItem === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveItem(item.id)}
                className={`py-8 md:py-10 transition-all duration-300 cursor-pointer ${
                  isExpanded ? 'bg-ivory-200/50 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-xl' : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Number & Primary Title */}
                  <div className="lg:col-span-5 flex items-start gap-6">
                    <span className="text-2xl md:text-3xl font-mono font-bold text-earth-600/70 group-hover:text-earth-600 transition-colors">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-ink-900 tracking-tight mb-2 flex items-center gap-2">
                        <span>{item.title}</span>
                        {isExpanded && <ArrowUpRight className="w-5 h-5 text-earth-500 hidden sm:inline-block" />}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-ink-500">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description & Capabilities */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <p className="text-sm sm:text-base text-ink-700 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Capabilities list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      {item.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-ink-600 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-earth-500 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-xs font-mono rounded bg-white border border-ivory-300 text-ink-700 shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
