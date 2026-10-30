import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ExpertiseSection: React.FC = () => {
  const { expertise } = portfolioData;

  return (
    <section id="expertise" className="py-24 md:py-32 border-b border-ivory-300/80 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-ivory-300">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-earth-600 font-semibold block mb-2">
              02 // TECHNICAL FOCUS & CAPABILITIES
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-ink-900 tracking-tight">
              Technical Expertise
            </h2>
          </div>
          <div className="text-sm font-mono text-ink-500 max-w-sm">
            Core engineering pillars across Artificial Intelligence, Quantum Optimization, and Backend Software Systems.
          </div>
        </div>

        {/* Card Grid Inspired by Reference with Top-Right Arrow & Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-white border border-ivory-300 shadow-2xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Header: Number and Arrow icon */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-ivory-200">
                  <span className="text-2xl font-mono font-extrabold text-earth-600 group-hover:scale-110 transition-transform">
                    {item.number}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-ivory-100 border border-ivory-300 flex items-center justify-center text-ink-500 group-hover:bg-ink-900 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-extrabold text-ink-900 tracking-tight group-hover:text-earth-600 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-earth-700 font-medium mb-4">
                  {item.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-ink-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Capabilities */}
                <div className="space-y-2 mb-6">
                  {item.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-ink-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-earth-500 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="pt-4 border-t border-ivory-200 flex flex-wrap gap-1.5">
                {item.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-[11px] font-mono rounded bg-ivory-100 border border-ivory-300 text-ink-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
