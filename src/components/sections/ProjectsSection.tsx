import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { ProjectCategory, ProjectItem } from '../../types/portfolio';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { LightboxModal } from '../common/LightboxModal';
import { Github, ExternalLink, ArrowUpRight, Filter, Layers, Check } from 'lucide-react';

const categories: { label: string; value: ProjectCategory }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'AI & Machine Learning', value: 'ai-ml' },
  { label: 'Generative AI', value: 'generative-ai' },
  { label: 'Quantum Computing', value: 'quantum' },
  { label: 'Software Systems', value: 'software' },
  { label: 'Data Science', value: 'data-science' },
];

export const ProjectsSection: React.FC = () => {
  const { featuredProjects, additionalProjects, personal } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectItem | null>(null);
  const [showAllAdditional, setShowAllAdditional] = useState(false);

  // Filter additional projects based on category
  const filteredAdditional = additionalProjects.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  const displayedAdditional = showAllAdditional ? filteredAdditional : filteredAdditional.slice(0, 4);

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-ivory-300/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-ivory-300">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-earth-600 font-semibold">
                04 // Curated Work
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-earth-100 text-earth-800 font-semibold">
                {personal.highlightClaim.count} Builds
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-ink-900 tracking-tight">
              Featured Projects
            </h2>
          </div>
          <div className="text-sm font-mono text-ink-500 max-w-md">
            Architected and implemented with emphasis on algorithmic precision, multimodal pipelines, and quantum variational solvers.
          </div>
        </div>

        {/* 1. FEATURED PROJECTS: LARGE EDITORIAL SHOWCASE */}
        <div className="space-y-20 mb-24">
          {featuredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center p-6 md:p-10 rounded-2xl bg-white border border-ivory-300 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Visual / Screenshot Column */}
                <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-xl overflow-hidden shadow-sm group">
                    <ImageWithFallback
                      image={project.image}
                      title={project.title}
                      categoryLabel={project.categoryLabel}
                      aspectClass="aspect-[16/10]"
                      className="rounded-xl"
                      onClick={() => setSelectedModalProject(project)}
                    />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-ink-900/80 text-white text-[11px] font-mono px-2.5 py-1 rounded backdrop-blur pointer-events-none">
                      Click to expand
                    </div>
                  </div>
                </div>

                {/* Details Column */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-earth-600 uppercase tracking-widest font-semibold">
                      Featured Build 0{index + 1}
                    </span>
                    <span className="text-ivory-400">•</span>
                    <span className="text-xs font-mono text-ink-500">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-ink-900 tracking-tight mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-mono text-earth-700 font-medium mb-4">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-ink-700 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-ink-600">
                        <Check className="w-3.5 h-3.5 text-earth-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 text-xs font-mono rounded bg-ivory-100 border border-ivory-300 text-ink-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-ink-900 hover:bg-earth-600 text-ivory-100 text-xs font-semibold tracking-wide transition-colors shadow-xs"
                    >
                      <Github className="w-4 h-4" />
                      <span>Explore Repository</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-ivory-300 hover:border-ink-900 text-ink-800 text-xs font-semibold transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. ADDITIONAL TECHNICAL BUILDS CATALOG (Supporting 30+ Claim) */}
        <div className="pt-16 border-t border-ivory-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Layers className="w-4 h-4 text-earth-600" />
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-ink-900">
                  Technical Project Archive
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-mono text-ink-500">
                Additional implementations spanning AI, Quantum, Systems, and Data Science.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-mono text-ink-400 mr-2 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3 py-1 text-xs font-mono rounded-full transition-all ${
                    selectedCategory === cat.value
                      ? 'bg-earth-500 text-white font-semibold shadow-xs'
                      : 'bg-white border border-ivory-300 text-ink-600 hover:border-ink-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Archive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {displayedAdditional.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-xl bg-white border border-ivory-300 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono uppercase text-earth-600 font-semibold">
                      {project.categoryLabel}
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded text-ink-400 hover:text-earth-600 hover:bg-ivory-100 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                  <h4 className="text-lg font-bold text-ink-900 tracking-tight group-hover:text-earth-600 transition-colors mb-2">
                    {project.title}
                  </h4>

                  <p className="text-xs font-mono text-ink-500 mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-ink-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-ivory-200">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-ivory-100 text-ink-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Toggle View More */}
          {filteredAdditional.length > 4 && (
            <div className="flex justify-center">
              <button
                onClick={() => setShowAllAdditional(!showAllAdditional)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-ivory-300 hover:border-ink-900 bg-white text-ink-800 text-xs font-mono font-semibold transition-all shadow-xs"
              >
                <span>{showAllAdditional ? 'Show Fewer Projects' : `View All ${filteredAdditional.length} Projects`}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-earth-600" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox for Project Detail */}
      {selectedModalProject && (
        <LightboxModal
          isOpen={!!selectedModalProject}
          onClose={() => setSelectedModalProject(null)}
          title={selectedModalProject.title}
          subtitle={selectedModalProject.categoryLabel}
          imageSrc={selectedModalProject.image.src}
          imageAlt={selectedModalProject.image.alt}
          caption={selectedModalProject.image.caption}
          externalLink={selectedModalProject.githubUrl}
          externalLinkText="Open GitHub Repository"
          details={
            <div className="space-y-4">
              <p className="text-sm font-semibold text-ink-800">{selectedModalProject.tagline}</p>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">{selectedModalProject.description}</p>
              <div className="pt-2">
                <span className="text-xs font-mono font-bold text-ink-700 block mb-2">Technologies Used:</span>
                <div className="flex flex-wrap gap-2">
                  {selectedModalProject.technologies.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 text-xs font-mono rounded bg-ivory-200 text-ink-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          }
        />
      )}
    </section>
  );
};
