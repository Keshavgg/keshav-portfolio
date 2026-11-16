import React, { useState } from 'react';
import { Terminal, Layers, Cpu, Server, Mic, Sparkles } from 'lucide-react';
import { InteractiveTerminal } from './InteractiveTerminal';

export const EngineeringShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'voice-bridge' | 'multi-agent' | 'vllm' | 'hybrid-rag'>('voice-bridge');

  const architectures = {
    'voice-bridge': {
      title: 'Gym-World Full-Duplex Audio Bridge & Telephony Simulator',
      context: 'As engineered at Atlys for testing voice AI conversational agents via automated agent-to-agent phone calls.',
      flowSteps: [
        { name: '1. Telephony Webhook', desc: 'Inbound Twilio Media Stream webhook intercepted with HMAC-SHA256 signature verification.' },
        { name: '2. Python Audio Router', desc: 'Asynchronous event loop receives raw G.711 u-law audio chunks over WebSockets.' },
        { name: '3. ElevenLabs Bridge', desc: 'Converts and streams bidirectional PCM audio frames with sub-200ms latency.' },
        { name: '4. Speaker Arbitration', desc: 'Active speaker management arbitrates interrupts, preventing audio frame buffer bloat.' },
        { name: '5. SSE Transcripts', desc: 'Emits live tokenized call transcripts over Server-Sent Events to monitoring dashboards.' },
        { name: '6. PostgreSQL Store', desc: 'Persists session state, latency percentiles, and call telemetry to database.' }
      ],
      codeSnippet: `# Gym-World Bidirectional Audio Bridge (Python 3.12 + WebSockets + SSE)
import asyncio
import json
import hmac
import hashlib
from fastapi import FastAPI, WebSocket, Request, HTTPException
from sse_starlette.sse import EventSourceResponse

app = FastAPI()

async def audio_bridge_loop(twilio_ws: WebSocket, elevenlabs_ws: WebSocket, call_sid: str):
    """Full-duplex low-latency audio packet router (<200ms round-trip)."""
    async def twilio_to_eleven():
        async for msg in twilio_ws.iter_text():
            data = json.loads(msg)
            if data["event"] == "media":
                # Forward inbound raw audio frame directly to ElevenLabs
                payload = {"user_audio_chunk": data["media"]["payload"]}
                await elevenlabs_ws.send_text(json.dumps(payload))
            elif data["event"] == "stop":
                break

    async def eleven_to_twilio():
        async for msg in elevenlabs_ws.iter_text():
            event = json.loads(msg)
            if "audio_event" in event:
                # Deliver outbound synthetic voice to Twilio stream
                twilio_chunk = {
                    "event": "media",
                    "streamSid": call_sid,
                    "media": {"payload": event["audio_event"]["audio_base_64"]}
                }
                await twilio_ws.send_text(json.dumps(twilio_chunk))

    # Run full-duplex pipelines concurrently without deadlock
    await asyncio.gather(twilio_to_eleven(), eleven_to_twilio())`
    },

    'multi-agent': {
      title: 'LangGraph 4-Agent Research Swarm with Critic Verification',
      context: 'As engineered in ResearchMind and Visa Special Projects data-ingestion workflows.',
      flowSteps: [
        { name: '1. Planner Agent', desc: 'Decomposes complex research brief into targeted search queries and scope boundaries.' },
        { name: '2. Search & Scraper', desc: 'Executes parallel Tavily API calls and deep BeautifulSoup HTML text extractions.' },
        { name: '3. Synthesis Agent', desc: 'Aggregates multi-source evidence into structured markdown reports with source links.' },
        { name: '4. Critic Agent Loop', desc: 'Evaluates each claim against raw extracted text, flagging unsupported assertions.' },
        { name: '5. Iterative Refinement', desc: 'Auto-triggers re-search if confidence drops below 0.85; outputs final report.' }
      ],
      codeSnippet: `# LangGraph 4-Agent Research Pipeline with Evaluator-Optimizer Loop
from langgraph.graph import StateGraph, END
from typing import TypedDict, List

class AgentState(TypedDict):
    topic: str
    queries: List[str]
    scraped_docs: List[dict]
    draft_report: str
    critic_notes: str
    approved: bool

workflow = StateGraph(AgentState)

# Define specialized worker nodes
workflow.add_node("search_agent", run_tavily_search)
workflow.add_node("scrape_agent", run_deep_scraper)
workflow.add_node("synthesis_agent", run_report_synthesizer)
workflow.add_node("critic_agent", run_factual_critic)

# Conditional routing based on critic validation
def review_condition(state: AgentState):
    if state["approved"]:
        return END
    return "search_agent"  # Self-healing feedback loop

workflow.add_conditional_edges("critic_agent", review_condition)
app = workflow.compile()`
    },

    'vllm': {
      title: 'vLLM Model Serving & PagedAttention Optimization',
      context: 'As engineered at Visa (Special Projects Group), reducing model inference latency by 40%.',
      flowSteps: [
        { name: '1. Client REST Request', desc: 'Enterprise data-ingestion pipeline submits prompt batch to FastAPI gateway.' },
        { name: '2. Continuous Batching', desc: 'vLLM groups incoming requests dynamically at token-level rather than sequence-level.' },
        { name: '3. PagedAttention Memory', desc: 'Allocates KV-cache non-contiguously in virtual memory pages, slashing wastage to <4%.' },
        { name: '4. Low-Latency Inference', desc: 'Delivers 40% reduction in p99 latency compared to standard HuggingFace pipeline.' },
        { name: '5. Structured Pydantic Output', desc: 'Forces JSON schema conformance via grammar-constrained token masks.' }
      ],
      codeSnippet: `# vLLM Model Serving Configuration on AWS EC2
# Slashing p99 inference latency by 40% via PagedAttention
from vllm import LLM, SamplingParams
from pydantic import BaseModel

class ProcurementRecord(BaseModel):
    vendor_id: str
    contract_total: float
    line_items: list[str]

llm = LLM(
    model="meta-llama/Llama-3.1-8B-Instruct",
    tensor_parallel_size=1,
    max_model_len=4096,
    gpu_memory_utilization=0.90,
    enable_prefix_caching=True  # Reuses common system prompt KV cache
)

sampling_params = SamplingParams(
    temperature=0.1,
    max_tokens=512,
    guided_json=ProcurementRecord.model_json_schema()
)`
    },

    'hybrid-rag': {
      title: 'Sub-10ms In-Memory Hybrid RAG Architecture',
      context: 'As engineered in Orbit Travel OS indexing 1,170+ items across flights, luxury stays, and visas.',
      flowSteps: [
        { name: '1. User Query', desc: 'Natural language travel brief submitted to FastAPI search endpoint.' },
        { name: '2. Sparse BM25 Index', desc: 'Extracts exact keyword matches for airline codes, city names, and hotel brands.' },
        { name: '3. Dense TF-IDF Embeddings', desc: 'Vectorized in NumPy with L2-normalization for semantic vibe matching.' },
        { name: '4. Min-Max Score Fusion', desc: 'Combines lexical and dense vector scores using balanced weighted reciprocal rank.' },
        { name: '5. Context Window Assembly', desc: 'Sub-10ms response delivered to client with live price splits and memory pills.' }
      ],
      codeSnippet: `# In-Memory Sub-10ms Hybrid RAG Engine (NumPy + BM25)
import numpy as np
from rank_bm25 import BM25Okapi

class HybridRetriever:
    def __init__(self, catalog: list[dict]):
        self.catalog = catalog
        tokenized_corpus = [item["search_text"].lower().split() for item in catalog]
        self.bm25 = BM25Okapi(tokenized_corpus)
        self.dense_matrix = self._build_l2_normalized_vectors(catalog)

    def search(self, query: str, top_k: int = 5, alpha: float = 0.5):
        # 1. Lexical BM25 ranking (exact keywords)
        bm25_scores = self.bm25.get_scores(query.lower().split())
        norm_bm25 = (bm25_scores - bm25_scores.min()) / (bm25_scores.max() - bm25_scores.min() + 1e-9)

        # 2. Vectorized cosine similarity (semantic intent)
        q_vec = self._vectorize_query(query)
        dense_scores = np.dot(self.dense_matrix, q_vec)

        # 3. Score fusion (<10ms SLA)
        fused = alpha * norm_bm25 + (1 - alpha) * dense_scores
        top_indices = np.argsort(fused)[::-1][:top_k]
        return [self.catalog[i] for i in top_indices]`
    }
  };

  const currentArch = architectures[activeTab];

  return (
    <section id="simulator" className="py-24 border-b border-[var(--border-color)] bg-[var(--bg-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-8 border-b border-[var(--border-color)] mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--text-gray-color)] mb-2">
              [ 05 // SYSTEM LAB & ARCHITECTURE ]
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-[var(--text-color)] tracking-tight uppercase">
              INTERACTIVE RUNTIME ARCHITECTURE SIMULATOR
            </h2>
            <p className="mt-2 font-mono text-xs sm:text-sm text-[var(--text-gray-color)] max-w-2xl">
              Inspect request lifecycles, full-duplex voice bridge code, and live terminal commands.
            </p>
          </div>
          <div className="font-mono text-xs text-[var(--text-gray-color)] uppercase tracking-wider shrink-0">
            LOW-LATENCY VERIFIED // 2026
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 font-mono text-xs uppercase tracking-wider scrollbar-none">
          <button
            onClick={() => setActiveTab('voice-bridge')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full border transition-all ${
              activeTab === 'voice-bridge'
                ? 'bg-[var(--text-color)] text-[var(--bg-color)] border-[var(--text-color)] font-semibold'
                : 'bg-[var(--card-bg)] text-[var(--text-color)] border-[var(--border-color)] hover:border-[var(--text-gray-color)]'
            }`}
          >
            <Mic className="w-3.5 h-3.5 text-emerald-500" />
            <span>VOICE AUDIO BRIDGE (ATLYS)</span>
          </button>

          <button
            onClick={() => setActiveTab('multi-agent')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full border transition-all ${
              activeTab === 'multi-agent'
                ? 'bg-[var(--text-color)] text-[var(--bg-color)] border-[var(--text-color)] font-semibold'
                : 'bg-[var(--card-bg)] text-[var(--text-color)] border-[var(--border-color)] hover:border-[var(--text-gray-color)]'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-blue-500" />
            <span>LANGGRAPH 4-AGENT SWARM</span>
          </button>

          <button
            onClick={() => setActiveTab('vllm')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full border transition-all ${
              activeTab === 'vllm'
                ? 'bg-[var(--text-color)] text-[var(--bg-color)] border-[var(--text-color)] font-semibold'
                : 'bg-[var(--card-bg)] text-[var(--text-color)] border-[var(--border-color)] hover:border-[var(--text-gray-color)]'
            }`}
          >
            <Server className="w-3.5 h-3.5 text-amber-500" />
            <span>vLLM SERVING (VISA 40% CUT)</span>
          </button>

          <button
            onClick={() => setActiveTab('hybrid-rag')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full border transition-all ${
              activeTab === 'hybrid-rag'
                ? 'bg-[var(--text-color)] text-[var(--bg-color)] border-[var(--text-color)] font-semibold'
                : 'bg-[var(--card-bg)] text-[var(--text-color)] border-[var(--border-color)] hover:border-[var(--text-gray-color)]'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-cyan-500" />
            <span>HYBRID RAG (&lt;10ms)</span>
          </button>
        </div>

        {/* Main Architectural Visualizer Card */}
        <div className="border border-[var(--border-color)] bg-[var(--card-bg)] rounded-xl p-6 sm:p-8 lg:p-10 mb-12 shadow-sm font-mono">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[var(--border-color)] mb-8 gap-4">
            <div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[var(--text-color)] uppercase tracking-tight">
                {currentArch.title}
              </h3>
              <p className="text-xs text-[var(--text-gray-color)] mt-1 uppercase">
                {currentArch.context}
              </p>
            </div>
            <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 uppercase tracking-widest shrink-0">
              PRODUCTION TESTED
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Flow Steps */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-[10px] text-[var(--text-gray-color)] uppercase tracking-widest font-bold mb-2">
                // SYSTEM EXECUTION LIFECYCLE
              </div>
              <div className="space-y-2">
                {currentArch.flowSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-color)] text-xs"
                  >
                    <div className="font-bold text-[var(--text-color)] uppercase">
                      {step.name}
                    </div>
                    <div className="text-[var(--text-gray-color)] text-[11px] mt-0.5 leading-snug">
                      {step.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="lg:col-span-7 border border-[var(--border-color)] bg-[var(--bg-color)] rounded-lg p-5 overflow-hidden">
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3 mb-4 text-[11px] text-[var(--text-gray-color)] uppercase">
                <span>VERIFIED SOURCE IMPLEMENTATION</span>
                <span>PYTHON / ASYNC</span>
              </div>
              <pre className="text-[11px] leading-relaxed text-[var(--text-color)] overflow-x-auto font-mono max-h-[380px] scrollbar-thin">
                <code>{currentArch.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Shell Terminal */}
        <div id="engineering" className="pt-4">
          <div className="mb-4 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[var(--text-gray-color)]">
            <span className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[var(--text-color)]" />
              <span>LIVE ENGINEERING SHELL (COMMAND RUNNER)</span>
            </span>
            <span>TYPE 'HELP' OR CLICK QUICK COMMANDS</span>
          </div>

          <InteractiveTerminal />
        </div>

      </div>
    </section>
  );
};
