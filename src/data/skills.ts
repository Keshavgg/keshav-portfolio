import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'Code2',
    description: 'Languages used for building scalable backends, systems, and algorithms',
    skills: [
      { name: 'Java', context: 'Primary enterprise language; Spring Boot, Hibernate, Multithreading', highlight: true },
      { name: 'Python', context: 'AI/ML systems, FastAPI, LangChain, PyTorch, statistical modeling', highlight: true },
      { name: 'C / C++', context: 'Algorithmic problem solving; 500+ LeetCode problems; memory management', highlight: true },
      { name: 'TypeScript', context: 'Full-stack type safety; Node.js, Express, Next.js 14', highlight: true },
      { name: 'JavaScript (ES6+)', context: 'Asynchronous event loops, DOM, modern frontends' },
      { name: 'SQL', context: 'Relational data modeling, indexing, ACID transactions, complex joins' }
    ]
  },
  {
    title: 'Backend & Cloud Microservices',
    iconName: 'Server',
    description: 'Frameworks and runtimes powering high-availability services',
    skills: [
      { name: 'Spring Boot', context: 'Enterprise microservices, Spring MVC, Spring Security, dependency injection', highlight: true },
      { name: 'FastAPI', context: 'High-throughput async Python APIs, Pydantic validation, OpenAPI specs', highlight: true },
      { name: 'Spring Data JPA / Hibernate', context: 'ORM mappings, lazy loading, JPQL, transaction management' },
      { name: 'Node.js & Express', context: 'RESTful services, JWT auth, WebSockets, rate limiting' },
      { name: 'Docker & Containers', context: 'Multi-stage Dockerfiles, image minimization, local container stacks' },
      { name: 'Kubernetes (K8s)', context: 'Staging manifests, service ingress, Helm chart deployments' },
      { name: 'AWS (EC2, S3)', context: 'Cloud deployments, IAM policies, static artifact storage' }
    ]
  },
  {
    title: 'AI, LLMs & Retrieval (RAG)',
    iconName: 'Cpu',
    description: 'Generative AI architectures, vector search, and agentic workflows',
    skills: [
      { name: 'LangChain & LangGraph', context: 'Multi-agent orchestration, state channels, tool calling', highlight: true },
      { name: 'Retrieval-Augmented Generation (RAG)', context: 'Hybrid BM25 + dense vector retrieval, semantic chunking', highlight: true },
      { name: 'Vector DBs (ChromaDB, Pinecone)', context: 'Embedding indexing, cosine similarity, metadata filtering' },
      { name: 'LangSmith', context: 'Automated LLM evaluation, hallucination tracking, prompt benchmarking' },
      { name: 'vLLM Serving Optimization', context: 'PagedAttention, KV cache management, 40% latency reductions' },
      { name: 'NeMo Guardrails', context: 'Programmable safety rails, topic boundaries, citation enforcement' },
      { name: 'Time-Series & Classical ML', context: 'Holt-Winters forecasting, scikit-learn, statsmodels, NLP lexicons' }
    ]
  },
  {
    title: 'Databases & Storage',
    iconName: 'Database',
    description: 'Data tier architectures for transactional and analytical workloads',
    skills: [
      { name: 'MySQL', context: 'Enterprise relational store at Visa and NPST; indexing, query optimization', highlight: true },
      { name: 'PostgreSQL', context: 'Relational schemas, connection pooling (psycopg2), ACID compliance' },
      { name: 'SQLite (Native & SQLAlchemy)', context: 'Embedded zero-latency datastore for prototypes and local services' },
      { name: 'Redis', context: 'In-memory caching, TTL policies, session storage' },
      { name: 'MongoDB', context: 'Document modeling, aggregation pipelines, schema flexibility' }
    ]
  },
  {
    title: 'Frontend & UI Engineering',
    iconName: 'Layout',
    description: 'Crafting responsive, performant, and accessible interfaces',
    skills: [
      { name: 'React 18', context: 'Hooks, context, custom state hooks, component architecture', highlight: true },
      { name: 'Next.js 14', context: 'App Router, Server Actions, SSR, route handlers' },
      { name: 'Tailwind CSS', context: 'Utility-first styling, responsive layouts, design systems' },
      { name: 'Three.js & WebGL', context: 'Interactive 3D scenes, shaders, lighting, canvas performance' },
      { name: 'Framer Motion & GSAP', context: 'Spring physics, stagger sequences, timeline animations' }
    ]
  },
  {
    title: 'Core Fundamentals & Tooling',
    iconName: 'Wrench',
    description: 'Engineering practices ensuring code quality and reliability',
    skills: [
      { name: 'Data Structures & Algorithms', context: '500+ LeetCode problems solved; graph, DP, tree mastery', highlight: true },
      { name: 'System Design & Distributed Patterns', context: 'Event-driven architectures, caching tiers, circuit breakers' },
      { name: 'Git & GitHub Actions', context: 'Feature branching, PR review workflows, automated CI/CD pipelines' },
      { name: 'Maven & Gradle', context: 'Java dependency lifecycle management and build automation' },
      { name: 'Postman & cURL', context: 'API contract testing, environment variables, automation collections' },
      { name: 'Linux / Unix Shell Scripting', context: 'Zsh, Bash automation, process management, POSIX environments' }
    ]
  }
];
