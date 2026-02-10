"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
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
  Settings,
  Check,
  Layers,
  Target,
  MessageSquare,
  Palette,
  Calendar,
  FolderKanban,
  MessageCircle,
  FileText,
  Share2,
  Workflow,
  ListTodo,
  Timer,
  GitBranch,
  Code2,
  Briefcase,
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
  { value: "10x", label: "Faster Planning", icon: Timer },
  { value: "85%", label: "Team Adoption", icon: Users },
  { value: "50%", label: "Less Meetings", icon: MessageCircle },
];

// Industry statistics
const productivityStats = [
  { stat: "23%", description: "of workday lost to poor task management" },
  { stat: "70%", description: "of teams struggle with project visibility" },
  { stat: "45%", description: "of tasks missed due to poor communication" },
  { stat: "3hrs", description: "daily average time wasted on status updates" },
  { stat: "$500B", description: "lost annually to workplace inefficiency" },
];

// Team challenges
const challenges = [
  {
    icon: FolderKanban,
    title: "Scattered Tools",
    description: "Tasks spread across email, chat, docs, and spreadsheets",
  },
  {
    icon: MessageCircle,
    title: "Communication Gaps",
    description: "Important updates lost in endless message threads",
  },
  {
    icon: BarChart3,
    title: "No Visibility",
    description: "Managers can't see project progress at a glance",
  },
  {
    icon: Clock,
    title: "Deadline Chaos",
    description: "Missed deadlines due to unclear priorities and dependencies",
  },
];

// Feature categories
const featureCategories = [
  {
    id: "boards",
    label: "Project Boards",
    icon: FolderKanban,
    features: [
      {
        title: "Kanban & List Views",
        description:
          "Flexible board layouts with drag-and-drop cards. Switch between Kanban, list, calendar, and timeline views.",
      },
      {
        title: "Custom Workflows",
        description:
          "Create custom columns and statuses that match your team's process. Automate card movements with rules.",
      },
      {
        title: "Templates Library",
        description:
          "Pre-built templates for software development, marketing campaigns, product launches, and more.",
      },
    ],
  },
  {
    id: "tasks",
    label: "Task Management",
    icon: ListTodo,
    features: [
      {
        title: "Rich Task Details",
        description:
          "Descriptions, checklists, attachments, due dates, priority levels, and custom fields on every task.",
      },
      {
        title: "Subtasks & Dependencies",
        description:
          "Break tasks into subtasks. Set dependencies to block tasks until prerequisites complete.",
      },
      {
        title: "Time Tracking",
        description:
          "Built-in time tracking with estimates vs actuals. Generate time reports for billing and analysis.",
      },
      {
        title: "Recurring Tasks",
        description:
          "Set up recurring tasks for daily standups, weekly reviews, or monthly reports.",
      },
    ],
  },
  {
    id: "collaboration",
    label: "Team Collaboration",
    icon: Users,
    features: [
      {
        title: "Real-Time Updates",
        description:
          "See changes instantly via WebSockets. No refresh needed. Know when teammates are viewing or editing.",
      },
      {
        title: "Comments & Mentions",
        description:
          "Threaded comments on tasks. @mention teammates to notify them. Rich text with code blocks and links.",
      },
      {
        title: "File Sharing",
        description:
          "Attach files directly to tasks. Preview images, PDFs, and documents inline. Version history.",
      },
      {
        title: "Activity Feed",
        description:
          "Complete audit trail of all changes. Filter by user, date, or action type.",
      },
    ],
  },
  {
    id: "communication",
    label: "Communication",
    icon: MessageCircle,
    features: [
      {
        title: "Project Chat",
        description:
          "Dedicated chat channels for each project. Keep discussions contextual and searchable.",
      },
      {
        title: "Video Standups",
        description:
          "Async video updates. Record quick status updates teammates can watch anytime.",
      },
      {
        title: "Smart Notifications",
        description:
          "Customizable notification preferences. Get alerts for what matters, silence the noise.",
      },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    features: [
      {
        title: "Project Dashboards",
        description:
          "Visual overview of project health. Tasks by status, burndown charts, and velocity tracking.",
      },
      {
        title: "Team Workload",
        description:
          "See who's overloaded and who has capacity. Balance work across the team.",
      },
      {
        title: "Time Reports",
        description:
          "Track time spent by project, task, or team member. Export for client billing.",
      },
      {
        title: "Goal Tracking",
        description:
          "Set OKRs and track progress. Link tasks to goals for alignment visibility.",
      },
    ],
  },
  {
    id: "integrations",
    label: "Integrations",
    icon: GitBranch,
    features: [
      {
        title: "Developer Tools",
        description:
          "GitHub, GitLab, Bitbucket integration. Link commits and PRs to tasks automatically.",
      },
      {
        title: "Communication Apps",
        description:
          "Slack and Microsoft Teams integration. Get notifications and create tasks from chat.",
      },
      {
        title: "Calendar Sync",
        description:
          "Two-way sync with Google Calendar and Outlook. See deadlines on your calendar.",
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
      "Interviewed 50+ teams about their workflow pain points. Analyzed competitor gaps and opportunities.",
    icon: Target,
  },
  {
    step: 2,
    title: "Architecture Design",
    duration: "2 weeks",
    description:
      "Designed real-time sync architecture with Supabase. Planned offline-first mobile experience.",
    icon: Workflow,
  },
  {
    step: 3,
    title: "Development Sprints",
    duration: "10 weeks",
    description:
      "Agile development with 2-week sprints. React Native app, web dashboard, and real-time backend.",
    icon: Code2,
  },
  {
    step: 4,
    title: "Beta & Launch",
    duration: "3 weeks",
    description:
      "Private beta with 20 teams. Iterated based on feedback. Public launch with onboarding flow.",
    icon: Zap,
  },
];

// Key metrics
const results = [
  {
    metric: "10x",
    label: "Faster Sprint Planning",
    description: "Drag-and-drop beats spreadsheets",
  },
  {
    metric: "85%",
    label: "Team Adoption Rate",
    description: "Intuitive UI drives engagement",
  },
  {
    metric: "50%",
    label: "Fewer Status Meetings",
    description: "Visibility replaces check-ins",
  },
  {
    metric: "99.9%",
    label: "Uptime Reliability",
    description: "Built for always-on teams",
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
      { name: "Supabase", icon: "⚡" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Edge Functions", icon: "🔧" },
    ],
  },
  {
    category: "Real-Time",
    items: [
      { name: "WebSockets", icon: "🔌" },
      { name: "Supabase Realtime", icon: "📡" },
      { name: "Presence", icon: "👥" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Vercel", icon: "▲" },
      { name: "Cloudflare", icon: "☁️" },
      { name: "S3 Storage", icon: "🗄️" },
    ],
  },
];

// Key learnings
const learnings = [
  {
    title: "Real-Time Must Be Instant",
    description:
      "Users expect sub-100ms sync. We invested heavily in WebSocket optimization and optimistic updates to make the app feel instant.",
  },
  {
    title: "Offline Support Is Non-Negotiable",
    description:
      "Teams work from planes, trains, and spotty WiFi. Full offline support with smart conflict resolution was essential.",
  },
  {
    title: "Flexibility Beats Features",
    description:
      "Every team works differently. Custom fields, views, and workflows let teams adapt TaskHub to their process instead of vice versa.",
  },
  {
    title: "Notifications Are Tricky",
    description:
      "Too many notifications and users disable them. Too few and they miss important updates. Smart defaults with granular controls solved this.",
  },
];

export default function TaskHubCaseStudy() {
  const [activeFeatureTab, setActiveFeatureTab] = useState("boards");

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#141414] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[180px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]"
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
                <span className="text-blue-400">TaskHub</span>
              </nav>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Content */}
              <div>
                <FadeInUp>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                    <Briefcase className="w-4 h-4" />
                    Productivity
                  </span>
                </FadeInUp>

                <FadeInUp delay={0.1}>
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-4 leading-tight">
                    TaskHub
                  </h1>
                </FadeInUp>

                <FadeInUp delay={0.15}>
                  <p className="text-xl lg:text-2xl text-blue-400 font-medium mb-6">
                    Team Collaboration & Task Management
                  </p>
                </FadeInUp>

                <FadeInUp delay={0.2}>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                    A powerful project management app with real-time collaboration,
                    Kanban boards, and seamless team communication.{" "}
                    <span className="text-white font-medium">
                      Get more done, together.
                    </span>
                  </p>
                </FadeInUp>

                {/* Hero Stats Bar */}
                <FadeInUp delay={0.25}>
                  <div className="flex flex-wrap gap-6 mb-8">
                    {heroStats.map((stat) => (
                      <div key={stat.label} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <stat.icon className="w-5 h-5 text-blue-400" />
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
                      className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-blue-600 transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/20"
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
                          src="/assets/images/taskhub.png"
                          alt="TaskHub App"
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
                    className="absolute -top-2 -left-4 lg:-left-8 bg-blue-500 text-white p-3 rounded-xl shadow-lg hidden md:flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs font-medium">Task Complete!</span>
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
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-medium">Team Online</span>
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
                Why Teams Struggle with Task Management
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Most teams are drowning in tools but starving for clarity.
              </p>
            </div>
          </FadeInUp>

          {/* Stats Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {productivityStats.map((item, index) => (
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
                Common Team Productivity Killers
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
                One App for Your Entire Workflow
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                TaskHub brings tasks, communication, and collaboration into one
                unified platform. Real-time sync keeps everyone aligned without
                endless meetings.
              </p>
            </div>
          </FadeInUp>

          {/* Value Props */}
          <StaggerContainer className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: FolderKanban, label: "Flexible Boards", desc: "Kanban, list, calendar" },
              { icon: Zap, label: "Real-Time Sync", desc: "Instant updates" },
              { icon: Users, label: "Team Collaboration", desc: "Built-in communication" },
              { icon: BarChart3, label: "Smart Analytics", desc: "Actionable insights" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-blue-600" />
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                <Layers className="w-4 h-4" />
                Complete Feature Set
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-6">
                Everything Teams Need to Succeed
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A comprehensive platform built for modern team collaboration.
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
                      ? "bg-blue-500 text-white"
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
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-4 h-4 text-blue-400" />
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                <Clock className="w-4 h-4" />
                Development Process
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 mb-6">
                From Concept to Launch
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                A 17-week journey building a real-time collaboration platform.
              </p>
            </div>
          </FadeInUp>

          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-500/20 hidden md:block" />

              {processSteps.map((step) => (
                <StaggerItem key={step.step}>
                  <div className="flex gap-6 mb-8 last:mb-0">
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-blue-500">
                        <step.icon className="w-7 h-7 text-blue-600" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-heading font-bold text-gray-900 text-xl">
                          {step.title}
                        </h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
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
                Real results from teams using TaskHub daily.
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
                Built for Real-Time
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Modern stack optimized for instant sync and offline support.
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
                  What We Learned Building TaskHub
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Building a real-time collaboration tool taught us that the
                  hardest problems aren't technical — they're about understanding
                  how teams actually work together.
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
      <section className="bg-gradient-to-br from-blue-500/10 via-white to-blue-500/5 py-20 lg:py-28">
        <Container>
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 mb-6">
                Ready to Build Your Productivity App?
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Whether you're building a task manager, team collaboration tool, or
                project management platform, we have the expertise to bring your
                vision to life with real-time features users will love.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/estimate"
                  className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/20"
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
