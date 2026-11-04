# PROJECT INVENTORY — KESHAV JINDAL
**Author:** Keshav Jindal  
**Scope:** Exhaustive audit of all accessible local repositories, codebases, GitHub repositories, and verified enterprise projects.  
**Date of Audit:** November 2026  

---

## Executive Summary & Taxonomy

Every project listed below has been verified through direct source-code inspection, local file evaluation, or authorized GitHub API inspection. Each project is honestly categorized using the 6-tier classification framework:

- **Tier 1: Production / Deployed** (Live systems or enterprise production implementations)
- **Tier 2: Completed Project** (Feature-complete, fully functional applications or pipelines)
- **Tier 3: Working Prototype** (Functional end-to-end prototypes demonstrating core technical mechanics)
- **Tier 4: Experimental Project** (Proof-of-concept experiments exploring novel architectures or APIs)
- **Tier 5: Learning Project** (Foundational projects built to master a specific technology or framework)
- **Tier 6: Concept / Proposed Idea** (Architectural proposals or ideated projects without located local source code)

---

## Project 1: BillGuard AI / Logistics Fraud Checker (FraudCheckerMVP)

1. **Project Name:** BillGuard AI (Transportation Billing Fraud & Invoice Audit Engine)
2. **Project Type:** Full-Stack AI & Document Intelligence Web Application
3. **Main Purpose:** Automated audit of transportation freight contracts and logistics invoice PDFs to detect billing overcharges, fraudulent lane deviations, kilometer discrepancies, and duplicate charges.
4. **Problem Being Solved:** Enterprise logistics shippers lose 5–15% of annual freight spend to unverified invoices, unauthorized fuel surcharges, mismatched lane origin-destinations, and inflated billable kilometers. Manual audit of multi-page PDF bills against complex rate cards is slow, error-prone, and unscalable.
5. **Technologies Used:** 
   - **Backend:** Python 3.12, FastAPI, SQLite / SQLAlchemy, RapidOCR (local computer-vision OCR), PyPDF, Pydantic v2
   - **Frontend:** React, Vite, Tailwind CSS, Lucide React
   - **AI/LLM:** OpenRouter API (`nvidia/nemotron-3-super-120b-a12b:free`) for constrained second-pass advisory review
   - **Tooling:** Python PDF extraction, synthetic data generator (`BillGuard_Synthetic_Pilot`)
6. **Main Implemented Features:**
   - Multi-document folder upload preserving contract and carrier folder hierarchies.
   - Deterministic Python rule validation: supplier reference matching, lane matching (origin vs destination), rate per km / linehaul cap comparison.
   - Configurable route distance tolerance (default 10%) comparing billed km against contract baseline.
   - Fuel clause auditor (flags separately billed fuel if contract specifies fuel is inclusive).
   - Duplicate trip detection and missing Proof-of-Delivery (POD) flagging.
   - RapidOCR fallback for scanned/image-only invoice PDFs.
   - Constrained AI second-pass review providing advisory verification without altering deterministic numbers.
   - Interactive audit dashboard with severity flags, line-item evidence, and original PDF drilldown viewer.
7. **Architecture:** Client-Server decoupled architecture. React SPA communicates via REST with FastAPI. SQLite database stores contracts, parsed bills, line items, and audit flags. RapidOCR runs entirely on-prem/in-process for sensitive enterprise privacy.
8. **Backend Functionality:** Asynchronous PDF ingestion pipeline, text tokenization, regex and heuristic tabular parsers, deterministic rule execution engine (`rules_engine.py`), SQLite ORM models, and OpenRouter client.
9. **Frontend Functionality:** Drag-and-drop batch folder uploader, live processing progress indicators, summary statistics cards, discrepancy severity chips, and split-screen PDF preview.
10. **Database Structure:** SQLite (`fraud_checker.db` / `billguard_live.db`): Tables for `contractors`, `contracts` (rates, baseline lanes, fuel clauses), `invoices` (dates, origins, destinations, distances, totals), and `audit_flags` (rule ID, discrepancy delta, evidence snippet).
11. **APIs and Integrations:** OpenRouter REST API for advisory LLM validation; local RapidOCR engine.
12. **Current Completion Status:** Working Prototype (High Fidelity, verified with 5 synthetic carrier fleets in `BillGuard_Synthetic_Pilot`).
13. **Interesting Engineering Decisions:** 
    - Privacy-first boundary: Raw PDFs and full OCR text are never sent to external LLMs; only compact extracted numbers and deterministic flags are passed to the second-pass model.
    - Separation of deterministic math and AI advice: Python rules strictly control money calculations; the LLM cannot override calculated financial amounts.
14. **Technical Limitations:** Lacks multi-tenant enterprise RBAC and distributed Celery worker queue; distance validation relies on contract baseline rather than real-time GPS/FASTag toll telemetry.
15. **Potential Improvements:** Integration with FASTag toll plaza APIs and GPS telematics; migration from SQLite to PostgreSQL with row-level security.
16. **GitHub URL:** Private repository (evaluated for FITT incubation pitch, IIT Delhi; available on request).
17. **Live Deployment URL:** Localhost prototype (demonstrated in synthetic pilot).

---

## Project 2: Orbit Travel OS (AI-Powered Travel SuperApp & Conversational Copilot)

1. **Project Name:** Orbit Travel OS
2. **Project Type:** Next-Gen Travel Booking SuperApp & Real-Time Hybrid RAG Platform
3. **Main Purpose:** Unifies multi-modal travel bookings (flights, stays, live events, fast-track visas) with an investor-grade conversational AI Copilot capable of multi-turn qualification, layover optimization, and instant WhatsApp itinerary sharing.
4. **Problem Being Solved:** Travelers juggle 5+ separate apps for flights, hotels, visa documentation, city activities, and group budget splitting. Legacy OTAs (MakeMyTrip, Booking.com) offer rigid filter trees rather than conversational assistance, while visa services (Atlys) are siloed from booking workflows.
5. **Technologies Used:**
   - **Frontend:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Lucide React, Framer Motion
   - **Backend:** Python 3.12, FastAPI, SQLAlchemy, SQLite, Pydantic v2
   - **Information Retrieval:** In-memory Hybrid RAG (BM25 + L2-normalized TF-IDF vector retrieval with <10ms latency)
   - **AI/LLM:** Metal / ARM NEON local LLM runner and external model endpoints
6. **Main Implemented Features:**
   - Conversational AI Travel Copilot with multi-turn qualification state machine (mood, group size, budget tier, stay aesthetic).
   - Real-time Hybrid RAG indexing 1,170+ live items across flights, luxury stays, concerts, and flat ₹499 family visas.
   - Dynamic Traveler Memory Pill Bar preserving user preferences across conversation turns.
   - Interactive Day-by-Day Visual Itinerary Timeline (`Day 1` through `Day 4`).
   - Live Squad Cost Splitter computing per-person shares dynamically (`1P`, `2P`, `4P`, `6P`).
   - 1-Tap formatted WhatsApp Itinerary Exporter.
   - Distressed flight liquidation drops (up to 60% off unsold seats) and corporate myBiz 18% GST tax invoice calculator.
   - Atlys-equivalent flat ₹499 visa engine with automated passport OCR and dummy embassy voucher generator.
7. **Architecture:** Hybrid Next.js + FastAPI decoupled microservice. Next.js 14 handles SSR and client-side conversational state; FastAPI serves high-throughput sub-10ms hybrid search endpoints and conversational inference.
8. **Backend Functionality:** Vector indexing, BM25 lexical scorer, session-based traveler memory store, PNR status lookup, flight and hotel catalog queries.
9. **Frontend Functionality:** Glassmorphic dark aesthetic, interactive chat studio, dynamic memory pill toggles, responsive search filters, and real-time pricing breakdown.
10. **Database Structure:** Relational SQLite schema with models for `Flights`, `Hotels`, `Events`, `Visas`, `Bookings`, and `TravelerProfiles`.
11. **APIs and Integrations:** Hybrid BM25/TF-IDF vector store, local LLM runner, WhatsApp Web deep-link API.
12. **Current Completion Status:** Working Prototype (Fully functional Next.js + FastAPI codebase with verified 1,170+ seed catalog).
13. **Interesting Engineering Decisions:** Sub-10ms search SLA achieved by combining in-memory sparse BM25 indices with dense L2-normalized TF-IDF embeddings in NumPy, avoiding heavy vector DB cold-start latency for local deployments.
14. **Technical Limitations:** Payment gateway (Razorpay/Stripe) runs in sandbox/simulation mode; live GDS flight booking integration is simulated via verified schedule datasets.
15. **Potential Improvements:** Direct Amadeus/Sabre GDS API integration; live WebSockets for instant seat-map selection.
16. **GitHub URL:** https://github.com/Keshavgg/orbit-travel-app
17. **Live Deployment URL:** Local prototype deployed at `Local development server` (backend at `Local development server`).

---

## Project 3: Plan4U (Autonomous AI Trip Planner & City Exploration Engine)

1. **Project Name:** Plan4U
2. **Project Type:** Travel Itinerary Generation & Unified Nearby Discovery Backend
3. **Main Purpose:** Dual-mode travel application providing both autonomous multi-agent trip planning (pre-trip master plans & live in-trip companion) and unified "Explore Nearby" GPS discovery for hotels, restaurants, monuments, and live events.
4. **Problem Being Solved:** Planning a trip requires researching monuments, coordinating opening hours, finding highly-rated dining along transit routes, and dividing group expenses. Plan4U unifies this into a single contextual API.
5. **Technologies Used:**
   - **Backend:** Python 3.11+, FastAPI, Pydantic, Uvicorn, JSON/SQLite datastore
   - **Frontend:** React + Vite modern web portal (`frontend/`)
   - **Features:** Geolocation distance calculation, Splitwise expense reconciliation, QR ticketing
6. **Main Implemented Features:**
   - Unified `GET /api/v1/explore/nearby` endpoint returning nearby hotels, dining, monuments, and events within a configurable radius from live GPS coordinates (`lat`, `lng`).
   - Two-panel AI workflow: Panel 1 (Master Pre-Trip Planner) and Panel 2 (Live In-Trip Copilot).
   - "Clip2Trip" social media travel reel insight extraction concept.
   - Built-in Group Expense Splitter (Splitwise style) computing equal and weighted debt balances.
   - Fast-track QR pass generation for heritage sites and attractions.
7. **Architecture:** Clean layered FastAPI architecture: `app/api/` (endpoints), `app/services/` (business logic, geolocation math), `app/models/` (schemas), and `data_store/` (curated Indian travel hotspots).
8. **Backend Functionality:** Haversine distance spatial filtering, multi-category aggregation, group expense debt simplification algorithm, itinerary state serialization.
9. **Frontend Functionality:** Map view, interactive itinerary builder, category carousel, expense calculator.
10. **Database Structure:** JSON-based persistent datastore (`data_store/`) storing normalized entries for monuments, hotels, dining, and city guides.
11. **APIs and Integrations:** RESTful endpoints documented in `CURL_API_COLLECTION.md`.
12. **Current Completion Status:** Working Prototype (Comprehensive backend with extensive cURL test suites, test cases, and frontend scaffolding).
13. **Interesting Engineering Decisions:** Implemented spatial geo-radius indexing directly in Python using vectorized Haversine calculations to deliver zero-dependency local performance without needing PostGIS for early-stage deployments.
14. **Technical Limitations:** Static mock datasets for live event ticket availability.
15. **Potential Improvements:** Live integration with Google Places API and BookMyShow ticket APIs; WebSocket synchronization for collaborative squad planning.
16. **GitHub URL:** Private codebase (includes cURL collection and test suites; available on request).
17. **Live Deployment URL:** Local staging instance.

---

## Project 4: ResearchMind — Multi-Agent AI Research System (`ai_project`)

1. **Project Name:** ResearchMind · Autonomous Multi-Agent Research System
2. **Project Type:** Agentic AI Pipeline & Deep Research Engine
3. **Main Purpose:** Automated multi-agent system that autonomously plans, searches, scrapes, synthesizes, and fact-checks deep technical research reports on any complex user prompt.
4. **Problem Being Solved:** Single-prompt LLMs frequently hallucinate, retrieve outdated information, and fail to cross-verify citations when tasked with producing comprehensive research briefs.
5. **Technologies Used:**
   - **Framework:** Python, LangChain, LangGraph, Tavily API (Search), BeautifulSoup (Web scraping), OpenAI / Anthropic APIs
   - **Guardrails:** NeMo Guardrails for anti-hallucination verification
   - **Deployment:** Render (`render.yaml`)
6. **Main Implemented Features:**
   - **4-Agent Collaborative Pipeline:**
     1. *Search Agent:* Executes search strategies via Tavily API to obtain high-relevance source links and snippets.
     2. *Reader Agent:* Deep web content extraction via custom DOM scraping tool.
     3. *Writer Agent:* Synthesizes multi-source raw text into structured academic-style markdown reports.
     4. *Critic / Guardrails Agent:* Verifies claims against extracted source citations, flagging unsourced statements and requesting revisions.
   - Semantic caching layer avoiding duplicate LLM calls on recurring topics.
   - Dynamic tool calling and structured Pydantic schema outputs.
7. **Architecture:** Sequential and cyclic multi-agent graph architecture orchestrated via LangGraph/LangChain state channels. Each agent possesses private memory and a dedicated toolset.
8. **Backend Functionality:** Web search dispatch, concurrent webpage scraping, token-budgeted context window management, citation indexing, and automated report generation.
9. **Frontend Functionality:** Web interface / Streamlit / Gradio dashboard allowing real-time inspection of agent deliberation stages.
10. **Database Structure:** In-memory state graph with semantic cache index.
11. **APIs and Integrations:** Tavily Search API, LLM completion APIs.
12. **Current Completion Status:** Completed Project / Working Prototype.
13. **Interesting Engineering Decisions:** Decoupled the Reader and Writer agents to enforce strict citation provenance—the Writer cannot introduce facts that were not explicitly returned by the Reader agent's scraped source context.
14. **Technical Limitations:** Dependent on external web scraping stability and target site anti-bot policies.
15. **Potential Improvements:** PDF paper ingestion (arXiv/bioRxiv) and automated citation graph visualization.
16. **GitHub URL:** https://github.com/Keshavgg/ai_project
17. **Live Deployment URL:** Configured for Render deployment via `render.yaml`.

---

## Project 5: Autonomous AI Video Engine (`facts-video-maker` & `gen-ai1`)

1. **Project Name:** Autonomous AI Video Engine (Facts Video Maker & AI Video Assistant)
2. **Project Type:** On-Device Generative AI & Video Automation Engine
3. **Main Purpose:** Generates publish-ready 1080x1920 vertical short-form videos (Reels, Shorts, TikTok) directly from text prompts on Apple Silicon with zero external API fees, alongside a RAG-powered Video Assistant for transcript Q&A.
4. **Problem Being Solved:** Video content creation is bottlenecked by manual asset generation, audio synthesis fees (ElevenLabs), video editing timeline assembly, and subtitle synchronization.
5. **Technologies Used:**
   - **Generative AI:** SDXL-Turbo (local Diffusers model via Apple Silicon MPS/Metal), Kokoro Neural TTS / macOS native `say` TTS
   - **Video Processing:** FFmpeg (pan/zoom Ken Burns motion filters, dynamic audio-video muxing, subtitle burn-in)
   - **Interface:** Gradio Web UI (`app.py`), Python 3.10+
   - **RAG Subsystem:** LangChain, Pinecone / ChromaDB, Whisper audio transcription (`core/transcriber.py`, `core/rag_engine.py`)
6. **Main Implemented Features:**
   - Automated script-to-video compilation: splits multi-paragraph scripts into visual scenes.
   - Local on-device image synthesis using SDXL-Turbo generating cinematic backgrounds in under 2 seconds per frame.
   - Smooth Ken Burns camera motion simulation computed mathematically using FFmpeg pan/zoom filter curves.
   - Automated subtitle generation and typography overlay with configurable screen positions (top, center, bottom).
   - Audio transcription and semantic RAG pipeline allowing users to query video transcripts without hallucinations.
   - Extraction of key decisions, action items, and automated title generation from spoken audio.
7. **Architecture:** Multi-stage media pipeline: Text Script -> Scene Segmentation -> Local Diffusion Generation -> Neural Audio Synthesis -> FFmpeg Composition & Subtitle Filtergraph -> Final MP4 Render.
8. **Backend Functionality:** PyTorch MPS tensor acceleration, subprocess orchestration of FFmpeg filter graphs, vector embedding and retrieval over audio transcripts.
9. **Frontend Functionality:** Gradio web interface with visual style presets (cinematic, vibrant, dark, minimal), voice selectors, aspect ratio toggles (9:16, 16:9, 1:1), and embedded MP4 preview player.
10. **Database Structure:** Local vector index for transcript chunks; file-based artifact cache under `output/`.
11. **APIs and Integrations:** Local Hugging Face Diffusers, FFmpeg CLI, local macOS speech synthesis.
12. **Current Completion Status:** Completed Project / Working Prototype.
13. **Interesting Engineering Decisions:** Optimized pipeline execution for Apple Silicon unified memory (M-series) using MPS device acceleration and 1-step SDXL-Turbo inference, eliminating cloud GPU hosting expenses.
14. **Technical Limitations:** High memory consumption during simultaneous model weights loading; requires Apple Silicon with 16GB+ RAM.
15. **Potential Improvements:** Automated beat-matching to background audio tracks; multi-speaker dialog generation.
16. **GitHub URL:** https://github.com/Keshavgg/gen-ai1.
17. **Live Deployment URL:** Local workstation deployment (`Local development server / Demo on request`).

---

## Project 6: Forge Athletics (High-Performance Athletic Club Platform)

1. **Project Name:** Forge Athletics
2. **Project Type:** Modern Web Application & Client-Side Lead Management Portal
3. **Main Purpose:** Agency-grade digital platform for an elite strength and conditioning facility, engineered with editorial aesthetics, interactive membership comparison, and admissions pipeline management.
4. **Problem Being Solved:** Boutique athletic clubs often rely on generic WordPress themes that suffer from slow load times, poor mobile conversion funnels, and lack of streamlined lead tracking for personal trainers.
5. **Technologies Used:**
   - **Frontend:** React 18, Vite, Tailwind CSS, Lucide React, PostCSS
   - **Architecture:** Client-side state persistence, modular component system
   - **Design:** Editorial brutalist-minimalist dark theme (`#090B09`, electric lime `#C8FF3D`, Oswald & Plus Jakarta Sans typography)
6. **Main Implemented Features:**
   - Conversion-optimized Free Trial Booking Engine with full name, email, phone, program track, and future date/time slot validation.
   - Prevention of duplicate submissions with unique reference code generation (`FA-XXXXX`).
   - Side-by-side interactive Membership Tier Comparison Matrix (Starter, Performance, Elite) with monthly/quarterly billing toggle (15–20% discount math).
   - In-depth Trainer & Coach Showcase (`Marcus Vance`, `Elena Rostova`, `Arjun Dev`) with CSCS/StrongFirst certifications and direct WhatsApp consultation routing.
   - Comprehensive Admissions Admin Console (`/admin`): real-time KPI cards (Total Enquiries, New, Trial Bookings, Milestone Conversions), live search, status filtering, and internal coach notes editor.
   - Sticky glass-morphic navigation with active scroll spy and responsive mobile drawer.
7. **Architecture:** Component-driven SPA architecture. Form submissions persist to `localStorage` simulating backend database persistence for offline and client-side demonstrations.
8. **Backend Functionality:** Client-side data store with mock seeding and reset capabilities.
9. **Frontend Functionality:** Dynamic route-driven tab views (`/`, `/programs`, `/membership`, `/trainers`, `/about`, `/contact`, `/book-trial`, `/admin`), interactive billing toggle, and real-time form error validation.
10. **Database Structure:** Local persistent schema (`forge_athletics_leads`) storing customer contact details, inquiry timestamp, booking track, coach notes, and status lifecycle (`New` -> `Contacted` -> `Trial Scheduled` -> `Completed` -> `Cancelled`).
11. **APIs and Integrations:** Direct WhatsApp Web intent integration with prefilled consultation context.
12. **Current Completion Status:** Completed Project / Working Prototype.
13. **Interesting Engineering Decisions:** Built a complete client-side admissions CRM inside the frontend, enabling gym owners to manage leads without requiring an immediate database migration.
14. **Technical Limitations:** Relies on browser local storage rather than remote database synchronization in the demo build.
15. **Potential Improvements:** Supabase / PostgreSQL backend integration with automated SMS and WhatsApp confirmation triggers.
16. **GitHub URL:** Private repository (production build verified; available on request).
17. **Live Deployment URL:** Ready for Vercel/Netlify deployment (built via `npm run build`).

---

## Project 7: Local Offers / Evergreen Hyperlocal Discovery Engine

1. **Project Name:** Local Offers (Evergreen Discovery Platform)
2. **Project Type:** Hyperlocal Commerce Discovery Web & Mobile Platform
3. **Main Purpose:** Neighborhood marketplace connecting residents with local businesses (cafes, salons, gyms, retail) featuring live discount offers, server-enforced role permissions, and zero-SMS phone authentication.
4. **Problem Being Solved:** Small local shops lack a low-friction platform to broadcast neighborhood flash deals without paying extortionate commission rates to food delivery aggregators.
5. **Technologies Used:**
   - **Frontend:** React, Vite, Tailwind CSS, Lucide React
   - **Backend:** Node.js 22.5+, Express.js, native `node:sqlite` database
   - **Authentication:** JWT, Google OAuth 2.0, Telegram Bot phone authentication, WhatsApp Cloud API reverse-OTP webhook
   - **Mobile:** React Native / Expo (`EvergreenApp`)
6. **Main Implemented Features:**
   - Dual-role authorization architecture (Customers vs. Shop Owners).
   - Server-enforced review integrity: one review per customer per place; owners cannot review their own shops but can reply.
   - Pincode-targeted broadcast alert engine: shop owners broadcast live offers to opted-in neighbors with strict rate limits (max 1 send/day, max 500 recipients).
   - Multi-channel passwordless login: email OTP code, Google OAuth, and cost-free phone verification via Telegram bot and WhatsApp reverse-OTP webhooks (`X-Hub-Signature-256` HMAC verified).
   - Automated unit and integration test suite (`npm test`) on ephemeral test databases.
7. **Architecture:** Monorepo architecture featuring Express REST API serving a React SPA, backed by zero-dependency native `node:sqlite`. Full high-level design specification documented in `Desktop/evergreen.md` (HLD v3.1).
8. **Backend Functionality:** RESTful CRUD endpoints for places, offers, reviews, and notifications; HMAC webhook verification; automated seed generator.
9. **Frontend Functionality:** Category carousel, interactive maps, offer discount tags, shop owner dashboard with deal creation and review reply tools.
10. **Database Structure:** Relational SQLite tables for `users`, `places`, `offers`, `reviews`, `saved_places`, and `notifications`.
11. **APIs and Integrations:** WhatsApp Business Cloud API webhooks, Telegram Bot API, Google OAuth 2.0.
12. **Current Completion Status:** Working Prototype / Production-grade MVP (Complete with automated API test suites and seed data).
13. **Interesting Engineering Decisions:** Eliminated expensive telecom SMS OTP costs by implementing reverse-OTP via WhatsApp Webhooks (user messages the bot first, which is free under Meta's 24-hour service window) and Telegram bot contact sharing.
14. **Technical Limitations:** Geolocation search currently relies on pincode matching rather than geospatial bounding-box queries.
15. **Potential Improvements:** Migration from SQLite to PostgreSQL with PostGIS indexing.
16. **GitHub URL:** https://github.com/Keshavgg/local-offers (and `Keshavgg/evergreen-local-shopping`).
17. **Live Deployment URL:** Localhost instance (`Local development server / Demo on request` / `Local development server / Demo on request`).

---

## Project 8: Way2Agri Agricultural Price Forecasting Engine (`way2agri_assignment`)

1. **Project Name:** Way2Agri AI Commodity Price Forecasting Microservice
2. **Project Type:** Machine Learning & Time-Series Forecasting Backend
3. **Main Purpose:** Predicts 12-month forward commodity market prices with 95% confidence intervals to guide agricultural procurement decisions and warehouse storage strategies.
4. **Problem Being Solved:** Agricultural commodity prices suffer from extreme seasonal fluctuations and climate shocks, causing severe margin volatility for agribusinesses and procurement teams.
5. **Technologies Used:**
   - **Machine Learning:** Python 3.10+, statsmodels, Holt-Winters Exponential Smoothing, scikit-learn, pandas, numpy
   - **Backend:** FastAPI, Pydantic, Uvicorn, joblib
   - **Analysis:** Jupyter Notebook (`solution.ipynb`) with backtesting and residual diagnostics
6. **Main Implemented Features:**
   - 20-year monthly historical price dataset analysis (Jan 2005 – Sep 2025; 249 continuous observations).
   - Holt-Winters Additive Trend and Seasonality model achieving 9.85% MAPE and ₹1,240 MAE on 12-month holdout test set.
   - Production FastAPI microservice exposing dynamic forecasting endpoints (`GET /api/v1/forecast/12-months` and `POST /api/v1/forecast/custom` for 1–36 month horizons).
   - Comprehensive production architecture specification for Django ORM + Celery + Redis batch processing and KS-test/PSI data drift monitoring.
7. **Architecture:** Model-as-a-Service pattern. Serialized model artifact (`models/price_forecaster.joblib`) loaded into FastAPI application memory for sub-5ms inference.
8. **Backend Functionality:** Forward prediction generation, dynamic confidence band derivation via residual standard errors, Swagger OpenAPI schema generation.
9. **Frontend Functionality:** Architecture blueprint for Next.js web portal with Recharts time-series visualization.
10. **Database Structure:** Historical CSV time-series dataset; schema blueprint for Django `PriceForecast` table.
11. **APIs and Integrations:** REST endpoints for forecasts and historical summaries.
12. **Current Completion Status:** Completed Project / Working Prototype (Fully executed Jupyter Notebook + production FastAPI service).
13. **Interesting Engineering Decisions:** Selected Holt-Winters over deep learning architectures (LSTM/Transformers) because the sample size ($N=249$) was susceptible to neural over-parameterization, whereas Holt-Winters explicitly isolated recurring annual harvest cycles with superior interpretability and zero GPU overhead.
14. **Technical Limitations:** Assumes additive seasonal variance; external macro supply shocks (unseasonal rainfall, export bans) require manual covariate adjustment.
15. **Potential Improvements:** Exogenous variable integration (rainfall index, diesel prices, global commodity indices) via SARIMAX or Prophet.
16. **GitHub URL:** Technical submission codebase (available on request).
17. **Live Deployment URL:** Local microservice (`Local development server / Demo on request`).

---

## Project 9: Blackcoffer Automated NLP Text Analytics Engine

1. **Project Name:** Blackcoffer Multithreaded Web Scraping & AI Text Analytics
2. **Project Type:** Data Engineering & NLP Text Analytics Pipeline
3. **Main Purpose:** Automated crawling of 600 financial and technology articles with linguistic and sentimental feature extraction for quantitative investment research.
4. **Problem Being Solved:** Manual extraction and text metric calculation from unstructured web articles is unscalable and prone to inconsistent parsing due to variable website DOM structures.
5. **Technologies Used:**
   - **Language & Libraries:** Python 3.9+, requests, BeautifulSoup4, pandas, openpyxl, nltk, concurrent.futures
   - **Lexicons:** Custom 12,750+ StopWords dictionary, Master Financial Positive/Negative Dictionaries
6. **Main Implemented Features:**
   - Automated sitemap crawling across XML sitemaps to discover 600 live article URLs into `Input.xlsx`.
   - Concurrent multithreaded extraction using `ThreadPoolExecutor` (15 worker threads) with HTTP session pooling and retry backoff.
   - Robust DOM sanitization stripping ads, social widgets, author signatures, scripts, and navigation chrome.
   - Mathematical computation of 13 NLP metrics per article: Positive Score, Negative Score, Polarity Score, Subjectivity Score, Average Sentence Length, Percentage of Complex Words, Gunning Fog Index, Syllables per Word, Personal Pronoun frequency, and Average Word Length.
   - Dual output export to formatted Excel (`Output Data Structure.xlsx`) and CSV.
7. **Architecture:** ETL pipeline: Extract (Sitemap crawler & HTML scraper) -> Transform (DOM cleaning, stop-word purging, syllabic counter, sentiment engine) -> Load (Excel/CSV report generator).
8. **Backend Functionality:** High-throughput HTTP crawling, thread pool synchronization, regex linguistic analysis.
9. **Frontend Functionality:** Command-line CLI with configurable limits, custom file paths, and concurrency flags.
10. **Database Structure:** File-based text document archive (`extracted_articles/1.txt` to `600.txt`) and tabular structured outputs.
11. **APIs and Integrations:** Direct HTTP sitemap and webpage ingestion.
12. **Current Completion Status:** Completed Project (600 articles processed, 0 missing values, complete test delivery).
13. **Interesting Engineering Decisions:** Implemented multi-file stop-word purging against the Master Dictionary prior to running article scoring, ensuring that domain-specific filler terms do not skew polarity scores.
14. **Technical Limitations:** Single-machine thread concurrency; does not use distributed task queues (Celery/Kafka).
15. **Potential Improvements:** Async `httpx`/`playwright` for JavaScript-rendered SPAs; sentiment model fine-tuning with FinBERT.
16. **GitHub URL:** Technical submission codebase (available on request).
17. **Live Deployment URL:** Local pipeline deliverable.

---

## Project 10: FreelanceMatch AI (`freelancer-app`)

1. **Project Name:** FreelanceMatch AI
2. **Project Type:** Full-Stack Marketplace & AI Recommendation Engine
3. **Main Purpose:** Connects technical clients with vetted freelance engineers using cosine-similarity semantic skill matching.
4. **Problem Being Solved:** Traditional freelance marketplaces rely on keyword matching, leading to poor candidate-project fits where related skills (e.g. Next.js vs. React) are ignored.
5. **Technologies Used:**
   - **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS, shadcn/ui
   - **Backend:** Node.js, Next.js Server Actions, PostgreSQL (`psycopg2`), Python microservice
   - **AI/ML:** scikit-learn (TF-IDF vectorizer, cosine similarity), pandas, numpy
6. **Main Implemented Features:**
   - Project posting and freelancer portfolio profiles.
   - Python-based AI recommendation service (`AImodels/recomendation.py`) vectorizing project requirements and computing cosine similarity against freelancer skill vectors.
   - PostgreSQL persistence for user credentials, project specifications, and proposals.
   - Modern accessible UI with dark-mode support and responsive layouts.
7. **Architecture:** Next.js full-stack framework with integrated Python AI recommendation microservice querying PostgreSQL.
8. **Backend Functionality:** Database connection pooling, skill vector transformation, recommendation ranking.
9. **Frontend Functionality:** Proposal submission, project discovery, skill badge filtering, profile management.
10. **Database Structure:** PostgreSQL tables for `users`, `freelancers`, `projects`, and `proposals`.
11. **APIs and Integrations:** PostgreSQL database connection, internal Python recommendation API.
12. **Current Completion Status:** Working Prototype.
13. **Interesting Engineering Decisions:** Implemented hybrid stack where Next.js handles high-speed web rendering while delegating vector similarity computation to Python's scikit-learn.
14. **Technical Limitations:** Requires running both Node.js and Python runtimes concurrently.
15. **Potential Improvements:** Migration to pgvector inside PostgreSQL to eliminate separate Python vector computation.
16. **GitHub URL:** https://github.com/Keshavgg/freelancer-app
17. **Live Deployment URL:** Staging prototype.

---

## Project 11: FastAPI Product Catalog API (`fast_project` / `Desktop/pytr/oo`)

1. **Project Name:** FastAPI Product Catalog & E-Commerce Service
2. **Project Type:** Backend REST Microservice
3. **Main Purpose:** High-performance RESTful API for querying, filtering, and managing an e-commerce product catalog with SKU attributes, pricing, and seller metadata.
4. **Problem Being Solved:** Demonstrating high-throughput, type-safe API engineering with Pydantic validation, query parameter filtering, and structured error handling.
5. **Technologies Used:** Python 3.12/3.14, FastAPI, Pydantic, Uvicorn, JSON datastore
6. **Main Implemented Features:**
   - Endpoints for root health, product by ID with 404 validation, and filtered catalog search by name and category.
   - 100+ product catalog schema (`product.json`) covering SKUs, brands, dimensions, stock status, ratings, and seller details.
   - Pydantic models enforcing string length boundaries and data sanitization.
7. **Architecture:** Clean service-repository pattern: `app/main.py` handles route definitions and parameter validation, delegating data retrieval to `service/products.py`.
8. **Backend Functionality:** JSON deserialization, query filtering, HTTP exception handling.
9. **Frontend Functionality:** Auto-generated interactive Swagger UI (`/docs`) and ReDoc.
10. **Database Structure:** Flat JSON dataset with 100 structured items.
11. **APIs and Integrations:** RESTful API endpoints.
12. **Current Completion Status:** Working Prototype / Learning Project.
13. **Interesting Engineering Decisions:** Used Python's modern typing system (`list[dict]`, `str | None`) and FastAPI's native dependency injection.
14. **Technical Limitations:** Read-only data store; lacks persistent transactional write database (e.g. PostgreSQL).
15. **Potential Improvements:** Integration with SQLAlchemy ORM and PostgreSQL; Redis caching layer for hot product lookups.
16. **GitHub URL:** https://github.com/Keshavgg/fast_project
17. **Live Deployment URL:** Local development service.

---

## Project 12: Object-Oriented Bag Modeling System (`Desktop/pytr/kk/bags.py`) — The EBAGS Lead

1. **Project Name:** Object-Oriented Domain Modeling System (EBAGS Lead)
2. **Project Type:** Core Object-Oriented Design & Domain Modeling
3. **Main Purpose:** Clean demonstration of Object-Oriented Programming (OOP) principles in Python, featuring abstract base classes, multi-interface inheritance, encapsulation, and domain validation.
4. **Problem Being Solved:** Modeling customizable e-commerce product attributes (dimensions, materials, themes, zipper configurations) using strict object contracts.
5. **Technologies Used:** Python 3, `abc` module (`ABC`, `abstractmethod`)
6. **Main Implemented Features:**
   - Abstract base class `req` defining mandatory physical specifications (`zip`, `cloth`).
   - Abstract base class `theme` defining aesthetic specifications (`hero`, `color`).
   - Concrete domain class `bag` inheriting from multiple interfaces and implementing private member encapsulation (`self._zip`, `self._cloth`, `self._hero`, `self._color`).
7. **Architecture:** Pure Object-Oriented architecture adhering to the Interface Segregation Principle (ISP) and Dependency Inversion Principle (DIP).
8. **Backend Functionality:** Encapsulated domain logic.
9. **Frontend Functionality:** None (pure domain logic).
10. **Database Structure:** In-memory object graph.
11. **APIs and Integrations:** Standalone Python script.
12. **Current Completion Status:** Learning Project / Conceptual Domain Model.
13. **Interesting Engineering Decisions:** Enforced contractual consistency across product variants through Python abstract base classes.
14. **Technical Limitations:** Domain model only; lacks persistent storage or HTTP interface.
15. **Potential Improvements:** Connect to FastAPI catalog service (Project 11) for database persistence.
16. **GitHub URL:** Foundational Python domain modeling script.
17. **Live Deployment URL:** N/A.

---

## Project 13: Student Records API (`fat_qpi_me`)

1. **Project Name:** Student Records Management Microservice
2. **Project Type:** Backend REST API
3. **Main Purpose:** Lightweight REST API for student records featuring custom multi-attribute sorting (ascending/descending), dynamic pagination, and name-based search.
4. **Problem Being Solved:** Practical implementation of pagination mathematical logic, query parameter validation, and dynamic key sorting in FastAPI.
5. **Technologies Used:** Python 3.12, FastAPI, Pydantic, Uvicorn
6. **Main Implemented Features:**
   - `GET /students`: Full JSON dataset retrieval.
   - `GET /name`: Case-sensitive student record lookup with 404 error handling.
   - `GET /sort`: Dynamic sorting on arbitrary fields (`name`, `age`, `marks`) with order toggling (`asc`, `dsc`).
   - `GET /paginate`: Windowed offset pagination with boundary enforcement (`page`, `limit`).
7. **Architecture:** Single-file modular FastAPI service (`main.py`) with JSON persistence (`students.json`).
8. **Backend Functionality:** Python lambda sorting, range-based slicing, HTTP error handling.
9. **Frontend Functionality:** Swagger UI documentation.
10. **Database Structure:** JSON dictionary of student records (`students.json`).
11. **APIs and Integrations:** REST endpoints.
12. **Current Completion Status:** Learning Project / Completed Prototype.
13. **Interesting Engineering Decisions:** Implemented algorithmic pagination slicing without external ORM helper libraries.
14. **Technical Limitations:** Lacks database indexing; linear scan on large datasets.
15. **Potential Improvements:** Migration to SQLite/PostgreSQL with `OFFSET` and `LIMIT` SQL queries.
16. **GitHub URL:** Foundational FastAPI microservice.
17. **Live Deployment URL:** Local service.

---

## Project 14: HR Cold-Email Automation Engine (`hr-mailer-auto`)

1. **Project Name:** HR Outreach Automation Engine
2. **Project Type:** Automation CLI & Email Dispatch Tool
3. **Main Purpose:** High-deliverability automated cold-email dispatch tool for software engineering recruitment outreach, featuring batching, rate limiting, and state persistence.
4. **Problem Being Solved:** Manually emailing hiring managers and HR recruiters with tailored resumes is time-consuming and difficult to track.
5. **Technologies Used:** Python 3, `smtplib`, `email.mime`, JSON, CSV
6. **Main Implemented Features:**
   - Reads contact spreadsheets (`hr_contacts.csv`) with candidate names, companies, and emails.
   - Configurable batch processing (e.g. 100 emails/batch) with human-like delay intervals (2s) to prevent spam flag triggers.
   - State management (`state.json`) recording successfully contacted recipients to prevent duplicate emails upon interruption or restart.
   - Dynamic template rendering injecting personalized company names and engineering roles.
   - Automated PDF resume attachment with base64 encoding.
7. **Architecture:** Sequential CLI automation pipeline: CSV Reader -> State Verification -> SMTP Handshake -> MIME Composition -> Rate-Limited Dispatch -> State Persistence.
8. **Backend Functionality:** SMTP SSL connection, MIME multipart encoding, crash-resilient state logging.
9. **Frontend Functionality:** CLI execution.
10. **Database Structure:** JSON state record (`state.json`) and CSV contact repository.
11. **APIs and Integrations:** Google / Standard SMTP protocol.
12. **Current Completion Status:** Completed Utility Tool.
13. **Interesting Engineering Decisions:** Implemented idempotent dispatch via persistent `state.json` logging, ensuring zero duplicate messages even if the process terminates abruptly.
14. **Technical Limitations:** Bound by Gmail daily sending quotas (500/day for standard accounts).
15. **Potential Improvements:** Integration with SendGrid or Amazon SES API for higher volume and open-rate webhook analytics.
16. **GitHub URL:** https://github.com/Keshavgg/hr-mailer-auto
17. **Live Deployment URL:** Standalone CLI tool.

---

## Project 15: React Pizza Delivery Web Application (`restaurant`)

1. **Project Name:** React Pizza Delivery Application
2. **Project Type:** Frontend E-Commerce SPA
3. **Main Purpose:** Smooth, real-time pizza ordering web application demonstrating state management, geolocation lookup, and dynamic cart operations.
4. **Problem Being Solved:** Managing complex global cart state, item increments/decrements, priority order pricing adjustments, and delivery address reverse-geocoding.
5. **Technologies Used:** React, Redux Toolkit, React Router, Tailwind CSS, Vite
6. **Main Implemented Features:**
   - Menu browsing with live inventory availability tags.
   - Global Redux Toolkit cart management (add, remove, quantity update, total calculations).
   - Browser Geolocation API integration fetching latitude/longitude and reverse-geocoding delivery addresses.
   - Priority delivery order toggle dynamically recomputing tax and delivery surcharges.
   - Real-time order lookup and estimated delivery countdown timer.
7. **Architecture:** Feature-based React architecture (`features/cart`, `features/menu`, `features/order`, `features/user`) with centralized Redux store.
8. **Backend Functionality:** Consumes external RESTful pizza menu API (`services/apiRestaurant.js`).
9. **Frontend Functionality:** Responsive UI, toast notifications, loading skeletons, and multi-step order flow.
10. **Database Structure:** Client-side Redux store state.
11. **APIs and Integrations:** Fast React Pizza REST API; Reverse Geocoding API.
12. **Current Completion Status:** Completed Project.
13. **Interesting Engineering Decisions:** Organized codebase into domain-driven feature slices, keeping UI components, thunks, and reducers tightly colocated.
14. **Technical Limitations:** Demo API backend without direct payment gateway integration.
15. **Potential Improvements:** WebSockets for live delivery rider tracking on a Mapbox map.
16. **GitHub URL:** https://github.com/Keshavgg/restaurant
17. **Live Deployment URL:** Deployed preview on Vercel/Netlify.

---

## Project 16: FurFinders Pet Reunion Platform (`furfinders`)

1. **Project Name:** FurFinders Community Pet Reunion Platform
2. **Project Type:** Backend RESTful Web Service
3. **Main Purpose:** Community platform helping pet owners reunite with lost pets through geolocated photo and video incident reports.
4. **Problem Being Solved:** Lost pets are often posted across fragmented social media groups where they lack structured location filtering and quick contact mechanisms.
5. **Technologies Used:** Node.js, Express.js, TypeScript, Helmet, Morgan, CORS
6. **Main Implemented Features:**
   - Secure Express application scaffolding with Helmet HTTP security headers and CORS protection.
   - Structured routing architecture for lost and found pet reports.
   - Media upload pipeline design for photos and videos.
   - Global 404 and structured error handling middlewares.
7. **Architecture:** Layered TypeScript Express architecture (`server/src/server.ts`, `server/src/app.ts`).
8. **Backend Functionality:** HTTP server lifecycle, logging middleware, routing handlers.
9. **Frontend Functionality:** Web frontend scaffolding.
10. **Database Structure:** Schema design for `PetPosts` (species, breed, last seen location, photos, contact).
11. **APIs and Integrations:** REST API endpoints.
12. **Current Completion Status:** Working Prototype (Backend foundation).
13. **Interesting Engineering Decisions:** Configured strict TypeScript compiler checks and security headers early in development to ensure production safety.
14. **Technical Limitations:** Database integration (MongoDB/PostgreSQL) partially staged.
15. **Potential Improvements:** Geofenced push notifications alerting neighbors within 5km when a pet is reported missing.
16. **GitHub URL:** https://github.com/Keshavgg/furfinders
17. **Live Deployment URL:** Local development service.

---

## Project 17: Local Explorer Node.js Server (`local_explorer`)

1. **Project Name:** Local Explorer Static HTTP Server & Map Demo
2. **Project Type:** Raw Node.js Web Server & Frontend Map
3. **Main Purpose:** Zero-dependency native Node.js HTTP server delivering an interactive map and location exploration interface.
4. **Problem Being Solved:** Understanding raw HTTP request/response mechanics and MIME type streaming without framework abstractions (Express/Koa).
5. **Technologies Used:** Node.js (`node:http`, `node:fs`, `node:path`), Vanilla JavaScript, CSS3, HTML5
6. **Main Implemented Features:**
   - Raw HTTP server implementation handling file routing, status codes (200, 404, 500), and MIME type negotiation (`.html`, `.css`, `.js`, `.json`, `.png`, `.jpg`).
   - Interactive map UI (`app.js`, `styles.css`, `index.html`) demonstrating local landmark discovery.
7. **Architecture:** Monolithic single-file server (`server.js`) using native Node.js standard libraries.
8. **Backend Functionality:** File system streaming, path traversal protection, error handling.
9. **Frontend Functionality:** Interactive map view and location markers.
10. **Database Structure:** Flat file assets.
11. **APIs and Integrations:** None (zero third-party dependencies).
12. **Current Completion Status:** Learning Project / Working Prototype.
13. **Interesting Engineering Decisions:** Built without `node_modules` or dependencies, proving deep mastery of core Node.js runtime primitives.
14. **Technical Limitations:** Lacks compression, clustering, and HTTP/2 streaming.
15. **Potential Improvements:** Add gzip compression and caching headers.
16. **GitHub URL:** Technical submission codebase (available on request).
17. **Live Deployment URL:** Localhost instance (`Local development server / Demo on request`).

---

## Project 18: Visa Enterprise Sourcing Platform Automation ("Goro") — Verified Internship

1. **Project Name:** Goro — Enterprise Sourcing Automation Platform (Visa)
2. **Project Type:** Enterprise Backend, Retrieval Engine & Workflow Automation
3. **Main Purpose:** Core backend system developed inside Visa's Technology Leadership Team (TLT) Special Projects Group to automate vendor sourcing workflows, intake forms, and high-availability data layers.
4. **Problem Being Solved:** Sourcing and procurement teams spent hundreds of hours manually keying intake data (TLMP, RAF forms) and searching vast unstructured vendor agreements across legacy relational databases.
5. **Technologies Used:**
   - **Backend:** Python, FastAPI, Java / Spring Boot, MySQL, Docker, Kubernetes (K8s)
   - **Retrieval & AI:** BM25 lexical ranking, TF-IDF vector embeddings, ChromaDB, LangChain, LangSmith (evaluation)
   - **Infrastructure & Serving:** vLLM inference engine, AWS (EC2, S3), GitHub Actions CI/CD
6. **Main Implemented Features:**
   - Selected out of 440+ applicants to architect backend components for high-availability financial systems.
   - Built LangChain agents with dynamic tool calling and structured JSON outputs, drastically reducing manual data entry overhead and operational turnaround time.
   - Implemented dual-retrieval pipeline combining BM25 keyword matching with TF-IDF and ChromaDB semantic vectors for vendor contract discovery.
   - Optimized vLLM inference serving configurations, reducing inference latency by 40%.
   - Configured end-to-end evaluation metrics in LangSmith to benchmark LLM extraction accuracy against ground-truth contracts.
7. **Architecture:** Microservices architecture deployed on Kubernetes with a dedicated MySQL data tier, vector storage in ChromaDB, and asynchronous evaluation telemetry forwarded to LangSmith.
8. **Backend Functionality:** REST APIs, database connection pooling, vector indexing, evaluation harness, automated workflow state transitions.
9. **Frontend Functionality:** Internal enterprise UI integration.
10. **Database Structure:** MySQL relational schema storing vendor profiles, compliance statuses, and contract metadata; ChromaDB vector index.
11. **APIs and Integrations:** Goro internal APIs, ChromaDB, LangSmith, AWS S3.
12. **Current Completion Status:** Production / Enterprise Deployed (Completed during 10-week Visa internship, Jun 2026 – Aug 2026).
13. **Interesting Engineering Decisions:** Implemented hybrid lexical (BM25) and dense semantic retrieval to overcome legal terminology mismatches that pure vector embeddings routinely failed to retrieve accurately.
14. **Technical Limitations:** Internal enterprise intellectual property; source code remains within Visa's secure enterprise boundary.
15. **Potential Improvements:** Production scale-out across global Visa regional hubs.
16. **GitHub URL:** Enterprise confidential (verified via official Visa Service Certificate, and MAIT 60-page Industrial Training Report).
17. **Live Deployment URL:** Internal Visa Enterprise Network.

---

## Project 19: TimePay Generative AI Chatbot (NPST) — Verified Internship

1. **Project Name:** TimePay Customer Support Conversational Agent (NPST)
2. **Project Type:** Generative AI & High-Throughput Java Spring Boot Microservice
3. **Main Purpose:** AI-powered customer support chatbot automating financial query resolution and transaction status checks for TimePay digital payment users.
4. **Problem Being Solved:** High volume of repetitive Tier-1 banking queries (transaction failures, refund timelines, account limits) overwhelmed human support agents.
5. **Technologies Used:**
   - **Backend:** Java 17, Spring Boot, Spring Data JPA, Hibernate, MySQL, REST APIs
   - **AI/NLP:** RAG (Retrieval-Augmented Generation), vector embeddings, few-shot prompt engineering
6. **Main Implemented Features:**
   - Engineered and managed AI conversational chatbot answering customer support queries with contextual RAG.
   - Built scalable Java Spring Boot backend microservices ensuring reliable data persistence and predictable throughput.
   - Increased query resolution for routine banking questions without human intervention.
   - Built systematic answer accuracy evaluation pipeline scoring model outputs against validated banking support benchmarks.
7. **Architecture:** Microservice architecture with Spring Boot REST API orchestrating business logic and database access, interacting with an NLP embedding model and vector knowledge store.
8. **Backend Functionality:** Spring MVC request routing, Spring Data JPA persistence, transaction management, connection pooling, and token-rate limiting.
9. **Frontend Functionality:** Web and mobile chat widget integration.
10. **Database Structure:** MySQL schema storing conversation transcripts, resolution flags, feedback ratings, and user profiles.
11. **APIs and Integrations:** TimePay core transaction APIs, vector store API.
12. **Current Completion Status:** Production Deployed (Completed during NPST internship, Jun 2024 – Aug 2024).
13. **Interesting Engineering Decisions:** Engineered rigid few-shot guardrails into prompt templates to prevent hallucination of non-existent financial charges or incorrect banking policies.
14. **Technical Limitations:** Enterprise proprietary code governed by NPST NDAs.
15. **Potential Improvements:** Voice AI telephony integration for automated call-center handling.
16. **GitHub URL:** Enterprise confidential (verified via NPST internship service certificate).
17. **Live Deployment URL:** Integrated into TimePay production mobile apps.

---

## Project 20: Clash Royale AI & Autonomous Gameplay — Concept / Experimental Lead

1. **Project Name:** Clash Royale Autonomous Strategy & Gameplay Agent
2. **Project Type:** Reinforcement Learning / Computer Vision Gaming Experiment
3. **Main Purpose:** Investigating real-time decision-making, elixir budget allocation, and tile placement strategies for autonomous mobile game agents.
4. **Problem Being Solved:** High-speed real-time strategy games require spatial visual perception, adversary intent prediction, and micro-second resource optimization under partial observability.
5. **Technologies Used (Intended/Exploratory):** Python, OpenCV (screen frame capture / template matching), Reinforcement Learning (DQN / PPO), PyTorch, ADB (Android Debug Bridge) for touch injection
6. **Main Implemented Features:** Concept and architecture design for real-time elixir tracking, card recognition from visual bounding boxes, and offensive/defensive placement policies.
7. **Architecture:** Perception Layer (OpenCV screen capture via ADB) -> Game State Engine (Elixir counter, active troop tracking) -> Policy Network (RL decision agent) -> Action Dispatcher (ADB touch events).
8. **Backend Functionality:** Computer vision screen parsing and state evaluation.
9. **Frontend Functionality:** Real-time visual overlay showing agent confidence and tile heatmaps.
10. **Database Structure:** Replay memory buffer for off-policy RL training.
11. **APIs and Integrations:** Android Debug Bridge (ADB).
12. **Current Completion Status:** Concept / Proposed Idea (Investigated lead; no production code repository currently located on disk).
13. **Interesting Engineering Decisions:** Decoupling perception from policy execution to enable running inference on low-latency frame downsamples while maintaining full-resolution capture.
14. **Technical Limitations:** Strict anti-cheat protections on live game servers; latency of ADB touch injection.
15. **Potential Improvements:** Train agent against recorded tournament replays before evaluating on sandbox environments.
16. **GitHub URL:** Uncommitted experimental research.
17. **Live Deployment URL:** N/A.

---

## Project 21: AI Operating System / Desktop Environment — Experimental Lead

1. **Project Name:** AI Operating System / Desktop Agent Environment
2. **Project Type:** System-Level AI Agent Architecture & Tool Orchestration
3. **Main Purpose:** Investigating autonomous OS-level task execution, browser automation, and multi-tool orchestration through desktop environments (represented by `OmniRoute.app` and `Orbit Travel OS`).
4. **Problem Being Solved:** Bridging high-level natural language user goals with low-level operating system actions (file manipulation, browser interactions, command-line execution).
5. **Technologies Used:** Electron, Node.js, TypeScript, Python, LLMLingua (context compression), Devin Bridge fixtures, Chromium Browser Pool
6. **Main Implemented Features:**
   - Packaged desktop application framework (`OmniRoute.app`) integrating `@omniroute/opencode-plugin`, `open-sse`, and `packages/browser-pool`.
   - Context window compression engine (`llmlingua`) reducing prompt token consumption during long-running desktop sessions.
   - End-to-end workspace test fixtures for agentic tool execution.
7. **Architecture:** Multi-process Electron runtime: Main process manages system windows and native permissions; Renderer processes render UI; background Node.js worker pools manage browser instances and LLM streaming via Server-Sent Events (SSE).
8. **Backend Functionality:** SSE stream routing, headless browser pool lifecycle, prompt compression pipelines.
9. **Frontend Functionality:** Desktop windowing interface with active process monitors and task consoles.
10. **Database Structure:** Local configuration store and session state archives.
11. **APIs and Integrations:** LLM completion APIs, Chrome DevTools Protocol (CDP).
12. **Current Completion Status:** Experimental Project / Working Prototype.
13. **Interesting Engineering Decisions:** Integrated LLMLingua prompt compression directly into the SSE stream dispatcher to sustain multi-hour agent sessions within strict context limits.
14. **Technical Limitations:** High memory overhead of concurrent headless Chromium browser instances.
15. **Potential Improvements:** Lightweight headless browser pooling and sandboxed container isolation.
16. **GitHub URL:** Packaged desktop application (macOS universal bundle).
17. **Live Deployment URL:** Desktop application build.
