import React, { useState } from 'react';
import { Code2, Server, Cpu, Database, Wrench, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../../data/skills';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);

  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Code2,
    Server,
    Cpu,
    Database,
    Wrench
  };

  return (
    <section id="skills" className="py-24 border-b border-[var(--border-color)] bg-[var(--bg-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-8 border-b border-[var(--border-color)] mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--text-gray-color)] mb-2">
              [ 06 // TECHNICAL PROFICIENCIES ]
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-[var(--text-color)] tracking-tight uppercase">
              VERIFIED STACK & DOMAIN COMPETENCIES
            </h2>
            <p className="mt-2 font-mono text-xs sm:text-sm text-[var(--text-gray-color)] max-w-2xl">
              Categorized technologies substantiated by enterprise production internships, audited repositories, and 500+ LeetCode problems.
            </p>
          </div>
          <div className="font-mono text-xs text-[var(--text-gray-color)] uppercase tracking-wider shrink-0">
            NO ARBITRARY PERCENTAGES // 100% REAL CODE
          </div>
        </div>

        {/* Categories Tab Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {skillCategories.map((cat, idx) => {
            const Icon = iconMap[cat.iconName] || Code2;
            const isActive = activeCategoryIdx === idx;

            return (
              <button
                key={idx}
                onClick={() => setActiveCategoryIdx(idx)}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between h-24 font-mono uppercase ${
                  isActive
                    ? 'bg-[var(--text-color)] text-[var(--bg-color)] border-[var(--text-color)] font-semibold shadow-sm'
                    : 'bg-[var(--card-bg)] text-[var(--text-color)] border-[var(--border-color)] hover:border-[var(--text-gray-color)]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon className="w-4 h-4" />
                  <span className="text-[10px] tracking-wider opacity-60">0{idx + 1}</span>
                </div>
                <div className="text-xs tracking-tight line-clamp-1">
                  {cat.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="p-6 sm:p-8 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-sm font-mono">
          <div className="mb-6 pb-4 border-b border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-display font-black text-2xl text-[var(--text-color)] uppercase tracking-tight">
                {skillCategories[activeCategoryIdx].title}
              </h3>
              <p className="text-xs text-[var(--text-gray-color)] mt-0.5">
                {skillCategories[activeCategoryIdx].description}
              </p>
            </div>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 uppercase tracking-widest w-fit">
              {skillCategories[activeCategoryIdx].skills.length} VERIFIED TECHNOLOGIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories[activeCategoryIdx].skills.map((skill, i) => (
              <div
                key={i}
                className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-color)] hover:border-[var(--text-color)] transition-colors space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-[var(--text-color)] uppercase">
                    {skill.name}
                  </span>
                  {skill.highlight && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500" title="Core High-Frequency Stack" />
                  )}
                </div>
                <p className="text-[11px] text-[var(--text-gray-color)] leading-relaxed">
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
