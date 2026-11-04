import React, { useState, useEffect } from 'react';
import { Menu, X, Briefcase, Terminal, ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/profile';

interface NavbarProps {
  onOpenRecruiterView: () => void;
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRecruiterView, onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Engineering', href: '#engineering', id: 'engineering' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scroll spy logic
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07080B]/80 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:scale-105 transition-all shadow-md">
              <span className="font-display font-extrabold text-lg text-gradient-silver tracking-tight">
                {profile.monogram}
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-sm tracking-tight text-text-primary group-hover:text-blue-400 transition-colors">
                {profile.name}
              </div>
              <div className="font-mono text-[10px] text-text-muted tracking-wide">
                SOFTWARE ENGINEER
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-surface-elevated/70 border border-white/[0.07] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-[0_0_12px_rgba(59,130,246,0.2)]'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Terminal Quick Jump */}
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-elevated border border-white/10 text-xs text-text-secondary hover:text-text-primary hover:border-cyan-500/40 transition-all font-mono"
                title="Launch Interactive Terminal"
              >
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>SHELL</span>
              </button>
            )}

            {/* Recruiter View CTA */}
            <button
              onClick={onOpenRecruiterView}
              className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-medium shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all group"
            >
              <Briefcase className="w-3.5 h-3.5 text-blue-200 group-hover:scale-110 transition-transform" />
              <span>Recruiter View</span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] bg-white/20 font-mono tracking-wider">
                30s
              </span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-surface-elevated border border-white/10 text-text-secondary hover:text-text-primary"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#07080B]/95 backdrop-blur-2xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8">
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2 px-2">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                    : 'text-text-primary hover:bg-white/[0.04]'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRecruiterView();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-sm shadow-lg"
            >
              <Briefcase className="w-4 h-4" />
              <span>Open Recruiter 30-Second View</span>
            </button>

            <div className="text-center font-mono text-xs text-text-muted">
              {profile.email} • {profile.location}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
