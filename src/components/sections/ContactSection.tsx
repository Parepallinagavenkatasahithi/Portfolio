import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { Mail, Linkedin, Github, FileText, ArrowUpRight, Copy, Check, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.social.displayEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden bg-ivory-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-earth-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-earth-100 border border-earth-200 text-earth-800 text-xs font-mono font-semibold uppercase tracking-wider mb-8">
            <Sparkles className="w-3.5 h-3.5 text-earth-600" />
            <span>Open to Engineering & AI Opportunities</span>
          </div>

          {/* Large Bold Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-ink-900 tracking-tight leading-[1.05] mb-6">
            LET'S BUILD SOMETHING MEANINGFUL<span className="text-earth-500">.</span>
          </h2>

          <p className="text-base sm:text-lg text-ink-600 max-w-2xl mx-auto leading-relaxed mb-12">
            Whether you're looking for an enthusiastic software engineering intern, an AI/ML developer, or a collaborator on quantum computing algorithms — I'd love to connect.
          </p>

          {/* Prominent "HIRE ME!" CTA Box */}
          <div className="w-full max-w-xl p-8 rounded-2xl bg-white border-2 border-ink-900 shadow-xl mb-12 transform hover:-translate-y-0.5 transition-transform">
            <div className="flex flex-col items-center gap-6">
              <div className="text-center">
                <span className="text-3xl sm:text-4xl font-display font-black text-ink-900 tracking-tight block">
                  HIRE ME!
                </span>
                <span className="text-xs font-mono text-ink-500 uppercase tracking-widest mt-1 block">
                  Currently Pursuing B.Tech CSE • Ready to Contribute
                </span>
              </div>

              {/* Direct Email Action with Copy button */}
              <div className="w-full flex items-center justify-between p-3.5 rounded-xl bg-ivory-100 border border-ivory-300">
                <div className="flex items-center gap-3 overflow-hidden text-left pl-2">
                  <Mail className="w-4 h-4 text-earth-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-ink-800 truncate font-medium">
                    {personal.social.displayEmail}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white border border-ivory-300 hover:border-ink-900 text-ink-700 hover:text-earth-600 text-xs font-mono flex items-center gap-1 transition-all"
                    title="Copy Email Address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-earth-600" />
                        <span className="text-[11px] font-semibold text-earth-700 hidden sm:inline">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px] hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={personal.social.email}
                    className="px-3 py-2 rounded-lg bg-ink-900 hover:bg-earth-600 text-ivory-100 text-xs font-semibold tracking-wide transition-colors"
                  >
                    Send Mail
                  </a>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <a
                  href={personal.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-earth-500 hover:bg-earth-600 text-white font-semibold text-xs tracking-wide transition-colors shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>

                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-ivory-300 hover:border-ink-900 bg-ivory-100 hover:bg-white text-ink-900 font-semibold text-xs transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-earth-600" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-ivory-300 hover:border-ink-900 bg-ivory-100 hover:bg-white text-ink-900 font-semibold text-xs transition-colors"
                >
                  <Github className="w-4 h-4 text-ink-800" />
                  <span>GitHub Repos</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Editorial Quote Sign-off */}
          <div className="text-xs font-mono text-ink-400">
            Less Clutter. More Impact. • Designed for Naga Venkata Sahithi Parepalli
          </div>
        </div>
      </div>
    </section>
  );
};
