"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Search, PenTool, Code, CheckCircle, Rocket } from "lucide-react";
import { Container } from "@/components/ui";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We learn your vision, goals, users, and market. Every great product starts with understanding.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    description:
      "Wireframes, prototypes, and polished UI. You see your product before we write code.",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description:
      "Agile sprints with weekly updates. Clean code, tested features, transparent progress.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Testing",
    description:
      "Rigorous QA across devices and scenarios. We catch issues before your users do.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch",
    description:
      "Store deployment, monitoring, and ongoing support. We're with you post-launch.",
  },
];

export function Process() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="process"
      className="bg-white py-20 lg:py-28"
    >
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
            How We Work
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
            Our Proven Process
          </h2>
          <p className="text-gray-600 font-normal text-lg leading-relaxed max-w-2xl mx-auto">
            A structured approach that turns ideas into successful products.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block mt-16">
          {/* Timeline Container */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200" />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="absolute top-6 left-0 right-0 h-0.5 bg-accent origin-left"
            />

            {/* Steps */}
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.15,
                    ease: "easeOut",
                  }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.15,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="w-12 h-12 rounded-full bg-accent flex items-center justify-center
                      relative z-10 shadow-lg shadow-accent/20"
                  >
                    <span className="text-white font-bold font-heading text-sm">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Step Content */}
                  <div className="mt-6">
                    <div className="w-10 h-10 rounded-xl bg-[#F5A623]/10 flex items-center justify-center mx-auto mb-3">
                      <step.icon className="w-5 h-5 text-[#F5A623]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-gray-900 leading-tight tracking-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 font-normal text-sm leading-relaxed max-w-[200px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden mt-16">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200" />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="absolute left-5 top-0 bottom-0 w-0.5 bg-accent origin-top"
            />

            {/* Steps */}
            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.15,
                    ease: "easeOut",
                  }}
                  className="flex gap-6"
                >
                  {/* Step Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.15,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center
                      relative z-10 shadow-lg shadow-accent/20"
                  >
                    <span className="text-white font-bold font-heading text-xs">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Step Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-4 h-4 text-[#F5A623]" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-gray-900 leading-tight tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 font-normal text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
