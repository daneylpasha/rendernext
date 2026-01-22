"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Container } from "@/components/ui";

const techRowOne = [
  "React Native",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Expo",
];

const techRowTwo = [
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "AWS",
  "OpenAI",
];

const expertiseBadges = [
  "React Native Experts",
  "AI Integration Specialists",
  "Full-Stack Development",
  "5+ Years Experience",
];

function TechCard({ name }: { name: string }) {
  return (
    <div
      className="flex-shrink-0 px-5 py-3 rounded-lg
        bg-white/[0.04]
        border border-white/[0.08]
        hover:bg-white/[0.08]
        transition-all duration-300"
    >
      <span className="font-heading text-white/90 text-sm font-semibold whitespace-nowrap tracking-wide">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
}: {
  items: string[];
  direction?: "left" | "right";
}) {
  // Duplicate items exactly once for seamless -50% loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-3">
      <div
        className={`flex gap-4 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ width: "fit-content" }}
      >
        {duplicatedItems.map((tech, index) => (
          <TechCard key={`${tech}-${index}`} name={tech} />
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="tech"
      className="bg-[#141414] py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Large blurred mustard orbs for glass effect visibility */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary orb - top right, large and visible */}
        <div
          className="absolute -top-20 right-[5%] w-[400px] h-[400px] rounded-full animate-float-slow"
          style={{
            backgroundColor: "#F5A623",
            opacity: 0.45,
            filter: "blur(100px)",
          }}
        />
        {/* Secondary orb - bottom left */}
        <div
          className="absolute -bottom-20 left-[10%] w-[350px] h-[350px] rounded-full animate-float-medium animation-delay-2000"
          style={{
            backgroundColor: "#F5A623",
            opacity: 0.35,
            filter: "blur(80px)",
          }}
        />
        {/* Center orb - behind the badges */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full"
          style={{
            backgroundColor: "#F5A623",
            opacity: 0.2,
            filter: "blur(120px)",
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
            Our Stack
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
            Technologies We Master
          </h2>
          <p className="text-gray-400 font-normal text-lg leading-relaxed max-w-2xl mx-auto">
            We use modern, battle-tested tools to build products that scale.
          </p>
        </motion.div>

        {/* Tech Marquee Rows */}
        <div className="space-y-4 mt-8">
          <MarqueeRow items={techRowOne} direction="left" />
          <MarqueeRow items={techRowTwo} direction="right" />
        </div>

        {/* Expertise Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-14 flex flex-wrap justify-center gap-4"
        >
          {expertiseBadges.map((badge, index) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                duration: 0.4,
                delay: 0.4 + index * 0.1,
                ease: "easeOut",
              }}
              className="flex items-center gap-2 border border-[#F5A623]/50
                rounded-full px-4 py-2"
              style={{ backgroundColor: "rgba(245, 166, 35, 0.05)" }}
            >
              <CheckCircle className="w-4 h-4 text-[#F5A623]" />
              <span className="text-[#F5A623] text-sm font-medium">{badge}</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
