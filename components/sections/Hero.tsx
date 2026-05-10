"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Activity, ArrowRight, Radio, Server } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { FikraFrame } from "@/components/ui/FikraFrame";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { heroDashboardImage } from "@/lib/site-content";

function LabChip({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-1 font-mono text-[10px] text-zinc-400 sm:text-[11px] ${className}`}
    >
      {children}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-x-clip pt-[calc(4.75rem+env(safe-area-inset-top,0px))] pb-10 sm:pb-12 md:pb-16 lg:pb-20">
      <div className="bg-grid-faint pointer-events-none absolute inset-0" />

      <div
        className="pointer-events-none absolute inset-x-0 top-1/3 hidden h-48 max-w-3xl bg-gradient-to-b from-violet-600/18 to-transparent blur-3xl md:block md:translate-x-[10%]"
        aria-hidden
      />
      <div
        className="orb left-[6%] top-[14%] h-44 w-44 bg-violet-600/35 md:left-[4%] md:top-[12%] md:h-56 md:w-56"
        aria-hidden
      />
      <div
        className="orb right-[4%] top-[26%] h-40 w-40 bg-indigo-500/28 md:right-[8%] md:top-[24%] md:h-52 md:w-52"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-start gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="flex flex-col gap-4 text-center sm:gap-5 lg:col-span-6 lg:gap-6 lg:pr-4 lg:text-left xl:col-span-5">
          <div className="flex flex-col items-center gap-3 animate-fade-up lg:items-start">
            <span className="inline-flex max-w-[20rem] items-center rounded-full border border-violet-500/25 bg-violet-500/[0.07] px-3 py-1.5 text-[11px] font-medium leading-snug text-violet-100/95 sm:max-w-none sm:px-4 sm:text-xs">
              Modern web experiences for ambitious brands
            </span>
            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              <LabChip>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/90" />
                production
              </LabChip>
              <LabChip className="hidden sm:inline-flex">
                <Radio className="h-3 w-3 text-violet-300/80" aria-hidden />
                edge · global
              </LabChip>
              <LabChip className="hidden sm:inline-flex">
                <Activity className="h-3 w-3 text-sky-300/80" aria-hidden />
                p99 118ms
              </LabChip>
            </div>
          </div>

          <h1 className="animate-fade-up hero-delay-1 font-semibold leading-[1.08] tracking-tight text-white">
            <span className="block text-[clamp(1.85rem,6.5vw,3.5rem)] text-balance">
              We engineer products that feel
            </span>
            <span className="mt-2 block text-[clamp(1.85rem,6.5vw,3.5rem)] text-balance">
              <span className="text-gradient">inevitable</span>
              <span className="text-zinc-500"> — </span>
              <span className="text-zinc-200">fast, exacting, alive.</span>
            </span>
          </h1>

          <p className="animate-fade-up hero-delay-2 mx-auto max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base lg:mx-0 lg:max-w-lg">
            Fikra Labs is the studio behind interfaces operators trust and
            engineers enjoy extending—strategy, systems design, and disciplined
            delivery without theatre.
          </p>

          <div className="animate-fade-up hero-delay-3 flex flex-col items-center gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start lg:gap-3">
            <MagneticButton className="w-full sm:w-auto">
              <CTAButton
                href="#contact"
                variant="primary"
                className="w-full border-violet-400/25 shadow-[0_0_32px_-14px_rgba(139,92,246,0.45)] sm:w-auto sm:min-w-[10.5rem] md:shadow-[0_0_48px_-16px_rgba(139,92,246,0.55)]"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </CTAButton>
            </MagneticButton>
            <MagneticButton className="w-full sm:w-auto">
              <CTAButton
                href="#work"
                variant="secondary"
                className="w-full sm:w-auto sm:min-w-[10.5rem]"
              >
                View Our Work
              </CTAButton>
            </MagneticButton>
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 animate-scale-in hero-dashboard-animate-delay-lg lg:col-span-6 lg:mx-0 xl:col-span-7">
          <div className="md:animate-soft-float">
            <FikraFrame className="relative shadow-[0_24px_64px_-32px_rgba(0,0,0,0.75)] md:shadow-[0_40px_120px_-48px_rgba(0,0,0,0.85)]">
              <div className="relative">
                <div className="absolute left-3 top-3 z-20 flex max-w-[calc(100%-1.5rem)] flex-wrap gap-2 sm:left-4 sm:top-4">
                  <div className="rounded-lg border border-white/10 bg-black/75 px-2.5 py-1.5 font-mono text-[9px] text-emerald-300/95 sm:text-[10px]">
                    <span className="text-zinc-500">POST</span> /v1/events{" "}
                    <span className="text-emerald-400">200</span>
                  </div>
                  <div className="hidden rounded-lg border border-white/10 bg-black/75 px-2.5 py-1.5 text-[10px] text-zinc-300 sm:inline-flex sm:items-center sm:gap-1.5">
                    <Server className="h-3 w-3 text-violet-300" aria-hidden />
                    deploy <span className="text-emerald-400">live</span>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 z-20 hidden rounded-lg border border-white/10 bg-black/75 px-2.5 py-2 sm:block md:left-4 md:bottom-4">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                    Active sessions
                  </p>
                  <div className="mt-1.5 flex h-7 items-end gap-0.5">
                    {[40, 65, 35, 80, 50, 90, 45].map((h, i) => (
                      <span
                        key={i}
                        className="w-1 rounded-sm bg-gradient-to-t from-violet-600/80 to-indigo-400/60"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 z-20 rounded-lg border border-white/10 bg-black/75 px-2.5 py-1.5 text-right md:bottom-4 md:right-4">
                  <p className="font-mono text-[9px] text-zinc-500">p99 latency</p>
                  <p className="font-mono text-sm font-semibold tabular-nums text-white">
                    124<span className="text-xs text-zinc-500">ms</span>
                  </p>
                </div>

                <div className="relative">
                  <div className="relative aspect-[4/3] w-full min-h-0 overflow-hidden sm:aspect-video">
                    <Image
                      src={heroDashboardImage}
                      alt="Product analytics dashboard with revenue and conversion KPIs"
                      fill
                      className="object-cover object-left-top"
                      sizes="(max-width: 768px) 100vw, 55vw"
                      priority
                      fetchPriority="high"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030510]/88 via-[#030510]/18 to-transparent" />
                  </div>
                </div>
              </div>
            </FikraFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
