"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  Home,
  LucideIcon,
} from "lucide-react";
import {
  Container,
  FadeInUp,
  DecorativeRing,
} from "@/components/ui";

// Types
export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface RelatedService {
  name: string;
  href: string;
  description: string;
}

export interface ServicePageProps {
  serviceName: string;
  serviceTagline: string;
  serviceDescription: string[];
  keyBenefits: string[];
  features: ServiceFeature[];
  process: ProcessStep[];
  technologies: string[];
  faqs: FAQ[];
  relatedServices: RelatedService[];
}

// FAQ Accordion Item
function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="font-medium text-gray-900 group-hover:text-[#F5A623] transition-colors pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-gray-600 leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}

export function ServicePageTemplate({
  serviceName,
  serviceTagline,
  serviceDescription,
  keyBenefits,
  features,
  process,
  technologies,
  faqs,
  relatedServices,
}: ServicePageProps) {
  const overviewRef = React.useRef<HTMLElement>(null);
  const featuresRef = React.useRef<HTMLElement>(null);
  const processRef = React.useRef<HTMLElement>(null);
  const techRef = React.useRef<HTMLElement>(null);
  const faqRef = React.useRef<HTMLElement>(null);
  const relatedRef = React.useRef<HTMLElement>(null);
  const ctaRef = React.useRef<HTMLElement>(null);

  const overviewInView = useInView(overviewRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const techInView = useInView(techRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });
  const relatedInView = useInView(relatedRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const [openFAQ, setOpenFAQ] = React.useState<number | null>(0);

  return (
    <main className="min-h-screen">
      {/* SECTION 1: Hero */}
      <section className="relative bg-[#141414] pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[800px] h-[600px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(245, 166, 35, 0.4) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
          <DecorativeRing position="top-right" size={300} opacity={0.03} />
          <DecorativeRing position="bottom-left" size={400} opacity={0.04} />
        </div>

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <FadeInUp>
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#F5A623]">{serviceName}</span>
            </nav>
          </FadeInUp>

          <div className="max-w-3xl">
            <FadeInUp delay={0.1}>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-4">
                Our Services
              </span>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                {serviceName}
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed mb-8">
                {serviceTagline}
              </p>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F5A623] hover:bg-[#FFB84D] text-[#141414] font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#F5A623]/20 group"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeInUp>
          </div>
        </Container>
      </section>

      {/* SECTION 2: Overview */}
      <section ref={overviewRef} className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
                Overview
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
                What We Deliver
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {serviceDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Right - Key Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-6">
                  Key Benefits
                </h3>
                <ul className="space-y-4">
                  {keyBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F5A623]/10 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-[#F5A623]" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: Features */}
      <section ref={featuresRef} className="bg-gray-50 py-20 lg:py-28">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3"
            >
              Features
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight"
            >
              What&apos;s Included
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 4: Process */}
      <section ref={processRef} className="bg-white py-20 lg:py-28">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3"
            >
              Our Process
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight"
            >
              How We Work
            </motion.h2>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={processInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-[#F5A623] origin-left"
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {process.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-white border-4 border-[#F5A623] flex items-center justify-center mb-6 mx-auto lg:mx-0">
                    <span className="font-heading text-3xl font-bold text-[#F5A623]">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="text-center lg:text-left">
                    <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5: Technologies */}
      <section ref={techRef} className="bg-[#141414] py-20 lg:py-28">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={techInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3"
            >
              Tech Stack
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={techInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight"
            >
              Technologies We Use
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={techInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-white/80 text-sm font-medium hover:bg-white/10 hover:border-[#F5A623]/50 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* SECTION 6: FAQ */}
      <section ref={faqRef} className="bg-white py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3"
              >
                FAQ
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight"
              >
                Common Questions
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-6 lg:p-8"
            >
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === index}
                  onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
                />
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* SECTION 7: Related Services */}
      <section ref={relatedRef} className="bg-gray-50 py-20 lg:py-28">
        <Container>
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={relatedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3"
            >
              Explore More
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={relatedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight"
            >
              Related Services
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                >
                  <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#F5A623] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-[#F5A623] text-sm font-medium group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 8: CTA */}
      <section ref={ctaRef} className="bg-[#0a0a0a] py-20 lg:py-28 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              opacity: [0.15, 0.25, 0.15],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{
              backgroundColor: "#F5A623",
              filter: "blur(120px)",
            }}
          />
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3"
            >
              Get Started
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              Ready to Get Started?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-10"
            >
              Let&apos;s discuss your {serviceName.toLowerCase()} project and bring your vision to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F5A623] hover:bg-[#FFB84D] text-[#141414] font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#F5A623]/20 group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}
