import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, Sparkles, FolderArchive, Terminal } from 'lucide-react';
import { Project, ProjectCategory, ProjectTier } from '../../types';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onOpenCaseStudy }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTier, setSelectedTier] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'AI / ML Systems',
    'Backend & Cloud',
    'Full-Stack',
    'Data & Analytics',
    'Experiments & Tools'
  ];

  const tiers = [
    'All',
    'Production / Deployed',
    'Completed Project',
    'Working Prototype',
    'Experimental Project',
    'Learning Project',
    'Concept / Proposed Idea'
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchTier = selectedTier === 'All' || p.tier === selectedTier;
      const matchSearch =
        searchQuery === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCategory && matchTier && matchSearch;
    });
  }, [projects, selectedCategory, selectedTier, searchQuery]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>03 // COMPLETE PROJECT INVENTORY</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-gradient-silver tracking-tight">
                Architected & Audited Systems
              </h2>
              <p className="mt-2 text-text-secondary text-sm sm:text-base max-w-2xl">
                Every accessible project represented truthfully with deep technical documentation. No handpicked 3-project shortcuts.
              </p>
            </div>
            
            <a
              href="/PROJECT_INVENTORY.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-elevated border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-all shrink-0"
            >
              <FolderArchive className="w-4 h-4" />
              <span>PROJECT_INVENTORY.MD (21 Systems)</span>
            </a>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4 mb-10 p-5 rounded-2xl bg-surface-elevated/40 border border-white/[0.07] backdrop-blur-md">
          
          {/* Top Row: Search & Tier Dropdown */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:flex-1">
              <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all 21 systems by name, keyword, or technology (e.g. RAG, Spring Boot, OCR)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-card border border-white/10 text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-blue-500 transition-colors font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-text-muted hover:text-text-primary"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* Tier Select */}
            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
              <SlidersHorizontal className="w-4 h-4 text-text-muted shrink-0 hidden sm:block" />
              <select
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value)}
                className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl bg-surface-card border border-white/10 text-xs font-mono text-text-secondary focus:outline-none focus:border-blue-500"
              >
                {tiers.map((tier) => (
                  <option key={tier} value={tier}>
                    {tier === 'All' ? 'All Tiers (1–6)' : tier}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Bottom Row: Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold shadow-md'
                      : 'bg-surface-card hover:bg-white/5 text-text-secondary hover:text-text-primary border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Result Count Status */}
          <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs font-mono text-text-muted">
            <div>
              SHOWING <span className="text-blue-400 font-bold">{filteredProjects.length}</span> OF{' '}
              <span className="text-text-secondary">{projects.length}</span> SYSTEMS
            </div>
            {(selectedCategory !== 'All' || selectedTier !== 'All' || searchQuery !== '') && (
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedTier('All');
                  setSearchQuery('');
                }}
                className="text-cyan-400 hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={onOpenCaseStudy}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl bg-surface-card/40 border border-white/5 space-y-3">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto text-text-muted">
              <Search className="w-5 h-5" />
            </div>
            <div className="font-display font-semibold text-lg text-text-primary">
              No matching projects found
            </div>
            <p className="text-xs text-text-muted max-w-sm mx-auto font-mono">
              Try adjusting your query or resetting category/tier filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedTier('All');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 text-xs font-mono"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
