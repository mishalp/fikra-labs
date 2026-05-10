import type { ReactNode } from "react";

type FikraFrameProps = {
  children: ReactNode;
  className?: string;
  /** Second offset border ring */
  offset?: boolean;
  /** Reserved — gradient edge is static for performance */
  animateEdge?: boolean;
};

export function FikraFrame({
  children,
  className = "",
  offset = true,
}: FikraFrameProps) {
  return (
    <div
      className={`fikra-frame ${offset ? "fikra-frame--offset" : ""} ${className}`}
    >
      <div className="fikra-frame__inner">{children}</div>
    </div>
  );
}
