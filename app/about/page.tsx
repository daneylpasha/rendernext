"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  MessageSquare,
  Users,
  Code,
  Lightbulb,
  Shield,
  Check,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
} from "lucide-react";
import {
  Container,
  FadeInUp,
  DecorativeRing,
} from "@/components/ui";

const values = [
  {
    icon: Zap,
    title: "Speed Without Shortcuts",
    description:
      "We move fast but never sacrifice quality. Efficient processes, not rushed code.",
  },
  {
    icon: MessageSquare,
    title: "Radical Transparency",
    description:
      "No surprises. Weekly updates, clear pricing, honest timelines.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description:
      "We're not vendors, we're collaborators. Your success is our success.",
  },
  {
    icon: Code,
    title: "Craftsmanship",
    description:
      "Clean code, thoughtful architecture, attention to detail in every pixel.",
  },
  {
    icon: Lightbulb,
    title: "User-Centered Thinking",
    description:
      "We obsess over user experience. Beautiful means nothing if it's not usable.",
  },
  {
    icon: Shield,
    title: "Ownership & Accountability",
    description:
      "We stand behind our work. If something's wrong, we make it right.",
  },
];

const reasons = [
  "React Native experts — one codebase, two platforms",
  "AI integration specialists — chatbots, automation, LLMs",
  "Startup-friendly pricing and timelines",
  "Based in USA with transparent communication",
  "Post-launch support included",
  "No lock-in, no licensing fees",
];

export default function AboutPage() {
  const storyRef = React.useRef<HTMLElement>(null);
  const valuesRef = React.useRef<HTMLElement>(null);
  const whyRef = React.useRef<HTMLElement>(null);
  const founderRef = React.useRef<HTMLElement>(null);
  const ctaRef = React.useRef<HTMLElement>(null);

  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const founderInView = useInView(founderRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen">
      {/* SECTION 1: Hero */}
      <section className="relative bg-[#141414] pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[800px] h-[600px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(245, 166, 35, 0.4) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
          <DecorativeRing position="top-left" size={300} opacity={0.03} />
          <DecorativeRing position="bottom-right" size={400} opacity={0.04} />
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <FadeInUp>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-4">
                About Us
              </span>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                We&apos;re RenderNext
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                A digital product studio passionate about building apps that
                make a difference.
              </p>
            </FadeInUp>
          </div>
        </Container>
      </section>

      {/* SECTION 2: Our Story */}
      <section ref={storyRef} className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left - Story Content (3 cols) */}
            <div className="lg:col-span-3">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3"
              >
                Our Story
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-6"
              >
                Built by Makers, for Makers
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4 text-gray-600 leading-relaxed"
              >
                <p>
                  RenderNext was founded with a simple belief: great apps start
                  with understanding, not just coding. We&apos;ve seen too many
                  projects fail because agencies rush to write code before truly
                  grasping the problem.
                </p>
                <p>
                  We&apos;re a lean team of developers, designers, and
                  problem-solvers based in Austin, Texas. We specialize in React
                  Native mobile apps, Next.js web applications, and AI-powered
                  solutions.
                </p>
                <p>
                  What sets us apart? We&apos;ve been in your shoes. We&apos;ve
                  built our own products, faced the same challenges you&apos;re
                  facing, and learned what actually works. That experience
                  shapes how we approach every client project.
                </p>
                <p>
                  We&apos;re not trying to be the biggest agency. We&apos;re
                  focused on being the best partner for startups and businesses
                  who need quality, speed, and genuine collaboration.
                </p>
              </motion.div>
            </div>

            {/* Right - Visual (2 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                {/* Gradient Card with Logo */}
                <div
                  className="aspect-square rounded-2xl p-8 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, #141414 0%, #1a1a1a 50%, #141414 100%)",
                  }}
                >
                  {/* Decorative elements */}
                  <div
                    className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-30"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(245, 166, 35, 0.4) 0%, transparent 70%)",
                      filter: "blur(30px)",
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-20"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(245, 166, 35, 0.5) 0%, transparent 70%)",
                      filter: "blur(25px)",
                    }}
                  />

                  {/* Logo */}
                  <Image
                    src="/assets/logos/Logo_500w-SQ-trans-dark.png"
                    alt="RenderNext"
                    width={200}
                    height={200}
                    className="relative z-10 w-40 lg:w-48 h-auto"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-gray-900">
                      Austin, Texas
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: Our Values */}
      <section ref={valuesRef} className="bg-gray-50 py-20 lg:py-28">
        <Container>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3"
            >
              Our Values
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight"
            >
              What We Stand For
            </motion.h2>
          </div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={valuesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* SECTION 4: Why RenderNext */}
      <section ref={whyRef} className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Big Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={whyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="border-l-4 border-[#F5A623] pl-6">
                <div className="font-heading text-6xl lg:text-7xl font-bold text-[#F5A623]">
                  5+
                </div>
                <div className="text-gray-600 text-lg mt-1">
                  Years Combined Experience
                </div>
              </div>

              <div className="border-l-4 border-[#F5A623] pl-6">
                <div className="font-heading text-6xl lg:text-7xl font-bold text-[#F5A623]">
                  100%
                </div>
                <div className="text-gray-600 text-lg mt-1">
                  Client Code Ownership
                </div>
              </div>

              <div className="border-l-4 border-[#F5A623] pl-6">
                <div className="font-heading text-6xl lg:text-7xl font-bold text-[#F5A623]">
                  24h
                </div>
                <div className="text-gray-600 text-lg mt-1">
                  Response Time Guarantee
                </div>
              </div>
            </motion.div>

            {/* Right - Reasons List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={whyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-gray-900 leading-tight tracking-tight mb-8">
                Why Teams Choose Us
              </h2>

              <ul className="space-y-4">
                {reasons.map((reason, index) => (
                  <motion.li
                    key={reason}
                    initial={{ opacity: 0, x: 20 }}
                    animate={whyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F5A623]/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-[#F5A623]" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">
                      {reason}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* SECTION 5: Founder Section */}
      <section ref={founderRef} className="bg-[#141414] py-20 lg:py-28">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 items-center">
              {/* Left - Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={founderInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1 flex justify-center lg:justify-start"
              >
                <div className="relative">
                  {/* Photo placeholder with gradient */}
                  <div
                    className="w-40 h-40 lg:w-48 lg:h-48 rounded-full flex items-center justify-center relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, #F5A623 0%, #D4891C 100%)",
                    }}
                  >
                    <span className="text-4xl lg:text-5xl font-heading font-bold text-white">
                      DP
                    </span>
                  </div>

                  {/* Decorative ring */}
                  <div className="absolute inset-0 -m-2 rounded-full border-2 border-[#F5A623]/30" />
                </div>
              </motion.div>

              {/* Right - Content */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={founderInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3"
                >
                  Meet the Founder
                </motion.span>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={founderInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-heading text-2xl lg:text-3xl font-bold text-white mb-1"
                >
                  Daniyal Pasha
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={founderInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-gray-400 mb-6"
                >
                  Founder & Lead Developer
                </motion.p>

                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={founderInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-gray-300 text-lg leading-relaxed italic mb-8"
                >
                  &ldquo;I started RenderNext because I was frustrated with
                  agencies that overpromise and underdeliver. I wanted to build
                  a studio that operates the way I&apos;d want to be treated as
                  a client — honest communication, quality work, and genuine
                  care for the outcome. Whether you&apos;re launching your first
                  MVP or scaling an existing product, I&apos;m personally
                  invested in your success.&rdquo;
                </motion.blockquote>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={founderInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center justify-center lg:justify-start gap-4"
                >
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#F5A623] hover:border-[#F5A623]/50 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#F5A623] hover:border-[#F5A623]/50 transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#F5A623] hover:border-[#F5A623]/50 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 6: CTA */}
      <section ref={ctaRef} className="bg-[#0a0a0a] py-20 lg:py-28 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              opacity: [0.15, 0.25, 0.15],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{
              backgroundColor: "#F5A623",
              filter: "blur(120px)",
            }}
          />
        </div>

        <Container className="relative z-10">
          {/* Decorative top line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={ctaInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-xl mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"
          />

          <div className="text-center max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3"
            >
              Let&apos;s Connect
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              Ready to Work Together?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-10"
            >
              Let&apos;s discuss your project and see if we&apos;re a good fit.
              No pressure, just a conversation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F5A623] hover:bg-[#FFB84D] text-[#141414] font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#F5A623]/20 group"
              >
                Start a Project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                Schedule a Call
              </Link>
            </motion.div>
          </div>

          {/* Decorative bottom line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={ctaInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-full max-w-xl mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-12"
          />
        </Container>
      </section>
    </main>
  );
}
