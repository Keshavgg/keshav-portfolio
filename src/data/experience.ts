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
    verificationBadge: 'Official Visa Service Certificate (Emp ID: 550658)',
    summary: 'Selected out of 440+ applicants to join the Technology Leadership Team (TLT) Special Projects Group, architecting backend components and retrieval engines for high-availability enterprise sourcing and financial systems.',
    responsibilities: [
      'Architected and implemented "Goro" — an automated enterprise sourcing platform with a high-throughput MySQL data layer and hybrid BM25 / TF-IDF information retrieval.',
      'Engineered autonomous LangChain agents with dynamic tool calling and structured Pydantic/JSON outputs, automating critical intake workflows (TLMP, RAF) and slashing manual data entry effort by ~75%.',
      'Configured and fine-tuned vLLM inference serving parameters on AWS GPU instances, reducing model inference latency by 40% while preserving output fidelity.',
      'Integrated ChromaDB vector collections alongside MySQL relational stores to power hybrid semantic and keyword search across unstructured vendor agreements.',
      'Established end-to-end evaluation harnesses using LangSmith, establishing automated accuracy scoring, hallucination tracking, and regression testing across prompt iterations.',
      'Built and containerized Python and FastAPI microservices with Docker, integrating into automated CI/CD pipelines via GitHub Actions.'
    ],
    technologies: [
      'Python', 'FastAPI', 'Java', 'Spring Boot', 'MySQL', 'Docker', 
      'Kubernetes', 'LangChain', 'ChromaDB', 'vLLM', 'LangSmith', 'AWS (EC2, S3)'
    ],
    keyMetrics: [
      { label: 'Applicant Selection', value: '1 of 440+' },
      { label: 'Intake Automation', value: '75% Effort Cut' },
      { label: 'Inference Latency', value: '40% Reduced' },
      { label: 'Evaluation Engine', value: 'LangSmith Benchmarked' }
    ],
    projectSpotlight: {
      name: 'Project Goro (Enterprise Sourcing Automation)',
      description: 'Core sourcing orchestration system combining relational vendor schemas in MySQL with ChromaDB semantic embeddings and BM25 sparse lexical ranking, evaluated rigorously via LangSmith.',
      highlights: [
        'Overcame domain-specific legal terminology failure in pure vector search by engineering a hybrid BM25 + dense embedding reranking pipeline.',
        'Zero-breakage JSON serialization through strict Pydantic schemas enforced at the LLM boundary.',
        'Complete 60-page academic training report submitted and approved at MAIT (GGSIPU).'
      ]
    }
  },
  {
    id: 'npst-2024',
    company: 'Network People Services Technologies (NPST)',
    role: 'Generative AI Engineer Intern',
    location: 'Noida, India',
    duration: '3 Months',
    period: 'Jun 2024 — Aug 2024',
    type: 'Enterprise',
    isVerified: true,
    verificationBadge: 'Verified NPST Internship Completion Certificate',
    summary: 'Engineered conversational AI infrastructure and Java Spring Boot microservices for TimePay digital payment solutions, serving over 5,000 daily user transactions and support interactions.',
    responsibilities: [
      'Developed and productionized an NLP customer support chatbot utilizing Retrieval-Augmented Generation (RAG) and dense sentence embeddings for TimePay users.',
      'Engineered high-throughput backend microservices in Java 17 and Spring Boot, serving 5,000+ customer interactions daily with 99.9% uptime.',
      'Achieved a 65% increase in automated support query resolution without requiring escalation to human customer service representatives.',
      'Constructed few-shot prompt templates and an offline evaluation benchmark to systematically measure semantic answer accuracy and prevent financial hallucinations.',
      'Optimized database queries and Hibernate/JPA entity relationships on MySQL, reducing average query response times across support history endpoints.'
    ],
    technologies: [
      'Java 17', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 
      'Hibernate', 'MySQL', 'REST APIs', 'RAG', 'Vector Embeddings', 'Postman'
    ],
    keyMetrics: [
      { label: 'Daily Interactions', value: '5,000+' },
      { label: 'Automated Resolution', value: '+65% Boost' },
      { label: 'Core Framework', value: 'Java / Spring Boot' },
      { label: 'Domain', value: 'Fintech / TimePay' }
    ],
    projectSpotlight: {
      name: 'TimePay AI Chatbot & Banking Microservice',
      description: 'RAG-powered conversational assistant for banking queries integrated with resilient Java Spring Boot microservices and MySQL persistence.',
      highlights: [
        'Enforced rigid few-shot verification guardrails into prompts to prevent hallucination of non-existent transaction charges or inaccurate bank refund windows.',
        'Designed idempotent API contracts handling intermittent mobile network reconnects seamlessly.'
      ]
    }
  }
];
