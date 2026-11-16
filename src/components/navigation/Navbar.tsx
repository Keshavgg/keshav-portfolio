import React, { useState, useEffect } from 'react';
import { Menu, Sun, Moon, ArrowUpRight, Sparkles } from 'lucide-react';
import { profile } from '../../data/profile';
import { MenuDrawer } from './MenuDrawer';

interface NavbarProps {
  onOpenRecruiterView: () => void;
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRecruiterView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detect initial theme
    const hasDarkClass = document.documentElement.classList.contains('dark');
    setIsDark(hasDarkClass);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('kj_portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('kj_portfolio_theme', 'light');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[var(--bg-color)]/90 backdrop-blur-md border-b border-[var(--border-color)] py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram (Ashmit style) */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="w-9 h-9 rounded-md bg-[var(--text-color)] text-[var(--bg-color)] flex items-center justify-center font-display font-extrabold text-base transition-transform group-hover:scale-105">
              {profile.monogram}
            </div>
            <div>
              <div className="font-display font-bold text-sm tracking-tight uppercase text-[var(--text-color)] group-hover:opacity-80 transition-opacity">
                {profile.name}
              </div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-gray-color)]">
                AI SOFTWARE ENGINEER
              </div>
            </div>
          </a>

          {/* Availability Status Pill (Center) */}
          <div className="hidden lg:flex items-center gap-2 px-3.5 py-1 rounded-full border border-[var(--border-color)] bg-[var(--pill-bg)] text-[11px] font-mono uppercase tracking-wider text-[var(--text-color)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AVAILABLE FOR ROLES (DELHI / BLR / REMOTE)</span>
          </div>

          {/* Right Action Elements */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Email link with animated underline (Exact Ashmit style) */}
            <a
              href={`mailto:${profile.email}`}
              className="hidden md:inline-flex link-line font-mono text-xs uppercase tracking-wider text-[var(--text-color)]"
            >
              {profile.email}
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-[var(--border-color)] text-[var(--text-color)] hover:bg-[var(--pill-bg)] transition-colors"
              title={isDark ? "Switch to Ashmit Editorial Light" : "Switch to Stealth Cyber Dark"}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Menu Button (Ashmit style) */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--text-color)] text-[var(--text-color)] font-mono text-xs uppercase tracking-widest hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all"
              aria-label="Open menu"
            >
              <Menu className="w-3.5 h-3.5" />
              <span>MENU</span>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Fullscreen Drawer */}
      <MenuDrawer
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpenRecruiterView={onOpenRecruiterView}
      />
    </>
  );
};
