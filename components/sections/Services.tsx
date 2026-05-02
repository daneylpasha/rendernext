"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Smartphone, Globe, Brain, Palette, Rocket, ShieldCheck, ArrowRight } from "lucide-react";
import { Container, FadeInUp } from "@/components/ui";

const services = [
  {
    number: "01", icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform apps with React Native. Smooth performance, beautiful UI, deployed to App Store and Google Play.",
    link: "/services/mobile-development", price: "from $15K",
  },
  {
    number: "02", icon: Globe,
    title: "Web App Development",
    description: "Scalable web applications with Next.js and React. Fast, SEO-optimized, and built for growth.",
    link: "/services/web-development", price: "from $10K",
  },
  {
    number: "03", icon: Brain,
    title: "AI Solutions",
    description: "Intelligent features that set you apart. Chatbots, automation, recommendations, and LLM integration.",
    link: "/services/ai-solutions", price: "custom",
  },
  {
    number: "04", icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that converts. Wireframes, prototypes, and pixel-perfect interfaces.",
    link: "/services/ui-ux-design", price: "from $1K",
  },
  {
    number: "05", icon: Rocket,
    title: "MVP Development",
    description: "Validate your idea fast. Investor-ready MVPs in 8–12 weeks with the features that matter.",
    link: "/services/mvp-development", price: "from $15K",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[#141414] py-20 lg:py-28 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 65%)" }} />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <FadeInUp>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623] mb-3">
              What We Do
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
              Services That Drive Growth
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-white/45 text-lg leading-relaxed max-w-2xl mx-auto">
              End-to-end digital product development, from concept to launch and beyond.
            </p>
          </FadeInUp>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

          {/* Featured card — Mobile (spans 2 rows) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="lg:row-span-2 rounded-2xl p-8 flex flex-col relative overflow-hidden group
              cursor-default hover:-translate-y-1 transition-transform duration-300"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.10)",
              backdropFilter: "blur(8px)",
            }}
          >
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-100 group-hover:opacity-100"
              style={{ background: "radial-gradient(ellipse at top right, rgba(245,166,35,0.18) 0%, transparent 55%)" }} />
            {/* Top accent */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#F5A623]/50 to-transparent" />

            <span className="relative z-10 text-[#F5A623]/35 font-mono text-xs tracking-widest mb-6">01</span>

            <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-7 transition-all duration-300 group-hover:scale-105"
              style={{ background: "rgba(245,166,35,0.15)", boxShadow: "0 0 30px rgba(245,166,35,0.15)" }}>
              <Smartphone className="w-8 h-8 text-[#F5A623]" />
            </div>

            <h3 className="relative z-10 font-heading text-2xl lg:text-3xl font-bold text-white leading-tight mb-4">
              Mobile App Development
            </h3>
            <p className="relative z-10 text-white/45 text-base leading-relaxed flex-1 mb-8">
              Native and cross-platform apps with React Native. Smooth performance, beautiful UI, deployed to App Store and Google Play.
            </p>

            <div className="relative z-10 flex items-center justify-between pt-5 border-t border-white/[0.08]">
              <Link href="/services/mobile-development"
                className="inline-flex items-center gap-2 text-[#F5A623] font-semibold text-sm group/link">
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
              <span className="text-white/20 text-xs font-mono">from $15K</span>
            </div>
          </motion.div>

          {/* Standard cards */}
          {services.slice(1).map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + idx * 0.08, ease: "easeOut" }}
              className="rounded-2xl p-6 flex flex-col group relative overflow-hidden cursor-default
                hover:-translate-y-1 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,166,35,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              <span className="text-xs font-mono text-white/20 mb-3 relative z-10">{service.number}</span>

              <div className="w-11 h-11 rounded-xl bg-[#F5A623]/12 flex items-center justify-center mb-4 relative z-10
                group-hover:bg-[#F5A623]/22 group-hover:scale-105 transition-all duration-300">
                <service.icon className="w-5 h-5 text-[#F5A623]" />
              </div>

              <h3 className="font-heading text-lg font-bold text-white/90 mb-2 group-hover:text-white transition-colors relative z-10">
                {service.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed flex-1 mb-4 relative z-10">{service.description}</p>

              <div className="flex items-center justify-between relative z-10">
                <Link href={service.link}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#F5A623] group/link">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
                <span className="text-white/20 text-xs font-mono">{service.price}</span>
              </div>
            </motion.div>
          ))}

          {/* Wide footer card — Maintenance */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
            className="lg:col-span-3 rounded-2xl p-6 lg:p-8 group relative overflow-hidden cursor-default
              hover:-translate-y-0.5 transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="absolute right-0 top-0 bottom-0 w-72 pointer-events-none"
              style={{ background: "linear-gradient(to left, rgba(245,166,35,0.05), transparent)" }} />

            <div className="flex flex-col lg:flex-row lg:items-center gap-6 relative z-10">
              <div className="w-11 h-11 rounded-xl bg-[#F5A623]/12 flex items-center justify-center flex-shrink-0
                group-hover:bg-[#F5A623]/22 transition-colors duration-300">
                <ShieldCheck className="w-5 h-5 text-[#F5A623]" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-mono text-white/20">06</span>
                <h3 className="font-heading text-xl font-bold text-white/90 mt-0.5 mb-1 group-hover:text-white transition-colors">
                  Maintenance &amp; Support
                </h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-xl">
                  Keep your product running smoothly. Bug fixes, updates, monitoring, and 24/7 support.
                </p>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0 lg:pl-6 lg:border-l lg:border-white/[0.08]">
                <span className="text-white/25 text-sm font-mono whitespace-nowrap">from $1.5K/mo</span>
                <Link href="/services/maintenance"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300
                    bg-[#F5A623] text-[#141414] hover:bg-[#FFB84D] hover:shadow-lg hover:shadow-[#F5A623]/25">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
