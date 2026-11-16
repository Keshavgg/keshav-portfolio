import React, { useState } from 'react';
import { Calendar, MapPin, CheckCircle2, ShieldCheck, Sparkles, ArrowUpRight } from 'lucide-react';
import { experiences } from '../../data/experience';

export const ExperienceTimeline: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>(experiences[0].id);

  return (
    <section id="experience" className="py-24 border-b border-[var(--border-color)] bg-[var(--bg-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-8 border-b border-[var(--border-color)] mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--text-gray-color)] mb-2">
              [ 04 // CAREER & IMPACT ]
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-[var(--text-color)] tracking-tight uppercase">
              ENTERPRISE ENGINEERING & VERIFIED INTERNSHIPS
            </h2>
            <p className="mt-2 font-mono text-xs sm:text-sm text-[var(--text-gray-color)] max-w-2xl">
              Selective engineering internships across global payments (Visa), travel tech (Atlys), and digital banking (NPST).
            </p>
          </div>
          <div className="font-mono text-xs text-[var(--text-gray-color)] uppercase tracking-wider shrink-0">
            3 VERIFIED COHORTS // 2024–2026
          </div>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-8">
          {experiences.map((exp) => {
            const isSelected = selectedExpId === exp.id;

            return (
              <div
                key={exp.id}
                onClick={() => setSelectedExpId(exp.id)}
                className={`p-6 sm:p-10 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--card-bg)] border-[var(--text-color)] shadow-md'
                    : 'bg-[var(--card-bg)] border-[var(--border-color)] hover:border-[var(--text-gray-second-color)]'
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6 pb-6 border-b border-[var(--border-color)]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-display font-black text-3xl sm:text-4xl text-[var(--text-color)] uppercase tracking-tight">
                        {exp.company}
                      </span>
                      <span className="px-3 py-0.5 rounded-full border border-[var(--border-color)] bg-[var(--pill-bg)] text-xs font-mono text-[var(--text-color)] uppercase">
                        {exp.type}
                      </span>
                      {exp.isVerified && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>{exp.verificationBadge}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="font-mono font-bold text-sm sm:text-base text-[var(--text-color)] uppercase tracking-wide">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-gray-color)] uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[var(--text-color)]" />
                      <span>{exp.period} ({exp.duration})</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[var(--text-color)]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Metrics Banner */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-lg bg-[var(--pill-bg)] border border-[var(--border-color)] mb-6">
                  {exp.keyMetrics.map((metric, i) => (
                    <div key={i}>
                      <div className="font-mono text-[10px] uppercase text-[var(--text-gray-color)] tracking-wider">
                        {metric.label}
                      </div>
                      <div className="font-display font-extrabold text-lg sm:text-xl text-[var(--text-color)] mt-0.5 tracking-tight uppercase">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <p className="font-mono text-xs sm:text-sm text-[var(--text-color)] leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Key Technical Bullet Points */}
                <div className="space-y-2.5 mb-6">
                  <div className="font-mono text-[10px] text-[var(--text-gray-color)] uppercase tracking-widest font-bold">
                    // KEY CONTRIBUTIONS & VERIFIED ARCHITECTURAL DELIVERABLES
                  </div>
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs font-mono text-[var(--text-color)] leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Project Spotlight */}
                {exp.projectSpotlight && (
                  <div className="p-4 sm:p-5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-color)] mb-6 font-mono text-xs">
                    <div className="flex items-center gap-2 text-[var(--text-color)] font-bold mb-2 uppercase tracking-wide">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                      <span>PROJECT SPOTLIGHT: {exp.projectSpotlight.name}</span>
                    </div>
                    <p className="text-[var(--text-gray-color)] mb-3 leading-relaxed">
                      {exp.projectSpotlight.description}
                    </p>
                    <div className="space-y-1.5">
                      {exp.projectSpotlight.highlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-[var(--text-color)]">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies Badges */}
                <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] text-[var(--text-gray-color)] uppercase tracking-widest mr-2">
                    VERIFIED STACK:
                  </span>
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded border border-[var(--border-color)] bg-[var(--pill-bg)] text-xs font-mono text-[var(--text-color)]"
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
