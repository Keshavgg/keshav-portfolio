import React from 'react';
import { ArrowUp, Github, Linkedin, Code2, FileText, Heart } from 'lucide-react';
import { profile } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#050608] py-14 text-text-secondary text-xs sm:text-sm font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/[0.06]">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-white/10 flex items-center justify-center">
              <span className="font-display font-extrabold text-lg text-gradient-silver tracking-tight">
                {profile.monogram}
              </span>
            </div>
            <div>
              <div className="font-display font-bold text-text-primary text-sm">
                {profile.name}
              </div>
              <div className="text-[11px] text-text-muted">
                Software Engineer • Backend, Cloud & AI
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface-elevated hover:bg-white/10 text-text-muted hover:text-text-primary transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface-elevated hover:bg-white/10 text-text-muted hover:text-text-primary transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface-elevated hover:bg-white/10 text-text-muted hover:text-text-primary transition-colors"
              title="LeetCode (500+)"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              href="/resume/Keshav_Jindal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface-elevated hover:bg-white/10 text-text-muted hover:text-text-primary transition-colors"
              title="Resume PDF"
            >
              <FileText className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-elevated hover:bg-white/10 text-text-secondary hover:text-text-primary border border-white/5 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Colophon & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-text-muted">
          <div>
            © {new Date().getFullYear()} Keshav Jindal. All rights reserved. Truthful engineering representation.
          </div>
          <div className="flex items-center gap-3">
            <span>Built with React, TypeScript, Three.js & Tailwind</span>
            <span>•</span>
            <a href="/PROJECT_INVENTORY.md" className="hover:text-cyan-400 transition-colors">
              Project Inventory (21)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
