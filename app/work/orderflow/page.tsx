"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  ShoppingCart,
  Bell,
  CreditCard,
  Users,
  BarChart3,
  Shield,
  Globe,
  Zap,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Clock,
  DollarSign,
  TrendingUp,
  MapPin,
  Package,
  Search,
  Heart,
  Settings,
  Check,
  ChevronDown,
  Layers,
  Target,
  MessageSquare,
  Store,
  Palette,
  Truck,
  Star,
  Gift,
  Timer,
  Utensils,
  Receipt,
  Percent,
  Code2,
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
  { value: "40%", label: "Faster Orders", icon: Timer },
  { value: "3x", label: "Repeat Customers", icon: Users },
  { value: "25%", label: "Higher AOV", icon: TrendingUp },
];

// Problem statistics
const industryStats = [
  { stat: "67%", description: "of diners prefer ordering via mobile apps" },
  { stat: "$1T+", description: "global food delivery market by 2027" },
  { stat: "30%", description: "of restaurants lack a digital ordering system" },
  { stat: "45%", description: "of orders abandoned due to slow checkout" },
  { stat: "80%", description: "of revenue comes from repeat customers" },
];

// Challenges restaurants face
const challenges = [
  {
    icon: DollarSign,
    title: "High Commission Fees",
    description: "Third-party apps charge 15-30% per order, eating into margins",
  },
  {
    icon: Users,
    title: "No Customer Data",
    description: "Delivery apps own the customer relationship, not you",
  },
  {
    icon: Clock,
    title: "Order Delays",
    description: "Manual order processing leads to mistakes and slow service",
  },
  {
    icon: Heart,
    title: "No Loyalty Program",
    description: "Missing tools to reward repeat customers and build retention",
  },
];

// Feature categories
const featureCategories = [
  {
    id: "ordering",
    label: "Smart Ordering",
    icon: ShoppingCart,
    features: [
      {
        title: "Visual Menu Builder",
        description:
          "Beautiful menu displays with high-quality images, categories, modifiers, and special instructions support.",
      },
      {
        title: "Real-Time Availability",
        description:
          "Automatic 86'd items, daily specials, and inventory sync. Never oversell again.",
      },
      {
        title: "Group Ordering",
        description:
          "Let parties order together with split checks, individual customizations, and combined delivery.",
      },
    ],
  },
  {
    id: "tracking",
    label: "Live Tracking",
    icon: MapPin,
    features: [
      {
        title: "Order Status Updates",
        description:
          "Real-time notifications: order received, preparing, ready, out for delivery, delivered.",
      },
      {
        title: "Driver GPS Tracking",
        description:
          "Live map showing driver location, ETA updates, and delivery confirmation photos.",
      },
      {
        title: "Kitchen Display System",
        description:
          "Digital order tickets for kitchen staff with timing, priority, and completion tracking.",
      },
    ],
  },
  {
    id: "payments",
    label: "Payments",
    icon: CreditCard,
    features: [
      {
        title: "Multiple Payment Options",
        description:
          "Credit cards, Apple Pay, Google Pay, cash on delivery, and saved payment methods.",
      },
      {
        title: "Split Payments",
        description:
          "Allow groups to split bills by item, percentage, or equal amounts with individual tips.",
      },
      {
        title: "Secure Checkout",
        description:
          "PCI-compliant via Stripe. Tokenized transactions. Fraud protection. Refund management.",
      },
      {
        title: "Tipping Integration",
        description:
          "Suggested tip amounts, custom tips, and tip distribution to drivers and staff.",
      },
    ],
  },
  {
    id: "loyalty",
    label: "Loyalty & Rewards",
    icon: Gift,
    features: [
      {
        title: "Points-Based Rewards",
        description:
          "Earn points on every order. Redeem for free items, discounts, or exclusive perks.",
      },
      {
        title: "Tiered Membership",
        description:
          "Bronze, Silver, Gold tiers with increasing benefits and exclusive early access to promotions.",
      },
      {
        title: "Referral Program",
        description:
          "Reward customers for bringing friends. Both referrer and referee get bonuses.",
      },
      {
        title: "Birthday Rewards",
        description:
          "Automatic birthday detection and special offers to drive celebratory orders.",
      },
    ],
  },
  {
    id: "analytics",
    label: "Analytics Dashboard",
    icon: BarChart3,
    features: [
      {
        title: "Sales Analytics",
        description:
          "Daily, weekly, monthly revenue. Peak hours. Best-selling items. Average order value trends.",
      },
      {
        title: "Customer Insights",
        description:
          "Order frequency, lifetime value, preferences, and churn risk indicators.",
      },
      {
        title: "Operational Metrics",
        description:
          "Average prep time, delivery time, order accuracy, and customer satisfaction scores.",
      },
      {
        title: "Marketing ROI",
        description:
          "Track campaign performance, promo code usage, and loyalty program effectiveness.",
      },
    ],
  },
  {
    id: "management",
    label: "Restaurant Tools",
    icon: Settings,
    features: [
      {
        title: "Multi-Location Support",
        description:
          "Manage multiple restaurant locations from a single dashboard with location-specific settings.",
      },
      {
        title: "Staff Management",
        description:
          "Role-based access for managers, kitchen staff, and delivery drivers.",
      },
      {
        title: "Scheduling & Hours",
        description:
          "Set operating hours, holiday schedules, and automatic order cutoff times.",
      },
    ],
  },
];

// How it works steps
const processSteps = [
  {
    step: 1,
    title: "Menu Setup",
    duration: "1-2 days",
    description:
      "Upload your menu with photos, descriptions, pricing, and modifiers. We help optimize for mobile.",
    icon: Utensils,
  },
  {
    step: 2,
    title: "App Customization",
    duration: "2-3 days",
    description:
      "Your branding, colors, and logo throughout. Configure delivery zones, fees, and payment options.",
    icon: Palette,
  },
  {
    step: 3,
    title: "Integration & Testing",
    duration: "3-5 days",
    description:
      "Connect with your POS system, set up Stripe payments, test ordering flow end-to-end.",
    icon: Layers,
  },
  {
    step: 4,
    title: "Launch & Train",
    duration: "1-2 days",
    description:
      "App goes live on iOS and Android. Staff training on dashboard, kitchen display, and order management.",
    icon: Zap,
  },
];

// Results metrics
const results = [
  {
    metric: "40%",
    label: "Faster Order Processing",
    description: "From order to kitchen in seconds, not minutes",
  },
  {
    metric: "3x",
    label: "More Repeat Customers",
    description: "Loyalty program drives consistent return visits",
  },
  {
    metric: "25%",
    label: "Higher Average Order",
    description: "Smart upsells and combo suggestions increase basket size",
  },
  {
    metric: "0%",
    label: "Third-Party Fees",
    description: "Keep 100% of your revenue on direct orders",
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
    category: "Backend",
    items: [
      { name: "Next.js API", icon: "▲" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Redis", icon: "🔴" },
    ],
  },
  {
    category: "Real-Time",
    items: [
      { name: "WebSockets", icon: "🔌" },
      { name: "Google Maps", icon: "🗺️" },
      { name: "Push Notifications", icon: "🔔" },
    ],
  },
  {
    category: "Payments",
    items: [
      { name: "Stripe", icon: "💳" },
      { name: "Apple Pay", icon: "🍎" },
      { name: "Google Pay", icon: "🤖" },
    ],
  },
];

// Key learnings
const learnings = [
  {
    title: "Speed Is Everything in Food Ordering",
    description:
      "Every second of delay costs conversions. We optimized every tap, every screen, every loading state to get customers from app open to order placed in under 60 seconds.",
  },
  {
    title: "Real-Time Updates Build Trust",
    description:
      "Customers who can track their order every step of the way are 3x more likely to order again. Transparency reduces support calls by 70%.",
  },
  {
    title: "Loyalty Programs Need to Be Simple",
    description:
      "Complex point systems confuse customers. 'Order 10, get 1 free' outperforms '1 point per dollar spent' every time.",
  },
  {
    title: "Kitchen Integration Is Critical",
    description:
      "The fanciest customer app means nothing if kitchen staff can't efficiently process orders. We invested heavily in the kitchen display system.",
  },
];

export default function OrderFlowCaseStudy() {
  const [activeFeatureTab, setActiveFeatureTab] = useState("ordering");

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#141414] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-violet-500/20 rounded-full blur-[180px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]"
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
                <span className="text-violet-400">OrderFlow</span>
              </nav>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Content */}
              <div>
                <FadeInUp>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 text-violet-400 text-sm font-semibold mb-6">
                    <Utensils className="w-4 h-4" />
                    E-Commerce / Food & Beverage
                  </span>
                </FadeInUp>

                <FadeInUp delay={0.1}>
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-4 leading-tight">
                    OrderFlow
                  </h1>
                </FadeInUp>

                <FadeInUp delay={0.15}>
                  <p className="text-xl lg:text-2xl text-violet-400 font-medium mb-6">
                    Restaurant Ordering Platform
                  </p>
                </FadeInUp>

                <FadeInUp delay={0.2}>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                    A complete mobile ordering solution for restaurants with real-time tracking,
                    seamless payments, and an integrated loyalty rewards system.{" "}
                    <span className="text-white font-medium">
                      Own your customer relationships.
                    </span>
                  </p>
                </FadeInUp>

                {/* Hero Stats Bar */}
                <FadeInUp delay={0.25}>
                  <div className="flex flex-wrap gap-6 mb-8">
                    {heroStats.map((stat) => (
                      <div key={stat.label} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center">
                          <stat.icon className="w-5 h-5 text-violet-400" />
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
                      className="inline-flex items-center gap-2 bg-violet-500 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-violet-600 transition-all hover:scale-[1.02] shadow-lg shadow-violet-500/20"
                    >
                      Build Your App
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

              {/* Right: App Mockup */}
              <FadeInUp delay={0.2}>
                <div className="relative">
                  {/* iPhone Mockup with App Screenshot */}
                  <div className="relative mx-auto w-[280px] lg:w-[320px]">
                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-black/50">
                      {/* Screen */}
                      <div className="bg-[#1a1a1a] rounded-[2.5rem] aspect-[9/19] overflow-hidden relative">
                        <Image
                          src="/assets/images/orderflow.png"
                          alt="OrderFlow App"
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
                    className="absolute -top-2 -left-4 lg:-left-8 bg-green-500 text-white p-3 rounded-xl shadow-lg hidden md:flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-medium">Driver nearby!</span>
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
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs font-medium">+50 Points!</span>
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
                The Restaurant Digital Dilemma
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Restaurants are losing money and customers to third-party delivery apps.
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
                Why Restaurants Struggle with Digital Ordering
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
                Your Restaurant, Your App, Your Customers
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                OrderFlow gives you a beautiful, branded mobile app that puts you in control.
                Real-time ordering, GPS tracking, integrated payments, and a loyalty program that
                keeps customers coming back.
              </p>
            </div>
          </FadeInUp>

          {/* Value Props */}
          <StaggerContainer className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Store, label: "Your Brand", desc: "Fully white-labeled app" },
              { icon: MapPin, label: "Live Tracking", desc: "GPS order tracking" },
              { icon: Gift, label: "Loyalty Built-In", desc: "Rewards & referrals" },
              { icon: Percent, label: "Zero Commissions", desc: "Keep 100% revenue" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-violet-600" />
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

      {/* Features Section - Tabbed */}
      <section className="bg-[#141414] py-20 lg:py-28">
        <Container>
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 text-violet-400 text-sm font-semibold mb-6">
                <Layers className="w-4 h-4" />
                Complete Feature Set
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-6">
                Everything to Run Your Digital Kitchen
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A comprehensive platform designed for modern restaurant operations.
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
                      ? "bg-violet-500 text-white"
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
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-colors"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-4 h-4 text-violet-400" />
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold mb-6">
                <Clock className="w-4 h-4" />
                How It Works
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 mb-6">
                Launch in 2 Weeks
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                From menu upload to live app in your customers' hands.
              </p>
            </div>
          </FadeInUp>

          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 to-violet-500/20 hidden md:block" />

              {processSteps.map((step) => (
                <StaggerItem key={step.step}>
                  <div className="flex gap-6 mb-8 last:mb-0">
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-violet-500">
                        <step.icon className="w-7 h-7 text-violet-600" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-violet-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-heading font-bold text-gray-900 text-xl">
                          {step.title}
                        </h3>
                        <span className="px-3 py-1 bg-violet-100 text-violet-700 text-sm font-medium rounded-full">
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
                Real Impact for Restaurants
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Measurable improvements across every metric that matters.
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
                Built for Speed & Scale
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Modern technologies ensuring real-time performance during peak hours.
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
                  What We Learned Building OrderFlow
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Building a food ordering platform taught us that restaurant tech
                  is about more than just taking orders — it's about orchestrating
                  an experience that spans customer, kitchen, and delivery.
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
      <section className="bg-gradient-to-br from-violet-500/10 via-white to-violet-500/5 py-20 lg:py-28">
        <Container>
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 mb-6">
                Ready to Own Your Digital Ordering?
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Stop paying commissions to third-party apps. Build your own branded
                ordering platform and keep 100% of your revenue while building
                lasting customer relationships.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/estimate"
                  className="inline-flex items-center gap-2 bg-violet-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-violet-600 transition-all hover:scale-[1.02] shadow-lg shadow-violet-500/20"
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
