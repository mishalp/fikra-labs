"use client";

import { CTAButton } from "@/components/ui/CTAButton";
import { FikraFrame } from "@/components/ui/FikraFrame";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function CTABanner() {
  return (
    <section className="section-tone-warm relative overflow-x-clip py-12 sm:py-16 lg:py-20">
      <div
        className="cta-horizon pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-violet-400/35 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[12%] top-[20%] hidden h-52 w-52 rounded-full bg-violet-600/12 blur-[80px] md:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[15%] right-[10%] hidden h-48 w-48 rounded-full bg-indigo-600/10 blur-[72px] md:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
        aria-hidden
      >
        <span className="dust-dot left-[18%] top-[22%]" style={{ animationDelay: "0s" }} />
        <span className="dust-dot left-[42%] top-[38%]" style={{ animationDelay: "1.2s" }} />
        <span className="dust-dot right-[28%] top-[30%]" style={{ animationDelay: "2.4s" }} />
        <span className="dust-dot bottom-[32%] right-[18%]" style={{ animationDelay: "0.8s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealGroup className="relative">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[min(22rem,55vw)] w-[min(42rem,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/14 animate-glow-pulse md:block"
            aria-hidden
          />
          <RevealItem variant="scale-in" index={0} className="relative mx-auto max-w-3xl">
            <FikraFrame className="mx-auto max-w-3xl" animateEdge={false}>
              <div className="relative overflow-hidden px-5 py-8 text-center sm:px-10 sm:py-10 md:px-12 md:py-11">
                <p className="motion-cta-1 font-mono text-[10px] uppercase tracking-[0.3em] text-violet-300/80">
                  Commission · 2026
                </p>
                <h2 className="motion-cta-2 mt-3 text-[clamp(1.6rem,5.5vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-white text-balance sm:mt-4">
                  Shape the next flagship experience{" "}
                  <span className="text-gradient">with us.</span>
                </h2>
                <p className="motion-cta-3 mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 sm:mt-4 sm:text-base">
                  Tell us what “exceptional” means for your users—we’ll answer with
                  architecture, craft, and a delivery plan you can stake your
                  reputation on.
                </p>
                <div className="motion-cta-4 mt-7 sm:mt-8">
                  <div className="flex flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                    <MagneticButton className="w-full sm:w-auto">
                      <CTAButton
                        href="mailto:hello@fikralabs.com"
                        variant="primary"
                        external
                        className="w-full border-violet-400/20 shadow-[0_0_28px_-12px_rgba(139,92,246,0.45)] sm:w-auto sm:min-w-[11rem] md:shadow-[0_0_40px_-12px_rgba(139,92,246,0.55)]"
                      >
                        Start Your Project
                      </CTAButton>
                    </MagneticButton>
                    <MagneticButton className="w-full sm:w-auto">
                      <CTAButton
                        href="https://cal.com"
                        variant="secondary"
                        external
                        className="w-full border-white/20 bg-white/[0.06] sm:w-auto sm:min-w-[11rem]"
                      >
                        Schedule a Call
                      </CTAButton>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </FikraFrame>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
