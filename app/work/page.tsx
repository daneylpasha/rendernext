"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Star,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Smartphone,
  ShoppingCart,
  Activity,
  ClipboardList,
  Heart,
  GraduationCap,
  Building2,
  Plane,
  Utensils,
  Sparkles,
  TrendingUp,
  Zap,
  Target,
  Cpu,
  Gamepad2,
  Truck,
  HandHeart,
  CreditCard,
} from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
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
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative bg-[#141414] text-white overflow-hidden min-h-[50vh] flex items-center">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-mustard/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mustard/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[20%] w-16 h-16 bg-mustard/20 rounded-full blur-sm"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-32 left-[15%] w-10 h-10 bg-mustard/15 rounded-full blur-sm"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 left-[30%] w-6 h-6 bg-mustard/25 rounded-full"
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-10">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm text-gray-400 mb-12"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Work</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl lg:text-7xl font-bold font-heading mb-6">
            Our Work
          </h1>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-mustard to-orange-500 rounded-full mb-8"
          />

          <p className="text-xl lg:text-2xl text-gray-400 max-w-2xl">
            Crafting digital products that make an impact
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Featured Project Section (Cartaisy)
function FeaturedProjectSection() {
  const features = [
    { icon: Smartphone, text: "Native iOS & Android" },
    { icon: TrendingUp, text: "3x Higher Conversion" },
    { icon: Sparkles, text: "Push Notifications" },
    { icon: Target, text: "Abandoned Cart Recovery" },
  ];

  const techStack = [
    "React Native",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Stripe",
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#1a1a1a] to-[#141414] py-20 lg:py-28 overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-mustard/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <motion.div variants={fadeInLeft}>
              {/* Featured badge */}
              <div className="inline-flex items-center gap-2 bg-mustard text-black rounded-full px-4 py-2 mb-4">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-bold">Our Flagship SaaS</span>
              </div>

              {/* Eyebrow */}
              <p className="text-mustard text-sm font-medium tracking-widest uppercase mb-4">
                Built by RenderNext
              </p>

              {/* Title */}
              <h2 className="text-5xl lg:text-6xl font-bold font-heading text-white mb-4">
                Cartaisy
              </h2>

              {/* Tagline */}
              <p className="text-xl text-mustard mb-4">
                Mobile Apps for Shopify Stores
              </p>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                Cartaisy is our own SaaS product — proof that we don&apos;t just
                build apps for clients, we build them for ourselves. It transforms
                Shopify stores into native iOS & Android apps with push notifications,
                Apple Pay, and abandoned cart recovery. Starting at just $49/month.
              </p>

              {/* Divider */}
              <div className="w-20 h-1 bg-mustard rounded-full mb-8" />

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-mustard/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-mustard" />
                    </div>
                    <span className="text-white text-sm font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 text-sm font-medium rounded-full hover:border-mustard/50 hover:shadow-[0_0_20px_rgba(245,166,35,0.15)] transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Status & Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                {/* Live Status */}
                <span className="inline-flex items-center gap-2 text-sm font-medium text-green-400">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
                  </span>
                  Live Product
                </span>

                <div className="flex gap-3">
                  <a
                    href="https://cartaisy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-mustard text-black px-6 py-3 rounded-lg font-semibold hover:bg-mustard/90 transition-colors"
                  >
                    Visit Cartaisy
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link
                    href="/work/cartaisy"
                    className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Case Study
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right: Visual */}
            <motion.div variants={fadeInRight} className="relative">
              {/* Glow behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-mustard/20 rounded-full blur-[80px]" />

              {/* Phone mockup container */}
              <div className="relative flex items-center justify-center py-12">
                {/* Phone frame */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  {/* Phone outline */}
                  <div className="w-[260px] h-[520px] rounded-[40px] border-4 border-white/20 bg-gradient-to-br from-gray-800 to-gray-900 p-3 shadow-2xl">
                    {/* Screen */}
                    <div className="w-full h-full rounded-[28px] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex flex-col overflow-hidden">
                      {/* App content mockup */}
                      <div className="p-4 flex-1">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p className="text-white/60 text-[10px]">Welcome back</p>
                            <p className="text-white font-semibold text-sm">Fashion Store</p>
                          </div>
                          <div className="w-8 h-8 bg-mustard rounded-full flex items-center justify-center">
                            <ShoppingCart className="w-4 h-4 text-black" />
                          </div>
                        </div>

                        {/* Featured banner */}
                        <div className="bg-gradient-to-r from-mustard/30 to-mustard/10 rounded-xl p-3 mb-4">
                          <p className="text-mustard text-[10px] font-semibold">NEW ARRIVALS</p>
                          <p className="text-white text-xs font-bold">Summer Collection</p>
                        </div>

                        {/* Product grid */}
                        <div className="grid grid-cols-2 gap-2">
                          {[1,2,3,4].map((i) => (
                            <div key={i} className="bg-white/5 rounded-lg p-2">
                              <div className="bg-white/10 rounded-md aspect-square mb-1" />
                              <div className="bg-white/20 h-2 rounded w-3/4 mb-1" />
                              <div className="bg-mustard/60 h-2 rounded w-1/2" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
                  </div>
                </motion.div>

                {/* Floating UI elements */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-medium">Push Sent!</p>
                      <p className="text-green-400 text-xs">90% open rate</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-16 -left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-mustard/20 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-mustard" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-medium">Apple Pay</p>
                      <p className="text-gray-400 text-xs">10s checkout</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/2 -right-12 bg-mustard rounded-full p-2 shadow-lg"
                >
                  <Zap className="w-4 h-4 text-black" />
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 right-8 w-4 h-4 bg-mustard/40 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Project Showcase Grid Section
function ProjectsGridSection() {
  const projects = [
    {
      category: "Health & Fitness",
      icon: Activity,
      name: "FitPulse",
      description: "Fitness tracking with personalized workout plans",
      tech: ["React Native", "Firebase", "HealthKit"],
      gradient: "from-teal-500 to-emerald-600",
    },
    {
      category: "E-Commerce",
      icon: ShoppingCart,
      name: "OrderFlow",
      description: "Restaurant ordering with real-time tracking",
      tech: ["Next.js", "React Native", "Stripe"],
      gradient: "from-violet-500 to-purple-600",
    },
    {
      category: "Productivity",
      icon: ClipboardList,
      name: "TaskHub",
      description: "Team collaboration and task management",
      tech: ["React Native", "Supabase", "WebSockets"],
      gradient: "from-blue-500 to-cyan-600",
    },
  ];

  return (
    <AnimatedSection className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-gray-900 mb-4">
            More Projects
          </h2>
          <div className="w-16 h-1 bg-mustard rounded-full mx-auto mb-4" />
          <p className="text-gray-500 max-w-lg mx-auto">
            Showcase applications demonstrating our expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
              />

              {/* Decorative elements */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-24 h-24 bg-white/10 rounded-2xl rotate-12 blur-sm" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-16 h-16 bg-white/20 rounded-xl" />
              </div>

              {/* Showcase badge */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/30">
                Showcase
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                {/* Category */}
                <div className="inline-flex items-center gap-1.5 border border-mustard/50 text-mustard text-xs font-medium rounded-full px-3 py-1 mb-3 w-fit backdrop-blur-sm bg-black/20">
                  <project.icon className="w-3 h-3" />
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-heading text-white mb-2">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/10 backdrop-blur-sm text-white/80 text-xs rounded-md border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View button - reveals on hover */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-mustard font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Capabilities Section
function CapabilitiesSection() {
  const industries = [
    { icon: ShoppingCart, name: "E-Commerce" },
    { icon: Heart, name: "Healthcare" },
    { icon: CreditCard, name: "FinTech" },
    { icon: GraduationCap, name: "Education" },
    { icon: Building2, name: "Real Estate" },
    { icon: Plane, name: "Travel" },
    { icon: Utensils, name: "Food & Dining" },
    { icon: Smartphone, name: "Social" },
    { icon: Cpu, name: "SaaS" },
    { icon: Gamepad2, name: "Entertainment" },
    { icon: Truck, name: "Logistics" },
    { icon: HandHeart, name: "Non-Profit" },
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#141414] relative overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <h2 className="text-3xl lg:text-4xl font-bold font-heading text-white mb-4">
                Built for Every Industry
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                From startups to enterprises, we deliver across sectors with
                tailored solutions that fit your unique needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-mustard font-semibold hover:gap-3 transition-all"
              >
                Discuss Your Industry
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right */}
            <motion.div variants={fadeInUp} className="lg:col-span-3">
              <div className="flex flex-wrap gap-3">
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 hover:border-mustard/50 hover:bg-mustard/5 transition-all duration-300 cursor-default"
                  >
                    <industry.icon className="w-4 h-4 text-mustard" />
                    <span className="text-gray-300 font-medium text-sm">
                      {industry.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 lg:py-24 bg-[#141414] relative">
      {/* Separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-mustard to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-mustard/5 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
            Ready to Build Your
            <br />
            <span className="text-mustard">Next Project?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Let&apos;s create something amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-mustard text-black px-8 py-4 rounded-lg font-semibold hover:bg-mustard/90 transition-colors text-lg"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg"
            >
              Schedule a Call
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function WorkPage() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjectSection />
      <ProjectsGridSection />
      <CapabilitiesSection />
      <CTASection />
    </main>
  );
}
