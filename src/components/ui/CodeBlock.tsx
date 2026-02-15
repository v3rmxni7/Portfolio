"use client";

import React from "react";
import { Copy } from "lucide-react";

interface CodeBlockProps {
  language: string;
  children: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl bg-slate-950 border border-slate-800 overflow-hidden my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
        <span className="text-xs font-mono text-slate-400">{language}</span>
        <button
          onClick={handleCopy}
          className="text-xs text-slate-400 hover:text-slate-200 transition-colors p-1"
          aria-label="Copy code"
        >
          {copied ? "Copied!" : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-xs md:text-sm font-mono text-emerald-100 leading-relaxed whitespace-pre-wrap break-words">
          {children}
        </code>
      </pre>
    </div>
  );
};
