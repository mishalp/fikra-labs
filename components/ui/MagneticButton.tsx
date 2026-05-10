"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

/**
 * Subtle pointer-follow on fine pointers only. Skips listeners on coarse
 * pointers to save main-thread + compositor work on phones.
 */
export function MagneticButton({
  children,
  className = "",
  strength = 0.1,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [coarse, setCoarse] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const apply = () => setCoarse(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const onMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    },
    [strength],
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate3d(0,0,0)";
  }, []);

  if (coarse === null || coarse === true) {
    return <div className={`inline-flex ${className}`}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`inline-flex md:will-change-transform ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
