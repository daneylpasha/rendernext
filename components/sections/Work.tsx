"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Container,
  FadeInUp,
  StaggerContainer,
  StaggerItemScale,
} from "@/components/ui";

const projects = [
  {
    tag: "SaaS Product",
    title: "Cartaisy",
    description:
      "AI-powered shopping assistant that helps users discover deals, track prices, and make smarter purchase decisions.",
    tech: ["React Native", "Node.js", "AI/ML", "PostgreSQL"],
    link: "/work/cartaisy",
    isLive: true,
    gradient: "from-amber-600 to-orange-700",
    featuredImage: "/assets/images/cartaisy.png",
  },
  {
    tag: "Health & Fitness",
    title: "FitPlus",
    description:
      "Comprehensive fitness tracking app with personalized workout plans, nutrition logging, and progress analytics.",
    tech: ["React Native", "Firebase", "Charts", "HealthKit"],
    link: "/work/fitplus",
    isLive: false,
    gradient: "from-emerald-600 to-teal-700",
    featuredImage: "/assets/images/fitplus.png",
  },
  {
    tag: "E-Commerce",
    title: "OrderFlow",
    description:
      "Restaurant ordering platform with real-time tracking, seamless payments, and loyalty rewards system.",
    tech: ["Next.js", "React Native", "Stripe", "Maps API"],
    link: "/work/orderflow",
    isLive: false,
    gradient: "from-violet-600 to-purple-700",
    featuredImage: "/assets/images/orderflow.png",
  },
];

export function Work() {
  return (
    <section id="work" className="bg-[#F7F7F7] py-20 lg:py-28">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInUp>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
              Our Work
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Projects We&apos;ve Built
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-gray-600 font-normal text-lg leading-relaxed max-w-2xl mx-auto">
              Real products, real results. Here&apos;s a glimpse of what we create.
            </p>
          </FadeInUp>
        </div>

        {/* Projects Grid */}
        <StaggerContainer
          staggerDelay={0.15}
          delayChildren={0.2}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10"
        >
          {projects.map((project) => (
            <StaggerItemScale key={project.title}>
              <Link
                href={project.link}
                className="block bg-white border border-gray-200 rounded-2xl overflow-hidden h-full
                  transition-all duration-300 ease-out group shadow-sm cursor-pointer
                  hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#F5A623]/10 hover:border-[#F5A623]/40"
              >
                {/* Image Area */}
                <div className={`aspect-video bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  {project.featuredImage ? (
                    <>
                      <Image
                        src={project.featuredImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Overlay that lightens on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-white/5 transition-colors duration-300" />
                    </>
                  ) : (
                    <>
                      {/* Zoom effect on hover */}
                      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-3
                            transition-transform duration-300 group-hover:scale-110">
                            <span className="text-3xl font-bold text-white">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                          <span className="text-white/60 text-sm">Preview Coming Soon</span>
                        </div>
                      </div>

                      {/* Overlay that lightens on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-white/5 transition-colors duration-300" />
                    </>
                  )}

                  {/* Live Badge */}
                  {project.isLive && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full z-10">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-white text-xs font-medium">Live</span>
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-6">
                  {/* Tag */}
                  <span className="inline-block bg-[#F5A623]/10 text-[#F5A623] text-xs font-medium px-3 py-1 rounded-full
                    transition-all duration-300 group-hover:bg-[#F5A623]/20">
                    {project.tag}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-gray-900 leading-tight tracking-tight mt-4 mb-3
                    group-hover:text-[#F5A623] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-normal text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded
                          transition-all duration-300 group-hover:bg-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <span
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#F5A623] mt-4
                      group/link link-underline"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </StaggerItemScale>
          ))}
        </StaggerContainer>

        {/* View All Projects */}
        <FadeInUp delay={0.5} className="text-center mt-16">
          <p className="text-gray-500 font-normal text-sm mb-4">Showing 3 Featured Projects</p>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
              border-2 border-gray-300 text-gray-700 font-medium text-sm
              transition-all duration-300 ease-out group
              hover:scale-[1.02] hover:border-[#F5A623] hover:text-[#F5A623] hover:bg-[#F5A623]/5"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeInUp>
      </Container>
    </section>
  );
}
