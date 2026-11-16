import React from 'react';
import { CheckCircle2, GraduationCap, Award, Code2, Terminal } from 'lucide-react';
import { profile, education } from '../../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-[var(--border-color)] bg-[var(--bg-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Eyebrow and Barcode (Ashmit Signature Style) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-8 border-b border-[var(--border-color)] mb-14">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--text-gray-color)] mb-2">
              [ 01 // PROFILE & DOSSIER ]
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-[var(--text-color)] tracking-tight uppercase">
              ARCHITECTING AUTONOMOUS AGENTS & HIGH-THROUGHPUT RUNTIMES
            </h2>
          </div>

          {/* SVG Barcode Accent (Ashmit Style) */}
          <div className="shrink-0 flex flex-col items-end">
            <svg width="140" height="38" viewBox="0 0 140 38" fill="currentColor" className="text-[var(--text-color)] opacity-80">
              <rect x="0" y="0" width="3" height="38" />
              <rect x="5" y="0" width="1" height="38" />
              <rect x="8" y="0" width="4" height="38" />
              <rect x="15" y="0" width="2" height="38" />
              <rect x="19" y="0" width="1" height="38" />
              <rect x="22" y="0" width="5" height="38" />
              <rect x="30" y="0" width="2" height="38" />
              <rect x="34" y="0" width="3" height="38" />
              <rect x="40" y="0" width="1" height="38" />
              <rect x="43" y="0" width="4" height="38" />
              <rect x="50" y="0" width="2" height="38" />
              <rect x="54" y="0" width="6" height="38" />
              <rect x="63" y="0" width="1" height="38" />
              <rect x="67" y="0" width="3" height="38" />
              <rect x="73" y="0" width="2" height="38" />
              <rect x="78" y="0" width="5" height="38" />
              <rect x="86" y="0" width="1" height="38" />
              <rect x="90" y="0" width="3" height="38" />
              <rect x="95" y="0" width="2" height="38" />
              <rect x="100" y="0" width="4" height="38" />
              <rect x="107" y="0" width="1" height="38" />
              <rect x="111" y="0" width="5" height="38" />
              <rect x="119" y="0" width="2" height="38" />
              <rect x="124" y="0" width="3" height="38" />
              <rect x="130" y="0" width="2" height="38" />
              <rect x="135" y="0" width="4" height="38" />
            </svg>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-gray-color)] mt-1">
              KJ-2026-ENG-SYS
            </span>
          </div>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Deep Engineering Story */}
          <div className="lg:col-span-7 space-y-6 font-mono text-sm leading-relaxed text-[var(--text-color)]">
            <p className="text-base sm:text-lg font-medium leading-relaxed">
              I am an AI Software Engineer who believes the real value of artificial intelligence lies in production-grade integration, deterministic safeguards, and predictable low-latency execution.
            </p>

            <p className="text-[var(--text-gray-color)]">
              During my internship at <strong className="text-[var(--text-color)]">Visa's Special Projects Group (TLT)</strong>, I built LangChain ReAct agents with tool calling and Pydantic structured validation to automate enterprise procurement data-ingestion, reducing manual effort by ~75%. I optimized vLLM model serving to reduce inference latency by 40% and deployed containerized FastAPI microservices on AWS EC2.
            </p>

            <p className="text-[var(--text-gray-color)]">
              At <strong className="text-[var(--text-color)]">Atlys</strong>, I built Gym-World: a simulation environment for testing conversational voice AI agents via automated agent-to-agent phone calls. I developed a Python bidirectional audio bridge to coordinate simulated calls, integrated ElevenLabs with Twilio Media Streams, verified HMAC signatures, and broadcast live transcripts using Server-Sent Events (SSE).
            </p>

            <p className="text-[var(--text-gray-color)]">
              At <strong className="text-[var(--text-color)]">NPST</strong>, I engineered a RAG customer support chatbot handling 5,000+ daily interactions across Java Spring Boot microservices, lifting automated query resolution by 65% while enforcing anti-hallucination guardrails.
            </p>

            {/* Core Tenets Strip */}
            <div className="pt-6 border-t border-[var(--border-color)] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="border border-[var(--border-color)] p-4 rounded bg-[var(--card-bg)]">
                <div className="font-bold text-[var(--text-color)] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>DETERMINISTIC GUARDS</span>
                </div>
                <p className="text-[var(--text-gray-color)]">
                  Financial calculations, routing boundaries, and state mutations remain strictly deterministic in Python/Java.
                </p>
              </div>

              <div className="border border-[var(--border-color)] p-4 rounded bg-[var(--card-bg)]">
                <div className="font-bold text-[var(--text-color)] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>SUB-SECOND LATENCY</span>
                </div>
                <p className="text-[var(--text-gray-color)]">
                  Sub-200ms audio packet routing, vLLM PagedAttention caching, and sub-10ms sparse/dense hybrid search.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Specs Dossier Table (Ashmit Specs Style) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[var(--border-color)] bg-[var(--card-bg)] p-6 rounded-lg font-mono text-xs shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)] mb-4">
                <span className="font-bold uppercase tracking-wider text-[var(--text-color)]">
                  SPECIFICATION DOSSIER
                </span>
                <span className="text-emerald-500 uppercase tracking-widest text-[10px] font-semibold">
                  VERIFIED // 2026
                </span>
              </div>

              <div className="divide-y divide-[var(--border-color)]">
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[var(--text-gray-color)]">NAME</span>
                  <span className="font-semibold text-[var(--text-color)]">{profile.name}</span>
                </div>

                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[var(--text-gray-color)]">EDUCATION</span>
                  <span className="font-semibold text-[var(--text-color)]">B.Tech CSE (MAIT Delhi)</span>
                </div>

                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[var(--text-gray-color)]">TIMELINE</span>
                  <span className="text-[var(--text-color)]">{education.timeline}</span>
                </div>

                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[var(--text-gray-color)]">ACADEMIC CGPA</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">{education.gpa}</span>
                </div>

                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[var(--text-gray-color)]">LEETCODE PROBLEMS</span>
                  <span className="font-semibold text-[var(--text-color)]">500+ Solved (DSA Master)</span>
                </div>

                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[var(--text-gray-color)]">ENTERPRISE INTERNSHIPS</span>
                  <span className="font-semibold text-[var(--text-color)]">Visa · Atlys · NPST</span>
                </div>

                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[var(--text-gray-color)]">PRIMARY LOCATIONS</span>
                  <span className="text-[var(--text-color)]">New Delhi / Bengaluru / Remote</span>
                </div>

                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[var(--text-gray-color)]">CLEARANCES & CERTS</span>
                  <span className="text-[var(--text-color)]">Visa SEZ · Atlys Voice AI · NPST</span>
                </div>
              </div>

              {/* Coursework Tags */}
              <div className="pt-4 mt-2 border-t border-[var(--border-color)]">
                <div className="text-[var(--text-gray-color)] uppercase tracking-wider text-[10px] mb-2 font-semibold">
                  CORE COMPUTER SCIENCE COURSEWORK
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {education.relevantCoursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded border border-[var(--border-color)] bg-[var(--pill-bg)] text-[10px] text-[var(--text-color)]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote Block */}
            <div className="p-4 border-l-2 border-[var(--text-color)] bg-[var(--pill-bg)] font-mono text-xs italic text-[var(--text-color)]">
              "Great engineering is understanding trade-offs: when to use an in-memory sparse index over a heavy vector DB, how to prevent active-speaker deadlocks in audio bridges, and how to keep models accountable."
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
