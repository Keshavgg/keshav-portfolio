import React, { useEffect } from 'react';
import { 
  X, ExternalLink, Github, CheckCircle2, AlertTriangle, Layers, 
  Cpu, Wrench, Lightbulb, Compass, ChevronLeft, ChevronRight, FileCode, Check
} from 'lucide-react';
import { Project } from '../../types';
import { ArchitectureDiagram } from './ArchitectureDiagram';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  allProjects: Project[];
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 md:p-8 animate-fadeIn">
      {/* Background click overlay */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Modal Shell */}
      <div 
        className="relative w-full max-w-4xl bg-[#090C12] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#090C12]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold">
              {project.category}
            </span>
            <span className="font-mono text-xs text-text-muted hidden sm:inline-block">
              // CASE STUDY
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev/Next Quick Navigation */}
            <div className="flex items-center border border-white/10 rounded-lg p-0.5 mr-2">
              <button
                onClick={() => onSelectProject(prevProject)}
                className="p-1.5 text-text-muted hover:text-text-primary rounded hover:bg-white/5 transition-colors"
                title={`Previous: ${prevProject.title}`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectProject(nextProject)}
                className="p-1.5 text-text-muted hover:text-text-primary rounded hover:bg-white/5 transition-colors"
                title={`Next: ${nextProject.title}`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-surface-elevated text-text-muted hover:text-text-primary hover:bg-white/10 transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-12">
          
          {/* Top Hero Section */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="font-mono text-xs text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/20">
                STATUS: {project.tier.toUpperCase()}
              </span>
              <span className="font-mono text-xs text-amber-400 px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/20">
                METRIC: {project.highlightMetric}
              </span>
            </div>

            <h1 className="font-display font-bold text-2xl sm:text-4xl text-gradient-silver tracking-tight mb-2">
              {project.title}
            </h1>
            <p className="text-sm sm:text-base text-blue-300/90 font-medium">
              {project.subtitle}
            </p>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-3 mt-5 pt-4 border-t border-white/10">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-elevated border border-white/10 hover:border-white/30 text-xs font-mono text-text-primary transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
              {project.links.liveDemo && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-mono text-white transition-all shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.links.statusNote && (
                <span className="text-xs font-mono text-text-muted italic">
                  Note: {project.links.statusNote}
                </span>
              )}
            </div>
          </div>

          {/* Section A: Project Overview */}
          <div className="space-y-3">
            <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>A. Project Overview</span>
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Section B: The Problem */}
          <div className="space-y-3 p-5 rounded-2xl bg-surface-card border border-white/5">
            <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-rose-400">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              <span>B. The Practical Problem</span>
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Section C: The Solution */}
          <div className="space-y-3 p-5 rounded-2xl bg-surface-card border border-white/5">
            <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>C. The Engineered Solution</span>
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Section D: System Architecture */}
          <div className="space-y-3">
            <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>D. System Architecture</span>
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {project.architecture.overview}
            </p>
            {/* Visual Architecture Diagram */}
            <ArchitectureDiagram project={project} />
          </div>

          {/* Section E: Technology Breakdown */}
          <div className="space-y-4">
            <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-violet-400">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span>E. Technology Breakdown & Engineering Value</span>
            </h2>
            <div className="space-y-4">
              {project.techBreakdown.map((cat, i) => (
                <div key={i} className="p-4 rounded-xl bg-surface-elevated/50 border border-white/5 space-y-2.5">
                  <div className="font-mono text-xs text-text-muted font-bold uppercase tracking-wider">
                    {cat.category}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.items.map((item, j) => (
                      <div key={j} className="p-3 rounded-lg bg-surface-card border border-white/5">
                        <div className="font-mono font-semibold text-xs text-text-primary mb-1">
                          {item.name}
                        </div>
                        <div className="text-xs text-text-secondary mb-1.5">
                          {item.purpose}
                        </div>
                        <div className="text-[11px] font-mono text-cyan-400/90 leading-tight">
                          Advantage: {item.advantage}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section F: Engineering Challenges */}
          {project.challenges.length > 0 && (
            <div className="space-y-4">
              <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>F. Engineering Challenges & Technical Resolutions</span>
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {project.challenges.map((c, i) => (
                  <div key={i} className="p-4 rounded-xl bg-surface-card border border-white/5 space-y-2">
                    <div className="font-display font-semibold text-sm text-text-primary">
                      {c.challenge}
                    </div>
                    <div className="text-xs text-text-secondary leading-relaxed">
                      <span className="font-mono text-text-muted font-bold">Context: </span>
                      {c.context}
                    </div>
                    <div className="text-xs text-cyan-300 leading-relaxed pt-2 border-t border-white/5">
                      <span className="font-mono text-blue-400 font-bold">Resolution: </span>
                      {c.resolution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section G: Engineering Decisions & Trade-Offs */}
          {project.decisions.length > 0 && (
            <div className="space-y-4">
              <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-purple-400">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>G. Architectural Decisions & Trade-Offs</span>
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {project.decisions.map((d, i) => (
                  <div key={i} className="p-4 rounded-xl bg-surface-card border border-white/5 space-y-2">
                    <div className="font-display font-semibold text-sm text-text-primary">
                      Decision: {d.choice}
                    </div>
                    <div className="text-xs text-text-secondary leading-relaxed">
                      <span className="font-mono text-text-muted font-bold">Rationale: </span>
                      {d.rationale}
                    </div>
                    <div className="text-xs text-amber-300/90 leading-relaxed font-mono">
                      Trade-Off: {d.tradeOff}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section H: What I Learned */}
          {project.learnings.length > 0 && (
            <div className="space-y-3">
              <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-blue-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>H. Key Engineering Learnings</span>
              </h2>
              <div className="space-y-2">
                {project.learnings.map((l, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                    <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section I: Future Improvements (Implemented vs Proposed) */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>I. Implemented Features vs. Proposed Enhancements</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface-card border border-emerald-500/20 space-y-2">
                <div className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
                  ✔ Verified Implemented
                </div>
                <div className="space-y-1.5 text-xs text-text-secondary">
                  {project.improvements.implemented.map((imp, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{imp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface-card border border-blue-500/20 space-y-2">
                <div className="font-mono text-xs text-blue-400 font-bold uppercase tracking-wider">
                  ⚡ Proposed Roadmap
                </div>
                <div className="space-y-1.5 text-xs text-text-secondary">
                  {project.improvements.proposed.map((prop, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 shrink-0 font-mono">→</span>
                      <span>{prop}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section J: Project Links & Tags */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-widest text-text-muted">
              J. System Tags & Identifiers
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-surface-elevated border border-white/10 text-xs font-mono text-text-secondary"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Navigation */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-3.5 bg-[#090C12]/95 backdrop-blur-md border-t border-white/10">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-text-primary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">PREV:</span> {prevProject.title.slice(0, 24)}...
          </button>

          <span className="font-mono text-xs text-text-muted">
            {currentIndex + 1} / {allProjects.length}
          </span>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-text-primary transition-colors"
          >
            <span className="hidden sm:inline">NEXT:</span> {nextProject.title.slice(0, 24)}...
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
