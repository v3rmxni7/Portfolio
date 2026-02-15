"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Cpu,
  Code,
  Briefcase,
  Terminal as TerminalIcon,
  Menu,
  X,
  Zap,
  Sparkles,
} from "lucide-react";

// =========================
// DATA CONFIG
// =========================

const PROFILE = {
  name: "Nischay Vermani",
  role: "AI Engineer (Agentic AI, LLM Systems, MLOps)",
  bio: "I design and ship production-grade AI systems — from agentic workflows and RAG pipelines to evaluation, monitoring, and deployment of LLM-powered products.",
  location: "IIT Roorkee, India",
  email: "nischay_v@ee.iitr.ac.in",
  socials: {
    github: "https://github.com/v3rmxni7",
    linkedin: "https://linkedin.com/in/nischayvermani",
    instagram: "https://www.instagram.com/_nischayv/",
    twitter: "https://x.com/v3rmxni7",
  },
  tags: [
    "LLM Fine-tuning",
    "RAG Systems",
    "Multimodal Agents",
    "MLOps & Deployment",
  ],
};

const CURRENTLY_EXPLORING = [
  "Multimodal agents",
  "Function calling patterns",
  "Structured outputs",
  "RAG evals & benchmarks",
];

const TECH_STACK = {
  "Generative AI & LLMs": [
    "RAG Architecture",
    "LangChain / LangGraph",
    "LlamaIndex",
    "Fine-tuning",
    "HuggingFace Transformers",
    "Vector DBs (FAISS / Pinecone)",
  ],
  "Full Stack Engineering": [
    "Next.js (App Router)",
    "FastAPI",
    "React",
    "Tailwind CSS",
    "Docker",
    "PostgreSQL",
  ],
  "Core & Data": [
    "Python",
    "TypeScript",
    "C++",
    "PyTorch",
    "Pandas / NumPy",
    "System Design",
  ],
};

const PROJECTS = [
  {
    title: "LLM Monitoring & Evaluation Pipeline",
    tech: ["Python", "FastAPI", "MLflow", "MLOps", "LLM Evaluation"],
    desc: "Designed a production-grade LLM evaluation pipeline to monitor relevance, schema validity, and hallucinations. Engineered automated checks using Pydantic validation and embedding similarity to ensure output reliability. Tracked prompts, models, and metrics with MLflow to enable regression analysis across LLM iterations. Built monitoring views to analyze failure rates, drift trends, and response stability over time.",
    link: "", // add GitHub link if public
  },
  {
    title: "Generative UI Builder",
    tech: ["FastAPI", "Next.js", "TailwindCSS", "LLaVA", "CodeLlama"],
    desc: "Engineered a multimodal GenAI system that converts UI screenshots and text prompts into production-ready React/Tailwind components. Orchestrated LLM workflows using a structured JSON UI schema to ensure deterministic and valid outputs. Built an async FastAPI backend for image ingestion, prompt routing, and response generation. Improved reliability using schema validation, strict prompting, and fallback logic for LLM failures.",
    link: "",
  },
  {
    title: "FinGPT-RAG",
    tech: ["LangChain", "Hugging Face", "FAISS", "Python", "RAG"],
    desc: "Built an enterprise-style RAG system using LangChain and FAISS for grounded financial document Q&A. Vectorized 1,500+ RBI policy pages with SentenceTransformers to enable high-precision semantic retrieval. Conditioned LLM responses with retrieved context to reduce hallucinations and improve factual accuracy. Optimized chunking, caching, and query flow for low-latency multi-query inference workloads.",
    link: "",
  },
  {
    title: "AI Resume Analyzer & Job Matcher",
    tech: ["Python", "FastAPI", "LLMs", "RAG", "spaCy"],
    desc: "Designed an LLM-powered HR decision system for explainable resume–job matching. Integrated RAG-grounded reasoning to evaluate candidates reliably against role expectations. Enforced structured JSON outputs with schema validation for consistent and deterministic evaluations. Implemented bias-aware analysis and REST APIs to support fair, scalable hiring workflows.",
    link: "",
  },
];


const EXPERIENCE = [
  {
    company: "HelloAgentic.ai",
    role: "AI Developer Intern",
    period: "Jan 2026 — Present",
    desc: "Engineered a distributed multi-agent orchestration system on FastAPI/WebSockets architecture for real-time query decomposition and multi-modal task execution at scale. Implemented dynamic LLM routing across GPT-4o, Claude, and Groq with intelligent cost-latency optimization, reducing mean inference latency by ~35% while preserving reasoning capabilities. Developed production agentic workflows with hierarchical task delegation, tool composition (web research, document intelligence, computer vision), and comprehensive execution logging for system observability. Built automated failure recovery mechanisms and sub-100ms latency tracking across distributed agent topology to improve reliability and debuggability.",
  },
];

// =========================
// TYPES FOR PROPS
// =========================

type IconType = React.ComponentType<{ size?: number; className?: string }>;

type SocialLinkProps = {
  href: string;
  icon: IconType;
  label: string;
};

type SectionLabelProps = {
  icon: IconType;
  title: string;
};

// =========================
// UI COMPONENTS
// =========================

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-3 bg-slate-900/80 rounded-full hover:bg-emerald-500/20 hover:text-emerald-400 text-slate-100 transition-all border border-slate-700/70 hover:border-emerald-500/60 shadow-sm hover:shadow-emerald-500/20 hover:-translate-y-0.5"
  >
    <Icon size={20} />
  </a>
);

const TerminalWindow: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = `> env: python3.11
> import torch
> from transformers import AutoModelForCausalLM
> load_model("nischay/engineer-v1", device="cuda")
> loading_adapters... [LoRA]
> context_window: 128k
> system_prompt: "You are an expert AI Engineer."
> status: READY_FOR_DEPLOYMENT...`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl font-mono text-xs md:text-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-emerald-500/20">
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-2 ml-3 text-slate-400">
          <TerminalIcon size={14} />
          <span className="text-[11px]">model_inference.py</span>
        </div>
      </div>
      <div className="p-5 md:p-6 text-emerald-400 leading-relaxed whitespace-pre-wrap min-h-[160px]">
        {text}
        <span className="animate-pulse inline-block w-2 h-4 bg-emerald-500 ml-1 align-middle" />
      </div>
    </div>
  );
};

const SectionLabel: React.FC<SectionLabelProps> = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-2 mb-6">
    <Icon className="text-emerald-400" size={22} />
    <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
      {title}
    </h2>
  </div>
);

// =========================
// MAIN PAGE
// =========================

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy for active nav item
  useEffect(() => {
    const sectionIds = ["about", "experience", "stack", "projects"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  const navButtonClass = (id: string) =>
    `relative text-sm font-medium transition-colors ${
      activeSection === id ? "text-emerald-400" : "text-slate-300"
    }`;

  const navUnderline = (id: string) =>
    activeSection === id ? (
      <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500" />
    ) : null;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-emerald-500/30">
      {/* GLOW EFFECTS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-25%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/12 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-25%] left-[-10%] w-[600px] h-[600px] bg-sky-500/12 rounded-full blur-[140px]" />
      </div>

      {/* NAVIGATION */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#020617]/95 backdrop-blur-xl border-b border-slate-900"
            : "bg-gradient-to-b from-[#020617] via-[#020617]/70 to-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 h-16 md:h-20 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("about")}
            className="text-lg md:text-2xl font-mono font-bold text-slate-100 tracking-tight hover:text-emerald-400 transition-colors"
          >
            {"{ NV }"}
          </button>

          <div className="hidden md:flex gap-7 text-sm font-medium items-center">
            <button
              onClick={() => scrollToSection("about")}
              className={navButtonClass("about")}
            >
              About
              {navUnderline("about")}
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={navButtonClass("experience")}
            >
              Experience
              {navUnderline("experience")}
            </button>
            <button
              onClick={() => scrollToSection("stack")}
              className={navButtonClass("stack")}
            >
              Stack
              {navUnderline("stack")}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={navButtonClass("projects")}
            >
              Projects
              {navUnderline("projects")}
            </button>
          </div>

          <button
            className="md:hidden text-slate-200"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-[#020617]/98 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-5 py-3 flex flex-col gap-3 text-sm">
              {["about", "experience", "stack", "projects"].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-left py-1 ${
                    activeSection === id
                      ? "text-emerald-400 font-medium"
                      : "text-slate-300"
                  }`}
                >
                  {id[0].toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ABOUT / HERO (FIRST PAGE) */}
      <section
        id="about"
        className="relative pt-28 md:pt-36 pb-24 px-5 max-w-6xl mx-auto grid md:grid-cols-[1.5fr_1.1fr] gap-10 md:gap-14 items-center min-h-[90vh]"
      >
        {/* LEFT: Intro */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono text-emerald-200 mb-1 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            IIT ROORKEE&apos; 26
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-50 tracking-tight leading-tight">
              Hi, I&apos;m{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500">
                {PROFILE.name}
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-200 max-w-xl leading-relaxed">
              {PROFILE.bio}
            </p>

            {/* Hot topic tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {PROFILE.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-wide px-3 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-100 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA + Socials */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:from-emerald-400 hover:to-cyan-400 transition-all hover:-translate-y-0.5"
            >
              <Zap size={16} />
              <span>Let&apos;s connect</span>
            </a>
            <div className="flex gap-3">
              <SocialLink
                href={PROFILE.socials.github}
                icon={Github}
                label="GitHub"
              />
              <SocialLink
                href={PROFILE.socials.linkedin}
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialLink
                href={PROFILE.socials.instagram}
                icon={Instagram}
                label="Instagram"
              />
              <SocialLink
                href={PROFILE.socials.twitter}
                icon={Twitter}
                label="Twitter"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: Profile + Education + Terminal */}
        <div className="space-y-5 md:space-y-6">
          {/* Profile + Education Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-sm p-4 md:p-5 flex items-center gap-4 md:gap-5 shadow-lg shadow-slate-950/70 transition-transform duration-300 hover:-translate-y-1 hover:shadow-emerald-500/25">
            <div className="relative shrink-0">
              <div className="absolute -inset-[3px] rounded-full bg-gradient-to-tr from-emerald-500 via-cyan-400 to-indigo-500 opacity-80 blur-sm" />
              <div className="relative rounded-full overflow-hidden border border-slate-700 w-20 h-20 md:w-24 md:h-24 bg-slate-800">
                <Image
                  src="/nischay.jpg" // ensure this exists in /public
                  alt={PROFILE.name}
                  width={120}
                  height={120}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300">
                AI / ML & Full Stack
              </p>
              <p className="text-sm text-slate-100">
                I like turning messy, ambiguous ideas into shipped AI products.
              </p>
              <div className="pt-2 text-xs text-slate-300">
                <p className="font-semibold text-slate-50">
                  IIT Roorkee · B.Tech Electrical Engineering
                </p>
                <p className="font-mono text-[11px] text-slate-500">
                  2022 — Present
                </p>
              </div>
            </div>
          </div>

          <TerminalWindow />
        </div>
      </section>

      {/* CURRENTLY EXPLORING STRIP */}
      <section className="px-5 pb-4">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/95 px-4 md:px-6 py-3 flex flex-wrap items-center gap-3 text-xs md:text-sm text-slate-200 shadow-md shadow-black/40">
            <div className="inline-flex items-center gap-2 text-emerald-300 font-medium">
              <Sparkles size={16} />
              <span className="uppercase tracking-[0.18em] text-[10px] md:text-[11px]">
                Currently exploring
              </span>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {CURRENTLY_EXPLORING.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-700/80 text-[11px] md:text-xs text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE (SECOND PAGE) */}
      <section
        id="experience"
        className="py-24 px-5 max-w-6xl mx-auto min-h-[70vh]"
      >
        <SectionLabel icon={Briefcase} title="Experience" />
        <p className="text-sm md:text-base text-slate-200 mb-8 max-w-2xl">
          Where I&apos;ve applied data, experimentation, and code to real
          business problems.
        </p>

        <div className="relative border-l border-slate-800 ml-3 space-y-10">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative pl-7">
              <span className="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-[#020617]" />
              <div className="text-slate-50 font-semibold text-lg">
                {exp.company}
              </div>
              <div className="text-emerald-300 text-sm font-medium mb-1.5">
                {exp.role}
              </div>
              <div className="text-[11px] text-slate-500 font-mono mb-3">
                {exp.period}
              </div>
              <p className="text-slate-200 text-sm leading-relaxed">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK (THIRD PAGE) */}
      <section
        id="stack"
        className="py-24 px-5 border-y border-slate-900/80 bg-slate-950/80 backdrop-blur-sm min-h-[70vh]"
      >
        <div className="max-w-6xl mx-auto">
          <SectionLabel icon={Cpu} title="Technical Arsenal" />

          <p className="text-sm md:text-base text-slate-200 mb-8 max-w-2xl">
            From training and fine-tuning LLMs to deploying full-stack apps in
            production, here&apos;s the stack I use to build end-to-end AI
            systems.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(TECH_STACK).map(([category, skills]) => (
              <div
                key={category}
                className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 space-y-4 shadow-md shadow-black/40 transition-transform duration-300 hover:-translate-y-1 hover:shadow-emerald-500/20"
              >
                <h3 className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.18em]">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs md:text-sm bg-slate-950/90 border border-slate-700/90 text-slate-50 rounded-lg hover:border-emerald-500/60 hover:text-emerald-200 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS (FOURTH PAGE) */}
      <section
        id="projects"
        className="py-24 px-5 max-w-6xl mx-auto min-h-[70vh]"
      >
        <SectionLabel icon={Code} title="Selected Projects" />
        <p className="text-sm md:text-base text-slate-200 mb-4 max-w-xl">
          A few things that show how I think about agentic workflows, RAG, and
          production-grade ML systems.
        </p>

        {/* Badge row */}
        <div className="flex flex-wrap gap-2 mb-8 text-[11px] md:text-xs text-slate-300">
          <span className="px-2.5 py-1 rounded-full border border-slate-700 bg-slate-900/80">
            Built with Next.js · FastAPI · Docker
          </span>
          <span className="px-2.5 py-1 rounded-full border border-slate-700 bg-slate-900/80">
            LLMs · RAG · Agents · MLOps
          </span>
        </div>

        <div className="space-y-6">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group p-5 md:p-6 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-emerald-500/60 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/90 shadow-md shadow-black/40"
            >
              <div className="flex justify-between items-start gap-4 mb-3">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-50 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-emerald-400 transition-colors"
                    aria-label="View project"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                )}
              </div>
              <p className="text-slate-200 text-sm md:text-[15px] leading-relaxed mb-4">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono text-emerald-200 bg-emerald-900/15 px-2.5 py-1 rounded-full border border-emerald-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 md:py-12 text-center border-t border-slate-900/80 bg-[#020617]/95 backdrop-blur-sm">
        <p className="text-slate-500 text-xs md:text-sm font-mono">
          © {new Date().getFullYear()} {PROFILE.name} · Built with Next.js &
          Tailwind
        </p>
      </footer>
    </div>
  );
}
