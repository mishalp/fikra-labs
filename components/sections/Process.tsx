"use client";

import { processSteps } from "@/lib/site-content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FikraFrame } from "@/components/ui/FikraFrame";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section
      id="process"
      className="section-tone-warm relative overflow-x-clip py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          layout="editorial"
          index="06"
          eyebrow="How we work"
          title="A journey engineered for momentum, not meetings."
          subtitle="Six sequenced phases—each with artifacts, tools, and timeboxes—so stakeholders always know what “done” looks like."
        />

        <RevealGroup className="relative mt-10 sm:mt-12 md:hidden">
          <div className="relative">
            <div
              className="absolute bottom-1 left-[11px] top-1 w-px bg-gradient-to-b from-violet-500/55 via-violet-500/15 to-transparent transition-opacity duration-300"
              aria-hidden
            />
            <ol className="relative space-y-3">
              {processSteps.map((step, i) => (
                  <RevealItem
                    key={step.n}
                    as="li"
                    index={i}
                    staggerMs={36}
                    className="group relative flex gap-3 pl-8"
                  >
                <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-violet-500/35 bg-[#0a0f1e] text-[10px] font-semibold text-violet-100 transition-[border-color,opacity,transform] duration-300 ease-out md:group-hover:border-violet-400/65 md:group-hover:opacity-100">
                  {i + 1}
                </span>
                <FikraFrame offset animateEdge={false} className="min-w-0 flex-1">
                  <div className="p-3.5 transition-opacity duration-300 ease-out">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-[15px] font-semibold text-white">{step.title}</h3>
                      <span className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-zinc-400">
                        {step.duration}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                      {step.description}
                    </p>
                    <p className="mt-2 font-mono text-[10px] text-zinc-500">
                      {step.tools.join(" · ")}
                    </p>
                    <p className="mt-1 text-[11px] text-zinc-500">
                      Out: {step.deliverables.join(" · ")}
                    </p>
                  </div>
                </FikraFrame>
              </RevealItem>
              ))}
            </ol>
          </div>
        </RevealGroup>

        <RevealGroup className="relative mt-12 hidden md:block">
          <div className="relative overflow-x-auto overflow-y-visible pb-6 scrollbar-hide">
            <div
              className="pointer-events-none absolute left-8 right-8 top-[22px] h-px bg-gradient-to-r from-transparent via-violet-500/35 to-transparent"
              aria-hidden
            />
            <ol className="relative flex min-w-[920px] gap-4 px-2 lg:min-w-0 lg:justify-between lg:gap-3 lg:px-0">
              {processSteps.map((step, i) => (
                <RevealItem
                  key={step.n}
                  as="li"
                  index={i}
                  staggerMs={38}
                  className="group relative w-[150px] shrink-0 lg:w-auto lg:flex-1 lg:max-w-[200px]"
                >
                  <div className="relative flex flex-col items-center pt-0">
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/40 bg-[#0a0f1e] text-[11px] font-semibold text-violet-100 transition-colors duration-300 ease-out md:group-hover:border-violet-400/60">
                      {i + 1}
                    </span>
                    <FikraFrame
                      offset={false}
                      animateEdge={false}
                      className="mt-5 w-full transition-transform duration-300 ease-out md:group-hover:-translate-y-1"
                    >
                      <div className="p-3">
                        <h3 className="text-center text-xs font-semibold leading-snug text-white">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-center text-[10px] leading-relaxed text-zinc-500">
                          {step.duration}
                        </p>
                        <p className="mt-2 text-[10px] leading-snug text-zinc-400">
                          {step.description}
                        </p>
                        <p className="mt-2 border-t border-white/5 pt-2 text-center font-mono text-[9px] text-zinc-500">
                          {step.tools.slice(0, 2).join(" · ")}
                        </p>
                      </div>
                    </FikraFrame>
                  </div>
                </RevealItem>
              ))}
            </ol>
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
