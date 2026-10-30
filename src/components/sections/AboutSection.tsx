import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { GraduationCap, Compass, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-24 md:py-32 border-b border-ivory-300/80 bg-ivory-50/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Two-Column Split (Directly inspired by reference screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: "About Me" & Academic Snapshot */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-earth-600 font-semibold block mb-2">
                01 // PERSONAL IDENTITY
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-ink-900 tracking-tight mb-4">
                About Me
              </h2>
              <p className="text-xs font-mono text-ink-500 leading-relaxed">
                Aspiring software engineer exploring the frontiers of intelligent applications, QAOA quantum circuits, and reliable software systems.
              </p>
            </div>

            {/* Academic Card */}
            <div className="p-6 rounded-2xl bg-white border border-ivory-300 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-earth-700 font-semibold">
                  <GraduationCap className="w-4 h-4 text-earth-600" />
                  Education Status
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-earth-100 text-earth-800 font-semibold">
                  {personal.education.status}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-ink-900">
                  {personal.education.degree}
                </h3>
                <p className="text-xs text-ink-600 mt-0.5 font-medium">
                  {personal.education.college}
                </p>
                <p className="text-[11px] text-ink-400 font-mono">
                  Affiliated with {personal.education.university}
                </p>
              </div>

              <div className="pt-3 border-t border-ivory-200 flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-ink-900 font-display">
                  8.9
                </span>
                <div>
                  <span className="text-xs font-bold text-ink-800 block">Cumulative CGPA</span>
                  <span className="text-[11px] text-ink-400 font-mono">Scale of 10.0</span>
                </div>
              </div>

              {/* Schooling Highlights */}
              <div className="pt-3 border-t border-ivory-200 space-y-2 text-xs text-ink-600">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Intermediate (MPC)</span>
                  <span className="font-mono font-bold text-ink-900">91%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Class X Secondary Education</span>
                  <span className="font-mono font-bold text-ink-900">98%</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-ink-500">
                <MapPin className="w-3.5 h-3.5 text-earth-600 shrink-0" />
                <span>{personal.education.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Philosophy */}
          <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-ink-800 leading-relaxed">
            {personal.fullBio.map((paragraph, index) => (
              <p key={index} className="font-normal">
                {paragraph}
              </p>
            ))}

            {/* Quote Banner */}
            <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white border border-ivory-300 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-earth-100/40 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-earth-600 font-semibold mb-2">
                <Compass className="w-4 h-4 text-earth-500" />
                <span>Motto & Philosophy</span>
              </div>
              <p className="text-xl sm:text-2xl font-editorial italic text-ink-900 leading-snug">
                "{personal.problemSolvingPhilosophy}"
              </p>
            </div>

            {/* Technical Pillars Pills */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-ivory-200/70 border border-ivory-300 text-center font-semibold text-ink-800">
                AI & Deep Learning
              </div>
              <div className="p-3 rounded-xl bg-ivory-200/70 border border-ivory-300 text-center font-semibold text-ink-800">
                Quantum Algorithms (QAOA)
              </div>
              <div className="p-3 rounded-xl bg-ivory-200/70 border border-ivory-300 text-center font-semibold text-ink-800">
                Enterprise Java & OOP
              </div>
              <div className="p-3 rounded-xl bg-ivory-200/70 border border-ivory-300 text-center font-semibold text-ink-800">
                Generative AI & Gemini
              </div>
            </div>
          </div>

        </div>

        {/* Large Editorial Statistics Strip */}
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
