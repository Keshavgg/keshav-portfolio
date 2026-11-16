import React, { useEffect, useState } from 'react';
import { ArrowUpRight, X, Github, Linkedin, Mail, Phone, Code2 } from 'lucide-react';
import { profile } from '../../data/profile';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRecruiterView: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onOpenRecruiterView,
}) => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format as IST / New Delhi time
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTimeStr(`${now.toLocaleTimeString('en-GB', options)} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = [
    { number: '01', label: 'SELECTED WORKS', href: '#projects' },
    { number: '02', label: 'PROFILE & DOSSIER', href: '#about' },
    { number: '03', label: 'SERVICES & STACK', href: '#services' },
    { number: '04', label: 'ENTERPRISE EXPERIENCE', href: '#experience' },
    { number: '05', label: 'RUNTIME LAB & SIMULATOR', href: '#simulator' },
    { number: '06', label: 'GET IN TOUCH', href: '#contact' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-[var(--bg-color)] text-[var(--text-color)] transition-all duration-500 overflow-y-auto p-6 sm:p-12 lg:p-16">
      {/* Top Bar inside Menu Drawer */}
      <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[var(--text-color)] text-[var(--bg-color)] flex items-center justify-center font-display font-extrabold text-sm">
            {profile.monogram}
          </div>
          <div>
            <div className="font-display font-bold text-base uppercase tracking-tight">
              {profile.name}
            </div>
            <div className="font-mono text-[10px] text-[var(--text-gray-color)] uppercase tracking-widest">
              AI SOFTWARE ENGINEER
            </div>
          </div>
        </div>

        {/* Live Delhi Clock (Ashmit exact feature) */}
        <div className="hidden sm:flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--text-gray-color)] border border-[var(--border-color)] px-3 py-1.5 rounded-full bg-[var(--pill-bg)]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>NEW DELHI</span>
          <span className="text-[var(--text-color)] font-medium">{timeStr}</span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-4 py-2 border border-[var(--border-color)] rounded-full hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all"
          aria-label="Close menu"
        >
          <span>CLOSE</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Large Typography Links */}
      <div className="py-12 my-auto">
        <nav className="flex flex-col space-y-4 sm:space-y-6">
          {menuItems.map((item) => (
            <a
              key={item.number}
              href={item.href}
              onClick={onClose}
              className="group flex items-baseline gap-4 sm:gap-8 transition-transform hover:translate-x-3 duration-300"
            >
              <span className="font-mono text-xs sm:text-sm text-[var(--text-gray-color)] tracking-widest">
                /{item.number}
              </span>
              <span className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[var(--text-color)] group-hover:opacity-75 transition-opacity">
                {item.label}
              </span>
              <ArrowUpRight className="w-6 h-6 sm:w-10 sm:h-10 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--text-color)]" />
            </a>
          ))}

          {/* Quick Recruiter View Trigger */}
          <div className="pt-4">
            <button
              onClick={() => {
                onClose();
                onOpenRecruiterView();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--text-color)] text-[var(--bg-color)] font-mono text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              <span>OPEN 30-SECOND RECRUITER DOSSIER</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Footer Info inside Menu Drawer */}
      <div className="pt-8 border-t border-[var(--border-color)] grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
        <div>
          <div className="text-[var(--text-gray-color)] uppercase tracking-wider mb-2">
            DIRECT INQUIRY
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="link-line font-bold text-sm tracking-tight"
          >
            {profile.email.toUpperCase()}
          </a>
          <div className="text-[var(--text-gray-color)] mt-1">
            {profile.phone}
          </div>
        </div>

        <div>
          <div className="text-[var(--text-gray-color)] uppercase tracking-wider mb-2">
            DISCIPLINE & LOCATION
          </div>
          <div className="text-[var(--text-color)] font-medium">
            AI AGENTS // AUDIO BRIDGES // DISTRIBUTED SYSTEMS
          </div>
          <div className="text-[var(--text-gray-color)] mt-1">
            NEW DELHI, INDIA · READY FOR RELOCATION / REMOTE
          </div>
        </div>

        <div className="flex flex-col md:items-end justify-between">
          <div className="flex items-center gap-4 text-[var(--text-color)]">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line uppercase tracking-wider flex items-center gap-1 hover:opacity-75"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line uppercase tracking-wider flex items-center gap-1 hover:opacity-75"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LINKEDIN</span>
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line uppercase tracking-wider flex items-center gap-1 hover:opacity-75"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>LEETCODE (500+)</span>
            </a>
          </div>
          <div className="text-[var(--text-gray-color)] mt-4 text-[11px]">
            © 2026 KESHAV JINDAL · ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </div>
  );
};
