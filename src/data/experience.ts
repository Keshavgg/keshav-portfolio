import { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    id: 'visa-2026',
    company: 'Visa',
    role: 'AI Software Engineer Intern – Special Projects Group (TLT)',
    location: 'Bengaluru, India',
    duration: '10 Weeks',
    period: 'Jun 2026 — Aug 2026',
    type: 'Enterprise',
    isVerified: true,
    verificationBadge: 'Verified Internship (Special Projects Group TLT)',
    summary: 'Selected out of 440+ applicants to join the Technology Leadership Team (TLT) Special Projects Group, architecting LangChain ReAct agents, high-concurrency FastAPI microservices, and optimizing vLLM model serving.',
    responsibilities: [
      'Built LangChain ReAct agents with tool calling and Pydantic structured outputs to automate enterprise data-ingestion workflows, reducing manual effort by approximately 75%.',
      'Developed REST microservices using Python and FastAPI for LLM-powered features, containerized with Docker and deployed on AWS EC2.',
      'Implemented automated CI/CD workflows using GitHub Actions and optimized vLLM model serving, reducing model inference latency by 40%.',
      'Engineered hybrid BM25 and TF-IDF lexical ranking over structured MySQL data layers to solve legal and procurement terminology retrieval failures.',
      'Integrated LangSmith evaluation harnesses for automated prompt regression scoring, latency benchmarking, and hallucination reduction.'
    ],
    technologies: [
      'Python', 'FastAPI', 'LangChain', 'vLLM', 'Docker', 'AWS EC2',
      'GitHub Actions', 'Pydantic v2', 'MySQL', 'BM25 / TF-IDF', 'LangSmith'
    ],
    keyMetrics: [
      { label: 'Manual Effort Reduction', value: '75%' },
      { label: 'Inference Latency Cut', value: '40% via vLLM' },
      { label: 'Cohort Selection', value: '1 of 440+ Applicants' },
      { label: 'Architecture', value: 'ReAct Agent + CI/CD' }
    ],
    projectSpotlight: {
      name: 'Enterprise Ingestion ReAct Agent & vLLM Serving',
      description: 'Production agentic ingestion pipeline replacing manual multi-stage procurement forms with autonomous tool execution, strict Pydantic output validation, and low-latency vLLM inference.',
      highlights: [
        'Cut manual review duration by 75% via deterministic tool-calling state machines.',
        'Slashed tail p99 inference latency by 40% through vLLM page attention optimization.',
        'Full CI/CD integration with GitHub Actions on AWS EC2.'
      ]
    }
  },
  {
    id: 'atlys-2026',
    company: 'Atlys',
    role: 'AI Software Engineer Intern – Gym-World',
    location: 'Delhi, India',
    duration: '50-Day Intensive Internship',
    period: 'Sep 2026 — Nov 2, 2026',
    type: 'Enterprise',
    isVerified: true,
    verificationBadge: 'Verified Internship (Voice AI Agent Simulation)',
    summary: 'Built Gym-World, an end-to-end simulation environment for testing conversational voice AI agents through automated agent-to-agent phone calls, full-duplex audio bridges, and real-time streaming.',
    responsibilities: [
      'Built Gym-World, a simulation environment for testing conversational voice AI agents through automated agent-to-agent phone calls.',
      'Implemented a Python bidirectional audio bridge to coordinate simulated calls, manage active speakers, and stream audio between agents with low latency.',
      'Deployed the application on an AWS EC2 instance and integrated ElevenLabs Conversational AI with Twilio Media Streams, including HMAC-based webhook signature verification.',
      'Added real-time transcript streaming through Server-Sent Events (SSE) and audio communication over WebSockets, with PostgreSQL-backed call-state management.',
      'Engineered active speaker arbitration logic preventing audio buffer overflows during simultaneous agent interruptions.'
    ],
    technologies: [
      'Python', 'ElevenLabs Conversational AI', 'Twilio Media Streams',
      'WebSockets', 'Server-Sent Events (SSE)', 'PostgreSQL', 'AWS EC2', 'HMAC Auth', 'FastAPI'
    ],
    keyMetrics: [
      { label: 'Voice Bridge Latency', value: '<200ms Full-Duplex' },
      { label: 'Testing Paradigm', value: 'Agent-to-Agent Phone Calls' },
      { label: 'Audio Protocol', value: 'WebSockets + Twilio Streams' },
      { label: 'Telemetry', value: 'Real-Time SSE Transcripts' }
    ],
    projectSpotlight: {
      name: 'Gym-World Voice AI Simulator & Audio Bridge',
      description: 'Distributed simulation cluster orchestrating automated phone conversations between synthetic caller personas and ElevenLabs voice agents, capturing full latency and transcript telemetry.',
      highlights: [
        'Built full-duplex Python audio router bridging raw PCM/u-law Twilio stream chunks with ElevenLabs WebSockets.',
        'HMAC webhook validation securing incoming telephony webhooks from spoofed carriers.',
        'PostgreSQL state persistence with real-time SSE streaming for live call observation.'
      ]
    }
  },
  {
    id: 'npst-2024',
    company: 'Network People Services Technologies (NPST)',
    role: 'Generative AI Engineer Intern',
    location: 'Noida, India',
    duration: 'Summer Internship',
    period: 'Jun 2024 — Aug 2024',
    type: 'Enterprise',
    isVerified: true,
    verificationBadge: 'Verified Internship (NPST Digital Payments)',
    summary: 'Engineered conversational AI infrastructure, semantic embeddings RAG systems, and Java Spring Boot microservices supporting 5,000+ daily banking customer interactions.',
    responsibilities: [
      'Developed a RAG-based customer support chatbot using NLP and semantic embeddings to handle banking support queries, increasing automated query resolution by 65%.',
      'Built backend microservices using Java and Spring Boot to support 5,000+ daily interactions and developed prompt-evaluation workflows to assess answer accuracy.',
      'Constructed prompt templates and validation guardrails to prevent hallucination of non-existent transaction charges or inaccurate banking guidelines.',
      'Optimized database queries and Hibernate/JPA entity relationships on MySQL, reducing query execution latency across support endpoints.',
      'Designed resilient REST API contracts capable of gracefully managing flaky mobile client reconnections during payment support flows.'
    ],
    technologies: [
      'Java 17', 'Spring Boot', 'Spring MVC', 'Hibernate / JPA', 
      'RAG', 'Vector Embeddings', 'MySQL', 'REST APIs', 'Postman'
    ],
    keyMetrics: [
      { label: 'Automated Query Resolution', value: '65%' },
      { label: 'Daily Interactions Handled', value: '5,000+' },
      { label: 'Core Platform', value: 'TimePay Banking Microservice' },
      { label: 'Evaluation', value: 'Automated Prompt Checks' }
    ],
    projectSpotlight: {
      name: 'Banking RAG Chatbot & Transaction Microservice',
      description: 'Enterprise support AI system serving 5,000+ daily customer queries, combining semantic document retrieval with strict transaction validation guardrails.',
      highlights: [
        '65% increase in automated query resolution without human agent escalation.',
        'Java Spring Boot backend handling high-concurrency payment support loads.',
        'Zero hallucination rate on regulated banking transaction policies.'
      ]
    }
  }
];
