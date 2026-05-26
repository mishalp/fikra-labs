"use client";

import Image from "next/image";
import { projects } from "@/lib/site-content";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

type Project = (typeof projects)[number];

function ProjectTags({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2 border-t border-white/[0.06] pt-4">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] text-zinc-500"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function ProjectMetrics({ metrics }: { metrics: Project["metrics"] }) {
  return (
    <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-white/[0.06] pt-4">
      {metrics.map((m) => (
        <div key={m.label} className="min-w-0">
          <dt className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">
            {m.label}
          </dt>
          <dd className="mt-0.5 truncate text-sm font-semibold tabular-nums text-white sm:text-base">
            {m.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function ProjectCta() {
  return (
    <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-medium text-violet-200/90 transition-colors duration-300 ease-out group-hover:text-violet-100">
      View case study
      <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </span>
    </span>
  );
}

function PreviewFrame({
  project,
  priority = false,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: {
  project: Project;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/[0.08] bg-[#070b14] ${className}`}
    >
      <div
        className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2"
        aria-hidden
      >
        <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
        <span className="ml-2 font-mono text-[9px] text-zinc-600">preview · live</span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden sm:aspect-video lg:aspect-[16/11]">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          className="object-cover object-left-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          sizes={sizes}
          priority={priority}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030510]/50 via-transparent to-indigo-500/5" />
      </div>
    </div>
  );
}

function ProjectMetaHeader({ project }: { project: Project }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-300/85">
          {project.category}
        </p>
        <p className="mt-1.5 font-mono text-[11px] tabular-nums text-zinc-500">{project.n}</p>
      </div>
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-[border-color,background-color] duration-300 ease-out md:hover:border-violet-500/30 md:hover:bg-white/[0.03]">
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute right-4 top-4 select-none font-mono text-[5rem] font-semibold leading-none tracking-tighter text-white/[0.04] sm:text-[6rem] lg:right-8 lg:top-6"
        aria-hidden
      >
        {project.n}
      </span>

      <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-12 lg:gap-8 lg:p-8 xl:p-10">
        <div className="lg:col-span-7">
          <PreviewFrame
            project={project}
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="shadow-[0_24px_64px_-32px_rgba(0,0,0,0.8)]"
          />
        </div>
        <div className="flex flex-col justify-center lg:col-span-5 lg:py-2">
          <ProjectMetaHeader project={project} />
          <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-[15px] sm:leading-relaxed">
            {project.summary}
          </p>
          <ProjectMetrics metrics={project.metrics} />
          <ProjectTags tags={project.tags} />
          <ProjectCta />
        </div>
      </div>
    </article>
  );
}

function CompactProject({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-[border-color,background-color] duration-300 ease-out md:hover:border-violet-500/30 md:hover:bg-white/[0.03]">
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute right-3 top-3 font-mono text-[3rem] font-semibold leading-none text-white/[0.05]"
        aria-hidden
      >
        {project.n}
      </span>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <PreviewFrame project={project} sizes="(max-width: 1024px) 100vw, 40vw" />
        <div className="mt-5 flex flex-1 flex-col">
          <ProjectMetaHeader project={project} />
          <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{project.summary}</p>
          <ProjectMetrics metrics={project.metrics} />
          <ProjectCta />
        </div>
      </div>
    </article>
  );
}

function EditorialProject({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-[border-color,background-color] duration-300 ease-out md:hover:border-violet-500/30 md:hover:bg-white/[0.03]">
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-violet-500/10 via-violet-400/25 to-transparent"
        aria-hidden
      />
      <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-12 lg:items-center lg:gap-10 lg:p-8">
        <div className="flex flex-col justify-center lg:col-span-4 lg:order-1">
          <ProjectMetaHeader project={project} />
          <h3 className="mt-4 text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
            {project.summary}
          </p>
          <ProjectMetrics metrics={project.metrics} />
          <ProjectTags tags={project.tags} />
          <ProjectCta />
        </div>
        <div className="lg:col-span-8 lg:order-2">
          <PreviewFrame
            project={project}
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="lg:shadow-[0_32px_80px_-40px_rgba(0,0,0,0.85)]"
          />
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [featured, supportingA, supportingB, immersive] = projects;

  return (
    <section
      id="work"
      className="projects-editorial relative overflow-x-clip border-y border-white/[0.05] py-14 sm:py-20 lg:py-24 xl:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(70vh,30rem)] bg-[radial-gradient(ellipse_60%_50%_at_20%_0%,rgba(99,102,241,0.1),transparent)]"
        aria-hidden
      />
      <div
        className="bg-grid-faint pointer-events-none absolute inset-0 opacity-[0.22]"
        aria-hidden
      />
      <p
        className="projects-editorial-watermark pointer-events-none absolute left-[-6%] top-[20%] hidden select-none font-mono text-[clamp(3rem,11vw,8.5rem)] font-semibold uppercase leading-none tracking-tighter text-white/[0.022] lg:block"
        aria-hidden
      >
        Archive
      </p>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-10 xl:gap-14">
          <div className="lg:col-span-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-300/90 sm:text-xs">
              Selected work
            </p>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.75rem,4.5vw,2.85rem)] font-semibold leading-[1.08] tracking-tight text-white text-balance">
              Digital products engineered for precision and depth.
            </h2>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base sm:leading-relaxed lg:col-span-5 lg:mt-0 lg:pb-1 lg:text-right">
            We build scalable systems for speed, clarity, and long-term growth—case
            studies with measurable outcomes, not slideshows.
          </p>
        </header>

        <RevealGroup className="mt-12 sm:mt-14 lg:mt-16">
          <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
            <RevealItem as="div" index={0} className="w-full">
              <div className="projects-panel w-full">
                <FeaturedProject project={featured} />
              </div>
            </RevealItem>

            <div className="grid gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-6">
              <RevealItem as="div" index={1} className="lg:col-span-5">
                <div className="projects-panel h-full">
                  <CompactProject project={supportingA} />
                </div>
              </RevealItem>
              <RevealItem as="div" index={2} className="lg:col-span-7">
                <div className="projects-panel h-full">
                  <CompactProject project={supportingB} />
                </div>
              </RevealItem>
            </div>

            <RevealItem as="div" index={3} className="w-full">
              <div className="projects-panel w-full">
                <EditorialProject project={immersive} />
              </div>
            </RevealItem>
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
