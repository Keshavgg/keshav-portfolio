import React from 'react';
import { 
  X, Download, ExternalLink, Github, Linkedin, Mail, Phone, 
  MapPin, CheckCircle2, Award, Briefcase, GraduationCap, ArrowRight, Sparkles, Code2, Database, Server, Cpu
} from 'lucide-react';
import { profile, education } from '../../data/profile';
import { experiences } from '../../data/experience';
import { projects } from '../../data/projects';
import { Project } from '../../types';
import { getAssetUrl } from '../../utils/assets';

interface RecruiterViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}

export const RecruiterViewModal: React.FC<RecruiterViewModalProps> = ({
  isOpen,
  onClose,
  onSelectProject
}) => {
  if (!isOpen) return null;

  // Exactly Top 3 Strongest Engineering Projects
  const topProjects = projects
    .filter(p => p.featured)
    .sort((a, b) => (a.featuredRank || 99) - (b.featuredRank || 99))
    .slice(0, 3);

  const resumeUrl = getAssetUrl('/resume/Keshav_Jindal_Resume.pdf');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      {/* Background click overlay */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Recruiter Card Shell */}
      <div 
        className="relative w-full max-w-4xl bg-[#0B0F16] border border-blue-500/30 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0E131E] border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
              20-SECOND RECRUITER EXECUTIVE SUMMARY
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-surface-elevated text-text-muted hover:text-text-primary hover:bg-white/10 transition-colors"
            aria-label="Close Recruiter View"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Recruiter View Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-7 select-text">
          
          {/* Top Profile Summary */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 uppercase tracking-wider mb-1">
                <span>Candidate Profile // New Delhi, India</span>
              </div>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-text-primary">
                {profile.name}
              </h1>
              <p className="font-mono text-sm text-text-secondary mt-1">
                {profile.title}
              </p>
              
              {/* Target Role & Availability Banner */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono mt-3">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                  🎯 Target: Backend / Distributed Systems / AI Engineer
                </span>
                <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-300">
                  📅 Class of May 2027 (CGPA: {education.gpa})
                </span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0">
              <a
                href={resumeUrl}
                download="Keshav_Jindal_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs shadow-lg transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface-elevated border border-white/10 text-text-secondary hover:text-text-primary transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface-elevated border border-white/10 text-text-secondary hover:text-text-primary transition-colors"
                title="GitHub Repositories"
                aria-label="GitHub Repositories"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="p-2.5 rounded-xl bg-surface-elevated border border-white/10 text-text-secondary hover:text-text-primary transition-colors"
                title="Direct Email"
                aria-label="Email Candidate"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Key Facts Quick Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-surface-card border border-white/5">
              <div className="text-text-muted">Target Roles</div>
              <div className="text-text-primary font-bold mt-1">Backend / Systems / AI</div>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-card border border-white/5">
              <div className="text-text-muted">Graduation Date</div>
              <div className="text-text-primary font-bold mt-1">May 2027 (MAIT)</div>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-card border border-white/5">
              <div className="text-text-muted">LeetCode DSA</div>
              <div className="text-text-primary font-bold mt-1">370+ Solved (250+ Med)</div>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-card border border-white/5">
              <div className="text-text-muted">Enterprise Internships</div>
              <div className="text-text-primary font-bold mt-1">2 Verified (Visa, NPST)</div>
            </div>
          </div>

          {/* Verified Professional Experience */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-mono text-xs uppercase tracking-wider text-text-muted flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-400" />
                <span>Verified Professional Experience</span>
              </h2>
              <span className="text-[11px] font-mono text-emerald-400">Institutional Certificates Verified</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {experiences.map((exp) => (
                <div 
                  key={exp.id}
                  className="p-4 rounded-2xl bg-surface-card border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="font-display font-bold text-base text-text-primary">
                        {exp.company}
                      </div>
                      <span className="text-[11px] font-mono text-blue-400">
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-blue-300/90 mb-2">
                      {exp.role}
                    </div>

                    <p className="text-xs text-text-secondary leading-relaxed mb-3 line-clamp-3">
                      {exp.summary}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5 font-mono text-[11px] text-cyan-400 truncate">
                    {exp.technologies.slice(0, 5).join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Three Strongest Projects */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-text-muted flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Three Strongest Engineering Projects (Click to Inspect)</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {topProjects.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => {
                    onClose();
                    onSelectProject(p);
                  }}
                  className="p-4 rounded-2xl bg-surface-card border border-white/10 hover:border-blue-500/40 text-left transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                      <span className="text-cyan-400 font-semibold">#{idx + 1} CORE PROJECT</span>
                      <span className="text-text-muted">{p.category}</span>
                    </div>
                    <div className="font-display font-bold text-sm text-text-primary group-hover:text-blue-300 transition-colors leading-snug">
                      {p.title}
                    </div>
                    <p className="text-xs text-text-secondary line-clamp-2 mt-1.5">
                      {p.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono mt-3 pt-2 border-t border-white/5">
                    <span>Deep Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Technical Skills & Education */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            <div className="p-4 rounded-2xl bg-surface-card border border-white/5 space-y-2">
              <div className="font-mono text-xs text-text-muted flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span>Education & Academics</span>
              </div>
              <div className="font-display font-semibold text-sm text-text-primary">
                {education.institution}
              </div>
              <div className="text-xs text-text-secondary">
                {education.degree} (Class of May 2027)
              </div>
              <div className="font-mono text-xs text-emerald-400 font-bold">
                Cumulative CGPA: {education.gpa}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-surface-card border border-white/5 space-y-1.5 font-mono text-xs">
              <div className="text-text-muted font-sans font-medium text-xs">Core Technical Stack</div>
              <div className="text-text-secondary leading-relaxed text-[11px]">
                <span className="text-text-primary font-bold">Backend:</span> Java (Spring Boot), Python (FastAPI), Node.js<br />
                <span className="text-text-primary font-bold">AI / RAG:</span> LangChain, BM25 / TF-IDF Retrieval, LangSmith, ChromaDB<br />
                <span className="text-text-primary font-bold">Databases:</span> MySQL, PostgreSQL, SQLite, Redis
              </div>
            </div>
          </div>

          {/* Direct Contact Bar */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/40 to-indigo-950/30 border border-blue-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <div className="flex flex-wrap items-center gap-4">
              <div>
                <span className="text-text-muted">Email: </span>
                <a href={`mailto:${profile.email}`} className="text-blue-300 font-semibold hover:underline">
                  {profile.email}
                </a>
              </div>
              <div>
                <span className="text-text-muted">Phone: </span>
                <a href={`tel:${profile.phone}`} className="text-blue-300 font-semibold hover:underline">
                  {profile.phone}
                </a>
              </div>
            </div>
            
            <a
              href={resumeUrl}
              download="Keshav_Jindal_Resume.pdf"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-center shrink-0 transition-colors shadow-md"
            >
              Download PDF Resume
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
