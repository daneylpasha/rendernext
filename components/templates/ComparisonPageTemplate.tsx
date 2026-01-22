"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  ChevronDown,
  ChevronRight,
  Home,
  List,
  ThumbsUp,
  ThumbsDown,
  Lightbulb,
  HelpCircle,
  LucideIcon,
} from "lucide-react";
import {
  Container,
  FadeIn,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  DecorativeRing,
} from "@/components/ui";

// ============================================================================
// Types
// ============================================================================

export interface ComparisonItem {
  name: string;
  description: string;
  icon?: LucideIcon;
  color?: string; // Tailwind color like "blue" or "green"
}

export interface TableColumn {
  key: string;
  label: string;
}

export interface TableRow {
  feature: string;
  values: Record<string, string | boolean | React.ReactNode>;
  highlight?: boolean;
}

export interface ComparisonSection {
  id: string;
  title: string;
  description?: string;
  content: React.ReactNode;
}

export interface ProConItem {
  text: string;
  details?: string;
}

export interface ProsCons {
  name: string;
  pros: ProConItem[];
  cons: ProConItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RecommendationScenario {
  title: string;
  description: string;
  recommendation: string;
  icon?: LucideIcon;
}

export interface CTAProps {
  headline: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export interface ComparisonPageProps {
  // Hero section
  title: string;
  subtitle: string;
  description: string;
  items: ComparisonItem[];
  breadcrumbs?: { label: string; href: string }[];

  // Table of contents
  sections: ComparisonSection[];

  // Comparison table
  tableColumns: TableColumn[];
  tableRows: TableRow[];
  tableCaption?: string;

  // Pros and cons
  prosConsData: ProsCons[];

  // Recommendation
  recommendationTitle?: string;
  recommendationDescription?: string;
  scenarios: RecommendationScenario[];
  finalVerdict?: string;

  // FAQ
  faqs: FAQItem[];

  // CTA
  cta: CTAProps;
}

// ============================================================================
// Sub-components
// ============================================================================

function TableOfContents({
  sections,
  activeSection,
}: {
  sections: ComparisonSection[];
  activeSection: string;
}) {
  return (
    <nav className="sticky top-24 hidden lg:block">
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <List className="w-5 h-5 text-[#F5A623]" />
          <h3 className="font-heading text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Table of Contents
          </h3>
        </div>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block text-sm py-1.5 px-3 rounded-lg transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-[#F5A623]/10 text-[#F5A623] font-medium"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function ComparisonTable({
  columns,
  rows,
  caption,
}: {
  columns: TableColumn[];
  rows: TableRow[];
  caption?: string;
}) {
  const tableRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(tableRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={tableRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="overflow-x-auto"
    >
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left py-4 px-6 font-heading font-semibold text-gray-900 border-b-2 border-gray-200">
              Feature
            </th>
            {columns.map((column) => (
              <th
                key={column.key}
                className="text-center py-4 px-6 font-heading font-semibold text-gray-900 border-b-2 border-gray-200"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className={`border-b border-gray-100 ${
                row.highlight ? "bg-[#F5A623]/5" : "hover:bg-gray-50"
              } transition-colors`}
            >
              <td className="py-4 px-6 text-gray-700 font-medium">
                {row.feature}
              </td>
              {columns.map((column) => {
                const value = row.values[column.key];
                return (
                  <td key={column.key} className="py-4 px-6 text-center">
                    {typeof value === "boolean" ? (
                      value ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-600">{value}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && (
        <p className="text-sm text-gray-500 mt-4 text-center italic">
          {caption}
        </p>
      )}
    </motion.div>
  );
}

function ProsConsList({ data }: { data: ProsCons[] }) {
  const listRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(listRef, { once: true, margin: "-100px" });

  return (
    <div ref={listRef} className="grid md:grid-cols-2 gap-8">
      {data.map((item, itemIndex) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden"
        >
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h4 className="font-heading text-lg font-semibold text-gray-900">
              {item.name}
            </h4>
          </div>
          <div className="p-6 space-y-6">
            {/* Pros */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ThumbsUp className="w-4 h-4 text-green-500" />
                <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                  Pros
                </span>
              </div>
              <ul className="space-y-2">
                {item.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-gray-700">{pro.text}</span>
                      {pro.details && (
                        <p className="text-sm text-gray-500 mt-0.5">
                          {pro.details}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ThumbsDown className="w-4 h-4 text-red-400" />
                <span className="text-sm font-semibold text-red-500 uppercase tracking-wide">
                  Cons
                </span>
              </div>
              <ul className="space-y-2">
                {item.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-gray-700">{con.text}</span>
                      {con.details && (
                        <p className="text-sm text-gray-500 mt-0.5">
                          {con.details}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function RecommendationSection({
  title,
  description,
  scenarios,
  finalVerdict,
}: {
  title?: string;
  description?: string;
  scenarios: RecommendationScenario[];
  finalVerdict?: string;
}) {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div ref={sectionRef}>
      {(title || description) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {title && (
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-gray-600 leading-relaxed">{description}</p>
          )}
        </motion.div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {scenarios.map((scenario, index) => {
          const Icon = scenario.icon || Lightbulb;
          return (
            <motion.div
              key={scenario.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-[#F5A623]/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-[#F5A623]" />
              </div>
              <h4 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                {scenario.title}
              </h4>
              <p className="text-gray-600 text-sm mb-4">{scenario.description}</p>
              <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
                <ArrowRight className="w-4 h-4 text-[#F5A623]" />
                <span className="text-sm font-medium text-[#F5A623]">
                  {scenario.recommendation}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {finalVerdict && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#F5A623]/10 border border-[#F5A623]/20 rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#F5A623] flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-gray-900 mb-2">
                Our Verdict
              </h4>
              <p className="text-gray-700 leading-relaxed">{finalVerdict}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function FAQAccordionItem({
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
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export function ComparisonPageTemplate({
  title,
  subtitle,
  description,
  items,
  breadcrumbs,
  sections,
  tableColumns,
  tableRows,
  tableCaption,
  prosConsData,
  recommendationTitle,
  recommendationDescription,
  scenarios,
  finalVerdict,
  faqs,
  cta,
}: ComparisonPageProps) {
  const [activeSection, setActiveSection] = React.useState(sections[0]?.id || "");
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(0);

  // Track active section on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) =>
        document.getElementById(section.id)
      );

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Section refs for animations
  const heroRef = React.useRef<HTMLElement>(null);
  const tableRef = React.useRef<HTMLDivElement>(null);
  const prosConsRef = React.useRef<HTMLDivElement>(null);
  const recommendationRef = React.useRef<HTMLDivElement>(null);
  const faqRef = React.useRef<HTMLDivElement>(null);
  const ctaRef = React.useRef<HTMLElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen">
      {/* SECTION 1: Hero */}
      <section
        ref={heroRef}
        className="relative bg-[#141414] pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden"
      >
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
          <FadeIn>
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link
                href="/"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
              {breadcrumbs?.map((crumb, index) => (
                <React.Fragment key={crumb.href}>
                  <ChevronRight className="w-4 h-4" />
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                </React.Fragment>
              ))}
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#F5A623]">{title}</span>
            </nav>
          </FadeIn>

          <div className="max-w-3xl">
            <FadeInUp delay={0.1}>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-4">
                {subtitle}
              </span>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                {title}
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed mb-8">
                {description}
              </p>
            </FadeInUp>

            {/* Comparison Items */}
            <FadeInUp delay={0.4}>
              <div className="flex flex-wrap gap-4">
                {items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3"
                    >
                      {Icon && (
                        <div className="w-8 h-8 rounded-lg bg-[#F5A623]/20 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-[#F5A623]" />
                        </div>
                      )}
                      <div>
                        <span className="text-white font-medium">{item.name}</span>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                      {index < items.length - 1 && (
                        <span className="text-gray-500 ml-2 hidden sm:inline">vs</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </FadeInUp>
          </div>
        </Container>
      </section>

      {/* Main Content with Sidebar */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar - Table of Contents */}
            <div className="lg:col-span-1">
              <TableOfContents sections={sections} activeSection={activeSection} />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-20">
              {/* Render each section */}
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-32">
                  <FadeInUp>
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                    {section.description && (
                      <p className="text-gray-600 leading-relaxed mb-8">
                        {section.description}
                      </p>
                    )}
                  </FadeInUp>
                  {section.content}
                </div>
              ))}

              {/* Comparison Table Section */}
              <div id="comparison-table" className="scroll-mt-32">
                <FadeInUp>
                  <h2 className="font-heading text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                    Feature Comparison
                  </h2>
                </FadeInUp>
                <ComparisonTable
                  columns={tableColumns}
                  rows={tableRows}
                  caption={tableCaption}
                />
              </div>

              {/* Pros/Cons Section */}
              <div id="pros-cons" ref={prosConsRef} className="scroll-mt-32">
                <FadeInUp>
                  <h2 className="font-heading text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                    Pros &amp; Cons
                  </h2>
                </FadeInUp>
                <ProsConsList data={prosConsData} />
              </div>

              {/* Recommendation Section */}
              <div id="recommendation" ref={recommendationRef} className="scroll-mt-32">
                <FadeInUp>
                  <h2 className="font-heading text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                    Our Recommendation
                  </h2>
                </FadeInUp>
                <RecommendationSection
                  title={recommendationTitle}
                  description={recommendationDescription}
                  scenarios={scenarios}
                  finalVerdict={finalVerdict}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} id="faq" className="bg-gray-50 py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/10 text-[#F5A623] text-sm font-medium mb-4">
                  <HelpCircle className="w-4 h-4" />
                  FAQ
                </div>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                  Frequently Asked Questions
                </h2>
              </FadeInUp>
            </div>

            <StaggerContainer className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
              {faqs.map((faq, index) => (
                <StaggerItem key={index}>
                  <FAQAccordionItem
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFAQ === index}
                    onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="bg-[#0a0a0a] py-20 lg:py-28 relative overflow-hidden"
      >
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
              {cta.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-10"
            >
              {cta.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href={cta.primaryButton.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F5A623] hover:bg-[#FFB84D] text-[#141414] font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#F5A623]/20 group"
              >
                {cta.primaryButton.text}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              {cta.secondaryButton && (
                <Link
                  href={cta.secondaryButton.href}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl transition-all duration-300 hover:border-white hover:bg-white/10"
                >
                  {cta.secondaryButton.text}
                </Link>
              )}
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default ComparisonPageTemplate;
