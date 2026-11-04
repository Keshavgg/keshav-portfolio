import { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    id: 'visa-2026',
    company: 'Visa',
    role: 'AI Software Engineer Intern, Special Projects Group (TLT)',
    location: 'Bengaluru, India',
    duration: '10 Weeks',
    period: 'Jun 2026 — Aug 2026',
    type: 'Enterprise',
    isVerified: true,
    verificationBadge: 'Official Visa Service Certificate (Bengaluru SEZ Unit)',
    summary: 'Selected out of 440+ applicants to join the Technology Leadership Team (TLT) Special Projects Group, architecting backend automation, database layers, and retrieval engines for enterprise sourcing workflows.',
    responsibilities: [
      'Architected and implemented "Goro" — an automated enterprise sourcing platform with a structured MySQL data layer and hybrid BM25 / TF-IDF information retrieval.',
      'Automated critical enterprise intake workflows (including TLMP, RAF, and client intake forms), drastically reducing manual data entry overhead and operational turnaround time.',
      'Migrated unstructured sourcing records from ChromaDB into relational MySQL schemas, implementing idempotent batch ETL pipelines with comprehensive validation checks.',
      'Engineered BM25 and TF-IDF lexical ranking algorithms over MySQL, resolving legal terminology search failures where standard dense semantic embeddings struggled.',
      'Established end-to-end evaluation harnesses using LangSmith, establishing automated accuracy scoring, hallucination tracking, and regression benchmarking across prompt iterations.',
      'Authored a comprehensive 60-page Industrial Training Report detailing system architecture, error recovery, and evaluation methodology approved at MAIT (GGSIPU).'
    ],
    technologies: [
      'Python', 'FastAPI', 'Java', 'Spring Boot', 'MySQL', 'Docker', 
      'ChromaDB', 'BM25 / TF-IDF', 'LangChain', 'LangSmith', 'pytest'
    ],
    keyMetrics: [
      { label: 'Selection', value: '1 of 440+ Applicants' },
      { label: 'Platform', value: 'Project Goro Sourcing' },
      { label: 'Retrieval Engine', value: 'BM25 + TF-IDF' },
      { label: 'Evaluation', value: 'LangSmith Benchmarked' }
    ],
    projectSpotlight: {
      name: 'Project Goro (Enterprise Sourcing Automation)',
      description: 'Core sourcing orchestration system combining relational vendor schemas in MySQL with BM25 sparse lexical ranking, evaluated rigorously via LangSmith.',
      highlights: [
        'Overcame domain-specific legal terminology failure in pure vector search by engineering a hybrid BM25 + lexical reranking pipeline.',
        'Implemented idempotent batch data migration scripts with strict consistency validation checks.',
        'Complete 60-page academic training report submitted and approved at MAIT (GGSIPU).'
      ]
    }
  },
  {
    id: 'npst-2024',
    company: 'Network People Services Technologies (NPST)',
    role: 'Generative AI & Backend Engineer Intern',
    location: 'Noida, India',
    duration: 'Summer Internship',
    period: 'Jul 2024 — Aug 2024',
    type: 'Enterprise',
    isVerified: true,
    verificationBadge: 'Official NPST Internship Certificate (Noida Unit)',
    summary: 'Engineered conversational AI infrastructure and Java Spring Boot microservices for TimePay digital payment solutions and enterprise web applications.',
    responsibilities: [
      'Developed and evaluated an NLP-driven customer support chatbot utilizing Retrieval-Augmented Generation (RAG) for TimePay user queries.',
      'Engineered core backend microservices and REST APIs in Java 17 and Spring Boot, ensuring scalable performance and reliable data persistence.',
      'Contributed to the Train Website Project under technical mentorship, implementing clean MVC service architecture and responsive endpoints.',
      'Constructed prompt templates and validation checks to prevent hallucination of non-existent transaction charges or inaccurate banking guidelines.',
      'Optimized database queries and Hibernate/JPA entity relationships on MySQL, reducing query execution latency across support endpoints.'
    ],
    technologies: [
      'Java 17', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 
      'Hibernate', 'MySQL', 'REST APIs', 'RAG', 'Vector Embeddings', 'Postman'
    ],
    keyMetrics: [
      { label: 'Role', value: 'AI & Backend Intern' },
      { label: 'Core Stack', value: 'Java / Spring Boot' },
      { label: 'Applications', value: 'TimePay & Train Portal' },
      { label: 'Verification', value: 'Official NPST Certificate' }
    ],
    projectSpotlight: {
      name: 'TimePay AI Chatbot & Banking Microservice',
      description: 'Conversational assistant for banking and payment queries integrated with resilient Java Spring Boot microservices and MySQL persistence.',
      highlights: [
        'Enforced prompt guardrails and validation rules to ensure factual responses for transaction queries.',
        'Designed RESTful API contracts handling mobile network reconnects cleanly.'
      ]
    }
  }
];
