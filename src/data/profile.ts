import { ProfileData, EducationItem } from '../types';

export const profile: ProfileData = {
  name: 'Keshav Jindal',
  shortName: 'Keshav',
  monogram: 'KJ',
  title: 'AI Software Engineer & Systems Architect',
  headline: 'ARCHITECTING AGENTIC WORKFLOWS, VOICE AI BRIDGES & HIGH-THROUGHPUT SYSTEMS.',
  tagline: "AI Software Engineer & B.Tech CSE (MAIT). Specializing in multi-agent orchestration, real-time voice bridges, vLLM optimization, and enterprise RAG architectures.",
  location: 'New Delhi, India',
  availability: 'Available for AI Software Engineering & Systems Roles',
  email: 'keshav.jindal.7029@gmail.com',
  phone: '+91 8368317466',
  github: 'https://github.com/Keshavgg',
  linkedin: 'https://linkedin.com/in/keshav-jindal',
  leetcode: 'https://leetcode.com/u/XxKeshavxX/',
  resumeFileName: 'Keshav_Jindal_Resume.pdf',
  stats: {
    leetcodeCount: 500,
    internshipsCompleted: 3,
    reposBuilt: 24,
    graduationYear: 2027,
  },
  bioParagraphs: [
    "I am an AI Software Engineer driven by curiosity about how complex systems, distributed runtimes, and agentic workflows behave at production scale. Whether optimizing vLLM model serving to slash inference latency by 40% at Visa, engineering full-duplex bidirectional voice bridges between Twilio and ElevenLabs at Atlys, or scaling banking RAG microservices to 5,000+ daily queries at NPST, I build software that is resilient, low-latency, and grounded in sound engineering principles.",
    "My foundation bridges core low-level algorithms with cutting-edge agentic architectures. I have solved 500+ problems on LeetCode covering dynamic programming, graph theory, trees, and system design, while building multi-agent research swarms in LangGraph and autonomous multimodal video synthesis pipelines in Python.",
    "I believe great engineering is not about chasing hype or gluing black-box libraries without comprehension. It is about understanding critical trade-offs: when to isolate deterministic financial rules from stochastic LLM advice, how to prevent active-speaker deadlocks in real-time audio streaming, and how to structure modular microservices that maintain sub-second response times under load."
  ]
};

export const education: EducationItem = {
  institution: 'Maharaja Agrasen Institute of Technology (GGSIPU)',
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  location: 'New Delhi, India',
  timeline: 'Aug 2023 — May 2027',
  gpa: '7.78 / 10.0 CGPA',
  relevantCoursework: [
    'Data Structures and Algorithms',
    'Object-Oriented Programming (OOP)',
    'Operating Systems',
    'Database Management Systems (DBMS)',
    'Distributed Systems',
    'Computer Networks'
  ],
  highlights: [
    'Selected for 3 intensive AI Engineering internships across enterprise leaders: Visa (Special Projects Group), Atlys (Gym-World), and NPST (Generative AI).',
    'Maintained strong academic rigor in core CS principles: distributed consensus, relational DB indexing, memory hierarchies, and concurrency.',
    'Competitive programmer with 500+ algorithmic problems solved on LeetCode across Graph Theory, Dynamic Programming, and High-Performance Data Structures.'
  ]
};
