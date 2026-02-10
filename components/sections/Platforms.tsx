"use client";

import * as React from "react";
import {
  Container,
  FadeIn,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  CountUp,
} from "@/components/ui";

const platforms = [
  "App Store",
  "Google Play",
  "AWS",
  "Vercel",
  "Firebase",
  "OpenAI",
  "Expo",
  "GitHub",
];

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 8, suffix: "-12", label: "Weeks to Launch" },
  { value: 100, suffix: "%", label: "Code Ownership" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

function PlatformBadge({ name }: { name: string }) {
  return (
    <div
      className="flex-shrink-0 px-6 py-3 rounded-lg
        bg-gray-100 hover:bg-gray-200
        border border-transparent hover:border-gray-300
        transition-all duration-300 cursor-default
        hover:-translate-y-0.5"
    >
      <span className="text-gray-500 hover:text-gray-900 text-sm font-medium whitespace-nowrap transition-colors duration-300">
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
        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <div
          className="flex gap-4 animate-marquee-left"
          style={{ width: "fit-content" }}
        >
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
    <section
      id="platforms"
      className="bg-white py-12 lg:py-16"
    >
      <Container>
        {/* Section Label */}
        <FadeInUp>
          <p className="text-center text-gray-500 font-semibold text-sm uppercase tracking-widest mb-8">
            We Build & Deploy On
          </p>
        </FadeInUp>

        {/* Platform Marquee */}
        <PlatformMarquee />

        {/* Stats Row */}
        <FadeInUp delay={0.3} className="mt-12 pt-12 border-t border-gray-100">
          <StaggerContainer staggerDelay={0.1} delayChildren={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 leading-none mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
                </p>
                <p className="text-sm font-normal text-gray-500">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeInUp>
      </Container>
    </section>
  );
}
