import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Core Systems',
    iconName: 'Code2',
    description: 'High-performance programming languages for scalable distributed backends and algorithmic computing',
    skills: [
      { name: 'Python', context: 'FastAPI, LangGraph, LangChain, vLLM, SDXL-Turbo, Kokoro, RapidOCR, NumPy', highlight: true },
      { name: 'Java', context: 'Java 17, Spring Boot, Spring MVC, Spring Data JPA, Hibernate, Enterprise APIs', highlight: true },
      { name: 'C / C++', context: '500+ LeetCode Solved; memory management, Graph Theory, Dynamic Programming, Trees', highlight: true },
      { name: 'TypeScript / JavaScript', context: 'Next.js 14, React 18, Node.js, Express, WebSockets, type-safe full-stack', highlight: true },
      { name: 'SQL', context: 'PostgreSQL, MySQL, SQLite, query indexing, transactions, ACID integrity' }
    ]
  },
  {
    title: 'AI, LLMs & Voice AI',
    iconName: 'Cpu',
    description: 'Agentic workflows, real-time voice bridges, model serving, and retrieval systems',
    skills: [
      { name: 'LangGraph & LangChain', context: 'Multi-agent research swarms, ReAct agents with tool calling and Pydantic structured output', highlight: true },
      { name: 'vLLM Model Serving', context: 'PagedAttention optimization, slashing model inference latency by 40% at Visa', highlight: true },
      { name: 'ElevenLabs & Twilio Streams', context: 'Full-duplex bidirectional voice AI bridges, Gym-World call simulator (<200ms latency)', highlight: true },
      { name: 'Retrieval-Augmented Generation (RAG)', context: 'Banking customer support RAG at NPST (65% resolution), hybrid BM25 + dense retrieval', highlight: true },
      { name: 'Multimodal AI & Video Engine', context: 'SDXL-Turbo, Kokoro neural TTS, and FFmpeg automated short-form video generation', highlight: true },
      { name: 'Evaluations & Guardrails', context: 'LangSmith automated regression scoring, prompt validation, anti-hallucination checks' }
    ]
  },
  {
    title: 'Backend & Cloud Microservices',
    iconName: 'Server',
    description: 'Frameworks and runtimes powering high-concurrency microservices and real-time streaming',
    skills: [
      { name: 'FastAPI (Python)', context: 'Async event loop, Pydantic v2 schemas, REST microservices on AWS EC2', highlight: true },
      { name: 'Spring Boot (Java)', context: 'Enterprise microservices handling 5,000+ daily queries at NPST', highlight: true },
      { name: 'WebSockets & Server-Sent Events', context: 'Real-time bidirectional audio streaming and live transcript telemetry', highlight: true },
      { name: 'Docker & AWS (EC2, S3)', context: 'Containerized microservices, cloud deployments, IAM policies, model serving', highlight: true },
      { name: 'GitHub Actions CI/CD', context: 'Automated test suites, linting, Docker build pipelines, and production deploy' }
    ]
  },
  {
    title: 'Databases & In-Memory Stores',
    iconName: 'Database',
    description: 'Data tier architectures for transactional and analytical workloads',
    skills: [
      { name: 'PostgreSQL', context: 'Call-state management for Gym-World, relational schemas, ACID integrity', highlight: true },
      { name: 'MySQL', context: 'Relational data tier for enterprise sourcing and banking microservices at Visa & NPST', highlight: true },
      { name: 'SQLite', context: 'Zero-latency embedded relational engine for Plan4U and BillGuard AI', highlight: true },
      { name: 'Redis', context: 'In-memory caching, TTL policies, session storage and real-time coordination' }
    ]
  },
  {
    title: 'Algorithmic Rigor & System Design',
    iconName: 'Wrench',
    description: 'Foundations ensuring code correctness, low latency, and maintainability',
    skills: [
      { name: '500+ LeetCode Solved', context: 'Advanced algorithms: Graph theory (Dijkstra, BFS/DFS), Dynamic Programming, Trees, Two Pointers', highlight: true },
      { name: 'Haversine Spatial Algorithms', context: 'Geographic radius exploration filtering hotels, restaurants, and attractions', highlight: true },
      { name: 'Min-Cashflow Settlement', context: 'Greedy debt simplification algorithm minimizing inter-member transactions in Plan4U', highlight: true },
      { name: 'System Design & Microservices', context: 'Distributed consensus, active speaker arbitration, circuit breakers, idempotency' }
    ]
  }
];
