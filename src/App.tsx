import React, { useState, useEffect } from 'react';
import { CinematicIntro } from './components/cinematic/CinematicIntro';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { ExperienceTimeline } from './components/experience/ExperienceTimeline';
import { ProjectGrid } from './components/projects/ProjectGrid';
import { CaseStudyModal } from './components/case-studies/CaseStudyModal';
import { EngineeringShowcase } from './components/engineering/EngineeringShowcase';
import { SkillsSection } from './components/skills/SkillsSection';
import { RecruiterViewModal } from './components/recruiter/RecruiterViewModal';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/contact/Footer';
import { projects } from './data/projects';
import { Project } from './types';

export const App: React.FC = () => {
  const [introFinished, setIntroFinished] = useState<boolean>(false);
  const [recruiterModalOpen, setRecruiterModalOpen] = useState<boolean>(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  // Check URL hash/query on initial mount for deep links (e.g. #recruiter, #project-slug)
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
    <div className="min-h-screen bg-[#07080B] text-[#F5F5F7] font-sans selection:bg-blue-600/30 selection:text-blue-200">
      {/* Cinematic Intro Splash */}
      {!introFinished && (
        <CinematicIntro onComplete={() => setIntroFinished(true)} />
      )}

      {/* Main Portfolio Navigation */}
      <Navbar
        onOpenRecruiterView={openRecruiterView}
        onOpenTerminal={scrollToTerminal}
      />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero onOpenRecruiterView={openRecruiterView} />
        <About />
        <ExperienceTimeline />
        <ProjectGrid
          projects={projects}
          onOpenCaseStudy={openProjectCaseStudy}
        />
        <EngineeringShowcase />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Deep Technical Case Study Modal (A-J Sections) */}
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
