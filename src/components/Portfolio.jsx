import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Plus, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import BeforeAfter from './BeforeAfter';
import ProgressiveImage from './ProgressiveImage';
import { categories, projects } from '../data/projects';

const INITIAL_BATCH = 6;
const BATCH_STEP = 6;

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalIdx, setActiveModalIdx] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);

  const filteredProjects = projects.filter(
    p => selectedCategory === 'All' || p.cat === selectedCategory
  );

  // When category changes, reset visible count
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setVisibleCount(cat === 'All' ? INITIAL_BATCH : filteredProjects.length);
  };

  const displayedProjects = selectedCategory === 'All'
    ? filteredProjects.slice(0, visibleCount)
    : filteredProjects;

  const hasMore = selectedCategory === 'All' && visibleCount < filteredProjects.length;
  const remainingCount = filteredProjects.length - visibleCount;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + BATCH_STEP, filteredProjects.length));
  };

  const isSingle = displayedProjects.length === 1;

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
    <section id="portfolio" className="bg-secondary px-6 py-24 border-y border-border">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Portfolio" title="Selected projects" />

        {/* Filter categories */}
        <div className="reveal mb-12 flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] transition-all rounded-full font-semibold ${
                selectedCategory === cat
                  ? 'bg-charcoal text-white shadow-sm'
                  : 'bg-white border border-border text-muted-foreground hover:text-charcoal hover:border-charcoal/40 shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Gallery - Crisp Clean Responsive Grid */}
        <div
          className={`grid gap-6 transition-all duration-500 ${
            isSingle ? 'grid-cols-1 max-w-3xl mx-auto' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {displayedProjects.map((project, idx) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setActiveModalIdx(idx)}
              aria-label={`View project: ${project.title} in ${project.cat}`}
              className="group relative block w-full overflow-hidden rounded-2xl shadow-soft text-left border border-border hover:border-gold/70 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <ProgressiveImage
                src={project.src}
                alt={project.title}
                aspectRatio={isSingle ? 'aspect-[16/9]' : 'aspect-[4/3]'}
                containerClassName="w-full"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/25 to-transparent p-6 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                <span className="eyebrow text-[#E5C365]">{project.cat}</span>
                <span className="mt-1 font-serif text-2xl text-white">
                  {project.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Step-wise "Load More" User-Friendly Controls */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="group inline-flex items-center gap-3 rounded-full border border-border bg-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal shadow-sm transition-all duration-300 hover:border-charcoal hover:bg-charcoal hover:text-white"
            >
              <Plus className="h-4 w-4 text-gold group-hover:text-white transition-colors" />
              <span>Explore More Projects ({remainingCount} Remaining)</span>
            </button>
            <p className="mt-3 text-[0.7rem] uppercase tracking-widest text-muted-foreground">
              Showing {displayedProjects.length} of {filteredProjects.length} Signature Projects
            </p>
          </div>
        )}

        {/* Before / After section */}
        <div className="mt-24 grid items-center gap-12 lg:grid-cols-[1fr_2fr]">
          <div className="reveal">
            <p className="eyebrow mb-4">Before / After</p>
            <h3 className="font-serif text-4xl font-semibold text-foreground">
              From bare shell to signature home
            </h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Drag the handle to compare an empty space with a finished, styled living area.
            </p>
          </div>
          <BeforeAfter />
        </div>
      </div>

      {/* Lightbox Modal with WebP optimization */}
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
            <picture>
              <source
                type="image/webp"
                srcSet={filteredProjects[activeModalIdx].src.replace(/\.(jpg|jpeg)$/i, '.webp')}
              />
              <img
                src={filteredProjects[activeModalIdx].src}
                alt={filteredProjects[activeModalIdx].title}
                loading="lazy"
                decoding="async"
                className="max-h-[80vh] w-auto object-contain rounded-2xl shadow-2xl mx-auto border border-white/10"
              />
            </picture>
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
