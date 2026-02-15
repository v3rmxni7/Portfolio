"use client";

import React from "react";
import { Code } from "lucide-react";
import { ProjectCaseStudy, CaseStudyData } from "../ProjectCaseStudy";

const CASE_STUDIES: CaseStudyData[] = [
  {
    title: "LLM Monitoring & Evaluation Pipeline",
    problem:
      "Production LLM systems require continuous validation of output quality, relevance, and schema compliance to prevent regressions and hallucinations across model iterations. Without automated evaluation, detecting degradations becomes a manual, slow process.",
    architecture:
      "Designed a multi-stage evaluation pipeline with automated checks, embedding-based similarity scoring, and centralized metric tracking via MLflow for regression analysis. The system decouples evaluation from serving to avoid latency impact on user-facing requests.",
    techStack: {
      Orchestration: ["Python", "FastAPI", "Async Workers"],
      Evaluation: ["MLflow", "Pydantic", "Embedding Similarity", "Custom Metrics"],
      Infrastructure: ["Docker", "PostgreSQL", "Redis Cache"],
      Monitoring: ["Grafana", "Prometheus"],
    },
    metrics: [
      { label: "Evaluation Latency", value: "< 200ms", sublabel: "p95" },
      { label: "Schema Validation", value: "99.8%", sublabel: "catch rate" },
      { label: "Drift Detection", value: "Real-time", sublabel: "automated" },
    ],
    diagramName: "llm-eval-pipeline",
    deepDive: {
      challenges: [
        "Balancing evaluation thoroughness with inference latency in serving path",
        "Designing deterministic metrics for non-deterministic LLM outputs",
        "Scaling evaluation across multiple model versions and prompt variants",
        "Capturing semantic drift without requiring human-labeled gold standards",
      ],
      solutions: [
        "Implemented async evaluation queue to decouple from serving path, enabling rich evaluation without user-facing latency",
        "Combined rule-based validation (Pydantic schemas) with embedding similarity for robust, deterministic scoring",
        "Built versioned prompt/model tracking in MLflow with automated test harnesses for regression detection",
        "Used embedding similarity against reference outputs with statistical thresholds for anomaly detection",
      ],
      codeSnippet: `# Pydantic-based schema validation + embedding similarity
class LLMEvaluationPipeline:
    async def evaluate_response(
        self,
        response: LLMResponse,
        expected_schema: BaseModel,
        reference_output: str
    ) -> EvalMetrics:
        # 1. Schema validation
        try:
            schema_valid = expected_schema.model_validate(
                response.parsed_output
            )
            schema_score = 1.0
        except ValidationError:
            schema_score = 0.0

        # 2. Semantic similarity
        response_embed = await self.embed_model.encode(response.text)
        ref_embed = await self.embed_model.encode(reference_output)
        similarity = cosine_similarity(response_embed, ref_embed)

        # 3. Log to MLflow with full context
        await self.mlflow_tracker.log_metrics({
            "schema_valid": schema_score,
            "similarity_score": float(similarity),
            "model_id": response.model_id,
            "prompt_version": response.prompt_hash,
            "latency_ms": response.latency,
        })

        return EvalMetrics(
            schema_valid=schema_score,
            similarity=similarity,
            timestamp=datetime.now()
        )`,
      language: "python",
    },
  },
  {
    title: "Generative UI Builder",
    problem:
      "Converting UI designs into production code remains a manual, time-consuming task. We needed a system that could understand UI from screenshots and text descriptions, then generate valid React/Tailwind code automatically.",
    architecture:
      "Engineered a multimodal GenAI system orchestrating LLM workflows with strict output validation. Accepts UI screenshots and natural language instructions, routes to vision models (LLaVA), refines with code models (CodeLlama), and validates outputs against a strict JSON schema to ensure code validity.",
    techStack: {
      Backend: ["FastAPI", "Python", "Async Workers"],
      "LLM Models": ["LLaVA", "CodeLlama", "GPT-4V"],
      Validation: ["Pydantic", "JSON Schema", "Code Linting"],
      Frontend: ["Next.js", "React", "Tailwind CSS"],
    },
    metrics: [
      {
        label: "Code Generation Success",
        value: "87%",
        sublabel: "first-attempt valid code",
      },
      {
        label: "Generation Speed",
        value: "3.2s",
        sublabel: "p95 end-to-end",
      },
      {
        label: "CSS Accuracy",
        value: "94%",
        sublabel: "style matching",
      },
    ],
    diagramName: "genui-architecture",
    deepDive: {
      challenges: [
        "LLMs hallucinate invalid JavaScript and non-existent Tailwind classes",
        "Multi-step refinement pipeline requires coordinating multiple model calls",
        "Maintaining code quality when models lack context of existing design systems",
        "Handling ambiguous UI requirements from text-only prompts",
      ],
      solutions: [
        "Implemented strict Pydantic validation at each step with fallback to rule-based corrections for common errors",
        "Built a two-stage pipeline: vision → outline, then code model → full component with explicit schema constraints",
        "Injected design system constraints as few-shot examples in prompts, including valid Tailwind utilities",
        "Added multi-turn refinement where user can provide feedback and model re-generates with context",
      ],
      codeSnippet: `# Multi-stage validated pipeline
class GenerativeUIBuilder:
    async def build_from_screenshot(
        self,
        screenshot: Image,
        user_prompt: str
    ) -> ValidatedComponent:
        # Stage 1: Vision understanding
        ui_analysis = await self.vision_model.analyze(screenshot)

        # Stage 2: Code generation with schema
        component_request = ComponentRequest(
            description=user_prompt,
            layout=ui_analysis.layout,
            colors=ui_analysis.colors,
        )

        raw_code = await self.code_model.generate(component_request)

        # Stage 3: Strict validation
        validated = ComponentValidator.validate(
            code=raw_code,
            schema=REACT_COMPONENT_SCHEMA,
            tailwind_whitelist=VALID_UTILITIES
        )

        # Stage 4: Linting & formatting
        if not validated.is_valid:
            corrected = await self.fixer.fix_common_errors(raw_code)
            validated = ComponentValidator.validate(corrected)

        return validated.component`,
      language: "python",
    },
  },
  {
    title: "FinGPT-RAG: Financial Document Q&A",
    problem:
      "Financial institutions need to answer complex questions about policies, regulations, and documents accurately. Hallucinations in financial contexts are unacceptable, requiring a grounded approach with explicit source citations.",
    architecture:
      "Built an enterprise-grade RAG system using LangChain for orchestration, FAISS for vector retrieval, and SentenceTransformers for embeddings. Vectorized 1,500+ RBI policy documents with semantic chunking, implemented multi-query retrieval for complex questions, and added citation tracking.",
    techStack: {
      "RAG Framework": ["LangChain", "LlamaIndex"],
      Embeddings: ["SentenceTransformers", "All-MiniLM"],
      "Vector Store": ["FAISS", "Pinecone"],
      Backend: ["Python", "FastAPI"],
    },
    metrics: [
      {
        label: "Retrieval Accuracy",
        value: "96.2%",
        sublabel: "top-3 includes answer",
      },
      {
        label: "Documents Indexed",
        value: "1,500+",
        sublabel: "RBI policies",
      },
      {
        label: "Query Latency",
        value: "< 500ms",
        sublabel: "p99",
      },
    ],
    diagramName: "fingpt-rag-system",
    deepDive: {
      challenges: [
        "Long, complex financial documents require intelligent chunking to maintain context without losing precision",
        "Dense regulatory language leads to ambiguous queries requiring clarification and multi-step reasoning",
        "Generic embeddings may not capture financial domain semantics effectively",
        "Ensuring retrieved context is actually relevant to the question, not just superficially similar",
      ],
      solutions: [
        "Implemented semantic-aware chunking with document structure awareness (sections, subsections) to preserve context boundaries",
        "Built multi-query retrieval strategy: original query + 2 generated variations for better coverage of complex questions",
        "Fine-tuned sentence-level embeddings on domain-specific financial Q&A pairs, improving retrieval precision",
        "Added relevance scoring beyond cosine similarity using domain-specific heuristics and answer validation",
      ],
      codeSnippet: `# Multi-query RAG with citation tracking
class FinancialRAG:
    async def answer_with_citations(
        self,
        question: str
    ) -> GroundedAnswer:
        # 1. Multi-query retrieval
        query_variations = await self.query_generator.generate(
            question,
            num_variations=2
        )
        all_queries = [question] + query_variations

        # 2. Retrieve from FAISS
        retrieved_docs = []
        for query in all_queries:
            docs = self.faiss_index.similarity_search(
                query=query,
                k=5,
                score_threshold=0.75
            )
            retrieved_docs.extend(docs)

        # 3. Deduplicate and rank
        unique_docs = self._deduplicate(retrieved_docs)
        ranked_docs = self._rank_by_relevance(unique_docs, question)

        # 4. Generate answer with citations
        context = "\\n\\n".join([
            f"[Source: {doc.metadata['file']}]\\n{doc.page_content}"
            for doc in ranked_docs[:3]
        ])

        answer = await self.llm.generate(
            prompt=self._prompt(question, context),
            citations_format="markdown"
        )

        return GroundedAnswer(
            answer=answer.text,
            citations=answer.citations,
            source_documents=ranked_docs
        )`,
      language: "python",
    },
  },
];

const SectionLabel: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center gap-2 mb-6">
    <Code className="text-emerald-400" size={22} />
    <h2 className="text-xl md:text-2xl font-semibold text-slate-50">{title}</h2>
  </div>
);

export const ProjectsCaseStudies: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-24 px-5 max-w-6xl mx-auto min-h-[70vh]"
    >
      <SectionLabel title="Case Studies" />
      <p className="text-sm md:text-base text-slate-200 mb-12 max-w-2xl">
        Deep dives into production systems showcasing agentic workflows, RAG
        architectures, and LLM evaluation frameworks.
      </p>

      <div className="space-y-8">
        {CASE_STUDIES.map((caseStudy) => (
          <ProjectCaseStudy key={caseStudy.title} data={caseStudy} />
        ))}
      </div>
    </section>
  );
};
