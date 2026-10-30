import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { Briefcase, Calendar, MapPin, CheckCircle, Code } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 md:py-32 border-b border-ivory-300/80 bg-ivory-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-ivory-300">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-earth-600 font-semibold block mb-2">
              03 // INDUSTRY & RESEARCH INTERNSHIPS
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-ink-900 tracking-tight">
              Work Experience
            </h2>
          </div>
          <div className="text-sm font-mono text-ink-500 max-w-sm">
            Hands-on software development, Java backend systems, and applied machine learning models.
          </div>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8 max-w-5xl">
          {experience.map((item) => (
            <div
              key={item.id}
              className="p-8 md:p-10 rounded-2xl bg-white border border-ivory-300 shadow-sm hover:shadow-md transition-all duration-300 relative group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-ivory-200">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-earth-100 text-earth-800 text-xs font-mono font-semibold mb-3">
                    <Briefcase className="w-3.5 h-3.5 text-earth-600" />
                    <span>{item.type}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-ink-900 tracking-tight">
                    {item.role}
                  </h3>

                  <div className="text-base font-bold text-earth-700 mt-1">
                    {item.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-ink-600">
                  <div className="flex items-center gap-1.5 bg-ivory-100 px-3 py-1.5 rounded-lg border border-ivory-200">
                    <Calendar className="w-3.5 h-3.5 text-earth-600" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-ivory-100 px-3 py-1.5 rounded-lg border border-ivory-200">
                    <MapPin className="w-3.5 h-3.5 text-earth-600" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-ink-700 leading-relaxed mb-6">
                {item.summary}
              </p>

              {/* Responsibilities */}
              <div className="mb-6 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-ink-500 font-semibold mb-3">
                  Key Engineering Contributions:
                </h4>
                {item.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-700">
                    <CheckCircle className="w-4 h-4 text-earth-500 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="pt-6 border-t border-ivory-200 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-ink-500 flex items-center gap-1 mr-2">
                  <Code className="w-3.5 h-3.5" />
                  Technologies:
                </span>
                {item.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-ivory-100 border border-ivory-300 text-ink-800"
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
