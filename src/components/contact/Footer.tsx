import React from 'react';
import { ArrowUp, Github, Linkedin, Code2, FileText } from 'lucide-react';
import { profile } from '../../data/profile';
import { getAssetUrl } from '../../utils/assets';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resumeUrl = getAssetUrl('/Keshav_Jindal_Resume.pdf');
  const inventoryUrl = getAssetUrl('/PROJECT_INVENTORY.md');

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-color)] py-14 font-mono text-xs text-[var(--text-gray-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-[var(--border-color)]">
          {/* Logo & Headline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-[var(--text-color)] text-[var(--bg-color)] flex items-center justify-center font-display font-extrabold text-base">
              {profile.monogram}
            </div>
            <div>
              <div className="font-display font-bold text-base text-[var(--text-color)] uppercase tracking-tight">
                {profile.name}
              </div>
              <div className="text-[11px] text-[var(--text-gray-color)] uppercase tracking-wider">
                AI SOFTWARE ENGINEER // SYSTEMS ARCHITECT
              </div>
            </div>
          </div>

          {/* Social Icons & External Links */}
          <div className="flex flex-wrap items-center gap-4 text-[var(--text-color)] uppercase tracking-wider">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line flex items-center gap-1.5 hover:opacity-75"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line flex items-center gap-1.5 hover:opacity-75"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LINKEDIN</span>
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line flex items-center gap-1.5 hover:opacity-75"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>LEETCODE</span>
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line flex items-center gap-1.5 hover:opacity-75"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-color)] text-[var(--text-color)] hover:bg-[var(--pill-bg)] transition-colors uppercase tracking-wider shrink-0"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Colophon & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} KESHAV JINDAL. ALL RIGHTS RESERVED. TRUTHFUL ENGINEERING REPRESENTATION.
          </div>
          <div className="flex items-center gap-3">
            <span>INSPIRED BY EDITORIAL MINIMALISM</span>
            <span>•</span>
            <a href={inventoryUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-color)] underline">
              VERIFIED PROJECT INVENTORY (21)
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
