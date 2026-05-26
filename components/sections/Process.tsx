"use client";

import { processSteps } from "@/lib/site-content";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

type ProcessStep = (typeof processSteps)[number];

/** Progressive vertical rhythm + subtle width shift on desktop. */
const cardRhythm = [
  "mt-0",
  "mt-6 lg:mt-8 lg:mr-4",
  "mt-7 lg:mt-10 lg:ml-6",
  "mt-6 lg:mt-9 lg:mr-8",
  "mt-8 lg:mt-12 lg:ml-3",
] as const;

function ProcessStepCard({ step }: { step: ProcessStep }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-[border-color,background-color] duration-300 ease-out md:hover:border-violet-500/30 md:hover:bg-white/[0.03]">
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent opacity-80 transition-opacity duration-300 ease-out md:group-hover:via-violet-400/50"
        aria-hidden
      />

      <div className="flex flex-col gap-5 p-5 sm:flex-row sm:gap-6 sm:p-6 lg:gap-8 lg:p-8">
        <div className="flex shrink-0 flex-row items-center gap-4 sm:flex-col sm:items-start sm:gap-3 sm:border-r sm:border-white/[0.06] sm:pr-6 lg:pr-8">
          <span className="relative flex h-2 w-2 shrink-0 items-center justify-center">
            <span className="absolute h-2 w-2 rounded-full bg-violet-500/30" />
            <span className="relative h-1 w-1 rounded-full bg-violet-400/80 shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
          </span>
          <span
            className="font-mono text-[clamp(2.75rem,8vw,4.5rem)] font-semibold leading-none tracking-tighter text-white/[0.12] sm:text-[4rem] lg:text-[4.5rem]"
            aria-hidden
          >
            {step.n}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-300/85">
            {step.tag}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {step.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-[15px] sm:leading-relaxed">
            {step.description}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-white/[0.06] pt-4">
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
              {step.meta}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Process() {
  return (
    <section
      id="process"
      className="process-editorial relative overflow-x-clip border-y border-white/[0.05] py-14 sm:py-20 lg:py-24 xl:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(70vh,32rem)] bg-[radial-gradient(ellipse_80%_60%_at_30%_0%,rgba(99,102,241,0.12),transparent)]"
        aria-hidden
      />
      <div
        className="bg-grid-faint pointer-events-none absolute inset-0 opacity-[0.22]"
        aria-hidden
      />
      <p
        className="process-editorial-watermark pointer-events-none absolute left-[-2%] top-[18%] hidden select-none font-mono text-[clamp(4rem,14vw,11rem)] font-semibold uppercase leading-none tracking-tighter text-white/[0.025] lg:block"
        aria-hidden
      >
        Workflow
      </p>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-10 xl:gap-14">
          {/* —— Editorial anchor (sticky on desktop) —— */}
          <header className="mb-10 lg:sticky lg:top-28 lg:col-span-5 lg:mb-0 xl:col-span-4">
            <div className="relative">
              <div
                className="absolute -left-4 top-0 hidden h-full w-px bg-gradient-to-b from-violet-500/50 via-violet-500/15 to-transparent sm:-left-6 lg:block"
                aria-hidden
              />
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-300/90 sm:text-xs">
                Process
              </p>
              <h2 className="mt-4 max-w-md text-[clamp(1.75rem,4.5vw,2.75rem)] font-semibold leading-[1.1] tracking-tight text-white text-balance xl:max-w-lg">
                How we transform ambitious ideas into scalable digital products.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base sm:leading-relaxed">
                From strategy to deployment, every phase is engineered for clarity,
                speed, and long-term scalability—without theatre or wasted motion.
              </p>
              <p
                className="mt-10 hidden font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-600 lg:block"
                aria-hidden
              >
                01 — 05 · workflow
              </p>
            </div>
          </header>

          {/* —— Workflow stack —— */}
          <div className="lg:col-span-7 xl:col-span-8">
            <RevealGroup>
              <ol className="relative flex flex-col">
                {processSteps.map((step, i) => (
                  <RevealItem
                    key={step.n}
                    as="li"
                    index={i}
                    staggerMs={55}
                    className={`relative w-full m-4`}
                  >
                    <div className="process-card w-full">
                      <ProcessStepCard step={step} />
                    </div>
                  </RevealItem>
                ))}
              </ol>
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
