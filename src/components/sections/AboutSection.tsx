import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { Compass, GraduationCap, Cpu } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-24 md:py-32 border-b border-ivory-300/80 bg-ivory-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-ivory-300">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-earth-600 font-semibold block mb-2">
              01 // Background & Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-ink-900 tracking-tight">
              About Me
            </h2>
          </div>
          <div className="text-sm font-mono text-ink-500 max-w-sm">
            Engineering from first principles with curiosity across modern AI and quantum algorithms.
          </div>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-ink-700 leading-relaxed">
            {personal.fullBio.map((paragraph, index) => (
              <p key={index} className="font-normal">
                {paragraph}
              </p>
            ))}

            {/* Problem Solving Box */}
            <div className="mt-8 p-6 rounded-xl bg-ivory-200/80 border border-ivory-300/90 relative">
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-earth-600 font-semibold mb-2">
                <Compass className="w-4 h-4 text-earth-500" />
                <span>Problem-Solving Approach</span>
              </div>
              <p className="text-sm sm:text-base font-editorial italic text-ink-900 leading-normal">
                "{personal.problemSolvingPhilosophy}"
              </p>
            </div>
          </div>

          {/* Right Column: Educational Detail & Technical Interests */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="p-6 rounded-xl bg-white border border-ivory-300 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-earth-600 font-semibold">
                  <GraduationCap className="w-4 h-4 text-earth-500" />
                  Academic Profile
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-earth-100 text-earth-700 font-medium">
                  {personal.education.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-ink-900 mb-1">
                {personal.education.degree}
              </h3>
              <p className="text-xs text-ink-500 font-mono mb-4">
                {personal.education.specialization}
              </p>

              <div className="flex items-baseline gap-3 pt-3 border-t border-ivory-200">
                <span className="text-4xl font-extrabold text-ink-900 tracking-tight font-display">
                  8.9
                </span>
                <div>
                  <span className="text-xs font-bold text-ink-700 block">Cumulative CGPA</span>
                  <span className="text-[11px] text-ink-400 font-mono">Scale of 10.0</span>
                </div>
              </div>

              <p className="text-xs text-ink-600 mt-4 leading-relaxed bg-ivory-100 p-3 rounded border border-ivory-200">
                {personal.education.highlight}
              </p>
            </div>

            {/* Core Competencies Quick List */}
            <div className="p-6 rounded-xl bg-white border border-ivory-300 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-earth-600 font-semibold mb-4">
                <Cpu className="w-4 h-4 text-earth-500" />
                <span>Core Research & Technical Pillars</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-medium text-ink-800">
                <div className="p-2.5 rounded bg-ivory-100 border border-ivory-200">
                  <span className="text-earth-600 font-mono block text-[10px] mb-0.5">01</span>
                  Artificial Intelligence & ML
                </div>
                <div className="p-2.5 rounded bg-ivory-100 border border-ivory-200">
                  <span className="text-earth-600 font-mono block text-[10px] mb-0.5">02</span>
                  Generative AI & RAG
                </div>
                <div className="p-2.5 rounded bg-ivory-100 border border-ivory-200">
                  <span className="text-earth-600 font-mono block text-[10px] mb-0.5">03</span>
                  Software Engineering (Java)
                </div>
                <div className="p-2.5 rounded bg-ivory-100 border border-ivory-200">
                  <span className="text-earth-600 font-mono block text-[10px] mb-0.5">04</span>
                  Quantum Computing (QAOA)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Editorial Statistics Strip (Numbers & Clean Typography, Not Generic Cards) */}
        <div className="pt-12 border-t border-ivory-300">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {personal.stats.map((stat, index) => (
              <div key={index} className="flex flex-col group">
                <div className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-ink-900 group-hover:text-earth-600 transition-colors tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-ink-900 uppercase tracking-wide mb-1">
                  {stat.label}
                </div>
                {stat.description && (
                  <p className="text-xs text-ink-500 font-mono leading-relaxed">
                    {stat.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
