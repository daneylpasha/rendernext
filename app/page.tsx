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
      <Hero />
      <SectionDivider from="dark" to="light" variant="curve" />
      <TrustBadges />
      <Platforms />
      <Services />
      <SectionDivider from="light" to="dark" variant="curve" flip />
      <Promises />
      <SectionDivider from="dark" to="muted" variant="wave" />
      <Work />
      <FeaturedProduct />
      <Process />
      <Industries />
      <SectionDivider from="light" to="dark" variant="curve" flip />
      <TechStack />
      <SectionDivider from="dark" to="light" variant="wave" />
      <FAQ />
      <SectionDivider from="light" to="dark" variant="curve" flip />
      <Metrics />
      <CTA />
    </main>
  );
}
