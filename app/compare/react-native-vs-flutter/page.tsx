"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Zap,
  Clock,
  Palette,
  Users,
  GraduationCap,
  DollarSign,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  List,
  BarChart3,
  Code2,
  Layers,
  Cpu,
  Globe,
  TrendingUp,
  Building2,
  Lightbulb,
  MessageCircle,
} from "lucide-react";
import { Container, FadeInUp } from "@/components/ui";
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Section wrapper with animation
function AnimatedSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// Table of Contents data
const tableOfContents = [
  { id: "overview", title: "Overview", icon: List },
  { id: "performance", title: "Performance Comparison", icon: Zap },
  { id: "development-speed", title: "Development Speed", icon: Clock },
  { id: "ui-ux", title: "UI/UX Capabilities", icon: Palette },
  { id: "community", title: "Community & Ecosystem", icon: Users },
  { id: "learning-curve", title: "Learning Curve", icon: GraduationCap },
  { id: "cost", title: "Cost Considerations", icon: DollarSign },
  { id: "comparison-table", title: "Side-by-Side Comparison", icon: BarChart3 },
  { id: "pros-cons", title: "Pros and Cons", icon: Layers },
  { id: "recommendation", title: "Our Recommendation", icon: Lightbulb },
  { id: "faq", title: "FAQ", icon: MessageCircle },
];

// FAQ data
const faqData = [
  {
    question: "Which is faster to develop with: React Native or Flutter?",
    answer:
      "Both frameworks enable rapid development, but React Native often has a slight edge for teams already familiar with JavaScript and React. The Hot Reload feature in both frameworks speeds up development significantly. React Native's extensive npm ecosystem means many common features have pre-built solutions, while Flutter requires more custom implementation but offers more consistent results across platforms.",
  },
  {
    question: "Is React Native or Flutter better for startups in 2026?",
    answer:
      "For most startups, React Native is the better choice due to its larger talent pool, extensive ecosystem, and easier integration with existing web technologies. If your team already knows JavaScript/React, the learning curve is minimal. Flutter can be excellent for startups prioritizing pixel-perfect custom UIs, but finding experienced Dart developers may be more challenging.",
  },
  {
    question: "Can React Native and Flutter apps achieve native performance?",
    answer:
      "Both can achieve near-native performance for most use cases. React Native uses a bridge to communicate with native modules, which can introduce minimal latency in complex scenarios. Flutter compiles directly to native ARM code and uses its own rendering engine, giving it a slight edge in animation-heavy apps. For typical business apps, users cannot perceive any difference.",
  },
  {
    question: "Which framework has better long-term support?",
    answer:
      "Both have strong backing. React Native is maintained by Meta (Facebook) and powers their flagship apps including Facebook, Instagram, and WhatsApp. Flutter is backed by Google and used in Google Pay and other major Google products. Both frameworks have stable futures, but React Native's larger community means more third-party maintenance and support options.",
  },
  {
    question: "Should I choose Flutter for better UI consistency?",
    answer:
      "Flutter excels at providing identical UI across platforms since it renders everything using its own engine (Skia). However, this means Flutter apps may not feel 100% native to each platform. React Native uses actual native components, which adapt to each platform's design language. The best choice depends on whether you prioritize identical cross-platform UI or native platform feel.",
  },
  {
    question: "What about web and desktop support?",
    answer:
      "Flutter has more mature support for web and desktop platforms as part of its core offering. React Native Web exists but requires additional setup and may not support all native modules. If you need a single codebase for mobile, web, and desktop, Flutter currently has an advantage. However, many teams use React Native for mobile and Next.js for web, leveraging shared business logic and design systems.",
  },
];

// Hero Section
function HeroSection() {
  return (
    <section className="relative bg-[#141414] text-white overflow-hidden pt-24 pb-16">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-mustard/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-mustard transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/compare" className="hover:text-mustard transition-colors">
                Compare
              </Link>
            </li>
            <li>/</li>
            <li className="text-mustard">React Native vs Flutter</li>
          </ol>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-mustard/20 border border-mustard/30 rounded-full px-4 py-2 mb-6"
          >
            <BarChart3 className="w-4 h-4 text-mustard" />
            <span className="text-mustard text-sm font-medium">
              Framework Comparison Guide
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            React Native vs Flutter:{" "}
            <span className="text-mustard">Complete 2026 Comparison</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Choosing the right cross-platform mobile framework is crucial for your project&apos;s
            success. This comprehensive guide compares React Native and Flutter across every
            important dimension to help you make an informed decision.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              15 min read
            </span>
            <span className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Updated January 2026
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

// Table of Contents Section
function TableOfContentsSection() {
  return (
    <section className="bg-gray-50 py-12 border-b border-gray-200">
      <Container>
        <FadeInUp>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-[#141414] mb-6 flex items-center gap-2">
              <List className="w-5 h-5 text-mustard" />
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {tableOfContents.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <span className="w-8 h-8 bg-mustard/10 rounded-lg flex items-center justify-center text-sm font-semibold text-mustard group-hover:bg-mustard group-hover:text-black transition-colors">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 group-hover:text-[#141414] transition-colors">
                    {item.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </FadeInUp>
      </Container>
    </section>
  );
}

// Overview Section
function OverviewSection() {
  return (
    <AnimatedSection id="overview" className="py-20 bg-white">
      <Container>
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#141414] mb-8">
            Overview: Two Giants of Cross-Platform Development
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="lead text-xl mb-6">
              In 2026, React Native and Flutter remain the two dominant frameworks for building
              cross-platform mobile applications. Both enable developers to write code once and
              deploy to iOS and Android, but they take fundamentally different approaches to
              achieve this goal.
            </p>
            <p className="mb-6">
              <strong className="text-[#141414]">React Native</strong>, created by Meta (formerly
              Facebook) in 2015, uses JavaScript and React to build mobile apps that render using
              native platform components. Its philosophy centers on &quot;learn once, write
              anywhere&quot; rather than &quot;write once, run anywhere,&quot; acknowledging that
              each platform has its unique characteristics.
            </p>
            <p className="mb-6">
              <strong className="text-[#141414]">Flutter</strong>, released by Google in 2018,
              uses the Dart programming language and renders everything using its own graphics
              engine (Skia/Impeller). This approach gives Flutter pixel-perfect control over every
              visual element, ensuring identical appearance across platforms.
            </p>
            <p>
              Both frameworks have matured significantly and are used by major companies
              worldwide. The choice between them depends on your team&apos;s expertise, project
              requirements, and long-term goals. Let&apos;s dive deep into each comparison factor.
            </p>
          </div>

          {/* Framework Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-[#61DAFB]/10 to-[#61DAFB]/5 rounded-2xl p-8 border border-[#61DAFB]/20"
            >
              <div className="w-16 h-16 bg-[#61DAFB]/20 rounded-2xl flex items-center justify-center mb-6">
                <Code2 className="w-8 h-8 text-[#61DAFB]" />
              </div>
              <h3 className="text-2xl font-bold text-[#141414] mb-3">React Native</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>JavaScript/TypeScript</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Native UI components</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Backed by Meta</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Released 2015</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-[#02569B]/10 to-[#02569B]/5 rounded-2xl p-8 border border-[#02569B]/20"
            >
              <div className="w-16 h-16 bg-[#02569B]/20 rounded-2xl flex items-center justify-center mb-6">
                <Layers className="w-8 h-8 text-[#02569B]" />
              </div>
              <h3 className="text-2xl font-bold text-[#141414] mb-3">Flutter</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Dart language</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Custom rendering engine</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Backed by Google</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Released 2018</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}

// Performance Section
function PerformanceSection() {
  const performanceMetrics = [
    {
      metric: "Startup Time",
      reactNative: "Fast (native modules load quickly)",
      flutter: "Slightly slower (Dart VM initialization)",
      winner: "react-native",
    },
    {
      metric: "Animation Performance",
      reactNative: "Good with proper optimization",
      flutter: "Excellent (60/120 fps consistent)",
      winner: "flutter",
    },
    {
      metric: "Memory Usage",
      reactNative: "Moderate",
      flutter: "Higher (custom rendering engine)",
      winner: "react-native",
    },
    {
      metric: "App Size",
      reactNative: "Smaller (~7-12MB minimum)",
      flutter: "Larger (~15-20MB minimum)",
      winner: "react-native",
    },
    {
      metric: "CPU Intensive Tasks",
      reactNative: "Good (native modules available)",
      flutter: "Excellent (compiled to native ARM)",
      winner: "flutter",
    },
    {
      metric: "List Rendering",
      reactNative: "Excellent with FlatList",
      flutter: "Excellent with ListView.builder",
      winner: "tie",
    },
  ];

  return (
    <AnimatedSection id="performance" className="py-20 bg-gray-50">
      <Container>
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-mustard/10 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-mustard" />
            </div>
            <span className="text-mustard font-semibold text-sm uppercase tracking-wider">
              Performance
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#141414] mb-6">
            Performance Comparison: Speed & Efficiency
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p>
              Performance is often the first concern when choosing a cross-platform framework.
              Both React Native and Flutter deliver near-native performance, but they achieve it
              through different architectures.
            </p>
            <h3 className="text-xl font-bold text-[#141414] mt-8 mb-4">
              React Native Architecture
            </h3>
            <p>
              React Native uses a bridge architecture where JavaScript code communicates with
              native modules asynchronously. The new architecture (Fabric and TurboModules)
              introduced in 2022 significantly improved this by enabling synchronous
              communication and reducing serialization overhead. In 2026, most React Native apps
              use this new architecture, delivering performance that&apos;s virtually
              indistinguishable from native apps for most use cases.
            </p>
            <h3 className="text-xl font-bold text-[#141414] mt-8 mb-4">Flutter Architecture</h3>
            <p>
              Flutter compiles Dart code directly to native ARM machine code and uses its own
              rendering engine (Skia, with Impeller as the newer option on iOS). This eliminates
              the need for a bridge entirely. Flutter consistently achieves 60fps or 120fps on
              supported devices, making it excellent for animation-heavy applications.
            </p>
          </div>

          {/* Performance Table */}
          <motion.div variants={fadeInUp} className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#141414] text-white">
                  <th className="py-4 px-6 text-left font-semibold">Metric</th>
                  <th className="py-4 px-6 text-center font-semibold">React Native</th>
                  <th className="py-4 px-6 text-center font-semibold">Flutter</th>
                </tr>
              </thead>
              <tbody>
                {performanceMetrics.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-0">
                    <td className="py-4 px-6 font-medium text-[#141414]">{row.metric}</td>
                    <td
                      className={`py-4 px-6 text-center ${
                        row.winner === "react-native"
                          ? "bg-green-50 text-green-800 font-medium"
                          : "text-gray-600"
                      }`}
                    >
                      {row.reactNative}
                    </td>
                    <td
                      className={`py-4 px-6 text-center ${
                        row.winner === "flutter"
                          ? "bg-green-50 text-green-800 font-medium"
                          : "text-gray-600"
                      }`}
                    >
                      {row.flutter}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 bg-mustard/10 border border-mustard/20 rounded-xl p-6"
          >
            <p className="text-[#141414] font-medium">
              <strong>Bottom Line:</strong> Flutter has a slight edge in raw rendering
              performance and animations, while React Native offers smaller app sizes and faster
              startup times. For most business applications, both deliver more than adequate
              performance.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}

// Development Speed Section
function DevelopmentSpeedSection() {
  return (
    <AnimatedSection id="development-speed" className="py-20 bg-white">
      <Container>
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-mustard/10 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-mustard" />
            </div>
            <span className="text-mustard font-semibold text-sm uppercase tracking-wider">
              Development Speed
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#141414] mb-6">
            Development Speed & Developer Experience
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-8">
              Time-to-market is critical for most projects. Both frameworks offer features
              designed to accelerate development, but they differ in approach and ecosystem
              maturity.
            </p>

            <div className="grid md:grid-cols-2 gap-8 not-prose mb-8">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-[#141414] mb-4">React Native Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      <strong className="text-[#141414]">Hot Reload:</strong> See changes
                      instantly without losing app state
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      <strong className="text-[#141414]">Massive npm ecosystem:</strong> 2
                      million+ packages available
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      <strong className="text-[#141414]">Expo:</strong> Simplified toolchain for
                      rapid prototyping and deployment
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      <strong className="text-[#141414]">Familiar paradigm:</strong> React
                      developers productive immediately
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-[#141414] mb-4">Flutter Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      <strong className="text-[#141414]">Hot Reload:</strong> Similar instant
                      feedback during development
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      <strong className="text-[#141414]">Rich widget library:</strong>{" "}
                      Comprehensive built-in UI components
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      <strong className="text-[#141414]">Consistent tooling:</strong> Unified
                      CLI and debugging experience
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      <strong className="text-[#141414]">Strong typing:</strong> Dart catches
                      errors at compile time
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#141414] mt-8 mb-4">
              Time-to-Market Considerations
            </h3>
            <p className="mb-6">
              React Native typically offers faster initial development for teams with JavaScript
              experience. The vast npm ecosystem means most features (authentication, payments,
              analytics, etc.) have mature, battle-tested libraries available. Teams can often
              find existing solutions rather than building from scratch.
            </p>
            <p className="mb-6">
              Flutter requires learning Dart, but developers often report that Dart is easy to
              pick up. Flutter&apos;s pub.dev package repository is smaller than npm but growing
              rapidly. Custom UI implementation tends to be faster in Flutter due to its widget
              system, but integration with native platform features may require more work.
            </p>

            <h3 className="text-xl font-bold text-[#141414] mt-8 mb-4">
              Debugging and Testing
            </h3>
            <p>
              Both frameworks offer excellent debugging tools. React Native integrates with
              Chrome DevTools and Flipper, while Flutter has its own DevTools suite with
              performance profiling, widget inspection, and network monitoring. Flutter&apos;s
              testing framework is often praised for its comprehensiveness, though React Native
              with Jest and React Native Testing Library provides similar capabilities.
            </p>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 bg-[#141414] text-white rounded-xl p-6"
          >
            <p className="font-medium">
              <strong className="text-mustard">Verdict:</strong> React Native typically wins for
              teams with existing JavaScript/React expertise and projects that need to leverage
              the npm ecosystem. Flutter may be faster for UI-heavy apps with custom designs
              where the built-in widget library provides a head start.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}

// UI/UX Section
function UIUXSection() {
  return (
    <AnimatedSection id="ui-ux" className="py-20 bg-gray-50">
      <Container>
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-mustard/10 rounded-xl flex items-center justify-center">
              <Palette className="w-6 h-6 text-mustard" />
            </div>
            <span className="text-mustard font-semibold text-sm uppercase tracking-wider">
              UI/UX Capabilities
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#141414] mb-6">
            UI/UX Capabilities: Design & User Experience
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-8">
              The approach to UI rendering is one of the most fundamental differences between
              React Native and Flutter, directly impacting design possibilities and user
              experience.
            </p>

            <h3 className="text-xl font-bold text-[#141414] mt-8 mb-4">
              React Native: Native Components
            </h3>
            <p className="mb-6">
              React Native renders using actual native platform components. A Button in React
              Native becomes a UIButton on iOS and an Android Button on Android. This means your
              app automatically adapts to each platform&apos;s design language and
              accessibility features.
            </p>
            <p className="mb-6">
              This native approach has significant advantages: users get familiar platform
              behaviors, accessibility features work out of the box, and your app feels
              &quot;right&quot; on each platform. However, achieving pixel-perfect identical UIs
              across platforms requires additional effort.
            </p>

            <h3 className="text-xl font-bold text-[#141414] mt-8 mb-4">
              Flutter: Custom Rendering
            </h3>
            <p className="mb-6">
              Flutter draws every pixel itself using its rendering engine. This gives developers
              complete control over the visual output, ensuring your app looks exactly the same
              on iOS and Android. Flutter&apos;s widget system makes it easy to create complex
              custom UIs and animations.
            </p>
            <p className="mb-6">
              The trade-off is that Flutter apps may not feel as native to each platform.
              Flutter provides Material Design and Cupertino (iOS-style) widgets, but they&apos;re
              still Flutter&apos;s interpretation rather than actual native components. Some
              users may notice subtle differences in scroll behavior, text selection, or other
              platform-specific interactions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-[#141414] mb-4">Best for React Native</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Apps that should feel native to each platform
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Enterprise apps following platform guidelines
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Apps requiring deep platform integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Accessibility-critical applications
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-[#141414] mb-4">Best for Flutter</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Apps with highly custom/branded UIs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Animation-heavy experiences
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Games and interactive content
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Apps requiring identical cross-platform UIs
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#141414] mt-8 mb-4">Animation Support</h3>
            <p>
              Both frameworks support complex animations. React Native offers the Animated API
              and Reanimated library for high-performance animations that run on the native
              thread. Flutter&apos;s animation framework is built into the core and is generally
              considered more straightforward to use. For complex animations, Flutter often
              requires less code and delivers more consistent frame rates.
            </p>
          </div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}

// Community Section
function CommunitySection() {
  const stats = [
    {
      label: "GitHub Stars",
      reactNative: "118K+",
      flutter: "165K+",
    },
    {
      label: "Stack Overflow Questions",
      reactNative: "100K+",
      flutter: "180K+",
    },
    {
      label: "npm/pub Packages",
      reactNative: "50K+ (npm)",
      flutter: "40K+ (pub.dev)",
    },
    {
      label: "Major Apps",
      reactNative: "Facebook, Instagram, Discord, Shopify",
      flutter: "Google Pay, BMW, eBay Motors",
    },
  ];

  return (
    <AnimatedSection id="community" className="py-20 bg-white">
      <Container>
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-mustard/10 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-mustard" />
            </div>
            <span className="text-mustard font-semibold text-sm uppercase tracking-wider">
              Community & Ecosystem
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#141414] mb-6">
            Community & Ecosystem: Support & Resources
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p className="mb-8">
              A framework&apos;s community and ecosystem directly impact your development
              experience. Libraries, tutorials, Stack Overflow answers, and third-party
              integrations can make or break your project timeline.
            </p>

            <h3 className="text-xl font-bold text-[#141414] mt-8 mb-4">
              React Native Ecosystem
            </h3>
            <p className="mb-6">
              React Native benefits from the massive JavaScript ecosystem. With over 2 million
              packages on npm, there&apos;s a library for almost anything you need. The React
              Native community has produced excellent solutions like React Navigation, React
              Native Reanimated, and dozens of UI component libraries. The Expo ecosystem adds
              another layer of tooling and managed services that simplify development.
            </p>
            <p className="mb-6">
              React Native also benefits from code sharing with React web projects. Teams
              building both mobile and web applications can share business logic, state
              management code, and sometimes even UI components across platforms.
            </p>

            <h3 className="text-xl font-bold text-[#141414] mt-8 mb-4">Flutter Ecosystem</h3>
            <p className="mb-6">
              Flutter&apos;s pub.dev package repository is smaller but well-curated. Google
              actively maintains many official packages, ensuring quality and compatibility.
              The Flutter community is enthusiastic and growing rapidly, with excellent
              documentation and tutorials available.
            </p>
            <p className="mb-6">
              Flutter&apos;s ecosystem is more unified since everything is built specifically
              for Flutter. This can mean fewer compatibility issues between packages, but also
              fewer options for specific functionality.
            </p>
          </div>

          {/* Stats Comparison */}
          <motion.div variants={fadeInUp} className="overflow-x-auto">
            <table className="w-full bg-gray-50 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#141414] text-white">
                  <th className="py-4 px-6 text-left font-semibold">Metric</th>
                  <th className="py-4 px-6 text-center font-semibold">React Native</th>
                  <th className="py-4 px-6 text-center font-semibold">Flutter</th>
                </tr>
              </thead>
              <tbody>
                {stats.map((row, index) => (
                  <tr key={index} className="border-b border-gray-200 last:border-0">
                    <td className="py-4 px-6 font-medium text-[#141414]">{row.label}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{row.reactNative}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{row.flutter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h4 className="font-bold text-[#141414] mb-3">Hiring Considerations</h4>
              <p className="text-gray-600">
                React Native developers are generally easier to find due to JavaScript&apos;s
                popularity. Flutter developers are in growing demand but the talent pool is
                smaller. Consider your local market and remote hiring capabilities.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h4 className="font-bold text-[#141414] mb-3">Corporate Backing</h4>
              <p className="text-gray-600">
                Both frameworks have strong corporate support. Meta uses React Native in
                production, and Google uses Flutter in Google Pay and other products. Both are
                safe long-term bets.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}

// Learning Curve Section
function LearningCurveSection() {
  return (
    <AnimatedSection id="learning-curve" className="py-20 bg-gray-50">
      <Container>
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-mustard/10 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-mustard" />
            </div>
            <span className="text-mustard font-semibold text-sm uppercase tracking-wider">
              Learning Curve
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#141414] mb-6">
            Learning Curve: Getting Your Team Up to Speed
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-8">
              The time required for your team to become productive is a crucial factor,
              especially for projects with tight deadlines or limited training budgets.
            </p>

            <h3 className="text-xl font-bold text-[#141414] mt-8 mb-4">
              React Native Learning Path
            </h3>
            <p className="mb-6">
              If your team knows JavaScript and React, the learning curve for React Native is
              minimal. The core concepts (components, state, props, hooks) transfer directly.
              You&apos;ll need to learn React Native-specific components and some mobile
              development concepts, but the transition is typically measured in days rather
              than weeks.
            </p>
            <p className="mb-6">
              For developers new to React, the learning curve includes both React fundamentals
              and React Native specifics. This might take 2-4 weeks for proficiency, though
              React&apos;s popularity means abundant learning resources are available.
            </p>

            <h3 className="text-xl font-bold text-[#141414] mt-8 mb-4">
              Flutter Learning Path
            </h3>
            <p className="mb-6">
              Flutter requires learning Dart, which is a new language for most developers.
              However, Dart is intentionally designed to be easy to learn for developers
              familiar with Java, JavaScript, C#, or similar languages. Most developers report
              becoming comfortable with Dart within 1-2 weeks.
            </p>
            <p className="mb-6">
              Flutter&apos;s widget-based architecture has its own learning curve. Understanding
              how to compose widgets effectively, manage state, and structure larger
              applications takes time. Overall, expect 3-6 weeks for a developer to become
              proficient with Flutter from scratch.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Cpu className="w-8 h-8 text-[#61DAFB] mb-4" />
                <h4 className="font-bold text-[#141414] mb-2">React Native</h4>
                <p className="text-gray-600 mb-4">
                  Best if your team already knows React/JavaScript
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>For React developers:</span>
                    <span className="font-semibold text-green-600">1-2 weeks</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>For JS developers:</span>
                    <span className="font-semibold text-yellow-600">2-4 weeks</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>From scratch:</span>
                    <span className="font-semibold text-orange-600">4-8 weeks</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Globe className="w-8 h-8 text-[#02569B] mb-4" />
                <h4 className="font-bold text-[#141414] mb-2">Flutter</h4>
                <p className="text-gray-600 mb-4">
                  Requires learning Dart, but it&apos;s beginner-friendly
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>For OOP developers:</span>
                    <span className="font-semibold text-yellow-600">2-4 weeks</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>For mobile devs:</span>
                    <span className="font-semibold text-yellow-600">3-5 weeks</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>From scratch:</span>
                    <span className="font-semibold text-orange-600">4-8 weeks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}

// Cost Section
function CostSection() {
  return (
    <AnimatedSection id="cost" className="py-20 bg-white">
      <Container>
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-mustard/10 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-mustard" />
            </div>
            <span className="text-mustard font-semibold text-sm uppercase tracking-wider">
              Cost Considerations
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#141414] mb-6">
            Cost Considerations: Budget Planning
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-8">
              Both React Native and Flutter are open-source and free to use. The real costs lie
              in development time, hiring, training, and long-term maintenance.
            </p>

            <h3 className="text-xl font-bold text-[#141414] mt-8 mb-4">
              Development Costs
            </h3>
            <p className="mb-6">
              React Native developers typically command similar rates to Flutter developers in
              most markets. However, the larger pool of JavaScript developers means you may
              have more options at various price points. In the US, expect $100-200/hour for
              experienced React Native or Flutter developers.
            </p>
            <p className="mb-6">
              The development time difference between the frameworks is typically minimal for
              most projects. Any time savings from one framework&apos;s strengths are often
              offset by the other&apos;s advantages in different areas.
            </p>

            <h3 className="text-xl font-bold text-[#141414] mt-8 mb-4">
              Long-term Maintenance
            </h3>
            <p className="mb-6">
              Both frameworks require ongoing maintenance for OS updates, dependency updates, and
              bug fixes. React Native&apos;s larger ecosystem means more third-party dependencies,
              which can be both an advantage (more options) and a burden (more updates to manage).
            </p>
            <p className="mb-6">
              Flutter&apos;s more controlled ecosystem may result in fewer breaking changes from
              third-party packages, but Google&apos;s framework updates sometimes require
              significant migration efforts.
            </p>

            <div className="not-prose bg-gray-50 rounded-xl p-8 my-8 border border-gray-100">
              <h4 className="font-bold text-[#141414] mb-4">Typical Project Cost Ranges</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-[#141414] mb-2">MVP (8-12 weeks)</h5>
                  <p className="text-gray-600 mb-1">React Native: $20K - $40K</p>
                  <p className="text-gray-600">Flutter: $20K - $40K</p>
                </div>
                <div>
                  <h5 className="font-semibold text-[#141414] mb-2">Full App (14-24 weeks)</h5>
                  <p className="text-gray-600 mb-1">React Native: $40K - $100K</p>
                  <p className="text-gray-600">Flutter: $40K - $100K</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Costs vary significantly based on complexity, features, and team location
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#141414] mt-8 mb-4">
              Hidden Costs to Consider
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Training time for team members new to the framework</li>
              <li>Native module development for custom features</li>
              <li>Testing across different device configurations</li>
              <li>App store submission and maintenance fees</li>
              <li>Third-party service integrations (analytics, crash reporting, etc.)</li>
            </ul>
          </div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}

// Comparison Table Section
function ComparisonTableSection() {
  const comparisonData = [
    {
      category: "Language",
      reactNative: "JavaScript/TypeScript",
      flutter: "Dart",
      winner: "tie",
    },
    {
      category: "Created By",
      reactNative: "Meta (Facebook)",
      flutter: "Google",
      winner: "tie",
    },
    {
      category: "Initial Release",
      reactNative: "2015",
      flutter: "2018",
      winner: "tie",
    },
    {
      category: "UI Rendering",
      reactNative: "Native components",
      flutter: "Custom rendering engine",
      winner: "depends",
    },
    {
      category: "Performance",
      reactNative: "Near-native",
      flutter: "Near-native (slight edge)",
      winner: "flutter",
    },
    {
      category: "App Size",
      reactNative: "Smaller (7-12MB min)",
      flutter: "Larger (15-20MB min)",
      winner: "react-native",
    },
    {
      category: "Development Speed",
      reactNative: "Fast (with React knowledge)",
      flutter: "Fast (widget system)",
      winner: "tie",
    },
    {
      category: "Hot Reload",
      reactNative: "Yes",
      flutter: "Yes",
      winner: "tie",
    },
    {
      category: "Community Size",
      reactNative: "Very Large",
      flutter: "Large & Growing",
      winner: "react-native",
    },
    {
      category: "Package Ecosystem",
      reactNative: "Massive (npm)",
      flutter: "Growing (pub.dev)",
      winner: "react-native",
    },
    {
      category: "Learning Curve",
      reactNative: "Lower for JS developers",
      flutter: "Requires learning Dart",
      winner: "react-native",
    },
    {
      category: "Web Support",
      reactNative: "Via React Native Web",
      flutter: "Built-in",
      winner: "flutter",
    },
    {
      category: "Desktop Support",
      reactNative: "Limited",
      flutter: "Built-in",
      winner: "flutter",
    },
    {
      category: "IDE Support",
      reactNative: "VS Code, WebStorm",
      flutter: "VS Code, Android Studio",
      winner: "tie",
    },
    {
      category: "Debugging Tools",
      reactNative: "Chrome DevTools, Flipper",
      flutter: "Flutter DevTools",
      winner: "tie",
    },
  ];

  return (
    <AnimatedSection id="comparison-table" className="py-20 bg-gray-50">
      <Container>
        <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-mustard/10 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-mustard" />
            </div>
            <span className="text-mustard font-semibold text-sm uppercase tracking-wider">
              Side-by-Side
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#141414] mb-8">
            Complete Comparison Table
          </h2>

          <motion.div variants={fadeInUp} className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#141414] text-white">
                  <th className="py-4 px-6 text-left font-semibold">Category</th>
                  <th className="py-4 px-6 text-center font-semibold bg-[#61DAFB]/20">
                    React Native
                  </th>
                  <th className="py-4 px-6 text-center font-semibold bg-[#02569B]/20">
                    Flutter
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-0">
                    <td className="py-4 px-6 font-medium text-[#141414]">{row.category}</td>
                    <td
                      className={`py-4 px-6 text-center ${
                        row.winner === "react-native"
                          ? "bg-green-50 text-green-800 font-medium"
                          : "text-gray-600"
                      }`}
                    >
                      {row.winner === "react-native" && (
                        <CheckCircle2 className="w-4 h-4 text-green-500 inline mr-2" />
                      )}
                      {row.reactNative}
                    </td>
                    <td
                      className={`py-4 px-6 text-center ${
                        row.winner === "flutter"
                          ? "bg-green-50 text-green-800 font-medium"
                          : "text-gray-600"
                      }`}
                    >
                      {row.winner === "flutter" && (
                        <CheckCircle2 className="w-4 h-4 text-green-500 inline mr-2" />
                      )}
                      {row.flutter}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}

// Pros and Cons Section
function ProsConsSection() {
  const reactNativePros = [
    "Massive JavaScript ecosystem with 2M+ npm packages",
    "Code sharing with React web applications",
    "Large talent pool makes hiring easier",
    "Native look and feel on each platform",
    "Mature and battle-tested in production",
    "Excellent Expo ecosystem for rapid development",
    "Smaller app sizes compared to Flutter",
    "Easy to integrate with existing native code",
  ];

  const reactNativeCons = [
    "Bridge architecture can be a bottleneck for complex apps",
    "Some third-party packages may be unmaintained",
    "Navigation solutions can be complex",
    "Occasional breaking changes with React updates",
  ];

  const flutterPros = [
    "Excellent performance with compiled native code",
    "Beautiful, consistent UI across platforms",
    "Outstanding documentation and learning resources",
    "Single codebase for mobile, web, and desktop",
    "Rich built-in widget library",
    "Strong typing with Dart catches errors early",
    "Consistent 60/120fps animations",
    "Comprehensive testing framework",
  ];

  const flutterCons = [
    "Requires learning Dart (new language)",
    "Smaller developer talent pool",
    "Larger app sizes due to bundled engine",
    "May not feel 100% native to each platform",
    "Smaller package ecosystem than npm",
  ];

  return (
    <AnimatedSection id="pros-cons" className="py-20 bg-white">
      <Container>
        <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-mustard/10 rounded-xl flex items-center justify-center">
              <Layers className="w-6 h-6 text-mustard" />
            </div>
            <span className="text-mustard font-semibold text-sm uppercase tracking-wider">
              Pros & Cons
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#141414] mb-8">
            Advantages and Disadvantages
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* React Native */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-[#61DAFB]/5 to-transparent rounded-2xl border border-[#61DAFB]/20 p-8"
            >
              <h3 className="text-2xl font-bold text-[#141414] mb-6 flex items-center gap-3">
                <Code2 className="w-8 h-8 text-[#61DAFB]" />
                React Native
              </h3>

              <div className="mb-8">
                <h4 className="font-semibold text-green-700 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Advantages
                </h4>
                <ul className="space-y-2">
                  {reactNativePros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-red-700 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Disadvantages
                </h4>
                <ul className="space-y-2">
                  {reactNativeCons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Flutter */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-[#02569B]/5 to-transparent rounded-2xl border border-[#02569B]/20 p-8"
            >
              <h3 className="text-2xl font-bold text-[#141414] mb-6 flex items-center gap-3">
                <Layers className="w-8 h-8 text-[#02569B]" />
                Flutter
              </h3>

              <div className="mb-8">
                <h4 className="font-semibold text-green-700 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Advantages
                </h4>
                <ul className="space-y-2">
                  {flutterPros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-red-700 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Disadvantages
                </h4>
                <ul className="space-y-2">
                  {flutterCons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}

// Recommendation Section
function RecommendationSection() {
  return (
    <AnimatedSection id="recommendation" className="py-20 bg-[#141414] text-white">
      <Container>
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-mustard/20 rounded-xl flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-mustard" />
            </div>
            <span className="text-mustard font-semibold text-sm uppercase tracking-wider">
              Our Recommendation
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Which Should You Choose in 2026?
          </h2>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 mb-8">
              After building dozens of mobile applications with both frameworks, our
              recommendation depends on your specific situation. Here&apos;s our honest take:
            </p>

            <div className="bg-mustard/10 border border-mustard/30 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-mustard mb-4">
                Choose React Native If...
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mustard shrink-0 mt-1" />
                  Your team already knows JavaScript or React
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mustard shrink-0 mt-1" />
                  You want to share code with a React web application
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mustard shrink-0 mt-1" />
                  You need access to the massive npm ecosystem
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mustard shrink-0 mt-1" />
                  Hiring flexibility is important to you
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mustard shrink-0 mt-1" />
                  You want apps that feel native to each platform
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mustard shrink-0 mt-1" />
                  App size is a concern (emerging markets, etc.)
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Choose Flutter If...</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/70 shrink-0 mt-1" />
                  You need pixel-perfect, identical UI across platforms
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/70 shrink-0 mt-1" />
                  Your app is heavily animation-focused
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/70 shrink-0 mt-1" />
                  You want built-in web and desktop support
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/70 shrink-0 mt-1" />
                  Your team is starting fresh without JS experience
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/70 shrink-0 mt-1" />
                  You prefer a more opinionated, unified ecosystem
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-mustard/20 to-mustard/10 rounded-xl p-8 border border-mustard/30">
              <h3 className="text-2xl font-bold text-mustard mb-4">
                Our Pick: React Native
              </h3>
              <p className="text-gray-300 mb-4">
                At RenderNext, we specialize in React Native development. While both frameworks
                are excellent choices, we&apos;ve found React Native to be the better fit for
                most of our clients&apos; needs. The reasons are practical:
              </p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-mustard shrink-0 mt-1" />
                  Most of our clients already have React web applications or JavaScript
                  expertise
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-mustard shrink-0 mt-1" />
                  The npm ecosystem provides solutions for almost any requirement
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-mustard shrink-0 mt-1" />
                  Easier long-term maintenance with a larger developer pool
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-mustard shrink-0 mt-1" />
                  Apps feel truly native to each platform
                </li>
              </ul>
              <p className="text-gray-400 text-sm">
                That said, we&apos;ve seen successful projects built with Flutter. The best
                framework is the one that matches your team&apos;s skills and project
                requirements.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <AnimatedSection id="faq" className="py-20 bg-gray-50">
      <Container>
        <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-mustard/10 rounded-xl flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-mustard" />
            </div>
            <span className="text-mustard font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#141414] mb-8">
            Frequently Asked Questions
          </h2>

          <motion.div variants={staggerContainer} className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-[#141414] pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-mustard shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-[#141414] to-gray-900 rounded-3xl p-12 text-white">
            <Building2 className="w-12 h-12 text-mustard mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Choosing a Framework?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team has built successful apps with both React Native and Flutter. We can help
              you evaluate which framework is best for your specific project requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://calendly.com/rendernext/15min?back=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-mustard text-black px-8 py-4 rounded-lg font-semibold hover:bg-mustard/90 transition-colors"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/services/mobile-development"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Our Mobile Services
              </Link>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              Free 30-minute consultation. No obligation.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

// Main Page Component
export default function ReactNativeVsFlutterPage() {
  return (
    <main>
      {/* JSON-LD Structured Data */}
      <FAQJsonLd questions={faqData} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://rendernext.io" },
          { name: "Compare", url: "https://rendernext.io/compare" },
          {
            name: "React Native vs Flutter",
            url: "https://rendernext.io/compare/react-native-vs-flutter",
          },
        ]}
      />

      <HeroSection />
      <TableOfContentsSection />
      <OverviewSection />
      <PerformanceSection />
      <DevelopmentSpeedSection />
      <UIUXSection />
      <CommunitySection />
      <LearningCurveSection />
      <CostSection />
      <ComparisonTableSection />
      <ProsConsSection />
      <RecommendationSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
