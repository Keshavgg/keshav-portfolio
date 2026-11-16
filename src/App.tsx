import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { HelloPreloader } from './components/cinematic/HelloPreloader';
import { Navbar } from './components/navigation/Navbar';
import { Hero, runHeroEntranceAnimation } from './components/hero/Hero';
import { MarqueeTicker } from './components/hero/MarqueeTicker';
import { ImpactMetrics } from './components/hero/ImpactMetrics';
import { About } from './components/about/About';
import { ServicesSection } from './components/services/ServicesSection';
import { ProjectGrid } from './components/projects/ProjectGrid';
import { ExperienceTimeline } from './components/experience/ExperienceTimeline';
import { EngineeringShowcase } from './components/engineering/EngineeringShowcase';
import { SkillsSection } from './components/skills/SkillsSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/contact/Footer';
import { CaseStudyModal } from './components/case-studies/CaseStudyModal';
import { RecruiterViewModal } from './components/recruiter/RecruiterViewModal';
import { projects } from './data/projects';
import { Project } from './types';

export const App: React.FC = () => {
  const [showPreloader, setShowPreloader] = useState<boolean>(true);
  const [recruiterModalOpen, setRecruiterModalOpen] = useState<boolean>(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  // Initialize Lenis Smooth Inertial Scroll (Exact Ashmit smooth feeling)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Check URL hash for deep links
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#recruiter' || hash === '#recruiter-view') {
        setRecruiterModalOpen(true);
      } else if (hash.startsWith('#project/')) {
        const slug = hash.replace('#project/', '');
        const matched = projects.find((p) => p.slug.toLowerCase() === slug || p.id.toLowerCase() === slug);
        if (matched) {
          setActiveCaseStudy(matched);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
    // Fallback ensure hero animation ran
    runHeroEntranceAnimation();
  };

  const openProjectCaseStudy = (project: Project) => {
    setActiveCaseStudy(project);
    window.history.pushState(null, '', `#project/${project.slug}`);
  };

  const closeCaseStudy = () => {
    setActiveCaseStudy(null);
    if (window.location.hash.startsWith('#project/')) {
      window.history.pushState(null, '', '#projects');
    }
  };

  const openRecruiterView = () => {
    setRecruiterModalOpen(true);
    window.history.pushState(null, '', '#recruiter');
  };

  const closeRecruiterView = () => {
    setRecruiterModalOpen(false);
    if (window.location.hash === '#recruiter') {
      window.history.pushState(null, '', '#home');
    }
  };

  const scrollToTerminal = () => {
    const elem = document.getElementById('engineering');
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-300">
      {/* Hello Preloader (Exact Ashmit 24-language cycling with liquid SVG curve exit) */}
      {showPreloader && (
        <HelloPreloader
          onTriggerHero={runHeroEntranceAnimation}
          onComplete={handlePreloaderComplete}
        />
      )}

      {/* Top Navbar */}
      <Navbar
        onOpenRecruiterView={openRecruiterView}
        onOpenTerminal={scrollToTerminal}
      />

      {/* Main Flow Sections */}
      <main className="relative">
        <Hero
          onOpenRecruiterView={openRecruiterView}
          animTriggered={!showPreloader}
        />
        <MarqueeTicker />
        <ImpactMetrics />
        <About />
        <ServicesSection />
        <ProjectGrid
          projects={projects}
          onOpenCaseStudy={openProjectCaseStudy}
        />
        <ExperienceTimeline />
        <EngineeringShowcase />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Deep Technical Case Study Modal */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={closeCaseStudy}
        onSelectProject={openProjectCaseStudy}
        allProjects={projects}
      />

      {/* 30-Second Recruiter View Modal */}
      <RecruiterViewModal
        isOpen={recruiterModalOpen}
        onClose={closeRecruiterView}
        onSelectProject={openProjectCaseStudy}
      />
    </div>
  );
};

export default App;
