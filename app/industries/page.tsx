"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Heart,
  DollarSign,
  ShoppingCart,
  Rocket,
  GraduationCap,
  Truck,
  ArrowRight,
} from "lucide-react";
import {
  Container,
  FadeIn,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui";

const industries = [
  {
    name: "Healthcare",
    slug: "healthcare",
    icon: Heart,
    description:
      "HIPAA-compliant patient portals, telemedicine platforms, and health tracking applications.",
    color: "red",
  },
  {
    name: "Fintech",
    slug: "fintech",
    icon: DollarSign,
    description:
      "Secure banking apps, payment platforms, investment tools, and cryptocurrency solutions.",
    color: "green",
  },
  {
    name: "E-commerce",
    slug: "ecommerce",
    icon: ShoppingCart,
    description:
      "Mobile shopping apps, marketplace platforms, and omnichannel retail solutions.",
    color: "blue",
  },
  {
    name: "Startups",
    slug: "startups",
    icon: Rocket,
    description:
      "Rapid MVP development, investor-ready demos, and scalable architecture for growth.",
    color: "orange",
  },
  {
    name: "Education",
    slug: "education",
    icon: GraduationCap,
    description:
      "LMS platforms, e-learning apps, and student management systems with engaging features.",
    color: "purple",
  },
  {
    name: "Logistics",
    slug: "logistics",
    icon: Truck,
    description:
      "Fleet management, delivery tracking, warehouse apps, and route optimization solutions.",
    color: "cyan",
  },
];

export default function IndustriesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#141414] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#F5A623]/20 rounded-full blur-[120px]"
          />
        </div>

        <Container>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#F5A623] text-sm font-medium mb-6">
                Industry Expertise
              </span>
            </FadeIn>

            <FadeInUp delay={0.1}>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-6">
                Solutions Tailored to{" "}
                <span className="text-[#F5A623]">Your Industry</span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <p className="text-lg lg:text-xl text-gray-400">
                We understand that every industry has unique challenges,
                regulations, and user expectations. Our specialized teams bring
                deep domain knowledge to build solutions that truly fit.
              </p>
            </FadeInUp>
          </div>
        </Container>
      </section>

      {/* Industries Grid */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <StaggerItem key={industry.slug}>
                <Link href={`/industries/${industry.slug}`}>
                  <div className="group bg-gray-50 rounded-2xl p-8 h-full border border-gray-100 hover:border-[#F5A623]/30 hover:shadow-xl transition-all duration-300">
                    <div
                      className={`w-14 h-14 bg-${industry.color}-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <industry.icon
                        className={`w-7 h-7 text-${industry.color}-600`}
                      />
                    </div>
                    <h2 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-[#F5A623] transition-colors">
                      {industry.name}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#F5A623] font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
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
                Don&apos;t See Your Industry?
              </h2>
              <p className="text-gray-400 mb-8">
                We work across many sectors beyond those listed. If you have a
                project in mind, let&apos;s talk about how we can help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#F5A623] text-black px-8 py-4 rounded-xl font-semibold hover:bg-[#F5A623]/90 transition-all hover:scale-[1.02]"
                >
                  Start a Conversation
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
