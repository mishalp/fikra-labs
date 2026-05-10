"use client";

import { Check } from "lucide-react";
import { pricingPlans } from "@/lib/site-content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTAButton } from "@/components/ui/CTAButton";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Pricing() {
  return (
    <section id="pricing" className="overflow-x-clip py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          align="center"
          eyebrow="Engagement"
          title="Pricing that maps to how teams actually grow"
          subtitle="Transparent starting points—not bait-and-switch estimates. Every tier includes weekly demos, written updates, and a deployment you can own."
        />
        <RevealGroup className="mt-8 grid max-w-6xl grid-cols-1 gap-4 sm:mx-auto sm:mt-10 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-5">
          {pricingPlans.map((plan, i) => (
            <RevealItem
              key={plan.name}
              as="article"
              index={i}
              className={`relative flex min-h-0 flex-col rounded-2xl border p-5 transition-all duration-300 ease-out sm:p-6 lg:p-6 md:hover:-translate-y-1 ${
                plan.highlighted
                  ? "border-violet-500/45 bg-gradient-to-b from-violet-500/12 to-[#0b1020] shadow-[0_0_40px_-16px_rgba(139,92,246,0.45)] md:hover:border-violet-400/55"
                  : "border-white/10 bg-white/[0.02] md:hover:border-violet-500/40 md:hover:bg-white/[0.03]"
              }`}
            >
              {plan.highlighted ? (
                <span className="mb-2 inline-flex w-fit rounded-full bg-violet-500 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                  Most popular
                </span>
              ) : null}
              <h3 className="text-base font-semibold text-white sm:text-lg">{plan.name}</h3>
              <p className="mt-1.5 text-sm leading-snug text-zinc-400">{plan.description}</p>
              <p className="mt-4 text-2xl font-semibold text-white sm:mt-5 sm:text-3xl">{plan.price}</p>
              <p className="mt-0.5 text-[11px] text-zinc-500 sm:text-xs">Timeline: {plan.timeline}</p>
              <ul className="mt-4 flex-1 space-y-2 sm:mt-5 sm:space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-[13px] leading-snug text-zinc-300 sm:text-sm">
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-300 sm:h-4 sm:w-4"
                      aria-hidden
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <CTAButton
                href="#contact"
                variant={plan.highlighted ? "primary" : "secondary"}
                className="mt-6 w-full !min-h-11 transition-all duration-300 ease-out active:scale-[0.98] sm:mt-7"
              >
                {plan.cta}
              </CTAButton>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
