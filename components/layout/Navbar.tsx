"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site-content";
import { CTAButton } from "@/components/ui/CTAButton";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
        document.documentElement.style.overflow = "";
      };
    }
    document.documentElement.style.overflow = "";
    return undefined;
  }, [open]);

  const barClass = scrolled
    ? "border-white/10 bg-[#050816]/90 shadow-[0_6px_24px_rgba(0,0,0,0.35)] backdrop-blur-md md:backdrop-blur-xl"
    : "border-transparent bg-transparent";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[130] px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8">
        <nav
          className={`mx-auto flex min-h-[48px] max-w-7xl items-center justify-between gap-3 rounded-xl border px-3 py-2.5 transition-colors duration-200 sm:min-h-[52px] sm:rounded-2xl sm:px-4 sm:py-3 md:px-5 ${barClass}`}
          aria-label="Primary"
        >
          <Link
            href="/"
            className="shrink-0 text-[15px] font-semibold leading-none tracking-tight text-white sm:text-base"
            onClick={() => setOpen(false)}
          >
            Fikra Labs
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="link-underline rounded-lg px-2.5 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white xl:px-3"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <CTAButton
              href="#contact"
              variant="primary"
              className="!min-h-10 !px-3.5 !py-2 !text-sm xl:!min-h-11 xl:!px-4"
            >
              Book a Call
            </CTAButton>
          </div>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors active:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[120] transition-opacity duration-300 ease-out lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="absolute inset-0 bg-[#030510]/90 backdrop-blur-sm transition-opacity duration-300 md:backdrop-blur-[6px]"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute inset-0 flex min-h-0 flex-col bg-[#070b18] px-4 pb-4 pt-[calc(4.25rem+env(safe-area-inset-top,0px))] transition-transform duration-300 ease-out motion-reduce:transition-none sm:px-6 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain">
            <ul className="flex flex-col gap-1 py-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="flex min-h-[48px] items-center rounded-xl px-3 text-[15px] font-medium text-zinc-100 active:bg-white/5"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="shrink-0 border-t border-white/10 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <CTAButton
              href="#contact"
              variant="primary"
              className="w-full !min-h-12"
              onClick={() => setOpen(false)}
            >
              Book a Call
            </CTAButton>
          </div>
        </aside>
      </div>
    </>
  );
}
