"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  ShoppingCart,
  CreditCard,
  Users,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
  ChevronRight,
  Clock,
  DollarSign,
  TrendingUp,
  Package,
  Settings,
  Check,
  Layers,
  MessageSquare,
  Palette,
  Code2,
  FileText,
  UserCheck,
  Building2,
  ChefHat,
  Receipt,
  ClipboardList,
  PieChart,
  Lock,
  Database,
  UserPlus,
  Boxes,
  CalendarCheck,
  BadgeDollarSign,
  FolderKanban,
  CircleDollarSign,
} from "lucide-react";
import {
  Container,
  FadeIn,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui";

// Hero stats
const heroStats = [
  { value: "Multi-Tenant", label: "SaaS Architecture", icon: Building2 },
  { value: "3-in-1", label: "App + Dashboard + Website", icon: Layers },
  { value: "100%", label: "Digital Workflow", icon: Zap },
];

// Problem statistics
const industryStats = [
  { stat: "85%", description: "of caterers still use paper-based bookkeeping" },
  { stat: "$12B+", description: "catering industry market size in 2024" },
  { stat: "60%", description: "of payment disputes due to manual tracking" },
  { stat: "40%", description: "of revenue lost to untracked orders" },
  { stat: "70%", description: "of small caterers lack any digital tools" },
];

// Challenges caterers face
const challenges = [
  {
    icon: ClipboardList,
    title: "Manual Order Tracking",
    description:
      "Paper notebooks and WhatsApp messages make it impossible to track orders reliably",
  },
  {
    icon: Receipt,
    title: "No Professional Invoicing",
    description:
      "Handwritten estimates look unprofessional and lead to pricing disputes",
  },
  {
    icon: DollarSign,
    title: "Payment Chaos",
    description:
      "Partial payments, advances, and balances are tracked in scattered notebooks",
  },
  {
    icon: BarChart3,
    title: "Zero Business Visibility",
    description:
      "No idea which items sell best, which customers owe money, or monthly revenue trends",
  },
];

// Feature categories
const featureCategories = [
  {
    id: "orders",
    label: "Order Management",
    icon: ShoppingCart,
    features: [
      {
        title: "Full Order Lifecycle",
        description:
          "Track orders from estimate to confirmed to completed. Never lose track of where an order stands.",
      },
      {
        title: "Estimate to Invoice",
        description:
          "Create professional estimates, convert to confirmed orders with one tap, and generate branded PDF invoices.",
      },
      {
        title: "Menu & Package Builder",
        description:
          "Build reusable menus and packages with automatic pricing calculation. Customize per-order as needed.",
      },
    ],
  },
  {
    id: "crm",
    label: "Customer CRM",
    icon: Users,
    features: [
      {
        title: "Customer Profiles",
        description:
          "Complete customer database with contact details, order history, and balance tracking in one place.",
      },
      {
        title: "Balance Tracking",
        description:
          "See outstanding balances per customer at a glance. Know exactly who owes what and follow up accordingly.",
      },
      {
        title: "Order History",
        description:
          "Full order history per customer with repeat-order functionality. Build lasting relationships with data.",
      },
    ],
  },
  {
    id: "payments",
    label: "Payments",
    icon: CreditCard,
    features: [
      {
        title: "Multi-Method Recording",
        description:
          "Record payments via cash, bank transfer, UPI, or any custom method. Track partial payments and advances.",
      },
      {
        title: "Payment History",
        description:
          "Complete payment trail per order. See who paid what, when, and how much is still outstanding.",
      },
      {
        title: "Outstanding Reports",
        description:
          "Instant visibility into all outstanding payments across customers. Reduce payment disputes with clear records.",
      },
    ],
  },
  {
    id: "branding",
    label: "Branded Documents",
    icon: FileText,
    features: [
      {
        title: "Branded PDF Generation",
        description:
          "Auto-generate professional estimates and invoices with your business logo, colors, and contact details.",
      },
      {
        title: "Per-Business Customization",
        description:
          "Each tenant gets their own branding on all documents. Looks like your own professional system.",
      },
      {
        title: "Share via WhatsApp",
        description:
          "One-tap sharing of estimates and invoices via WhatsApp, email, or any messaging app.",
      },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: PieChart,
    features: [
      {
        title: "Revenue Trends",
        description:
          "Daily, weekly, and monthly revenue charts. Spot seasonal patterns and growth trends instantly.",
      },
      {
        title: "Top Items & Packages",
        description:
          "Know which menu items and packages generate the most revenue. Double down on what works.",
      },
      {
        title: "Customer Insights",
        description:
          "Identify your best customers by order frequency and revenue. Understand your business at a glance.",
      },
      {
        title: "Outstanding Payments Dashboard",
        description:
          "Real-time view of all pending payments with aging analysis. Never miss a collection.",
      },
    ],
  },
  {
    id: "team",
    label: "Team & Platform",
    icon: Settings,
    features: [
      {
        title: "Role-Based Access",
        description:
          "Owner, manager, and staff roles with appropriate permissions. Control who sees and does what.",
      },
      {
        title: "Multi-Tenant Architecture",
        description:
          "Complete data isolation between businesses. Each caterer sees only their own data, guaranteed by Row-Level Security.",
      },
      {
        title: "Subscription Tiers",
        description:
          "Feature gating and usage limits by plan. Free, Basic, and Pro tiers with clear upgrade paths.",
      },
    ],
  },
];

// How it works steps
const processSteps = [
  {
    step: 1,
    title: "Discovery & Architecture",
    duration: "1-2 weeks",
    description:
      "Deep-dive into catering workflows, multi-tenant data modeling, and Supabase schema design with Row-Level Security.",
    icon: Database,
  },
  {
    step: 2,
    title: "Mobile App Development",
    duration: "4-6 weeks",
    description:
      "Built the React Native + Expo mobile app — order management, menu builder, CRM, payments, and branded PDF generation.",
    icon: Smartphone,
  },
  {
    step: 3,
    title: "Admin Dashboard & Website",
    duration: "2-3 weeks",
    description:
      "Next.js admin dashboard for tenant management, subscription plans, and platform analytics. Marketing website for lead generation.",
    icon: Layers,
  },
  {
    step: 4,
    title: "Testing & Launch",
    duration: "1-2 weeks",
    description:
      "End-to-end testing across tenants, security audit on RLS policies, APK distribution setup, and onboarding first caterers.",
    icon: Zap,
  },
];

// Results metrics
const results = [
  {
    metric: "100%",
    label: "Digital Workflow",
    description: "From paper notebooks to complete digital order management",
  },
  {
    metric: "3x",
    label: "Faster Invoicing",
    description: "Professional branded PDFs generated in seconds, not hours",
  },
  {
    metric: "60%",
    label: "Fewer Payment Disputes",
    description: "Clear records eliminate confusion over balances and payments",
  },
  {
    metric: "0",
    label: "Lost Orders",
    description: "Every order tracked from estimate to completion with full history",
  },
];

// Tech stack
const techStack = [
  {
    category: "Mobile App",
    items: [
      { name: "React Native", icon: "⚛️" },
      { name: "Expo", icon: "📱" },
      { name: "TypeScript", icon: "📘" },
    ],
  },
  {
    category: "Backend & Auth",
    items: [
      { name: "Supabase", icon: "⚡" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Row-Level Security", icon: "🔒" },
    ],
  },
  {
    category: "Dashboard & Web",
    items: [
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "shadcn/ui", icon: "🧩" },
    ],
  },
  {
    category: "Documents & Storage",
    items: [
      { name: "PDF Generation", icon: "📄" },
      { name: "Supabase Storage", icon: "☁️" },
      { name: "WhatsApp Share", icon: "💬" },
    ],
  },
];

// Key learnings
const learnings = [
  {
    title: "Multi-Tenancy Is a Day-1 Decision",
    description:
      "Row-Level Security in Supabase made strict data isolation possible without complex middleware. But it must be designed from the schema up — retrofitting is painful.",
  },
  {
    title: "Paper Workflows Need Empathy, Not Just Digitization",
    description:
      "We studied how caterers actually work — WhatsApp orders, notebook tracking, verbal confirmations — and designed the app to mirror those habits, not replace them abruptly.",
  },
  {
    title: "Branded PDFs Build Trust Instantly",
    description:
      "The moment caterers could send professional invoices with their logo, they felt legitimate. This single feature drove the most word-of-mouth referrals.",
  },
  {
    title: "Offline-First Matters for Field Workers",
    description:
      "Caterers work at event venues with poor connectivity. We designed critical flows to work offline and sync when back online — reliability over features.",
  },
];

export default function CBMSCaseStudy() {
  const [activeFeatureTab, setActiveFeatureTab] = useState("orders");

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#141414] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-orange-500/20 rounded-full blur-[180px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[150px]"
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <Container>
          <div className="relative z-10">
            {/* Breadcrumb */}
            <FadeIn>
              <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/work" className="hover:text-white transition-colors">
                  Work
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-orange-400">CBMS</span>
              </nav>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Content */}
              <div>
                <FadeInUp>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold mb-6">
                    <ChefHat className="w-4 h-4" />
                    SaaS / Catering Industry
                  </span>
                </FadeInUp>

                <FadeInUp delay={0.1}>
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-4 leading-tight">
                    CBMS
                  </h1>
                </FadeInUp>

                <FadeInUp delay={0.15}>
                  <p className="text-xl lg:text-2xl text-orange-400 font-medium mb-6">
                    Catering Business Management System
                  </p>
                </FadeInUp>

                <FadeInUp delay={0.2}>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                    A multi-tenant SaaS platform that replaces paper-based workflows
                    for caterers — from taking orders to tracking payments, all from
                    their phone.{" "}
                    <span className="text-white font-medium">
                      Digitizing an entire industry.
                    </span>
                  </p>
                </FadeInUp>

                {/* Hero Stats Bar */}
                <FadeInUp delay={0.25}>
                  <div className="flex flex-wrap gap-6 mb-8">
                    {heroStats.map((stat) => (
                      <div key={stat.label} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                          <stat.icon className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                          <p className="text-white font-bold text-lg">
                            {stat.value}
                          </p>
                          <p className="text-gray-400 text-xs">{stat.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </FadeInUp>

                {/* CTA Buttons */}
                <FadeInUp delay={0.3}>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-orange-600 transition-all hover:scale-[1.02] shadow-lg shadow-orange-500/20"
                    >
                      Build Your Platform
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="https://calendly.com/rendernext/15min?back=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Schedule a Call
                    </a>
                  </div>
                </FadeInUp>
              </div>

              {/* Right: App Mockup with real screenshot */}
              <FadeInUp delay={0.2}>
                <div className="relative">
                  {/* iPhone Mockup with App Screenshot */}
                  <div className="relative mx-auto w-[280px] lg:w-[320px]">
                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-black/50">
                      {/* Screen */}
                      <div className="bg-[#1a1a1a] rounded-[2.5rem] aspect-[9/19] overflow-hidden relative">
                        <Image
                          src="/work/cbms/images/dashboard-home.jpeg"
                          alt="CBMS Dashboard"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 280px, 320px"
                        />
                      </div>
                      {/* Notch */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full" />
                    </div>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-2 -left-4 lg:-left-8 bg-orange-500 text-white p-3 rounded-xl shadow-lg hidden md:flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    <span className="text-xs font-medium">Invoice Sent!</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-24 -right-4 lg:-right-12 bg-white text-gray-900 p-3 rounded-xl shadow-lg hidden md:flex items-center gap-2"
                  >
                    <CreditCard className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-medium">₹25K Received</span>
                  </motion.div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </Container>
      </section>

      {/* The Problem Section */}
      <section className="bg-[#0a0a0a] py-20 lg:py-28">
        <Container>
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-400 text-sm font-semibold mb-6">
                The Problem
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-6">
                The Catering Industry&apos;s Paper Problem
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Most caterers run their entire business on notebooks, WhatsApp, and memory — losing money and customers every day.
              </p>
            </div>
          </FadeInUp>

          {/* Stats Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {industryStats.map((item, index) => (
              <StaggerItem key={index}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center h-full hover:border-red-500/30 transition-colors">
                  <p className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {item.stat}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Challenges */}
          <FadeInUp>
            <div className="text-center mb-10">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Why Caterers Struggle Without Digital Tools
              </h3>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge) => (
              <StaggerItem key={challenge.title}>
                <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                    <challenge.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h4 className="font-heading font-semibold text-white text-lg mb-2">
                    {challenge.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{challenge.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* The Solution Section */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
                <Zap className="w-4 h-4" />
                Our Solution
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 mb-6">
                One App to Run Your Entire Catering Business
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                CBMS gives every caterer a professional digital toolkit — manage orders,
                generate branded invoices, track payments, and understand your business
                with real analytics. All from your phone.
              </p>
            </div>
          </FadeInUp>

          {/* Value Props */}
          <StaggerContainer className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: FolderKanban, label: "Order Lifecycle", desc: "Estimate → Confirmed → Done" },
              { icon: FileText, label: "Branded Invoices", desc: "Professional PDFs in seconds" },
              { icon: CircleDollarSign, label: "Payment Tracking", desc: "Multi-method recording" },
              { icon: Building2, label: "Multi-Tenant", desc: "Isolated data per business" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h4 className="font-heading font-bold text-gray-900 mb-1">
                    {item.label}
                  </h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* App Screenshots Gallery */}
      <section className="bg-[#0a0a0a] py-20 lg:py-28">
        <Container>
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold mb-6">
                <Smartphone className="w-4 h-4" />
                App Screens
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-6">
                See CBMS in Action
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                From dashboard overview to customer management — a complete catering toolkit.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { src: "/work/cbms/images/dashboard-home.jpeg", label: "Dashboard" },
              { src: "/work/cbms/images/menu.jpeg", label: "Menu Builder" },
              { src: "/work/cbms/images/customer.jpeg", label: "Customer CRM" },
              { src: "/work/cbms/images/reports.jpeg", label: "Reports & Analytics" },
            ].map((screen, index) => (
              <StaggerItem key={index}>
                <div className="relative group">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-1.5 shadow-xl">
                    <div className="rounded-xl overflow-hidden aspect-[9/19] relative">
                      <Image
                        src={screen.src}
                        alt={`CBMS ${screen.label}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                  <p className="text-center text-gray-400 text-xs mt-2 font-medium">
                    {screen.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Features Section - Tabbed */}
      <section className="bg-[#141414] py-20 lg:py-28">
        <Container>
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold mb-6">
                <Layers className="w-4 h-4" />
                Complete Feature Set
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-6">
                Everything a Caterer Needs — In One App
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A comprehensive platform built specifically for catering business workflows.
              </p>
            </div>
          </FadeInUp>

          {/* Feature Tabs */}
          <div className="mb-10 overflow-x-auto pb-2">
            <div className="flex gap-2 min-w-max justify-center">
              {featureCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFeatureTab(category.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                    activeFeatureTab === category.id
                      ? "bg-orange-500 text-white"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Feature Content */}
          <AnimatePresence mode="wait">
            {featureCategories
              .filter((cat) => cat.id === activeFeatureTab)
              .map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-5xl mx-auto"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.features.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-colors"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-4 h-4 text-orange-400" />
                          </div>
                          <h4 className="font-heading font-semibold text-white text-lg">
                            {feature.title}
                          </h4>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed pl-11">
                          {feature.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <Container>
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6">
                <Clock className="w-4 h-4" />
                Development Process
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 mb-6">
                From Concept to Platform
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Building a multi-tenant SaaS from the ground up — mobile app, admin dashboard, and marketing website.
              </p>
            </div>
          </FadeInUp>

          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-orange-500/20 hidden md:block" />

              {processSteps.map((step) => (
                <StaggerItem key={step.step}>
                  <div className="flex gap-6 mb-8 last:mb-0">
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-orange-500">
                        <step.icon className="w-7 h-7 text-orange-600" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-heading font-bold text-gray-900 text-xl">
                          {step.title}
                        </h3>
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="bg-[#141414] py-20 lg:py-28">
        <Container>
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold mb-6">
                <TrendingUp className="w-4 h-4" />
                Results
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-6">
                Transforming Catering Businesses
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Real impact for caterers who moved from paper to CBMS.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {results.map((result) => (
              <StaggerItem key={result.label}>
                <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-2xl p-8 text-center h-full">
                  <p className="text-5xl font-heading font-bold text-green-400 mb-2">
                    {result.metric}
                  </p>
                  <h4 className="font-heading font-semibold text-white text-lg mb-2">
                    {result.label}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {result.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6">
                <Code2 className="w-4 h-4" />
                Technology
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 mb-6">
                Built for Security & Scale
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Multi-tenant architecture with strict data isolation and modern tooling.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {techStack.map((category) => (
              <StaggerItem key={category.category}>
                <div className="bg-gray-50 rounded-2xl p-6 h-full">
                  <h4 className="font-heading font-bold text-gray-900 mb-4 text-center">
                    {category.category}
                  </h4>
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm"
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-medium text-gray-900">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Learnings Section */}
      <section className="bg-[#141414] py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInUp>
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm font-semibold mb-6">
                  Insights
                </span>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-6">
                  What We Learned Building CBMS
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Building a SaaS for an unorganized industry taught us that
                  technology adoption isn&apos;t about features — it&apos;s about
                  understanding the people and respecting their existing workflows.
                </p>
              </div>
            </FadeInUp>

            <StaggerContainer className="space-y-4">
              {learnings.map((learning) => (
                <StaggerItem key={learning.title}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-colors">
                    <h3 className="font-heading font-semibold text-white text-lg mb-2">
                      {learning.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {learning.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-orange-500/10 via-white to-orange-500/5 py-20 lg:py-28">
        <Container>
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 mb-6">
                Ready to Build Your Industry SaaS?
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We specialize in building multi-tenant platforms that digitize
                traditional industries. Let&apos;s bring your industry into the
                digital age.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/estimate"
                  className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all hover:scale-[1.02] shadow-lg shadow-orange-500/20"
                >
                  Get a Free Estimate
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://calendly.com/rendernext/15min?back=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  Schedule a Call
                </a>
              </div>
            </div>
          </FadeInUp>
        </Container>
      </section>
    </main>
  );
}
