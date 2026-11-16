import React from 'react';

export const ImpactMetrics: React.FC = () => {
  const metrics = [
    { value: '500+', label: 'LEETCODE SOLVED', sub: 'Graphs, DP & Advanced DSA' },
    { value: '3', label: 'ENTERPRISE INTERNSHIPS', sub: 'Visa, Atlys & NPST' },
    { value: '75%', label: 'EFFORT REDUCTION', sub: 'ReAct Agent Data Ingestion' },
    { value: '40%', label: 'LATENCY CUT', sub: 'vLLM Model Serving Optimization' },
    { value: '65%', label: 'QUERY RESOLUTION', sub: 'Banking Support RAG System' },
    { value: '5,000+', label: 'DAILY INTERACTIONS', sub: 'High-Concurrency Microservices' },
  ];

  return (
    <section className="py-12 border-b border-[var(--border-color)] bg-[var(--bg-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col border-l border-[var(--border-color)] pl-4">
              <span className="font-display font-black text-3xl sm:text-4xl text-[var(--text-color)] tracking-tight">
                {m.value}
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-color)] mt-1">
                {m.label}
              </span>
              <span className="font-mono text-[10px] text-[var(--text-gray-color)] tracking-tight mt-0.5">
                {m.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
