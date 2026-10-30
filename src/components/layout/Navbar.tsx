import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory-100/90 backdrop-blur-md border-b border-ivory-300/80 shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Display Name */}
        <a
          href="#"
          className="group flex items-baseline gap-2 text-ink-900 transition-opacity hover:opacity-80"
        >
          <span className="font-display font-extrabold text-xl tracking-tight">
            {portfolioData.personal.displayName}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-earth-500 mb-0.5 group-hover:scale-125 transition-transform" />
          <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-widest text-ink-500">
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium uppercase tracking-wider text-ink-700">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-earth-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-earth-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={portfolioData.personal.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded border border-ink-900/15 hover:border-ink-900 text-ink-900 transition-all bg-white/40 hover:bg-white"
          >
            <FileText className="w-3.5 h-3.5 text-earth-600" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-semibold rounded bg-ink-900 hover:bg-earth-600 text-ivory-100 transition-colors shadow-xs"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
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
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-ivory-100/98 backdrop-blur-xl border-b border-ivory-300 shadow-xl px-6 py-8 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-base font-semibold text-ink-800">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-ivory-300/50 hover:text-earth-600 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-ink-400">0{navItems.indexOf(item) + 1}</span>
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={portfolioData.personal.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-lg border border-ink-900/20 text-ink-900 font-semibold text-sm"
              >
                <FileText className="w-4 h-4 text-earth-600" />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-lg bg-ink-900 text-ivory-100 font-semibold text-sm hover:bg-earth-600 transition-colors"
              >
                <span>Hire Me / Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
