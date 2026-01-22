"use client";

import * as React from "react";
import {
  Container,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui";

const industries = [
  "Healthcare & Fitness",
  "E-Commerce & Retail",
  "FinTech & Banking",
  "Education & E-Learning",
  "Real Estate",
  "Travel & Hospitality",
  "Food & Delivery",
  "Social & Community",
  "SaaS & B2B",
  "Entertainment & Media",
  "Logistics & Transport",
  "Non-Profit",
];

export function Industries() {
  return (
    <section id="industries" className="bg-white py-20 lg:py-28">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <FadeInUp>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
              Industries
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Solutions for Every Sector
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-gray-600 font-normal text-lg leading-relaxed max-w-2xl mx-auto">
              We bring deep expertise across diverse industries, helping businesses of all types succeed in mobile and web.
            </p>
          </FadeInUp>
        </div>

        {/* Industry Badges */}
        <StaggerContainer
          staggerDelay={0.05}
          delayChildren={0.2}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {industries.map((industry) => (
            <StaggerItem key={industry}>
              <div
                className="px-5 py-2.5 rounded-full
                  border border-gray-200
                  text-gray-700 text-sm font-medium
                  hover:border-[#F5A623] hover:text-[#F5A623]
                  transition-all duration-300 cursor-default hover:scale-105"
              >
                {industry}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
