"use client";

import * as React from "react";
import { Container, FadeIn, FadeInUp, StaggerContainer, StaggerItem, CountUp } from "@/components/ui";

const platforms = ["App Store", "Google Play", "AWS", "Vercel", "Firebase", "OpenAI", "Expo", "GitHub"];

const stats = [
  { value: 5,   suffix: "+",    label: "Years Experience" },
  { value: 8,   suffix: "-12",  label: "Weeks to Launch" },
  { value: 100, suffix: "%",    label: "Code Ownership" },
  { value: 24,  suffix: "/7",   label: "Support Available" },
];

function PlatformBadge({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 px-5 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.08]
      hover:bg-white/[0.09] hover:border-[#F5A623]/25 transition-all duration-300 cursor-default hover:-translate-y-0.5">
      <span className="text-white/45 hover:text-white/70 text-sm font-medium whitespace-nowrap transition-colors duration-300">
        {name}
      </span>
    </div>
  );
}

function PlatformMarquee() {
  const duplicatedPlatforms = [...platforms, ...platforms];
  return (
    <FadeIn delay={0.2}>
      <div className="relative overflow-hidden py-4">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#141414] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#141414] to-transparent z-10 pointer-events-none" />
        <div className="flex gap-3 animate-marquee-left" style={{ width: "fit-content" }}>
          {duplicatedPlatforms.map((platform, index) => (
            <PlatformBadge key={`${platform}-${index}`} name={platform} />
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export function Platforms() {
  return (
    <section id="platforms" className="bg-[#141414] py-12 lg:py-16">
      <Container>
        <FadeInUp>
          <p className="text-center text-white/30 font-semibold text-xs uppercase tracking-[0.2em] mb-8">
            We Build &amp; Deploy On
          </p>
        </FadeInUp>

        <PlatformMarquee />

        <FadeInUp delay={0.3} className="mt-12 pt-10 border-t border-white/[0.07]">
          <StaggerContainer staggerDelay={0.1} delayChildren={0.1}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-white leading-none mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
                </p>
                <p className="text-sm font-normal text-white/35">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeInUp>
      </Container>
    </section>
  );
}
