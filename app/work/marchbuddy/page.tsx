"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  Users,
  BarChart3,
  Zap,
  ArrowRight,
  ChevronRight,
  Clock,
  TrendingUp,
  Settings,
  Check,
  Layers,
  MessageSquare,
  Code2,
  Brain,
  Footprints,
  Dumbbell,
  Apple,
  Trophy,
  Target,
  Camera,
  Bot,
  Timer,
  Flame,
  Activity,
  LineChart,
  Heart,
  Gauge,
  Route,
  Medal,
  Sparkles,
  MessageCircle,
  CalendarCheck,
  Weight,
  Salad,
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
  { value: "AI-Powered", label: "Personal Coach", icon: Brain },
  { value: "5-in-1", label: "Run · Train · Eat · Chat · Track", icon: Layers },
  { value: "Adaptive", label: "Plans That Evolve", icon: Target },
];

// Problem statistics
const industryStats = [
  { stat: "80%", description: "of people quit fitness apps within 2 weeks" },
  { stat: "$96B+", description: "global fitness app market by 2026" },
  { stat: "65%", description: "of users want personalized workout plans" },
  { stat: "73%", description: "struggle to stay consistent without coaching" },
  { stat: "50%", description: "drop off due to lack of progress visibility" },
];

// Challenges fitness enthusiasts face
const challenges = [
  {
    icon: Target,
    title: "Generic Workout Plans",
    description:
      "One-size-fits-all programs that don't adapt to your fitness level or progress",
  },
  {
    icon: MessageCircle,
    title: "No Real-Time Guidance",
    description:
      "Questions go unanswered — no coach available when you need motivation or advice",
  },
  {
    icon: Salad,
    title: "Nutrition Tracking Is Tedious",
    description:
      "Manually searching and logging every meal makes calorie tracking a chore",
  },
  {
    icon: LineChart,
    title: "Can't See Progress",
    description:
      "No unified view of workouts, runs, nutrition, and body metrics in one place",
  },
];

// Feature categories
const featureCategories = [
  {
    id: "running",
    label: "Smart Running",
    icon: Footprints,
    features: [
      {
        title: "Personalized Running Plans",
        description:
          "Adaptive running programs that match your fitness level — from couch to 5K to marathon training. Plans evolve as you improve.",
      },
      {
        title: "Real-Time Run Tracking",
        description:
          "Track pace, distance, time, and splits in real-time. Audio cues guide you through intervals, warm-ups, and cooldowns.",
      },
      {
        title: "Progress Over Time",
        description:
          "See your pace improve week over week. Track total distance, best times, and consistency streaks on your running dashboard.",
      },
    ],
  },
  {
    id: "coach",
    label: "AI Coach",
    icon: Bot,
    features: [
      {
        title: "Chat Anytime",
        description:
          "Your AI coach is available 24/7. Ask about form, recovery, motivation, or get your plan adjusted — all through natural conversation.",
      },
      {
        title: "Personalized Advice",
        description:
          "The AI learns your goals, fitness level, and preferences to give context-aware recommendations that actually make sense for you.",
      },
      {
        title: "Motivation & Accountability",
        description:
          "Get nudges when you miss a session, celebrate when you hit milestones, and receive encouragement tailored to your personality.",
      },
    ],
  },
  {
    id: "nutrition",
    label: "Nutrition",
    icon: Apple,
    features: [
      {
        title: "FoodSnap — Log by Photo",
        description:
          "Take a photo of your meal and let AI identify the food, estimate portions, and log calories and macros automatically.",
      },
      {
        title: "Calorie & Macro Tracking",
        description:
          "Track daily calories, protein, carbs, and fats against your goals. Visual progress bars make it easy to stay on target.",
      },
      {
        title: "Meal History",
        description:
          "Review past meals, spot patterns, and understand your eating habits over time. The coach uses this data to refine advice.",
      },
    ],
  },
  {
    id: "workouts",
    label: "Workout Tracking",
    icon: Dumbbell,
    features: [
      {
        title: "Structured Workout Plans",
        description:
          "Follow guided workout sessions with exercises, sets, reps, and rest timers. Plans adapt to your available equipment and time.",
      },
      {
        title: "Log Sets & Reps",
        description:
          "Track every set, rep, and weight during your workout. The app remembers your last session so you know what to beat.",
      },
      {
        title: "Personal Records",
        description:
          "Celebrate new PRs automatically. The app tracks your best lifts, fastest runs, and longest streaks — and highlights when you break them.",
      },
    ],
  },
  {
    id: "progress",
    label: "Progress Tracking",
    icon: TrendingUp,
    features: [
      {
        title: "Consistency Streaks",
        description:
          "Build daily and weekly streaks that motivate you to stay on track. Visual streak counters make consistency feel rewarding.",
      },
      {
        title: "Weight & Body Metrics",
        description:
          "Log weight, measurements, and body composition over time. See trends and correlate with your training and nutrition.",
      },
      {
        title: "Milestones & Achievements",
        description:
          "Unlock achievements for hitting goals — first 5K, 30-day streak, 100 workouts logged. Gamification that drives real results.",
      },
      {
        title: "Level System",
        description:
          "Progress through fitness levels (L1, L2, L3...) as you train consistently. Each level unlocks harder plans and new challenges.",
      },
    ],
  },
  {
    id: "experience",
    label: "App Experience",
    icon: Settings,
    features: [
      {
        title: "Onboarding Assessment",
        description:
          "A guided questionnaire that assesses your current activity level, goals, and preferences to create your personalized starting plan.",
      },
      {
        title: "Dark-Mode First Design",
        description:
          "A sleek, dark interface with lime green accents designed for gym and outdoor use — easy on the eyes in any lighting.",
      },
      {
        title: "Daily Session Overview",
        description:
          "Open the app and see today's workout at a glance — what to do, how long it takes, and a one-tap start button.",
      },
    ],
  },
];

// How it works steps
const processSteps = [
  {
    step: 1,
    title: "User Research & AI Design",
    duration: "1-2 weeks",
    description:
      "Studied fitness app drop-off patterns, designed the AI coaching conversation model, and mapped the adaptive plan algorithm.",
    icon: Brain,
  },
  {
    step: 2,
    title: "Core App Development",
    duration: "4-6 weeks",
    description:
      "Built the React Native app — running tracker, workout logger, AI chat interface, FoodSnap camera, and progress dashboards.",
    icon: Smartphone,
  },
  {
    step: 3,
    title: "AI Integration & Training",
    duration: "2-3 weeks",
    description:
      "Integrated the AI coaching engine, trained on fitness domains, built the food recognition pipeline, and tuned plan adaptation logic.",
    icon: Sparkles,
  },
  {
    step: 4,
    title: "Testing & Play Store Launch",
    duration: "1-2 weeks",
    description:
      "Beta testing with real users, performance optimization, Play Store listing optimization, and public launch.",
    icon: Zap,
  },
];

// Results metrics
const results = [
  {
    metric: "AI",
    label: "24/7 Personal Coach",
    description: "Always-available coaching that adapts to your journey",
  },
  {
    metric: "5-in-1",
    label: "Unified Platform",
    description: "Running, workouts, nutrition, coaching, and progress in one app",
  },
  {
    metric: "Photo",
    label: "FoodSnap Logging",
    description: "Snap a meal photo — AI handles calorie and macro tracking",
  },
  {
    metric: "Live",
    label: "On Play Store",
    description: "Available for download and actively used by real users",
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
    category: "AI & ML",
    items: [
      { name: "AI Coaching Engine", icon: "🤖" },
      { name: "Food Recognition", icon: "📸" },
      { name: "Adaptive Algorithms", icon: "🧠" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Supabase", icon: "⚡" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Edge Functions", icon: "⚙️" },
    ],
  },
  {
    category: "Tracking & UX",
    items: [
      { name: "GPS Tracking", icon: "📍" },
      { name: "Health APIs", icon: "❤️" },
      { name: "Push Notifications", icon: "🔔" },
    ],
  },
];

// Key learnings
const learnings = [
  {
    title: "AI Coaching Needs Personality, Not Just Data",
    description:
      "Users respond to an AI coach that has a voice — encouraging but not pushy, knowledgeable but not preachy. The tone matters as much as the advice.",
  },
  {
    title: "Photo-Based Nutrition Logging Removes the Biggest Friction",
    description:
      "Manual food logging has a 90% drop-off rate. FoodSnap reduced logging time from 2 minutes to 5 seconds — and tripled daily logging consistency.",
  },
  {
    title: "Streaks and Levels Drive Retention More Than Features",
    description:
      "Users who hit a 7-day streak were 4x more likely to stay active at 30 days. The level system (L1, L2, L3) gave people something to work toward beyond just 'getting fit'.",
  },
  {
    title: "Adaptive Plans Must Feel Intentional, Not Random",
    description:
      "When plans change automatically, users need to understand why. We added coach explanations for every plan adjustment — 'You crushed last week, so I'm stepping it up.'",
  },
];

export default function MarchBuddyCaseStudy() {
  const [activeFeatureTab, setActiveFeatureTab] = useState("running");

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#141414] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-lime-500/20 rounded-full blur-[180px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]"
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
                <span className="text-lime-400">MarchBuddy</span>
              </nav>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Content */}
              <div>
                <FadeInUp>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/20 text-lime-400 text-sm font-semibold mb-6">
                    <Brain className="w-4 h-4" />
                    AI / Health & Fitness
                  </span>
                </FadeInUp>

                <FadeInUp delay={0.1}>
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-4 leading-tight">
                    MarchBuddy
                  </h1>
                </FadeInUp>

                <FadeInUp delay={0.15}>
                  <p className="text-xl lg:text-2xl text-lime-400 font-medium mb-6">
                    Your Personal AI Fitness Coach
                  </p>
                </FadeInUp>

                <FadeInUp delay={0.2}>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                    An AI-powered fitness app for running, workouts, and nutrition.
                    Personalized plans that adapt, a coach that talks back, and
                    FoodSnap to log meals by photo.{" "}
                    <span className="text-white font-medium">
                      Available on Google Play Store.
                    </span>
                  </p>
                </FadeInUp>

                {/* Hero Stats Bar */}
                <FadeInUp delay={0.25}>
                  <div className="flex flex-wrap gap-6 mb-8">
                    {heroStats.map((stat) => (
                      <div key={stat.label} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-lime-500/20 rounded-lg flex items-center justify-center">
                          <stat.icon className="w-5 h-5 text-lime-400" />
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
                      href="https://play.google.com/store/apps/details?id=com.marchbuddy.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-lime-500 text-gray-900 px-6 py-3.5 rounded-xl font-semibold hover:bg-lime-400 transition-all hover:scale-[1.02] shadow-lg shadow-lime-500/20"
                    >
                      Get on Play Store
                      <ArrowRight className="w-4 h-4" />
                    </a>
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
                          src="/work/marchbuddy/images/05.png"
                          alt="MarchBuddy App"
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
                    className="absolute -top-2 -left-4 lg:-left-8 bg-lime-500 text-gray-900 p-3 rounded-xl shadow-lg hidden md:flex items-center gap-2"
                  >
                    <Flame className="w-4 h-4" />
                    <span className="text-xs font-medium">7-day streak!</span>
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
                    <Trophy className="w-4 h-4 text-lime-500" />
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
                Why Most Fitness Apps Fail You
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                People want to get fit but apps give them generic plans, no guidance, and no reason to come back.
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
                The Fitness App Gap
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
                A Coach That Knows You — In Your Pocket
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                MarchBuddy combines AI coaching, adaptive training plans, photo-based
                nutrition logging, and smart progress tracking into one app that actually
                keeps you coming back.
              </p>
            </div>
          </FadeInUp>

          {/* Value Props */}
          <StaggerContainer className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Bot, label: "AI Coach", desc: "Chat anytime, get real advice" },
              { icon: Route, label: "Smart Running", desc: "Plans that adapt to you" },
              { icon: Camera, label: "FoodSnap", desc: "Log meals by photo" },
              { icon: Medal, label: "Levels & Streaks", desc: "Gamified consistency" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-14 h-14 bg-lime-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-lime-600" />
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/20 text-lime-400 text-sm font-semibold mb-6">
                <Smartphone className="w-4 h-4" />
                App Screens
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-6">
                See MarchBuddy in Action
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                From onboarding to daily workouts — a seamless fitness experience.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {[
              { src: "/work/marchbuddy/images/01.png", label: "Welcome" },
              { src: "/work/marchbuddy/images/02.png", label: "Onboarding" },
              { src: "/work/marchbuddy/images/03.png", label: "Progress" },
              { src: "/work/marchbuddy/images/04.png", label: "Workout Timer" },
              { src: "/work/marchbuddy/images/05.png", label: "Daily Plan" },
              { src: "/work/marchbuddy/images/06.png", label: "AI Coach" },
            ].map((screen, index) => (
              <StaggerItem key={index}>
                <div className="relative group">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-1.5 shadow-xl">
                    <div className="rounded-xl overflow-hidden aspect-[9/19] relative">
                      <Image
                        src={screen.src}
                        alt={`MarchBuddy ${screen.label}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/20 text-lime-400 text-sm font-semibold mb-6">
                <Layers className="w-4 h-4" />
                Complete Feature Set
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-6">
                Everything You Need to Get Fit — For Real
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Running, workouts, nutrition, AI coaching, and progress tracking — unified.
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
                      ? "bg-lime-500 text-gray-900"
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
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-lime-500/30 transition-colors"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 bg-lime-500/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-4 h-4 text-lime-400" />
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-100 text-lime-700 text-sm font-semibold mb-6">
                <Clock className="w-4 h-4" />
                Development Process
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 mb-6">
                From Idea to Play Store
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Building an AI-powered fitness coach from concept to live product.
              </p>
            </div>
          </FadeInUp>

          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-500 to-lime-500/20 hidden md:block" />

              {processSteps.map((step) => (
                <StaggerItem key={step.step}>
                  <div className="flex gap-6 mb-8 last:mb-0">
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-lime-500">
                        <step.icon className="w-7 h-7 text-lime-600" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-lime-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-heading font-bold text-gray-900 text-xl">
                          {step.title}
                        </h3>
                        <span className="px-3 py-1 bg-lime-100 text-lime-700 text-sm font-medium rounded-full">
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
                What MarchBuddy Delivers
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                A fitness app that people actually keep using.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {results.map((result) => (
              <StaggerItem key={result.label}>
                <div className="bg-gradient-to-br from-lime-500/10 to-transparent border border-lime-500/20 rounded-2xl p-8 text-center h-full">
                  <p className="text-5xl font-heading font-bold text-lime-400 mb-2">
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
                Built with AI at the Core
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Modern mobile stack powered by AI for coaching, food recognition, and adaptive plans.
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
                  What We Learned Building MarchBuddy
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Building an AI fitness coach taught us that the best technology
                  disappears into the experience — users don&apos;t care about
                  the AI, they care about getting fitter.
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
      <section className="bg-gradient-to-br from-lime-500/10 via-white to-lime-500/5 py-20 lg:py-28">
        <Container>
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 mb-6">
                Ready to Build Your AI-Powered App?
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We build intelligent mobile apps that combine AI, great UX, and
                real-world utility. Let&apos;s bring your idea to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/estimate"
                  className="inline-flex items-center gap-2 bg-lime-500 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-lime-400 transition-all hover:scale-[1.02] shadow-lg shadow-lime-500/20"
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
