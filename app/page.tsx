import { Hero } from "@/components/sections/Hero";
import { Platforms } from "@/components/sections/Platforms";
import { Services } from "@/components/sections/Services";
import { Promises } from "@/components/sections/Promises";
import { Work } from "@/components/sections/Work";
import { FeaturedProduct } from "@/components/sections/FeaturedProduct";
import { Process } from "@/components/sections/Process";
import { Industries } from "@/components/sections/Industries";
import { TechStack } from "@/components/sections/TechStack";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { SectionDivider } from "@/components/ui";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { Metrics } from "@/components/sections/Metrics";

export default function Home() {
  return (
    <main>
      {/* ── Dark zone: Hero → Promises ─────────────────────────── */}
      <Hero />
      <TrustBadges />
      <Platforms />
      <Services />
      <Promises />
      {/* ── Light zone: Work → Industries ───────────────────────── */}
      <SectionDivider from="dark" to="light" variant="wave" />
      <Work />
      <FeaturedProduct />
      <Process />
      <Industries />
      {/* ── Dark zone: TechStack → CTA ──────────────────────────── */}
      <SectionDivider from="light" to="dark" variant="curve" flip />
      <TechStack />
      <FAQ />
      <Metrics />
      <CTA />
    </main>
  );
}
