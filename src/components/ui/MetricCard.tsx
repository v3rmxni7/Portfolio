"use client";

import React from "react";

interface MetricCardProps {
  label: string;
  value: string;
  sublabel?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ label, value, sublabel }) => {
  return (
    <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-4 text-center space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>
      <p className="text-2xl md:text-3xl font-bold text-emerald-400">{value}</p>
      {sublabel && <p className="text-xs text-slate-500 font-mono">{sublabel}</p>}
    </div>
  );
};
