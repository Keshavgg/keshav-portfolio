import React from 'react';
import { Project } from '../../types';
import { ArrowRight, Database, Server, Cpu, Globe, Shield, Terminal, FileText, CheckCircle2 } from 'lucide-react';

export const ArchitectureDiagram: React.FC<{ project: Project }> = ({ project }) => {
  const { diagramType, components, dataFlow } = project.architecture;

  return (
    <div className="p-6 rounded-2xl bg-[#090C12] border border-white/10 my-6">
      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="font-mono text-xs text-text-primary uppercase tracking-wider font-semibold">
            System Architecture & Pipeline Flow
          </span>
        </div>
        <span className="font-mono text-[11px] text-text-muted px-2 py-0.5 rounded bg-surface-elevated border border-white/10">
          TYPE: {diagramType ? diagramType.toUpperCase() : 'MODULAR COMPONENT GRAPH'}
        </span>
      </div>

      {/* Visual Component Flow Box */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {components.map((comp, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-surface-card border border-white/[0.08] relative group hover:border-blue-500/40 transition-colors"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono text-[10px] text-blue-400 font-bold">
                NODE 0{idx + 1}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
            </div>
            <div className="font-display font-semibold text-xs text-text-primary mb-1">
              {comp.name}
            </div>
            <p className="text-[11px] text-text-secondary leading-snug mb-2">
              {comp.role}
            </p>
            <div className="font-mono text-[10px] text-cyan-400/90 pt-1.5 border-t border-white/5 truncate">
              {comp.technologies}
            </div>
          </div>
        ))}
      </div>

      {/* Sequential Execution Pipeline */}
      <div className="space-y-2 pt-2 border-t border-white/10">
        <div className="font-mono text-[11px] text-text-muted uppercase tracking-wider mb-2">
          End-to-End Data Execution Lifecycle:
        </div>
        <div className="grid grid-cols-1 gap-2">
          {dataFlow.map((step, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-2 rounded-lg bg-surface-elevated/40 border border-white/5 text-xs text-text-secondary font-mono"
            >
              <span className="text-blue-400 shrink-0 mt-0.5">▶</span>
              <span className="leading-relaxed">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
