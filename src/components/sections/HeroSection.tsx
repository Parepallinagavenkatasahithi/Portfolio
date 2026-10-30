import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { Sparkles, FileText, ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[92vh] pt-28 pb-20 md:pt-32 md:pb-28 flex flex-col justify-center overflow-hidden bg-ivory-100">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-earth-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-ivory-300/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative">
        {/* GIANT EDITORIAL NAME BACKGROUND */}
        <div className="relative w-full flex items-center justify-center py-4 md:py-6 select-none pointer-events-none">
          <h1 className="text-[14.5vw] font-display font-black text-ink-900 tracking-tighter leading-[0.8] text-center w-full uppercase opacity-[0.95]">
            {personal.displayName}
          </h1>
        </div>

        {/* THREE-COLUMN HERO COMPOSITION OVERLAPPING THE GIANT TEXT */}
        <div className="relative z-10 -mt-12 sm:-mt-20 md:-mt-28 lg:-mt-36 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: 30+ Real World Projects highlight */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col justify-center order-2 md:order-1 text-left">
            <div className="p-4 sm:p-5 rounded-xl bg-ivory-100/90 backdrop-blur-sm border border-ivory-300/80 shadow-xs max-w-xs">
              <div className="text-3xl sm:text-4xl font-display font-black text-ink-900 tracking-tight mb-1">
                {personal.highlightClaim.count}
                <span className="text-earth-600 text-lg sm:text-xl font-bold ml-1">Real World Projects</span>
              </div>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-sans mt-2">
                {personal.highlightClaim.sublabel}
              </p>
              <div className="mt-3 pt-3 border-t border-ivory-200 flex items-center gap-2 text-[11px] font-mono text-earth-700 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-earth-600" />
                <span>AI, Quantum & Java Core</span>
              </div>
            </div>
          </div>

          {/* Center Column: Iconic Tilted Portrait Card (Moved downwards for balanced alignment) */}
          <div className="md:col-span-4 lg:col-span-6 flex justify-center order-1 md:order-2 translate-y-3 sm:translate-y-5 md:translate-y-8">
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 transform -rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
              {/* Card Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white p-2.5 sm:p-3 shadow-2xl border-2 border-ink-900/10 hover:border-ink-900/30 transition-all">
                <div className="overflow-hidden rounded-xl sm:rounded-2xl bg-ivory-200">
                  <ImageWithFallback
                    image={personal.profileImage}
                    title={personal.name}
                    categoryLabel="Portrait"
                    aspectClass="aspect-[3/4]"
                    className="w-full"
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Black Resume Button */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col justify-center order-3 text-left">
            <div className="p-4 sm:p-5 rounded-xl bg-ivory-100/90 backdrop-blur-sm border border-ivory-300/80 shadow-xs max-w-sm">
              <p className="text-sm sm:text-base text-ink-800 leading-relaxed font-normal mb-5">
                {personal.heroGreeting}
              </p>

              <div className="pt-2">
                <a
                  href={personal.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ink-900 hover:bg-earth-600 text-ivory-100 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto"
                >
                  <FileText className="w-4 h-4" />
                  <span>RESUME</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom subtle scroll prompt */}
        <div className="mt-14 pt-4 flex justify-center items-center">
          <a
            href="#about"
            className="flex items-center gap-2 text-xs font-mono text-ink-400 hover:text-earth-600 transition-colors uppercase tracking-widest"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
