import React, { useState } from 'react';
import { Project } from '../../types';
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Sparkles, Layers, ShieldCheck, Cpu } from 'lucide-react';

interface ProjectsCanvasProps {
  featuredProjects: Project[];
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectsCanvas: React.FC<ProjectsCanvasProps> = ({
  featuredProjects,
  onOpenCaseStudy,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = featuredProjects.length;
  const project = featuredProjects[currentIndex] || featuredProjects[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  if (!project) return null;

  return (
    <div className="relative border border-[var(--border-color)] bg-[var(--card-bg)] rounded-xl overflow-hidden p-6 sm:p-10 lg:p-12 transition-all">
      {/* Top Controls Row (Ashmit exact style) */}
      <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-6 mb-8">
        {/* Counter: [ 01 / 08 ] */}
        <div className="flex items-baseline gap-2 font-mono text-sm sm:text-base text-[var(--text-color)] font-bold">
          <span className="text-[var(--text-gray-color)]">PROJECT //</span>
          <span>{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="text-[var(--text-gray-second-color)]">/</span>
          <span className="text-[var(--text-gray-color)]">{String(total).padStart(2, '0')}</span>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[var(--border-color)] hover:bg-[var(--pill-bg)] text-xs font-mono uppercase tracking-wider text-[var(--text-color)] transition-all"
            aria-label="Previous project"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">PREV</span>
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[var(--border-color)] hover:bg-[var(--pill-bg)] text-xs font-mono uppercase tracking-wider text-[var(--text-color)] transition-all"
            aria-label="Next project"
          >
            <span className="hidden sm:inline">NEXT</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Canvas Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Huge Title & Technical Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            {/* Category and Tier Chips */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider">
              <span className="px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--pill-bg)] text-[var(--text-color)]">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5">
                {project.tier}
              </span>
            </div>

            {/* Giant Title */}
            <h3 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[var(--text-color)] tracking-tight uppercase leading-[0.95]">
              {project.title}
            </h3>

            {/* Subtitle */}
            <div className="font-mono text-xs sm:text-sm text-[var(--text-gray-color)] uppercase tracking-wider">
              {project.subtitle}
            </div>
          </div>

          {/* Highlight Metric Pill */}
          <div className="inline-flex items-center gap-2 p-3 rounded-lg border border-[var(--border-color)] bg-[var(--pill-bg)] font-mono text-xs text-[var(--text-color)] font-semibold w-max">
            <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{project.highlightMetric}</span>
          </div>

          {/* Summary */}
          <p className="font-mono text-xs sm:text-sm text-[var(--text-color)] leading-relaxed">
            {project.summary}
          </p>

          {/* Tech Stack Pills */}
          <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-gray-color)]">
              // VERIFIED STACK & ARCHITECTURE
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded border border-[var(--border-color)] bg-[var(--bg-color)] font-mono text-xs text-[var(--text-color)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--text-color)] text-[var(--bg-color)] font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-85 transition-opacity"
            >
              <span>DEEP ARCHITECTURE DIVE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--border-color)] text-[var(--text-color)] font-mono text-xs uppercase tracking-wider hover:bg-[var(--pill-bg)] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB REPO</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Visual Telemetry Card (Ashmit Canvas Style) */}
        <div className="lg:col-span-5 h-[340px] sm:h-[400px] border border-[var(--border-color)] bg-[var(--bg-color)] rounded-lg p-6 flex flex-col justify-between font-mono text-xs shadow-inner relative overflow-hidden">
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.04)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:16px_16px] pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3 z-10">
            <div className="flex items-center gap-2 text-[var(--text-color)] font-bold">
              <Layers className="w-4 h-4 text-emerald-500" />
              <span>SYSTEM SCHEMATIC</span>
            </div>
            <span className="text-[10px] text-[var(--text-gray-color)] uppercase tracking-wider">
              {project.architecture.diagramType || 'PIPELINE'}
            </span>
          </div>

          {/* Interactive Steps Flow */}
          <div className="my-auto space-y-3 z-10">
            <div className="text-[10px] uppercase tracking-widest text-[var(--text-gray-color)]">
              EXECUTION PIPELINE:
            </div>
            <div className="space-y-2">
              {project.architecture.dataFlow.slice(0, 3).map((step, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded bg-[var(--card-bg)] border border-[var(--border-color)] text-[11px] leading-snug text-[var(--text-color)]"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Telemetry */}
          <div className="border-t border-[var(--border-color)] pt-3 flex items-center justify-between text-[10px] text-[var(--text-gray-color)] z-10">
            <span>ENGINEERING VERIFIED</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">100% PRODUCTION SPECS</span>
          </div>
        </div>
      </div>

      {/* Mini Thumbnails / Indicator Dots */}
      <div className="flex items-center justify-center gap-2 pt-8 mt-8 border-t border-[var(--border-color)]">
        {featuredProjects.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all ${
              idx === currentIndex
                ? 'w-8 h-2 rounded-full bg-[var(--text-color)]'
                : 'w-2 h-2 rounded-full bg-[var(--border-color)] hover:bg-[var(--text-gray-color)]'
            }`}
            aria-label={`Jump to project ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
