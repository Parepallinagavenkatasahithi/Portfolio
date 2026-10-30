import React from 'react';
import { FileText, Github, Linkedin, ArrowDown, Sparkles, Layers } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const HeroSection: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center border-b border-ivory-300/80 overflow-hidden">
      {/* Subtle architectural grain / ambient background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-earth-100/40 rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-10 left-0 w-[350px] h-[350px] bg-ivory-300/50 rounded-full blur-2xl pointer-events-none -z-10 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Top Tagline & Education Identity Badge */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-earth-100/80 border border-earth-200 text-earth-700 text-xs font-mono font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-earth-500 animate-pulse" />
            <span>{personal.education.status}</span>
            <span className="text-earth-300">•</span>
            <span>CSE</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-500">
            <Sparkles className="w-3.5 h-3.5 text-earth-500" />
            <span>AI / ML • Quantum Computing • Software Systems</span>
          </div>
        </div>

        {/* Main Grid: Editorial Typography Left + Portrait Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bold Typography & Manifesto */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Display Name & Full Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-ink-900 tracking-tighter leading-[0.95] mb-4">
              {personal.displayName}
              <span className="text-earth-500">.</span>
            </h1>

            <p className="text-sm sm:text-base font-mono text-ink-600 tracking-wide uppercase mb-6">
              {personal.name}
            </p>

            {/* Powerful Headline Inspired Quote */}
            <blockquote className="relative pl-5 border-l-2 border-earth-500 text-xl sm:text-2xl md:text-3xl font-editorial italic text-ink-800 leading-snug mb-6 max-w-2xl">
              "{personal.headline}"
            </blockquote>

            {/* Concise Introduction */}
            <p className="text-base sm:text-lg text-ink-600 leading-relaxed max-w-xl mb-8 font-normal">
              {personal.conciseBio}
            </p>

            {/* CTAs and Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2 mb-10">
              <a
                href={personal.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-ink-900 hover:bg-earth-600 text-ivory-100 font-semibold text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-earth-300" />
                <span>View & Download Resume</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-ivory-300 hover:border-ink-900 bg-white/70 hover:bg-white text-ink-800 hover:text-earth-600 transition-all shadow-xs"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-ivory-300 hover:border-ink-900 bg-white/70 hover:bg-white text-ink-800 hover:text-earth-600 transition-all shadow-xs"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Prominent Project Highlight Callout */}
            <div className="inline-flex flex-wrap items-center gap-4 p-4 rounded-xl bg-ivory-200/70 border border-ivory-300/90 max-w-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white border border-ivory-300 shadow-xs text-earth-600">
                <Layers className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-[200px]">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-ink-900 tracking-tight">
                    {personal.highlightClaim.count}
                  </span>
                  <span className="text-sm font-bold text-ink-800">
                    {personal.highlightClaim.label}
                  </span>
                </div>
                <p className="text-xs text-ink-500 font-mono mt-0.5">
                  {personal.highlightClaim.sublabel}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative Frame Accents */}
              <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-earth-500/50 rounded-tr-xl pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-earth-500/50 rounded-bl-xl pointer-events-none" />

              {/* Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden bg-white p-3 shadow-xl border border-ivory-300">
                <div className="overflow-hidden rounded-xl bg-ivory-200">
                  <ImageWithFallback
                    image={personal.profileImage}
                    title="Naga Venkata Sahithi Parepalli"
                    categoryLabel="Portrait"
                    aspectClass="aspect-[4/5]"
                    className="w-full"
                    priority={true}
                  />
                </div>

                {/* Subtitle / Verification Tag */}
                <div className="mt-3 px-2 py-1.5 flex items-center justify-between text-[11px] font-mono text-ink-500 border-t border-ivory-200">
                  <span className="flex items-center gap-1.5 text-earth-600 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-earth-500" />
                    Verified Portfolio
                  </span>
                  <span>Sahithi Parepalli</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 pt-6 flex justify-start items-center gap-3 text-xs font-mono text-ink-400">
          <a
            href="#about"
            className="group flex items-center gap-2 hover:text-earth-600 transition-colors"
          >
            <div className="w-6 h-6 rounded-full border border-ivory-300 flex items-center justify-center group-hover:border-earth-500 transition-colors">
              <ArrowDown className="w-3.5 h-3.5 text-ink-400 group-hover:text-earth-600 group-hover:translate-y-0.5 transition-transform" />
            </div>
            <span>EXPLORE PROFILE & WORK</span>
          </a>
        </div>
      </div>
    </section>
  );
};
