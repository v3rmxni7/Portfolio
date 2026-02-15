"use client";

import React from "react";
import { ExpandableSection } from "./ui/ExpandableSection";
import { ArchitectureDiagram } from "./ui/ArchitectureDiagram";
import { CodeBlock } from "./ui/CodeBlock";
import { MetricCard } from "./ui/MetricCard";

export interface TechStackGroup {
  [category: string]: string[];
}

export interface Metric {
  label: string;
  value: string;
  sublabel?: string;
}

export interface CaseStudyData {
  title: string;
  problem: string;
  architecture: string;
  techStack: TechStackGroup;
  metrics: Metric[];
  diagramName: string;
  deepDive: {
    challenges: string[];
    solutions: string[];
    codeSnippet: string;
    language: string;
  };
}

interface ProjectCaseStudyProps {
  data: CaseStudyData;
}

export const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({ data }) => {
  return (
    <div className="group rounded-2xl bg-slate-950/90 border border-slate-800 overflow-hidden hover:border-emerald-500/60 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/90 shadow-md shadow-black/40">
      {/* Header */}
      <div className="px-6 md:px-8 py-6 md:py-8 border-b border-slate-800">
        <h3 className="text-xl md:text-2xl font-bold text-slate-50 group-hover:text-emerald-400 transition-colors mb-3">
          {data.title}
        </h3>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          {data.problem}
        </p>
      </div>

      {/* Architecture Overview */}
      <div className="px-6 md:px-8 py-6 md:py-8 border-b border-slate-800/50">
        <h4 className="text-sm md:text-base font-semibold text-emerald-300 mb-4 uppercase tracking-wider">
          Architecture Overview
        </h4>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
          {data.architecture}
        </p>
        <ArchitectureDiagram
          name={data.diagramName}
          caption="System architecture diagram"
        />
      </div>

      {/* Tech Stack Grid */}
      <div className="px-6 md:px-8 py-6 md:py-8 border-b border-slate-800/50">
        <h4 className="text-sm md:text-base font-semibold text-emerald-300 mb-4 uppercase tracking-wider">
          Technology Stack
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(data.techStack).map(([category, techs]) => (
            <div key={category} className="space-y-2">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.18em]">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-slate-900/80 border border-slate-700/80 text-slate-200 px-2.5 py-1 rounded-lg hover:border-emerald-500/60 hover:text-emerald-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics Row */}
      <div className="px-6 md:px-8 py-6 md:py-8 border-b border-slate-800/50">
        <h4 className="text-sm md:text-base font-semibold text-emerald-300 mb-4 uppercase tracking-wider">
          Impact & Results
        </h4>
        <div className="grid md:grid-cols-3 gap-4">
          {data.metrics.map((metric) => (
            <MetricCard
              key={metric.label}
              label={metric.label}
              value={metric.value}
              sublabel={metric.sublabel}
            />
          ))}
        </div>
      </div>

      {/* Expandable Deep Dive */}
      <div className="px-6 md:px-8 py-6 md:py-8">
        <ExpandableSection title="Technical Deep Dive" defaultOpen={false}>
          <div className="space-y-6">
            {/* Challenges */}
            <div>
              <h5 className="text-sm font-semibold text-emerald-300 mb-3 uppercase tracking-wider">
                Challenges
              </h5>
              <ul className="space-y-2">
                {data.deepDive.challenges.map((challenge, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-slate-300 flex items-start gap-3"
                  >
                    <span className="text-emerald-400 font-bold flex-shrink-0">
                      •
                    </span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h5 className="text-sm font-semibold text-emerald-300 mb-3 uppercase tracking-wider">
                Solutions
              </h5>
              <ul className="space-y-2">
                {data.deepDive.solutions.map((solution, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-slate-300 flex items-start gap-3"
                  >
                    <span className="text-emerald-400 font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Code Snippet */}
            <div>
              <h5 className="text-sm font-semibold text-emerald-300 mb-3 uppercase tracking-wider">
                Implementation Example
              </h5>
              <CodeBlock
                language={data.deepDive.language}
                children={data.deepDive.codeSnippet}
              />
            </div>
          </div>
        </ExpandableSection>
      </div>
    </div>
  );
};
