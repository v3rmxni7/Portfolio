import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nischay Vermani - Agentic AI Systems Engineer",
  description:
    "Production-grade AI systems engineer specializing in agentic workflows, RAG pipelines, LLM evaluation, and distributed systems. Expertise in LangChain, FastAPI, MLOps, and full-stack deployment.",
  keywords: [
    "AI Engineer",
    "LLM Systems",
    "Agentic AI",
    "RAG",
    "MLOps",
    "Machine Learning",
    "Full Stack",
  ],
  authors: [{ name: "Nischay Vermani" }],
  creator: "Nischay Vermani",
  openGraph: {
    title: "Nischay Vermani - Agentic AI Systems Engineer",
    description:
      "I design and ship production-grade AI systems — from agentic workflows and RAG pipelines to evaluation, monitoring, and deployment of LLM-powered products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
