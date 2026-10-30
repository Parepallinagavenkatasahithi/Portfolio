import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { Mail, Phone, MapPin, Linkedin, Github, FileText, Send, Check, Copy, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto URL with form contents
    const mailtoUrl = `mailto:${personal.contact.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden bg-ivory-100">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-earth-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-earth-100 border border-earth-200 text-earth-800 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-earth-600" />
            <span>Open for Software Engineering & AI Roles</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-ink-900 tracking-tight leading-tight">
            LET'S BUILD SOMETHING MEANINGFUL<span className="text-earth-500">.</span>
          </h2>

          <p className="text-sm sm:text-base text-ink-600 mt-4 leading-relaxed font-sans">
            Ready to contribute to challenging AI/ML pipelines, quantum optimization prototypes, or backend systems.
          </p>
        </div>

        {/* Two-Column Grid: Left Contact Form + Right "HIRE ME!" Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Contact Form (Directly inspired by reference) */}
          <div className="lg:col-span-7 p-8 md:p-10 rounded-2xl bg-white border border-ivory-300 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-earth-600 font-semibold block mb-1">
                SEND A MESSAGE
              </span>
              <h3 className="text-2xl font-display font-extrabold text-ink-900 mb-6">
                Contact Me
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ink-600 mb-1.5 font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-2.5 rounded-lg bg-ivory-50 border border-ivory-300 focus:border-ink-900 focus:bg-white text-sm text-ink-900 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ink-600 mb-1.5 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@domain.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-ivory-50 border border-ivory-300 focus:border-ink-900 focus:bg-white text-sm text-ink-900 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-600 mb-1.5 font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    className="w-full px-4 py-2.5 rounded-lg bg-ivory-50 border border-ivory-300 focus:border-ink-900 focus:bg-white text-sm text-ink-900 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-600 mb-1.5 font-semibold">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team, project, or opportunity..."
                    className="w-full px-4 py-2.5 rounded-lg bg-ivory-50 border border-ivory-300 focus:border-ink-900 focus:bg-white text-sm text-ink-900 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-ink-900 hover:bg-earth-600 text-ivory-100 text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{formSubmitted ? 'Message Prepared in Email Client!' : 'Send Message'}</span>
                </button>
              </form>
            </div>

            {/* Quick Contact Info */}
            <div className="pt-6 mt-6 border-t border-ivory-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-ink-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-earth-600 shrink-0" />
                <span>{personal.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-earth-600 shrink-0" />
                <span>{personal.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Giant "HIRE ME!" Callout Box (Direct reference match) */}
          <div className="lg:col-span-5 p-8 md:p-10 rounded-2xl bg-white border-2 border-ink-900 shadow-xl flex flex-col justify-between text-center relative">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-ink-500 block mb-2">
                Wanna work together?
              </span>

              {/* Giant HIRE ME! Typography */}
              <h3 className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-ink-900 tracking-tight leading-none mb-4">
                HIRE ME!
              </h3>

              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-sans mb-8">
                Currently pursuing B.Tech in CSE with 8.9 CGPA. Hands-on experience delivering real-world AI, ML, Quantum, and Java software projects.
              </p>

              {/* Verified Email Copy Bar */}
              <div className="w-full p-3 rounded-xl bg-ivory-100 border border-ivory-300 flex items-center justify-between gap-2 mb-6">
                <div className="flex items-center gap-2 overflow-hidden text-left pl-1">
                  <Mail className="w-4 h-4 text-earth-600 shrink-0" />
                  <span className="text-xs font-mono font-medium text-ink-800 truncate">
                    {personal.contact.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-lg bg-white border border-ivory-300 hover:border-ink-900 text-ink-700 text-xs font-mono flex items-center gap-1 shrink-0 transition-colors shadow-2xs"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-earth-600" />
                      <span className="text-[11px] font-bold text-earth-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Download Resume Button */}
              <a
                href={personal.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-lg bg-earth-500 hover:bg-earth-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-sm mb-4"
              >
                <FileText className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              {/* Social Profiles Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg border border-ivory-300 hover:border-ink-900 bg-ivory-100 text-ink-900 text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-earth-600" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg border border-ivory-300 hover:border-ink-900 bg-ivory-100 text-ink-900 text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-ivory-200 text-[11px] font-mono text-ink-400">
              Less Clutter. More Impact. • Sahithi Parepalli
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
