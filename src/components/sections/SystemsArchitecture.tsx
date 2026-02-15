"use client";

import React from "react";
import { Cpu } from "lucide-react";

const SYSTEMS_ARCHITECTURE = {
  "Orchestration & Agents": [
    "LangChain / LangGraph",
    "LlamaIndex",
    "FastAPI",
    "Multi-agent systems",
  ],
  "Evaluation & LLMOps": [
    "MLflow",
    "Pydantic",
    "Embedding similarity",
    "Prompt versioning",
  ],
  "Infrastructure & Data": [
    "Docker",
    "PostgreSQL",
    "Vector DBs (FAISS / Pinecone)",
    "Redis",
  ],
  "Frontend & Interfaces": [
    "Next.js (App Router)",
    "React",
    "Tailwind CSS",
    "WebSockets",
  ],
};

const SectionLabel: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center gap-2 mb-6">
    <Cpu className="text-emerald-400" size={22} />
    <h2 className="text-xl md:text-2xl font-semibold text-slate-50">{title}</h2>
  </div>
);

export const SystemsArchitecture: React.FC = () => {
  return (
    <section
      id="stack"
      className="py-24 px-5 border-y border-slate-900/80 bg-slate-950/80 backdrop-blur-sm min-h-[70vh]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel title="Systems Architecture" />

        <p className="text-sm md:text-base text-slate-200 mb-8 max-w-2xl">
          From designing agentic workflows and building RAG systems to deploying
          full-stack AI products in production, here&apos;s the core tech stack.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SYSTEMS_ARCHITECTURE).map(([category, skills]) => (
            <div
              key={category}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 space-y-4 shadow-md shadow-black/40 transition-transform duration-300 hover:-translate-y-1 hover:shadow-emerald-500/20"
            >
              <h3 className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.18em]">
                {category}
              </h3>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <p
                    key={skill}
                    className="text-sm text-slate-200 leading-relaxed"
                  >
                    • {skill}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
