import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const navItems = [
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERTISE', href: '#expertise' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'ACHIEVEMENTS', href: '#achievements' },
  { label: 'CERTIFICATIONS', href: '#certifications' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory-100/95 backdrop-blur-md border-b border-ivory-300/80 shadow-xs py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand: "Sahithi" in bold display font */}
        <a
          href="#"
          className="group flex items-center gap-1 text-ink-900 transition-opacity hover:opacity-80"
        >
          <span className="font-display font-black text-2xl tracking-tight text-ink-900">
            {portfolioData.personal.shortName}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-earth-500 mb-1 group-hover:scale-125 transition-transform" />
        </a>

        {/* Center / Right Quote + Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Subtle Headline Quote from reference */}
          <span className="text-xs font-mono text-ink-600 font-normal tracking-wide hidden xl:inline-block pr-4 border-r border-ivory-300">
            "{portfolioData.personal.quote}"
          </span>

          <nav className="flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-ink-800">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-earth-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-earth-500 hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={portfolioData.personal.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-ink-900 hover:bg-earth-600 text-ivory-100 transition-all duration-200 shadow-xs hover:shadow flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-ink-900 hover:text-earth-600 transition-colors focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-ivory-100/98 backdrop-blur-xl border-b border-ivory-300 shadow-xl px-6 py-8 animate-in slide-in-from-top-4 duration-200">
          <div className="mb-4 pb-3 border-b border-ivory-300 text-xs font-mono text-ink-600 italic">
            "{portfolioData.personal.quote}"
          </div>

          <nav className="flex flex-col gap-3 text-sm font-bold tracking-wider text-ink-900">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-ivory-300/40 hover:text-earth-600 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-ink-400" />
              </a>
            ))}

            <div className="pt-4">
              <a
                href={portfolioData.personal.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-ink-900 text-ivory-100 font-bold text-xs uppercase tracking-wider hover:bg-earth-600 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
