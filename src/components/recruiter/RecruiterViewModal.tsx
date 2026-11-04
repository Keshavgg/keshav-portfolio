import React from 'react';
import { 
  X, Download, ExternalLink, Github, Linkedin, Mail, Phone, 
  MapPin, CheckCircle2, Award, Briefcase, GraduationCap, ArrowRight, Sparkles 
} from 'lucide-react';
import { profile, education } from '../../data/profile';
import { experiences } from '../../data/experience';
import { projects } from '../../data/projects';
import { Project } from '../../types';

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

  const topProjects = projects.filter(p => p.featured).slice(0, 4);

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
              30-SECOND RECRUITER EXECUTIVE SUMMARY
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-surface-elevated text-text-muted hover:text-text-primary hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Recruiter View Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 select-text">
          
          {/* Top Profile Summary */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="font-mono text-xs text-blue-400 uppercase tracking-wider mb-1">
                Candidate Profile
              </div>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-text-primary">
                {profile.name}
              </h1>
              <p className="font-mono text-sm text-text-secondary mt-1">
                {profile.title}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-muted mt-3">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  {profile.location}
                </span>
                <span className="text-emerald-400 font-semibold">
                  • {profile.availability}
                </span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0">
              <a
                href="/resume/Keshav_Jindal_Resume.pdf"
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
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface-elevated border border-white/10 text-text-secondary hover:text-text-primary transition-colors"
                title="GitHub Repositories"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="p-2.5 rounded-xl bg-surface-elevated border border-white/10 text-text-secondary hover:text-text-primary transition-colors"
                title="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-surface-elevated border border-white/5 font-mono text-center">
            <div>
              <div className="text-xs text-text-muted">LeetCode Solved</div>
              <div className="font-bold text-lg text-amber-400 mt-0.5">500+ Problems</div>
            </div>
            <div>
              <div className="text-xs text-text-muted">Enterprise Internships</div>
              <div className="font-bold text-lg text-emerald-400 mt-0.5">Visa & NPST</div>
            </div>
            <div>
              <div className="text-xs text-text-muted">Degree & CGPA</div>
              <div className="font-bold text-lg text-blue-400 mt-0.5">CSE (7.78 CGPA)</div>
            </div>
            <div>
              <div className="text-xs text-text-muted">Graduation</div>
              <div className="font-bold text-lg text-purple-400 mt-0.5">May 2027</div>
            </div>
          </div>

          {/* Verified Experience Overview */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider text-text-muted flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span>Verified Industry Internships</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="p-4 rounded-2xl bg-surface-card border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-base text-text-primary">
                      {exp.company}
                    </span>
                    <span className="font-mono text-xs text-blue-400">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs text-blue-300 font-medium">
                    {exp.role}
                  </div>
                  <p className="text-xs text-text-secondary leading-snug line-clamp-3">
                    {exp.summary}
                  </p>
                  <div className="pt-2 border-t border-white/5 font-mono text-[11px] text-cyan-400 truncate">
                    {exp.technologies.slice(0, 5).join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top 4 Project Highlights */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider text-text-muted flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Top Engineering Highlights (Click for Full Technical Case Study)</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    onClose();
                    onSelectProject(p);
                  }}
                  className="p-4 rounded-2xl bg-surface-card border border-white/10 hover:border-blue-500/40 text-left transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                      <span className="text-cyan-400 font-semibold">{p.highlightMetric}</span>
                      <span className="text-text-muted">{p.category}</span>
                    </div>
                    <div className="font-display font-bold text-sm text-text-primary group-hover:text-blue-300 transition-colors">
                      {p.title}
                    </div>
                    <p className="text-xs text-text-secondary line-clamp-2 mt-1">
                      {p.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono mt-3 pt-2 border-t border-white/5">
                    <span>Inspect Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Education & Core Skills Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-surface-card border border-white/5 space-y-2">
              <div className="font-mono text-xs text-text-muted flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span>Education</span>
              </div>
              <div className="font-display font-semibold text-sm text-text-primary">
                {education.institution}
              </div>
              <div className="text-xs text-text-secondary">
                {education.degree} (Graduation May 2027)
              </div>
              <div className="font-mono text-xs text-emerald-400 font-bold">
                CGPA: {education.gpa}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-surface-card border border-white/5 space-y-2 font-mono text-xs">
              <div className="text-text-muted">Primary Tech Stack</div>
              <div className="text-text-secondary leading-relaxed">
                <span className="text-text-primary font-bold">Backend:</span> Spring Boot, FastAPI, Node.js, MySQL, PostgreSQL<br />
                <span className="text-text-primary font-bold">AI / RAG:</span> LangChain, LangGraph, vLLM, ChromaDB, LangSmith<br />
                <span className="text-text-primary font-bold">Languages:</span> Java, Python, C++, TypeScript, SQL
              </div>
            </div>
          </div>

          {/* Direct Contact Bar */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/40 to-indigo-950/30 border border-blue-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <div>
              <div className="text-text-muted">Direct Email:</div>
              <a href={`mailto:${profile.email}`} className="text-blue-300 font-semibold hover:underline">
                {profile.email}
              </a>
            </div>
            <div>
              <div className="text-text-muted">Direct Phone:</div>
              <a href={`tel:${profile.phone}`} className="text-blue-300 font-semibold hover:underline">
                {profile.phone}
              </a>
            </div>
            <a
              href="/resume/Keshav_Jindal_Resume.pdf"
              download="Keshav_Jindal_Resume.pdf"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-center shrink-0 transition-colors"
            >
              Get ATS PDF Resume
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
