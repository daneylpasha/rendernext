"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  Container,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui";

const faqs = [
  {
    question: "How long does it take to build an app?",
    answer:
      "Typically 8-12 weeks for an MVP, 3-6 months for a full-featured app. Timeline depends on complexity, features, and scope. We'll give you a realistic estimate after our discovery call.",
  },
  {
    question: "How much does app development cost?",
    answer:
      "Projects typically range from $10,000 to $100,000+ depending on complexity. We offer transparent pricing with no hidden fees. Get a custom quote based on your specific requirements.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Absolutely. We specialize in helping startups launch MVPs quickly and affordably. Many of our projects are with founders validating their first product idea.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We primarily use React Native for mobile apps (iOS & Android from one codebase), Next.js for web applications, and Node.js for backends. We also integrate AI solutions using OpenAI and other LLM providers.",
  },
  {
    question: "Do I own the code?",
    answer:
      "Yes, 100%. You get full ownership of all source code, designs, and assets. No licensing fees, no lock-in. It's your product.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We offer ongoing maintenance and support packages. This includes bug fixes, updates, performance monitoring, and feature additions. We don't disappear after launch.",
  },
  {
    question: "Can you work with my existing team?",
    answer:
      "Yes. We offer staff augmentation services where our developers integrate with your team. We also collaborate well with existing designers, PMs, and other vendors.",
  },
  {
    question: "Where are you located?",
    answer:
      "We're based in Austin, Texas, but work with clients worldwide. Most of our communication is async-friendly, with scheduled calls for key milestones.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base lg:text-lg font-bold text-gray-900 leading-snug pr-8 group-hover:text-[#F5A623] transition-colors duration-200">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className={`w-5 h-5 transition-colors duration-200 ${isOpen ? "text-[#F5A623]" : "text-gray-400"}`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 font-normal pb-6 leading-relaxed max-w-3xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <FadeInUp>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
              FAQ
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Common Questions
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-gray-600 font-normal text-lg leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about working with us.
            </p>
          </FadeInUp>
        </div>

        {/* FAQ Accordion */}
        <StaggerContainer
          staggerDelay={0.05}
          delayChildren={0.2}
          className="max-w-3xl mx-auto mt-12"
        >
          {faqs.map((faq, index) => (
            <StaggerItem key={faq.question}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
