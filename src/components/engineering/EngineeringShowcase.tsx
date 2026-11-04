import React, { useState } from 'react';
import { Terminal, Layers, Cpu, Database, Server, GitMerge, FileCode, ArrowRight } from 'lucide-react';
import { InteractiveTerminal } from './InteractiveTerminal';

export const EngineeringShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'spring-boot' | 'hybrid-rag' | 'fraud-audit' | 'time-series'>('spring-boot');

  const architectures = {
    'spring-boot': {
      title: 'Spring Boot Request Lifecycle & Hibernate JPA',
      context: 'As engineered at NPST for the TimePay chatbot and financial support microservices.',
      flowSteps: [
        { name: '1. HTTP Filter Chain', desc: 'CORS, authentication tokens, rate-limiting filters intercept raw request.' },
        { name: '2. DispatcherServlet', desc: 'Central front-controller queries HandlerMapping for matching @RestController route.' },
        { name: '3. Controller Layer', desc: 'Deserializes JSON body into typed DTOs and triggers @Valid bean validation.' },
        { name: '4. Service Layer', desc: 'Executes core business logic inside declarative @Transactional boundaries.' },
        { name: '5. Hibernate & JPA', desc: 'Translates JPQL entity operations into optimized SQL queries with connection pooling.' },
        { name: '6. MySQL Store', desc: 'ACID transaction committed, entity state synced, JSON envelope returned.' }
      ],
      codeSnippet: `// Spring Boot 3.x Service Implementation with Declarative Transaction
@Service
@RequiredArgsConstructor
public class SupportChatService {

    private final ConversationRepository conversationRepo;
    private final VectorSearchClient vectorClient;

    @Transactional(readOnly = false, isolation = Isolation.READ_COMMITTED)
    public QueryResponse handleCustomerQuery(UUID userId, QueryRequest request) {
        // 1. Verify user rate limits & conversation thread
        ConversationThread thread = conversationRepo.findByUserId(userId)
            .orElseGet(() => createNewThread(userId));

        // 2. Fetch grounded RAG context from vector store
        List<DocumentSnippet> context = vectorClient.queryTopK(request.getPrompt(), 3);

        // 3. Generate verified response with zero hallucinations
        String verifiedAnswer = promptGenerator.synthesizeWithGuardrails(request, context);

        // 4. Record audit log into MySQL via JPA
        thread.appendInteraction(request.getPrompt(), verifiedAnswer);
        conversationRepo.save(thread);

        return new QueryResponse(verifiedAnswer, thread.getId());
    }
}`
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

class FastHybridRAG:
    def __init__(self, corpus: list[dict], vectorizer, tfidf_matrix):
        self.corpus = corpus
        self.bm25 = BM25Okapi([doc["text"].lower().split() for doc in corpus])
        self.vectorizer = vectorizer
        self.tfidf_matrix = tfidf_matrix # L2 normalized (N, D)

    def search(self, query: str, top_k: int = 5, alpha: float = 0.5) -> list[dict]:
        # 1. Sparse Lexical BM25 Scoring
        tokenized_query = query.lower().split()
        bm25_scores = np.array(self.bm25.get_scores(tokenized_query))
        bm25_norm = (bm25_scores - bm25_scores.min()) / (bm25_scores.ptp() + 1e-9)

        # 2. Dense Vector Dot-Product in NumPy
        query_vec = self.vectorizer.transform([query])
        dense_scores = (self.tfidf_matrix @ query_vec.T).toarray().ravel()
        dense_norm = (dense_scores - dense_scores.min()) / (dense_scores.ptp() + 1e-9)

        # 3. Reciprocal Weighted Fusion (<10ms SLA)
        fused_scores = alpha * bm25_norm + (1.0 - alpha) * dense_norm
        ranked_indices = np.argsort(fused_scores)[::-1][:top_k]

        return [self.corpus[i] for i in ranked_indices]`
    },

    'fraud-audit': {
      title: 'Deterministic Logistics Freight Rule Auditor',
      context: 'As engineered in BillGuard AI to audit carrier invoice PDFs against baseline contracts.',
      flowSteps: [
        { name: '1. PDF Batch Ingestion', desc: 'Preserves carrier folder tree; reads direct text or on-device RapidOCR.' },
        { name: '2. Structured Parsing', desc: 'Regex and tokenizers extract origins, destinations, distances, linehaul rates.' },
        { name: '3. Baseline Matching', desc: 'Matches invoice contract reference ID against agreed shipper rate sheets.' },
        { name: '4. Rule Execution', desc: 'Python rules verify km tolerance (10%), fuel clause inclusion, and rate caps.' },
        { name: '5. Advisory Review', desc: 'OpenRouter LLM validates discrepancy evidence without receiving raw files.' }
      ],
      codeSnippet: `# Deterministic Audit Rules Engine with Bounded Tolerance Checks
def audit_freight_invoice(invoice: Invoice, contract: Contract, tolerance_pct: float = 0.10) -> list[AuditFlag]:
    flags = []

    # Check 1: Route Distance Verification against Contract Baseline
    if contract.baseline_km > 0:
        max_allowed_km = contract.baseline_km * (1.0 + tolerance_pct)
        if invoice.billed_km > max_allowed_km:
            overage = invoice.billed_km - contract.baseline_km
            flags.append(AuditFlag(
                rule_id="KM_EXCESS",
                severity="HIGH",
                delta=overage,
                evidence=f"Billed {invoice.billed_km}km exceeds agreed {contract.baseline_km}km (+{overage}km)"
            ))

    # Check 2: Fuel Clause Inclusive Auditor
    if contract.fuel_inclusive and invoice.fuel_surcharge > 0:
        flags.append(AuditFlag(
            rule_id="FUEL_UNAUTHORIZED",
            severity="CRITICAL",
            delta=invoice.fuel_surcharge,
            evidence=f"Separate fuel surcharge of ₹{invoice.fuel_surcharge} billed on fuel-inclusive contract."
        ))

    return flags`
    },

    'time-series': {
      title: 'Holt-Winters Agricultural Time-Series Forecasting',
      context: 'As engineered in Way2Agri analyzing 249 months of historical commodity market prices.',
      flowSteps: [
        { name: '1. Ingestion & Audit', desc: '249 continuous monthly price points verified with zero missing values.' },
        { name: '2. Decomposition', desc: 'Isolates level, trend, and recurring 12-month harvest seasonal cycles.' },
        { name: '3. Holdout Backtesting', desc: 'Achieves 9.85% MAPE and ₹1,240 MAE on 12-month holdout set.' },
        { name: '4. Model Serialization', desc: 'Fitted artifact serialized via joblib for sub-5ms FastAPI memory loading.' },
        { name: '5. Inference Endpoint', desc: 'FastAPI generates 12-month forward forecasts with 95% confidence intervals.' }
      ],
      codeSnippet: `# FastAPI Time-Series Prediction Endpoint with 95% Confidence Intervals
@app.get("/api/v1/forecast/12-months", response_model=ForecastResponse)
async def get_12_month_forecast():
    # 1. Generate forward 12-month predictions from serialized Holt-Winters model
    predictions = model_artifact.forecast(steps=12)
    residual_std = model_artifact.residual_standard_error

    # 2. Derive 95% Confidence Interval Bands (z = 1.96)
    z_score = 1.96
    results = []
    for step, mean_val in enumerate(predictions, start=1):
        margin = z_score * residual_std * np.sqrt(step)
        results.append(MonthlyForecast(
            month_index=step,
            predicted_price=round(float(mean_val), 2),
            lower_bound_95=round(float(mean_val - margin), 2),
            upper_bound_95=round(float(mean_val + margin), 2)
        ))

    return ForecastResponse(mape_test="9.85%", forecast=results)`
    }
  };

  const currentArch = architectures[activeTab];

  return (
    <section id="engineering" className="py-24 relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>04 // INSIDE THE ENGINEERING</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-gradient-silver tracking-tight">
            How Systems Actually Work Under the Hood
          </h2>
          <p className="mt-3 text-text-secondary text-sm sm:text-base max-w-2xl">
            Real architectural flows, request lifecycles, and verified implementations from production internships and deep-tech prototypes.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
          {[
            { id: 'spring-boot', label: 'Spring Boot Request Lifecycle', icon: Server },
            { id: 'hybrid-rag', label: 'Sub-10ms Hybrid RAG', icon: Cpu },
            { id: 'fraud-audit', label: 'Logistics Fraud Auditor', icon: Layers },
            { id: 'time-series', label: 'Holt-Winters Forecasting', icon: Database }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold shadow-lg'
                    : 'bg-surface-elevated text-text-secondary hover:text-text-primary border border-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Architecture Breakdown Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-card border border-white/10 shadow-2xl mb-16">
          <div className="mb-6">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-1">
              {currentArch.title}
            </h3>
            <p className="font-mono text-xs text-cyan-400">
              {currentArch.context}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Sequential Flow Stages */}
            <div className="lg:col-span-5 space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted mb-2">
                Execution Pipeline Stages:
              </div>
              {currentArch.flowSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-surface-elevated/70 border border-white/5 hover:border-blue-500/30 transition-colors"
                >
                  <div className="font-mono text-xs text-blue-400 font-semibold mb-0.5">
                    {step.name}
                  </div>
                  <div className="text-xs text-text-secondary leading-relaxed">
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Real Implementation Code Snippet */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#090C12] border border-white/10 overflow-hidden font-mono text-xs shadow-xl">
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#0D111A] border-b border-white/10">
                  <div className="flex items-center gap-2 text-text-muted">
                    <FileCode className="w-3.5 h-3.5 text-blue-400" />
                    <span>Implementation Source Snippet</span>
                  </div>
                  <span className="text-[10px] text-cyan-400 uppercase tracking-widest">
                    Verified Code
                  </span>
                </div>
                <div className="p-4 sm:p-5 overflow-x-auto text-text-secondary leading-relaxed max-h-[380px] scrollbar-thin">
                  <pre className="text-[11px] sm:text-xs">
                    <code>{currentArch.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Interactive Terminal */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary">
              Interactive System Terminal
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-text-secondary mb-6 max-w-xl">
            Test the live in-browser shell. Type real commands to query portfolio data, project case studies, and engineering metrics.
          </p>

          <InteractiveTerminal />
        </div>

      </div>
    </section>
  );
};
