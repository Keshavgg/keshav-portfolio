import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, FolderArchive, LayoutGrid, Eye } from 'lucide-react';
import { Project } from '../../types';
import { ProjectCard } from './ProjectCard';
import { ProjectsCanvas } from './ProjectsCanvas';
import { getAssetUrl } from '../../utils/assets';

interface ProjectGridProps {
  projects: Project[];
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onOpenCaseStudy }) => {
  const [viewMode, setViewMode] = useState<'canvas' | 'grid'>('canvas');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTier, setSelectedTier] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Top featured projects for Canvas
  const featuredProjects = useMemo(() => {
    return projects
      .filter((p) => p.featured)
      .sort((a, b) => (a.featuredRank || 99) - (b.featuredRank || 99));
  }, [projects]);

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
    'Learning Project'
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

  const inventoryUrl = getAssetUrl('/PROJECT_INVENTORY.md');

  return (
    <section id="projects" className="py-24 border-b border-[var(--border-color)] bg-[var(--bg-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-8 border-b border-[var(--border-color)] mb-10">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--text-gray-color)] mb-2">
              [ 03 // SELECTED WORKS ]
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-[var(--text-color)] tracking-tight uppercase">
              ARCHITECTED & AUDITED SYSTEMS
            </h2>
            <p className="mt-2 font-mono text-xs sm:text-sm text-[var(--text-gray-color)] max-w-2xl">
              Production AI pipelines, real-time voice bridges, and high-concurrency microservices verified with source inspection.
            </p>
          </div>
          
          {/* View Mode Switcher (Ashmit Canvas vs Grid) */}
          <div className="flex items-center gap-2 p-1 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] font-mono text-xs uppercase tracking-wider shrink-0">
            <button
              onClick={() => setViewMode('canvas')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all ${
                viewMode === 'canvas'
                  ? 'bg-[var(--text-color)] text-[var(--bg-color)] font-semibold'
                  : 'text-[var(--text-gray-color)] hover:text-[var(--text-color)]'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>CANVAS SLIDER</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all ${
                viewMode === 'grid'
                  ? 'bg-[var(--text-color)] text-[var(--bg-color)] font-semibold'
                  : 'text-[var(--text-gray-color)] hover:text-[var(--text-color)]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>ARCHIVE GRID ({projects.length})</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Ashmit Interactive Canvas */}
        {viewMode === 'canvas' ? (
          <div className="space-y-8">
            <ProjectsCanvas
              featuredProjects={featuredProjects}
              onOpenCaseStudy={onOpenCaseStudy}
            />

            {/* Quick jump to all archive button */}
            <div className="flex items-center justify-between font-mono text-xs text-[var(--text-gray-color)] pt-4">
              <span>EXPLORING {featuredProjects.length} CURATED HIGHLIGHTS</span>
              <button
                onClick={() => setViewMode('grid')}
                className="link-line text-[var(--text-color)] uppercase tracking-wider font-semibold"
              >
                VIEW FULL ARCHIVE OF ALL {projects.length} REPOSITORIES →
              </button>
            </div>
          </div>
        ) : (
          /* View Mode 2: Full Filterable Grid */
          <div>
            {/* Filter Controls Bar */}
            <div className="space-y-4 mb-10 p-5 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-sm">
              {/* Top Row: Search & Tier Select */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative w-full sm:flex-1">
                  <Search className="w-4 h-4 text-[var(--text-gray-color)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search systems by title, tech stack (e.g. FastAPI, LangGraph, vLLM)..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-[var(--bg-color)] border border-[var(--border-color)] text-xs text-[var(--text-color)] placeholder:text-[var(--text-gray-second-color)] focus:outline-none focus:border-[var(--text-color)] font-mono"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[var(--text-gray-color)] hover:text-[var(--text-color)]"
                    >
                      CLEAR
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                  <SlidersHorizontal className="w-4 h-4 text-[var(--text-gray-color)] shrink-0 hidden sm:block" />
                  <select
                    value={selectedTier}
                    onChange={(e) => setSelectedTier(e.target.value)}
                    className="w-full sm:w-auto px-3.5 py-2 rounded-lg bg-[var(--bg-color)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-color)] focus:outline-none focus:border-[var(--text-color)]"
                  >
                    {tiers.map((tier) => (
                      <option key={tier} value={tier}>
                        {tier === 'All' ? 'All Tiers' : tier}
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
                      className={`px-3 py-1 rounded text-xs font-mono whitespace-nowrap transition-all ${
                        isActive
                          ? 'bg-[var(--text-color)] text-[var(--bg-color)] font-semibold'
                          : 'bg-[var(--bg-color)] text-[var(--text-gray-color)] hover:text-[var(--text-color)] border border-[var(--border-color)]'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Result Count Status */}
              <div className="flex items-center justify-between pt-2 border-t border-[var(--border-color)] text-xs font-mono text-[var(--text-gray-color)]">
                <div>
                  SHOWING <span className="text-[var(--text-color)] font-bold">{filteredProjects.length}</span> OF{' '}
                  <span className="text-[var(--text-color)]">{projects.length}</span> SYSTEMS
                </div>
                {(selectedCategory !== 'All' || selectedTier !== 'All' || searchQuery !== '') && (
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setSelectedTier('All');
                      setSearchQuery('');
                    }}
                    className="link-line text-[var(--text-color)] uppercase tracking-wider font-semibold"
                  >
                    RESET ALL FILTERS
                  </button>
                )}
              </div>
            </div>

            {/* Grid */}
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
              <div className="p-12 text-center rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] space-y-3 font-mono">
                <div className="font-bold text-base text-[var(--text-color)] uppercase">
                  No matching systems found
                </div>
                <p className="text-xs text-[var(--text-gray-color)]">
                  Try adjusting your search criteria or resetting filters.
                </p>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
