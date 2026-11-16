import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight, Github, Linkedin, Code2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profile } from '../../data/profile';
import { getAssetUrl } from '../../utils/assets';

export const ContactSection: React.FC = () => {
  const resumeUrl = getAssetUrl('/Keshav_Jindal_Resume.pdf');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrCompany: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (err) {}

      const subject = encodeURIComponent(`Engineering Opportunity — ${formData.roleOrCompany || formData.name}`);
      const body = encodeURIComponent(
        `Hi Keshav,\n\nMy name is ${formData.name} (${formData.email}) from ${formData.roleOrCompany || 'my team'}.\n\n${formData.message}\n\nBest regards,\n${formData.name}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    }, 500);
  };

  return (
    <section id="contact" className="py-24 border-b border-[var(--border-color)] bg-[var(--bg-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Ashmit Style) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-8 border-b border-[var(--border-color)] mb-14">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--text-gray-color)] mb-2">
              [ 07 // INQUIRY & COLLABORATION ]
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-[var(--text-color)] tracking-tight uppercase">
              LET'S BUILD SOMETHING EXTRAORDINARY
            </h2>
            <p className="mt-2 font-mono text-xs sm:text-sm text-[var(--text-gray-color)] max-w-2xl">
              Actively seeking AI Software Engineering, Backend & Systems roles across New Delhi, Bengaluru, and Remote.
            </p>
          </div>
          <div className="font-mono text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 uppercase tracking-widest shrink-0 font-semibold">
            ● AVAILABLE IMMEDIATELY
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Big Email */}
          <div className="lg:col-span-6 space-y-8 font-mono">
            <div>
              <div className="text-xs uppercase tracking-widest text-[var(--text-gray-color)] mb-2 font-bold">
                // DIRECT EMAIL INQUIRY
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="link-line font-display font-black text-2xl sm:text-4xl text-[var(--text-color)] tracking-tight uppercase leading-none"
              >
                {profile.email}
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)]">
                <div className="text-[var(--text-gray-color)] uppercase tracking-wider text-[10px] mb-1">
                  DIRECT PHONE
                </div>
                <a href={`tel:${profile.phone}`} className="font-bold text-[var(--text-color)] hover:underline">
                  {profile.phone}
                </a>
              </div>

              <div className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)]">
                <div className="text-[var(--text-gray-color)] uppercase tracking-wider text-[10px] mb-1">
                  LOCATION & TIMEZONE
                </div>
                <div className="font-bold text-[var(--text-color)]">
                  New Delhi, India (IST / UTC+5:30)
                </div>
              </div>
            </div>

            {/* Social Connects Bar */}
            <div className="pt-4 border-t border-[var(--border-color)]">
              <div className="text-xs uppercase tracking-widest text-[var(--text-gray-color)] mb-3 font-bold">
                // VERIFIED PROFILES & CODEBASES
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-xs text-[var(--text-color)] uppercase tracking-wider hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GITHUB (Keshavgg)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-xs text-[var(--text-color)] uppercase tracking-wider hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <a
                  href={profile.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-xs text-[var(--text-color)] uppercase tracking-wider hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>LEETCODE (500+)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dispatch Transmission Form */}
          <div className="lg:col-span-6 border border-[var(--border-color)] bg-[var(--card-bg)] p-6 sm:p-8 rounded-xl font-mono shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)] mb-6 text-xs uppercase">
              <span className="font-bold text-[var(--text-color)]">TRANSMIT MESSAGE / BRIEF</span>
              <span className="text-[var(--text-gray-color)]">FAST DISPATCH</span>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="font-display font-black text-2xl text-[var(--text-color)] uppercase">
                  Dispatch Synthesized!
                </h4>
                <p className="text-xs text-[var(--text-gray-color)] max-w-sm mx-auto leading-relaxed">
                  Your message has been queued and your local email client prepared. I typically respond within 12–24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', roleOrCompany: '', message: '' });
                  }}
                  className="mt-3 px-4 py-2 rounded-full border border-[var(--border-color)] text-xs uppercase tracking-wider hover:bg-[var(--pill-bg)]"
                >
                  SEND ANOTHER DISPATCH
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[var(--text-gray-color)] uppercase tracking-wider text-[10px] mb-1 font-bold">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sam Altman"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] focus:outline-none focus:border-[var(--text-color)]"
                    />
                  </div>

                  <div>
                    <label className="block text-[var(--text-gray-color)] uppercase tracking-wider text-[10px] mb-1 font-bold">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="recruiter@tech.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] focus:outline-none focus:border-[var(--text-color)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[var(--text-gray-color)] uppercase tracking-wider text-[10px] mb-1 font-bold">
                    ORGANIZATION / POSITION SCOPE
                  </label>
                  <input
                    type="text"
                    value={formData.roleOrCompany}
                    onChange={(e) => setFormData({ ...formData, roleOrCompany: e.target.value })}
                    placeholder="e.g. AI Systems Engineer / Voice AI Team"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] focus:outline-none focus:border-[var(--text-color)]"
                  />
                </div>

                <div>
                  <label className="block text-[var(--text-gray-color)] uppercase tracking-wider text-[10px] mb-1 font-bold">
                    BRIEF MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe technical focus, team scope, or inquiry regarding Visa / Atlys / NPST experience..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] focus:outline-none focus:border-[var(--text-color)] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-full bg-[var(--text-color)] text-[var(--bg-color)] font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-85 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT DISPATCH</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
