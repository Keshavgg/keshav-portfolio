import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, Github, Linkedin, FileText, Code2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profile } from '../../data/profile';

export const ContactSection: React.FC = () => {
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

    // Simulate sending / prepare fallback mailto link
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // Confetti fallback
      }

      // Also trigger a mailto fallback window
      const subject = encodeURIComponent(`Engineering Opportunity / Collaboration — ${formData.roleOrCompany || formData.name}`);
      const body = encodeURIComponent(
        `Hi Keshav,\n\nMy name is ${formData.name} (${formData.email}) from ${formData.roleOrCompany || 'my team'}.\n\n${formData.message}\n\nBest,\n${formData.name}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>06 // CONNECT & COLLABORATE</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-gradient-silver tracking-tight">
            Let's build something meaningful.
          </h2>
          <p className="mt-3 text-text-secondary text-sm sm:text-base max-w-2xl">
            I am actively seeking software engineering, backend, cloud-native, and AI-related opportunities for Summer/Fall 2026 internships and 2027 full-time roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl text-text-primary">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Whether you're looking to discuss a high-scale backend role, a generative AI pipeline, or an innovative product experiment, I would love to connect.
              </p>
            </div>

            {/* Contact Pills */}
            <div className="space-y-3 font-mono text-xs sm:text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-surface-elevated/70 border border-white/5 hover:border-blue-500/30 text-text-secondary hover:text-text-primary transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-text-muted">Primary Email</div>
                  <div className="text-text-primary font-semibold">{profile.email}</div>
                </div>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-surface-elevated/70 border border-white/5 hover:border-blue-500/30 text-text-secondary hover:text-text-primary transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-emerald-600/10 text-emerald-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-text-muted">Direct Phone / WhatsApp</div>
                  <div className="text-text-primary font-semibold">{profile.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-surface-elevated/70 border border-white/5 text-text-secondary">
                <div className="p-2.5 rounded-xl bg-rose-600/10 text-rose-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-text-muted">Current Base</div>
                  <div className="text-text-primary font-semibold">{profile.location}</div>
                </div>
              </div>
            </div>

            {/* Social & Code Profiles */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                Profiles & Repositories
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-card border border-white/10 text-xs font-mono text-text-secondary hover:text-blue-400 hover:border-blue-500/40 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-card border border-white/10 text-xs font-mono text-text-secondary hover:text-text-primary hover:border-white/30 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profile.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-card border border-white/10 text-xs font-mono text-text-secondary hover:text-amber-400 hover:border-amber-500/40 transition-all"
                >
                  <Code2 className="w-4 h-4" />
                  <span>LeetCode (500+)</span>
                </a>
                <a
                  href="/resume/Keshav_Jindal_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600/15 border border-blue-500/30 text-xs font-mono text-blue-300 hover:bg-blue-600/25 transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume PDF</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-surface-card border border-white/10 shadow-2xl relative">
              <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                Send an Engineering Dispatch
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary mb-6">
                Fill out the message brief below. It will open your prefilled email client and log the dispatch context.
              </p>

              {submitted ? (
                <div className="p-8 text-center rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-text-primary">
                    Message Dispatched!
                  </h4>
                  <p className="text-xs text-text-secondary max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name}. Your email client was triggered with the message details. I typically reply within 12–24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', roleOrCompany: '', message: '' });
                    }}
                    className="mt-3 px-4 py-2 rounded-xl bg-surface-elevated text-xs font-mono text-text-secondary hover:text-text-primary"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-text-muted mb-1.5">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Satya Nadella"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-elevated border border-white/10 text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-blue-500 font-mono transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-text-muted mb-1.5">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiting@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-elevated border border-white/10 text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-blue-500 font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-text-muted mb-1.5">
                      COMPANY / OPPORTUNITY ROLE
                    </label>
                    <input
                      type="text"
                      value={formData.roleOrCompany}
                      onChange={(e) => setFormData({ ...formData, roleOrCompany: e.target.value })}
                      placeholder="e.g. Software Engineer (Backend / Distributed Systems)"
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-elevated border border-white/10 text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-blue-500 font-mono transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-text-muted mb-1.5">
                      MESSAGE / TECHNICAL BRIEF *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project details, team scope, or questions about my background at Visa/NPST..."
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-elevated border border-white/10 text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-blue-500 font-mono transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.45)] transition-all group disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Synthesizing Dispatch...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        <span>Send Engineering Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
