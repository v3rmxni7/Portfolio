"use client";

import React from "react";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  desc: string;
}

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "HelloAgentic.ai",
    role: "AI Developer Intern",
    period: "Jan 2026 — Present",
    desc: "Engineered a distributed multi-agent orchestration system on FastAPI/WebSockets architecture for real-time query decomposition and multi-modal task execution at scale. Implemented dynamic LLM routing across GPT-4o, Claude, and Groq with intelligent cost-latency optimization, reducing mean inference latency by ~35% while preserving reasoning capabilities. Developed production agentic workflows with hierarchical task delegation, tool composition (web research, document intelligence, computer vision), and comprehensive execution logging for system observability. Built automated failure recovery mechanisms and sub-100ms latency tracking across distributed agent topology to improve reliability and debuggability.",
  },
];

const SectionLabel: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center gap-2 mb-6">
    <Briefcase className="text-emerald-400" size={22} />
    <h2 className="text-xl md:text-2xl font-semibold text-slate-50">{title}</h2>
  </div>
);

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-5 max-w-6xl mx-auto min-h-[70vh]">
      <SectionLabel title="Experience" />
      <p className="text-sm md:text-base text-slate-200 mb-8 max-w-2xl">
        Where I&apos;ve applied data, experimentation, and code to real business
        problems.
      </p>

      <div className="relative border-l border-slate-800 ml-3 space-y-10">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="relative pl-7">
            <span className="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-[#020617]" />
            <div className="text-slate-50 font-semibold text-lg">{exp.company}</div>
            <div className="text-emerald-300 text-sm font-medium mb-1.5">
              {exp.role}
            </div>
            <div className="text-[11px] text-slate-500 font-mono mb-3">
              {exp.period}
            </div>
            <p className="text-slate-200 text-sm leading-relaxed">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
