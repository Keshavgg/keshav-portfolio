import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'billguard-ai',
    slug: 'billguard-ai',
    title: 'BillGuard AI — Logistics Fraud & Invoice Audit Engine',
    subtitle: 'Automated Transportation Freight Contract & PDF Invoice Discrepancy Detection',
    category: 'AI / ML Systems',
    tier: 'Working Prototype',
    featured: true,
    featuredRank: 2,
    highlightMetric: '5–15% Freight Overcharge Detection',
    summary: 'A document intelligence platform that reads multi-page transportation contracts and freight invoice PDFs locally, executes deterministic Python audit rules for rate caps, lane deviations, and kilometer tolerances, and provides constrained second-pass LLM advisory checks.',
    problem: 'Enterprise shippers and 3PL logistics networks manage thousands of multi-page freight bills monthly from distributed carrier fleets. Up to 15% of annual freight spend is lost to unauthorized fuel surcharges, mismatched origin-destination lanes, inflated billable distances, and duplicate trip charges. Manual auditing against complex contract rate sheets is painstakingly slow, while uploading sensitive corporate shipping data to generic cloud LLMs violates enterprise privacy boundaries.',
    solution: 'Engineered a privacy-preserving desktop/web audit suite with FastAPI and React. The system preserves folder hierarchies during batch uploads, reads text via PyPDF or local RapidOCR (for scanned paper bills), runs a deterministic Python audit rules engine comparing billed charges against agreed contract baselines, and sends only compact numeric comparison fields to an OpenRouter LLM for an advisory second-pass critique without sending raw PDFs or confidential vendor records.',
    architecture: {
      overview: 'Decoupled Client-Server architecture with a local-first privacy boundary. The React SPA manages folder selection and audit drilldowns; FastAPI orchestrates document tokenization, RapidOCR computer-vision fallback, deterministic math rule execution, and advisory LLM validation.',
      diagramType: 'fraud-audit',
      components: [
        { name: 'Document Ingestion Layer', role: 'Preserves carrier folder structures; classifies contract terms vs bills', technologies: 'PyPDF, RapidOCR, Pydantic' },
        { name: 'Deterministic Rules Engine', role: 'Calculates rate caps, fuel clause inclusivity, and km tolerance deltas', technologies: 'Python 3.12, NumPy, Regex Parser' },
        { name: 'Advisory AI Critic', role: 'Second-pass discrepancy verification over structured comparison metrics', technologies: 'OpenRouter (Nemotron 120B)' },
        { name: 'Audit Storage & UI', role: 'Stores audit runs, line-item flags, and split-screen PDF verification', technologies: 'SQLite, React, Tailwind CSS' }
      ],
      dataFlow: [
        '1. User uploads root contractor directory containing contract PDFs and invoice batches.',
        '2. Ingestion pipeline extracts text: direct PDF stream or on-device RapidOCR for scanned images.',
        '3. Regex & heuristic parsers extract structured bill fields (origin, destination, km, linehaul, fuel, POD).',
        '4. Deterministic rules engine validates against matched contract baseline (e.g. 10% km tolerance, fuel inclusivity).',
        '5. Compact numeric summary forwarded to OpenRouter LLM for advisory review; output presented with severity flags.'
      ]
    },
    techBreakdown: [
      {
        category: 'Backend & Extraction',
        items: [
          { name: 'FastAPI', purpose: 'Asynchronous API routing and document streaming', advantage: 'Sub-millisecond route dispatch and auto-generated OpenAPI schemas' },
          { name: 'RapidOCR', purpose: 'Local on-prem computer-vision optical character recognition', advantage: 'Zero cloud API latency, zero external data leakage for sensitive freight invoices' },
          { name: 'SQLite / SQLAlchemy', purpose: 'Audit run persistence and relational flag storage', advantage: 'Embedded zero-configuration database ideal for confidential standalone audits' }
        ]
      },
      {
        category: 'AI & Auditing',
        items: [
          { name: 'OpenRouter API', purpose: 'Second-pass advisory review using Nemotron 120B', advantage: 'Identifies subtle contextual contract discrepancies missed by rigid regex' },
          { name: 'Synthetic Pilot Generator', purpose: 'Generates realistic synthetic freight contracts across 5 carrier personas', advantage: 'Permits end-to-end load testing without risking actual shipper NDAs' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'Varying PDF Layouts & Scanned Image Noise',
        context: 'Logistics bills from regional carriers arrive in diverse formats: digital vector PDFs, skewed mobile camera photos, and faded carbon copies.',
        resolution: 'Implemented a hybrid extractor that tests for selectable text streams first; if empty or confidence is below threshold, it falls back to RapidOCR with image normalization.'
      },
      {
        challenge: 'Stochastic AI Overriding Financial Calculations',
        context: 'Directly asking LLMs to calculate freight math causes hallucinated totals and inconsistent monetary flags across runs.',
        resolution: 'Separated deterministic arithmetic into a rigid Python rules engine. The LLM receives only pre-calculated delta numbers and serves strictly as an advisory reviewer without permission to alter financial figures.'
      }
    ],
    decisions: [
      {
        choice: 'Local SQLite prototype over cloud PostgreSQL for v1',
        rationale: 'Enterprises evaluating billing fraud require immediate on-prem validation without setting up cloud infrastructure or passing security reviews.',
        tradeOff: 'Lacks multi-tenant horizontal scaling, but delivers instant zero-setup local utility.'
      },
      {
        choice: 'Extract-and-Summarize payload for LLM rather than raw document upload',
        rationale: 'Shrinks token usage by 94% and guarantees that carrier identity, driver names, and sensitive invoice IDs never leave the perimeter.',
        tradeOff: 'Requires sophisticated regex/heuristic parsing upfront before the AI step.'
      }
    ],
    learnings: [
      'Deterministic rule engines combined with advisory AI critics represent the most reliable pattern for high-stakes enterprise compliance.',
      'Synthetic data generation is essential for validating edge cases like duplicate invoice IDs and intentional distance threshold violations.'
    ],
    improvements: {
      implemented: [
        'Batch directory upload preserving contract-to-bill hierarchy',
        'Configurable route-distance tolerance percentage (default 10%)',
        'Fuel surcharge inclusion auditor',
        'RapidOCR image fallback and OpenRouter second-pass reviewer'
      ],
      proposed: [
        'Integration with FASTag toll plaza and GPS telematics APIs for automated route verification',
        'Multi-tenant cloud architecture with Celery distributed workers and PostgreSQL'
      ]
    },
    links: {
      statusNote: 'Functional prototype evaluated with synthetic logistics carriers; business & technical pitch prepared for FITT incubation (IIT Delhi).'
    },
    tags: ['Python', 'FastAPI', 'Document AI', 'RapidOCR', 'SQLite', 'React', 'Freight Tech']
  },

  {
    id: 'orbit-travel-os',
    slug: 'orbit-travel-os',
    title: 'Orbit Travel OS — Next-Gen AI Travel SuperApp',
    subtitle: 'High-Performance Travel Booking Marketplace & Conversational Copilot with Hybrid RAG',
    category: 'Full-Stack',
    tier: 'Working Prototype',
    featured: true,
    featuredRank: 3,
    highlightMetric: '<10ms SLA In-Memory Hybrid RAG',
    summary: 'An investor-grade travel operating system unifying multi-modal bookings (flights, stays, live events, fast-track visas) with an in-memory Hybrid RAG engine (BM25 + TF-IDF) and a multi-turn conversational AI copilot.',
    problem: 'Modern travel planning is fragmented across 5+ disparate platforms for flights, hotels, visa documentation, city events, and group cost splitting. Legacy OTAs (MakeMyTrip, Booking.com) offer rigid, transactional filter trees without conversational intelligence, while visa services (Atlys) are isolated from travel itineraries.',
    solution: 'Engineered Orbit Travel OS with Next.js 14 and FastAPI. Integrated a sub-10ms Hybrid RAG engine indexing 1,170+ live items across flights, luxury villas, concerts, and flat ₹499 family visas. Designed a conversational Copilot featuring multi-turn qualification state machines, an interactive day-by-day timeline, live group squad cost splitting, and 1-tap WhatsApp itinerary sharing.',
    architecture: {
      overview: 'Decoupled Next.js 14 App Router frontend with a high-throughput FastAPI backend. Employs an in-memory hybrid retrieval engine combining sparse lexical BM25 ranking with dense L2-normalized TF-IDF embeddings.',
      diagramType: 'hybrid-rag',
      components: [
        { name: 'Conversational State Machine', role: 'Qualifies traveler intent (mood, squad size, budget tier, aesthetic)', technologies: 'Next.js 14, React 18, TypeScript' },
        { name: 'Hybrid Retrieval Engine', role: 'Sub-10ms dual BM25 + dense TF-IDF vector retrieval over 1,170+ items', technologies: 'FastAPI, Python 3.12, NumPy' },
        { name: 'Visa & Travel OS Services', role: 'Passport OCR pre-check, dummy embassy vouchers, 18% GST invoice generator', technologies: 'SQLAlchemy, SQLite, Pydantic v2' },
        { name: 'Itinerary & Export Engine', role: 'Squad cost splitter (1P/2P/4P/6P) and WhatsApp markdown serialisation', technologies: 'Framer Motion, Lucide, Tailwind CSS' }
      ],
      dataFlow: [
        '1. Traveler submits natural language trip brief or queries conversational Copilot.',
        '2. Multi-turn state machine tracks traveler context in dynamic memory pill bar.',
        '3. FastAPI hybrid RAG engine executes dual lexical BM25 + dense TF-IDF search in <10ms.',
        '4. Results assembled into unified day-by-day schedule with live pricing and squad cost splits.',
        '5. Formatted itinerary exported directly to WhatsApp with 1-click clipboard synthesis.'
      ]
    },
    techBreakdown: [
      {
        category: 'Frontend & Architecture',
        items: [
          { name: 'Next.js 14 (App Router)', purpose: 'Server-side rendering, client chat studio, responsive marketplace', advantage: 'Zero layout shift, optimized font/image loading, and high-performance routing' },
          { name: 'TypeScript', purpose: 'End-to-end interface contracts across travel models', advantage: 'Eliminates runtime property errors in flight/hotel booking schemas' },
          { name: 'Tailwind CSS', purpose: 'Dark-mode glassmorphic travel OS design system', advantage: 'Rapid iteration of high-fidelity travel widgets with minimal CSS bundle footprint' }
        ]
      },
      {
        category: 'Backend & Information Retrieval',
        items: [
          { name: 'FastAPI', purpose: 'Asynchronous API gateway and vector search endpoints', advantage: 'Asynchronous event loop easily handles high concurrent search requests' },
          { name: 'Hybrid BM25 + TF-IDF', purpose: 'Dual-strategy lexical and semantic document ranking', advantage: 'Achieves sub-10ms search SLA without the overhead of cloud vector DB cold starts' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'Sub-10ms Latency SLA on Complex Travel Queries',
        context: 'Querying flights, hotels, live concerts, and visas simultaneously using remote vector DBs introduced 300–600ms network roundtrip overhead.',
        resolution: 'Engineered an in-memory sparse BM25 index paired with L2-normalized TF-IDF vector embeddings vectorized in NumPy, dropping query latency to under 10ms.'
      },
      {
        challenge: 'Maintaining State Across Multi-Turn Conversational Travel Planning',
        context: 'Travelers change minds frequently (e.g. switching from 2 travelers to 4, or requesting mountain glamping instead of beach villas).',
        resolution: 'Architected a dynamic Traveler Memory Pill Bar that extracts entities from conversation turns and reflects updated context in real-time.'
      }
    ],
    decisions: [
      {
        choice: 'Atlys-equivalent flat ₹499 family visa model over per-traveler fee',
        rationale: 'Disrupts incumbent OTA pricing models by reducing family visa processing costs by up to ₹3,500.',
        tradeOff: 'Requires high-volume automation (OCR + automated dummy flight proofs) to maintain operational margin.'
      },
      {
        choice: 'In-memory NumPy retrieval over external Pinecone/Weaviate for local MVP',
        rationale: 'Guarantees complete offline functionality and instant local startup without API key dependency.',
        tradeOff: 'Index must fit within RAM, which is optimal for thousands of curated destinations.'
      }
    ],
    learnings: [
      'In-memory vectorized math often outperforms external managed databases for sub-millisecond retrieval on bounded datasets.',
      'Conversational interfaces in travel require clear visual UI affordances (pill bars, day tabs) rather than pure chat bubbles.'
    ],
    improvements: {
      implemented: [
        'Real-time hybrid BM25 + TF-IDF search across 1,170+ items',
        'Conversational Copilot with dynamic traveler memory pills',
        'Day-by-Day timeline view and squad cost splitter (1P/2P/4P/6P)',
        '1-tap WhatsApp markdown export and corporate 18% GST tax engine'
      ],
      proposed: [
        'Direct Amadeus / Sabre Global Distribution System (GDS) API integration',
        'Live WebSockets for collaborative multi-user squad planning'
      ]
    },
    links: {
      github: 'https://github.com/Keshavgg/orbit-travel-app',
      statusNote: 'Public GitHub repository; fully functional Next.js + FastAPI codebase.'
    },
    tags: ['Next.js 14', 'FastAPI', 'Python', 'TypeScript', 'Hybrid RAG', 'BM25', 'Travel Tech']
  },

  {
    id: 'researchmind-ai',
    slug: 'researchmind-ai',
    title: 'ResearchMind — Autonomous Multi-Agent AI Research System',
    subtitle: 'Collaborative 4-Agent Research Swarm with LangGraph, Tavily Search & Anti-Hallucination Guardrails',
    category: 'AI / ML Systems',
    tier: 'Completed Project',
    featured: true,
    featuredRank: 6,
    highlightMetric: '4 Specialized Agents · Zero Hallucinated Claims',
    summary: 'An autonomous multi-agent research pipeline orchestrating Search, Reader, Writer, and Critic agents to plan, scrape, synthesize, and verify comprehensive technical reports with strict citation provenance.',
    problem: 'Single-prompt LLM interactions routinely generate superficial summaries, hallucinatory citations, and stale information when researching complex technical subjects. A single agent lacks the separation of concerns necessary to verify facts independently.',
    solution: 'Architected a sequential and cyclic multi-agent pipeline using LangGraph and LangChain. A Search Agent executes targeted queries via Tavily API; a Reader Agent scrapes and sanitizes deep DOM text; a Writer Agent synthesizes structured academic markdown briefs; and a Critic Agent uses NeMo Guardrails to verify that every asserted claim is directly backed by source excerpts.',
    architecture: {
      overview: 'Directed acyclic and cyclic state graph in LangGraph. Each specialized agent operates with isolated prompt instructions, private scratchpads, and dedicated toolsets, exchanging structured state through typed Pydantic channels.',
      diagramType: 'multi-agent',
      components: [
        { name: 'Search Agent', role: 'Decomposes user topic and queries live search index', technologies: 'Tavily API, LangChain Tools' },
        { name: 'Reader Agent', role: 'Fetches full URLs and extracts sanitized body paragraphs', technologies: 'BeautifulSoup4, Requests, Regex' },
        { name: 'Writer Agent', role: 'Synthesizes multi-source context into structured technical reports', technologies: 'OpenAI / Claude LLMs, LangGraph' },
        { name: 'Critic / Guardrails Agent', role: 'Cross-verifies claims against sources and rejects unsourced statements', technologies: 'NeMo Guardrails, Semantic Cache' }
      ],
      dataFlow: [
        '1. User submits research topic.',
        '2. Search Agent executes 3–5 targeted search queries and extracts structured URL snippets.',
        '3. Reader Agent scrapes target webpages concurrently, purging extraneous boilerplate.',
        '4. Writer Agent compiles comprehensive draft with embedded citation markers.',
        '5. Critic Agent scans claims against scraped source text; if unverified, routes back for re-search.'
      ]
    },
    techBreakdown: [
      {
        category: 'Agent Orchestration',
        items: [
          { name: 'LangGraph / LangChain', purpose: 'Cyclic state graph coordination and tool binding', advantage: 'Deterministic state transitions and conditional routing based on critic feedback' },
          { name: 'Tavily Search API', purpose: 'Real-time high-relevance web intelligence retrieval', advantage: 'Filtered, search-engine-optimized snippets tailored specifically for LLM context windows' }
        ]
      },
      {
        category: 'Verification & Guardrails',
        items: [
          { name: 'NeMo Guardrails', purpose: 'Strict hallucination verification and citation bounds', advantage: 'Prevents the generation of plausible-sounding but unverifiable claims' },
          { name: 'Semantic Cache Layer', purpose: 'Avoids redundant LLM invocations for repeated queries', advantage: 'Cuts API expenses by up to 60% during iterative research loops' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'Preventing the Writer Agent from Fabricating Plausible Citations',
        context: 'Large language models often invent realistic-looking URLs and academic author names when summarizing topics.',
        resolution: 'Enforced strict citation provenance: the Writer agent is strictly constrained to cite only URL identifiers passed in the Reader agent state payload.'
      },
      {
        challenge: 'Web Scraping Anti-Bot Blocks and DOM Noise',
        context: 'Direct HTTP requests to modern web articles often return cookie consent walls, paywalls, and navigation scripts.',
        resolution: 'Engineered custom DOM sanitization filters in BeautifulSoup removing scripts, styles, navigation, and advertisement containers.'
      }
    ],
    decisions: [
      {
        choice: 'Cyclic LangGraph state machine over linear chain',
        rationale: 'Enables the Critic Agent to actively reject inadequate drafts and route back to Search with refined keywords.',
        tradeOff: 'Increases token consumption when multiple review cycles are triggered.'
      }
    ],
    learnings: [
      'Multi-agent systems require rigorous message contracts; free-form string passing leads to catastrophic drift across steps.',
      'Separation of research from drafting dramatically improves technical depth.'
    ],
    improvements: {
      implemented: [
        '4-agent autonomous pipeline (Search, Reader, Writer, Critic)',
        'Tavily API search integration and DOM content extraction',
        'Semantic cache layer and NeMo Guardrail citation enforcement'
      ],
      proposed: [
        'PDF whitepaper parsing (arXiv / bioRxiv) and interactive citation mind-map visualization'
      ]
    },
    links: {
      github: 'https://github.com/Keshavgg/ai_project',
      statusNote: 'Public GitHub repository; configured with render.yaml for cloud deployment.'
    },
    tags: ['Python', 'LangGraph', 'LangChain', 'Multi-Agent', 'Tavily API', 'NeMo Guardrails']
  },

  {
    id: 'autonomous-video-engine',
    slug: 'autonomous-video-engine',
    title: 'Autonomous AI Video Engine & Video Copilot',
    subtitle: 'On-Device Text-to-Video Pipeline (SDXL-Turbo, Neural TTS, FFmpeg Ken Burns) & RAG Transcript Copilot',
    category: 'AI / ML Systems',
    tier: 'Completed Project',
    featured: true,
    featuredRank: 5,
    highlightMetric: 'Zero Cloud GPU Costs · Sub-2s Scene Gen',
    summary: 'A local-first generative AI media pipeline compiling scripts into 1080x1920 Instagram Reels and YouTube Shorts on Apple Silicon using SDXL-Turbo, Kokoro/macOS TTS, and dynamic FFmpeg pan/zoom motion, complemented by a RAG transcript assistant.',
    problem: 'Short-form educational video production requires expensive cloud API subscriptions (ElevenLabs, Midjourney, RunWay), hours of manual editing timeline arrangement, and tedious subtitle synchronization.',
    solution: 'Engineered an automated end-to-end video pipeline running entirely on Apple Silicon unified memory. It splits user scripts into scenes, generates 1080x1920 visuals with SDXL-Turbo in under 2 seconds per frame, synthesizes neural voiceover, applies mathematical Ken Burns pan/zoom camera motions via FFmpeg, and burns synchronized text overlays. Integrated a RAG transcript assistant for context-aware video Q&A.',
    architecture: {
      overview: 'Multi-stage media synthesis pipeline orchestrated in Python: Text Parsing -> MPS-Accelerated Diffusion -> Audio Synthesis -> FFmpeg Filtergraph Composition -> Final Render.',
      diagramType: 'generic',
      components: [
        { name: 'Diffusion Synthesis Engine', role: 'Generates high-resolution background visuals locally', technologies: 'SDXL-Turbo, PyTorch MPS (Metal)' },
        { name: 'Voice Synthesis Module', role: 'Synthesizes neural voiceover audio', technologies: 'Kokoro Neural TTS, macOS Native TTS' },
        { name: 'FFmpeg Compositor', role: 'Mathematical Ken Burns camera motion, audio muxing, subtitle burn-in', technologies: 'FFmpeg 7.x, Libass' },
        { name: 'RAG Transcript Subsystem', role: 'Indexes video transcript chunks for hallucination-free Q&A', technologies: 'LangChain, Whisper, ChromaDB' }
      ],
      dataFlow: [
        '1. User inputs multi-paragraph script into Gradio UI.',
        '2. Text parsed into scenes; prompts generated for SDXL-Turbo diffusion model.',
        '3. Images generated on Apple Silicon Metal Performance Shaders (MPS) in <2s.',
        '4. Voiceover synthesized and duration matched to video track.',
        '5. FFmpeg executes pan/zoom filter curves and burns subtitles into final MP4.'
      ]
    },
    techBreakdown: [
      {
        category: 'Generative Models & Acceleration',
        items: [
          { name: 'SDXL-Turbo (Diffusers)', purpose: 'Single-step adversarial diffusion image generation', advantage: 'Generates photorealistic frames in under 2 seconds on local M-series silicon' },
          { name: 'PyTorch MPS', purpose: 'Apple Silicon GPU tensor acceleration', advantage: 'Zero cloud compute expenses and zero network upload latency' }
        ]
      },
      {
        category: 'Video Composition & RAG',
        items: [
          { name: 'FFmpeg Filtergraphs', purpose: 'Dynamic Ken Burns camera motion and subtitle rasterization', advantage: 'Rock-solid video muxing without heavy desktop video editing software' },
          { name: 'Whisper & ChromaDB', purpose: 'Audio transcription and semantic RAG indexing', advantage: 'Enables users to query video transcripts with millisecond vector lookup' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'Memory Contention Between Diffusion Model and Audio Runtimes',
        context: 'Loading multiple deep learning weights simultaneously into unified memory risked macOS out-of-memory kernel termination.',
        resolution: 'Engineered sequential memory lifecycle management: diffusion weights are evicted from MPS device memory before launching audio synthesis and video encoding.'
      },
      {
        challenge: 'Smooth Camera Motion Without Frame Dropping',
        context: 'Naive pan/zoom filters in FFmpeg caused jittery camera movement and non-linear audio desynchronization.',
        resolution: 'Formulated precise mathematical zoom curves (`zoompan=z=min(zoom+0.0015,1.25)`) mapped dynamically to calculated scene audio durations.'
      }
    ],
    decisions: [
      {
        choice: 'SDXL-Turbo over multi-step Stable Diffusion 1.5',
        rationale: '1-step inference generates scenes 10x faster with comparable quality for vertical phone formats.',
        tradeOff: 'Slightly less prompt fine-tuning flexibility.'
      }
    ],
    learnings: [
      'Modern Apple Silicon hardware can execute production-grade generative media workloads entirely locally when memory is managed carefully.',
      'Complex FFmpeg filtergraphs provide agency-level video motion automation without GUI software.'
    ],
    improvements: {
      implemented: [
        'Script-to-video end-to-end automation in Gradio UI',
        'SDXL-Turbo local diffusion and neural audio synthesis',
        'Dynamic Ken Burns camera motion and text burning in FFmpeg',
        'RAG transcript search engine with Whisper transcription'
      ],
      proposed: [
        'Automated rhythmic beat matching to background audio tracks',
        'Multi-character conversational script splitting'
      ]
    },
    links: {
      github: 'https://github.com/Keshavgg/gen-ai1',
      statusNote: 'Open-source repository (gen-ai1); end-to-end automated video rendering pipeline.'
    },
    tags: ['Python', 'SDXL-Turbo', 'PyTorch', 'FFmpeg', 'RAG', 'Gradio', 'Whisper']
  },

  {
    id: 'forge-athletics',
    slug: 'forge-athletics',
    title: 'Forge Athletics — High-Performance Athletic Club Platform',
    subtitle: 'Bespoke Fitness Platform with Free Trial Booking Funnel & Client-Side Admissions CRM',
    category: 'Full-Stack',
    tier: 'Completed Project',
    featured: false,
    highlightMetric: 'Editorial Brutalist Design · Complete /admin CRM',
    summary: 'An agency-grade digital platform engineered for an elite athletic conditioning facility, featuring an interactive membership comparison matrix, trainer consult routing, and a real-time admissions CRM console.',
    problem: 'High-end athletic performance clubs suffer from cookie-cutter WordPress themes with sluggish load times, clunky booking funnels, and no lightweight way for admissions staff to manage inbound trial leads without costly SaaS subscriptions.',
    solution: 'Built a bespoke React + Vite web platform engineered with an editorial brutalist-minimalist dark aesthetic. Features an interactive trial booking engine with validation, duplicate submission protection, and unique reference codes (`FA-XXXXX`), plus an integrated admissions CRM portal at `/admin` for tracking pipeline leads, editing coach notes, and updating statuses.',
    architecture: {
      overview: 'Modular component-based React SPA. Designed with high-performance client-side persistence and mock data seeding that demonstrates full CRM operations without immediate database overhead.',
      diagramType: 'generic',
      components: [
        { name: 'Admissions Funnel Engine', role: 'Validates trial submissions and generates unique reference IDs', technologies: 'React 18, React Hooks, LocalStorage' },
        { name: 'Membership Matrix', role: 'Interactive monthly/quarterly billing toggle with dynamic savings computation', technologies: 'Tailwind CSS, Lucide Icons' },
        { name: 'Trainer Consult Router', role: 'Contextual WhatsApp routing for certified coaches', technologies: 'WhatsApp Deep-Link Protocols' },
        { name: 'Admin Lead Console', role: 'Live search, status filtering, and coach notes modal at /admin', technologies: 'React State Management' }
      ],
      dataFlow: [
        '1. Visitor navigates program catalog and selects training track.',
        '2. Interactive booking form validates future date, slot, and contact details.',
        '3. Unique booking reference code generated (`FA-XXXXX`); record stored in admissions store.',
        '4. Confirmation screen displays summary and provides prefilled WhatsApp admissions CTA.',
        '5. Admissions staff view, filter, and edit internal notes in real-time on `/admin` dashboard.'
      ]
    },
    techBreakdown: [
      {
        category: 'UI & Styling',
        items: [
          { name: 'React 18 & Vite', purpose: 'Blazing fast client-side rendering and asset bundling', advantage: 'Sub-second page loads and zero hydration bottlenecks' },
          { name: 'Tailwind CSS', purpose: 'Custom athletic dark design system (#090B09, electric lime #C8FF3D)', advantage: 'Distinctive visual identity matching luxury fitness standards' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'Designing a Realistic Admin Experience Without Remote Database Dependencies',
        context: 'Agency portfolio demonstrations need to operate seamlessly offline and without configuring external cloud databases.',
        resolution: 'Implemented a robust client-side storage repository with live filtering, status mutations, coach notes editing, and a 1-click "Reset Demo Data" feature.'
      }
    ],
    decisions: [
      {
        choice: 'WhatsApp integration over standard email contact forms',
        rationale: 'Indian and international fitness clubs experience 4x higher lead conversion through immediate WhatsApp conversations.',
        tradeOff: 'Requires athlete to initiate chat on mobile device.'
      }
    ],
    learnings: [
      'Visual hierarchy and typography choices (Oswald + Plus Jakarta Sans) radically elevate brand perception.',
      'Providing an embedded admin view in frontend demonstrations proves end-to-end product thinking.'
    ],
    improvements: {
      implemented: [
        'Complete 8-view site architecture (Home, Programs, Membership, Trainers, About, Contact, Book Trial, Admin)',
        'Free trial booking validation engine with reference code generation',
        'Side-by-side tier comparison matrix with quarterly discount math',
        'Full admissions lead management dashboard with status filters and notes editor'
      ],
      proposed: [
        'Supabase backend integration with automated SMS and WhatsApp confirmation webhooks'
      ]
    },
    links: {
      statusNote: 'Production-ready responsive web platform built with React, Vite, and Tailwind CSS.'
    },
    tags: ['React', 'Vite', 'Tailwind CSS', 'Admin CRM', 'Editorial UI', 'Fitness Tech']
  },

  {
    id: 'local-offers',
    slug: 'local-offers',
    title: 'Local Offers (Evergreen) — Hyperlocal Discovery Platform',
    subtitle: 'Zero-SMS Authentication, Role-Scoped Permissions & Local Commerce Discovery Engine',
    category: 'Full-Stack',
    tier: 'Working Prototype',
    featured: false,
    highlightMetric: 'Zero SMS OTP Costs · Native node:sqlite',
    summary: 'A hyperlocal neighborhood marketplace with React + Express + SQLite, featuring dual-role authorization, server-enforced review integrity, pincode broadcast alerts, and cost-free phone authentication via Telegram bots and WhatsApp webhooks.',
    problem: 'Small local businesses (salons, cafes, gyms, retail) are priced out of food delivery aggregators and lack a friction-free way to broadcast flash discounts to nearby neighbors without incurring heavy telecom SMS OTP fees.',
    solution: 'Engineered Local Offers using React and Express with zero-dependency native `node:sqlite`. Designed server-enforced permissions distinguishing customers from shop owners, rate-limited pincode broadcast alerts, and eliminated telecom SMS costs through reverse-OTP WhatsApp Cloud webhooks and Telegram bot authentication.',
    architecture: {
      overview: 'Monorepo architecture with an Express REST API serving a React SPA, backed by native Node 22.5 `node:sqlite`. Features automated unit/integration tests running on throwaway test databases.',
      diagramType: 'generic',
      components: [
        { name: 'Express API Server', role: 'RESTful endpoints, role validation, input sanitization', technologies: 'Node.js 22.5+, Express, node:sqlite' },
        { name: 'Reverse-OTP Gateway', role: 'Verifies phone numbers via WhatsApp Cloud webhooks and Telegram', technologies: 'Meta Cloud API, Telegram Bot API' },
        { name: 'Pincode Alert Dispatcher', role: 'Rate-limited broadcast notifications to opted-in neighbors', technologies: 'Express Event Router, SQLite' },
        { name: 'React Frontend', role: 'Place browsing, offer cards, shop owner management console', technologies: 'React, Vite, Tailwind CSS' }
      ],
      dataFlow: [
        '1. Customer registers via email OTP or Telegram/WhatsApp reverse-OTP.',
        '2. Shop owner lists business profile and publishes time-bounded discount offers.',
        '3. Server verifies role permissions and validates input lengths and opening hours.',
        '4. Owner triggers pincode broadcast; server enforces daily frequency caps (max 1/day, max 500 recipients).',
        '5. Opted-in customers within matching pincode receive in-app alert and notification.'
      ]
    },
    techBreakdown: [
      {
        category: 'Backend & Database',
        items: [
          { name: 'Node 22.5+ (node:sqlite)', purpose: 'Zero-dependency embedded SQL database', advantage: 'Eliminates node-gyp native compilation bugs while delivering native SQLite performance' },
          { name: 'Express.js', purpose: 'REST API routing, JWT auth, and webhook listeners', advantage: 'Lightweight, battle-tested middleware ecosystem' }
        ]
      },
      {
        category: 'Authentication',
        items: [
          { name: 'WhatsApp Cloud Webhooks', purpose: 'Reverse-OTP phone verification (user messages bot first)', advantage: '100% free within Meta 24h window; verified via X-Hub-Signature-256 HMAC' },
          { name: 'Telegram Bot API', purpose: 'Direct contact-card phone verification', advantage: 'Free, instantaneous phone verification without SMS gateway providers' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'Preventing Fraudulent Merchant Reviews and Self-Rating Inflation',
        context: 'Shop owners frequently attempt to boost ratings by posting fake reviews on their own listings.',
        resolution: 'Enforced strict server-side rules: one review per user per place; owners cannot review their own shops; ratings are computed dynamically on the server rather than accepted from client payloads.'
      }
    ],
    decisions: [
      {
        choice: 'Reverse-OTP via WhatsApp and Telegram over Twilio SMS',
        rationale: 'Traditional SMS OTP costs ₹1.50–₹4.00 per verification, making early-stage bootstrapping economically unsustainable.',
        tradeOff: 'Requires users to have either WhatsApp or Telegram installed.'
      }
    ],
    learnings: [
      'Native Node standard library features (like node:sqlite) reduce dependency bloat dramatically.',
      'Server-side enforcement of business invariants is non-negotiable for marketplace trust.'
    ],
    improvements: {
      implemented: [
        'Dual-role authentication (Customer vs Shop Owner)',
        'Server-enforced review calculation and owner response threads',
        'Pincode broadcast engine with strict daily safety limits',
        'Automated API test suites (`npm test`) on ephemeral test databases'
      ],
      proposed: [
        'PostGIS geospatial bounding-box queries replacing pincode matching'
      ]
    },
    links: {
      github: 'https://github.com/Keshavgg/local-offers',
      statusNote: 'Open-source repository (local-offers); documented with High-Level System Architecture (HLD).'
    },
    tags: ['Node.js', 'Express', 'SQLite', 'React', 'WhatsApp API', 'Telegram Bot', 'Local Commerce']
  },

  {
    id: 'way2agri-ml',
    slug: 'way2agri-ml',
    title: 'Way2Agri — AI Commodity Price Forecasting Microservice',
    subtitle: '20-Year Monthly Time-Series Forecasting with Holt-Winters & FastAPI Serving Engine',
    category: 'Data & Analytics',
    tier: 'Completed Project',
    featured: false,
    highlightMetric: '9.85% Holdout MAPE · ₹1,240 MAE',
    summary: 'An agricultural commodity price forecasting microservice analyzing 249 months of historical prices, modeling annual harvest seasonality via Holt-Winters exponential smoothing, and exposing sub-5ms FastAPI inference endpoints with 95% confidence bands.',
    problem: 'Agricultural markets suffer from extreme seasonal price volatility driven by monsoon cycles, harvest gluts, and lean periods. Agribusinesses and procurement teams face severe margin erosion without forward-looking price intelligence.',
    solution: 'Analyzed 20 years of monthly historical market price data (Jan 2005 – Sep 2025; 249 continuous observations). Selected and tuned a Holt-Winters Additive Trend and Seasonality model achieving 9.85% MAPE on a 12-month holdout set. Deployed the serialized model inside a production-ready FastAPI microservice generating dynamic forecast horizons with 95% confidence bands.',
    architecture: {
      overview: 'Model-as-a-Service architecture. The serialized Holt-Winters model artifact is loaded into FastAPI memory, serving sub-5ms forecasts and dynamic confidence intervals via REST endpoints.',
      diagramType: 'time-series',
      components: [
        { name: 'Statistical Inference Engine', role: 'Computes forward forecasts and residual confidence intervals', technologies: 'Python 3.10+, statsmodels, NumPy' },
        { name: 'FastAPI Microservice', role: 'Exposes Swagger UI and validation schemas for predictions', technologies: 'FastAPI, Pydantic, Uvicorn' },
        { name: 'Evaluation Notebook', role: 'Holdout backtesting, residual diagnostics, and business action plan', technologies: 'Jupyter Notebook, Pandas, Matplotlib' }
      ],
      dataFlow: [
        '1. 249-month historical commodity price series ingested and audited for stationarity.',
        '2. Additive seasonal-trend decomposition isolates annual agricultural cycles.',
        '3. Model trained and backtested on 12-month holdout; serialized to joblib artifact.',
        '4. FastAPI server loads model artifact at startup for zero-latency inference.',
        '5. API clients request 12-month or custom horizons; service returns predictions with confidence bands.'
      ]
    },
    techBreakdown: [
      {
        category: 'Machine Learning & Time Series',
        items: [
          { name: 'Holt-Winters Exponential Smoothing', purpose: 'Capturing additive trend and recurring annual 12-month seasonality', advantage: 'Sample-efficient ($N=249$), highly interpretable, zero GPU requirement' },
          { name: 'Statsmodels & Joblib', purpose: 'Statistical model fitting and high-speed artifact serialization', advantage: 'Production-ready mathematical routines with minimal runtime overhead' }
        ]
      },
      {
        category: 'API Serving',
        items: [
          { name: 'FastAPI', purpose: 'Serving forecast endpoints with interactive Swagger documentation', advantage: 'Sub-5ms inference latency and automatic Pydantic request validation' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'Avoiding Overfitting with Deep Learning on Moderate Sample Size',
        context: 'Applying deep LSTM or Transformer architectures on 249 monthly observations causes severe over-parameterization and poor holdout generalization.',
        resolution: 'Selected Holt-Winters Additive model, which decoupling level, trend, and seasonal components deterministically, achieving 9.85% MAPE.'
      }
    ],
    decisions: [
      {
        choice: 'Preserving high-volatility price spikes rather than trimming as outliers',
        rationale: 'Historical price spikes (e.g. late 2023) reflected genuine macro commodity supply shocks rather than recording errors; removing them would produce dangerously over-optimistic risk bounds.',
        tradeOff: 'Increases residual standard deviation slightly, but delivers realistic safety margins.'
      }
    ],
    learnings: [
      'Classical statistical methods often outperform neural networks on small-to-medium time series datasets.',
      'Communicating forecast uncertainty through confidence bands is vital for real-world procurement decisions.'
    ],
    improvements: {
      implemented: [
        '249-month time series analysis with zero missing values',
        'Holt-Winters model achieving 9.85% MAPE and ₹1,240 MAE',
        'Production FastAPI microservice with Swagger UI documentation',
        'Architecture blueprint for Django ORM + Celery + Redis batch retraining'
      ],
      proposed: [
        'Exogenous climate data integration (rainfall index, diesel prices) via SARIMAX'
      ]
    },
    links: {
      statusNote: 'End-to-end technical evaluation submission featuring automated Holt-Winters forecasting and REST microservices.'
    },
    tags: ['Python', 'FastAPI', 'Machine Learning', 'Time-Series', 'Statsmodels', 'AgriTech']
  },

  {
    id: 'blackcoffer-nlp',
    slug: 'blackcoffer-nlp',
    title: 'Blackcoffer — Automated NLP Text Analytics Engine',
    subtitle: 'Multithreaded Web Scraping & Sentimental Analysis Pipeline Processing 600 Articles',
    category: 'Data & Analytics',
    tier: 'Completed Project',
    featured: false,
    highlightMetric: '600 Articles Crawled · 13 Linguistic Metrics',
    summary: 'A multithreaded Python web crawling and NLP text analytics engine that extracts 600 technology articles, purges DOM noise, and computes 13 sentimental and readability variables using custom financial lexicons.',
    problem: 'Quantitative investment research requires extracting unstructured text from hundreds of disparate web publications, sanitizing boilerplate, and calculating linguistic sentiment scores without manual intervention.',
    solution: 'Engineered an end-to-end Python pipeline. It queries XML sitemaps to discover 600 live URLs, crawls article contents concurrently using a 15-worker ThreadPoolExecutor, cleans DOM structures with BeautifulSoup, and calculates 13 mathematical metrics (Polarity, Subjectivity, Fog Index, Complex Words) against a 12,750+ stop-word dictionary and Master Sentiment Lexicon, outputting to Excel and CSV.',
    architecture: {
      overview: 'ETL Pipeline: Extract (Sitemap XML Crawler + Multithreaded HTML Scraper) -> Transform (DOM Sanitization, Syllabic Tokenizer, Sentiment Formula Engine) -> Load (Excel / CSV Exporter).',
      diagramType: 'generic',
      components: [
        { name: 'Sitemap Crawler', role: 'Discovers published article URLs into Input.xlsx', technologies: 'Python requests, XML Parser' },
        { name: 'Thread Pool Scraper', role: 'Concurrent extraction with persistent HTTP sessions', technologies: 'concurrent.futures, BeautifulSoup4' },
        { name: 'NLP Analytics Engine', role: 'Computes polarity, subjectivity, Fog index, syllables', technologies: 'NLTK, Regex, Custom Lexicons' },
        { name: 'Tabular Exporter', role: 'Writes 600-row structured deliverables', technologies: 'Pandas, OpenPyXL' }
      ],
      dataFlow: [
        '1. XML sitemaps parsed to discover 600 target article links.',
        '2. ThreadPoolExecutor (15 threads) downloads articles concurrently with retry backoff.',
        '3. BeautifulSoup removes headers, footers, scripts, and social widgets.',
        '4. Cleaned text saved to disk (`extracted_articles/1.txt` to `600.txt`).',
        '5. Sentiment engine purges stop words and computes 13 required metrics into Excel and CSV.'
      ]
    },
    techBreakdown: [
      {
        category: 'Data Extraction & Concurrency',
        items: [
          { name: 'concurrent.futures', purpose: 'ThreadPoolExecutor for parallel HTTP downloads', advantage: 'Reduces 600-article crawling time from 20+ minutes to under 2 minutes' },
          { name: 'BeautifulSoup4', purpose: 'DOM traversal and noise decomposition', advantage: 'Accurately isolates article body from WordPress sidebar and footer pollution' }
        ]
      },
      {
        category: 'NLP & Tabular Export',
        items: [
          { name: 'NLTK & Custom Lexicons', purpose: 'Linguistic parsing and sentiment scoring', advantage: 'Purges 12,750+ stop words from Master Dictionary for domain-accurate scores' },
          { name: 'Pandas / OpenPyXL', purpose: 'Structured workbook generation', advantage: 'Exact 15-column schema generation matching client specifications' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'Preventing False Positives from Generic Financial Stop Words',
        context: 'Standard positive/negative dictionaries often count benign business terms (e.g. "share", "interest") as sentiment indicators.',
        resolution: 'Purged all 12,750+ stop words across Auditor, Currency, and Generic lists from the Master Dictionary before scoring articles.'
      }
    ],
    decisions: [
      {
        choice: 'Multithreading over AsyncIO for I/O crawling',
        rationale: 'Thread pool with session re-use integrated cleanly with synchronous BeautifulSoup parsing without complex async event loops.',
        tradeOff: 'Higher thread context-switching overhead, but negligible for 15 worker threads.'
      }
    ],
    learnings: [
      'DOM sanitization must be rigorous; stray header/footer text completely distorts Fog Index calculations.',
      'Saving intermediate raw text files (`extracted_articles/`) ensures pipeline recoverability.'
    ],
    improvements: {
      implemented: [
        'Automated sitemap discovery and multithreaded extraction (15 workers)',
        'Purging of 12,750+ stop words and computation of 13 NLP metrics',
        'Dual output export to Excel (`Output Data Structure.xlsx`) and CSV'
      ],
      proposed: [
        'Fine-tuned FinBERT transformer model for contextual financial sentiment'
      ]
    },
    links: {
      statusNote: 'Automated extraction pipeline with 15+ NLP financial sentiment metrics processed with zero nulls.'
    },
    tags: ['Python', 'NLP', 'Web Scraping', 'Multithreading', 'Data Engineering', 'Pandas']
  },

  {
    id: 'plan4u',
    slug: 'plan4u',
    title: 'Plan4U — Autonomous AI Trip Planner & Geolocation Discovery',
    subtitle: 'Unified GPS Nearby Discovery & Pre-Trip/In-Trip Multi-Agent Backend',
    category: 'Backend & Cloud',
    tier: 'Working Prototype',
    featured: false,
    highlightMetric: 'Single-Call GPS Nearby API · Splitwise Engine',
    summary: 'A travel planning backend providing dual-panel AI trip assistance (Pre-Trip planning & Live In-Trip companion) alongside a single-call GPS "Explore Nearby" microservice aggregating hotels, dining, monuments, and live events.',
    problem: 'Travelers must switch between mapping apps, review portals, and booking sites to coordinate daily sightseeing, find nearby open attractions, and divide shared costs with travel companions.',
    solution: 'Built Plan4U with FastAPI. Features a unified `GET /api/v1/explore/nearby` endpoint returning spatial items within a configurable radius using vectorized Haversine distance calculations, coupled with an automated Splitwise-style group expense debt simplification engine and fast-track QR ticketing.',
    architecture: {
      overview: 'Layered FastAPI microservice architecture: API Routers -> Service Layer (Haversine Geo math, Splitwise balancing) -> Schema Models -> Data Store.',
      diagramType: 'generic',
      components: [
        { name: 'Spatial Geolocation Service', role: 'Calculates haversine distances and filters nearby places', technologies: 'Python 3.11+, Math, NumPy' },
        { name: 'Expense Splitter Algorithm', role: 'Simplifies debts across multi-traveler groups', technologies: 'Graph Debt Simplification' },
        { name: 'FastAPI Gateway', role: 'Exposes clean RESTful endpoints with comprehensive cURL collection', technologies: 'FastAPI, Pydantic' }
      ],
      dataFlow: [
        '1. Client sends GPS coordinates (`lat`, `lng`, `city`, `radius_km`).',
        '2. Geolocation service performs spatial filtering across hotels, dining, and monuments.',
        '3. Response returned in unified JSON envelope with distance calculations in meters.',
        '4. Group expense splitter computes minimum transaction settlement paths.'
      ]
    },
    techBreakdown: [
      {
        category: 'Backend & Spatial Math',
        items: [
          { name: 'FastAPI', purpose: 'Asynchronous API routing and response serialization', advantage: 'Sub-millisecond latency for real-time mobile location updates' },
          { name: 'Haversine Vectorization', purpose: 'Computing great-circle distances directly in Python', advantage: 'Eliminates PostGIS database dependency for rapid local execution' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'Minimizing Mobile API Calls While Roaming',
        context: 'Mobile apps that make separate HTTP calls for hotels, restaurants, and attractions drain traveler phone battery and data.',
        resolution: 'Unified all spatial categories into a single `GET /api/v1/explore/nearby` call.'
      }
    ],
    decisions: [
      {
        choice: 'Curated JSON datastore over remote database for early staging',
        rationale: 'Allowed rapid iteration of schema contracts before settling on production database migrations.',
        tradeOff: 'Manual data updates required.'
      }
    ],
    learnings: [
      'API consolidation dramatically improves mobile client performance on high-latency cellular connections.'
    ],
    improvements: {
      implemented: [
        'Unified /explore/nearby GPS endpoint',
        'Group expense debt simplification algorithm',
        'Comprehensive cURL collection in CURL_API_COLLECTION.md'
      ],
      proposed: [
        'Live Google Places API sync and WebSocket collaborative squad chat'
      ]
    },
    links: {
      statusNote: 'Functional backend service with comprehensive cURL collection and geolocation test suites.'
    },
    tags: ['Python', 'FastAPI', 'Geolocation', 'Travel Tech', 'Algorithms', 'REST API']
  },

  {
    id: 'freelancematch-ai',
    slug: 'freelancematch-ai',
    title: 'FreelanceMatch AI — Skill-Vector Marketplace Engine',
    subtitle: 'Next.js 14 & Python Scikit-Learn Cosine Similarity Project Recommender',
    category: 'Full-Stack',
    tier: 'Working Prototype',
    featured: false,
    highlightMetric: 'Cosine Skill Vector Matching · Next.js 14',
    summary: 'A full-stack freelance engineering marketplace combining Next.js 14 and PostgreSQL with an integrated Python AI recommendation engine that matches job requirements against developer skill vectors using cosine similarity.',
    problem: 'Job boards rely on simplistic keyword searches, overlooking candidate proficiency across related frameworks (e.g. recognizing that strong React experience translates to Next.js).',
    solution: 'Built a full-stack platform with Next.js 14, TypeScript, and PostgreSQL. Created a Python microservice (`AImodels/recomendation.py`) that transforms job skill arrays into vector space and computes cosine similarity matrices against candidate profiles.',
    architecture: {
      overview: 'Hybrid Next.js + Python microservice architecture with PostgreSQL as the relational datastore.',
      diagramType: 'generic',
      components: [
        { name: 'Next.js Web Portal', role: 'User onboarding, project posting, proposals', technologies: 'Next.js 14, TypeScript, Tailwind' },
        { name: 'Python Recommender', role: 'Vectorization and cosine similarity calculation', technologies: 'scikit-learn, pandas, psycopg2' },
        { name: 'PostgreSQL Datastore', role: 'Relational storage for users, projects, proposals', technologies: 'PostgreSQL, SQL' }
      ],
      dataFlow: [
        '1. Client creates project posting with required technical skills.',
        '2. Python recommendation service queries active freelancer profiles from PostgreSQL.',
        '3. Scikit-learn computes cosine similarity scores across candidate skill vectors.',
        '4. Ranked recommendations delivered to client dashboard.'
      ]
    },
    techBreakdown: [
      {
        category: 'Full-Stack & Recommendation',
        items: [
          { name: 'Next.js 14', purpose: 'Full-stack application framework', advantage: 'Server Actions and App Router performance' },
          { name: 'scikit-learn', purpose: 'Cosine similarity vector computation', advantage: 'Mathematically rigorous ranking of technical proficiencies' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'Synchronizing Relational Data Between Next.js and Python Runtime',
        context: 'Running separate runtimes required consistent schema management.',
        resolution: 'Connected Python service directly to PostgreSQL with `psycopg2` using read-only connection pooling.'
      }
    ],
    decisions: [
      {
        choice: 'Vector similarity in Python over pure SQL string matching',
        rationale: 'Permits non-binary similarity scoring and future transition to dense embeddings.',
        tradeOff: 'Requires maintaining Python environment alongside Node runtime.'
      }
    ],
    learnings: [
      'Bridging web frameworks with Python ML services provides best-of-both-worlds capability.'
    ],
    improvements: {
      implemented: [
        'Next.js 14 frontend and PostgreSQL schema integration',
        'Python cosine similarity recommendation engine (`AImodels/recomendation.py`)'
      ],
      proposed: [
        'Migration to pgvector directly inside PostgreSQL'
      ]
    },
    links: {
      github: 'https://github.com/Keshavgg/freelancer-app',
      statusNote: 'Public GitHub repository with Next.js frontend, DB schemas, and AImodels.'
    },
    tags: ['Next.js 14', 'Python', 'PostgreSQL', 'scikit-learn', 'TypeScript', 'Marketplace']
  },

  {
    id: 'fastapi-ecommerce-catalog',
    slug: 'fastapi-ecommerce-catalog',
    title: 'FastAPI E-Commerce Product Catalog Service',
    subtitle: 'High-Performance Async Product Microservice with Pydantic Validation',
    category: 'Backend & Cloud',
    tier: 'Learning Project',
    featured: false,
    highlightMetric: 'Sub-Millisecond Query Response · Pydantic v2',
    summary: 'A high-throughput asynchronous REST microservice built in FastAPI for querying, filtering, and managing an e-commerce catalog of 100+ products with detailed SKU attributes, stock availability, and seller metadata.',
    problem: 'Building robust e-commerce microservices requires strict schema contracts, parameter sanitization, and structured HTTP error handling to prevent malformed queries from degrading backend performance.',
    solution: 'Implemented a clean service-repository pattern in FastAPI. Designed schema models for SKUs, seller profiles, and physical dimensions, accompanied by type-safe endpoints with Swagger documentation.',
    architecture: {
      overview: 'Service-Repository Pattern: `main.py` handles route definitions and query validation; `service/products.py` encapsulates business logic and data access.',
      diagramType: 'generic',
      components: [
        { name: 'FastAPI Controller', role: 'Route dispatch, query validation, and 404 handling', technologies: 'FastAPI, Uvicorn' },
        { name: 'Product Service', role: 'Catalog filtering and search logic', technologies: 'Python 3.12' },
        { name: 'JSON Catalog', role: '100 structured e-commerce items', technologies: 'JSON Datastore' }
      ],
      dataFlow: [
        '1. Client queries `/pro` or posts filter params to `/`.',
        '2. FastAPI validates query types and length constraints via Pydantic.',
        '3. Service filters catalog in-memory and returns structured JSON payload.'
      ]
    },
    techBreakdown: [
      {
        category: 'Backend',
        items: [
          { name: 'FastAPI', purpose: 'Asynchronous REST API framework', advantage: 'Type hints automatically enforce validation and generate OpenAPI docs' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'Clean Parameter Validation on Dynamic Filters',
        context: 'Handling optional query parameters without repetitive null checks.',
        resolution: 'Leveraged FastAPI `Query` defaults and Python type annotations.'
      }
    ],
    decisions: [
      {
        choice: 'In-memory JSON store for microservice prototyping',
        rationale: 'Provided rapid experimentation with zero external database configuration.',
        tradeOff: 'Does not support atomic write transactions.'
      }
    ],
    learnings: [
      'Pydantic validation schemas eliminate entire classes of runtime type bugs.'
    ],
    improvements: {
      implemented: [
        'Complete REST endpoints with Swagger UI docs',
        '100-item structured product catalog schema'
      ],
      proposed: [
        'PostgreSQL and Redis caching tier integration'
      ]
    },
    links: {
      github: 'https://github.com/Keshavgg/fast_project',
      statusNote: 'Open-source repository (fast_project); asynchronous REST service exploring FastAPI and Pydantic.'
    },
    tags: ['Python', 'FastAPI', 'Pydantic', 'REST API', 'E-Commerce']
  },

  {
    id: 'oop-bag-domain-model',
    slug: 'oop-bag-domain-model',
    title: 'Object-Oriented Bag Modeling System (EBAGS Lead)',
    subtitle: 'Demonstration of Interface Segregation, Abstract Base Classes & Encapsulation',
    category: 'Backend & Cloud',
    tier: 'Learning Project',
    featured: false,
    highlightMetric: 'Pure OOP Architecture · Abstract Base Classes',
    summary: 'A clean demonstration of Object-Oriented Programming (OOP) principles in Python, featuring multiple inheritance from abstract base classes, private member encapsulation, and contractual domain modeling.',
    problem: 'Complex customizable product catalogs (e.g. customized bags with physical material specs and aesthetic themes) require strict contracts to ensure all variants adhere to mandatory interface properties.',
    solution: 'Designed an OOP architecture utilizing Python’s `abc` module. Created abstract classes `req` (for functional specifications like zippers and cloth) and `theme` (for visual aesthetics like hero themes and colors), implemented by concrete domain class `bag` with private member encapsulation.',
    architecture: {
      overview: 'Pure Object-Oriented Architecture adhering to the Interface Segregation Principle (ISP) and Dependency Inversion Principle (DIP).',
      diagramType: 'generic',
      components: [
        { name: 'req (ABC)', role: 'Contract for physical specifications', technologies: 'Python abc' },
        { name: 'theme (ABC)', role: 'Contract for aesthetic design themes', technologies: 'Python abc' },
        { name: 'bag (Concrete)', role: 'Encapsulated domain implementation', technologies: 'Python 3' }
      ],
      dataFlow: [
        '1. Concrete `bag` instantiated with zip, cloth, hero, and color parameters.',
        '2. Private attributes stored in encapsulated member variables (`self._zip`, `self._cloth`, etc.).',
        '3. Abstract methods implemented to provide controlled accessor methods.'
      ]
    },
    techBreakdown: [
      {
        category: 'Core Language',
        items: [
          { name: 'Python abc (Abstract Base Classes)', purpose: 'Enforcing interface contracts', advantage: 'Prevents instantiation of incomplete domain models at runtime' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'Enforcing Multiple Interface Implementation Without Diamond Inheritance Ambiguity',
        context: 'Combining physical and theme properties cleanly without coupling.',
        resolution: 'Used distinct abstract base classes with orthogonal method signatures.'
      }
    ],
    decisions: [
      {
        choice: 'Private encapsulated variables with accessor methods',
        rationale: 'Demonstrates enterprise OOP encapsulation patterns.',
        tradeOff: 'Slightly more verbose than plain dataclasses.'
      }
    ],
    learnings: [
      'Mastering low-level OOP design patterns is foundational for architecting large enterprise domain models.'
    ],
    improvements: {
      implemented: [
        'Abstract base classes `req` and `theme`',
        'Concrete encapsulated `bag` class with verified accessors'
      ],
      proposed: [
        'Integration with FastAPI catalog microservice for persistent storage'
      ]
    },
    links: {
      statusNote: 'Object-oriented domain modeling exercise demonstrating class inheritance, encapsulation, and type validation in Python.'
    },
    tags: ['Python', 'OOP', 'Abstract Base Classes', 'Design Patterns']
  },

  {
    id: 'student-records-api',
    slug: 'student-records-api',
    title: 'Student Records Management Microservice',
    subtitle: 'Dynamic Sorting, Windowed Pagination & Filter Mechanics in FastAPI',
    category: 'Backend & Cloud',
    tier: 'Learning Project',
    featured: false,
    highlightMetric: 'Custom Pagination Math · Dynamic Sorting',
    summary: 'A focused backend REST microservice implementing algorithmic pagination math, multi-attribute dynamic sorting, and case-sensitive record lookup in FastAPI.',
    problem: 'Practical backend systems require efficient windowed slicing, query boundary validations (`ge`, `le`), and dynamic key-based sorting without relying blindly on third-party ORM magic.',
    solution: 'Built a lightweight FastAPI microservice (`main.py`) featuring algorithmic offset pagination math, bidirectional lambda sorting on arbitrary attributes (`name`, `age`, `marks`), and structured HTTP exceptions.',
    architecture: {
      overview: 'Modular microservice handling HTTP parameter parsing, validation, and in-memory list operations.',
      diagramType: 'generic',
      components: [
        { name: 'FastAPI Endpoints', role: 'Pagination, sorting, and lookup handlers', technologies: 'FastAPI, Pydantic' },
        { name: 'In-Memory Store', role: 'Student dataset records', technologies: 'JSON Datastore' }
      ],
      dataFlow: [
        '1. Client specifies page number and limit bounds (`ge=1, le=1000`).',
        '2. Algorithmic window calculated: `start = (page - 1) * limit`, `end = page * limit`.',
        '3. Sliced subset returned with structured metadata.'
      ]
    },
    techBreakdown: [
      {
        category: 'Backend',
        items: [
          { name: 'FastAPI', purpose: 'REST API routing and query validation', advantage: 'High execution speed and automated schema generation' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'Validating Query Sort Keys Dynamically',
        context: 'Preventing clients from passing invalid sort keys that cause runtime crashes.',
        resolution: 'Enforced strict whitelist validation (`para1 = ["name", "age", "marks"]`) raising HTTP 404 on invalid keys.'
      }
    ],
    decisions: [
      {
        choice: 'Direct algorithmic pagination over external helper libraries',
        rationale: 'Deepens understanding of offset/limit boundary mechanics.',
        tradeOff: 'Linear time complexity on in-memory lists.'
      }
    ],
    learnings: [
      'Understanding fundamental slicing math is essential when transitioning to SQL cursor-based pagination.'
    ],
    improvements: {
      implemented: [
        'Custom pagination endpoint (`/paginate`) with boundary checks',
        'Bidirectional sorting endpoint (`/sort`) with attribute validation'
      ],
      proposed: [
        'Migration to SQLite with SQL LIMIT and OFFSET queries'
      ]
    },
    links: {
      statusNote: 'Foundational REST API microservice demonstrating CRUD operations, SQLite persistence, and Pydantic validation.'
    },
    tags: ['Python', 'FastAPI', 'Pagination', 'Algorithms', 'Backend']
  },

  {
    id: 'hr-outreach-engine',
    slug: 'hr-outreach-engine',
    title: 'HR Outreach Automation Engine',
    subtitle: 'Idempotent Cold-Email Dispatch CLI with State Persistence & Rate Limiting',
    category: 'Experiments & Tools',
    tier: 'Completed Project',
    featured: false,
    highlightMetric: 'Idempotent State Logging · 100/Batch Limit',
    summary: 'An automated Python outreach dispatch engine that reads candidate recruiter lists, enforces delay intervals to prevent spam flags, attaches resumes dynamically, and maintains state to guarantee idempotency.',
    problem: 'Manually reaching out to engineering hiring managers across hundreds of companies is slow, repetitive, and vulnerable to accidental duplicate emails upon script interruption.',
    solution: 'Built a resilient CLI tool in Python. Parses `hr_contacts.csv`, personalizes email templates, encodes PDF resumes via MIME multipart standards, enforces human-like delay intervals (2s), and logs sent recipients to `state.json` to guarantee zero duplicate emails upon restart.',
    architecture: {
      overview: 'Sequential pipeline: CSV Reader -> State Verification -> SMTP Authentication -> MIME Composition -> Rate-Limited Dispatch -> JSON State Persistence.',
      diagramType: 'generic',
      components: [
        { name: 'Contact Ingestion', role: 'Parses HR candidate list from CSV', technologies: 'Python csv' },
        { name: 'State Manager', role: 'Maintains state.json to ensure idempotency', technologies: 'JSON Persistence' },
        { name: 'SMTP Dispatcher', role: 'MIME multipart encoding and authenticated delivery', technologies: 'smtplib, email.mime' }
      ],
      dataFlow: [
        '1. Script loads contacts from `hr_contacts.csv` and reads `state.json`.',
        '2. Checks whether recipient was already contacted; skips if present.',
        '3. Renders personalized template and attaches base64 encoded resume PDF.',
        '4. Dispatches email via secure SMTP SSL connection.',
        '5. Appends recipient to `state.json` and waits 2s before next dispatch.'
      ]
    },
    techBreakdown: [
      {
        category: 'Automation & Protocol',
        items: [
          { name: 'Python smtplib & email.mime', purpose: 'Standard SMTP communication and MIME multipart formatting', advantage: 'Zero third-party library dependencies; uses standard Python library' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'Crash Resilience During Long-Running Batch Dispatches',
        context: 'If network connectivity drops halfway through a 100-email batch, a restart could accidentally email the first 50 recipients twice.',
        resolution: 'Flushed `state.json` synchronously after every successful send, ensuring complete idempotency.'
      }
    ],
    decisions: [
      {
        choice: 'Built-in SMTP over third-party API services for local execution',
        rationale: 'Permitted instant execution using standard Gmail app credentials.',
        tradeOff: 'Subject to standard provider daily sending limits.'
      }
    ],
    learnings: [
      'Idempotency is the single most critical quality of any automated messaging or transactional system.'
    ],
    improvements: {
      implemented: [
        'CSV contact parser and personalized template engine',
        'MIME base64 PDF resume attachment pipeline',
        'Crash-resilient state logging in state.json'
      ],
      proposed: [
        'Webhook integration for tracking email opens and link clicks via SendGrid'
      ]
    },
    links: {
      github: 'https://github.com/Keshavgg/hr-mailer-auto',
      statusNote: 'Public GitHub repository (hr-mailer-auto).'
    },
    tags: ['Python', 'Automation', 'SMTP', 'CLI', 'State Management']
  },

  {
    id: 'react-pizza-ordering',
    slug: 'react-pizza-ordering',
    title: 'Fast React Pizza — State-Driven Ordering Application',
    subtitle: 'Redux Toolkit Global State, Geolocation Address Lookup & Live Order Tracking',
    category: 'Full-Stack',
    tier: 'Completed Project',
    featured: false,
    highlightMetric: 'Redux Toolkit Store · Reverse Geocoding',
    summary: 'A fast, responsive pizza ordering SPA built in React and Redux Toolkit, featuring cart management, browser geolocation reverse-geocoding, priority delivery toggles, and live order tracking.',
    problem: 'Managing distributed frontend state (cart items, quantities, user address lookup, priority flags) across deeply nested view components often leads to prop drilling and inconsistent cart state.',
    solution: 'Architected the application using modern Redux Toolkit feature slices (`cartSlice`, `userSlice`). Integrated the browser Geolocation API with reverse-geocoding services and built a multi-step order flow with priority surcharge calculations.',
    architecture: {
      overview: 'Feature-based React architecture with centralized Redux store managing global user and cart state.',
      diagramType: 'generic',
      components: [
        { name: 'Redux Store', role: 'Centralized state for cart, user, and priority order flags', technologies: 'Redux Toolkit' },
        { name: 'Geolocation Module', role: 'Fetches coordinates and reverse-geocodes addresses', technologies: 'Browser Geolocation API' },
        { name: 'API Service Layer', role: 'Fetches menus and posts orders to backend API', technologies: 'Fetch API' }
      ],
      dataFlow: [
        '1. Menu fetched from REST API and cached in component state.',
        '2. User adds items to cart; Redux slice updates total price and item counts.',
        '3. User triggers geolocation to auto-fill delivery address.',
        '4. Order submitted to server; user redirected to live order status screen.'
      ]
    },
    techBreakdown: [
      {
        category: 'Frontend & State',
        items: [
          { name: 'React & Redux Toolkit', purpose: 'Component rendering and global state management', advantage: 'Immutable state updates with createSlice and clean action dispatching' },
          { name: 'Tailwind CSS', purpose: 'Responsive mobile-first layout', advantage: 'Crisp styling and accessible touch targets' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'Synchronizing Priority Delivery Surcharges with Cart Total',
        context: 'Toggling priority delivery dynamically updates tax and delivery fees in real time.',
        resolution: 'Centralized fee calculation in a memoized Redux selector.'
      }
    ],
    decisions: [
      {
        choice: 'Feature-based directory structure (features/cart, features/order)',
        rationale: 'Scales much better than splitting folders purely by technical type (components/actions/reducers).',
        tradeOff: 'Requires setting up multiple feature folders upfront.'
      }
    ],
    learnings: [
      'Feature-based code organization significantly improves project navigability.'
    ],
    improvements: {
      implemented: [
        'Global cart state with increment/decrement/delete actions',
        'Browser geolocation reverse-geocoding integration',
        'Live order status lookup and countdown display'
      ],
      proposed: [
        'WebSocket integration for real-time rider GPS tracking on Mapbox'
      ]
    },
    links: {
      github: 'https://github.com/Keshavgg/restaurant',
      statusNote: 'Public GitHub repository (restaurant).'
    },
    tags: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Geolocation', 'SPA']
  },

  {
    id: 'furfinders',
    slug: 'furfinders',
    title: 'FurFinders — Community Lost & Found Pet Reunion Platform',
    subtitle: 'Express, TypeScript, Helmet Security & REST API Backend Scaffolding',
    category: 'Backend & Cloud',
    tier: 'Working Prototype',
    featured: false,
    highlightMetric: 'TypeScript Express · Helmet Security',
    summary: 'A community web service scaffolding built in Express and TypeScript to help reunite lost pets with owners through geolocated photo reports, secure headers, and structured error handling.',
    problem: 'Lost pet notifications are scattered across unstructured social media groups without centralized geolocation filtering or verified status updates.',
    solution: 'Engineered a secure TypeScript Express backend foundation with Helmet security headers, CORS policies, Morgan logging, and structured error boundaries for pet incident reporting.',
    architecture: {
      overview: 'Layered TypeScript Express application: Server bootstrap -> Middleware stack -> Route handlers -> Error boundaries.',
      diagramType: 'generic',
      components: [
        { name: 'Express Server', role: 'HTTP server lifecycle and middleware orchestration', technologies: 'Node.js, Express, TypeScript' },
        { name: 'Security Middleware', role: 'Enforces CORS policies and Helmet headers', technologies: 'Helmet, CORS' }
      ],
      dataFlow: [
        '1. Client sends HTTP request to API.',
        '2. Middleware chain validates security headers and logs request.',
        '3. Structured error handler catches unmatched routes with clean JSON responses.'
      ]
    },
    techBreakdown: [
      {
        category: 'Backend & Tooling',
        items: [
          { name: 'TypeScript & Express', purpose: 'Type-safe server architecture', advantage: 'Prevents property access bugs and enforces compile-time safety' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'Configuring Strict Content Security Policies with Image Uploads',
        context: 'Allowing cross-origin images while preventing script injection.',
        resolution: 'Configured Helmet crossOriginResourcePolicy with explicit origin checks.'
      }
    ],
    decisions: [
      {
        choice: 'TypeScript from day one for Express backend',
        rationale: 'Significantly speeds up maintenance as route numbers expand.',
        tradeOff: 'Requires ts-node/tsc build steps.'
      }
    ],
    learnings: [
      'Applying security middleware early prevents expensive architectural refactoring later.'
    ],
    improvements: {
      implemented: [
        'TypeScript Express application structure with Helmet and Morgan',
        'Structured 404 and global exception handling'
      ],
      proposed: [
        'MongoDB / PostgreSQL database persistence with geospatial indexing'
      ]
    },
    links: {
      github: 'https://github.com/Keshavgg/furfinders',
      statusNote: 'Public GitHub repository (furfinders).'
    },
    tags: ['TypeScript', 'Node.js', 'Express', 'Helmet', 'Backend']
  },

  {
    id: 'local-explorer-server',
    slug: 'local-explorer-server',
    title: 'Local Explorer — Native Node.js HTTP Server & Map Demo',
    subtitle: 'Zero-Dependency Native Node.js Server & Static Asset Streamer',
    category: 'Backend & Cloud',
    tier: 'Learning Project',
    featured: false,
    highlightMetric: 'Zero NPM Dependencies · Native node:http',
    summary: 'A zero-dependency HTTP server implemented entirely using Node.js native standard libraries (`node:http`, `node:fs`, `node:path`), serving an interactive map client with MIME type negotiation.',
    problem: 'Modern developers frequently rely on bloated frameworks like Express or Next.js without understanding how the underlying Node.js HTTP event loop and TCP stream buffering actually work.',
    solution: 'Built a standalone HTTP server without a single entry in `node_modules`. Implemented file system streaming, MIME type mapping across 6 formats, path resolution, and HTTP status code handling from scratch.',
    architecture: {
      overview: 'Native Node.js server loop handling request streams and piping file system buffers to HTTP response streams.',
      diagramType: 'generic',
      components: [
        { name: 'Native HTTP Server', role: 'TCP socket listening and HTTP header processing', technologies: 'node:http' },
        { name: 'MIME Streamer', role: 'Maps file extensions to Content-Type headers', technologies: 'node:fs, node:path' }
      ],
      dataFlow: [
        '1. Incoming TCP connection accepted by `http.createServer`.',
        '2. URL parsed and resolved safely against base directory.',
        '3. MIME dictionary sets Content-Type header based on extension.',
        '4. `fs.readFile` streams bytes directly to response socket.'
      ]
    },
    techBreakdown: [
      {
        category: 'Native Runtimes',
        items: [
          { name: 'Node.js Core Modules', purpose: 'Standard library networking and file access', advantage: 'Zero dependencies, zero vulnerability audits, sub-10ms process boot' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'Preventing Directory Traversal Attacks in Raw HTTP Handlers',
        context: 'Malicious clients could request `../../etc/passwd` if paths are joined carelessly.',
        resolution: 'Used `path.join` and checked that resolved paths remain strictly within the root directory.'
      }
    ],
    decisions: [
      {
        choice: 'Zero third-party packages',
        rationale: 'Demonstrates deep mastery of Node.js fundamentals without scaffolding.',
        tradeOff: 'Manual routing required.'
      }
    ],
    learnings: [
      'Understanding low-level HTTP primitives makes working with higher-level frameworks far more intuitive.'
    ],
    improvements: {
      implemented: [
        'Native HTTP server with MIME type negotiation',
        'Vanilla JS interactive map interface'
      ],
      proposed: [
        'Gzip compression streaming via node:zlib'
      ]
    },
    links: {
      statusNote: 'Native Node.js HTTP server built without external web frameworks to master low-level stream handling.'
    },
    tags: ['Node.js', 'Core HTTP', 'Vanilla JS', 'Zero Dependencies', 'Networking']
  },

  {
    id: 'visa-goro-sourcing',
    slug: 'visa-goro-sourcing',
    title: 'Project Goro — Enterprise Sourcing Automation Platform (Visa)',
    subtitle: 'MySQL Data Tier, Hybrid BM25/TF-IDF Retrieval & LangSmith Evaluation Harness',
    category: 'Backend & Cloud',
    tier: 'Production / Deployed',
    featured: true,
    featuredRank: 1,
    highlightMetric: 'Hybrid BM25 + MySQL Layer · LangSmith Evaluated',
    summary: 'An enterprise sourcing orchestration backend engineered inside Visa’s Technology Leadership Team (TLT) Special Projects Group, featuring LangChain agents, ChromaDB vector indexing, vLLM serving optimization, and LangSmith evaluation.',
    problem: 'Global procurement teams at Visa spent hundreds of hours manually processing supplier intake forms (TLMP, RAF) and searching through thousands of unstructured vendor contracts stored across legacy database silos.',
    solution: 'Architected backend components for Project Goro. Implemented LangChain agents with dynamic tool calling and structured JSON outputs to automate form ingestion. Developed a hybrid retrieval engine combining BM25 keyword matching with ChromaDB embeddings to query vendor contracts, and optimized vLLM inference serving on AWS to cut latency by 40%.',
    architecture: {
      overview: 'High-availability microservices architecture deployed on Kubernetes, backed by MySQL relational tables, ChromaDB vector indices, and real-time LangSmith evaluation telemetry.',
      diagramType: 'microservices',
      components: [
        { name: 'Agentic Intake Engine', role: 'Automates TLMP and RAF form processing', technologies: 'LangChain, Python, Pydantic' },
        { name: 'Hybrid Retrieval Tier', role: 'Combines BM25 sparse search with ChromaDB vectors', technologies: 'BM25, TF-IDF, ChromaDB' },
        { name: 'MySQL Enterprise Data Layer', role: 'Persistent storage for vendor profiles and audit logs', technologies: 'MySQL, SQLAlchemy' },
        { name: 'vLLM Serving Optimization', role: 'High-throughput LLM inference with KV-cache tuning', technologies: 'vLLM, AWS EC2 GPU' },
        { name: 'LangSmith Evaluation Suite', role: 'Measures extraction accuracy and detects hallucinations', technologies: 'LangSmith Telemetry' }
      ],
      dataFlow: [
        '1. Intake forms ingested through secure API endpoints.',
        '2. LangChain agent executes tool calls to validate vendor compliance and extract metadata.',
        '3. Hybrid BM25 and ChromaDB vector search identifies precedent contracts.',
        '4. Structured data committed to MySQL relational tables.',
        '5. Evaluation pipeline scores output accuracy against ground truth in LangSmith.'
      ]
    },
    techBreakdown: [
      {
        category: 'Enterprise Backend & AI',
        items: [
          { name: 'Python & FastAPI', purpose: 'Asynchronous microservices for AI workflows', advantage: 'High throughput and strict schema validation' },
          { name: 'MySQL', purpose: 'Core enterprise transactional data layer', advantage: 'Proven enterprise reliability and ACID compliance' },
          { name: 'vLLM', purpose: 'Optimized inference engine on AWS', advantage: 'PagedAttention reduced inference latency by 40%' },
          { name: 'LangSmith', purpose: 'Continuous evaluation and prompt observability', advantage: 'Quantifiable accuracy benchmarks across model iterations' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'Legal Jargon Mismatch in Pure Semantic Vector Search',
        context: 'Semantic embeddings frequently missed exact contractual clauses containing specialized legal terms.',
        resolution: 'Engineered a hybrid retrieval pipeline combining BM25 lexical token matching with dense ChromaDB vector similarity, achieving significantly higher recall.'
      }
    ],
    decisions: [
      {
        choice: 'Structured Pydantic JSON outputs over free-form agent responses',
        rationale: 'Guaranteed that automated intake fields could be safely written to downstream MySQL tables without parsing crashes.',
        tradeOff: 'Required strict prompt engineering with few-shot schema examples.'
      }
    ],
    learnings: [
      'Enterprise AI requires rigorous evaluation harnesses (LangSmith) rather than subjective human spot checks.',
      'Hybrid retrieval (sparse + dense) is strictly necessary for legal and financial document domains.'
    ],
    improvements: {
      implemented: [
        'Automated intake processing, drastically reducing manual data entry overhead and processing delays',
        'Hybrid BM25 and ChromaDB vector search pipeline',
        '40% inference latency reduction through vLLM optimizations',
        'End-to-end evaluation harness configured in LangSmith'
      ],
      proposed: [
        'Global rollout across Visa regional procurement divisions'
      ]
    },
    links: {
      statusNote: 'Verified enterprise project completed during official Visa internship (Summer 2026); comprehensive 60-page academic training report approved at MAIT.'
    },
    tags: ['Visa', 'Python', 'MySQL', 'LangChain', 'vLLM', 'LangSmith', 'ChromaDB', 'Enterprise']
  },

  {
    id: 'npst-timepay-chatbot',
    slug: 'npst-timepay-chatbot',
    title: 'TimePay AI Chatbot & Spring Boot Microservices (NPST)',
    subtitle: 'RAG Support Chatbot & Resilient Java Spring Boot Microservices for Digital Transactions',
    category: 'Backend & Cloud',
    tier: 'Production / Deployed',
    featured: true,
    featuredRank: 4,
    highlightMetric: 'Java 17 / Spring Boot · RAG Support Bot',
    summary: 'A production conversational AI assistant and Java Spring Boot microservice infrastructure engineered at NPST for TimePay digital payments, automating customer support queries and improving first-contact resolution for routine customer questions.',
    problem: 'Thousands of repetitive Tier-1 payment questions (UPI transaction statuses, refund timelines, account limits) overwhelmed human support agents at TimePay, causing long wait times.',
    solution: 'Developed an NLP customer support chatbot utilizing RAG and vector embeddings to answer banking inquiries accurately. Engineered high-throughput Java Spring Boot backend microservices ensuring reliable data persistence and predictable throughput and built an offline evaluation pipeline to prevent financial hallucinations.',
    architecture: {
      overview: 'Microservices architecture with Spring Boot REST services orchestrating business logic and database access, interacting with a vector store for RAG grounding.',
      diagramType: 'spring-boot',
      components: [
        { name: 'Spring Boot Gateway', role: 'Request validation, security filters, rate limiting', technologies: 'Java 17, Spring Boot, Spring MVC' },
        { name: 'RAG Dialogue Manager', role: 'Retrieves banking knowledge snippets and generates answers', technologies: 'RAG, Vector Embeddings' },
        { name: 'MySQL Persistence Tier', role: 'Stores conversation histories and support audit logs', technologies: 'MySQL, Spring Data JPA, Hibernate' },
        { name: 'Accuracy Evaluation Suite', role: 'Scores response accuracy against banking benchmarks', technologies: 'Python evaluation scripts' }
      ],
      dataFlow: [
        '1. Customer submits support query via TimePay app.',
        '2. Spring Boot service authenticates user and queries vector knowledge base.',
        '3. RAG pipeline injects verified banking policy snippets into prompt context.',
        '4. Generated answer validated against safety guardrails before returning to user.',
        '5. Interaction logged asynchronously to MySQL via Spring Data JPA.'
      ]
    },
    techBreakdown: [
      {
        category: 'Enterprise Java & AI',
        items: [
          { name: 'Java 17 & Spring Boot', purpose: 'Core backend microservices handling core transaction and support queries', advantage: 'Enterprise reliability, mature multithreading, and robust ecosystem' },
          { name: 'Spring Data JPA & Hibernate', purpose: 'Object-Relational Mapping and connection pooling', advantage: 'Type-safe repository queries and automated transaction management' },
          { name: 'RAG Architecture', purpose: 'Grounding conversational responses in verified bank FAQs', advantage: 'Eliminates hallucinations regarding banking fees and refund windows' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'Zero-Tolerance for Hallucinated Financial Policies',
        context: 'An AI chatbot in fintech must never promise an incorrect refund timeline or invent non-existent bank charges.',
        resolution: 'Enforced rigid few-shot prompt guardrails instructing the model to decline answering and escalate to human agents whenever retrieval confidence fell below threshold.'
      }
    ],
    decisions: [
      {
        choice: 'Java Spring Boot over Node.js for banking microservices',
        rationale: 'NPST’s existing core banking infrastructure runs on the JVM with strict compliance and monitoring requirements.',
        tradeOff: 'Higher initial memory footprint compared to lightweight runtimes.'
      }
    ],
    learnings: [
      'In fintech systems, an explicit "I don’t know, let me connect you to a representative" response is far superior to a plausible hallucination.',
      'Spring Boot’s dependency injection and declarative transaction management make large codebases maintainable.'
    ],
    improvements: {
      implemented: [
        'RAG customer support chatbot resolving routine banking questions',
        'Significant reduction in support ticket volume for repetitive transaction queries',
        'High-availability Java Spring Boot backend microservices',
        'Answer accuracy evaluation benchmark'
      ],
      proposed: [
        'Voice AI telephony integration for automated call center interactive response'
      ]
    },
    links: {
      statusNote: 'Verified enterprise internship project at Network People Services Technologies (NPST; Jun–Aug 2024).'
    },
    tags: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL', 'RAG', 'Fintech', 'NPST']
  },

  {
    id: 'clash-royale-ai',
    slug: 'clash-royale-ai',
    title: 'Clash Royale Autonomous Strategy & Gameplay Agent (Concept)',
    subtitle: 'Computer Vision Perception & Reinforcement Learning Strategy Research',
    category: 'Experiments & Tools',
    tier: 'Concept / Proposed Idea',
    featured: false,
    highlightMetric: 'Real-Time Perception · RL Strategy Concept',
    summary: 'A conceptual exploration into autonomous real-time decision making, elixir resource budgeting, and spatial troop placement for mobile strategy games using computer vision frame parsing and reinforcement learning policies.',
    problem: 'Real-time strategy games require spatial visual perception, adversary intent prediction, and micro-second resource allocation under partial observability and dynamic battle dynamics.',
    solution: 'Architected a modular agent concept decoupling visual perception (screen frame capture via ADB, template matching for troop detection) from policy decision networks (DQN/PPO elixir management models) and action dispatchers.',
    architecture: {
      overview: 'Perception Layer (OpenCV screen capture via ADB) -> Game State Engine (Elixir counter, active unit bounding boxes) -> Policy Network (RL decision model) -> Action Dispatcher (ADB touch events).',
      diagramType: 'generic',
      components: [
        { name: 'Perception Layer', role: 'Screen capture and card recognition', technologies: 'OpenCV, Python' },
        { name: 'Policy Agent', role: 'Reinforcement learning decision engine', technologies: 'PyTorch, RL (DQN)' },
        { name: 'Action Dispatcher', role: 'Simulated touch injection', technologies: 'Android Debug Bridge (ADB)' }
      ],
      dataFlow: [
        '1. Screen frames captured via ADB stream.',
        '2. OpenCV identifies active cards and calculates estimated opponent elixir.',
        '3. Policy network evaluates board state and selects card tile placement.',
        '4. Touch injection event dispatched to mobile emulator.'
      ]
    },
    techBreakdown: [
      {
        category: 'Exploratory Tech',
        items: [
          { name: 'OpenCV & ADB', purpose: 'Low-latency screen parsing and input simulation', advantage: 'Enables external automation without modifying game client binaries' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'Input Latency and Anti-Cheat Constraints',
        context: 'ADB touch injection introduces latency and live game servers prohibit unauthorized automation.',
        resolution: 'Designed concept strictly for offline replay analysis and sandbox emulation environments.'
      }
    ],
    decisions: [
      {
        choice: 'Decoupled perception and policy execution',
        rationale: 'Allows running inference on downsampled frames while maintaining high-resolution perception.',
        tradeOff: 'Requires maintaining shared state memory.'
      }
    ],
    learnings: [
      'Real-time game AI requires predictable inference budgets to avoid missing crucial tactical counters.'
    ],
    improvements: {
      implemented: [
        'Architectural design and perception-to-action pipeline specification'
      ],
      proposed: [
        'Implementation of sandbox environment for training PPO agent against recorded game replays'
      ]
    },
    links: {
      statusNote: 'Investigated research lead; documented honestly as architectural concept (no local source code located).'
    },
    tags: ['Python', 'OpenCV', 'Reinforcement Learning', 'ADB', 'Game AI', 'Concept']
  },

  {
    id: 'desktop-ai-os',
    slug: 'desktop-ai-os',
    title: 'Desktop AI Operating System & Tool Environment (OmniRoute)',
    subtitle: 'Electron Desktop Agent Architecture with LLMLingua Context Compression',
    category: 'Experiments & Tools',
    tier: 'Experimental Project',
    featured: false,
    highlightMetric: 'LLMLingua Compression · Multi-Process Desktop',
    summary: 'An experimental desktop agent environment packaged with Electron, integrating prompt context compression (LLMLingua), browser automation worker pools, and server-sent event streaming for autonomous system tasks.',
    problem: 'Long-running autonomous agent sessions on desktop systems quickly exhaust LLM context windows with verbose terminal outputs, browser DOM snapshots, and repetitive tool telemetry.',
    solution: 'Packaged a desktop agent architecture (`OmniRoute.app`) integrating `@omniroute/opencode-plugin`, `open-sse`, and `llmlingua` prompt compression, managing a pool of headless browser workers and streaming agent actions via SSE.',
    architecture: {
      overview: 'Multi-process Electron runtime with background Node.js worker pools managing headless browser sessions and LLMLingua compression pipelines.',
      diagramType: 'generic',
      components: [
        { name: 'Electron Main Runtime', role: 'Window lifecycle and native OS permissions', technologies: 'Electron, Node.js' },
        { name: 'LLMLingua Compressor', role: 'Compresses long prompts and terminal outputs', technologies: 'LLMLingua, Python' },
        { name: 'Browser Pool', role: 'Headless browser automation instances', technologies: 'Playwright, Chrome DevTools Protocol' }
      ],
      dataFlow: [
        '1. Desktop user inputs goal; agent decomposes into OS and browser tasks.',
        '2. Headless browser pool executes navigation and DOM queries.',
        '3. Raw DOM and terminal logs compressed via LLMLingua before hitting LLM context.',
        '4. Responses streamed to desktop UI via Server-Sent Events (SSE).'
      ]
    },
    techBreakdown: [
      {
        category: 'Desktop Systems',
        items: [
          { name: 'Electron & Node.js', purpose: 'Cross-platform desktop container', advantage: 'Direct access to native file systems and child processes' },
          { name: 'LLMLingua', purpose: 'Prompt token compression', advantage: 'Reduces prompt token costs by up to 50% without losing reasoning ability' }
        ]
      }
    ],
    challenges: [
      {
        challenge: 'High Memory Footprint of Concurrent Headless Browsers',
        context: 'Spinning up multiple Chromium instances in desktop background tasks easily consumes 2GB+ RAM.',
        resolution: 'Engineered an idle browser recycling pool terminating inactive instances after inactivity timeouts.'
      }
    ],
    decisions: [
      {
        choice: 'SSE streaming over WebSockets for one-directional agent task output',
        rationale: 'Simpler protocol resilience over intermittent local reconnections.',
        tradeOff: 'Unidirectional; requires separate HTTP requests for user interventions.'
      }
    ],
    learnings: [
      'Context compression is essential for sustainable multi-step autonomous agent execution.'
    ],
    improvements: {
      implemented: [
        'Packaged Electron desktop application framework (`Desktop/OmniRoute.app`)',
        'Integration of prompt compression engine and browser pooling'
      ],
      proposed: [
        'Containerized sandbox execution for native shell commands'
      ]
    },
    links: {
      statusNote: 'Packaged desktop productivity application exploring local AI automation and tool orchestration.'
    },
    tags: ['Electron', 'Node.js', 'LLMLingua', 'Browser Automation', 'Desktop AI', 'Experimental']
  }
];
