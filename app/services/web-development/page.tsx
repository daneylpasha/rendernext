"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Globe,
  Zap,
  Search,
  Shield,
  Server,
  Database,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Gauge,
  FileCode,
  Layout,
  ShoppingCart,
  Users,
  BarChart3,
  Lock,
  RefreshCw,
  Sparkles,
} from "lucide-react";

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

// Hero Section with Browser Mockup
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#141414] via-gray-900 to-[#141414] text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#F5A623 1px, transparent 1px), linear-gradient(90deg, #F5A623 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Next.js badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <svg viewBox="0 0 180 180" className="w-5 h-5" fill="currentColor">
                <mask
                  id="mask0"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="180"
                  height="180"
                >
                  <circle cx="90" cy="90" r="90" fill="white" />
                </mask>
                <g mask="url(#mask0)">
                  <circle cx="90" cy="90" r="90" fill="white" />
                  <path
                    d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z"
                    fill="black"
                  />
                  <path d="M115 54h12v72h-12V54z" fill="black" />
                </g>
              </svg>
              <span className="text-sm font-medium">Built with Next.js</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Web Apps That{" "}
              <span className="text-mustard">Perform</span>
            </h1>

            <p className="text-xl text-gray-300 mb-6 max-w-xl">
              Fast, scalable, SEO-optimized web applications built with the
              same technologies powering Netflix, Vercel, and Nike.
            </p>

            {/* Performance metrics */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400 font-bold">90+</span>
                </div>
                <div className="text-sm">
                  <div className="text-white font-medium">Lighthouse</div>
                  <div className="text-gray-400">Score Guaranteed</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-sm">
                  <div className="text-white font-medium">&lt;3s</div>
                  <div className="text-gray-400">Load Time</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Search className="w-5 h-5 text-purple-400" />
                </div>
                <div className="text-sm">
                  <div className="text-white font-medium">SEO</div>
                  <div className="text-gray-400">Optimized</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-mustard text-black px-8 py-4 rounded-lg font-semibold hover:bg-mustard/90 transition-colors"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#rendering"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right: Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
              {/* Browser chrome */}
              <div className="bg-gray-900 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-800 rounded-md px-4 py-1.5 text-sm text-gray-400 flex items-center gap-2">
                    <Lock className="w-3 h-3 text-green-500" />
                    yourdomain.com
                  </div>
                </div>
              </div>
              {/* Browser content - Code preview */}
              <div className="p-6 bg-[#1e1e1e] font-mono text-sm">
                <div className="text-gray-500">{"// Next.js App Router"}</div>
                <div className="mt-2">
                  <span className="text-purple-400">export default</span>{" "}
                  <span className="text-yellow-300">async function</span>{" "}
                  <span className="text-blue-400">Page</span>
                  <span className="text-white">() {"{"}</span>
                </div>
                <div className="ml-4 text-gray-500">
                  {"// Server-side data fetching"}
                </div>
                <div className="ml-4">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">data</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-purple-400">await</span>{" "}
                  <span className="text-yellow-300">fetchData</span>
                  <span className="text-white">();</span>
                </div>
                <div className="mt-2 ml-4">
                  <span className="text-purple-400">return</span>{" "}
                  <span className="text-white">(</span>
                </div>
                <div className="ml-8">
                  <span className="text-gray-500">{"<"}</span>
                  <span className="text-green-400">Dashboard</span>
                </div>
                <div className="ml-12">
                  <span className="text-blue-300">data</span>
                  <span className="text-white">=</span>
                  <span className="text-white">{"{"}</span>
                  <span className="text-blue-300">data</span>
                  <span className="text-white">{"}"}</span>
                </div>
                <div className="ml-8">
                  <span className="text-gray-500">{"/>"}</span>
                </div>
                <div className="ml-4">
                  <span className="text-white">);</span>
                </div>
                <div>
                  <span className="text-white">{"}"}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Rendering Strategies Section (SSR vs SSG vs ISR)
function RenderingSection() {
  const strategies = [
    {
      name: "SSR",
      fullName: "Server-Side Rendering",
      description: "Fresh data on every request",
      useCase: "Dashboards, personalized content, real-time data",
      color: "bg-blue-500",
      icon: Server,
    },
    {
      name: "SSG",
      fullName: "Static Site Generation",
      description: "Pre-built at deploy time",
      useCase: "Marketing pages, blogs, documentation",
      color: "bg-green-500",
      icon: FileCode,
    },
    {
      name: "ISR",
      fullName: "Incremental Static Regeneration",
      description: "Best of both worlds",
      useCase: "E-commerce products, news sites, catalogs",
      color: "bg-purple-500",
      icon: RefreshCw,
    },
  ];

  return (
    <AnimatedSection id="rendering" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            The Right <span className="text-mustard">Rendering Strategy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Next.js gives us flexibility to choose the best approach for each
            page. We pick the right strategy based on your content and
            performance needs.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-mustard/30 transition-colors group"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 ${strategy.color} rounded-xl mb-6`}
              >
                <strategy.icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="text-2xl font-bold text-[#141414]">
                  {strategy.name}
                </h3>
                <span className="text-sm text-gray-500">
                  {strategy.fullName}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{strategy.description}</p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-[#141414]">Best for: </span>
                  {strategy.useCase}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-12 bg-[#141414] rounded-2xl p-8 text-center"
        >
          <p className="text-gray-400 mb-2">The Result</p>
          <p className="text-2xl md:text-3xl font-bold text-white">
            <span className="text-mustard">Blazing fast</span> pages that rank
            well and convert visitors into customers.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Traditional vs Modern Comparison
function ComparisonSection() {
  const comparisons = [
    {
      traditional: "Slow page loads (5-10s)",
      modern: "Sub-3 second loads",
    },
    {
      traditional: "Full page refreshes",
      modern: "Instant navigation (SPA-like)",
    },
    {
      traditional: "Poor mobile experience",
      modern: "Mobile-first responsive design",
    },
    {
      traditional: "Basic SEO",
      modern: "Advanced SEO with SSR/SSG",
    },
    {
      traditional: "Difficult to scale",
      modern: "Edge-deployed, globally fast",
    },
    {
      traditional: "Manual deployments",
      modern: "CI/CD with preview URLs",
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            Traditional Sites vs{" "}
            <span className="text-mustard">Modern Web Apps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We build web applications, not just websites. Here&apos;s the
            difference.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <div className="grid grid-cols-2">
              <div className="bg-gray-100 p-6 border-b border-r border-gray-200">
                <h3 className="font-bold text-gray-500 text-sm uppercase tracking-wider">
                  Traditional Websites
                </h3>
              </div>
              <div className="bg-[#141414] p-6 border-b border-gray-200">
                <h3 className="font-bold text-mustard text-sm uppercase tracking-wider">
                  Modern Web Apps (Our Approach)
                </h3>
              </div>
            </div>
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-2">
                <div className="p-6 border-b border-r border-gray-200 flex items-center">
                  <span className="text-gray-600">{item.traditional}</span>
                </div>
                <div className="p-6 border-b border-gray-200 bg-gray-50 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-[#141414] font-medium">
                    {item.modern}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// What We Build Section
function WhatWeBuildSection() {
  const appTypes = [
    {
      icon: BarChart3,
      title: "SaaS Platforms",
      description: "Multi-tenant applications with subscription billing",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description: "Custom stores with Stripe, inventory, and fulfillment",
    },
    {
      icon: Layout,
      title: "Dashboards",
      description: "Data visualization and admin panels",
    },
    {
      icon: Users,
      title: "Customer Portals",
      description: "Self-service portals for your clients",
    },
    {
      icon: Globe,
      title: "Marketing Sites",
      description: "High-converting landing pages and company websites",
    },
    {
      icon: Database,
      title: "Internal Tools",
      description: "Custom business applications for your team",
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            What We Build
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From simple marketing sites to complex SaaS platforms.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {appTypes.map((type, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-mustard/50 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-[#141414] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <type.icon className="w-7 h-7 text-mustard" />
              </div>
              <h3 className="text-xl font-bold text-[#141414] mb-2">
                {type.title}
              </h3>
              <p className="text-gray-600">{type.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Tech Stack Section (Horizontal Flow)
function TechStackSection() {
  const stack = {
    framework: { label: "Framework", items: ["Next.js 14", "React 18"] },
    language: { label: "Language", items: ["TypeScript"] },
    styling: { label: "Styling", items: ["Tailwind CSS", "Framer Motion"] },
    database: { label: "Database", items: ["PostgreSQL", "Prisma", "Redis"] },
    auth: { label: "Auth", items: ["Auth.js", "Clerk"] },
    payments: { label: "Payments", items: ["Stripe"] },
    hosting: { label: "Hosting", items: ["Vercel", "AWS"] },
    analytics: { label: "Analytics", items: ["Posthog", "Mixpanel"] },
  };

  return (
    <AnimatedSection className="py-24 bg-[#141414] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Web <span className="text-mustard">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Modern tools that power performant, maintainable applications.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="relative">
          {/* Horizontal flow */}
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(stack).map(([key, { label, items }], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 min-w-[200px]"
              >
                <div className="text-mustard text-xs font-bold uppercase tracking-wider mb-3">
                  {label}
                </div>
                <div className="space-y-2">
                  {items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-gray-700/50 rounded-lg px-3 py-2 text-sm font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Integration badges */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Plus integrations with:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Stripe",
                "Auth0",
                "Clerk",
                "Sanity",
                "Contentful",
                "SendGrid",
                "Twilio",
                "OpenAI",
              ].map((integration) => (
                <span
                  key={integration}
                  className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300"
                >
                  {integration}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Dashboard Preview Section
function DashboardPreviewSection() {
  return (
    <AnimatedSection className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <span className="text-mustard font-medium text-sm uppercase tracking-wider">
            Example Project
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mt-2 mb-6">
            SaaS Dashboard Interface
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Clean, data-rich dashboards that help your users make decisions.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          {/* Dashboard mockup */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Top bar */}
            <div className="bg-[#141414] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-mustard rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-black" />
                </div>
                <span className="text-white font-semibold">Analytics Pro</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-gray-400 text-sm">Dashboard</div>
                <div className="text-gray-400 text-sm">Reports</div>
                <div className="text-gray-400 text-sm">Settings</div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-8">
              <div className="grid grid-cols-4 gap-6 mb-8">
                {[
                  { label: "Total Revenue", value: "$48,250", change: "+12%" },
                  { label: "Active Users", value: "2,420", change: "+8%" },
                  { label: "Conversion", value: "3.2%", change: "+0.5%" },
                  { label: "Avg. Session", value: "4m 32s", change: "-2%" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                  >
                    <div className="text-sm text-gray-500 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-2xl font-bold text-[#141414]">
                      {stat.value}
                    </div>
                    <div
                      className={`text-sm ${
                        stat.change.startsWith("+")
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {stat.change} vs last month
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart placeholder */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 h-64 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">
                    Interactive charts and data visualizations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Core Features Section
function CoreFeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Performance",
      description:
        "Optimized images, code splitting, and edge caching for sub-3s load times.",
    },
    {
      icon: Search,
      title: "SEO Excellence",
      description:
        "Server-rendered pages, meta tags, sitemaps, and structured data out of the box.",
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "Authentication, CSRF protection, input validation, and security headers.",
    },
    {
      icon: Globe,
      title: "Global CDN",
      description:
        "Deployed to edge locations worldwide for fast access everywhere.",
    },
    {
      icon: Gauge,
      title: "Core Web Vitals",
      description:
        "Optimized for LCP, FID, and CLS — the metrics Google uses for ranking.",
    },
    {
      icon: Sparkles,
      title: "Smooth Animations",
      description:
        "Framer Motion animations that enhance UX without hurting performance.",
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            Every Project Includes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Non-negotiables that ship with every web app we build.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100"
            >
              <div className="w-12 h-12 bg-mustard/10 rounded-lg flex items-center justify-center shrink-0">
                <feature.icon className="w-6 h-6 text-mustard" />
              </div>
              <div>
                <h3 className="font-bold text-[#141414] mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Process Section
function ProcessSection() {
  const steps = [
    {
      step: 1,
      title: "Discovery",
      description:
        "Understand your business, users, and goals. Define technical requirements.",
    },
    {
      step: 2,
      title: "Design & Prototype",
      description:
        "Create wireframes and interactive prototypes. Get stakeholder buy-in.",
    },
    {
      step: 3,
      title: "Development",
      description:
        "Build in 2-week sprints with regular demos. Continuous integration.",
    },
    {
      step: 4,
      title: "Launch & Support",
      description:
        "Deploy to production. Monitor performance. Provide ongoing support.",
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-[#141414] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We <span className="text-mustard">Work</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeInUp} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-mustard/30 -translate-x-1/2" />
              )}
              <div className="text-center">
                <div className="w-16 h-16 bg-mustard rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "Why Next.js over other frameworks?",
      answer:
        "Next.js offers the best developer experience and production performance. It provides server-side rendering, static generation, and API routes in one package. Companies like Vercel, Hulu, TikTok, and Nike use it. The framework is backed by Vercel with excellent documentation and community support.",
    },
    {
      question: "Do you build custom backends or use existing APIs?",
      answer:
        "Both. Next.js API routes can handle simple backends, but for complex applications we use Node.js, PostgreSQL, and Prisma. We also integrate with existing APIs, headless CMS platforms (Sanity, Contentful), and third-party services.",
    },
    {
      question: "How do you ensure SEO performance?",
      answer:
        "We implement server-side rendering for important pages, generate proper meta tags, create sitemaps, add structured data (JSON-LD), optimize images with alt text, and ensure fast load times. Our sites consistently score 90+ on Lighthouse.",
    },
    {
      question: "What about hosting and deployment?",
      answer:
        "We typically deploy to Vercel for optimal Next.js performance, but can work with AWS, Google Cloud, or your infrastructure. All deployments include CI/CD pipelines with preview URLs for every pull request.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Yes. We regularly integrate with CRMs, ERPs, payment processors, marketing tools, and custom APIs. We handle authentication, data synchronization, and webhook integrations.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <AnimatedSection className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-[#141414] pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-mustard shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 bg-[#141414]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your{" "}
            <span className="text-mustard">Web Application</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your project. We&apos;ll provide a detailed
            proposal with timeline and investment within 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-mustard text-black px-8 py-4 rounded-lg font-semibold hover:bg-mustard/90 transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function WebDevelopmentPage() {
  return (
    <main>
      <HeroSection />
      <RenderingSection />
      <ComparisonSection />
      <WhatWeBuildSection />
      <TechStackSection />
      <DashboardPreviewSection />
      <CoreFeaturesSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
