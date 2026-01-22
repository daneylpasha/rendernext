"use client";

import { motion } from "framer-motion";
import { Shield, Clock, MessageSquare, FileCheck, Award, Zap } from "lucide-react";
import { Container } from "@/components/ui";

const trustItems = [
  {
    icon: Clock,
    title: "24hr Response",
    description: "Quick turnaround on all inquiries",
  },
  {
    icon: Shield,
    title: "NDA Protected",
    description: "Your ideas stay confidential",
  },
  {
    icon: FileCheck,
    title: "Transparent Pricing",
    description: "No hidden fees or surprises",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description: "Talk to the team building your product",
  },
  {
    icon: Zap,
    title: "Agile Development",
    description: "Iterative sprints with regular demos",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "We stand behind our work",
  },
];

export function TrustBadges() {
  return (
    <section className="bg-white py-12 lg:py-16 border-y border-gray-100">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 flex items-center justify-center mb-3 group-hover:bg-[#F5A623]/20 transition-colors duration-300">
                <item.icon className="w-5 h-5 text-[#F5A623]" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
