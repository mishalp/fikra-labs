"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site-content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FikraFrame } from "@/components/ui/FikraFrame";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Projects() {
  return (
    <section
      id="work"
      className="section-tone-cool relative overflow-x-clip py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:max-w-3xl">
          <SectionTitle
            align="left"
            className="lg:ml-auto lg:items-end lg:text-right"
            eyebrow="Selected work"
            title="Case studies with signal—not slideshows."
            subtitle="Representative builds across fintech, AI SaaS, commerce, and analytics. Each engagement pairs narrative clarity with measurable outcomes."
          />
        </div>

        <RevealGroup className="mt-10 flex flex-col gap-6 sm:mt-12 sm:gap-8 lg:mt-16">
          {projects.map((p, i) => (
            <RevealItem
              key={p.title}
              as="article"
              index={i}
              className={`group relative lg:max-w-[92%] ${i % 2 === 1 ? "lg:ml-auto" : ""}`}
            >
              <div
                className={`pointer-events-none absolute -z-10 hidden h-full w-[38%] rounded-full bg-violet-600/8 blur-3xl lg:block ${
                  i % 2 === 1 ? "left-0" : "right-0"
                }`}
                aria-hidden
              />
              <FikraFrame className="overflow-hidden transition-[transform,border-color,opacity] duration-300 ease-out md:group-hover:-translate-y-1 md:group-hover:border-violet-500/40" animateEdge={false}>
                <div className="grid gap-0 lg:grid-cols-12">
                  <div className="relative aspect-video min-h-[200px] overflow-hidden lg:col-span-7 lg:min-h-[280px]">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      className="object-cover object-left-top transition-transform duration-500 ease-out md:group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      priority={i === 0}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#030510]/45 via-transparent to-indigo-500/8 opacity-90 transition-opacity duration-300 md:group-hover:opacity-100" />
                    <ul className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-md border border-white/12 bg-black/70 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-200 sm:text-[11px]"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex translate-y-0 flex-col justify-center gap-4 p-5 opacity-95 transition-[transform,opacity] duration-300 ease-out sm:p-7 md:group-hover:-translate-y-0.5 md:group-hover:opacity-100 lg:col-span-5 lg:pl-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-violet-500/25 bg-violet-500/10 px-2.5 py-0.5 text-[11px] font-medium text-violet-100 transition-colors duration-300 md:group-hover:border-violet-400/40">
                        {p.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-zinc-500">
                        Case study
                        <ArrowUpRight className="h-3 w-3 transition-transform duration-300 md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5" aria-hidden />
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400 sm:text-[15px]">{p.summary}</p>
                    <dl className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                      {p.metrics.map((m) => (
                        <div key={m.label} className="min-w-0">
                          <dt className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                            {m.label}
                          </dt>
                          <dd className="mt-0.5 truncate text-sm font-semibold tabular-nums text-white sm:text-base">
                            {m.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </FikraFrame>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
