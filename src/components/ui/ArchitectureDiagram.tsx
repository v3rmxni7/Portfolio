"use client";

import React from "react";
import { Zap } from "lucide-react";

interface ArchitectureDiagramProps {
  name: string;
  caption?: string;
  aspectRatio?: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  name,
  caption,
  aspectRatio = "16/9",
}) => {
  return (
    <div className="space-y-3">
      <div
        className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/50 p-8 flex items-center justify-center"
        style={{ aspectRatio }}
      >
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
              <Zap size={24} className="text-slate-600" />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-slate-400">Diagram Placeholder</p>
            <p className="text-xs text-slate-500 font-mono">{name}</p>
            <p className="text-xs text-slate-600 pt-1">
              Ready for Excalidraw, Mermaid, or custom SVG
            </p>
          </div>
        </div>
      </div>
      {caption && (
        <p className="text-xs text-slate-400 text-center italic">{caption}</p>
      )}
    </div>
  );
};
