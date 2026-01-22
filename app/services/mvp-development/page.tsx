"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Rocket,
  CheckCircle2,
  XCircle,
  Clock,
  DollarSign,
  Users,
  RefreshCw,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  TrendingUp,
  Calendar,
  Star,
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

// Hero Section - Timeline focused
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#141414] via-emerald-950/10 to-[#141414] text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Rocket trail effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-1/4 right-1/4 w-2 h-64 bg-gradient-to-b from-mustard to-transparent rounded-full transform rotate-45" />
        <div className="absolute top-1/3 right-1/3 w-1 h-48 bg-gradient-to-b from-mustard/50 to-transparent rounded-full transform rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Startup badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-8"
            >
              <Rocket className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">
                For Startups & Founders
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Idea to <span className="text-mustard">App Store</span>
              <br />
              in 8 Weeks
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              Validate your idea fast with a focused MVP. We build the 20% of
              features that deliver 80% of the value — nothing more, nothing
              less.
            </p>

            {/* Key value props */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-mustard" />
                <span className="text-gray-300">6-12 weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-mustard" />
                <span className="text-gray-300">From $15K</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-mustard" />
                <span className="text-gray-300">Scale-ready code</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-mustard text-black px-8 py-4 rounded-lg font-semibold hover:bg-mustard/90 transition-colors"
              >
                Launch Your MVP
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#timeline"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                See Timeline
              </Link>
            </div>
          </motion.div>

          {/* Right: Week counter visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Central week display */}
              <div className="w-72 h-72 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-mustard/20 to-emerald-500/20 rounded-full animate-pulse" />
                <div className="absolute inset-4 bg-[#141414] rounded-full flex flex-col items-center justify-center border border-gray-700">
                  <span className="text-7xl font-bold text-mustard">8</span>
                  <span className="text-xl text-gray-400">weeks</span>
                  <span className="text-sm text-gray-500 mt-2">
                    idea → launch
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 left-10 bg-gray-800 rounded-lg px-3 py-2 text-sm border border-gray-700">
                <span className="text-emerald-400">Week 1-2:</span> Discovery
              </div>
              <div className="absolute top-20 -right-4 bg-gray-800 rounded-lg px-3 py-2 text-sm border border-gray-700">
                <span className="text-blue-400">Week 3-4:</span> Design
              </div>
              <div className="absolute bottom-20 -left-4 bg-gray-800 rounded-lg px-3 py-2 text-sm border border-gray-700">
                <span className="text-purple-400">Week 5-7:</span> Build
              </div>
              <div className="absolute -bottom-4 right-10 bg-gray-800 rounded-lg px-3 py-2 text-sm border border-gray-700">
                <span className="text-mustard">Week 8:</span> Launch
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Timeline Section
function TimelineSection() {
  const phases = [
    {
      week: "Week 1-2",
      title: "Discovery",
      color: "bg-emerald-500",
      tasks: [
        "Define your vision and success metrics",
        "Map user personas and journeys",
        "Prioritize features ruthlessly",
        "Technical architecture planning",
      ],
    },
    {
      week: "Week 3-4",
      title: "Design",
      color: "bg-blue-500",
      tasks: [
        "Wireframes and user flows",
        "Visual design and brand application",
        "Interactive prototype",
        "Design review and feedback",
      ],
    },
    {
      week: "Week 5-7",
      title: "Build",
      color: "bg-purple-500",
      tasks: [
        "Agile sprints with weekly demos",
        "Frontend and backend development",
        "API integrations",
        "Continuous testing",
      ],
    },
    {
      week: "Week 8",
      title: "Launch",
      color: "bg-mustard",
      tasks: [
        "Final QA and bug fixes",
        "App Store / Play Store submission",
        "Launch support",
        "Post-launch monitoring",
      ],
    },
  ];

  return (
    <AnimatedSection id="timeline" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            8-Week <span className="text-mustard">Timeline</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven process that gets you from idea to launched product fast.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="relative">
          {/* Timeline connector */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gray-200" />

          <div className="grid lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative">
                {/* Phase card */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-mustard/30 transition-colors">
                  {/* Week badge */}
                  <div
                    className={`inline-flex items-center gap-2 ${phase.color} text-white rounded-full px-3 py-1 text-sm font-medium mb-4`}
                  >
                    <Calendar className="w-4 h-4" />
                    {phase.week}
                  </div>

                  <h3 className="text-2xl font-bold text-[#141414] mb-4">
                    {phase.title}
                  </h3>

                  <ul className="space-y-2">
                    {phase.tasks.map((task, taskIndex) => (
                      <li
                        key={taskIndex}
                        className="flex items-start gap-2 text-gray-600 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline dot */}
                <div
                  className={`hidden lg:block absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 ${phase.color} rounded-full border-4 border-white`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// What's Included / Not Included Section
function IncludedSection() {
  const included = [
    "Core features only — no bloat",
    "Clean, scalable codebase",
    "iOS & Android apps (React Native)",
    "Basic backend & database",
    "User authentication",
    "Basic analytics integration",
    "App Store submission",
    "30 days post-launch support",
  ];

  const notIncluded = [
    "Complex admin panels",
    "Advanced reporting dashboards",
    "Multiple third-party integrations",
    "Multi-language support",
    "Advanced security features",
    "Custom animations",
  ];

  return (
    <AnimatedSection className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            What&apos;s in an <span className="text-mustard">MVP</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We focus on what matters for launch. Everything else can come later.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {/* Included */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 border border-green-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-[#141414]">
                What&apos;s Included
              </h3>
            </div>
            <ul className="space-y-3">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not Included */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <XCircle className="w-6 h-6 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-[#141414]">
                Not in MVP (Add Later)
              </h3>
            </div>
            <ul className="space-y-3">
              {notIncluded.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span className="text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500 bg-gray-50 rounded-lg p-4">
              These features are important — just not for launch. We architect
              the code so they can be added easily after you validate.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Perfect For Section
function PerfectForSection() {
  const audiences = [
    {
      icon: Lightbulb,
      title: "First-time Founders",
      description:
        "You have an idea and need to validate it with real users before raising or building further.",
    },
    {
      icon: TrendingUp,
      title: "Seed-Stage Startups",
      description:
        "You've raised a small round and need a working product to test market fit and attract more funding.",
    },
    {
      icon: DollarSign,
      title: "Bootstrapped Builders",
      description:
        "You're funding this yourself and need to be smart about where every dollar goes.",
    },
    {
      icon: RefreshCw,
      title: "Pivoting Companies",
      description:
        "You're testing a new direction and need a quick way to validate before committing fully.",
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-[#141414] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Perfect For <span className="text-mustard">You</span> If...
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-mustard/20 rounded-xl flex items-center justify-center shrink-0">
                  <audience.icon className="w-7 h-7 text-mustard" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-gray-400">{audience.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Pricing Section
function PricingSection() {
  return (
    <AnimatedSection className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] mb-6">
            MVP <span className="text-mustard">Investment</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing. No surprises. Flexible payment terms for
            startups.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="max-w-lg mx-auto">
          <div className="bg-[#141414] rounded-3xl p-10 text-white text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-mustard/10 rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="text-mustard text-sm font-medium uppercase tracking-wider mb-2">
                Starting From
              </div>
              <div className="text-6xl font-bold mb-2">$15,000</div>
              <div className="text-gray-400 mb-8">
                6-12 weeks depending on complexity
              </div>

              <div className="space-y-4 text-left mb-10">
                {[
                  "Fixed price — no hourly surprises",
                  "Milestone-based payments (3 installments)",
                  "Equity arrangements available for right projects",
                  "100% refund if we don't deliver",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-mustard shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-mustard text-black px-8 py-4 rounded-lg font-semibold hover:bg-mustard/90 transition-colors w-full justify-center"
              >
                Get Your Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            Final price depends on features, complexity, and integrations. We
            provide detailed estimates after discovery.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Testimonial Section (placeholder)
function TestimonialSection() {
  return (
    <AnimatedSection className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center">
          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-6 h-6 text-mustard fill-mustard"
              />
            ))}
          </div>

          <blockquote className="text-2xl md:text-3xl font-medium text-[#141414] mb-8">
            &quot;They helped us go from napkin sketch to App Store in just 10
            weeks. The MVP helped us raise our seed round — investors loved
            seeing a working product.&quot;
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-gray-500" />
            </div>
            <div className="text-left">
              <div className="font-bold text-[#141414]">Future Client</div>
              <div className="text-gray-500 text-sm">
                Founder, Stealth Startup
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "How long does MVP development take?",
      answer:
        "Most MVPs take 6-12 weeks from kickoff to launch, depending on complexity. Simple products can launch in 6-8 weeks, while more complex applications may take 10-12 weeks. We'll give you a specific timeline after our scoping session.",
    },
    {
      question: "What if I need to pivot after launch?",
      answer:
        "Pivots are part of the startup journey. We build with flexibility in mind — clean code, modular architecture, and good documentation. We offer ongoing development support and can help you iterate quickly based on user feedback.",
    },
    {
      question: "Do you help with fundraising?",
      answer:
        "While we're not investors, we've helped many founders create investor-ready products and pitch materials. A working MVP with real users is one of the best ways to demonstrate traction to investors. We can also advise on technical due diligence questions.",
    },
    {
      question: "What happens after MVP launch?",
      answer:
        "30 days of post-launch support is included. After that, most clients continue working with us to iterate based on user feedback, add features, and scale. We offer flexible ongoing development arrangements.",
    },
    {
      question: "Can I add features later?",
      answer:
        "Absolutely — that's the point of an MVP. We specifically architect the code to make adding features easy. The 'Not Included' features can all be added post-launch once you've validated your core assumptions.",
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
          <Rocket className="w-16 h-16 text-mustard mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-mustard">Launch</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your idea. Free 30-minute consultation to scope
            your MVP and provide a timeline.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-mustard text-black px-8 py-4 rounded-lg font-semibold hover:bg-mustard/90 transition-colors"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              See Past MVPs
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function MVPDevelopmentPage() {
  return (
    <main>
      <HeroSection />
      <TimelineSection />
      <IncludedSection />
      <PerfectForSection />
      <PricingSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
