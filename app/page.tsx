import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-violet-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <SectionDivider className="mb-0" />
        <TrustedBy />
        <Services />
        <Process />
        <Projects />
        <TechStack />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
