import React from 'react';
import { ArrowDown, FileText, Sparkles, MapPin, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';
import { profile } from '../../data/profile';
import { SceneContainer } from '../three/SceneContainer';
import { getAssetUrl } from '../../utils/assets';

interface HeroProps {
  onOpenRecruiterView: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiterView }) => {
  const resumeUrl = getAssetUrl('/resume/Keshav_Jindal_Resume.pdf');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background radial ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-600/15 via-violet-600/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Monospace Technical Role Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated/90 border border-white/10 text-xs font-mono text-cyan-400 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>SOFTWARE ENGINEER // COMPUTER ENGINEERING</span>
            </div>

            {/* Core Cinematic Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] mb-6 text-gradient-silver">
              I build systems. <br />
              <span className="text-gradient-cyan">I explore possibilities.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed mb-8">
              {profile.tagline}
            </p>

            {/* Key Verified Highlights & Location */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-text-muted mb-8 font-mono">
              <div className="flex items-center gap-1.5 text-text-secondary">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Visa Special Projects Intern</span>
              </div>
              <div className="flex items-center gap-1.5 text-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>NPST AI Engineer Intern</span>
              </div>
              <div className="flex items-center gap-1.5 text-text-secondary">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>370+ LeetCode DSA</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(59,130,246,0.55)] transition-all group"
              >
                <span>Explore My Work</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-surface-elevated hover:bg-surface-elevated/80 border border-white/10 hover:border-white/25 text-text-primary font-medium text-sm transition-all"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View Resume</span>
              </a>

              <button
                onClick={onOpenRecruiterView}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-500/30 text-indigo-300 font-medium text-sm transition-all shadow-sm"
              >
                <Briefcase className="w-4 h-4 text-indigo-400" />
                <span>Recruiter View (20s)</span>
              </button>

              <a
                href="#contact"
                className="flex items-center justify-center px-5 py-3.5 rounded-xl text-text-secondary hover:text-text-primary text-sm font-medium transition-colors"
              >
                Let's Connect
              </a>
            </div>

          </div>

          {/* Right Column: Three.js Interactive 3D Canvas */}
          <div className="lg:col-span-5 h-[420px] sm:h-[500px] lg:h-[580px] w-full flex items-center justify-center relative">
            {/* Visual Glass Container with Subtle Border */}
            <div className="w-full h-full relative rounded-3xl border border-white/[0.08] bg-surface-card/40 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-2xl">
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 font-mono text-[10px] uppercase text-text-muted bg-surface-elevated/80 border border-white/10 px-2.5 py-1 rounded-md backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>INTERACTIVE 3D COMPUTATIONAL CORE</span>
              </div>

              <div className="absolute bottom-4 right-4 z-20 font-mono text-[10px] text-text-muted bg-surface-elevated/80 border border-white/10 px-2.5 py-1 rounded-md backdrop-blur-md">
                DRAG OR HOVER TO INTERACT
              </div>

              {/* Three.js Canvas */}
              <SceneContainer />
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-text-muted hover:text-text-secondary transition-colors group"
            aria-label="Scroll down to About section"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-text-muted group-hover:text-blue-400">
              Scroll to explore
            </span>
            <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1">
              <div className="w-1 h-2 rounded-full bg-blue-400 animate-bounce" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
