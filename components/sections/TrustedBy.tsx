"use client";

import { BrandLogosRow } from "@/components/trusted/BrandLogos";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function TrustedBy() {
  return (
    <section className="overflow-x-clip border-y border-white/[0.06] bg-[#060a14]/85 py-8 sm:py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-1 text-center font-mono text-[9px] uppercase tracking-[0.35em] text-zinc-600">
          ecosystem.trust · verified
        </p>
        <RevealGroup className="text-center">
          <RevealItem index={0} className="block">
            <p className="mb-5 text-xs font-medium text-zinc-400 sm:mb-6 sm:text-sm">
              Trusted by startups and growing businesses
            </p>
          </RevealItem>
          <RevealItem index={1} className="block md:hidden">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-5 sm:gap-x-8 sm:gap-y-6 md:gap-x-10">
              <BrandLogosRow />
            </div>
          </RevealItem>
          <RevealItem index={1} className="hidden md:block">
            <div className="relative overflow-hidden py-1">
              <div className="marquee-slow-track items-center gap-x-10 gap-y-6 pr-10">
                <div className="flex shrink-0 items-center gap-x-10 sm:gap-x-12 md:gap-x-14">
                  <BrandLogosRow />
                </div>
                <div
                  className="flex shrink-0 items-center gap-x-10 sm:gap-x-12 md:gap-x-14"
                  aria-hidden
                >
                  <BrandLogosRow />
                </div>
              </div>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
