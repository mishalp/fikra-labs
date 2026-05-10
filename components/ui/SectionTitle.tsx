type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /** Oversized index for editorial rhythm (e.g. "03") */
  index?: string;
  layout?: "default" | "editorial";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  index,
  layout = "default",
  className = "",
}: SectionTitleProps) {
  const isEditorial = layout === "editorial" && index;

  if (isEditorial) {
    return (
      <div
        className={`flex max-w-4xl flex-col gap-4 sm:max-w-5xl sm:flex-row sm:items-end sm:gap-8 lg:gap-12 ${
          align === "center" ? "mx-auto text-center sm:text-left" : ""
        } ${className}`}
      >
        <span
          className="select-none font-mono text-[clamp(3.5rem,12vw,7rem)] font-semibold leading-none tracking-tighter text-white/[0.06] sm:text-[clamp(4rem,10vw,6.5rem)]"
          aria-hidden
        >
          {index}
        </span>
        <div className="min-w-0 flex-1 space-y-3 sm:space-y-4">
          {eyebrow ? (
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300/90 sm:text-xs">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-[clamp(1.65rem,5vw,3.1rem)] font-semibold leading-[1.12] tracking-tight text-white text-balance">
            {title}
          </h2>
          {subtitle ? (
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base sm:leading-relaxed">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  const alignClass =
    align === "center"
      ? "text-center mx-auto items-center"
      : "text-left items-start";

  return (
    <div className={`flex max-w-3xl flex-col gap-3 sm:gap-4 ${alignClass} ${className}`}>
      {eyebrow ? (
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300/90 sm:text-xs sm:tracking-[0.2em]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[clamp(1.65rem,5vw,3rem)] font-semibold leading-[1.15] tracking-tight text-white text-balance">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base sm:leading-relaxed ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
