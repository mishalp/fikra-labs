import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-[transform,colors,opacity] duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400";

const variants: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-[0_0_28px_-12px_rgba(139,92,246,0.45)] hover:from-violet-500 hover:to-indigo-400 md:shadow-[0_0_40px_-10px_rgba(139,92,246,0.55)]",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:border-violet-400/40 hover:bg-white/10",
  ghost: "text-zinc-200 hover:text-white hover:bg-white/5",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  external,
  onClick,
}: CTAButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  );
}
