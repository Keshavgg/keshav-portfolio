import React, { useState } from 'react';
import { 
  Code2, Server, Cpu, Database, Layout, Wrench, Sparkles, CheckCircle2 
} from 'lucide-react';
import { skillCategories } from '../../data/skills';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);

  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Code2,
    Server,
    Cpu,
    Database,
    Layout,
    Wrench
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>05 // TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-gradient-silver tracking-tight">
            Verified Stack & Domain Competencies
          </h2>
          <p className="mt-3 text-text-secondary text-sm sm:text-base max-w-2xl">
            Categorized skills substantiated by enterprise production internships, audited repositories, and 500+ LeetCode problems. No arbitrary proficiency percentages.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {skillCategories.map((cat, idx) => {
            const Icon = iconMap[cat.iconName] || Code2;
            const isActive = activeCategoryIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategoryIdx(idx)}
                className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between h-28 group ${
                  isActive
                    ? 'bg-blue-600/15 border-blue-500/50 shadow-lg ring-1 ring-blue-500/30'
                    : 'bg-surface-elevated/40 border-white/5 hover:border-white/20 hover:bg-surface-elevated'
                }`}
              >
                <div className={`p-2 rounded-xl w-fit ${isActive ? 'bg-blue-600 text-white' : 'bg-white/5 text-text-muted group-hover:text-text-primary'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className={`font-display font-semibold text-xs leading-snug ${isActive ? 'text-blue-300' : 'text-text-secondary group-hover:text-text-primary'}`}>
                  {cat.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-card border border-white/10 shadow-2xl">
          <div className="mb-6 pb-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary">
                {skillCategories[activeCategoryIdx].title}
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary mt-1">
                {skillCategories[activeCategoryIdx].description}
              </p>
            </div>
            <span className="font-mono text-xs text-blue-400 bg-blue-950/40 border border-blue-500/20 px-3 py-1 rounded-full w-fit">
              {skillCategories[activeCategoryIdx].skills.length} VERIFIED PROFICIENCIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories[activeCategoryIdx].skills.map((skill, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-surface-elevated/70 border border-white/5 hover:border-blue-500/30 transition-all space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-sm text-text-primary">
                    {skill.name}
                  </span>
                  {skill.highlight && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400" title="Core High-Frequency Tech" />
                  )}
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {skill.context}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
