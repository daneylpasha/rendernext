"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Smartphone,
  Globe,
  Brain,
  Palette,
  Rocket,
  ShieldCheck,
  ArrowRight,
  Clock,
  Cpu,
  HeadphonesIcon,
  ChevronRight,
  HelpCircle,
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
    transition: { staggerChildren: 0.15 },
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
    <section className="relative bg-[#141414] text-white overflow-hidden">
      {/* Subtle mustard gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-mustard/5 via-transparent to-mustard/10" />

      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-10">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm text-gray-400 mb-8"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Services</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <span className="text-mustard font-medium text-sm uppercase tracking-wider">
            What We Do
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold font-heading mt-4 mb-6">
            Our Services
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl">
            End-to-end digital product development. From concept to launch and
            beyond.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Services Grid Section
function ServicesGridSection() {
  const services = [
    {
      number: "01",
      icon: Smartphone,
      name: "Mobile App Development",
      tagline: "iOS, Android & Cross-platform apps",
      description:
        "Native performance with React Native. One codebase, two platforms, seamless user experience.",
      tags: ["React Native", "Expo", "TypeScript"],
      link: "/services/mobile-development",
    },
    {
      number: "02",
      icon: Globe,
      name: "Web App Development",
      tagline: "Next.js, React & Node.js solutions",
      description:
        "Fast, scalable, SEO-optimized web applications built with modern frameworks.",
      tags: ["Next.js", "React", "Node.js"],
      link: "/services/web-development",
    },
    {
      number: "03",
      icon: Brain,
      name: "AI Solutions",
      tagline: "Chatbots, automation & LLM integration",
      description:
        "Intelligent features that set your product apart. From chatbots to workflow automation.",
      tags: ["OpenAI", "Claude", "LangChain"],
      link: "/services/ai-solutions",
    },
    {
      number: "04",
      icon: Palette,
      name: "UI/UX Design",
      tagline: "User-centered design that converts",
      description:
        "Research-driven design that looks beautiful and achieves your business goals.",
      tags: ["Figma", "Prototyping", "Design Systems"],
      link: "/services/ui-ux-design",
    },
    {
      number: "05",
      icon: Rocket,
      name: "MVP Development",
      tagline: "Validate your idea in weeks",
      description:
        "Launch fast without cutting corners. Investor-ready MVPs in 8-12 weeks.",
      tags: ["React Native", "Next.js", "Firebase"],
      link: "/services/mvp-development",
    },
    {
      number: "06",
      icon: ShieldCheck,
      name: "Maintenance & Support",
      tagline: "Keep your product running smoothly",
      description:
        "Ongoing support, bug fixes, updates, and monitoring. We don't disappear after launch.",
      tags: ["Monitoring", "CI/CD", "Cloud"],
      link: "/services/maintenance",
    },
  ];

  return (
    <AnimatedSection className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={service.link} className="block h-full">
                <div className="relative bg-white border border-gray-200 rounded-2xl p-8 h-full hover:shadow-xl hover:border-mustard transition-all duration-300 group">
                  {/* Service number */}
                  <span className="absolute top-6 right-6 text-5xl font-heading font-bold text-mustard/20 group-hover:text-mustard/40 transition-colors">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-mustard/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-mustard/20 transition-colors">
                    <service.icon className="w-7 h-7 text-mustard" />
                  </div>

                  {/* Service name */}
                  <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">
                    {service.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-gray-600 text-base">{service.tagline}</p>

                  {/* Description */}
                  <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Learn More link */}
                  <div className="mt-6 flex items-center gap-2 text-mustard font-medium group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Why Work With Us Section
function WhyWorkWithUsSection() {
  const reasons = [
    {
      icon: Clock,
      title: "5+ Years Experience",
      description: "Proven track record building digital products",
    },
    {
      icon: Smartphone,
      title: "React Native Specialists",
      description: "Deep expertise in cross-platform mobile development",
    },
    {
      icon: Cpu,
      title: "AI Integration Experts",
      description: "Practical AI solutions that deliver real ROI",
    },
    {
      icon: HeadphonesIcon,
      title: "Post-Launch Support Included",
      description: "We don't disappear after your product goes live",
    },
  ];

  return (
    <AnimatedSection className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-gray-900 mb-4">
            Why Work With Us
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We bring expertise, dedication, and a genuine commitment to your
            success.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <reason.icon className="w-8 h-8 text-mustard" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-500 text-sm">{reason.description}</p>
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
          <HelpCircle className="w-12 h-12 text-mustard mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-white mb-6">
            Not Sure What You Need?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Book a free consultation and we&apos;ll help you figure out the
            right approach for your project.
          </p>
          <a
            href="https://calendly.com/rendernext/15min?back=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-mustard text-black px-8 py-4 rounded-lg font-semibold hover:bg-mustard/90 transition-colors"
          >
            Schedule a Call
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function ServicesPage() {
  return (
    <main>
      <HeroSection />
      <ServicesGridSection />
      <WhyWorkWithUsSection />
      <CTASection />
    </main>
  );
}
