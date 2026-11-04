export type ProjectTier = 
  | 'Production / Deployed'
  | 'Completed Project'
  | 'Working Prototype'
  | 'Experimental Project'
  | 'Learning Project'
  | 'Concept / Proposed Idea';

export type ProjectCategory = 
  | 'AI / ML Systems'
  | 'Backend & Cloud'
  | 'Full-Stack'
  | 'Data & Analytics'
  | 'Infrastructure & DevOps'
  | 'Experiments & Tools';

export interface ArchitectureComponent {
  name: string;
  role: string;
  technologies: string;
}

export interface TechnicalChallenge {
  challenge: string;
  context: string;
  resolution: string;
}

export interface ArchitecturalDecision {
  choice: string;
  rationale: string;
  tradeOff: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  tier: ProjectTier;
  featured: boolean;
  featuredRank?: number;
  highlightMetric: string;
  summary: string;
  problem: string;
  solution: string;
  
  // Full technical deep-dive
  architecture: {
    overview: string;
    diagramType?: 'spring-boot' | 'hybrid-rag' | 'fraud-audit' | 'time-series' | 'multi-agent' | 'microservices' | 'generic';
    components: ArchitectureComponent[];
    dataFlow: string[];
  };
  
  techBreakdown: {
    category: string;
    items: {
      name: string;
      purpose: string;
      advantage: string;
    }[];
  }[];
  
  challenges: TechnicalChallenge[];
  decisions: ArchitecturalDecision[];
  learnings: string[];
  
  improvements: {
    implemented: string[];
    proposed: string[];
  };
  
  links: {
    github?: string;
    liveDemo?: string;
    docs?: string;
    paper?: string;
    statusNote?: string;
  };

  tags: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  period: string;
  type: 'Enterprise' | 'Internship' | 'Academic';
  isVerified: boolean;
  verificationBadge: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  keyMetrics: { label: string; value: string }[];
  projectSpotlight?: {
    name: string;
    description: string;
    highlights: string[];
  };
}

export interface SkillItem {
  name: string;
  context: string;
  tags?: string[];
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  timeline: string;
  gpa: string;
  relevantCoursework: string[];
  highlights: string[];
}

export interface ProfileData {
  name: string;
  shortName: string;
  monogram: string;
  title: string;
  headline: string;
  tagline: string;
  bioParagraphs: string[];
  location: string;
  availability: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  leetcode: string;
  resumeFileName: string;
  stats: {
    leetcodeCount: number;
    internshipsCompleted: number;
    reposBuilt: number;
    graduationYear: number;
  };
}
