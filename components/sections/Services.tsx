"use client";

import * as React from "react";
import Link from "next/link";
import {
  Smartphone,
  Globe,
  Brain,
  Palette,
  Rocket,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import {
  Container,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui";

const services = [
  {
    number: "01",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps with React Native. Smooth performance, beautiful UI, deployed to App Store and Google Play.",
    link: "/services/mobile-development",
  },
  {
    number: "02",
    icon: Globe,
    title: "Web App Development",
    description:
      "Scalable web applications with Next.js and React. Fast, SEO-optimized, and built for growth.",
    link: "/services/web-development",
  },
  {
    number: "03",
    icon: Brain,
    title: "AI Solutions",
    description:
      "Intelligent features that set you apart. Chatbots, automation, recommendations, and LLM integration.",
    link: "/services/ai-solutions",
  },
  {
    number: "04",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that converts. Wireframes, prototypes, and pixel-perfect interfaces.",
    link: "/services/design",
  },
  {
    number: "05",
    icon: Rocket,
    title: "MVP Development",
    description:
      "Validate your idea fast. We build investor-ready MVPs in 8-12 weeks with core features that matter.",
    link: "/services/mvp",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Maintenance & Support",
    description:
      "Keep your product running smoothly. Bug fixes, updates, monitoring, and 24/7 support.",
    link: "/services/maintenance",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInUp>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
              What We Do
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Services That Drive Growth
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-gray-600 font-normal text-lg leading-relaxed max-w-2xl mx-auto">
              End-to-end digital product development, from concept to launch and
              beyond.
            </p>
          </FadeInUp>
        </div>

        {/* Services Grid */}
        <StaggerContainer
          staggerDelay={0.1}
          delayChildren={0.2}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10"
        >
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div
                className="bg-white border border-gray-200 rounded-2xl p-8 h-full
                  transition-all duration-300 ease-out group relative
                  hover:-translate-y-1.5 hover:shadow-xl hover:border-[#F5A623]/50"
              >
                {/* Number Badge */}
                <span className="absolute top-6 right-6 text-sm font-mono font-semibold text-gray-300
                  group-hover:text-[#F5A623]/60 transition-colors duration-300">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#F5A623]/10 flex items-center justify-center mb-5
                  transition-all duration-300 group-hover:scale-110 group-hover:bg-[#F5A623]/20">
                  <service.icon className="w-7 h-7 text-[#F5A623]" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl lg:text-2xl font-bold text-gray-900 leading-tight tracking-tight mb-4
                  group-hover:text-[#F5A623] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 font-normal text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#F5A623]
                    group/link link-underline"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
