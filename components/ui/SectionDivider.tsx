export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`section-divider px-4 sm:px-6 lg:px-8 ${className}`}
      aria-hidden
    />
  );
}
