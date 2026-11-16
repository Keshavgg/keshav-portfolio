import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    'VISA (SPECIAL PROJECTS GROUP)',
    'ATLYS (GYM-WORLD VOICE AI INTERN)',
    'NPST (GENERATIVE AI BANKING RAG)',
    '500+ LEETCODE ALGORITHMIC SOLUTIONS',
    'LANGGRAPH MULTI-AGENT RESEARCH SWARMS',
    'vLLM MODEL SERVING (40% LATENCY CUT)',
    'ELEVENLABS + TWILIO FULL-DUPLEX AUDIO BRIDGE',
    'FASTAPI & SPRING BOOT MICROSERVICES',
    'POSTGRESQL & REDIS IN-MEMORY STATE',
    'DOCKER CONTAINERIZATION & AWS EC2 DEPLOYMENTS',
    'MAIT DELHI (GGSIPU) B.TECH COMPUTER SCIENCE',
  ];

  return (
    <div className="w-full border-y border-[var(--border-color)] bg-[var(--pill-bg)] py-3 overflow-hidden select-none">
      <div className="flex w-max ticker-content font-mono text-xs uppercase tracking-widest text-[var(--text-color)]">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-4">
            <span className="font-semibold">{text}</span>
            <span className="text-[var(--text-gray-second-color)] font-normal">//</span>
          </div>
        ))}
      </div>
    </div>
  );
};
