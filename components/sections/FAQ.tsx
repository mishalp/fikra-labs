"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState, useCallback, type KeyboardEvent } from "react";
import { faqItems } from "@/lib/site-content";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  const toggle = useCallback((index: number) => {
    setOpen((cur) => (cur === index ? null : index));
  }, []);

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = (index + 1) % faqItems.length;
        setOpen(next);
        document.getElementById(`${baseId}-faq-btn-${next}`)?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = (index - 1 + faqItems.length) % faqItems.length;
        setOpen(prev);
        document.getElementById(`${baseId}-faq-btn-${prev}`)?.focus();
      } else if (e.key === "Home") {
        e.preventDefault();
        setOpen(0);
        document.getElementById(`${baseId}-faq-btn-0`)?.focus();
      } else if (e.key === "End") {
        e.preventDefault();
        const last = faqItems.length - 1;
        setOpen(last);
        document.getElementById(`${baseId}-faq-btn-${last}`)?.focus();
      }
    },
    [baseId],
  );

  return (
    <section className="overflow-x-clip border-t border-white/5 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          align="center"
          eyebrow="FAQ"
          title="Answers before we ever meet"
          subtitle="If your question is not here, email us—response times are typically one business day."
        />
        <div
          className="mt-8 space-y-2 sm:mt-9 sm:space-y-2"
          role="region"
          aria-label="Frequently asked questions"
        >
          {faqItems.map((item, index) => {
            const isOpen = open === index;
            const panelId = `${baseId}-faq-panel-${index}`;
            const btnId = `${baseId}-faq-btn-${index}`;

            return (
              <div
                key={item.q}
                className="glass-panel-static rounded-xl sm:rounded-2xl"
              >
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full min-h-[48px] items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-semibold leading-snug text-white transition-colors duration-300 ease-out hover:bg-white/4 sm:min-h-[52px] sm:px-5 sm:py-4 sm:text-[15px]"
                    onClick={() => toggle(index)}
                    onKeyDown={(e) => onKeyDown(e, index)}
                  >
                    <span className="min-w-0 flex-1">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-violet-300 transition-transform duration-420 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                </h3>
                {/* CSS grid 0fr/1fr: GPU-friendly height collapse without Framer height keyframes */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  aria-hidden={!isOpen}
                  data-state={isOpen ? "open" : "closed"}
                  className={`group faq-disclosure grid ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p
                      className="faq-answer px-4 pb-4 text-sm leading-relaxed text-zinc-400 transition-[opacity,transform] duration-380 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none group-data-[state=closed]:translate-y-2 group-data-[state=closed]:opacity-0 group-data-[state=closed]:delay-0 group-data-[state=open]:translate-y-0 group-data-[state=open]:opacity-100 group-data-[state=open]:delay-75 sm:px-5 sm:pb-5 sm:text-[15px]"
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
