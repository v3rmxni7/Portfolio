"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

interface NavigationProps {
  onSectionChange: (section: string) => void;
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  onSectionChange,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const sections = ["about", "experience", "stack", "projects"];

  return (
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
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={navButtonClass(id)}
            >
              {id[0].toUpperCase() + id.slice(1)}
              {navUnderline(id)}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/25 hover:text-emerald-200 transition-all text-sm font-medium"
            aria-label="Download resume"
          >
            <Download size={16} />
            <span>Resume</span>
          </a>
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
            {sections.map((id) => (
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
            <a
              href="/resume.pdf"
              download
              className="text-left py-2 px-3 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 inline-flex items-center gap-2 mt-2"
              aria-label="Download resume"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
