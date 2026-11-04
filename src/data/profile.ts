import { ProfileData, EducationItem } from '../types';

export const profile: ProfileData = {
  name: 'Keshav Jindal',
  shortName: 'Keshav',
  monogram: 'KJ',
  title: 'Software Engineer — Backend, Cloud-Native & AI Systems',
  headline: 'I build systems. I explore possibilities.',
  tagline: "I'm Keshav Jindal — a computer engineering student and developer interested in building scalable applications, backend systems, intelligent software and meaningful digital experiences.",
  location: 'Delhi, India',
  availability: 'Available for Summer/Fall 2026 Internships & 2027 Full-Time Roles',
  email: 'keshav.jindal.7029@gmail.com',
  phone: '+91 8368317466',
  github: 'https://github.com/Keshavgg',
  linkedin: 'https://linkedin.com/in/keshav7029',
  leetcode: 'https://leetcode.com/u/XxKeshavxX/',
  resumeFileName: 'Keshav_Jindal_Resume.pdf',
  stats: {
    leetcodeCount: 500,
    internshipsCompleted: 2,
    reposBuilt: 21,
    graduationYear: 2027,
  },
  bioParagraphs: [
    "I am an engineer driven by curiosity about how complex systems behave under the hood. Whether architecting high-throughput financial backends in Java and Spring Boot, optimizing sub-10ms retrieval pipelines in Python, or orchestrating autonomous agent swarms in LangGraph, I focus on building software that is reliable, observable, and grounded in sound engineering principles.",
    "My journey spans core low-level fundamentals to cutting-edge AI systems. I've designed microservices serving 5,000+ interactions daily during my internship at NPST, engineered automated sourcing pipelines with LangSmith evaluation and vLLM latency reductions at Visa's Special Projects Group, and solved over 500 algorithmic challenges on LeetCode.",
    "I believe great engineering is not about chasing hype or gluing together black-box libraries without comprehension. It is about understanding trade-offs: when to use an in-memory sparse index over a heavy vector database, how to isolate deterministic financial math from stochastic LLM advice, and how to structure modular, testable codebases that stand the test of production."
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
    'Database Management Systems (DBMS)',
    'Object-Oriented Programming (OOP)',
    'Operating Systems (OS)',
    'Computer Networks',
    'System Design & Microservices'
  ],
  highlights: [
    'Selected out of 440+ applicants for the prestigious Visa Technology Leadership Team (TLT) Special Projects Group internship.',
    'Authored a 60-page comprehensive Industrial Training Report on "Goro: Automating a Sourcing Platform with a MySQL Data Layer, BM25/TF-IDF Retrieval, and LangSmith Evaluation".',
    'Active competitive programmer solving 500+ problems on LeetCode covering dynamic programming, graph theory, trees, and time-space optimization.'
  ]
};
