"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  Bell,
  Users,
  BarChart3,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Clock,
  TrendingUp,
  Heart,
  Settings,
  Check,
  Layers,
  Target,
  MessageSquare,
  Palette,
  Activity,
  Dumbbell,
  Apple,
  Timer,
  Flame,
  Trophy,
  Calendar,
  LineChart,
  Utensils,
  Moon,
  Code2,
  Play,
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
  { value: "500+", label: "Workout Plans", icon: Dumbbell },
  { value: "92%", label: "User Retention", icon: Users },
  { value: "4.8", label: "App Store Rating", icon: Trophy },
];

// Industry statistics
const fitnessStats = [
  { stat: "$96B", description: "global fitness app market by 2027" },
  { stat: "75%", description: "of gym members use fitness apps" },
  { stat: "67%", description: "prefer personalized workout plans" },
  { stat: "3x", description: "more likely to achieve goals with tracking" },
  { stat: "45min", description: "average daily app engagement" },
];

// User challenges
const challenges = [
  {
    icon: Target,
    title: "Generic Workouts",
    description: "One-size-fits-all plans that don't match individual goals or fitness levels",
  },
  {
    icon: LineChart,
    title: "No Progress Visibility",
    description: "Hard to see improvements without proper tracking and analytics",
  },
  {
    icon: Utensils,
    title: "Disconnected Nutrition",
    description: "Workout and diet tracked separately, missing the full picture",
  },
  {
    icon: Bell,
    title: "Motivation Gap",
    description: "Easy to skip workouts without accountability and reminders",
  },
];

// Feature categories
const featureCategories = [
  {
    id: "workouts",
    label: "Smart Workouts",
    icon: Dumbbell,
    features: [
      {
        title: "Personalized Plans",
        description:
          "AI-generated workout plans based on goals, fitness level, available equipment, and schedule preferences.",
      },
      {
        title: "500+ Exercise Library",
        description:
          "HD video demonstrations, muscle group targeting, proper form guidance, and exercise alternatives.",
      },
      {
        title: "Adaptive Difficulty",
        description:
          "Workouts automatically adjust based on your progress, recovery, and feedback after each session.",
      },
    ],
  },
  {
    id: "tracking",
    label: "Progress Tracking",
    icon: LineChart,
    features: [
      {
        title: "Comprehensive Metrics",
        description:
          "Track weight, body measurements, strength gains, endurance improvements, and workout consistency.",
      },
      {
        title: "Progress Photos",
        description:
          "Side-by-side transformation comparisons with guided photo capture for consistent angles.",
      },
      {
        title: "Personal Records",
        description:
          "Automatic PR detection and celebration. Historical performance data for every exercise.",
      },
      {
        title: "Workout History",
        description:
          "Complete log of every workout with volume, intensity, and duration trends over time.",
      },
    ],
  },
  {
    id: "nutrition",
    label: "Nutrition",
    icon: Utensils,
    features: [
      {
        title: "Macro Tracking",
        description:
          "Log meals with barcode scanner, food database, or quick macros. Daily and weekly goals.",
      },
      {
        title: "Meal Planning",
        description:
          "Suggested meals based on your calorie and macro targets with grocery list generation.",
      },
      {
        title: "Water Tracking",
        description:
          "Hydration reminders and daily water intake logging with customizable goals.",
      },
      {
        title: "Recipe Database",
        description:
          "Healthy recipes with nutrition info, prep time, and dietary filters (vegan, keto, etc.).",
      },
    ],
  },
  {
    id: "health",
    label: "Health Integration",
    icon: Heart,
    features: [
      {
        title: "Apple Health / Google Fit",
        description:
          "Two-way sync with native health platforms. Import steps, sleep, heart rate, and workouts.",
      },
      {
        title: "Wearable Support",
        description:
          "Connect Apple Watch, Fitbit, Garmin, and other popular fitness wearables.",
      },
      {
        title: "Sleep Tracking",
        description:
          "Monitor sleep quality and duration. Recovery recommendations based on rest.",
      },
      {
        title: "Heart Rate Zones",
        description:
          "Real-time heart rate monitoring during workouts with zone-based training guidance.",
      },
    ],
  },
  {
    id: "social",
    label: "Community",
    icon: Users,
    features: [
      {
        title: "Challenges",
        description:
          "Join weekly and monthly fitness challenges. Compete with friends or the community.",
      },
      {
        title: "Leaderboards",
        description:
          "See how you stack up against friends and the community on various metrics.",
      },
      {
        title: "Share Progress",
        description:
          "Post achievements, PRs, and transformations. Get encouragement from the community.",
      },
      {
        title: "Workout Partners",
        description:
          "Find workout buddies, share routines, and hold each other accountable.",
      },
    ],
  },
  {
    id: "coaching",
    label: "Smart Coaching",
    icon: Activity,
    features: [
      {
        title: "AI Coach",
        description:
          "Personalized recommendations, form tips, and motivation based on your workout patterns.",
      },
      {
        title: "Rest Day Guidance",
        description:
          "Smart recovery suggestions based on workout intensity, sleep, and muscle fatigue.",
      },
      {
        title: "Goal Setting",
        description:
          "Set SMART fitness goals with milestone tracking and achievement celebrations.",
      },
    ],
  },
];

// Development process
const processSteps = [
  {
    step: 1,
    title: "Discovery & Research",
    duration: "2 weeks",
    description:
      "User interviews, competitor analysis, and defining core features based on fitness industry best practices.",
    icon: Target,
  },
  {
    step: 2,
    title: "UX Design & Prototyping",
    duration: "3 weeks",
    description:
      "User flows, wireframes, and interactive prototypes. Usability testing with fitness enthusiasts.",
    icon: Palette,
  },
  {
    step: 3,
    title: "Development & Integration",
    duration: "8 weeks",
    description:
      "React Native app build, Firebase backend, HealthKit/Google Fit integration, and exercise video library.",
    icon: Code2,
  },
  {
    step: 4,
    title: "Testing & Launch",
    duration: "2 weeks",
    description:
      "Beta testing with real users, performance optimization, app store submission, and launch.",
    icon: Zap,
  },
];

// Key metrics
const results = [
  {
    metric: "92%",
    label: "User Retention",
    description: "Users active after 30 days",
  },
  {
    metric: "4.8",
    label: "App Store Rating",
    description: "Average across iOS and Android",
  },
  {
    metric: "45min",
    label: "Daily Engagement",
    description: "Average time spent in app",
  },
  {
    metric: "3.2x",
    label: "Goal Achievement",
    description: "More likely to hit fitness goals",
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
      { name: "Firebase", icon: "🔥" },
      { name: "Cloud Functions", icon: "⚡" },
      { name: "Firestore", icon: "🗄️" },
    ],
  },
  {
    category: "Health Data",
    items: [
      { name: "HealthKit", icon: "🍎" },
      { name: "Google Fit", icon: "🏃" },
      { name: "Wearables API", icon: "⌚" },
    ],
  },
  {
    category: "Analytics",
    items: [
      { name: "Charts.js", icon: "📊" },
      { name: "Firebase Analytics", icon: "📈" },
      { name: "Mixpanel", icon: "🎯" },
    ],
  },
];

// Key learnings
const learnings = [
  {
    title: "Personalization Is Non-Negotiable",
    description:
      "Users who received personalized workout plans were 3x more likely to complete their weekly goals. Generic content doesn't cut it in fitness.",
  },
  {
    title: "Celebration Drives Retention",
    description:
      "Adding micro-celebrations for PRs, streaks, and milestones increased 30-day retention by 40%. People need to feel their progress.",
  },
  {
    title: "Health Integration Is Expected",
    description:
      "85% of users wanted to connect their wearables. HealthKit and Google Fit integration became a day-one priority.",
  },
  {
    title: "Social Features Multiply Engagement",
    description:
      "Users who connected with at least one friend logged 2.5x more workouts. Accountability is a powerful motivator.",
  },
];

export default function FitPlusCaseStudy() {
  const [activeFeatureTab, setActiveFeatureTab] = useState("workouts");

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#141414] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-[180px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px]"
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
                <span className="text-emerald-400">FitPlus</span>
              </nav>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Content */}
              <div>
                <FadeInUp>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
                    <Heart className="w-4 h-4" />
                    Health & Fitness
                  </span>
                </FadeInUp>

                <FadeInUp delay={0.1}>
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-4 leading-tight">
                    FitPlus
                  </h1>
                </FadeInUp>

                <FadeInUp delay={0.15}>
                  <p className="text-xl lg:text-2xl text-emerald-400 font-medium mb-6">
                    Your Personal Fitness Companion
                  </p>
                </FadeInUp>

                <FadeInUp delay={0.2}>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                    A comprehensive fitness tracking app with personalized workout plans,
                    nutrition logging, and progress analytics.{" "}
                    <span className="text-white font-medium">
                      Achieve your fitness goals smarter.
                    </span>
                  </p>
                </FadeInUp>

                {/* Hero Stats Bar */}
                <FadeInUp delay={0.25}>
                  <div className="flex flex-wrap gap-6 mb-8">
                    {heroStats.map((stat) => (
                      <div key={stat.label} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                          <stat.icon className="w-5 h-5 text-emerald-400" />
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
                      className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-emerald-600 transition-all hover:scale-[1.02] shadow-lg shadow-emerald-500/20"
                    >
                      Build Your Fitness App
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
                          src="/assets/images/fitplus.png"
                          alt="FitPlus App"
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
                    className="absolute -top-2 -left-4 lg:-left-8 bg-emerald-500 text-white p-3 rounded-xl shadow-lg hidden md:flex items-center gap-2"
                  >
                    <Flame className="w-4 h-4" />
                    <span className="text-xs font-medium">350 cal burned!</span>
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
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs font-medium">New PR!</span>
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
                Why Most People Quit Fitness Apps
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                The fitness industry is booming, but most apps fail to keep users engaged.
              </p>
            </div>
          </FadeInUp>

          {/* Stats Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {fitnessStats.map((item, index) => (
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
                Common Fitness App Frustrations
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
                Fitness That Adapts to You
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                FitPlus combines personalized workout programming, nutrition tracking,
                and health device integration into one seamless experience that grows
                with you on your fitness journey.
              </p>
            </div>
          </FadeInUp>

          {/* Value Props */}
          <StaggerContainer className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Dumbbell, label: "Smart Workouts", desc: "AI-personalized plans" },
              { icon: LineChart, label: "Visual Progress", desc: "Charts & analytics" },
              { icon: Apple, label: "Health Sync", desc: "HealthKit integration" },
              { icon: Users, label: "Community", desc: "Challenges & friends" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-emerald-600" />
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
                <Layers className="w-4 h-4" />
                Complete Feature Set
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-6">
                Everything for Your Fitness Journey
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A comprehensive platform for workouts, nutrition, and progress tracking.
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
                      ? "bg-emerald-500 text-white"
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
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-4 h-4 text-emerald-400" />
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

      {/* Development Process Section */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <Container>
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
                <Clock className="w-4 h-4" />
                Development Process
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 mb-6">
                From Concept to Launch
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                A 15-week journey from initial research to app store launch.
              </p>
            </div>
          </FadeInUp>

          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-emerald-500/20 hidden md:block" />

              {processSteps.map((step) => (
                <StaggerItem key={step.step}>
                  <div className="flex gap-6 mb-8 last:mb-0">
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-emerald-500">
                        <step.icon className="w-7 h-7 text-emerald-600" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-heading font-bold text-gray-900 text-xl">
                          {step.title}
                        </h3>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
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
                Measurable Impact
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Real results from real users achieving their fitness goals.
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
                Built for Performance
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Modern technologies powering a seamless fitness experience.
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
                  What We Learned Building FitPlus
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Building a fitness app taught us that success isn't just about
                  features — it's about understanding human motivation and making
                  every interaction feel rewarding.
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
      <section className="bg-gradient-to-br from-emerald-500/10 via-white to-emerald-500/5 py-20 lg:py-28">
        <Container>
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 mb-6">
                Ready to Build Your Fitness App?
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Whether you're building a workout tracker, meditation app, or comprehensive
                wellness platform, we have the expertise to bring your vision to life
                with engaging features users will love.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/estimate"
                  className="inline-flex items-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-600 transition-all hover:scale-[1.02] shadow-lg shadow-emerald-500/20"
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
