import React, { useEffect } from 'react';
import { ArrowUpRight, ArrowDown, FileText, Briefcase } from 'lucide-react';
import gsap from 'gsap';
import { profile } from '../../data/profile';
import { SceneContainer } from '../three/SceneContainer';
import { getAssetUrl } from '../../utils/assets';

interface HeroProps {
  onOpenRecruiterView: () => void;
  animTriggered?: boolean;
}

let hasHeroAnimated = false;

export const runHeroEntranceAnimation = () => {
  if (typeof document === 'undefined') return;
  const letters = document.querySelectorAll('.hero-title .hero-letter');
  if (!letters.length) return;
  if (hasHeroAnimated) return;
  hasHeroAnimated = true;

  // 1. Cascading letters drop from top (Exact Ashmit stagger from center)
  gsap.fromTo(
    '.hero-title .hero-letter',
    { y: '-110%' },
    {
      y: '0%',
      duration: 1.4,
      ease: 'power4.inOut',
      stagger: { each: 0.035, from: 'center' }
    }
  );

  // 2. Rolling number ticker (Target: 0, 2 0 2 6)
  gsap.fromTo('.hero-num-0 > span', { y: '-900%' }, { y: '0%', duration: 1.6, ease: 'power4.out', delay: 0.1 });
  gsap.to('.hero-title__number-second', { opacity: 1, duration: 0.8, delay: 0.3 });
  gsap.fromTo('.hero-num-2a > span', { y: '0%' }, { y: '-200%', duration: 1.8, ease: 'power4.out', delay: 0.2 });
  gsap.fromTo('.hero-num-0b > span', { y: '-900%' }, { y: '0%', duration: 1.8, ease: 'power4.out', delay: 0.25 });
  gsap.fromTo('.hero-num-2b > span', { y: '0%' }, { y: '-200%', duration: 1.8, ease: 'power4.out', delay: 0.3 });
  gsap.fromTo('.hero-num-6 > span', { y: '0%' }, { y: '-600%', duration: 2.1, ease: 'power4.out', delay: 0.35 });

  // 3. Hero card & 3D container reveal
  gsap.fromTo(
    '.hero-designer',
    { opacity: 0, scale: 0.95 },
    {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: 'power4.out',
      delay: 0.2
    }
  );

  // 4. Staggered reveal of subtitles and tags
  gsap.fromTo(
    '.hero-anim-item',
    { opacity: 0, y: 15 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.08,
      delay: 0.2
    }
  );
};

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiterView, animTriggered }) => {
  const resumeUrl = getAssetUrl('/Keshav_Jindal_Resume.pdf');

  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const line1Words = ['AI', 'ENGINEER'];
  const line2Words = ['&', 'DEVELOPER'];

  useEffect(() => {
    if (animTriggered) {
      runHeroEntranceAnimation();
    }
  }, [animTriggered]);

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Top Meta Bar in Hero: Counter & Specialization Tags */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pb-3 border-b border-[var(--border-color)]">
        {/* Rolling Ticker Number (Exact Ashmit Layout & Structure) */}
        <div className="flex items-baseline gap-2 font-display font-extrabold text-2xl sm:text-3xl text-[var(--text-color)] tracking-tight">
          <span className="text-xs font-mono text-[var(--text-gray-color)] uppercase tracking-widest mr-1 font-normal hero-anim-item opacity-0">
            EDITION //
          </span>

          <div className="hero-title__number text-2xl sm:text-3xl">
            {/* Digit: 0 */}
            <div className="hero-title__number-wrap hero-num-0">
              {digits.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>

            {/* Comma: , */}
            <span className="hero-title__number-second mx-0.5 text-[var(--text-gray-color)]">,</span>

            {/* Digit: 2 */}
            <div className="hero-title__number-wrap hero-num-2a">
              {digits.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>

            {/* Digit: 0 */}
            <div className="hero-title__number-wrap hero-num-0b">
              {digits.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>

            {/* Digit: 2 */}
            <div className="hero-title__number-wrap hero-num-2b">
              {digits.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>

            {/* Digit: 6 */}
            <div className="hero-title__number-wrap hero-num-6 underline decoration-1 underline-offset-4">
              {digits.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Monospace Specialization Tags (Ashmit style) */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[var(--text-gray-color)]">
          <div className="flex items-center gap-1.5 text-[var(--text-color)] hero-anim-item opacity-0">
            <span className="text-emerald-500 font-bold">/</span>
            <span>AGENTIC WORKFLOWS</span>
          </div>
          <div className="flex items-center gap-1.5 text-[var(--text-color)] hero-anim-item opacity-0">
            <span className="text-emerald-500 font-bold">/</span>
            <span>VOICE AI & AUDIO BRIDGES</span>
          </div>
          <div className="flex items-center gap-1.5 text-[var(--text-color)] hero-anim-item opacity-0">
            <span className="text-emerald-500 font-bold">/</span>
            <span>vLLM & DISTRIBUTED SERVING</span>
          </div>
        </div>
      </div>

      {/* Main Massive Editorial Title Section (Ashmit Style) */}
      <div className="py-2 sm:py-4 select-none">
        <h1 className="hero-title flex flex-col font-display font-black leading-[0.85] tracking-tightest uppercase text-[var(--text-color)]">
          {/* Line 1: AI ENGINEER */}
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-8 text-[17vw] sm:text-[13vw] lg:text-[10rem]">
            {line1Words.map((word, wIdx) => (
              <div key={wIdx} className="hero-word">
                {word.split('').map((char, cIdx) => (
                  <span key={cIdx} className="hero-letter cursor-default">
                    {char}
                  </span>
                ))}
              </div>
            ))}
            
            {/* Inline Subtitle Stamp: "BASED IN NEW DELHI" */}
            <span className="hero-anim-item opacity-0 hidden lg:inline-flex flex-col ml-4 font-mono text-xs font-normal tracking-widest text-[var(--text-gray-color)] uppercase normal-case self-center border-l-2 border-[var(--text-color)] pl-4">
              <span className="text-[var(--text-color)] font-bold">BASED IN</span>
              <span>NEW DELHI, INDIA</span>
              <span className="text-[10px] text-[var(--text-gray-second-color)]">28.6139° N, 77.2090° E</span>
            </span>
          </div>

          {/* Line 2: & DEVELOPER */}
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-8 text-[15vw] sm:text-[12vw] lg:text-[9.2rem] text-[var(--text-color)] mt-[-1vw] sm:mt-[-1.5vw]">
            {line2Words.map((word, wIdx) => (
              <div key={wIdx} className="hero-word">
                {word.split('').map((char, cIdx) => (
                  <span key={cIdx} className="hero-letter cursor-default">
                    {char}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </h1>
      </div>

      {/* Grid: Editorial Bio + Interactive 3D / Telemetry Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center py-4 border-t border-[var(--border-color)]">
        {/* Left Column: Monospace Bio & Action Links */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="hero-anim-item opacity-0 font-mono text-xs uppercase tracking-widest text-[var(--text-gray-color)] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span>KES-JIN // ARCHITECTURAL DOSSIER</span>
            </div>

            <p className="hero-anim-item opacity-0 font-mono text-xs sm:text-sm leading-relaxed text-[var(--text-color)] font-medium max-w-2xl">
              AI SOFTWARE ENGINEER & B.TECH CSE (MAIT) SPECIALIZING IN MULTI-AGENT ORCHESTRATION, REAL-TIME FULL-DUPLEX AUDIO BRIDGES, vLLM MODEL SERVING, AND ENTERPRISE RAG SYSTEMS.
            </p>

            <p className="hero-anim-item opacity-0 font-mono text-xs leading-relaxed text-[var(--text-gray-color)] max-w-2xl">
              Proven track record across <strong className="text-[var(--text-color)] font-semibold">Visa</strong> (Special Projects Group), <strong className="text-[var(--text-color)] font-semibold">Atlys</strong> (Gym-World Voice AI), and <strong className="text-[var(--text-color)] font-semibold">NPST</strong> (Generative AI Banking Systems). Backed by 500+ LeetCode algorithmic solutions.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="hero-anim-item opacity-0 flex flex-wrap items-center gap-3 pt-1">
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
        <div className="hero-designer opacity-0 scale-95 lg:col-span-5 h-[280px] sm:h-[320px] w-full relative border border-[var(--border-color)] bg-[var(--card-bg)] rounded-lg overflow-hidden flex flex-col justify-between p-3.5 shadow-sm">
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
