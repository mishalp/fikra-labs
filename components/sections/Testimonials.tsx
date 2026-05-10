"use client";

import { testimonials } from "@/lib/site-content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

function TestimonialCard({
  t,
  className = "",
}: {
  t: (typeof testimonials)[number];
  className?: string;
}) {
  return (
    <figure
      className={`glass-panel-static flex flex-col rounded-2xl p-4 transition-[transform,border-color,background-color,opacity] duration-300 ease-out sm:p-5 md:hover:-translate-y-1 md:hover:border-violet-500/40 md:hover:bg-white/[0.03] ${className}`}
    >
      <div className="flex items-center gap-2.5 sm:gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-semibold text-violet-100 sm:h-10 sm:w-10 sm:text-sm"
          aria-hidden
        >
          {t.initials}
        </span>
        <div className="min-w-0">
          <figcaption className="truncate text-sm font-semibold text-white">{t.company}</figcaption>
          <p className="truncate text-[11px] text-zinc-500 sm:text-xs">{t.role}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-zinc-300 sm:mt-4">
        “{t.quote}”
      </blockquote>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="overflow-x-clip py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Testimonials"
          title="Teams trust us when the stakes are real"
          subtitle="No stock headshots—just candid feedback from operators who needed velocity without sacrificing quality."
        />

        <RevealGroup className="mt-8 flex flex-col gap-4 sm:mt-10 md:mt-10 md:grid md:grid-cols-3 md:gap-5 lg:mt-12 lg:gap-6">
          {testimonials.map((t, i) => (
            <RevealItem key={t.company} index={i} variant="fade-in" className="md:h-full">
              <TestimonialCard t={t} className="h-full" />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
