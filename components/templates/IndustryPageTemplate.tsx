"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon, ArrowRight, ChevronRight, CheckCircle2, Shield } from "lucide-react";
import {
  Container,
  FadeIn,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui";

interface Challenge {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Solution {
  title: string;
  description: string;
  features: string[];
}

interface UseCase {
  title: string;
  description: string;
  features: string[];
}

interface Compliance {
  name: string;
  description: string;
}

interface TechItem {
  name: string;
  description: string;
}

export interface IndustryPageProps {
  // Hero
  industry: string;
  headline: string;
  subheadline: string;
  heroIcon: LucideIcon;
  accentColor: string; // Tailwind color class like "blue" or "green"

  // Content
  challenges: Challenge[];
  solutions: Solution[];
  useCases: UseCase[];
  compliance?: Compliance[];
  techStack: TechItem[];

  // CTA
  ctaHeadline: string;
  ctaDescription: string;
}

export function IndustryPageTemplate({
  industry,
  headline,
  subheadline,
  heroIcon: HeroIcon,
  accentColor,
  challenges,
  solutions,
  useCases,
  compliance,
  techStack,
  ctaHeadline,
  ctaDescription,
}: IndustryPageProps) {
  const accentBg = `bg-${accentColor}-500`;
  const accentBgLight = `bg-${accentColor}-500/20`;
  const accentText = `text-${accentColor}-500`;
  const accentBorder = `border-${accentColor}-500/30`;

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#141414] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#F5A623]/20 rounded-full blur-[120px]`}
          />
        </div>

        <Container>
          <div className="relative z-10 max-w-4xl">
            {/* Breadcrumb */}
            <FadeIn>
              <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/industries" className="hover:text-white transition-colors">
                  Industries
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-[#F5A623]">{industry}</span>
              </nav>
            </FadeIn>

            <FadeIn>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#F5A623] text-sm font-medium mb-6">
                <HeroIcon className="w-4 h-4" />
                {industry} Solutions
              </span>
            </FadeIn>

            <FadeInUp delay={0.1}>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-6">
                {headline}
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mb-8">
                {subheadline}
              </p>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#F5A623] text-black px-6 py-3 rounded-xl font-semibold hover:bg-[#F5A623]/90 transition-all hover:scale-[1.02]"
                >
                  Discuss Your {industry} Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/estimate"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all"
                >
                  Get an Estimate
                </Link>
              </div>
            </FadeInUp>
          </div>
        </Container>
      </section>

      {/* Challenges Section */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <FadeInUp>
            <div className="text-center mb-12 lg:mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-4">
                Industry Challenges
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
                Challenges We Solve
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We understand the unique obstacles facing {industry.toLowerCase()} organizations
                and build solutions that address them head-on.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge) => (
              <StaggerItem key={challenge.title}>
                <div className="bg-gray-50 rounded-xl p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mb-4">
                    <challenge.icon className="w-6 h-6 text-[#F5A623]" />
                  </div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Solutions Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <Container>
          <FadeInUp>
            <div className="text-center mb-12 lg:mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-4">
                Our Solutions
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
                What We Build for {industry}
              </h2>
            </div>
          </FadeInUp>

          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <FadeInUp key={solution.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gray-200">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                      <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {solution.description}
                      </p>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="grid sm:grid-cols-2 gap-3">
                        {solution.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Use Cases Section */}
      <section className="bg-[#141414] py-16 lg:py-24">
        <Container>
          <FadeInUp>
            <div className="text-center mb-12 lg:mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5A623]/20 text-[#F5A623] text-sm font-medium mb-4">
                Use Cases
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                Example Applications
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Imagine what&apos;s possible. Here are some app concepts we can build for {industry.toLowerCase()}.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <StaggerItem key={useCase.title}>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 h-full hover:border-[#F5A623]/30 transition-colors">
                  <h3 className="font-heading font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Compliance Section (if applicable) */}
      {compliance && compliance.length > 0 && (
        <section className="bg-white py-16 lg:py-24">
          <Container>
            <FadeInUp>
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
                  <Shield className="w-3 h-3" />
                  Compliance & Standards
                </span>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
                  Built for Compliance
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We understand the regulatory landscape and build with compliance in mind from day one.
                </p>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {compliance.map((item) => (
                <StaggerItem key={item.name}>
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-heading font-bold text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>
      )}

      {/* Tech Stack Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <Container>
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
                Technology
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
                Tech Stack for {industry}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We use industry-leading technologies suited for {industry.toLowerCase()} applications.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {techStack.map((tech) => (
              <StaggerItem key={tech.name}>
                <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#F5A623]/50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {tech.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-[#141414] py-16 lg:py-24">
        <Container>
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                {ctaHeadline}
              </h2>
              <p className="text-gray-400 mb-8">
                {ctaDescription}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#F5A623] text-black px-8 py-4 rounded-xl font-semibold hover:bg-[#F5A623]/90 transition-all hover:scale-[1.02]"
                >
                  Start Your {industry} Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/estimate"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
                >
                  Get a Free Estimate
                </Link>
              </div>
            </div>
          </FadeInUp>
        </Container>
      </section>
    </main>
  );
}
