import React from 'react';
import { ArrowUpRight, ArrowDown, FileText, Briefcase } from 'lucide-react';
import { profile } from '../../data/profile';
import { SceneContainer } from '../three/SceneContainer';
import { getAssetUrl } from '../../utils/assets';

interface HeroProps {
  onOpenRecruiterView: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiterView }) => {
  const resumeUrl = getAssetUrl('/Keshav_Jindal_Resume.pdf');

  const aiLetters = ['A', 'I'];
  const engineerLetters = ['E', 'N', 'G', 'I', 'N', 'E', 'E', 'R'];

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Top Meta Bar in Hero: Counter & Specialization Tags */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pb-3 border-b border-[var(--border-color)]">
        {/* Rolling Ticker Number (Ashmit exact feature: 0, 2 0 2 6) */}
        <div className="flex items-baseline gap-1.5 font-display font-extrabold text-2xl sm:text-3xl text-[var(--text-color)] tracking-tight">
          <span className="text-xs font-mono text-[var(--text-gray-color)] uppercase tracking-widest mr-1 font-normal">
            EDITION //
          </span>
          <span>0</span>
          <span className="text-[var(--text-gray-color)]">,</span>
          <span>2</span>
          <span>0</span>
          <span>2</span>
          <span className="underline decoration-1 underline-offset-4">6</span>
        </div>

        {/* Monospace Specialization Tags (Ashmit style) */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[var(--text-gray-color)]">
          <div className="flex items-center gap-1.5 text-[var(--text-color)]">
            <span className="text-emerald-500 font-bold">/</span>
            <span>AGENTIC WORKFLOWS</span>
          </div>
          <div className="flex items-center gap-1.5 text-[var(--text-color)]">
            <span className="text-emerald-500 font-bold">/</span>
            <span>VOICE AI & AUDIO BRIDGES</span>
          </div>
          <div className="flex items-center gap-1.5 text-[var(--text-color)]">
            <span className="text-emerald-500 font-bold">/</span>
            <span>vLLM & DISTRIBUTED SERVING</span>
          </div>
        </div>
      </div>

      {/* Main Massive Editorial Title Section (Ashmit Style) */}
      <div className="py-2 sm:py-4 select-none">
        <h1 className="flex flex-col font-display font-black leading-[0.85] tracking-tightest uppercase text-[var(--text-color)]">
          {/* Line 1: AI */}
          <div className="flex items-center gap-4 text-[20vw] sm:text-[16vw] lg:text-[11.5rem]">
            {aiLetters.map((char, i) => (
              <span key={i} className="hero-letter cursor-default">
                {char}
              </span>
            ))}
            
            {/* Inline Subtitle Stamp: "BASED IN NEW DELHI" */}
            <span className="hidden sm:inline-flex flex-col ml-6 lg:ml-10 font-mono text-xs font-normal tracking-widest text-[var(--text-gray-color)] uppercase normal-case self-center border-l-2 border-[var(--text-color)] pl-4">
              <span className="text-[var(--text-color)] font-bold">BASED IN</span>
              <span>NEW DELHI, INDIA</span>
              <span className="text-[10px] text-[var(--text-gray-second-color)]">28.6139° N, 77.2090° E</span>
            </span>
          </div>

          {/* Line 2: ENGINEER */}
          <div className="flex flex-wrap items-center text-[15vw] sm:text-[13vw] lg:text-[9.5rem] text-[var(--text-color)] mt-[-1vw] sm:mt-[-1.5vw]">
            {engineerLetters.map((char, i) => (
              <span key={i} className="hero-letter cursor-default">
                {char}
              </span>
            ))}
          </div>
        </h1>
      </div>

      {/* Grid: Editorial Bio + Interactive 3D / Telemetry Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center py-4 border-t border-[var(--border-color)]">
        {/* Left Column: Monospace Bio & Action Links */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--text-gray-color)] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span>KES-JIN // ARCHITECTURAL DOSSIER</span>
            </div>

            <p className="font-mono text-xs sm:text-sm leading-relaxed text-[var(--text-color)] font-medium max-w-2xl">
              AI SOFTWARE ENGINEER & B.TECH CSE (MAIT) SPECIALIZING IN MULTI-AGENT ORCHESTRATION, REAL-TIME FULL-DUPLEX AUDIO BRIDGES, vLLM MODEL SERVING, AND ENTERPRISE RAG SYSTEMS.
            </p>

            <p className="font-mono text-xs leading-relaxed text-[var(--text-gray-color)] max-w-2xl">
              Proven track record across <strong className="text-[var(--text-color)] font-semibold">Visa</strong> (Special Projects Group), <strong className="text-[var(--text-color)] font-semibold">Atlys</strong> (Gym-World Voice AI), and <strong className="text-[var(--text-color)] font-semibold">NPST</strong> (Generative AI Banking Systems). Backed by 500+ LeetCode algorithmic solutions.
            </p>
          </div>

          {/* Action Buttons (Ashmit style diagonal arrow buttons) */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--text-color)] text-[var(--bg-color)] font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-85 transition-opacity group"
            >
              <span>RECENT WORK</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--border-color)] text-[var(--text-color)] font-mono text-xs uppercase tracking-wider hover:bg-[var(--pill-bg)] transition-colors group"
            >
              <FileText className="w-3.5 h-3.5 text-[var(--text-gray-color)]" />
              <span>DOWNLOAD RESUME</span>
              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>

            <button
              onClick={onOpenRecruiterView}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--border-color)] bg-[var(--pill-bg)] text-[var(--text-color)] font-mono text-xs uppercase tracking-wider hover:border-[var(--text-color)] transition-colors"
            >
              <Briefcase className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>RECRUITER VIEW (30s)</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[var(--text-gray-color)] hover:text-[var(--text-color)] link-line py-1.5"
            >
              <span>COLLABORATE</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Right Column: High-Tech Brutalist Interactive Core */}
        <div className="lg:col-span-5 h-[280px] sm:h-[320px] w-full relative border border-[var(--border-color)] bg-[var(--card-bg)] rounded-lg overflow-hidden flex flex-col justify-between p-3.5 shadow-sm">
          {/* Card Header */}
          <div className="flex items-center justify-between z-10 border-b border-[var(--border-color)] pb-2.5">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[var(--text-color)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>COMPUTATIONAL RUNTIME // THREE.JS</span>
            </div>
            <div className="font-mono text-[10px] text-[var(--text-gray-color)] uppercase tracking-wider">
              ONLINE
            </div>
          </div>

          {/* Interactive 3D Canvas */}
          <div className="absolute inset-0 pt-10 pb-10 flex items-center justify-center">
            <SceneContainer />
          </div>

          {/* Card Footer Telemetry */}
          <div className="flex items-center justify-between z-10 border-t border-[var(--border-color)] pt-2.5 font-mono text-[10px] text-[var(--text-gray-color)] uppercase tracking-wider bg-[var(--card-bg)]/80 backdrop-blur-sm">
            <span>DRAG CORE TO ROTATE</span>
            <span className="text-[var(--text-color)] font-medium">500+ LC // 3 INTERNSHIPS</span>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="pt-4 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[var(--text-gray-color)]">
        <div className="flex items-center gap-2">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          <span>SCROLL TO EXPLORE ARCHITECTURE</span>
        </div>
        <div className="hidden sm:block">
          STATUS: READY FOR PRODUCTION DEPLOYMENT
        </div>
      </div>
    </section>
  );
};
