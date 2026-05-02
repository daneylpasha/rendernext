"use client";

import { motion } from "framer-motion";
import { Shield, Clock, MessageSquare, FileCheck, Award, Zap } from "lucide-react";
import { Container } from "@/components/ui";

const trustItems = [
  { icon: Clock,        title: "24hr Response",        description: "Quick turnaround on all inquiries" },
  { icon: Shield,       title: "NDA Protected",         description: "Your ideas stay confidential" },
  { icon: FileCheck,    title: "Transparent Pricing",   description: "No hidden fees or surprises" },
  { icon: MessageSquare,title: "Direct Communication",  description: "Talk to the team building your product" },
  { icon: Zap,          title: "Agile Development",     description: "Iterative sprints with regular demos" },
  { icon: Award,        title: "Quality Guaranteed",    description: "We stand behind our work" },
];

export function TrustBadges() {
  return (
    <section className="bg-[#141414] py-10 border-t border-white/[0.06]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08]
                hover:bg-white/[0.07] hover:border-[#F5A623]/25 hover:-translate-y-0.5
                transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#F5A623]/12 flex items-center justify-center flex-shrink-0
                group-hover:bg-[#F5A623]/22 transition-colors duration-300">
                <item.icon className="w-4 h-4 text-[#F5A623]" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs font-semibold text-white/80 leading-snug">{item.title}</h3>
                <p className="text-xs text-white/35 mt-0.5 leading-relaxed hidden sm:block">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
