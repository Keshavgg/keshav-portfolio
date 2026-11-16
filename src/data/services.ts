export interface ServiceItem {
  number: string;
  title: string;
  secondTitle: string;
  list: string[];
  text: string;
  tag: string;
}

export const services: ServiceItem[] = [
  {
    number: "00-1",
    title: "ai & agentic workflows",
    secondTitle: "// ai & agentic workflows",
    tag: "AGENTIC / MULTI-AGENT",
    list: [
      "/ LangGraph Multi-Agent Workflows",
      "/ LangChain ReAct Agents",
      "/ Tool Calling & Structured Outputs (Pydantic)",
      "/ Critic & Automated Review Loops",
      "/ Multi-Stage Search, Scraping & Synthesis",
      "/ Deterministic Decision Safeguards"
    ],
    text: "Architecting stateful agentic workflows and multi-agent swarms. Implementing specialized search, scraping, synthesis, and critic stages with deterministic guardrails, preventing hallucinations and ensuring high-reliability task execution under production constraints."
  },
  {
    number: "00-2",
    title: "voice ai & real-time audio",
    secondTitle: "// voice ai & real-time audio",
    tag: "TELEPHONY / FULL-DUPLEX",
    list: [
      "/ ElevenLabs Conversational AI Integration",
      "/ Twilio Media Streams Full-Duplex Routing",
      "/ Python Bidirectional Audio Bridge (<200ms)",
      "/ WebSockets & Server-Sent Events (SSE)",
      "/ Automated Agent-to-Agent Phone Simulations",
      "/ HMAC Webhook Signature Verification"
    ],
    text: "Engineering low-latency voice AI systems and real-time audio bridges. Built Gym-World at Atlys to simulate agent-to-agent phone calls, orchestrating WebSockets audio streaming, active speaker arbitration, and live Server-Sent Events (SSE) transcript telemetry."
  },
  {
    number: "00-3",
    title: "llms, rag & model serving",
    secondTitle: "// llms, rag & model serving",
    tag: "INFERENCE / OPTIMIZATION",
    list: [
      "/ vLLM Model Serving & PagedAttention",
      "/ 40% Inference Latency Optimization",
      "/ Hybrid RAG (BM25 + Semantic Vector Search)",
      "/ Banking Customer Support Systems",
      "/ Automated Prompt Regression & LangSmith Evals",
      "/ Sub-10ms In-Memory Retrieval"
    ],
    text: "Optimizing high-throughput LLM inference and enterprise retrieval pipelines. Reduced model inference latency by 40% using vLLM at Visa, scaled banking RAG support at NPST to 5,000+ daily queries (65% resolution), and engineered sub-10ms hybrid lexical-vector retrieval."
  },
  {
    number: "00-4",
    title: "backend & distributed systems",
    secondTitle: "// backend & distributed systems",
    tag: "MICROSERVICES / CLOUD",
    list: [
      "/ FastAPI & Asynchronous Python Microservices",
      "/ Java 17 & Spring Boot Enterprise Services",
      "/ PostgreSQL, MySQL & Redis Caching",
      "/ Docker Containerization & AWS EC2 / S3",
      "/ Automated GitHub Actions CI/CD Pipelines",
      "/ High-Concurrency REST & WebSockets Endpoints"
    ],
    text: "Building robust, containerized backend microservices across Python (FastAPI) and Java (Spring Boot). Deployed resilient cloud architectures on AWS EC2, configured strict CI/CD pipelines via GitHub Actions, and engineered zero-downtime database layers."
  },
  {
    number: "00-5",
    title: "multimodal ai & algorithms",
    secondTitle: "// multimodal ai & algorithms",
    tag: "SYNTHESIS / 500+ LEETCODE",
    list: [
      "/ SDXL-Turbo & Kokoro Neural TTS Pipelines",
      "/ FFmpeg Automated Video Assembly & Subtitles",
      "/ 500+ LeetCode Solved (Advanced DSA)",
      "/ Haversine Geo-Radius Discovery Algorithms",
      "/ Group-Debt Simplification (Min-Cashflow)",
      "/ C++ Competitive Programming & Performance"
    ],
    text: "Synthesizing multimodal AI media pipelines alongside deep algorithmic rigor. Built automated vertical short-form video generators combining SDXL-Turbo, neural voiceovers, and FFmpeg, backed by 500+ LeetCode solutions across Graph Theory, Dynamic Programming, and System Design."
  }
];
