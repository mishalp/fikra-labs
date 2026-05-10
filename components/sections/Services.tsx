"use client";

import {
  Code2,
  Gauge,
  Layers,
  LineChart,
  Palette,
  Plug,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/site-content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const iconMap: Record<(typeof services)[number]["icon"], LucideIcon> = {
  code: Code2,
  layers: Layers,
  palette: Palette,
  gauge: Gauge,
  lineChart: LineChart,
  plug: Plug,
};

export function Services() {
  return (
    <section
      id="services"
      className="section-tone-cool relative overflow-x-clip py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5 lg:pt-4">
            <SectionTitle
              eyebrow="Capabilities"
              title="Precision delivery across the full product surface."
              subtitle="From first sketch to production telemetry—one accountable studio, one coherent system."
            />
          </div>
          <RevealGroup className="mt-10 sm:mt-12 lg:col-span-7 lg:mt-0">
            <ul className="grid auto-rows-fr gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-2 lg:gap-4">
              {services.map((s, i) => {
                const Icon = iconMap[s.icon];
                const featured = i === 0;
                return (
                  <RevealItem
                    key={s.title}
                    as="li"
                    index={i}
                    className={`group relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-[transform,border-color,background-color,opacity] duration-300 ease-out sm:p-6 md:hover:-translate-y-1 md:hover:border-violet-500/40 md:hover:bg-white/[0.03] ${
                      featured ? "lg:col-span-2 lg:flex-row lg:items-center lg:gap-8" : ""
                    }`}
                  >
                    <div
                      className="pointer-events-none absolute -right-10 -top-10 hidden h-28 w-28 rounded-full bg-violet-500/10 opacity-40 blur-2xl md:block md:transition-opacity md:duration-300 md:group-hover:opacity-55"
                      aria-hidden
                    />
                    <div
                      className={`relative flex shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-violet-200 ${
                        featured
                          ? "h-12 w-12 sm:h-14 sm:w-14"
                          : "h-10 w-10 sm:h-11 sm:w-11"
                      }`}
                    >
                      <Icon
                        className={featured ? "h-6 w-6 sm:h-7 sm:w-7" : "h-[18px] w-[18px] sm:h-5 sm:w-5"}
                        aria-hidden
                      />
                    </div>
                    <div className={`relative min-w-0 ${featured ? "lg:flex-1" : ""}`}>
                      <h3
                        className={`mt-4 font-semibold leading-snug text-white sm:mt-5 ${
                          featured ? "text-lg sm:text-xl" : "text-base sm:text-lg"
                        }`}
                      >
                        {s.title}
                      </h3>
                      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                        {s.description}
                      </p>
                    </div>
                  </RevealItem>
                );
              })}
            </ul>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
