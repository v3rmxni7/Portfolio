"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Zap,
  Terminal as TerminalIcon,
  Sparkles,
} from "lucide-react";

const PROFILE = {
  name: "Nischay Vermani",
  role: "Agentic AI Systems Engineer",
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

type IconType = React.ComponentType<{ size?: number; className?: string }>;

type SocialLinkProps = {
  href: string;
  icon: IconType;
  label: string;
};

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

export const Hero: React.FC = () => {
  return (
    <>
      {/* ABOUT / HERO SECTION */}
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
                  src="/nischay.webp"
                  alt={PROFILE.name}
                  width={120}
                  height={120}
                  className="w-full h-full object-cover"
                  priority
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
    </>
  );
};
