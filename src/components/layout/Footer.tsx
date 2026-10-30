import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-ivory-300 bg-ivory-200/50 text-ink-600">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-display font-extrabold text-ink-900 tracking-tight text-lg">
            {portfolioData.personal.displayName}
          </span>
          <span className="hidden sm:inline-block text-ivory-400">•</span>
          <p className="text-xs font-mono text-ink-500">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-ink-600 hover:text-earth-600 flex items-center gap-1.5 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={portfolioData.personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-ink-600 hover:text-earth-600 flex items-center gap-1.5 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-earth-600" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-ivory-300 hover:border-ink-900 bg-white text-xs font-mono text-ink-700 transition-colors shadow-2xs"
          aria-label="Scroll back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-earth-600" />
        </button>
      </div>
    </footer>
  );
};
