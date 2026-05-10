"use client";

import { stackItems } from "@/lib/site-content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FikraFrame } from "@/components/ui/FikraFrame";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function TechStack() {
  return (
    <section
      id="stack"
      className="relative overflow-x-clip border-y border-white/[0.06] py-16 sm:py-20 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(99,102,241,0.1),transparent_65%)] md:block"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Stack"
          title="A toolchain ecosystem—not a sticker sheet."
          subtitle="Each layer is chosen for leverage: velocity today, maintainability tomorrow. We compose, harden, and document so your team can inherit with confidence."
        />

        <FikraFrame className="mt-10 sm:mt-12" animateEdge={false}>
          <div className="relative p-5 sm:p-8 lg:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              runtime.graph · v1
            </p>

            <RevealGroup className="relative mt-8 lg:mt-10">
              <div
                className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-violet-500/40 via-white/10 to-transparent lg:block"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute left-4 right-4 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent lg:block"
                aria-hidden
              />

              <ul className="relative grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-8 lg:pl-8">
                {stackItems.map((item, i) => (
                  <RevealItem
                    key={item.name}
                    as="li"
                    index={i}
                    className={`relative min-w-0 ${i % 2 === 1 ? "lg:translate-y-4" : ""}`}
                  >
                    <span
                      className="absolute -left-1 top-3 hidden h-1.5 w-1.5 rounded-full bg-violet-400 lg:block"
                      aria-hidden
                    />
                    <div className="glass-panel-static group relative flex h-full flex-col justify-center rounded-xl border border-white/[0.08] px-3 py-3.5 transition-[transform,border-color,background-color,opacity] duration-300 ease-out sm:rounded-2xl sm:px-4 sm:py-4 md:hover:-translate-y-1 md:hover:border-violet-500/40 md:hover:bg-white/[0.03]">
                      <span className="text-[10px] font-mono text-zinc-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="mt-1 text-[13px] font-semibold leading-tight text-white sm:text-sm">
                        {item.name}
                      </span>
                      <span className="mt-1 text-[11px] leading-snug text-zinc-500 sm:text-xs">
                        {item.detail}
                      </span>
                    </div>
                  </RevealItem>
                ))}
              </ul>
            </RevealGroup>
          </div>
        </FikraFrame>
      </div>
    </section>
  );
}
