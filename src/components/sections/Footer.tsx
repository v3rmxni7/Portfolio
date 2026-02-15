"use client";

import React from "react";

const PROFILE_NAME = "Nischay Vermani";

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 md:py-12 text-center border-t border-slate-900/80 bg-[#020617]/95 backdrop-blur-sm">
      <p className="text-slate-500 text-xs md:text-sm font-mono">
        © {new Date().getFullYear()} {PROFILE_NAME} · Built with Next.js &
        Tailwind
      </p>
    </footer>
  );
};
