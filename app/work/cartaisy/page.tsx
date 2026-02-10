"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
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
  Apple,
  Play,
  Clock,
  DollarSign,
  TrendingUp,
  RefreshCw,
  Package,
  Search,
  Heart,
  Settings,
  Lock,
  ExternalLink,
  Check,
  X,
  ChevronDown,
  Layers,
  Target,
  MessageSquare,
  Store,
  Palette,
  Send,
  ShoppingBag,
  Truck,
  UserCheck,
  Percent,
  Languages,
  Server,
  Code2,
  Database,
  Cloud,
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
  { value: "3x", label: "Higher Conversion", icon: TrendingUp },
  { value: "90%", label: "Push Open Rate", icon: Bell },
  { value: "2 Weeks", label: "To Launch", icon: Clock },
];

// Problem statistics
const mobileStats = [
  { stat: "79%", description: "of Shopify traffic comes from mobile devices" },
  { stat: "1.5-2%", description: "mobile web conversion rate" },
  { stat: "5-6%", description: "mobile app conversion rate (3x higher)" },
  { stat: "70%", description: "of shopping carts abandoned on mobile web" },
  { stat: "90%", description: "push notification open rate vs 20% for email" },
];

// Why store owners don't have apps
const barriers = [
  {
    icon: DollarSign,
    title: "Cost Barrier",
    description: "Custom app development starts at $50,000+",
  },
  {
    icon: Code2,
    title: "Complexity",
    description: "Managing app store submissions requires dedicated developers",
  },
  {
    icon: Clock,
    title: "Time",
    description: "Building from scratch takes 6-12 months",
  },
  {
    icon: TrendingUp,
    title: "Existing Solutions",
    description: "Competitors charge $200-500+/month with limited features",
  },
];

// Feature categories
const featureCategories = [
  {
    id: "integration",
    label: "Shopify Integration",
    icon: RefreshCw,
    features: [
      {
        title: "Real-Time Sync via Webhooks",
        description:
          "Products, collections, and inventory sync in seconds. Price changes reflect instantly.",
      },
      {
        title: "Complete Data Sync",
        description:
          "All products with variants, images, descriptions, collections, inventory levels, customer data, order history, and discount codes.",
      },
      {
        title: "Safety Net Sync",
        description:
          "Background sync every 4 hours with full inventory reconciliation daily.",
      },
    ],
  },
  {
    id: "branding",
    label: "White-Label Apps",
    icon: Palette,
    features: [
      {
        title: "Complete Brand Control",
        description:
          "Store owner's logo on app icon and splash screen, custom brand colors throughout.",
      },
      {
        title: "Custom App Store Presence",
        description:
          "Published under store's brand name — not 'Powered by Cartaisy'.",
      },
      {
        title: "Promotional Customization",
        description:
          "Custom home screen banners, promotions, and personalized app store listings.",
      },
    ],
  },
  {
    id: "notifications",
    label: "Push Notifications",
    icon: Bell,
    features: [
      {
        title: "Campaign Management",
        description:
          "Send to all customers or targeted segments. Schedule for optimal timing. Rich notifications with images and deep links.",
      },
      {
        title: "Pre-Built Segments",
        description:
          "All Customers, Repeat Customers (2+ orders), High-Value ($100+), Active (7 days), Inactive (30+ days), First-Time Buyers, Cart Abandoners.",
      },
      {
        title: "Automated Notifications",
        description:
          "Order confirmation, shipping updates, delivery notifications, back-in-stock alerts.",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Track sent, delivered, opened rates. Per-notification performance. Historical campaign data.",
      },
    ],
  },
  {
    id: "checkout",
    label: "Checkout & Payments",
    icon: CreditCard,
    features: [
      {
        title: "Apple Pay & Google Pay",
        description:
          "Face ID/Touch ID checkout. Customer sees product, taps Apple Pay, confirms — done in under 10 seconds.",
      },
      {
        title: "Guest Checkout",
        description:
          "Browse and buy without account. Cart persists 30 days. Optional account creation after purchase.",
      },
      {
        title: "Abandoned Cart Recovery",
        description:
          "Detects abandonment, sends push after configurable delay, deep links to saved cart. One-tap checkout completion.",
      },
      {
        title: "Secure Payments",
        description:
          "PCI-compliant via Stripe. Tokenized transactions. 3D Secure support. Saved payment methods.",
      },
    ],
  },
  {
    id: "dashboard",
    label: "Store Dashboard",
    icon: BarChart3,
    features: [
      {
        title: "Real-Time Analytics",
        description:
          "Sales metrics, customer insights, app performance, push notification ROI.",
      },
      {
        title: "Order Management",
        description:
          "View all mobile app orders. Status tracking. Customer details. Export to CSV/Excel.",
      },
      {
        title: "Team Access & Roles",
        description:
          "Super Admin (full access), Admin (notifications, analytics, customers). Invite marketing team and VAs.",
      },
      {
        title: "App Customization",
        description:
          "Update branding, banners, and promotions without app store resubmission.",
      },
    ],
  },
  {
    id: "security",
    label: "Security & Reliability",
    icon: Shield,
    features: [
      {
        title: "Enterprise Security",
        description:
          "JWT authentication, rate limiting, DDoS protection, data encryption in transit and at rest.",
      },
      {
        title: "Data Isolation",
        description:
          "Complete separation between stores. GDPR compliant with cookie consent, data export, and delete on request.",
      },
      {
        title: "99.9% Uptime",
        description:
          "Global CDN, auto-scaling infrastructure, 24/7 monitoring.",
      },
    ],
  },
];

// Onboarding steps
const onboardingSteps = [
  {
    step: 1,
    title: "Connect Your Store",
    duration: "5 minutes",
    description:
      "Sign up at cartaisy.com, one-click Shopify connection, products sync automatically.",
    icon: Store,
  },
  {
    step: 2,
    title: "Customize Your App",
    duration: "15 minutes",
    description:
      "Upload logo, set brand colors, configure home screen, add promotional banners.",
    icon: Palette,
  },
  {
    step: 3,
    title: "We Build & Submit",
    duration: "2-3 days",
    description:
      "Team generates app builds, submits to App Store and Play Store, handles all technical requirements.",
    icon: Send,
  },
  {
    step: 4,
    title: "Go Live!",
    duration: "1-2 weeks total",
    description:
      "Apple/Google review (1-3 days typically), app goes live, start sending push notifications.",
    icon: Zap,
  },
];

// Pricing tiers
const pricingTiers = [
  {
    name: "Starter",
    price: 49,
    description: "Perfect for growing Shopify stores",
    features: [
      "iOS + Android apps",
      "Full Shopify sync",
      "Push notifications (10K/month)",
      "Abandoned cart automation",
      "Apple Pay / Google Pay",
      "Up to 1,000 products",
      "Unlimited orders",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: 149,
    description: "For established stores ready to scale",
    features: [
      "Everything in Starter",
      "Unlimited push notifications",
      "Advanced customer segments",
      "Priority support",
      "Up to 10,000 products",
      "Custom email domain",
      "Advanced analytics",
      "Team access (up to 3)",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: 499,
    description: "For high-volume stores with custom needs",
    features: [
      "Everything in Professional",
      "Unlimited products",
      "Dedicated account manager",
      "Custom feature development",
      "White-glove onboarding",
      "SLA guarantee",
      "Unlimited team members",
      "API access",
    ],
    highlighted: false,
  },
];

// Competitor comparison
const competitorComparison = [
  {
    feature: "Starting Price",
    cartaisy: "$49/mo",
    tapcart: "$200+/mo",
    vajro: "$99+/mo",
    custom: "$50,000+",
  },
  {
    feature: "Setup Time",
    cartaisy: "2 weeks",
    tapcart: "2-4 weeks",
    vajro: "2-4 weeks",
    custom: "6-12 months",
  },
  {
    feature: "True Native Apps",
    cartaisy: true,
    tapcart: true,
    vajro: true,
    custom: true,
  },
  {
    feature: "White-Label Branding",
    cartaisy: true,
    tapcart: true,
    vajro: "Limited",
    custom: true,
  },
  {
    feature: "Push Notifications",
    cartaisy: true,
    tapcart: true,
    vajro: true,
    custom: true,
  },
  {
    feature: "Abandoned Cart Recovery",
    cartaisy: true,
    tapcart: true,
    vajro: "Paid add-on",
    custom: "Custom build",
  },
  {
    feature: "Apple Pay / Google Pay",
    cartaisy: true,
    tapcart: true,
    vajro: true,
    custom: true,
  },
  {
    feature: "Customer Segmentation",
    cartaisy: "Advanced",
    tapcart: "Basic",
    vajro: "Basic",
    custom: "Custom build",
  },
  {
    feature: "Team Access",
    cartaisy: "Included",
    tapcart: "Extra cost",
    vajro: "Extra cost",
    custom: "Custom build",
  },
  {
    feature: "Ongoing Maintenance",
    cartaisy: "Included",
    tapcart: "Included",
    vajro: "Included",
    custom: "$5K+/month",
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
      { name: "Node.js", icon: "🟢" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Redis", icon: "🔴" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "AWS", icon: "☁️" },
      { name: "Vercel", icon: "▲" },
      { name: "Global CDN", icon: "🌐" },
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

// Learnings
const learnings = [
  {
    title: "E-commerce Conversion Is All About Speed",
    description:
      "Every friction point loses customers. We obsessed over checkout flow — Apple Pay integration alone boosted conversions by 23%.",
  },
  {
    title: "Push Notifications Are a Superpower (When Done Right)",
    description:
      "Stores using targeted segments see 3x better results than blast campaigns. Timing and relevance trump frequency every time.",
  },
  {
    title: "White-Label Means Truly White-Label",
    description:
      "Store owners want zero trace of a third-party platform. We rebuilt our entire branding system to be completely invisible.",
  },
  {
    title: "Shopify's API Is Complex — Abstraction Is Key",
    description:
      "We built a robust sync layer so store owners never think about data. Products just appear. Orders just flow. It just works.",
  },
];

// ROI Calculator example values
const roiExamples = [
  {
    title: "Push Notification ROI",
    scenario: "5,000 app users, 4 campaigns/month",
    calculation: [
      "90% open rate × 30% visit × 5% purchase × $60 AOV",
      "One campaign ≈ 68 orders = $4,080",
      "Monthly (4 campaigns) = $16,320",
    ],
    result: "109x ROI",
    cost: "$149/month",
  },
  {
    title: "Abandoned Cart Recovery ROI",
    scenario: "1,000 abandoned carts/month",
    calculation: [
      "5% recovery rate = 50 carts recovered",
      "50 carts × $60 AOV = $3,000/month",
    ],
    result: "20x ROI",
    cost: "$149/month",
  },
];

export default function CartaisyCaseStudy() {
  const [activeFeatureTab, setActiveFeatureTab] = useState("integration");

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#141414] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-[#F5A623]/20 rounded-full blur-[180px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px]"
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
                <span className="text-[#F5A623]">Cartaisy</span>
              </nav>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Content */}
              <div>
                <FadeInUp>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/20 text-[#F5A623] text-sm font-semibold mb-6">
                    <Store className="w-4 h-4" />
                    Our Flagship SaaS Product
                  </span>
                </FadeInUp>

                <FadeInUp delay={0.1}>
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-4 leading-tight">
                    Cartaisy
                  </h1>
                </FadeInUp>

                <FadeInUp delay={0.15}>
                  <p className="text-xl lg:text-2xl text-[#F5A623] font-medium mb-6">
                    Mobile Apps for Shopify Stores
                  </p>
                </FadeInUp>

                <FadeInUp delay={0.2}>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                    Transform your Shopify store into a powerful native mobile
                    app. More sales. Happier customers.{" "}
                    <span className="text-white font-medium">
                      Zero coding required.
                    </span>
                  </p>
                </FadeInUp>

                {/* Hero Stats Bar */}
                <FadeInUp delay={0.25}>
                  <div className="flex flex-wrap gap-6 mb-8">
                    {heroStats.map((stat) => (
                      <div key={stat.label} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#F5A623]/20 rounded-lg flex items-center justify-center">
                          <stat.icon className="w-5 h-5 text-[#F5A623]" />
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
                    <a
                      href="https://cartaisy.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#F5A623] text-black px-6 py-3.5 rounded-xl font-semibold hover:bg-[#F5A623]/90 transition-all hover:scale-[1.02] shadow-lg shadow-[#F5A623]/20"
                    >
                      Visit Cartaisy
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href="https://cartaisy.com/demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20"
                    >
                      <Play className="w-4 h-4" />
                      View Live Demo
                    </a>
                  </div>
                </FadeInUp>
              </div>

              {/* Right: App Mockups */}
              <FadeInUp delay={0.2}>
                <div className="relative">
                  {/* iPhone Mockup */}
                  <div className="relative mx-auto w-[260px] lg:w-[300px]">
                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-black/50">
                      {/* Screen */}
                      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-[2.5rem] aspect-[9/19] overflow-hidden relative">
                        {/* App UI Mockup */}
                        <div className="absolute inset-0 p-4">
                          {/* Status bar mockup */}
                          <div className="flex justify-between items-center text-white text-[10px] mb-4">
                            <span>9:41</span>
                            <div className="flex gap-1">
                              <div className="w-4 h-2 bg-white/60 rounded-sm" />
                              <div className="w-4 h-2 bg-white/60 rounded-sm" />
                              <div className="w-6 h-2 bg-green-400 rounded-sm" />
                            </div>
                          </div>

                          {/* Header */}
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <p className="text-white/60 text-[10px]">
                                Welcome back
                              </p>
                              <p className="text-white font-semibold text-sm">
                                Fashion Store
                              </p>
                            </div>
                            <div className="w-8 h-8 bg-[#F5A623] rounded-full flex items-center justify-center">
                              <ShoppingBag className="w-4 h-4 text-black" />
                            </div>
                          </div>

                          {/* Search bar */}
                          <div className="bg-white/10 rounded-xl px-3 py-2 flex items-center gap-2 mb-4">
                            <Search className="w-3 h-3 text-white/40" />
                            <span className="text-white/40 text-[10px]">
                              Search products...
                            </span>
                          </div>

                          {/* Featured banner */}
                          <div className="bg-gradient-to-r from-[#F5A623]/30 to-[#F5A623]/10 rounded-xl p-3 mb-4">
                            <p className="text-[#F5A623] text-[10px] font-semibold">
                              NEW ARRIVALS
                            </p>
                            <p className="text-white text-xs font-bold">
                              Summer Collection
                            </p>
                            <p className="text-white/60 text-[9px]">
                              Up to 40% off
                            </p>
                          </div>

                          {/* Product grid mockup */}
                          <div className="grid grid-cols-2 gap-2">
                            {[1, 2, 3, 4].map((i) => (
                              <div
                                key={i}
                                className="bg-white/5 rounded-lg p-2"
                              >
                                <div className="bg-white/10 rounded-md aspect-square mb-1" />
                                <div className="bg-white/20 h-2 rounded w-3/4 mb-1" />
                                <div className="bg-[#F5A623]/60 h-2 rounded w-1/2" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Notch */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full" />
                    </div>
                  </div>

                  {/* Android mockup (smaller, offset) */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="absolute -right-8 lg:-right-12 top-16 w-[140px] lg:w-[160px] hidden md:block"
                  >
                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-[1.5rem] p-2 shadow-xl">
                      <div className="bg-[#1a1a1a] rounded-[1.2rem] aspect-[9/18] flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-10 h-10 bg-[#F5A623] rounded-xl flex items-center justify-center mx-auto mb-2">
                            <ShoppingCart className="w-5 h-5 text-black" />
                          </div>
                          <p className="text-white text-xs font-semibold">
                            Cartaisy
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

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
                    <Bell className="w-4 h-4" />
                    <span className="text-xs font-medium">Push Sent!</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-24 -left-8 lg:-left-16 bg-white text-gray-900 p-3 rounded-xl shadow-lg hidden md:flex items-center gap-2"
                  >
                    <Apple className="w-4 h-4" />
                    <span className="text-xs font-medium">Apple Pay</span>
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
                The Mobile Commerce Reality
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Your customers are on mobile, but your mobile experience is
                losing you sales.
              </p>
            </div>
          </FadeInUp>

          {/* Stats Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {mobileStats.map((item, index) => (
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

          {/* Why No App Yet */}
          <FadeInUp>
            <div className="text-center mb-10">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Why Store Owners Don&apos;t Have Apps Yet
              </h3>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {barriers.map((barrier) => (
              <StaggerItem key={barrier.title}>
                <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                    <barrier.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h4 className="font-heading font-semibold text-white text-lg mb-2">
                    {barrier.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{barrier.description}</p>
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
                Professional Mobile Apps at a Fraction of the Cost
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                Cartaisy transforms your Shopify store into a fully branded,
                native iOS & Android app. Full white-labeling. 2-week launch
                time. No coding required. Starting at just{" "}
                <span className="font-bold text-[#F5A623]">$49/month</span>.
              </p>
            </div>
          </FadeInUp>

          {/* Value Props */}
          <StaggerContainer className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Palette, label: "Fully White-Label", desc: "Your brand, everywhere" },
              { icon: Smartphone, label: "True Native Apps", desc: "iOS & Android" },
              { icon: DollarSign, label: "Affordable", desc: "Starting at $49/mo" },
              { icon: Zap, label: "Fast Launch", desc: "Live in 2 weeks" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-14 h-14 bg-[#F5A623]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-[#F5A623]" />
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/20 text-[#F5A623] text-sm font-semibold mb-6">
                <Layers className="w-4 h-4" />
                Complete Feature Set
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-6">
                Everything You Need to Succeed
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A comprehensive suite of features designed to maximize your
                mobile commerce success.
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
                      ? "bg-[#F5A623] text-black"
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
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#F5A623]/30 transition-colors"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 bg-[#F5A623]/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-4 h-4 text-[#F5A623]" />
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

      {/* How It Works / Onboarding Section */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <Container>
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/10 text-[#F5A623] text-sm font-semibold mb-6">
                <Clock className="w-4 h-4" />
                How It Works
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 mb-6">
                From Signup to Live App in ~2 Weeks
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                No technical expertise required. We handle everything.
              </p>
            </div>
          </FadeInUp>

          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F5A623] to-[#F5A623]/20 hidden md:block" />

              {onboardingSteps.map((step, index) => (
                <StaggerItem key={step.step}>
                  <div className="flex gap-6 mb-8 last:mb-0">
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-[#F5A623]">
                        <step.icon className="w-7 h-7 text-[#F5A623]" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#F5A623] rounded-full flex items-center justify-center text-black font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-heading font-bold text-gray-900 text-xl">
                          {step.title}
                        </h3>
                        <span className="px-3 py-1 bg-[#F5A623]/10 text-[#F5A623] text-sm font-medium rounded-full">
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

      {/* ROI Calculator Section */}
      <section className="bg-[#141414] py-20 lg:py-28">
        <Container>
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold mb-6">
                <TrendingUp className="w-4 h-4" />
                ROI Examples
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-6">
                The Numbers Don&apos;t Lie
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Real ROI calculations based on typical Cartaisy store
                performance.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {roiExamples.map((example) => (
              <StaggerItem key={example.title}>
                <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-2xl p-8">
                  <h3 className="font-heading font-bold text-white text-xl mb-2">
                    {example.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Scenario: {example.scenario}
                  </p>

                  <div className="space-y-2 mb-6">
                    {example.calculation.map((line, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-gray-300 text-sm"
                      >
                        <ChevronRight className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                        {line}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-end justify-between pt-6 border-t border-white/10">
                    <div>
                      <p className="text-gray-400 text-sm">Cost</p>
                      <p className="text-white font-semibold">
                        {example.cost}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">Return</p>
                      <p className="text-4xl font-heading font-bold text-green-400">
                        {example.result}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/10 text-[#F5A623] text-sm font-semibold mb-6">
                <DollarSign className="w-4 h-4" />
                Simple Pricing
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 mb-6">
                No Setup Fees. No Commissions.
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Predictable monthly pricing that scales with your business.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <StaggerItem key={tier.name}>
                <div
                  className={`rounded-2xl p-8 h-full flex flex-col ${
                    tier.highlighted
                      ? "bg-[#141414] text-white ring-4 ring-[#F5A623] relative"
                      : "bg-gray-50 text-gray-900"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#F5A623] text-black text-sm font-bold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="font-heading font-bold text-2xl mb-2">
                      {tier.name}
                    </h3>
                    <p
                      className={
                        tier.highlighted ? "text-gray-400" : "text-gray-600"
                      }
                    >
                      {tier.description}
                    </p>
                  </div>
                  <div className="mb-6">
                    <span className="text-5xl font-heading font-bold">
                      ${tier.price}
                    </span>
                    <span
                      className={
                        tier.highlighted ? "text-gray-400" : "text-gray-500"
                      }
                    >
                      /month
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`w-5 h-5 shrink-0 mt-0.5 ${
                            tier.highlighted
                              ? "text-[#F5A623]"
                              : "text-green-500"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            tier.highlighted ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://cartaisy.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                      tier.highlighted
                        ? "bg-[#F5A623] text-black hover:bg-[#F5A623]/90"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Competitor Comparison Section */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <Container>
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                <Target className="w-4 h-4" />
                Competitive Analysis
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 mb-6">
                How Cartaisy Stacks Up
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                A transparent comparison with other Shopify mobile app
                solutions.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] bg-white rounded-2xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 font-heading font-bold text-gray-900">
                      Feature
                    </th>
                    <th className="p-4 font-heading font-bold text-[#F5A623] bg-[#F5A623]/10">
                      Cartaisy
                    </th>
                    <th className="p-4 font-heading font-semibold text-gray-700">
                      Tapcart
                    </th>
                    <th className="p-4 font-heading font-semibold text-gray-700">
                      Vajro
                    </th>
                    <th className="p-4 font-heading font-semibold text-gray-700">
                      Custom Dev
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {competitorComparison.map((row, index) => (
                    <tr
                      key={row.feature}
                      className={
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }
                    >
                      <td className="p-4 font-medium text-gray-900">
                        {row.feature}
                      </td>
                      <td className="p-4 text-center bg-[#F5A623]/5">
                        {typeof row.cartaisy === "boolean" ? (
                          row.cartaisy ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold text-gray-900">
                            {row.cartaisy}
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.tapcart === "boolean" ? (
                          row.tapcart ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-600">{row.tapcart}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.vajro === "boolean" ? (
                          row.vajro ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-600">{row.vajro}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.custom === "boolean" ? (
                          row.custom ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-600">{row.custom}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInUp>
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
                Built with Modern Tech
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Battle-tested technologies ensuring reliability, performance,
                and scalability.
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

          {/* Services Links */}
          <FadeInUp delay={0.3}>
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                We use the same technologies to build client products:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/services/mobile-development"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium"
                >
                  <Smartphone className="w-4 h-4" />
                  Mobile Development
                </Link>
                <Link
                  href="/services/web-development"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium"
                >
                  <Globe className="w-4 h-4" />
                  Web Development
                </Link>
              </div>
            </div>
          </FadeInUp>
        </Container>
      </section>

      {/* What We Learned Section */}
      <section className="bg-[#141414] py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInUp>
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm font-semibold mb-6">
                  Insights
                </span>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-6">
                  What We Learned Building Cartaisy
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Building our own SaaS product from the ground up taught us
                  lessons you can&apos;t learn any other way. These insights
                  make us better partners for our clients.
                </p>
                <p className="text-gray-500 italic">
                  &ldquo;When you build your own product, you face every
                  challenge your clients face — and you solve them before they
                  even have to ask.&rdquo;
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
      <section className="bg-gradient-to-br from-[#F5A623]/10 via-white to-[#F5A623]/5 py-20 lg:py-28">
        <Container>
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 mb-6">
                Want Us to Build Your SaaS Product?
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We built Cartaisy from concept to launch — a full SaaS platform
                with native mobile apps, a dashboard, payment processing, and
                thousands of active users. Let&apos;s build yours.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/estimate"
                  className="inline-flex items-center gap-2 bg-[#F5A623] text-black px-8 py-4 rounded-xl font-semibold hover:bg-[#F5A623]/90 transition-all hover:scale-[1.02] shadow-lg shadow-[#F5A623]/20"
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

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-gray-500 mb-4">
                  Or check out Cartaisy for yourself:
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://cartaisy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#F5A623] font-semibold hover:underline"
                  >
                    Visit cartaisy.com
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </FadeInUp>
        </Container>
      </section>
    </main>
  );
}
