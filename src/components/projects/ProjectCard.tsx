import React from 'react';
import { Github, ExternalLink, ArrowRight, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  // Tier color styling
  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'Production / Deployed':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Completed Project':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Working Prototype':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      case 'Experimental Project':
        return 'bg-violet-500/10 text-violet-400 border-violet-500/30';
      case 'Learning Project':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default:
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
    }
  };

  return (
    <div className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-surface-card/70 border border-white/[0.08] hover:border-blue-500/40 hover:bg-surface-card transition-all duration-300 shadow-xl hover:shadow-[0_0_35px_rgba(59,130,246,0.15)] overflow-hidden">
      {/* Subtle corner gradient hover effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 group-hover:bg-blue-600/15 rounded-full blur-2xl transition-all pointer-events-none" />

      <div>
        {/* Badges Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="font-mono text-[11px] text-text-muted px-2.5 py-0.5 rounded-full bg-surface-elevated border border-white/5 uppercase tracking-wider">
            {project.category}
          </span>
          <span className={`font-mono text-[10px] px-2.5 py-0.5 rounded-full border ${getTierBadge(project.tier)}`}>
            {project.tier}
          </span>
        </div>

        {/* Highlight Metric Pill */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-950/40 border border-blue-500/20 text-xs font-mono text-blue-300 font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>{project.highlightMetric}</span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary group-hover:text-blue-300 transition-colors mb-1.5 leading-snug">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-text-muted mb-4 line-clamp-1">
          {project.subtitle}
        </p>

        {/* Summary Description */}
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6 line-clamp-3">
          {project.summary}
        </p>
      </div>

      <div>
        {/* Technologies Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-white/[0.06] mb-5">
          {project.tags.slice(0, 4).map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-surface-elevated border border-white/5 text-[11px] font-mono text-text-muted"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="font-mono text-[11px] text-text-muted px-1.5">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Card Action Row */}
        <div className="flex items-center justify-between gap-3 pt-2">
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-surface-elevated text-text-muted hover:text-text-primary hover:border-white/20 border border-white/10 transition-colors"
              title="GitHub Repository"
              aria-label={`GitHub Repository for ${project.title}`}
            >
              <Github className="w-4 h-4" />
            </a>
          ) : (
            <div className="p-2.5 rounded-xl bg-surface-elevated/40 border border-white/5 text-text-muted text-[11px] font-mono" title={project.links.statusNote || 'Local repository'}>
              <Terminal className="w-4 h-4 opacity-50" />
            </div>
          )}

          <button
            onClick={() => onOpenCaseStudy(project)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/20 hover:border-blue-600 text-xs font-semibold tracking-wide transition-all group/btn"
          >
            <span>Deep Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
