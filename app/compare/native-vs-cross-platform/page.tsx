"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Zap,
  Clock,
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
  Smartphone,
  TrendingUp,
  Building2,
  Lightbulb,
  MessageCircle,
  Wrench,
  Target,
  Users,
  RefreshCw,
  Shield,
  Gauge,
  Timer,
  PiggyBank,
  Rocket,
  Settings,
  GitBranch,
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
  { id: "native-development", title: "What is Native Development", icon: Smartphone },
  { id: "cross-platform-development", title: "What is Cross-Platform", icon: Layers },
  { id: "performance", title: "Performance Comparison", icon: Gauge },
  { id: "cost", title: "Development Cost", icon: PiggyBank },
  { id: "timeline", title: "Timeline Comparison", icon: Timer },
  { id: "maintenance", title: "Maintenance Considerations", icon: Wrench },
  { id: "when-native", title: "When to Choose Native", icon: Target },
  { id: "when-cross-platform", title: "When to Choose Cross-Platform", icon: Rocket },
  { id: "comparison-table", title: "Technical Metrics", icon: BarChart3 },
  { id: "faq", title: "FAQ", icon: MessageCircle },
];

// FAQ data
const faqData = [
  {
    question: "Is cross-platform development really as good as native in 2026?",
    answer:
      "For most applications, yes. Modern cross-platform frameworks like React Native have closed the performance gap significantly. The new architecture in React Native provides near-native performance for 95%+ of use cases. Only apps requiring intensive graphics processing, complex animations, or deep hardware integration may still benefit from fully native development. Major companies like Meta, Microsoft, and Shopify successfully use React Native for their production apps.",
  },
  {
    question: "How much money can I save with cross-platform development?",
    answer:
      "Cross-platform development typically saves 30-50% on initial development costs by maintaining a single codebase instead of two separate codebases. For a typical MVP, this could mean saving $15,000-$40,000. The savings compound over time with reduced maintenance costs, faster feature deployment, and simpler team structure. However, the exact savings depend on your app's complexity and specific requirements.",
  },
  {
    question: "Will users notice if my app is built with cross-platform technology?",
    answer:
      "In most cases, no. Well-built React Native apps are virtually indistinguishable from native apps to end users. React Native uses actual native UI components, so buttons, lists, and navigation feel exactly like native apps. The key is working with experienced developers who understand platform-specific design guidelines and performance optimization techniques.",
  },
  {
    question: "What are the main limitations of cross-platform development?",
    answer:
      "The main limitations include: slightly larger app sizes, potential delays in supporting brand-new platform features, and some advanced hardware integrations may require native modules. For apps requiring AR/VR, complex 3D graphics, or deep system-level access, native development may still be preferable. However, these edge cases represent less than 5% of mobile applications.",
  },
  {
    question: "Can I convert a native app to cross-platform later?",
    answer:
      "Yes, but it's essentially a rewrite rather than a conversion. Some business logic and APIs can be reused, but the UI layer needs to be rebuilt. We recommend starting with cross-platform from the beginning if there's any chance you'll need both platforms. The cost of rewriting later often exceeds the cost of building cross-platform initially.",
  },
  {
    question: "How does React Native compare to Flutter for cross-platform development?",
    answer:
      "Both are excellent choices. React Native uses JavaScript and native UI components, making it ideal for teams with web experience and apps needing a native look. Flutter uses Dart and custom rendering, excelling at custom UIs and animations. We specialize in React Native because of its larger ecosystem, easier hiring, and better integration with existing web technologies.",
  },
];

// Hero Section
function HeroSection() {
  return (
    <section className="relative bg-[#141414] text-white overflow-hidden pt-24 pb-16">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-mustard/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
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
            <li className="text-mustard">Native vs Cross-Platform</li>
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
              Technical Deep-Dive Guide
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Native vs Cross-Platform Development:{" "}
            <span className="text-mustard">Full Breakdown</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            A comprehensive technical analysis comparing native development (Swift/Kotlin) with
            cross-platform solutions (React Native, Flutter). Make an informed decision based on
            performance data, real costs, and practical considerations.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              20 min read
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
            Overview: The Fundamental Choice in Mobile Development
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="lead text-xl mb-6">
              Every mobile app project faces a critical architectural decision: should you build
              separate native applications for iOS and Android, or use a cross-platform framework
              to share code between platforms? This decision impacts everything from development
              costs to app performance to long-term maintenance.
            </p>
            <p className="mb-6">
              <strong className="text-[#141414]">Native development</strong> means building
              applications using platform-specific languages and tools: Swift or Objective-C for
              iOS, and Kotlin or Java for Android. Each platform has its own codebase, team,
              and deployment pipeline.
            </p>
            <p className="mb-6">
              <strong className="text-[#141414]">Cross-platform development</strong> uses
              frameworks like React Native or Flutter to write code once and deploy to both
              platforms. This approach has matured significantly and now powers major applications
              from companies like Meta, Microsoft, Shopify, and Discord.
            </p>
            <p>
              In 2026, this choice isn&apos;t about &quot;good vs. bad&quot; but rather about
              finding the right fit for your specific requirements, timeline, budget, and team
              capabilities. Let&apos;s dive deep into each approach.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center"
            >
              <div className="text-4xl font-bold text-mustard mb-2">85%</div>
              <p className="text-gray-600">
                of mobile apps can achieve excellent results with cross-platform development
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center"
            >
              <div className="text-4xl font-bold text-mustard mb-2">40%</div>
              <p className="text-gray-600">
                average cost savings with cross-platform vs. native dual development
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center"
            >
              <div className="text-4xl font-bold text-mustard mb-2">2x</div>
              <p className="text-gray-600">
                faster time-to-market with single codebase deployment
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}

// Native Development Section
function NativeDevelopmentSection() {
  return (
    <AnimatedSection id="native-development" className="py-20 bg-gray-50">
      <Container>
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-mustard/10 rounded-xl flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-mustard" />
            </div>
            <span className="text-mustard font-semibold text-sm uppercase tracking-wider">
              Native Development
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#141414] mb-6">
            What is Native Development? (Swift/Kotlin)
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p className="mb-6">
              Native development means building applications specifically for each mobile platform
              using the official languages, SDKs, and development environments provided by Apple
              and Google.
            </p>

            <h3 className="text-xl font-bold text-[#141414] mt-8 mb-4">
              iOS Native Development
            </h3>
            <p className="mb-6">
              iOS apps are built using <strong className="text-[#141414]">Swift</strong> (Apple&apos;s
              modern language introduced in 2014) or the older Objective-C, using Xcode as the IDE.
              Developers have direct access to all iOS APIs, including ARKit, Core ML, HealthKit,
              and the latest iOS features from day one.
            </p>

            <h3 className="text-xl font-bold text-[#141414] mt-8 mb-4">
              Android Native Development
            </h3>
            <p className="mb-6">
              Android apps are built using <strong className="text-[#141414]">Kotlin</strong>
              (Google&apos;s preferred language since 2019) or Java, using Android Studio.
              Developers have full access to Android APIs, Jetpack libraries, Material Design
              components, and platform-specific features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-2xl flex items-center justify-center mb-6">
                <Code2 className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-[#141414] mb-3">iOS (Swift)</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Direct access to all iOS APIs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Optimal performance guaranteed</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>SwiftUI for modern declarative UI</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>First-class Apple ecosystem support</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-2xl flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-[#141414] mb-3">Android (Kotlin)</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Full Android SDK access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Jetpack Compose for modern UI</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Deep hardware integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Coroutines for async operations</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 bg-white rounded-xl p-6 border border-gray-200"
          >
            <h4 className="font-bold text-[#141414] mb-3">Technical Stack for Native Development</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-gray-500 mb-2">iOS Stack</p>
                <div className="flex flex-wrap gap-2">
                  {["Swift", "SwiftUI", "UIKit", "Xcode", "CocoaPods", "SPM"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 mb-2">Android Stack</p>
                <div className="flex flex-wrap gap-2">
                  {["Kotlin", "Jetpack Compose", "XML Views", "Android Studio", "Gradle"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}

// Cross-Platform Development Section
function CrossPlatformSection() {
  return (
    <AnimatedSection id="cross-platform-development" className="py-20 bg-white">
      <Container>
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-mustard/10 rounded-xl flex items-center justify-center">
              <Layers className="w-6 h-6 text-mustard" />
            </div>
            <span className="text-mustard font-semibold text-sm uppercase tracking-wider">
              Cross-Platform Development
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#141414] mb-6">
            What is Cross-Platform? (React Native, Flutter)
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p className="mb-6">
              Cross-platform development uses frameworks that allow developers to write code once
              and deploy to multiple platforms (iOS, Android, and sometimes web). The two dominant
              frameworks in 2026 are React Native and Flutter.
            </p>

            <h3 className="text-xl font-bold text-[#141414] mt-8 mb-4">
              React Native
            </h3>
            <p className="mb-6">
              Created by Meta in 2015, React Native uses JavaScript/TypeScript and the React paradigm
              to build mobile apps. It renders using actual native UI components, meaning a button
              in React Native becomes a real iOS UIButton or Android Button. The new architecture
              (Fabric renderer and TurboModules) introduced in recent years has significantly improved
              performance, bringing it to near-native levels for most applications.
            </p>

            <h3 className="text-xl font-bold text-[#141414] mt-8 mb-4">
              Flutter
            </h3>
            <p className="mb-6">
              Created by Google in 2018, Flutter uses the Dart language and a custom rendering engine
              (Skia/Impeller) to draw every pixel. This gives Flutter pixel-perfect consistency across
              platforms but means it doesn&apos;t use native UI components. Flutter excels at custom,
              highly branded interfaces and complex animations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-[#61DAFB]/10 to-[#61DAFB]/5 rounded-2xl p-8 border border-[#61DAFB]/20"
            >
              <div className="w-16 h-16 bg-[#61DAFB]/20 rounded-2xl flex items-center justify-center mb-6">
                <Code2 className="w-8 h-8 text-[#61DAFB]" />
              </div>
              <h3 className="text-2xl font-bold text-[#141414] mb-3">React Native</h3>
              <p className="text-gray-600 mb-4">
                Our recommended cross-platform solution for most projects.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>JavaScript/TypeScript (huge talent pool)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Native UI components (true native feel)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Massive npm ecosystem (2M+ packages)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Code sharing with web (React)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Expo for rapid development</span>
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
              <p className="text-gray-600 mb-4">
                Excellent for custom UI-heavy applications.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Dart language (easy to learn)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Custom rendering (pixel-perfect UI)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Excellent animation performance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Built-in web/desktop support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Rich widget library</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 bg-mustard/10 border border-mustard/20 rounded-xl p-6"
          >
            <p className="text-[#141414] font-medium">
              <strong>Why we specialize in React Native:</strong> While both frameworks are excellent,
              React Native&apos;s larger ecosystem, easier hiring, code sharing with web projects, and
              native UI approach make it the better choice for most of our clients&apos; business needs.
              The familiar JavaScript/React paradigm also means faster onboarding and easier long-term
              maintenance.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}

// Performance Section
function PerformanceSection() {
  const performanceMetrics = [
    {
      metric: "App Startup Time",
      native: "~0.5-1s (fastest possible)",
      crossPlatform: "~0.8-1.5s (5-20% slower)",
      notes: "Negligible difference for users",
    },
    {
      metric: "Frame Rate (UI)",
      native: "60fps consistent",
      crossPlatform: "60fps with proper optimization",
      notes: "No perceptible difference",
    },
    {
      metric: "Memory Usage",
      native: "Baseline (lowest)",
      crossPlatform: "10-20% higher",
      notes: "Acceptable for most devices",
    },
    {
      metric: "App Size (Minimum)",
      native: "~2-5MB",
      crossPlatform: "~7-15MB (RN) / ~15-20MB (Flutter)",
      notes: "Consider for emerging markets",
    },
    {
      metric: "Complex Animations",
      native: "Excellent",
      crossPlatform: "Very Good (with Reanimated/Skia)",
      notes: "99% of apps won't notice",
    },
    {
      metric: "Heavy Computation",
      native: "Optimal",
      crossPlatform: "Good (can use native modules)",
      notes: "Native modules bridge the gap",
    },
    {
      metric: "Battery Efficiency",
      native: "Optimal",
      crossPlatform: "~5-10% more consumption",
      notes: "Minimal real-world impact",
    },
  ];

  return (
    <AnimatedSection id="performance" className="py-20 bg-gray-50">
      <Container>
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-mustard/10 rounded-xl flex items-center justify-center">
              <Gauge className="w-6 h-6 text-mustard" />
            </div>
            <span className="text-mustard font-semibold text-sm uppercase tracking-wider">
              Performance
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#141414] mb-6">
            Performance Comparison: Technical Deep-Dive
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p className="mb-6">
              Performance is often cited as the main reason to choose native development. While
              native apps do have a theoretical performance advantage, the practical difference
              has narrowed dramatically. Let&apos;s look at the actual metrics.
            </p>

            <h3 className="text-xl font-bold text-[#141414] mt-8 mb-4">
              The Technical Reality
            </h3>
            <p className="mb-6">
              Native apps compile directly to machine code and have zero abstraction layer between
              the app and the OS. Cross-platform frameworks add an abstraction layer: React Native
              uses a JavaScript bridge (optimized with the new architecture), while Flutter uses
              its own rendering engine.
            </p>
            <p className="mb-6">
              However, the performance gap that existed 5 years ago has largely closed. React
              Native&apos;s new architecture eliminates the bridge for most operations, and both
              frameworks can call native code directly for performance-critical operations.
            </p>
          </div>

          {/* Performance Table */}
          <motion.div variants={fadeInUp} className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#141414] text-white">
                  <th className="py-4 px-6 text-left font-semibold">Metric</th>
                  <th className="py-4 px-6 text-center font-semibold">Native</th>
                  <th className="py-4 px-6 text-center font-semibold">Cross-Platform</th>
                  <th className="py-4 px-6 text-center font-semibold">Impact</th>
                </tr>
              </thead>
              <tbody>
                {performanceMetrics.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-0">
                    <td className="py-4 px-6 font-medium text-[#141414]">{row.metric}</td>
                    <td className="py-4 px-6 text-center text-gray-600 bg-green-50/50">{row.native}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{row.crossPlatform}</td>
                    <td className="py-4 px-6 text-center text-sm text-gray-500 italic">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-mustard/10 border border-mustard/20 rounded-xl p-6"
          >
            <p className="text-[#141414] font-medium">
              <strong>Bottom Line:</strong> Native development offers marginally better performance,
              but the difference is imperceptible to users in 95%+ of applications. Cross-platform
              frameworks are &quot;good enough&quot; for everything from simple utilities to complex
              enterprise applications. Only apps with intensive real-time graphics (games, AR/VR) or
              deep hardware integration truly benefit from native development.
            </p>
          </motion.div>
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
              <PiggyBank className="w-6 h-6 text-mustard" />
            </div>
            <span className="text-mustard font-semibold text-sm uppercase tracking-wider">
              Development Cost
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#141414] mb-6">
            Development Cost Comparison
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p className="mb-6">
              Cost is often the deciding factor for businesses, and this is where cross-platform
              development shows its most significant advantage. Building for two platforms with
              native development essentially doubles your development costs.
            </p>
          </div>

          {/* Cost Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-[#141414] mb-6 flex items-center gap-3">
                <Smartphone className="w-8 h-8 text-gray-400" />
                Native Development
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-2">MVP (8-12 weeks)</p>
                  <p className="text-3xl font-bold text-[#141414]">$40K - $80K</p>
                  <p className="text-sm text-gray-500">iOS + Android combined</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-2">Full App (16-24 weeks)</p>
                  <p className="text-3xl font-bold text-[#141414]">$80K - $200K</p>
                  <p className="text-sm text-gray-500">iOS + Android combined</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-2">Annual Maintenance</p>
                  <p className="text-3xl font-bold text-[#141414]">$20K - $50K</p>
                  <p className="text-sm text-gray-500">Per platform</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong className="text-[#141414]">Team required:</strong> 2 iOS developers +
                  2 Android developers + 1 tech lead (minimum)
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-mustard/5 rounded-2xl p-8 border-2 border-mustard"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#141414] flex items-center gap-3">
                  <Layers className="w-8 h-8 text-mustard" />
                  Cross-Platform
                </h3>
                <span className="px-3 py-1 bg-mustard text-black text-sm font-semibold rounded-full">
                  Recommended
                </span>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-2">MVP (8-12 weeks)</p>
                  <p className="text-3xl font-bold text-mustard">$20K - $40K</p>
                  <p className="text-sm text-gray-500">Both platforms</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-2">Full App (14-20 weeks)</p>
                  <p className="text-3xl font-bold text-mustard">$40K - $100K</p>
                  <p className="text-sm text-gray-500">Both platforms</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-2">Annual Maintenance</p>
                  <p className="text-3xl font-bold text-mustard">$10K - $25K</p>
                  <p className="text-sm text-gray-500">Single codebase</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-mustard/30">
                <p className="text-sm text-gray-600">
                  <strong className="text-[#141414]">Team required:</strong> 2 React Native
                  developers + 1 tech lead (minimum)
                </p>
              </div>
            </motion.div>
          </div>

          {/* Savings Breakdown */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#141414] text-white rounded-2xl p-8"
          >
            <h4 className="text-xl font-bold mb-6">Where the Savings Come From</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <GitBranch className="w-6 h-6 text-mustard" />
                  <span className="font-semibold">Single Codebase</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Write business logic, API integrations, and most UI code once. No duplicate effort
                  across platforms.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-mustard" />
                  <span className="font-semibold">Smaller Team</span>
                </div>
                <p className="text-gray-400 text-sm">
                  One team of React Native developers instead of separate iOS and Android teams.
                  Better communication and consistency.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="w-6 h-6 text-mustard" />
                  <span className="font-semibold">Faster Iteration</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Fix bugs once, ship to both platforms. Feature development is nearly 2x faster
                  with shared code.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}

// Timeline Section
function TimelineSection() {
  return (
    <AnimatedSection id="timeline" className="py-20 bg-gray-50">
      <Container>
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-mustard/10 rounded-xl flex items-center justify-center">
              <Timer className="w-6 h-6 text-mustard" />
            </div>
            <span className="text-mustard font-semibold text-sm uppercase tracking-wider">
              Timeline
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#141414] mb-6">
            Timeline Comparison: Time-to-Market
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p className="mb-6">
              In today&apos;s competitive market, time-to-market can make or break a product.
              Cross-platform development typically reduces launch timelines by 30-40%.
            </p>
          </div>

          {/* Timeline Visual */}
          <div className="space-y-8">
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <h4 className="font-bold text-[#141414] mb-4">Native Development Timeline (Both Platforms)</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm text-gray-500">Week 1-2</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gray-400 h-full" style={{ width: '10%' }} />
                  </div>
                  <span className="text-sm text-gray-600">Setup & Planning (x2)</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm text-gray-500">Week 3-10</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gray-400 h-full" style={{ width: '45%' }} />
                  </div>
                  <span className="text-sm text-gray-600">Core Development (parallel)</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm text-gray-500">Week 11-14</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gray-400 h-full" style={{ width: '25%' }} />
                  </div>
                  <span className="text-sm text-gray-600">Testing (per platform)</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm text-gray-500">Week 15-16</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gray-400 h-full" style={{ width: '10%' }} />
                  </div>
                  <span className="text-sm text-gray-600">Store Submission</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                <strong>Total: 14-16 weeks</strong> (assuming parallel development with doubled team)
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-mustard/5 rounded-xl p-6 border-2 border-mustard"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-[#141414]">Cross-Platform Timeline</h4>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                  40% Faster
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm text-gray-500">Week 1</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-mustard h-full" style={{ width: '10%' }} />
                  </div>
                  <span className="text-sm text-gray-600">Setup & Planning (once)</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm text-gray-500">Week 2-7</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-mustard h-full" style={{ width: '55%' }} />
                  </div>
                  <span className="text-sm text-gray-600">Core Development (shared)</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm text-gray-500">Week 8-9</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-mustard h-full" style={{ width: '20%' }} />
                  </div>
                  <span className="text-sm text-gray-600">Platform-Specific Testing</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm text-gray-500">Week 10</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-mustard h-full" style={{ width: '10%' }} />
                  </div>
                  <span className="text-sm text-gray-600">Store Submission (both)</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#141414] font-medium">
                <strong>Total: 8-10 weeks</strong> (single team, both platforms)
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 bg-white rounded-xl p-6 border border-gray-200"
          >
            <h4 className="font-bold text-[#141414] mb-3">Feature Update Cycles</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-gray-500 mb-2">Native</p>
                <p className="text-gray-600">
                  Each feature requires implementation in both codebases. Bug fixes need to be
                  applied twice. Updates typically take 2x the time to ship.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-mustard mb-2">Cross-Platform</p>
                <p className="text-gray-600">
                  Write once, ship everywhere. Bug fixes are applied once. Teams can iterate
                  faster and respond to user feedback quickly.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}

// Maintenance Section
function MaintenanceSection() {
  return (
    <AnimatedSection id="maintenance" className="py-20 bg-white">
      <Container>
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-mustard/10 rounded-xl flex items-center justify-center">
              <Wrench className="w-6 h-6 text-mustard" />
            </div>
            <span className="text-mustard font-semibold text-sm uppercase tracking-wider">
              Maintenance
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#141414] mb-6">
            Long-Term Maintenance Considerations
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p className="mb-6">
              The true cost of mobile development extends far beyond the initial build. Ongoing
              maintenance, updates, and OS compatibility work represent a significant portion of
              total lifecycle costs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-xl font-bold text-[#141414]">Native Maintenance Challenges</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                    <RefreshCw className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#141414]">Dual Update Cycles</h4>
                    <p className="text-sm text-gray-600">
                      Every OS update (iOS 19, Android 16) requires updates to both codebases.
                      This means double the testing and double the bug fixes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#141414]">Specialized Teams</h4>
                    <p className="text-sm text-gray-600">
                      Need to maintain expertise in both Swift and Kotlin. Developer turnover
                      is more impactful when knowledge is platform-specific.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                    <GitBranch className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#141414]">Feature Parity</h4>
                    <p className="text-sm text-gray-600">
                      Keeping features consistent across platforms requires careful coordination.
                      Bugs may exist on one platform but not the other.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-xl font-bold text-[#141414]">Cross-Platform Maintenance Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#141414]">Single Codebase Updates</h4>
                    <p className="text-sm text-gray-600">
                      One update fixes bugs on both platforms. OS compatibility updates are
                      usually handled by the framework maintainers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#141414]">Flexible Team</h4>
                    <p className="text-sm text-gray-600">
                      Any React Native developer can work on any part of the app. JavaScript
                      skills are abundant and transferable from web development.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#141414]">Guaranteed Consistency</h4>
                    <p className="text-sm text-gray-600">
                      Features are inherently consistent because they&apos;re the same code.
                      No risk of platform-specific bugs or feature gaps.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 bg-[#141414] text-white rounded-xl p-6"
          >
            <p className="font-medium">
              <strong className="text-mustard">Long-Term Cost Impact:</strong> Over a 3-year
              period, maintenance costs for native apps are typically 50-100% higher than
              cross-platform apps due to the need for platform-specific updates, dual testing
              cycles, and specialized developer requirements.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}

// When to Choose Native Section
function WhenNativeSection() {
  const nativeUseCases = [
    {
      title: "Graphics-Intensive Games",
      description: "3D games, AR/VR experiences, or apps requiring Metal/Vulkan for GPU-intensive rendering",
      icon: Cpu,
    },
    {
      title: "Deep Hardware Integration",
      description: "Bluetooth LE accessories, custom camera processing, or specialized sensor access",
      icon: Settings,
    },
    {
      title: "Platform-Exclusive Features",
      description: "Apps leveraging platform-specific features immediately upon OS release",
      icon: Shield,
    },
    {
      title: "Absolute Performance Critical",
      description: "Real-time audio processing, video editing apps, or high-frequency trading interfaces",
      icon: Zap,
    },
  ];

  return (
    <AnimatedSection id="when-native" className="py-20 bg-gray-50">
      <Container>
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-mustard/10 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-mustard" />
            </div>
            <span className="text-mustard font-semibold text-sm uppercase tracking-wider">
              Use Case Analysis
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#141414] mb-6">
            When to Choose Native Development
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p>
              Native development remains the right choice for specific, technically demanding
              scenarios. If your project fits one of these categories, the extra investment
              may be justified.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {nativeUseCases.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-6 border border-gray-200"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <h3 className="font-bold text-[#141414] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeInUp}
            className="bg-yellow-50 border border-yellow-200 rounded-xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-bold text-[#141414] mb-2">Important Note</h4>
                <p className="text-gray-700 text-sm">
                  These scenarios represent less than 15% of mobile apps in production. Most
                  business applications, social apps, e-commerce apps, and content platforms
                  are well-served by cross-platform development. If you&apos;re unsure, we
                  recommend a technical consultation to evaluate your specific requirements.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}

// When to Choose Cross-Platform Section
function WhenCrossPlatformSection() {
  const crossPlatformUseCases = [
    {
      title: "Startups & MVPs",
      description: "Get to market fast, validate your idea, and iterate based on user feedback without breaking the budget",
      icon: Rocket,
    },
    {
      title: "Business Applications",
      description: "Internal tools, CRM apps, dashboards, and enterprise software with standard UI patterns",
      icon: Building2,
    },
    {
      title: "Content & Media Apps",
      description: "News readers, streaming services, social platforms, and content-focused applications",
      icon: Layers,
    },
    {
      title: "E-commerce & Marketplaces",
      description: "Shopping apps, booking platforms, and marketplace applications with API-driven functionality",
      icon: DollarSign,
    },
    {
      title: "SaaS Mobile Companions",
      description: "Mobile versions of web SaaS products that can share code and design systems",
      icon: GitBranch,
    },
    {
      title: "Limited Budget Projects",
      description: "When you need both platforms but budget constraints don't allow for dual native development",
      icon: PiggyBank,
    },
  ];

  return (
    <AnimatedSection id="when-cross-platform" className="py-20 bg-white">
      <Container>
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-mustard/10 rounded-xl flex items-center justify-center">
              <Rocket className="w-6 h-6 text-mustard" />
            </div>
            <span className="text-mustard font-semibold text-sm uppercase tracking-wider">
              Recommended For
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#141414] mb-6">
            When to Choose Cross-Platform Development
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p>
              Cross-platform development, particularly with React Native, is the optimal choice
              for the vast majority of mobile applications. Here&apos;s where it truly shines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {crossPlatformUseCases.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="bg-mustard/5 rounded-xl p-6 border border-mustard/20 hover:border-mustard/40 transition-colors"
                >
                  <div className="w-12 h-12 bg-mustard/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-mustard" />
                  </div>
                  <h3 className="font-bold text-[#141414] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-mustard/20 to-mustard/10 rounded-xl p-8 border border-mustard/30"
          >
            <h3 className="text-xl font-bold text-[#141414] mb-4">
              Companies Successfully Using React Native
            </h3>
            <div className="flex flex-wrap gap-4 mb-6">
              {[
                "Meta (Facebook, Instagram)",
                "Microsoft (Office, Outlook)",
                "Shopify",
                "Discord",
                "Bloomberg",
                "Coinbase",
                "Pinterest",
                "Uber Eats",
              ].map((company) => (
                <span
                  key={company}
                  className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200"
                >
                  {company}
                </span>
              ))}
            </div>
            <p className="text-gray-700 text-sm">
              These companies chose React Native not because they couldn&apos;t afford native
              development, but because cross-platform offered the best combination of
              development velocity, code sharing, and user experience for their needs.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}

// Comparison Table Section
function ComparisonTableSection() {
  const comparisonData = [
    {
      category: "Development Cost (Both Platforms)",
      native: "$80K-200K",
      crossPlatform: "$40K-100K",
      winner: "cross-platform",
    },
    {
      category: "Time to Market",
      native: "14-24 weeks",
      crossPlatform: "8-14 weeks",
      winner: "cross-platform",
    },
    {
      category: "Team Size Required",
      native: "4-6 developers (min)",
      crossPlatform: "2-3 developers (min)",
      winner: "cross-platform",
    },
    {
      category: "Raw Performance",
      native: "100% (baseline)",
      crossPlatform: "95-99%",
      winner: "native",
    },
    {
      category: "App Size",
      native: "~2-5MB",
      crossPlatform: "~7-15MB",
      winner: "native",
    },
    {
      category: "Hardware Access",
      native: "Full & Immediate",
      crossPlatform: "Full (via modules)",
      winner: "tie",
    },
    {
      category: "OS Feature Support",
      native: "Day 1",
      crossPlatform: "Days to weeks delay",
      winner: "native",
    },
    {
      category: "Code Reusability",
      native: "0% between platforms",
      crossPlatform: "80-95%",
      winner: "cross-platform",
    },
    {
      category: "Maintenance Cost (Annual)",
      native: "High ($20K-50K per platform)",
      crossPlatform: "Lower ($10K-25K total)",
      winner: "cross-platform",
    },
    {
      category: "Hiring Difficulty",
      native: "Moderate (specialized)",
      crossPlatform: "Easy (JS developers)",
      winner: "cross-platform",
    },
    {
      category: "Feature Consistency",
      native: "Requires coordination",
      crossPlatform: "Automatic",
      winner: "cross-platform",
    },
    {
      category: "Best For",
      native: "Performance-critical apps",
      crossPlatform: "85%+ of mobile apps",
      winner: "depends",
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
              Technical Metrics
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
                  <th className="py-4 px-6 text-center font-semibold">
                    Native (Swift/Kotlin)
                  </th>
                  <th className="py-4 px-6 text-center font-semibold bg-mustard/20">
                    Cross-Platform (React Native)
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-0">
                    <td className="py-4 px-6 font-medium text-[#141414]">{row.category}</td>
                    <td
                      className={`py-4 px-6 text-center ${
                        row.winner === "native"
                          ? "bg-green-50 text-green-800 font-medium"
                          : "text-gray-600"
                      }`}
                    >
                      {row.winner === "native" && (
                        <CheckCircle2 className="w-4 h-4 text-green-500 inline mr-2" />
                      )}
                      {row.native}
                    </td>
                    <td
                      className={`py-4 px-6 text-center ${
                        row.winner === "cross-platform"
                          ? "bg-green-50 text-green-800 font-medium"
                          : "text-gray-600"
                      }`}
                    >
                      {row.winner === "cross-platform" && (
                        <CheckCircle2 className="w-4 h-4 text-green-500 inline mr-2" />
                      )}
                      {row.crossPlatform}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 p-6 bg-[#141414] text-white rounded-xl"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-mustard rounded-lg flex items-center justify-center shrink-0">
                <Lightbulb className="w-5 h-5 text-[#141414]" />
              </div>
              <div>
                <h4 className="font-bold text-mustard mb-2">Our Recommendation</h4>
                <p className="text-gray-300">
                  For most projects, <strong className="text-white">cross-platform development
                  with React Native</strong> offers the best balance of cost, speed, and
                  quality. The performance gap has closed significantly, and the development
                  efficiencies are substantial. We recommend native development only for
                  the specific use cases outlined above where cross-platform cannot meet
                  technical requirements.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <AnimatedSection id="faq" className="py-20 bg-white">
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
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
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
    <section className="py-24 bg-gray-50">
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
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team specializes in React Native development, delivering high-quality
              cross-platform apps that look and feel native. Let&apos;s discuss your
              project requirements and find the best approach for your specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-mustard text-black px-8 py-4 rounded-lg font-semibold hover:bg-mustard/90 transition-colors"
              >
                Get a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Get a Project Estimate
              </Link>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              Free 30-minute technical consultation. No commitment required.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

// Main Page Component
export default function NativeVsCrossPlatformPage() {
  return (
    <main>
      {/* JSON-LD Structured Data */}
      <FAQJsonLd questions={faqData} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://rendernext.io" },
          { name: "Compare", url: "https://rendernext.io/compare" },
          {
            name: "Native vs Cross-Platform",
            url: "https://rendernext.io/compare/native-vs-cross-platform",
          },
        ]}
      />

      <HeroSection />
      <TableOfContentsSection />
      <OverviewSection />
      <NativeDevelopmentSection />
      <CrossPlatformSection />
      <PerformanceSection />
      <CostSection />
      <TimelineSection />
      <MaintenanceSection />
      <WhenNativeSection />
      <WhenCrossPlatformSection />
      <ComparisonTableSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
