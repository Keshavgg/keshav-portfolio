import React from 'react';
import { Layers, Cpu, Server, Compass, GraduationCap, CheckCircle } from 'lucide-react';
import { profile, education } from '../../data/profile';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Server,
      title: 'Backend Systems & Architecture',
      description:
        'I am fascinated by how scalable systems maintain state, route high-throughput requests, and preserve data integrity under load. From Spring Boot filter chains and JPA transaction management to async FastAPI microservices, I design for predictable latency and zero memory leaks.'
    },
    {
      icon: Cpu,
      title: 'Agentic AI & Information Retrieval',
      description:
        'I approach AI through an engineering lens rather than treating models like magic. I focus on deterministic guardrails, structured JSON outputs, hybrid BM25 + vector retrieval, and rigorous evaluation pipelines (LangSmith) that turn stochastic LLMs into reliable enterprise tools.'
    },
    {
      icon: Layers,
      title: 'End-to-End System Thinking',
      description:
        'I build whole applications. A backend without an intuitive interface delivers no user value, and an interface without resilient data pipelines fails under production pressure. I enjoy connecting relational databases, APIs, and modern responsive frontends seamlessly.'
    },
    {
      icon: Compass,
      title: 'Disciplined Problem Solving',
      description:
        'Having solved 500+ algorithmic problems across LeetCode, I treat algorithm optimization as a daily habit. When faced with an unfamiliar framework or protocol, I trace request flows and inspect source code rather than relying on surface-level tutorials.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>01 // PERSPECTIVE & MINDSET</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-gradient-silver tracking-tight">
            Engineering with rigor, curiosity, and intent.
          </h2>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Main Story Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-text-secondary text-base sm:text-lg leading-relaxed">
            {profile.bioParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}

            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-gradient-cyan">
                  500+
                </div>
                <div className="font-mono text-xs text-text-muted mt-1">LeetCode Solved</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-gradient-silver">
                  2
                </div>
                <div className="font-mono text-xs text-text-muted mt-1">Enterprise Internships</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-blue-400">
                  21
                </div>
                <div className="font-mono text-xs text-text-muted mt-1">Audited Projects</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-purple-400">
                  7.78
                </div>
                <div className="font-mono text-xs text-text-muted mt-1">B.Tech CGPA</div>
              </div>
            </div>
          </div>

          {/* Right: Academic Foundation Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-surface-card border border-white/10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-blue-600/15 border border-blue-500/20 text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-text-primary">
                    Academic Education
                  </h3>
                  <p className="font-mono text-xs text-text-muted">
                    {education.timeline}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-text-primary font-medium">{education.institution}</div>
                  <div className="text-text-secondary text-xs">{education.degree}</div>
                  <div className="mt-1 font-mono text-xs text-cyan-400 font-semibold">{education.gpa}</div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">
                    Core Coursework
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {education.relevantCoursework.map((course, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-surface-elevated border border-white/5 text-xs text-text-secondary font-mono"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-2">
                  <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">
                    Academic Highlights
                  </div>
                  {education.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-text-secondary leading-snug">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Engineering Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface-elevated/60 border border-white/[0.08] hover:border-blue-500/30 hover:bg-surface-elevated transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-base text-text-primary mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
