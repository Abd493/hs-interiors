import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import BeforeAfter from './BeforeAfter';
import { categories, projects } from '../data/projects';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalIdx, setActiveModalIdx] = useState(null);

  const filteredProjects = projects.filter(
    p => selectedCategory === 'All' || p.cat === selectedCategory
  );
  const isSingle = filteredProjects.length === 1;

  useEffect(() => {
    if (activeModalIdx === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModalIdx(null);
      if (e.key === 'ArrowRight') {
        setActiveModalIdx((prev) => (prev + 1) % filteredProjects.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveModalIdx(
          (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIdx, filteredProjects.length]);

  return (
    <section id="portfolio" className="bg-secondary px-6 py-28 border-y border-border/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Portfolio" title="Selected projects" />

        {/* Filter categories */}
        <div className="reveal mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-all rounded-full font-medium ${
                selectedCategory === cat
                  ? 'bg-gold text-[#12100F] font-semibold shadow-md'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-gold shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4K Projects Gallery */}
        <div
          className={`gap-6 ${
            isSingle ? 'columns-1' : 'columns-1 sm:columns-2 lg:columns-3'
          }`}
        >
          {filteredProjects.map((project, idx) => (
            <button
              key={project.title}
              onClick={() => setActiveModalIdx(idx)}
              className="group relative mb-6 block w-full overflow-hidden break-inside-avoid rounded-2xl shadow-soft text-left border border-border/60 hover:border-gold hover:shadow-[0_15px_35px_-8px_rgba(197,155,39,0.25)] transition-all duration-500"
            >
              <img
                src={project.src}
                alt={project.title}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  project.tall
                    ? 'aspect-[4/5]'
                    : isSingle
                    ? 'aspect-[16/9]'
                    : 'aspect-[4/3]'
                }`}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent p-6 text-left opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="eyebrow text-gold-soft">{project.cat}</span>
                <span className="mt-1 font-serif text-2xl text-white">
                  {project.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Before / After section */}
        <div className="mt-24 grid items-center gap-12 lg:grid-cols-[1fr_2fr]">
          <div className="reveal">
            <p className="eyebrow mb-4">Before / After</p>
            <h3 className="font-serif text-4xl text-cream">
              From bare shell to signature home
            </h3>
            <p className="mt-5 font-light leading-relaxed text-muted-foreground">
              Drag the handle to compare an empty space with a finished, styled living area.
            </p>
          </div>
          <BeforeAfter />
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalIdx !== null && filteredProjects[activeModalIdx] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-6 backdrop-blur-md"
          onClick={() => setActiveModalIdx(null)}
        >
          <button
            className="absolute right-6 top-6 text-cream hover:text-gold transition-colors"
            aria-label="Close"
            onClick={() => setActiveModalIdx(null)}
          >
            <X className="h-8 w-8" />
          </button>

          <button
            className="absolute left-4 text-cream hover:text-gold transition-colors"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              setActiveModalIdx(
                (activeModalIdx - 1 + filteredProjects.length) %
                  filteredProjects.length
              );
            }}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl"
          >
            <img
              src={filteredProjects[activeModalIdx].src}
              alt={filteredProjects[activeModalIdx].title}
              className="max-h-[80vh] w-auto object-contain rounded-2xl shadow-2xl mx-auto border border-white/10"
            />
            <figcaption className="mt-4 text-center font-serif text-2xl text-cream">
              {filteredProjects[activeModalIdx].title}{' '}
              <span className="eyebrow ml-3 text-gold-soft">
                {filteredProjects[activeModalIdx].cat}
              </span>
            </figcaption>
          </figure>

          <button
            className="absolute right-4 text-cream hover:text-gold transition-colors"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              setActiveModalIdx(
                (activeModalIdx + 1) % filteredProjects.length
              );
            }}
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </section>
  );
}
