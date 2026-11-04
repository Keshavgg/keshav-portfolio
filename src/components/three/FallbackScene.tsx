import React from 'react';

export const FallbackScene: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Ambient gradient backdrops */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-blue-600/10 blur-3xl animate-pulse-subtle pointer-events-none" />
      <div className="absolute w-60 h-60 md:w-80 md:h-80 rounded-full bg-violet-600/10 blur-3xl translate-x-12 translate-y-8 pointer-events-none" />

      {/* Cybernetic geometric orbital fallback */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        {/* Outer Orbit */}
        <div className="absolute inset-0 rounded-full border border-blue-500/20 border-dashed animate-[spin_30s_linear_infinite]" />
        
        {/* Mid Ring */}
        <div className="absolute inset-8 rounded-full border border-violet-500/30 animate-[spin_20s_linear_infinite_reverse]" />
        
        {/* Inner Octagonal Core */}
        <div className="absolute inset-16 rounded-2xl border border-cyan-400/40 rotate-45 animate-pulse bg-gradient-to-tr from-blue-500/10 to-violet-500/20 backdrop-blur-md flex items-center justify-center">
          <div className="w-12 h-12 rounded-lg border border-white/30 rotate-12 flex items-center justify-center">
            <span className="font-mono text-xs text-blue-400 font-bold">KJ.SYS</span>
          </div>
        </div>

        {/* Floating tech nodes */}
        <div className="absolute top-2 left-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#3B82F6]" />
        <div className="absolute bottom-6 right-8 w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_#8B5CF6]" />
        <div className="absolute top-1/3 left-4 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06B6D4]" />
      </div>
    </div>
  );
};
