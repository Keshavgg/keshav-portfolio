import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CinematicIntro: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Fast, responsive loading progression (approx 1.2s total)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsDone(true), 200);
          setTimeout(onComplete, 800);
          return 100;
        }
        const delta = Math.floor(Math.random() * 20) + 12;
        return Math.min(prev + delta, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="cinematic-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 bg-[#07080B] flex flex-col items-center justify-center select-none"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-96 h-96 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

          {/* Monogram Brand */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <div className="relative w-20 h-20 rounded-2xl bg-surface-elevated border border-border-highlight flex items-center justify-center shadow-2xl mb-6">
              <span className="font-display font-extrabold text-3xl tracking-tight text-gradient-silver">
                KJ
              </span>
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 opacity-20 blur-sm pointer-events-none" />
            </div>

            <span className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted mb-6">
              Keshav Jindal • System Core
            </span>

            {/* Progress Bar Container */}
            <div className="w-56 h-1 bg-surface-elevated rounded-full overflow-hidden border border-border-subtle relative">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Percentage Display */}
            <div className="mt-3 font-mono text-xs text-text-muted">
              INITIALIZING ENVIRONMENT // {progress}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
