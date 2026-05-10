"use client";

import type { ReactNode } from "react";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlowCard({ children, className = "", hover = true }: GlowCardProps) {
  return (
    <div
      className={`glass-panel relative overflow-hidden rounded-2xl p-5 sm:p-6 md:p-8 ${
        hover
          ? "group transition-transform duration-300 ease-out md:hover:-translate-y-0.5"
          : ""
      } ${className}`}
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-violet-500/10 blur-2xl md:-right-24 md:-top-24 md:h-48 md:w-48 md:blur-3xl ${
          hover
            ? "opacity-70 transition-opacity duration-300 md:group-hover:opacity-100"
            : "opacity-70"
        }`}
        aria-hidden
      />
      {children}
    </div>
  );
}
