/** Hero frame — local asset (see `public/images/hero-dashboard.png`). */
export const heroImage = "/images/hero-dashboard.png";

/** First project card (Unsplash analytics UI). */
export const heroDashboardImage =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=85&auto=format&fit=crop";

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#stack", label: "Stack" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
] as const;

export const services = [
  {
    n: "01",
    category: "Product Engineering",
    title: "Custom Product Engineering",
    description:
      "End-to-end product builds—typed systems, resilient architecture, and interfaces engineered for scale from day one.",
    stack: ["Next.js", "React", "TypeScript", "Edge"],
    featured: true,
  },
  {
    n: "02",
    category: "Platforms",
    title: "SaaS Platforms",
    description:
      "Auth, billing, multi-tenant patterns, and dashboards designed for retention, observability, and growth.",
    stack: ["Auth", "Stripe", "PostgreSQL", "Dashboards"],
    featured: false,
  },
  {
    n: "03",
    category: "Experience",
    title: "UI/UX Systems",
    description:
      "Product-led interfaces with clear hierarchy, accessible components, and flows tuned for conversion.",
    stack: ["Figma", "Design tokens", "Motion", "A11y"],
    featured: false,
  },
  {
    n: "04",
    category: "Performance",
    title: "Performance Engineering",
    description:
      "Core Web Vitals, caching strategy, and bundle discipline so every interaction feels instant.",
    stack: ["Lighthouse", "RUM", "CDN", "Images"],
    featured: false,
  },
  {
    n: "05",
    category: "Growth",
    title: "SEO & Analytics",
    description:
      "Structured metadata, instrumentation, and funnels you can measure—and improve with confidence.",
    stack: ["SEO", "GA4", "Events", "Schema"],
    featured: false,
  },
  {
    n: "06",
    category: "Integrations",
    title: "API Integrations",
    description:
      "Stripe, CRMs, data warehouses, and internal tools—connected with reliable error handling and observability.",
    stack: ["REST", "Webhooks", "ETL", "Observability"],
    featured: false,
  },
] as const;

export const processSteps = [
  {
    n: "01",
    tag: "Strategy",
    title: "Discover",
    description:
      "Align on goals, users, and success metrics before we commit to build.",
    meta: "2–3 days · Research & strategy",
  },
  {
    n: "02",
    tag: "UI/UX",
    title: "Design",
    description:
      "High-fidelity interfaces and systems your team can ship with confidence.",
    meta: "1–2 weeks · UI systems",
  },
  {
    n: "03",
    tag: "Engineering",
    title: "Develop",
    description:
      "Iterative builds, staging environments, and tight feedback every week.",
    meta: "Sprint cycles · Production ready",
  },
  {
    n: "04",
    tag: "Deployment",
    title: "Launch",
    description:
      "Hardening, monitoring, and a calm go-live with clear rollback paths.",
    meta: "3–5 days · Deployment",
  },
  {
    n: "05",
    tag: "Growth",
    title: "Optimize",
    description:
      "Post-launch tuning—performance, experiments, and the next lever to pull.",
    meta: "Ongoing · Growth loops",
  },
] as const;

export const projects = [
  {
    n: "01",
    title: "Northline Fintech Dashboard",
    category: "Fintech",
    summary:
      "Real-time portfolio analytics with role-based views, exportable reports, and audit-friendly activity logs.",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    metrics: [
      { label: "LCP", value: "0.9s" },
      { label: "Score", value: "98" },
      { label: "Uptime", value: "99.99%" },
    ],
    image: heroDashboardImage,
    alt: "Analytics dashboard with charts and KPI cards on a dark interface",
  },
  {
    n: "02",
    title: "Helix AI Workspace",
    category: "AI SaaS",
    summary:
      "Prompt workspaces, usage metering, and team governance for a fast-moving generative AI product.",
    tags: ["React", "Node.js", "Prisma"],
    metrics: [
      { label: "API p99", value: "118ms" },
      { label: "Tokens/mo", value: "420M" },
      { label: "NPS", value: "+54" },
    ],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1600&q=85&auto=format&fit=crop",
    alt: "Code editor and terminal on a developer workspace screen",
  },
  {
    n: "03",
    title: "Parcel Commerce Platform",
    category: "Ecommerce",
    summary:
      "Checkout, catalog, and fulfillment integrations with inventory sync and conversion-focused PDP templates.",
    tags: ["Next.js", "Stripe", "Edge"],
    metrics: [
      { label: "Checkout", value: "+18%" },
      { label: "AOV", value: "+9%" },
      { label: "Edge", value: "12 regions" },
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=85&auto=format&fit=crop",
    alt: "Warehouse shelving with stacked cartons and outbound shipping boxes",
  },
  {
    n: "04",
    title: "Pulse Analytics Suite",
    category: "Analytics",
    summary:
      "Event pipelines, cohort exploration, and executive summaries designed for operators, not just analysts.",
    tags: ["TypeScript", "PostgreSQL", "Observability"],
    metrics: [
      { label: "Events/s", value: "24k" },
      { label: "Freshness", value: "<60s" },
      { label: "Cost", value: "−31%" },
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=85&auto=format&fit=crop",
    alt: "Laptop showing business analytics charts and metrics",
  },
] as const;

export const stackItems = [
  { name: "Next.js", detail: "App Router, RSC-aware patterns" },
  { name: "React", detail: "Composable UI with strict boundaries" },
  { name: "TypeScript", detail: "End-to-end type safety" },
  { name: "Node.js", detail: "APIs, workers, and integrations" },
  { name: "Tailwind CSS", detail: "Tokenized, responsive systems" },
  { name: "PostgreSQL", detail: "Reliable relational data" },
  { name: "Prisma", detail: "Schema-first data access" },
  { name: "Framer Motion", detail: "Purposeful interface motion" },
];

export const testimonials = [
  {
    quote:
      "Fikra Labs shipped a credible v1 in weeks, not quarters. Performance and polish were non-negotiable for us—they delivered both.",
    company: "Lumengrid",
    role: "Co-founder",
    initials: "AR",
  },
  {
    quote:
      "Clear communication, tight scopes, and engineering that holds up when traffic spikes. Exactly what we needed pre-Series A.",
    company: "Stacksmith",
    role: "Head of Product",
    initials: "MK",
  },
  {
    quote:
      "Our conversion funnel finally matches the quality of the product. The handoff to our internal team was painless.",
    company: "Northwind Labs",
    role: "CEO",
    initials: "JL",
  },
];

export const pricingPlans = [
  {
    name: "Starter Website",
    description: "Launch-ready marketing site or focused product landing experience.",
    price: "From $8k",
    timeline: "3–5 weeks",
    features: [
      "Discovery workshop and sitemap",
      "Responsive UI up to 6 sections",
      "CMS-ready content structure",
      "Core performance pass (LCP/CLS)",
      "Analytics foundation (GA4 or Plausible)",
    ],
    cta: "Discuss scope",
    highlighted: false,
  },
  {
    name: "Growth Package",
    description: "Product surfaces, integrations, and iteration velocity for scaling teams.",
    price: "From $22k",
    timeline: "6–10 weeks",
    features: [
      "Design system starter + components",
      "Authenticated areas or dashboards",
      "Stripe or CRM integration (one primary)",
      "SEO + metadata automation",
      "Two post-launch optimization passes",
    ],
    cta: "Book strategy call",
    highlighted: true,
  },
  {
    name: "Custom Enterprise",
    description: "Multi-team programs, compliance-aware delivery, and dedicated capacity.",
    price: "Custom",
    timeline: "Quarterly roadmaps",
    features: [
      "Embedded squad or staff augmentation",
      "SLAs, on-call alignment, and runbooks",
      "Advanced data and observability",
      "Security review support",
      "Executive reporting and QBR-ready metrics",
    ],
    cta: "Talk to us",
    highlighted: false,
  },
];

export const faqItems = [
  {
    q: "What do typical project timelines look like?",
    a: "Marketing sites often land in 3–6 weeks. Product work with auth, billing, or dashboards commonly spans 6–12 weeks depending on scope and review cadence. We ship in milestones so you see progress weekly.",
  },
  {
    q: "How does pricing work?",
    a: "We price fixed phases where requirements are clear, and time-and-materials with a cap when exploration is part of the value. Every engagement starts with a written scope and acceptance criteria.",
  },
  {
    q: "Do you provide maintenance after launch?",
    a: "Yes. Most teams choose a lightweight monthly retainer for upgrades, monitoring checks, and small enhancements—plus an on-demand bucket for larger initiatives.",
  },
  {
    q: "Can you help with SEO?",
    a: "We implement technical SEO (metadata, structured data, sitemaps, performance), and we partner with your content strategy. We avoid vanity metrics and focus on measurable funnel impact.",
  },
  {
    q: "Who owns hosting and infrastructure?",
    a: "We deploy to your Vercel, AWS, or GCP accounts so you retain ownership. We document environments, secrets handling, and rollback paths as part of launch.",
  },
  {
    q: "How do revisions work?",
    a: "Each phase includes structured review rounds. We batch feedback to protect schedule and quality, and we flag scope changes early with options—not surprises.",
  },
];
