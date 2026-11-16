import React from 'react';
import { Github, ArrowUpRight, Sparkles, Terminal, ArrowRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <div className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--text-color)] transition-all duration-300 shadow-sm">
      <div>
        {/* Badges Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 font-mono text-[10px] uppercase tracking-wider">
          <span className="text-[var(--text-gray-color)] px-2.5 py-1 rounded-full border border-[var(--border-color)] bg-[var(--pill-bg)]">
            {project.category}
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/5">
            {project.tier}
          </span>
        </div>

        {/* Highlight Metric */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[var(--border-color)] bg-[var(--pill-bg)] text-xs font-mono text-[var(--text-color)] font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span>{project.highlightMetric}</span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-display font-black text-2xl text-[var(--text-color)] group-hover:opacity-85 transition-opacity mb-1 leading-snug uppercase">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-[var(--text-gray-color)] mb-4 line-clamp-1 uppercase">
          {project.subtitle}
        </p>

        {/* Summary Description */}
        <p className="font-mono text-xs text-[var(--text-color)] leading-relaxed mb-6 line-clamp-3">
          {project.summary}
        </p>
      </div>

      <div>
        {/* Technologies Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-[var(--border-color)] mb-5">
          {project.tags.slice(0, 4).map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded border border-[var(--border-color)] bg-[var(--bg-color)] text-[10px] font-mono text-[var(--text-color)]"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="font-mono text-[10px] text-[var(--text-gray-color)] px-1">
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
              className="p-2.5 rounded-lg border border-[var(--border-color)] text-[var(--text-color)] hover:bg-[var(--pill-bg)] transition-colors"
              title="GitHub Repository"
              aria-label={`GitHub Repository for ${project.title}`}
            >
              <Github className="w-4 h-4" />
            </a>
          ) : (
            <div className="p-2.5 rounded-lg border border-[var(--border-color)]/50 text-[var(--text-gray-color)] opacity-40">
              <Terminal className="w-4 h-4" />
            </div>
          )}

          <button
            onClick={() => onOpenCaseStudy(project)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--text-color)] text-[var(--text-color)] hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] text-xs font-mono font-semibold tracking-wider transition-all"
          >
            <span>DEEP CASE STUDY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
