"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  Heart,
  Zap,
  Users,
  Rocket,
  Coffee,
  ArrowRight,
  Mail,
  Bell,
} from "lucide-react";
import { Container, FadeIn, FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui";

const benefits = [
  {
    icon: MapPin,
    title: "Remote-First",
    description: "Work from anywhere. We believe great work happens where you're most comfortable.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "We care about results, not clock-watching. Structure your day around your life.",
  },
  {
    icon: Rocket,
    title: "Growth Focused",
    description: "Continuous learning budget, conference attendance, and mentorship opportunities.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health coverage and wellness programs to keep you at your best.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work alongside talented engineers, designers, and product thinkers.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Generous PTO, mental health days, and respect for your personal time.",
  },
];

const values = [
  {
    title: "Ownership",
    description: "We take pride in our work and own our outcomes. Every team member has real impact.",
  },
  {
    title: "Transparency",
    description: "Open communication, honest feedback, and clear expectations guide everything we do.",
  },
  {
    title: "Excellence",
    description: "We're not satisfied with good enough. We push each other to deliver exceptional work.",
  },
  {
    title: "Empathy",
    description: "We build for real people. Understanding users and teammates drives our decisions.",
  },
];

export default function CareersPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#141414] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#F5A623]/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.12, 0.08] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]"
          />
        </div>

        <Container>
          <div className="relative z-10 max-w-3xl">
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#F5A623] text-sm font-medium mb-6">
                <Briefcase className="w-4 h-4" />
                Careers at RenderNext
              </span>
            </FadeIn>

            <FadeInUp delay={0.1}>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-6">
                Build the Future <br />
                <span className="text-[#F5A623]">With Us</span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <p className="text-lg lg:text-xl text-gray-400 max-w-2xl">
                We&apos;re a small but mighty team crafting exceptional digital products.
                While we don&apos;t have open positions right now, we&apos;re always interested
                in connecting with talented people.
              </p>
            </FadeInUp>
          </div>
        </Container>
      </section>

      {/* No Openings Banner */}
      <section className="bg-white py-16 lg:py-20">
        <Container>
          <FadeInUp>
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-[#F5A623]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bell className="w-8 h-8 text-[#F5A623]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-4">
                No Open Positions Right Now
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                We&apos;re not actively hiring at the moment, but that could change anytime.
                Drop us your details and we&apos;ll reach out when something opens up that
                matches your skills.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:careers@rendernext.io?subject=Future Opportunities at RenderNext"
                  className="inline-flex items-center gap-2 bg-[#F5A623] text-black px-6 py-3 rounded-xl font-semibold hover:bg-[#F5A623]/90 transition-all hover:scale-[1.02]"
                >
                  <Mail className="w-4 h-4" />
                  Send Your Resume
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-[#F5A623] hover:text-[#F5A623] transition-all"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeInUp>
        </Container>
      </section>

      {/* Why Work With Us */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <Container>
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
                Why RenderNext?
              </h2>
              <p className="text-gray-600">
                We&apos;re building a company where talented people can do their best work
                while maintaining a healthy, fulfilling life outside of it.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="bg-white rounded-xl p-6 h-full border border-gray-100 hover:border-[#F5A623]/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-[#F5A623]" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Our Values */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeInUp>
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5A623]/10 text-[#F5A623] text-sm font-medium mb-4">
                  <Zap className="w-3 h-3" />
                  Our Values
                </span>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
                  What We Stand For
                </h2>
                <p className="text-gray-600 mb-8">
                  These aren&apos;t just words on a wall. They guide how we work,
                  how we treat each other, and how we build products.
                </p>
              </div>
            </FadeInUp>

            <StaggerContainer className="space-y-4">
              {values.map((value, index) => (
                <StaggerItem key={value.title}>
                  <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#F5A623] text-black rounded-lg flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-gray-900 mb-1">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-[#141414] py-16 lg:py-24">
        <Container>
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                Stay Connected
              </h2>
              <p className="text-gray-400 mb-8">
                Even if we&apos;re not hiring now, we&apos;d love to hear from you.
                Send us your resume and tell us what excites you about building
                digital products.
              </p>
              <a
                href="mailto:careers@rendernext.io?subject=Future Opportunities at RenderNext"
                className="inline-flex items-center gap-2 bg-[#F5A623] text-black px-8 py-4 rounded-xl font-semibold hover:bg-[#F5A623]/90 transition-all hover:scale-[1.02]"
              >
                <Mail className="w-5 h-5" />
                careers@rendernext.io
              </a>
            </div>
          </FadeInUp>
        </Container>
      </section>
    </main>
  );
}
