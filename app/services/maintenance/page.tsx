"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Shield,
  Activity,
  AlertTriangle,
  TrendingUp,
  Server,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Zap,
  HeadphonesIcon,
  FileText,
  Bug,
  RefreshCw,
  Eye,
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
    <section className="relative bg-gradient-to-br from-[#141414] via-blue-950/10 to-[#141414] text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Pulsing circles background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 rounded-full border border-mustard/10 animate-ping" style={{ animationDuration: '3s' }} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 rounded-full border border-mustard/20 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Support badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-8"
            >
              <HeadphonesIcon className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">
                Ongoing Support
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              We Don&apos;t <span className="text-mustard">Disappear</span>
              <br />
              After Launch
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              Your app needs ongoing care. We provide proactive monitoring, bug
              fixes, updates, and feature additions — so you can focus on your
              business.
            </p>

            {/* Key metrics */}
            <div className="flex flex-wrap gap-8 mb-10">
              <div>
                <div className="text-3xl font-bold text-mustard">&lt;2hr</div>
                <div className="text-sm text-gray-400">Critical Response</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-mustard">99.9%</div>
                <div className="text-sm text-gray-400">Uptime Target</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-mustard">24/7</div>
                <div className="text-sm text-gray-400">Monitoring</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-mustard text-black px-8 py-4 rounded-lg font-semibold hover:bg-mustard/90 transition-colors"
              >
                Get Support Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#plans"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                See Plans
              </Link>
            </div>
          </motion.div>

          {/* Right: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
              {/* Dashboard header */}
              <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-green-400" />
                  <span className="font-semibold text-white">
                    System Status
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm">All Systems Operational</span>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6 space-y-4">
                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-gray-400 text-xs mb-1">Uptime</div>
                    <div className="text-2xl font-bold text-green-400">
                      99.98%
                    </div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-gray-400 text-xs mb-1">Crash-Free</div>
                    <div className="text-2xl font-bold text-green-400">
                      99.2%
                    </div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-gray-400 text-xs mb-1">Latency</div>
                    <div className="text-2xl font-bold text-blue-400">
                      142ms
                    </div>
                  </div>
                </div>

                {/* Status items */}
                <div className="space-y-2">
                  {[
                    { name: "API Server", status: "healthy" },
                    { name: "Database", status: "healthy" },
                    { name: "CDN", status: "healthy" },
                    { name: "Background Jobs", status: "healthy" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-800/30 rounded-lg px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <Server className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 text-sm">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <span className="text-green-400 text-xs">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent activity */}
                <div className="bg-gray-800/30 rounded-lg p-4">
                  <div className="text-gray-400 text-xs mb-3">
                    Recent Activity
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      Security patch applied
                      <span className="text-gray-500">2h ago</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <RefreshCw className="w-4 h-4 text-blue-400" />
                      Dependencies updated
                      <span className="text-gray-500">1d ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Support Plans Section
function PlansSection() {
  const plans = [
    {
      name: "Essential",
      price: "$1,500",
      period: "/month",
      description: "For apps that need basic coverage",
      hours: "10 hours/month",
      features: [
        "Bug fixes and patches",
        "Security updates",
        "OS compatibility updates",
        "Basic monitoring",
        "48-hour response time",
        "Monthly status report",
      ],
      highlighted: false,
    },
    {
      name: "Growth",
      price: "$3,000",
      period: "/month",
      description: "For growing apps with active users",
      hours: "25 hours/month",
      features: [
        "Everything in Essential, plus:",
        "Performance optimization",
        "Feature additions",
        "Advanced monitoring & alerts",
        "4-hour critical response",
        "Weekly check-ins",
        "Priority support queue",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For mission-critical applications",
      hours: "Dedicated capacity",
      features: [
        "Everything in Growth, plus:",
        "Dedicated support engineer",
        "2-hour critical response",
        "24/7 on-call availability",
        "SLA with uptime guarantees",
        "Quarterly architecture review",
        "Custom integrations",
      ],
      highlighted: false,
    },
  ];

  return (
    <AnimatedSection id="plans" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            Support <span className="text-mustard">Plans</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the level of support that fits your app&apos;s needs. All
            plans include access to our team.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-[#141414] text-white ring-2 ring-mustard"
                  : "bg-gray-50 text-[#141414] border border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block bg-mustard text-black text-xs font-bold px-3 py-1 rounded-full mb-4">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold text-mustard">
                  {plan.price}
                </span>
                <span
                  className={plan.highlighted ? "text-gray-400" : "text-gray-500"}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`mb-4 ${
                  plan.highlighted ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>
              <div
                className={`text-sm font-medium mb-6 ${
                  plan.highlighted ? "text-mustard" : "text-[#141414]"
                }`}
              >
                {plan.hours}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <CheckCircle2
                      className={`w-5 h-5 shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-mustard" : "text-green-500"
                      }`}
                    />
                    <span
                      className={
                        plan.highlighted ? "text-gray-300" : "text-gray-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-mustard text-black hover:bg-mustard/90"
                    : "bg-[#141414] text-white hover:bg-gray-800"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-center text-gray-500 mt-8"
        >
          All plans can be customized. Unused hours roll over for up to 3
          months.
        </motion.p>
      </div>
    </AnimatedSection>
  );
}

// What We Monitor Section
function MonitoringSection() {
  const metrics = [
    {
      icon: Activity,
      title: "App Performance",
      description: "Load times, API latency, frame rates, and user experience metrics.",
    },
    {
      icon: Bug,
      title: "Crash Reporting",
      description: "Real-time crash detection with stack traces and affected user counts.",
    },
    {
      icon: Server,
      title: "Server Health",
      description: "CPU, memory, database connections, and infrastructure status.",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Vulnerability scanning, dependency audits, and suspicious activity.",
    },
    {
      icon: TrendingUp,
      title: "User Analytics",
      description: "Active users, retention, feature usage, and conversion funnels.",
    },
    {
      icon: AlertTriangle,
      title: "Error Tracking",
      description: "API errors, failed requests, and client-side exceptions.",
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-[#141414] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We <span className="text-mustard">Monitor</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We catch issues before your users do. 24/7 monitoring with
            intelligent alerts.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-mustard/30 transition-colors"
            >
              <div className="w-12 h-12 bg-mustard/10 rounded-lg flex items-center justify-center mb-4">
                <metric.icon className="w-6 h-6 text-mustard" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {metric.title}
              </h3>
              <p className="text-gray-400 text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// What's Included Section
function IncludedSection() {
  const services = [
    {
      icon: Bug,
      title: "Bug Fixes",
      description:
        "Quick turnaround on bug fixes prioritized by severity and user impact.",
    },
    {
      icon: RefreshCw,
      title: "OS Updates",
      description:
        "Keep your app compatible with the latest iOS, Android, and browser versions.",
    },
    {
      icon: Shield,
      title: "Security Patches",
      description:
        "Regular dependency updates and vulnerability remediation.",
    },
    {
      icon: Zap,
      title: "Performance Tuning",
      description:
        "Ongoing optimization for speed, battery life, and data usage.",
    },
    {
      icon: Smartphone,
      title: "App Store Management",
      description:
        "Handle updates, respond to reviews, and maintain compliance.",
    },
    {
      icon: FileText,
      title: "Documentation",
      description:
        "Keep technical documentation current for your team or future developers.",
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            What&apos;s <span className="text-mustard">Included</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive support to keep your app healthy and your users happy.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 border border-gray-200 flex gap-4"
            >
              <div className="w-12 h-12 bg-[#141414] rounded-lg flex items-center justify-center shrink-0">
                <service.icon className="w-6 h-6 text-mustard" />
              </div>
              <div>
                <h3 className="font-bold text-[#141414] mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// SLA Section
function SLASection() {
  return (
    <AnimatedSection className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            Response <span className="text-mustard">Times</span>
          </h2>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="max-w-3xl mx-auto bg-[#141414] rounded-2xl overflow-hidden"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 px-6 text-gray-400 font-medium">
                  Severity
                </th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">
                  Description
                </th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">
                  Response Time
                </th>
              </tr>
            </thead>
            <tbody className="text-white">
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-2 text-red-400 font-medium">
                    <AlertTriangle className="w-4 h-4" />
                    Critical
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-300">
                  App down, data loss risk, security breach
                </td>
                <td className="py-4 px-6 font-bold text-mustard">
                  Within 2 hours
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-2 text-orange-400 font-medium">
                    <AlertTriangle className="w-4 h-4" />
                    High
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-300">
                  Major feature broken, affecting many users
                </td>
                <td className="py-4 px-6 font-bold text-mustard">
                  Within 4 hours
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-2 text-yellow-400 font-medium">
                    <AlertTriangle className="w-4 h-4" />
                    Medium
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-300">
                  Feature partially broken, workaround exists
                </td>
                <td className="py-4 px-6 font-bold text-mustard">
                  Within 24 hours
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-2 text-blue-400 font-medium">
                    <Eye className="w-4 h-4" />
                    Low
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-300">
                  Minor issue, cosmetic, enhancement request
                </td>
                <td className="py-4 px-6 font-bold text-mustard">
                  Within 48 hours
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.p variants={fadeInUp} className="text-center text-gray-500 mt-6">
          Response times during business hours (9am-6pm CT). Enterprise plans
          include 24/7 critical support.
        </motion.p>
      </div>
    </AnimatedSection>
  );
}

// Tools Section
function ToolsSection() {
  const tools = [
    { name: "Sentry", category: "Error Tracking" },
    { name: "Datadog", category: "Infrastructure" },
    { name: "Crashlytics", category: "Mobile Crashes" },
    { name: "New Relic", category: "APM" },
    { name: "PagerDuty", category: "Alerting" },
    { name: "GitHub Actions", category: "CI/CD" },
  ];

  return (
    <AnimatedSection className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            Our <span className="text-mustard">Toolset</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade monitoring and management tools.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-4"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl px-6 py-4 border border-gray-200 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-[#141414] rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-mustard" />
              </div>
              <div>
                <div className="font-bold text-[#141414]">{tool.name}</div>
                <div className="text-xs text-gray-500">{tool.category}</div>
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
      question: "What's included in a maintenance package?",
      answer:
        "Packages include a set number of development hours per month, monitoring and alerting setup, bug fixes with guaranteed response times, OS and dependency updates, and monthly reporting. We customize packages based on your app's complexity and needs.",
    },
    {
      question: "Can you maintain an app built by another team?",
      answer:
        "Yes, we regularly take over projects from other agencies or in-house teams. We start with a codebase audit to understand the current state, document key systems, and establish a maintenance plan. There's usually a transition period as we get up to speed.",
    },
    {
      question: "What if I need more hours than my plan includes?",
      answer:
        "Additional hours are billed at a discounted rate ($150/hour vs $200/hour retail). We'll always let you know before exceeding your plan hours. Unused hours roll over for up to 3 months.",
    },
    {
      question: "Do you offer 24/7 support?",
      answer:
        "Enterprise plans include 24/7 on-call support for critical issues. Growth and Essential plans include priority support during business hours (9am-6pm CT) with critical issues addressed outside hours on a best-effort basis.",
    },
    {
      question: "How do you handle iOS/Android updates?",
      answer:
        "We monitor Apple and Google's release schedules and proactively test your app against beta versions. When new OS versions launch, we ensure compatibility and take advantage of new features where beneficial.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <AnimatedSection className="py-24 bg-white">
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
              className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
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
          <Shield className="w-16 h-16 text-mustard mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Keep Your App <span className="text-mustard">Healthy</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Whether you built with us or inherited an app from another team,
            we&apos;re here to help. Let&apos;s discuss your support needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-mustard text-black px-8 py-4 rounded-lg font-semibold hover:bg-mustard/90 transition-colors"
            >
              Get Support Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services/mobile-development"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Build Something New
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function MaintenancePage() {
  return (
    <main>
      <HeroSection />
      <PlansSection />
      <MonitoringSection />
      <IncludedSection />
      <SLASection />
      <ToolsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
