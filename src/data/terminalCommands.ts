import { profile, education } from './profile';
import { experiences } from './experience';
import { projects } from './projects';
import { skillCategories } from './skills';

export interface CommandResponse {
  type: 'text' | 'table' | 'error' | 'success' | 'json';
  content: string | string[];
}

export const executeTerminalCommand = (rawCommand: string): CommandResponse => {
  const trimmed = rawCommand.trim();
  const parts = trimmed.split(' ');
  const cmd = parts[0].toLowerCase();
  const arg = parts.slice(1).join(' ').toLowerCase();

  switch (cmd) {
    case 'help':
      return {
        type: 'text',
        content: [
          '⚡ KESHAV JINDAL — INTERACTIVE SYSTEM SHELL v2.4',
          'Available commands:',
          '  about       - Overview of engineering mindset and background',
          '  projects    - List all 21 discovered projects and prototypes',
          '  project <slug> - Inspect detailed case study for a project',
          '  skills      - View verified technical proficiencies',
          '  experience  - View verified enterprise internships (Visa, NPST)',
          '  education   - View university degree, CGPA, and coursework',
          '  contact     - View direct email, phone, and social handles',
          '  inventory   - Summary of the 21-project audit inventory',
          '  whoami      - Print current user session info',
          '  stats       - View key engineering metrics (LeetCode, etc.)',
          '  clear       - Clear terminal screen'
        ]
      };

    case 'about':
      return {
        type: 'text',
        content: [
          `👤 ${profile.name} — ${profile.title}`,
          `📍 ${profile.location} | Status: ${profile.availability}`,
          '',
          ...profile.bioParagraphs
        ]
      };

    case 'projects':
      return {
        type: 'text',
        content: [
          `📦 REPOSITORY & PROJECT INVENTORY (${projects.length} Total Systems):`,
          '---------------------------------------------------------------------------------',
          ...projects.map((p, idx) => 
            `[${(idx + 1).toString().padStart(2, '0')}] ${p.title} (${p.tier})\n    Category: ${p.category} | Metric: ${p.highlightMetric}\n    Slug: ${p.slug}`
          ),
          '---------------------------------------------------------------------------------',
          'Tip: Type "project <slug>" to view the complete case study for any project.'
        ]
      };

    case 'project':
      if (!arg) {
        return {
          type: 'error',
          content: 'Error: Missing project slug. Try "project billguard-ai" or "project orbit-travel-os".'
        };
      }
      const match = projects.find(p => p.slug.toLowerCase() === arg || p.id.toLowerCase() === arg);
      if (!match) {
        return {
          type: 'error',
          content: `Project "${arg}" not found. Run "projects" to view available slugs.`
        };
      }
      return {
        type: 'text',
        content: [
          `🚀 ${match.title.toUpperCase()}`,
          `Subtitle: ${match.subtitle}`,
          `Category: ${match.category} | Status: ${match.tier}`,
          `Metric: ${match.highlightMetric}`,
          '',
          '📌 PROBLEM:',
          match.problem,
          '',
          '💡 SOLUTION:',
          match.solution,
          '',
          '🏗️ ARCHITECTURE:',
          match.architecture.overview,
          ...match.architecture.dataFlow.map(f => `  ${f}`),
          '',
          '⚙️ KEY TECHNOLOGIES:',
          match.tags.join(', ')
        ]
      };

    case 'skills':
      return {
        type: 'text',
        content: [
          '🛠️ VERIFIED TECHNICAL PROFICIENCIES:',
          ...skillCategories.map(cat => 
            `\n[${cat.title.toUpperCase()}]\n${cat.skills.map(s => `  • ${s.name}: ${s.context}`).join('\n')}`
          )
        ]
      };

    case 'experience':
      return {
        type: 'text',
        content: [
          '💼 VERIFIED ENTERPRISE EXPERIENCE:',
          ...experiences.map(e => 
            `\n🏢 ${e.company} — ${e.role} (${e.period})\n   Location: ${e.location} | Verification: ${e.verificationBadge}\n   Highlights:\n${e.responsibilities.map(r => `   - ${r}`).join('\n')}`
          )
        ]
      };

    case 'education':
      return {
        type: 'text',
        content: [
          `🎓 ${education.institution}`,
          `Degree: ${education.degree}`,
          `Timeline: ${education.timeline} | GPA: ${education.gpa}`,
          `Location: ${education.location}`,
          '',
          'Coursework: ' + education.relevantCoursework.join(', '),
          '',
          'Highlights:',
          ...education.highlights.map(h => `  • ${h}`)
        ]
      };

    case 'contact':
      return {
        type: 'text',
        content: [
          '📬 CONTACT & CHANNELS:',
          `  Email:    ${profile.email}`,
          `  Phone:    ${profile.phone}`,
          `  LinkedIn: ${profile.linkedin}`,
          `  GitHub:   ${profile.github}`,
          `  LeetCode: ${profile.leetcode}`,
          `  Location: ${profile.location}`
        ]
      };

    case 'whoami':
      return {
        type: 'text',
        content: 'guest@antigravity:~$ (Visiting recruiter or fellow engineer)'
      };

    case 'stats':
      return {
        type: 'text',
        content: [
          '📊 SYSTEM TELEMETRY & STATS:',
          `  LeetCode Solved:       ${profile.stats.leetcodeCount}+ problems`,
          `  Verified Internships:  ${profile.stats.internshipsCompleted} (Visa & NPST)`,
          `  Discovered Projects:   ${projects.length} systems`,
          `  Graduation Horizon:    May ${profile.stats.graduationYear}`
        ]
      };

    case 'inventory':
      return {
        type: 'text',
        content: [
          '📑 FULL AUDIT INVENTORY: 21 Systems Audited & Verified',
          '  Tier 1: Production / Deployed (2)',
          '  Tier 2: Completed Projects (6)',
          '  Tier 3: Working Prototypes (7)',
          '  Tier 4: Experimental Projects (2)',
          '  Tier 5: Learning Projects (3)',
          '  Tier 6: Concept / Proposed Ideas (1)',
          '',
          'Full documentation available at: /PROJECT_INVENTORY.md'
        ]
      };

    case 'clear':
      return { type: 'text', content: '__CLEAR__' };

    case '':
      return { type: 'text', content: '' };

    default:
      return {
        type: 'error',
        content: `Command not recognized: "${cmd}". Type "help" to see available commands.`
      };
  }
};
