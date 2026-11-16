import React, { useState } from 'react';
import { services } from '../../data/services';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="services" className="py-24 border-b border-[var(--border-color)] bg-[var(--bg-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-8 border-b border-[var(--border-color)] mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--text-gray-color)] mb-2">
              [ 02 // CAPABILITIES & SERVICES ]
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-[var(--text-color)] tracking-tight uppercase">
              AREAS OF EXPERTISE & PRODUCTION CAPABILITIES
            </h2>
          </div>
          <div className="font-mono text-xs text-[var(--text-gray-color)] uppercase tracking-wider">
            FIVE CORE DOMAINS // 00-1 TO 00-5
          </div>
        </div>

        {/* Services Accordion / Editorial Cards (Exact Ashmit Style) */}
        <div className="divide-y divide-[var(--border-color)] border-y border-[var(--border-color)]">
          {services.map((service, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={service.number}
                className="group py-6 sm:py-8 transition-colors hover:bg-[var(--pill-bg)]/40"
              >
                {/* Main Clickable Header Row */}
                <div
                  onClick={() => toggleExpand(idx)}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    {/* Number: 00-1 */}
                    <span className="font-mono text-sm sm:text-base text-[var(--text-gray-color)] tracking-widest font-bold">
                      {service.number}
                    </span>

                    {/* Big Title */}
                    <div>
                      <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-[var(--text-color)] tracking-tight uppercase group-hover:opacity-85 transition-opacity">
                        {service.title}
                      </h3>
                      <div className="font-mono text-xs text-[var(--text-gray-color)] uppercase tracking-wider mt-0.5">
                        {service.secondTitle}
                      </div>
                    </div>
                  </div>

                  {/* Right: Tag and Expand Indicator */}
                  <div className="flex items-center justify-between md:justify-end gap-6 pl-12 md:pl-0">
                    <span className="font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-color)]">
                      {service.tag}
                    </span>

                    <button
                      className="w-9 h-9 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-color)] group-hover:border-[var(--text-color)] transition-colors"
                      aria-label="Expand service"
                    >
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Content Drawer */}
                {isExpanded && (
                  <div className="pt-6 sm:pt-8 pl-0 md:pl-16 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start animate-fadeIn">
                    {/* Paragraph explanation */}
                    <div className="lg:col-span-6 font-mono text-xs sm:text-sm text-[var(--text-color)] leading-relaxed bg-[var(--card-bg)] p-5 rounded-lg border border-[var(--border-color)]">
                      <div className="text-[var(--text-gray-color)] uppercase text-[10px] tracking-widest mb-2 font-bold">
                        // ARCHITECTURAL IMPLEMENTATION
                      </div>
                      {service.text}
                    </div>

                    {/* Slashed List of Tools & Mechanisms (Exact Ashmit Style) */}
                    <div className="lg:col-span-6 space-y-2">
                      <div className="font-mono text-[10px] text-[var(--text-gray-color)] uppercase tracking-widest mb-1 font-bold">
                        // VERIFIED TECHNIQUES & STACK
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.list.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="font-mono text-xs text-[var(--text-color)] bg-[var(--pill-bg)] px-3 py-2 rounded border border-[var(--border-color)]/60 flex items-center justify-between"
                          >
                            <span>{item}</span>
                            <ArrowUpRight className="w-3 h-3 text-[var(--text-gray-color)] shrink-0" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
