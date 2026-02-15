"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between bg-slate-900/50 hover:bg-slate-900/70 transition-colors"
      >
        <span className="font-semibold text-emerald-300">{title}</span>
        <ChevronDown
          size={18}
          className={`text-slate-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-5 py-4 border-t border-slate-800 space-y-4 bg-slate-950/30">
          {children}
        </div>
      )}
    </div>
  );
};
