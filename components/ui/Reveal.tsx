"use client";

import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const RevealCtx = createContext(false);

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
  threshold?: number;
};

export function RevealGroup({
  children,
  className = "",
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.08,
}: RevealGroupProps) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { rootMargin, threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin, threshold]);

  return (
    <RevealCtx.Provider value={active}>
      <div
        ref={ref}
        className={className}
        data-reveal-active={active ? "true" : "false"}
      >
        {children}
      </div>
    </RevealCtx.Provider>
  );
}

type RevealAs = "div" | "li" | "article" | "span";

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  as?: RevealAs;
  index?: number;
  staggerMs?: number;
  variant?: "fade-up" | "fade-in" | "scale-in";
};

export function RevealItem({
  children,
  className = "",
  as: Tag = "div",
  index = 0,
  staggerMs = 42,
  variant = "fade-up",
}: RevealItemProps) {
  const active = useContext(RevealCtx);

  const hidden =
    variant === "fade-in"
      ? "opacity-0"
      : variant === "scale-in"
        ? "opacity-0 scale-[0.96]"
        : "opacity-0 translate-y-4";

  const anim =
    variant === "fade-in"
      ? "animate-fade-in"
      : variant === "scale-in"
        ? "animate-scale-in"
        : "animate-fade-up";

  const delay = `${Math.min(index, 14) * staggerMs}ms`;

  return createElement(
    Tag,
    {
      className: `${className} ${active ? anim : hidden}`.trim(),
      style: active ? { animationDelay: delay } : undefined,
    },
    children,
  );
}
