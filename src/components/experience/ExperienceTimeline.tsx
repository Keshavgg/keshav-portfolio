import React, { useState } from 'react';
import { Building2, Calendar, MapPin, CheckCircle, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';
import { experiences } from '../../data/experience';

export const ExperienceTimeline: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>(experiences[0].id);

  return (
    <section id="experience" className="py-24 relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>02 // INDUSTRY TRACK RECORD</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-gradient-silver tracking-tight">
            Verified Enterprise Engineering
          </h2>
          <p className="mt-3 text-text-secondary text-sm sm:text-base max-w-2xl">
            Real production systems architected during selective internships at leading global financial and fintech corporations.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp) => {
            const isSelected = selectedExpId === exp.id;
            return (
              <div
                key={exp.id}
                onClick={() => setSelectedExpId(exp.id)}
                className={`p-6 sm:p-8 rounded-3xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-surface-elevated/90 border-blue-500/40 shadow-2xl ring-1 ring-blue-500/20'
                    : 'bg-surface-card/60 border-white/[0.07] hover:border-white/20'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className="font-display font-bold text-2xl sm:text-3xl text-text-primary">
                        {exp.company}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium">
                        {exp.type}
                      </span>
                      {exp.isVerified && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>{exp.verificationBadge}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-semibold text-lg sm:text-xl text-blue-300">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-muted">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{exp.period} ({exp.duration})</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics Banner */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-surface-card border border-white/5 mb-6">
                  {exp.keyMetrics.map((metric, i) => (
                    <div key={i}>
                      <div className="font-mono text-xs text-text-muted">{metric.label}</div>
                      <div className="font-display font-bold text-base sm:text-lg text-text-primary mt-0.5">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Responsibilities */}
                <div className="space-y-2.5 mb-6">
                  <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">
                    Key Technical Contributions & Architectural Scope
                  </div>
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Project Spotlight if Available */}
                {exp.projectSpotlight && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950/30 to-indigo-950/20 border border-blue-500/20 mb-6">
                    <div className="flex items-center gap-2 font-mono text-xs text-blue-400 font-semibold mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>PROJECT SPOTLIGHT: {exp.projectSpotlight.name}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-text-secondary mb-3">
                      {exp.projectSpotlight.description}
                    </p>
                    <div className="space-y-1.5">
                      {exp.projectSpotlight.highlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-text-muted">
                          <span className="text-blue-400">•</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies Badges */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-xs text-text-muted mr-2">STACK:</span>
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-surface-card border border-white/10 text-xs font-mono text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
