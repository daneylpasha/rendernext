"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  PenTool,
  Layers,
  Eye,
  MousePointer,
  Palette,
  Layout,
  Users,
  FileText,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Target,
  Lightbulb,
  Repeat,
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

// Hero Section with Figma-style Interface
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#141414] via-pink-950/10 to-[#141414] text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Design-first badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-500/30 rounded-full px-4 py-2 mb-8"
            >
              <PenTool className="w-4 h-4 text-pink-400" />
              <span className="text-pink-400 text-sm font-medium">
                Design-First Approach
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Design That <span className="text-mustard">Converts</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              User-centered design that turns visitors into customers. Research-driven,
              data-informed, beautiful interfaces that work.
            </p>

            {/* Key stats */}
            <div className="flex flex-wrap gap-8 mb-10">
              <div>
                <div className="text-3xl font-bold text-mustard">40%</div>
                <div className="text-sm text-gray-400">
                  Higher Conversion Rates
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-mustard">90+</div>
                <div className="text-sm text-gray-400">Accessibility Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-mustard">2-3</div>
                <div className="text-sm text-gray-400">Revision Rounds</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-mustard text-black px-8 py-4 rounded-lg font-semibold hover:bg-mustard/90 transition-colors"
              >
                Start Design Project
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

          {/* Right: Figma-style Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden shadow-2xl">
              {/* Top toolbar */}
              <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Layout className="w-4 h-4" />
                    <span>Mobile App — Screens</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-purple-500 rounded text-xs text-white">
                    Share
                  </div>
                </div>
              </div>

              {/* Design canvas */}
              <div className="flex">
                {/* Left sidebar - layers */}
                <div className="w-48 bg-gray-850 border-r border-gray-700 p-3 bg-gray-800/50">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    Layers
                  </div>
                  <div className="space-y-1">
                    {["Header", "Hero Section", "Features", "CTA Button"].map(
                      (layer, i) => (
                        <div
                          key={i}
                          className={`px-2 py-1.5 rounded text-xs ${
                            i === 0
                              ? "bg-purple-500/20 text-purple-300"
                              : "text-gray-400 hover:bg-gray-700/50"
                          }`}
                        >
                          {layer}
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Canvas area */}
                <div className="flex-1 p-8 bg-gray-900 min-h-[300px] flex items-center justify-center">
                  {/* Phone mockup */}
                  <div className="w-40 h-72 bg-white rounded-2xl p-2 shadow-lg">
                    <div className="w-full h-full bg-gray-50 rounded-xl overflow-hidden">
                      {/* App preview */}
                      <div className="h-8 bg-mustard/20 flex items-center px-3">
                        <div className="w-16 h-2 bg-mustard/40 rounded" />
                      </div>
                      <div className="p-3 space-y-2">
                        <div className="w-full h-16 bg-gray-200 rounded-lg" />
                        <div className="w-3/4 h-2 bg-gray-300 rounded" />
                        <div className="w-1/2 h-2 bg-gray-200 rounded" />
                        <div className="w-full h-8 bg-mustard rounded-lg mt-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right sidebar - properties */}
                <div className="w-48 bg-gray-850 border-l border-gray-700 p-3 bg-gray-800/50">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    Design
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Fill</div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-mustard" />
                        <span className="text-xs text-gray-300">#F5A623</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Font</div>
                      <div className="text-xs text-gray-300">Inter • 16px</div>
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

// Design System Preview Section
function DesignSystemSection() {
  const colors = [
    { name: "Primary", hex: "#F5A623", class: "bg-mustard" },
    { name: "Dark", hex: "#141414", class: "bg-[#141414]" },
    { name: "Success", hex: "#22C55E", class: "bg-green-500" },
    { name: "Error", hex: "#EF4444", class: "bg-red-500" },
    { name: "Gray 100", hex: "#F3F4F6", class: "bg-gray-100" },
    { name: "Gray 500", hex: "#6B7280", class: "bg-gray-500" },
  ];

  return (
    <AnimatedSection className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            We Deliver <span className="text-mustard">Design Systems</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Not just pretty pictures — complete systems with colors, typography,
            components, and guidelines your team can use.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-12">
          {/* Color palette */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-6 h-6 text-mustard" />
              <h3 className="text-xl font-bold text-[#141414]">Color Palette</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {colors.map((color, index) => (
                <div key={index}>
                  <div
                    className={`w-full h-16 rounded-lg ${color.class} mb-2`}
                  />
                  <div className="text-sm font-medium text-[#141414]">
                    {color.name}
                  </div>
                  <div className="text-xs text-gray-500">{color.hex}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-mustard" />
              <h3 className="text-xl font-bold text-[#141414]">Typography</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-4xl font-bold text-[#141414]">
                  Display Heading
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Inter Bold • 48px • -2% tracking
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-[#141414]">
                  Section Heading
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Inter Semibold • 24px
                </div>
              </div>
              <div>
                <div className="text-base text-gray-600">
                  Body text for paragraphs and descriptions. Clear and readable
                  at any size.
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Inter Regular • 16px • 1.6 line height
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Component preview */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 bg-[#141414] rounded-2xl p-8"
        >
          <h3 className="text-white font-bold mb-6">Component Library</h3>
          <div className="flex flex-wrap gap-4">
            <button className="bg-mustard text-black px-6 py-3 rounded-lg font-semibold">
              Primary Button
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
              Secondary
            </button>
            <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold">
              Outline
            </button>
            <button className="text-mustard px-6 py-3 font-semibold">
              Text Link →
            </button>
            <div className="bg-gray-800 rounded-lg px-4 py-2 text-gray-400 text-sm">
              Input Field
            </div>
            <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
              Success Badge
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Process Section (Design-specific)
function ProcessSection() {
  const steps = [
    {
      icon: Users,
      step: 1,
      title: "Research",
      description:
        "User interviews, competitor analysis, analytics review. We understand the problem before designing solutions.",
      color: "bg-blue-500",
    },
    {
      icon: Layout,
      step: 2,
      title: "Wireframes",
      description:
        "Low-fidelity layouts to explore structure and user flows. Fast iteration before committing to visuals.",
      color: "bg-purple-500",
    },
    {
      icon: Layers,
      step: 3,
      title: "Prototype",
      description:
        "Interactive prototypes you can click through and test with real users on real devices.",
      color: "bg-pink-500",
    },
    {
      icon: Eye,
      step: 4,
      title: "Test",
      description:
        "Usability testing with your target audience. Validate assumptions with real feedback.",
      color: "bg-orange-500",
    },
    {
      icon: Repeat,
      step: 5,
      title: "Refine",
      description:
        "Iterate based on feedback. Polish visual design and prepare dev-ready specifications.",
      color: "bg-green-500",
    },
  ];

  return (
    <AnimatedSection id="process" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            Our Design <span className="text-mustard">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Research-driven design that minimizes risk and maximizes impact.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="relative">
          {/* Timeline */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gray-200">
            <div className="absolute top-0 left-0 w-1/5 h-full bg-mustard" />
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-4 relative z-10`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-mustard font-bold mb-1">
                    Step {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#141414] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// What You Get Section (Deliverables)
function DeliverablesSection() {
  const deliverables = [
    {
      icon: Layout,
      title: "Wireframes",
      description:
        "Low-fidelity layouts showing structure, hierarchy, and user flows.",
    },
    {
      icon: MousePointer,
      title: "Interactive Prototypes",
      description:
        "Clickable prototypes in Figma that simulate the real experience.",
    },
    {
      icon: Palette,
      title: "Design System",
      description:
        "Complete component library with colors, typography, and guidelines.",
    },
    {
      icon: Layers,
      title: "All Screens",
      description:
        "Every screen and state — empty states, loading, errors, success.",
    },
    {
      icon: FileText,
      title: "Specifications",
      description:
        "Detailed specs for developers — spacing, sizes, interactions.",
    },
    {
      icon: Sparkles,
      title: "Assets",
      description:
        "All icons, images, and graphics exported in multiple formats.",
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            What You <span className="text-mustard">Receive</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything your development team needs to build pixel-perfect
            implementations.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex gap-4"
            >
              <div className="w-12 h-12 bg-mustard/10 rounded-lg flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-mustard" />
              </div>
              <div>
                <h3 className="font-bold text-[#141414] mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Tools Section
function ToolsSection() {
  const tools = [
    { name: "Figma", description: "Primary design & prototyping tool" },
    { name: "FigJam", description: "Collaborative brainstorming" },
    { name: "Principle", description: "Complex micro-animations" },
    { name: "Maze", description: "Unmoderated usability testing" },
    { name: "Hotjar", description: "Heatmaps & session recordings" },
    { name: "Lottie", description: "Animation implementation" },
  ];

  return (
    <AnimatedSection className="py-24 bg-[#141414] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tools We <span className="text-mustard">Use</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Industry-standard tools that integrate with your development
            workflow.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700 hover:border-mustard/30 transition-colors"
            >
              <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-3">
                <PenTool className="w-6 h-6 text-mustard" />
              </div>
              <h3 className="font-bold text-white mb-1">{tool.name}</h3>
              <p className="text-xs text-gray-400">{tool.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Design Philosophy Section
function PhilosophySection() {
  const principles = [
    {
      icon: Users,
      title: "User-Centered",
      description:
        "Every design decision starts with the user. We research, test, and validate before finalizing.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description:
        "Beautiful design that doesn't convert is just decoration. We focus on business outcomes.",
    },
    {
      icon: Lightbulb,
      title: "Accessible",
      description:
        "WCAG 2.1 compliant designs that work for everyone — good design is inclusive design.",
    },
    {
      icon: Repeat,
      title: "Systematic",
      description:
        "Reusable components and patterns that scale. Consistency across your entire product.",
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            Our Design <span className="text-mustard">Philosophy</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#141414] rounded-xl flex items-center justify-center shrink-0">
                  <principle.icon className="w-7 h-7 text-mustard" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#141414] mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600">{principle.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Portfolio Preview Section
function PortfolioSection() {
  return (
    <AnimatedSection className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <span className="text-mustard font-medium text-sm uppercase tracking-wider">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mt-2 mb-6">
            Design Portfolio
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { title: "E-Commerce App", type: "Mobile App Design" },
            { title: "SaaS Dashboard", type: "Web Application" },
            { title: "Banking App", type: "Mobile App Design" },
          ].map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-48 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <Layout className="w-12 h-12 text-gray-300" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-[#141414]/0 group-hover:bg-[#141414]/80 transition-colors flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project →
                  </span>
                </div>
              </div>
              <h3 className="font-bold text-[#141414]">{project.title}</h3>
              <p className="text-sm text-gray-500">{project.type}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center mt-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[#141414] font-semibold hover:text-mustard transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "Do you only design, or can you build too?",
      answer:
        "We do both. While this page focuses on design, our team includes developers who can take designs straight into production. Most clients work with us for both design and development to ensure seamless execution.",
    },
    {
      question: "How many design revisions are included?",
      answer:
        "We typically include 2-3 rounds of revisions per phase. Our collaborative process with regular check-ins usually means we nail the direction early, but we're flexible if more iteration is needed.",
    },
    {
      question: "What deliverables will I receive?",
      answer:
        "You'll receive Figma files with all screens, a component library, interactive prototypes, design specifications, and exported assets. Everything your team needs to implement the designs accurately.",
    },
    {
      question: "Do you follow accessibility guidelines?",
      answer:
        "Yes, we design with WCAG 2.1 guidelines in mind. This includes proper color contrast, touch target sizes, screen reader compatibility, and keyboard navigation. Accessible design is good design for everyone.",
    },
    {
      question: "How do you handle user testing?",
      answer:
        "We can facilitate moderated testing sessions with your target users, or set up unmoderated tests using tools like Maze. We analyze results and provide recommendations for design improvements.",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your{" "}
            <span className="text-mustard">User Experience</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how design can transform your product. Free
            initial consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-mustard text-black px-8 py-4 rounded-lg font-semibold hover:bg-mustard/90 transition-colors"
            >
              Start Design Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function UIUXDesignPage() {
  return (
    <main>
      <HeroSection />
      <DesignSystemSection />
      <ProcessSection />
      <DeliverablesSection />
      <ToolsSection />
      <PhilosophySection />
      <PortfolioSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
