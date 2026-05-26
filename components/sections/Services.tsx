"use client";

import { services } from "@/lib/site-content";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

type Service = (typeof services)[number];

function CapabilityBars() {
  const widths = [72, 48, 88, 56];
  return (
    <div className="mt-6 flex h-10 items-end gap-1 border-t border-white/[0.06] pt-4" aria-hidden>
      {widths.map((w, i) => (
        <span
          key={i}
          className="w-2 rounded-sm bg-gradient-to-t from-violet-600/40 to-violet-400/25"
          style={{ height: `${w}%` }}
        />
      ))}
      <span className="ml-auto font-mono text-[9px] uppercase tracking-wider text-zinc-600">
        system load · optimal
      </span>
    </div>
  );
}

function StackTags({ stack }: { stack: readonly string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2 border-t border-white/[0.06] pt-4">
      {stack.map((tag) => (
        <span
          key={tag}
          className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] text-zinc-500"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ServicePanel({
  service,
  variant = "standard",
}: {
  service: Service;
  variant?: "featured" | "standard" | "strip";
}) {
  const isFeatured = variant === "featured";
  const isStrip = variant === "strip";

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-[border-color,background-color] duration-300 ease-out md:hover:border-violet-500/30 md:hover:bg-white/[0.03] ${
        isFeatured ? "lg:min-h-[18rem]" : isStrip ? "" : "lg:min-h-[14rem]"
      }`}
    >
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent transition-opacity duration-300 ease-out md:group-hover:via-violet-400/45"
        aria-hidden
      />
      <span
        className={`pointer-events-none absolute select-none font-mono font-semibold uppercase leading-none tracking-tighter text-white/[0.04] ${
          isFeatured
            ? "right-4 top-4 text-[5rem] sm:text-[6rem] lg:right-8 lg:top-6 lg:text-[7rem]"
            : isStrip
              ? "right-6 top-1/2 hidden -translate-y-1/2 text-[4rem] lg:block"
              : "right-3 top-3 text-[3.5rem] sm:text-[4rem]"
        }`}
        aria-hidden
      >
        {service.n}
      </span>

      <div
        className={`relative ${
          isStrip
            ? "flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-6 lg:p-7"
            : isFeatured
              ? "flex flex-col p-6 sm:p-8 lg:flex-row lg:gap-12 lg:p-10"
              : "flex h-full flex-col p-5 sm:p-6 lg:p-7"
        }`}
      >
        <div
          className={
            isFeatured
              ? "shrink-0 lg:w-48"
              : isStrip
                ? "shrink-0 sm:w-40"
                : ""
          }
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-300/85">
            {service.category}
          </p>
          <p className="mt-2 font-mono text-xs tabular-nums text-zinc-500">{service.n}</p>
          {isFeatured ? (
            <div className="mt-4 hidden h-px w-16 bg-gradient-to-r from-violet-500/50 to-transparent lg:block" />
          ) : null}
        </div>

        <div className={`min-w-0 flex-1 ${isFeatured ? "lg:pt-2" : ""}`}>
          <h3
            className={`font-semibold tracking-tight text-white ${
              isFeatured
                ? "mt-3 text-2xl sm:text-3xl lg:mt-0 lg:text-[2rem] lg:leading-tight"
                : isStrip
                  ? "mt-2 text-lg sm:mt-0 sm:text-xl"
                  : "mt-3 text-lg sm:text-xl"
            }`}
          >
            {service.title}
          </h3>
          <p
            className={`mt-3 leading-relaxed text-zinc-400 ${
              isFeatured
                ? "max-w-2xl text-sm sm:text-base sm:leading-relaxed"
                : "text-sm sm:leading-relaxed"
            }`}
          >
            {service.description}
          </p>
          {isFeatured ? <CapabilityBars /> : <StackTags stack={service.stack} />}
        </div>
      </div>
    </article>
  );
}

export function Services() {
  const [featured, rowA, rowB, closing] = [
    services[0],
    [services[1], services[2]],
    [services[3], services[4]],
    services[5],
  ] as const;

  return (
    <section
      id="services"
      className="services-editorial relative overflow-x-clip border-y border-white/[0.05] py-14 sm:py-20 lg:py-24 xl:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(65vh,28rem)] bg-[radial-gradient(ellipse_75%_55%_at_75%_0%,rgba(99,102,241,0.11),transparent)]"
        aria-hidden
      />
      <div
        className="bg-grid-faint pointer-events-none absolute inset-0 opacity-[0.2]"
        aria-hidden
      />
      <p
        className="services-editorial-watermark pointer-events-none absolute right-[-4%] top-[12%] hidden select-none font-mono text-[clamp(3.5rem,12vw,9rem)] font-semibold uppercase leading-none tracking-tighter text-white/[0.025] lg:block"
        aria-hidden
      >
        Systems
      </p>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial intro — horizontal split (not sticky) */}
        <header className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-10 xl:gap-14">
          <div className="lg:col-span-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-300/90 sm:text-xs">
              Capabilities
            </p>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.75rem,4.5vw,2.85rem)] font-semibold leading-[1.08] tracking-tight text-white text-balance">
              We engineer high-end digital products with precision.
            </h2>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base sm:leading-relaxed lg:col-span-5 lg:mt-0 lg:pb-1 lg:text-right">
            A capabilities showcase—product engineering, platforms, experience, and
            infrastructure—delivered as one coherent studio system.
          </p>
        </header>

        <RevealGroup className="mt-12 sm:mt-14 lg:mt-16">
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
            {/* Featured anchor */}
            <RevealItem as="div" index={0} className="w-full">
              <div className="services-panel w-full">
                <ServicePanel service={featured} variant="featured" />
              </div>
            </RevealItem>

            {/* Asymmetric pair — narrow + wide */}
            <div className="grid gap-4 sm:gap-5 lg:grid-cols-12 lg:gap-6">
              <RevealItem as="div" index={1} className="lg:col-span-5">
                <div className="services-panel h-full">
                  <ServicePanel service={rowA[0]} />
                </div>
              </RevealItem>
              <RevealItem as="div" index={2} className="lg:col-span-7">
                <div className="services-panel h-full">
                  <ServicePanel service={rowA[1]} />
                </div>
              </RevealItem>
            </div>

            {/* Inverted asymmetry */}
            <div className="grid gap-4 sm:gap-5 lg:grid-cols-12 lg:gap-6">
              <RevealItem as="div" index={3} className="lg:col-span-7">
                <div className="services-panel h-full">
                  <ServicePanel service={rowB[0]} />
                </div>
              </RevealItem>
              <RevealItem as="div" index={4} className="lg:col-span-5">
                <div className="services-panel h-full">
                  <ServicePanel service={rowB[1]} />
                </div>
              </RevealItem>
            </div>

            {/* Full-width closing strip */}
            <RevealItem as="div" index={5} className="w-full">
              <div className="services-panel w-full">
                <ServicePanel service={closing} variant="strip" />
              </div>
            </RevealItem>
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
