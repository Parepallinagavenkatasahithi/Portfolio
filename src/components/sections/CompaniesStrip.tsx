import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { Building2, Sparkles } from 'lucide-react';

export const CompaniesStrip: React.FC = () => {
  const { companiesWorkedWith } = portfolioData;

  return (
    <section className="bg-ink-900 text-ivory-100 py-10 md:py-12 border-y border-ink-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-ivory-400 font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-earth-400" />
          <span>COMPANIES & ORGANIZATIONS I WORKED WITH</span>
        </div>
      </div>

      {/* Ticker / Marquee Band */}
      <div className="relative w-full flex overflow-x-hidden">
        <div className="flex shrink-0 items-center gap-6 md:gap-10 animate-marquee py-2">
          {companiesWorkedWith
            .concat(companiesWorkedWith)
            .concat(companiesWorkedWith)
            .concat(companiesWorkedWith)
            .map((company, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3.5 rounded-lg bg-ink-800/80 border border-ink-700/60 shrink-0 hover:border-earth-400/80 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded bg-ink-900 border border-ink-700 flex items-center justify-center text-earth-400 group-hover:text-white transition-colors">
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-display font-bold text-white group-hover:text-earth-300 transition-colors">
                    {company.name}
                  </div>
                  <div className="text-[11px] font-mono text-ink-400">
                    {company.role}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
