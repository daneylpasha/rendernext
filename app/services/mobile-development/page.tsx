"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Smartphone,
  ShoppingCart,
  Wallet,
  Heart,
  Clock,
  Building2,
  Bell,
  WifiOff,
  RefreshCw,
  CreditCard,
  Users,
  MapPin,
  Camera,
  DollarSign,
  Link2,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Apple,
  Play,
  Layers,
  Database,
  Cloud,
  Zap,
  ExternalLink,
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

// Hero Section
function HeroSection() {
  return (
    <section className="relative bg-[#141414] text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated background code snippets */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 text-xs font-mono text-mustard animate-pulse">
          {`import { useState } from 'react';`}
        </div>
        <div className="absolute top-40 right-20 text-xs font-mono text-mustard/70 animate-pulse delay-100">
          {`const [data, setData] = useState([]);`}
        </div>
        <div className="absolute top-60 left-1/4 text-xs font-mono text-mustard/50 animate-pulse delay-200">
          {`<TouchableOpacity onPress={handlePress}>`}
        </div>
        <div className="absolute bottom-40 right-1/3 text-xs font-mono text-mustard/60 animate-pulse delay-300">
          {`useEffect(() => { fetchData(); }, []);`}
        </div>
        <div className="absolute bottom-60 left-20 text-xs font-mono text-mustard/40 animate-pulse delay-500">
          {`export default function App() {`}
        </div>
        <div className="absolute top-1/3 right-10 text-xs font-mono text-mustard/50 animate-pulse delay-700">
          {`navigation.navigate('Home');`}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          {/* Core expertise badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-mustard/20 border border-mustard/30 rounded-full px-4 py-2 mb-8"
          >
            <Zap className="w-4 h-4 text-mustard" />
            <span className="text-mustard text-sm font-medium">Our Core Expertise</span>
          </motion.div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-mustard">React Native</span> Experts
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            One codebase. Two platforms. Native performance.
          </p>

          <p className="text-gray-400 text-lg mb-12 max-w-2xl">
            We specialize exclusively in React Native development, delivering iOS and Android apps
            that feel truly native while cutting your development time and costs by 40%.
          </p>

          {/* App store badges */}
          <div className="flex flex-wrap items-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Apple className="w-6 h-6" />
              <div className="text-sm">
                <div className="text-gray-400 text-xs">Deployed to</div>
                <div className="font-medium">App Store</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Play className="w-6 h-6" />
              <div className="text-sm">
                <div className="text-gray-400 text-xs">Deployed to</div>
                <div className="font-medium">Google Play</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-mustard text-black px-8 py-4 rounded-lg font-semibold hover:bg-mustard/90 transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#process"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              See Our Process
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Phone mockup on right side for larger screens */}
      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative"
        >
          <div className="w-72 h-[580px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] border-4 border-gray-700 p-3 shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-mustard/20 to-mustard/5 rounded-[2.5rem] flex items-center justify-center">
              <div className="text-center px-6">
                <Smartphone className="w-16 h-16 text-mustard mx-auto mb-4" />
                <p className="text-white/70 text-sm">Your app here</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Why React Native Section
function WhyReactNativeSection() {
  const comparisonData = [
    {
      feature: "Codebase",
      native: "Separate iOS & Android",
      reactNative: "Single codebase",
      flutter: "Single codebase",
      rnWinner: true,
    },
    {
      feature: "Development Cost",
      native: "Higher (2x teams)",
      reactNative: "40% lower",
      flutter: "Similar to RN",
      rnWinner: true,
    },
    {
      feature: "Time to Market",
      native: "Longer",
      reactNative: "30-40% faster",
      flutter: "Fast",
      rnWinner: true,
    },
    {
      feature: "Performance",
      native: "Best possible",
      reactNative: "Near-native",
      flutter: "Near-native",
      rnWinner: false,
    },
    {
      feature: "UI/UX Feel",
      native: "Platform-specific",
      reactNative: "True native feel",
      flutter: "Custom rendering",
      rnWinner: true,
    },
    {
      feature: "Developer Pool",
      native: "Specialized",
      reactNative: "Large (JS/React)",
      flutter: "Growing (Dart)",
      rnWinner: true,
    },
    {
      feature: "Used By",
      native: "Apple, Google apps",
      reactNative: "Meta, Shopify, Discord",
      flutter: "Google, BMW",
      rnWinner: false,
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            Why We Chose <span className="text-mustard">React Native</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            After building apps with native iOS, Android, and cross-platform tools,
            we believe React Native offers the best balance for most projects.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div variants={fadeInUp} className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-4 px-4 text-left text-gray-500 font-medium">Feature</th>
                <th className="py-4 px-4 text-center text-gray-500 font-medium">Native (Swift/Kotlin)</th>
                <th className="py-4 px-4 text-center bg-mustard/10 rounded-t-lg">
                  <span className="text-[#141414] font-bold">React Native</span>
                  <span className="block text-mustard text-sm">Our Choice</span>
                </th>
                <th className="py-4 px-4 text-center text-gray-500 font-medium">Flutter</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium text-[#141414]">{row.feature}</td>
                  <td className="py-4 px-4 text-center text-gray-600">{row.native}</td>
                  <td className="py-4 px-4 text-center bg-mustard/5">
                    <span className={`inline-flex items-center gap-1 ${row.rnWinner ? "text-[#141414] font-semibold" : "text-gray-600"}`}>
                      {row.rnWinner && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                      {row.reactNative}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center text-gray-600">{row.flutter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Verdict */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 bg-[#141414] rounded-2xl p-8 text-center"
        >
          <p className="text-xl text-white mb-2">Our Verdict</p>
          <p className="text-2xl md:text-3xl font-bold text-mustard">
            React Native gives you the best balance of speed, cost, and native quality.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// What We Build Section
function WhatWeBuildSection() {
  const appTypes = [
    {
      icon: Users,
      title: "Consumer Apps",
      description: "Social, lifestyle, fitness, entertainment",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce & Marketplace",
      description: "Online stores, multi-vendor platforms",
    },
    {
      icon: Wallet,
      title: "FinTech & Banking",
      description: "Payment apps, trading, crypto wallets",
    },
    {
      icon: Heart,
      title: "Healthcare & Wellness",
      description: "Telemedicine, patient portals, fitness",
    },
    {
      icon: Clock,
      title: "On-Demand Services",
      description: "Delivery, ride-sharing, bookings",
    },
    {
      icon: Building2,
      title: "Enterprise & B2B",
      description: "Internal tools, field service, CRM",
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            What We Build
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From consumer apps to enterprise solutions, we have experience across industries.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {appTypes.map((type, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl p-8 border border-gray-100 hover:border-mustard/50 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-mustard/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-mustard/20 transition-colors">
                <type.icon className="w-7 h-7 text-mustard" />
              </div>
              <h3 className="text-xl font-bold text-[#141414] mb-2">{type.title}</h3>
              <p className="text-gray-600">{type.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Tech Stack Section
function TechStackSection() {
  const stackLayers = [
    {
      label: "Frontend",
      color: "bg-mustard",
      techs: ["React Native", "Expo", "TypeScript"],
    },
    {
      label: "State Management",
      color: "bg-orange-500",
      techs: ["Redux", "Zustand", "React Query"],
    },
    {
      label: "Backend",
      color: "bg-blue-500",
      techs: ["Node.js", "Firebase", "Supabase"],
    },
    {
      label: "APIs",
      color: "bg-purple-500",
      techs: ["REST", "GraphQL", "WebSockets"],
    },
    {
      label: "CI/CD",
      color: "bg-green-500",
      techs: ["EAS Build", "Fastlane", "GitHub Actions"],
    },
    {
      label: "Analytics",
      color: "bg-pink-500",
      techs: ["Mixpanel", "Amplitude", "Firebase"],
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-[#141414] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Mobile <span className="text-mustard">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Battle-tested technologies that power millions of app sessions.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {stackLayers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className={`w-36 py-3 ${layer.color} rounded-lg text-center text-sm font-bold text-white shrink-0`}>
                  {layer.label}
                </div>
                <div className="flex-1 flex flex-wrap gap-2">
                  {layer.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connection lines visual */}
          <div className="mt-12 flex justify-center gap-8 text-gray-500">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5" />
              <span className="text-sm">Modular Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              <span className="text-sm">Scalable Infrastructure</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="w-5 h-5" />
              <span className="text-sm">Cloud-Native</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// App Features Section
function AppFeaturesSection() {
  const features = [
    { icon: Bell, title: "Push Notifications", tech: "OneSignal, FCM" },
    { icon: WifiOff, title: "Offline-First", tech: "AsyncStorage, WatermelonDB" },
    { icon: RefreshCw, title: "Real-time Sync", tech: "WebSockets, Firebase" },
    { icon: CreditCard, title: "In-App Purchases", tech: "RevenueCat, IAP" },
    { icon: Users, title: "Social Auth", tech: "Google, Apple, Facebook" },
    { icon: MapPin, title: "Maps & Location", tech: "Google Maps, Mapbox" },
    { icon: Camera, title: "Camera & Media", tech: "Vision Camera, Gallery" },
    { icon: DollarSign, title: "Payments", tech: "Stripe, PayPal" },
    { icon: Link2, title: "Deep Linking", tech: "Universal Links, App Links" },
  ];

  return (
    <AnimatedSection className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            Features We Build
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every mobile feature you need, implemented with best practices.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 flex items-start gap-4 border border-gray-200 hover:border-mustard transition-colors"
            >
              <div className="w-12 h-12 bg-[#141414] rounded-lg flex items-center justify-center shrink-0">
                <feature.icon className="w-6 h-6 text-mustard" />
              </div>
              <div>
                <h3 className="font-bold text-[#141414] mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.tech}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Example Project Section - Cartaisy
function ExampleProjectSection() {
  return (
    <AnimatedSection className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <span className="text-mustard font-medium text-sm uppercase tracking-wider">Case Study</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mt-2 mb-6">
            Cartaisy — Built with React Native + AI
          </h2>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-br from-[#141414] to-gray-900 rounded-3xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Left: Description */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">AI-Powered Shopping Assistant</h3>
              <p className="text-gray-300 mb-8">
                Cartaisy is our own product — a smart shopping list app that uses AI to predict
                what you need, organize your lists by store aisle, and help you never forget an item again.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-mustard">Key Features Built:</h4>
                <ul className="space-y-2">
                  {[
                    "AI-powered item suggestions based on shopping history",
                    "Smart categorization and aisle organization",
                    "Family sharing with real-time sync",
                    "Offline-first architecture",
                    "Cross-platform (iOS & Android)",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-mustard shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {["React Native", "Expo", "Firebase", "OpenAI", "TypeScript"].map((tech) => (
                  <span key={tech} className="bg-white/10 rounded-full px-3 py-1 text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href="https://cartaisy.com"
                target="_blank"
                className="inline-flex items-center gap-2 bg-mustard text-black px-6 py-3 rounded-lg font-semibold hover:bg-mustard/90 transition-colors"
              >
                View Live App
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: App mockup placeholder */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] border-4 border-gray-700 p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] flex items-center justify-center">
                    <div className="text-center px-6">
                      <div className="w-20 h-20 bg-mustard/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <ShoppingCart className="w-10 h-10 text-mustard" />
                      </div>
                      <p className="text-[#141414] font-bold text-lg">Cartaisy</p>
                      <p className="text-gray-500 text-sm mt-1">Smart Shopping Lists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Process Section
function ProcessSection() {
  const steps = [
    {
      week: "Week 1-2",
      title: "Discovery & Planning",
      description: "Requirements gathering, user stories, technical architecture, and project setup.",
    },
    {
      week: "Week 2-4",
      title: "UI/UX Design & Prototyping",
      description: "Wireframes, visual design, and interactive prototypes you can test on real devices.",
    },
    {
      week: "Week 4-10",
      title: "Development Sprints",
      description: "Iterative development with weekly demos. Frontend, backend, and integrations built in parallel.",
    },
    {
      week: "Ongoing",
      title: "Testing & QA",
      description: "Continuous testing on real devices. Manual and automated testing throughout development.",
    },
    {
      week: "Week 10-12",
      title: "App Store Submission",
      description: "App Store & Google Play submission, review handling, and successful launch.",
    },
  ];

  return (
    <AnimatedSection id="process" className="py-24 bg-[#141414] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-mustard">Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A proven approach refined over dozens of successful app launches.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-mustard/30 hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`bg-gray-800/50 rounded-xl p-6 border border-gray-700 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}>
                    <span className="text-mustard font-mono text-sm">{step.week}</span>
                    <h3 className="text-xl font-bold mt-2 mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 bg-mustard rounded-full ring-4 ring-[#141414]" />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Pricing Section
function PricingSection() {
  const tiers = [
    {
      name: "MVP Launch",
      price: "$15K - $25K",
      timeline: "8-10 weeks",
      description: "Perfect for validating your idea with real users.",
      features: [
        "Core features only (no bloat)",
        "iOS & Android deployment",
        "Basic analytics integration",
        "30 days post-launch support",
        "App Store submission",
      ],
      cta: "Start MVP",
      highlighted: false,
    },
    {
      name: "Standard App",
      price: "$25K - $50K",
      timeline: "10-14 weeks",
      description: "Full-featured app for growing businesses.",
      features: [
        "Everything in MVP, plus:",
        "Advanced features & integrations",
        "Custom backend development",
        "Admin dashboard",
        "Push notifications & analytics",
        "60 days post-launch support",
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$50K+",
      timeline: "Custom timeline",
      description: "Complex requirements and integrations.",
      features: [
        "Everything in Standard, plus:",
        "Complex integrations",
        "Advanced security features",
        "Dedicated project manager",
        "Extended maintenance",
        "SLA guarantees",
      ],
      cta: "Contact Us",
      highlighted: false,
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            Investment Ranges
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing based on scope and complexity. Every project is custom-quoted.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`rounded-2xl p-8 ${
                tier.highlighted
                  ? "bg-[#141414] text-white ring-2 ring-mustard scale-105"
                  : "bg-gray-50 text-[#141414] border border-gray-200"
              }`}
            >
              {tier.highlighted && (
                <span className="inline-block bg-mustard text-black text-xs font-bold px-3 py-1 rounded-full mb-4">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-2">
                <span className="text-3xl font-bold text-mustard">{tier.price}</span>
              </div>
              <p className={`text-sm mb-6 ${tier.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                {tier.timeline}
              </p>
              <p className={`mb-6 ${tier.highlighted ? "text-gray-300" : "text-gray-600"}`}>
                {tier.description}
              </p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${
                      tier.highlighted ? "text-mustard" : "text-green-500"
                    }`} />
                    <span className={tier.highlighted ? "text-gray-300" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                  tier.highlighted
                    ? "bg-mustard text-black hover:bg-mustard/90"
                    : "bg-[#141414] text-white hover:bg-gray-800"
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.p variants={fadeInUp} className="text-center text-gray-500 mt-8">
          All prices are estimates. Contact us for a detailed quote based on your specific requirements.
        </motion.p>
      </div>
    </AnimatedSection>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "Why React Native instead of native iOS/Android development?",
      answer:
        "React Native allows us to build truly native apps with a single codebase, reducing development time by 30-40% and maintenance costs significantly. The apps are indistinguishable from native in terms of performance and user experience. Major companies like Meta, Shopify, Discord, and Coinbase use React Native for their flagship apps.",
    },
    {
      question: "Will my app feel native or like a web app?",
      answer:
        "React Native apps are truly native — they use the same fundamental building blocks as apps built with Swift or Kotlin. Users cannot tell the difference. We pay special attention to platform-specific patterns, animations, and interactions to ensure your app feels at home on both iOS and Android.",
    },
    {
      question: "How long does it take to build a mobile app?",
      answer:
        "A typical MVP takes 8-12 weeks from kickoff to app store submission. More complex apps with advanced features may take 14-20 weeks. We'll provide a detailed timeline after our discovery phase based on your specific requirements.",
    },
    {
      question: "Do you handle app store submission?",
      answer:
        "Yes, we handle the entire submission process for both Apple App Store and Google Play Store, including preparing assets, writing descriptions, configuring in-app purchases, and navigating the review process. We've successfully launched dozens of apps.",
    },
    {
      question: "What about ongoing maintenance after launch?",
      answer:
        "We offer maintenance packages that include bug fixes, OS updates, performance monitoring, and feature additions. Most clients continue working with us after launch. Apps require ongoing care to keep up with iOS/Android updates and user expectations.",
    },
    {
      question: "Can you work with our existing backend?",
      answer:
        "Absolutely. We regularly integrate with existing REST APIs, GraphQL endpoints, Firebase, Supabase, and custom backends. If you need a new backend, we can build that too using Node.js, Firebase, or Supabase.",
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
                <span className="font-semibold text-[#141414] pr-4">{faq.question}</span>
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
            Ready to Build Your <span className="text-mustard">Mobile App</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your project. We&apos;ll provide a detailed proposal with timeline and investment within 48 hours.
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
export default function MobileDevelopmentPage() {
  return (
    <main>
      <HeroSection />
      <WhyReactNativeSection />
      <WhatWeBuildSection />
      <TechStackSection />
      <AppFeaturesSection />
      <ExampleProjectSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
