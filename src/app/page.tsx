"use client";

import React, { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { SystemsArchitecture } from "@/components/sections/SystemsArchitecture";
import { ProjectsCaseStudies } from "@/components/sections/ProjectsCaseStudies";
import { Footer } from "@/components/sections/Footer";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<string>("about");

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

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-emerald-500/30">
      {/* GLOW EFFECTS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-25%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/12 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-25%] left-[-10%] w-[600px] h-[600px] bg-sky-500/12 rounded-full blur-[140px]" />
      </div>

      {/* NAVIGATION */}
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* SECTIONS */}
      <Hero />
      <Experience />
      <SystemsArchitecture />
      <ProjectsCaseStudies />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
