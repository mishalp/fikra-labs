import Link from "next/link";
import { navLinks } from "@/lib/site-content";
import { IconGitHub, IconLinkedIn, IconX } from "@/components/ui/SocialIcons";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

const social = [
  { href: "https://x.com", label: "X", Icon: IconX },
  { href: "https://github.com", label: "GitHub", Icon: IconGitHub },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: IconLinkedIn },
] as const;

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-x-clip border-t border-white/[0.07] bg-[#02040c] py-14 sm:py-16 lg:py-24"
    >
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 top-1/3 bg-gradient-to-t from-violet-950/25 to-transparent"
        aria-hidden
      />
      <p
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[clamp(3.5rem,18vw,14rem)] font-semibold leading-none tracking-tighter text-white/[0.03] sm:bottom-12"
        aria-hidden
      >
        Fikra Labs
      </p>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-divider mb-12 opacity-60 sm:mb-14" />

        <div className="grid gap-12 text-center sm:gap-14 md:grid-cols-2 md:gap-12 md:text-left lg:grid-cols-12">
          <div className="space-y-4 md:col-span-2 lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-violet-300/70">
              Studio
            </p>
            <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Fikra Labs
            </p>
            <p className="mx-auto max-w-sm text-sm leading-relaxed text-zinc-400 md:mx-0">
              Creative engineering for teams who ship in the open—typed,
              instrumented, and obsessively clear.
            </p>
          </div>

          <div className="md:col-span-1 lg:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              Index
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-underline text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1 lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              Signal
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li>
                <a
                  href="mailto:teamfikralabs@gmail.com"
                  className="link-underline break-all transition-colors hover:text-white"
                >
                  teamfikralabs@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              Channels
            </p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
              {social.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition-[border-color,transform,colors] duration-200 hover:border-violet-500/35 hover:text-white active:scale-95"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/[0.06] pt-10 text-center md:col-span-2 md:border-t-0 md:pt-0 lg:col-span-12 lg:border-t lg:pt-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              Field notes
            </p>
            <p className="mx-auto mt-2 max-w-md text-xs text-zinc-500 sm:text-sm md:mx-0">
              Occasional memos on performance, product craft, and launch
              discipline—no fluff.
            </p>
            <div className="mt-5 md:mx-0 lg:max-w-lg">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-[11px] text-zinc-600 sm:mt-14 sm:text-xs md:text-left">
          © {new Date().getFullYear()} Fikra Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
