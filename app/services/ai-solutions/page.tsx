"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Bot,
  Brain,
  Sparkles,
  MessageSquare,
  FileText,
  BarChart3,
  Workflow,
  Zap,
  Shield,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  TrendingDown,
  Clock,
  Users,
  ArrowDown,
  Send,
  Cpu,
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

// Hero Section with AI Visual
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#141414] via-purple-950/20 to-[#141414] text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Neural network background pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="neural"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="2" fill="#F5A623" />
              <circle cx="0" cy="0" r="2" fill="#F5A623" />
              <circle cx="100" cy="0" r="2" fill="#F5A623" />
              <circle cx="0" cy="100" r="2" fill="#F5A623" />
              <circle cx="100" cy="100" r="2" fill="#F5A623" />
              <line
                x1="50"
                y1="50"
                x2="0"
                y2="0"
                stroke="#F5A623"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <line
                x1="50"
                y1="50"
                x2="100"
                y2="0"
                stroke="#F5A623"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <line
                x1="50"
                y1="50"
                x2="0"
                y2="100"
                stroke="#F5A623"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <line
                x1="50"
                y1="50"
                x2="100"
                y2="100"
                stroke="#F5A623"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* AI Provider badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <span className="text-green-400 text-sm font-medium">
                  OpenAI GPT-4
                </span>
              </div>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2">
                <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">C</span>
                </div>
                <span className="text-orange-400 text-sm font-medium">
                  Claude AI
                </span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-mustard">AI</span> That Delivers
              <br />
              Real Results
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              Custom AI solutions that automate workflows, enhance user
              experiences, and unlock insights from your data — not just
              buzzwords.
            </p>

            {/* ROI Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div>
                <div className="text-3xl font-bold text-mustard">60%</div>
                <div className="text-sm text-gray-400">
                  Support Cost Reduction
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-mustard">80%</div>
                <div className="text-sm text-gray-400">Tasks Automated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-mustard">3x</div>
                <div className="text-sm text-gray-400">Faster Processing</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-mustard text-black px-8 py-4 rounded-lg font-semibold hover:bg-mustard/90 transition-colors"
              >
                Explore AI Solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#use-cases"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                See Use Cases
              </Link>
            </div>
          </motion.div>

          {/* Right: Chat Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
              {/* Chat header */}
              <div className="bg-gray-800 px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-mustard rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="font-semibold text-white">AI Assistant</div>
                  <div className="text-xs text-green-400 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    Online
                  </div>
                </div>
              </div>

              {/* Chat messages */}
              <div className="p-6 space-y-4 min-h-[300px]">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-mustard text-black rounded-2xl rounded-br-sm px-4 py-3 max-w-[80%]">
                    <p className="text-sm">
                      What were our top-selling products last quarter?
                    </p>
                  </div>
                </div>

                {/* AI response */}
                <div className="flex justify-start">
                  <div className="bg-gray-800 text-white rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%]">
                    <p className="text-sm">
                      Based on Q4 data, your top 3 products were:
                    </p>
                    <ol className="text-sm mt-2 space-y-1 text-gray-300">
                      <li>1. Premium Plan — $124K revenue</li>
                      <li>2. Enterprise Suite — $98K revenue</li>
                      <li>3. Starter Pack — $67K revenue</li>
                    </ol>
                    <p className="text-sm mt-2 text-gray-400">
                      Want me to generate a detailed report?
                    </p>
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>

              {/* Chat input */}
              <div className="px-6 pb-6">
                <div className="flex items-center gap-3 bg-gray-800 rounded-xl px-4 py-3">
                  <input
                    type="text"
                    placeholder="Ask anything..."
                    className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-gray-500"
                    disabled
                  />
                  <button className="w-8 h-8 bg-mustard rounded-lg flex items-center justify-center">
                    <Send className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// AI Use Cases Section
function UseCasesSection() {
  const useCases = [
    {
      icon: MessageSquare,
      title: "Customer Support Chatbots",
      description:
        "Handle 60-80% of support queries automatically. 24/7 availability with human escalation for complex issues.",
      metrics: "60% cost reduction",
      color: "bg-blue-500",
    },
    {
      icon: FileText,
      title: "Content Generation",
      description:
        "Generate product descriptions, marketing copy, reports, and documentation at scale with brand consistency.",
      metrics: "10x faster content",
      color: "bg-purple-500",
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Insights",
      description:
        "Ask questions in plain English. Get instant insights from your data without writing SQL or waiting for analysts.",
      metrics: "Real-time answers",
      color: "bg-green-500",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Automate document processing, data entry, email classification, and approval workflows with AI decision-making.",
      metrics: "80% time saved",
      color: "bg-orange-500",
    },
    {
      icon: Sparkles,
      title: "Personalization Engines",
      description:
        "Dynamic product recommendations, personalized content, and user experiences that adapt in real-time.",
      metrics: "30% more conversions",
      color: "bg-pink-500",
    },
    {
      icon: Brain,
      title: "Knowledge Base AI",
      description:
        "Turn your documentation into an intelligent assistant that answers employee and customer questions instantly.",
      metrics: "50% fewer tickets",
      color: "bg-cyan-500",
    },
  ];

  return (
    <AnimatedSection id="use-cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            AI <span className="text-mustard">Use Cases</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real solutions we build for real business problems. Each with
            measurable ROI.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-mustard/30 hover:shadow-xl transition-all group"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 ${useCase.color} rounded-xl mb-6`}
              >
                <useCase.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#141414] mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 mb-4">{useCase.description}</p>
              <div className="pt-4 border-t border-gray-200">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-mustard">
                  <TrendingDown className="w-4 h-4" />
                  {useCase.metrics}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// How AI Integration Works Section
function HowItWorksSection() {
  return (
    <AnimatedSection className="py-24 bg-[#141414] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How AI Integration <span className="text-mustard">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We connect AI capabilities seamlessly with your existing systems.
          </p>
        </motion.div>

        {/* Integration Flow Diagram */}
        <motion.div
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* User */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700">
                <Users className="w-10 h-10 text-mustard" />
              </div>
              <span className="mt-3 text-sm font-medium">Your Users</span>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center">
              <div className="w-16 h-0.5 bg-mustard/30" />
              <ArrowRight className="w-5 h-5 text-mustard -ml-1" />
            </div>
            <div className="md:hidden">
              <ArrowDown className="w-5 h-5 text-mustard" />
            </div>

            {/* Your App */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-mustard rounded-2xl flex items-center justify-center">
                <Cpu className="w-10 h-10 text-black" />
              </div>
              <span className="mt-3 text-sm font-medium">Your App</span>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center">
              <div className="w-16 h-0.5 bg-mustard/30" />
              <ArrowRight className="w-5 h-5 text-mustard -ml-1" />
            </div>
            <div className="md:hidden">
              <ArrowDown className="w-5 h-5 text-mustard" />
            </div>

            {/* AI Layer */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <span className="mt-3 text-sm font-medium">AI Processing</span>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center">
              <div className="w-16 h-0.5 bg-mustard/30" />
              <ArrowRight className="w-5 h-5 text-mustard -ml-1" />
            </div>
            <div className="md:hidden">
              <ArrowDown className="w-5 h-5 text-mustard" />
            </div>

            {/* Response */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <span className="mt-3 text-sm font-medium">Smart Response</span>
            </div>
          </div>

          {/* Description cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h4 className="font-bold text-mustard mb-2">1. Request</h4>
              <p className="text-gray-400 text-sm">
                User interacts with your app — asks a question, submits data, or
                triggers a workflow.
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h4 className="font-bold text-mustard mb-2">2. Processing</h4>
              <p className="text-gray-400 text-sm">
                Our AI layer processes the request using the right model
                (GPT-4, Claude, or custom) with your business context.
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h4 className="font-bold text-mustard mb-2">3. Response</h4>
              <p className="text-gray-400 text-sm">
                Intelligent response delivered to your user or system — with
                guardrails and fallbacks built in.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// ROI Section
function ROISection() {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Reduce Operational Costs",
      description:
        "Automate repetitive tasks that currently require manual labor. Most clients see 40-60% cost reduction in targeted areas.",
    },
    {
      icon: Clock,
      title: "Speed Up Processes",
      description:
        "What takes humans hours can be done in seconds. Document processing, data analysis, and content creation — accelerated.",
    },
    {
      icon: Users,
      title: "Scale Without Hiring",
      description:
        "Handle 10x more customer inquiries, process 100x more documents, without proportionally increasing headcount.",
    },
    {
      icon: Zap,
      title: "Unlock New Capabilities",
      description:
        "Offer features previously impossible — real-time personalization, predictive analytics, intelligent search.",
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            The <span className="text-mustard">Business Case</span> for AI
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI isn&apos;t just cool technology — it&apos;s a strategic
            investment with measurable returns.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200 flex gap-6"
            >
              <div className="w-14 h-14 bg-mustard/10 rounded-xl flex items-center justify-center shrink-0">
                <benefit.icon className="w-7 h-7 text-mustard" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#141414] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Tech Stack Section
function TechStackSection() {
  const stack = [
    {
      category: "LLM Providers",
      items: ["OpenAI GPT-4", "Claude (Anthropic)", "Llama 2", "Mistral"],
    },
    {
      category: "Frameworks",
      items: ["LangChain", "LlamaIndex", "Semantic Kernel"],
    },
    {
      category: "Vector DBs",
      items: ["Pinecone", "Weaviate", "Chroma", "pgvector"],
    },
    {
      category: "Automation",
      items: ["n8n", "Zapier", "Custom APIs"],
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            AI <span className="text-mustard">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We work with the best tools in the AI ecosystem — and know when to
            use each.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stack.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-[#141414] rounded-2xl p-6"
            >
              <h3 className="text-mustard font-bold text-sm uppercase tracking-wider mb-4">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-gray-800 rounded-lg px-4 py-3 text-white text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Responsible AI Section
function ResponsibleAISection() {
  return (
    <AnimatedSection className="py-24 bg-[#141414] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center">
          <div className="w-16 h-16 bg-mustard/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-mustard" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We Build <span className="text-mustard">Responsible AI</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            AI that enhances human work — not replaces it. We implement
            guardrails, transparency, and human oversight in every solution.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Guardrails",
                description:
                  "Content filtering, output validation, and safety checks to prevent harmful or incorrect responses.",
              },
              {
                title: "Transparency",
                description:
                  "Clear indication when AI is being used. No deception about what&apos;s automated vs human.",
              },
              {
                title: "Human Oversight",
                description:
                  "Escalation paths to humans for edge cases. AI assists decisions, humans make final calls.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
              >
                <h3 className="font-bold text-mustard mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
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
      step: 1,
      title: "Assessment",
      description:
        "Identify high-impact AI opportunities in your business. Map out quick wins and long-term possibilities.",
    },
    {
      step: 2,
      title: "Strategy",
      description:
        "Select the right AI models and tools. Design the integration architecture and data pipeline.",
    },
    {
      step: 3,
      title: "Build & Test",
      description:
        "Develop the solution with proper guardrails. Test extensively with real data and edge cases.",
    },
    {
      step: 4,
      title: "Deploy & Optimize",
      description:
        "Launch to production with monitoring. Continuously improve based on real usage patterns.",
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            Our <span className="text-mustard">Process</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeInUp} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-mustard/30 -translate-x-1/2" />
              )}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#141414] rounded-full flex items-center justify-center mx-auto mb-4 text-mustard font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-[#141414] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
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
      question: "What AI use cases make sense for my business?",
      answer:
        "Common high-value use cases include customer support chatbots (reduce support costs by 40-60%), content generation, document processing, data analysis, and personalized recommendations. We help you identify opportunities with the best ROI for your specific situation.",
    },
    {
      question: "How do you handle data privacy and security?",
      answer:
        "We take data privacy seriously. We can deploy AI solutions that keep sensitive data on your infrastructure, use enterprise agreements with AI providers (OpenAI Enterprise, Azure OpenAI), and implement proper data handling. We work within your compliance requirements (HIPAA, SOC2, GDPR).",
    },
    {
      question: "OpenAI vs Claude vs open-source — which should I use?",
      answer:
        "Each has tradeoffs. OpenAI GPT-4 offers broad capabilities and ecosystem. Claude excels at long-form content and nuanced reasoning. Open-source models (Llama, Mistral) can run on your infrastructure for privacy. We recommend based on your use case, budget, and requirements.",
    },
    {
      question: "What if the AI makes mistakes?",
      answer:
        "All AI systems have limitations. We implement guardrails, validation, human escalation paths, and monitoring to catch and learn from errors. We set appropriate user expectations and provide fallback options. The goal is to augment human capabilities, not replace judgment.",
    },
    {
      question: "How long does it take to implement an AI solution?",
      answer:
        "A basic chatbot with knowledge base integration can be deployed in 2-4 weeks. More complex implementations with custom training, multiple integrations, and advanced features typically take 6-12 weeks. We provide detailed timelines after assessment.",
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
    <section className="py-24 bg-gradient-to-br from-[#141414] via-purple-950/20 to-[#141414]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Add <span className="text-mustard">AI</span> to Your
            Product?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Let&apos;s explore how AI can solve real problems in your business.
            Free initial consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-mustard text-black px-8 py-4 rounded-lg font-semibold hover:bg-mustard/90 transition-colors"
            >
              Schedule AI Consultation
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
export default function AISolutionsPage() {
  return (
    <main>
      <HeroSection />
      <UseCasesSection />
      <HowItWorksSection />
      <ROISection />
      <TechStackSection />
      <ResponsibleAISection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
