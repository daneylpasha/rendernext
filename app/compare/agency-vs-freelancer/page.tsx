"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  User,
  DollarSign,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ChevronDown,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Scale,
  AlertTriangle,
  Target,
  Layers,
  HeartHandshake,
  Briefcase,
  Rocket,
  Settings,
  RefreshCw,
  MessageSquare,
  FileCheck,
  Award,
  HelpCircle,
  ArrowDown,
  Search,
  Wrench,
  Calendar,
  GitBranch,
  BadgeCheck,
} from "lucide-react";
import {
  Container,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui";

// Table of Contents data
const tableOfContents = [
  { id: "what-defines", title: "What Defines an Agency vs Freelancer" },
  { id: "agency-pros-cons", title: "Pros and Cons of Agencies" },
  { id: "freelancer-pros-cons", title: "Pros and Cons of Freelancers" },
  { id: "when-agency", title: "When to Choose an Agency" },
  { id: "when-freelancer", title: "When to Choose a Freelancer" },
  { id: "cost-comparison", title: "Cost Comparison" },
  { id: "risk-comparison", title: "Risk Comparison" },
  { id: "what-to-look-for", title: "What to Look For" },
  { id: "comparison-table", title: "Full Comparison Table" },
  { id: "faq", title: "FAQ" },
];

// Agency Pros and Cons
const agencyPros = [
  {
    text: "Dedicated team with diverse expertise",
    description: "Access to designers, developers, QA, and project managers under one roof.",
  },
  {
    text: "Structured processes and methodologies",
    description: "Established workflows, code reviews, and quality assurance practices.",
  },
  {
    text: "Scalability for growing projects",
    description: "Easily add more resources as your project scope expands.",
  },
  {
    text: "Reliability and business continuity",
    description: "No single point of failure; project continues if someone leaves.",
  },
  {
    text: "Professional project management",
    description: "Dedicated PMs handle timelines, communication, and deliverables.",
  },
  {
    text: "Legal protection and contracts",
    description: "Established business entities with proper legal frameworks.",
  },
  {
    text: "Long-term partnership potential",
    description: "Ongoing support, maintenance, and iterative improvements.",
  },
];

const agencyCons = [
  {
    text: "Higher upfront costs",
    description: "Premium pricing reflects team overhead and business operations.",
  },
  {
    text: "Potentially longer onboarding",
    description: "More stakeholders mean more discovery and planning time.",
  },
  {
    text: "Less direct developer access",
    description: "Communication often flows through project managers.",
  },
  {
    text: "Minimum project size requirements",
    description: "Many agencies have budget thresholds for new projects.",
  },
];

// Freelancer Pros and Cons
const freelancerPros = [
  {
    text: "Lower hourly rates",
    description: "No business overhead means competitive pricing.",
  },
  {
    text: "Direct communication",
    description: "Work directly with the person writing your code.",
  },
  {
    text: "Flexibility and availability",
    description: "Often more adaptable to urgent requests and schedule changes.",
  },
  {
    text: "Specialized niche expertise",
    description: "Deep knowledge in specific technologies or domains.",
  },
  {
    text: "Faster for small projects",
    description: "Less bureaucracy means quicker kickoffs for simple tasks.",
  },
];

const freelancerCons = [
  {
    text: "Single point of failure",
    description: "If they get sick or quit, your project stops.",
  },
  {
    text: "Limited capacity",
    description: "One person can only do so much; scaling requires hiring more.",
  },
  {
    text: "Quality varies significantly",
    description: "No standardized processes; results depend entirely on the individual.",
  },
  {
    text: "Limited skill breadth",
    description: "May excel at coding but lack design, DevOps, or PM skills.",
  },
  {
    text: "Less accountability",
    description: "Harder to enforce deadlines and quality without formal contracts.",
  },
  {
    text: "Communication challenges",
    description: "Time zones, availability, and responsiveness can be inconsistent.",
  },
];

// When to choose agency
const agencyUseCases = [
  {
    icon: Rocket,
    title: "Building an MVP or Full Product",
    description:
      "When you need end-to-end development from concept to launch with design, development, and deployment.",
  },
  {
    icon: Layers,
    title: "Complex, Multi-Platform Projects",
    description:
      "Applications requiring web, mobile, backend, and integrations that need coordinated team effort.",
  },
  {
    icon: Shield,
    title: "Enterprise or Regulated Industries",
    description:
      "Healthcare, fintech, or enterprise apps requiring compliance, security audits, and documentation.",
  },
  {
    icon: Calendar,
    title: "Long-Term Development Partnerships",
    description:
      "Ongoing product development with continuous iterations, maintenance, and support.",
  },
  {
    icon: Users,
    title: "When You Lack Technical Leadership",
    description:
      "Need guidance on architecture, technology choices, and best practices from experienced teams.",
  },
  {
    icon: Scale,
    title: "Projects Requiring Scalability",
    description:
      "When your project may need to quickly scale up resources as requirements grow.",
  },
];

// When to choose freelancer
const freelancerUseCases = [
  {
    icon: Wrench,
    title: "Small, Well-Defined Tasks",
    description:
      "Bug fixes, minor features, or simple integrations with clear requirements.",
  },
  {
    icon: DollarSign,
    title: "Very Limited Budget",
    description:
      "Early-stage startups or side projects where cost is the primary constraint.",
  },
  {
    icon: Target,
    title: "Specialized One-Off Work",
    description:
      "Need a specific skill for a short duration, like a mobile developer for an iOS update.",
  },
  {
    icon: Settings,
    title: "Technical Staff Augmentation",
    description:
      "You have a technical team lead who can manage and review the freelancer's work.",
  },
  {
    icon: Zap,
    title: "Quick Prototypes or POCs",
    description:
      "Validating an idea quickly before investing in full development.",
  },
];

// Cost comparison data
const costComparison = [
  {
    category: "Hourly Rates",
    agency: "$100 - $250/hr",
    freelancer: "$30 - $150/hr",
    notes: "Varies by location and expertise",
  },
  {
    category: "Simple App MVP",
    agency: "$50,000 - $150,000",
    freelancer: "$15,000 - $50,000",
    notes: "3-6 month timeline",
  },
  {
    category: "Medium Complexity App",
    agency: "$150,000 - $400,000",
    freelancer: "$50,000 - $150,000",
    notes: "6-12 month timeline",
  },
  {
    category: "Enterprise Solution",
    agency: "$400,000 - $1,000,000+",
    freelancer: "Typically not recommended",
    notes: "12+ months, multiple teams",
  },
  {
    category: "Maintenance (Monthly)",
    agency: "$5,000 - $20,000",
    freelancer: "$1,000 - $5,000",
    notes: "Ongoing support and updates",
  },
  {
    category: "Hidden Costs",
    agency: "Included in scope",
    freelancer: "Often requires separate hires",
    notes: "PM, QA, DevOps, design",
  },
];

// Risk comparison data
const riskComparison = [
  {
    risk: "Project Abandonment",
    agencyRisk: "Low",
    agencyColor: "green",
    freelancerRisk: "Medium-High",
    freelancerColor: "orange",
    description: "Agencies have multiple team members; freelancers can disappear.",
  },
  {
    risk: "Quality Inconsistency",
    agencyRisk: "Low",
    agencyColor: "green",
    freelancerRisk: "High",
    freelancerColor: "red",
    description: "Agencies have code reviews and QA; freelancer quality varies widely.",
  },
  {
    risk: "Missed Deadlines",
    agencyRisk: "Low-Medium",
    agencyColor: "green",
    freelancerRisk: "Medium-High",
    freelancerColor: "orange",
    description: "Professional PMs track timelines; freelancers may overcommit.",
  },
  {
    risk: "Communication Issues",
    agencyRisk: "Low",
    agencyColor: "green",
    freelancerRisk: "Medium",
    freelancerColor: "yellow",
    description: "Structured updates vs. variable availability.",
  },
  {
    risk: "IP/Legal Disputes",
    agencyRisk: "Very Low",
    agencyColor: "green",
    freelancerRisk: "Medium",
    freelancerColor: "yellow",
    description: "Agencies have standard contracts; freelancer terms vary.",
  },
  {
    risk: "Technical Debt",
    agencyRisk: "Low",
    agencyColor: "green",
    freelancerRisk: "High",
    freelancerColor: "red",
    description: "Code reviews prevent debt; solo work often accumulates it.",
  },
  {
    risk: "Scalability Challenges",
    agencyRisk: "Low",
    agencyColor: "green",
    freelancerRisk: "High",
    freelancerColor: "red",
    description: "Agencies scale teams; freelancers are bottlenecks.",
  },
];

// What to look for - Agency
const agencyChecklist = [
  {
    icon: FileCheck,
    title: "Portfolio and Case Studies",
    description: "Review past projects similar to yours in scope and industry.",
  },
  {
    icon: MessageSquare,
    title: "Communication Process",
    description: "Clear reporting cadence, tools, and escalation procedures.",
  },
  {
    icon: Users,
    title: "Team Composition",
    description: "Understand who will work on your project and their experience.",
  },
  {
    icon: GitBranch,
    title: "Development Methodology",
    description: "Agile, Scrum, or Kanban with clear sprint planning and demos.",
  },
  {
    icon: BadgeCheck,
    title: "Client References",
    description: "Talk to past clients about their experience and results.",
  },
  {
    icon: Shield,
    title: "Security and Compliance",
    description: "SOC 2, GDPR compliance, and secure development practices.",
  },
];

// What to look for - Freelancer
const freelancerChecklist = [
  {
    icon: Award,
    title: "Strong Portfolio",
    description: "Verified work samples that demonstrate relevant skills.",
  },
  {
    icon: MessageSquare,
    title: "Communication Skills",
    description: "Responsive, clear, and proactive in discussions.",
  },
  {
    icon: Clock,
    title: "Availability Commitment",
    description: "Dedicated hours per week and clear working schedule.",
  },
  {
    icon: FileCheck,
    title: "Code Samples",
    description: "Review their GitHub or code to assess quality.",
  },
  {
    icon: HeartHandshake,
    title: "Client Reviews",
    description: "Check ratings and feedback on freelance platforms.",
  },
  {
    icon: Briefcase,
    title: "Contract and Terms",
    description: "Clear milestones, payment terms, and IP ownership.",
  },
];

// Full comparison table data
const comparisonTableData = [
  {
    feature: "Team Size",
    agency: "5-20+ specialists",
    freelancer: "1 person",
    winner: "agency",
  },
  {
    feature: "Skill Diversity",
    agency: "Full-stack team",
    freelancer: "Usually specialized",
    winner: "agency",
  },
  {
    feature: "Hourly Rate",
    agency: "Higher",
    freelancer: "Lower",
    winner: "freelancer",
  },
  {
    feature: "Total Project Cost",
    agency: "Higher but predictable",
    freelancer: "Lower but variable",
    winner: "tie",
  },
  {
    feature: "Project Management",
    agency: "Dedicated PMs",
    freelancer: "Self-managed",
    winner: "agency",
  },
  {
    feature: "Quality Assurance",
    agency: "Built-in QA process",
    freelancer: "Limited/none",
    winner: "agency",
  },
  {
    feature: "Scalability",
    agency: "Easy to scale up",
    freelancer: "Limited capacity",
    winner: "agency",
  },
  {
    feature: "Communication",
    agency: "Structured updates",
    freelancer: "Direct but variable",
    winner: "agency",
  },
  {
    feature: "Flexibility",
    agency: "Moderate",
    freelancer: "High",
    winner: "freelancer",
  },
  {
    feature: "Speed (Small Tasks)",
    agency: "Slower onboarding",
    freelancer: "Faster kickoff",
    winner: "freelancer",
  },
  {
    feature: "Speed (Large Projects)",
    agency: "Faster delivery",
    freelancer: "Slower/bottlenecked",
    winner: "agency",
  },
  {
    feature: "Risk Level",
    agency: "Lower",
    freelancer: "Higher",
    winner: "agency",
  },
  {
    feature: "Long-term Support",
    agency: "Reliable partnership",
    freelancer: "Uncertain availability",
    winner: "agency",
  },
  {
    feature: "Legal Protection",
    agency: "Standard contracts",
    freelancer: "Variable",
    winner: "agency",
  },
];

// FAQ data
const faqData = [
  {
    question: "What size project warrants hiring an agency over a freelancer?",
    answer:
      "Generally, if your project budget exceeds $50,000, involves multiple platforms or complex features, or will require ongoing development for more than 6 months, an agency is typically the better choice. Agencies excel at managing complexity, coordinating multiple skill sets, and providing long-term reliability that larger projects demand.",
  },
  {
    question: "Can I start with a freelancer and switch to an agency later?",
    answer:
      "Yes, but it can be costly and time-consuming. Code written without proper architecture, documentation, and best practices often needs significant refactoring. If you anticipate your project growing, it may be more cost-effective to start with an agency from the beginning to avoid technical debt and knowledge transfer challenges.",
  },
  {
    question: "How do I know if a freelancer is trustworthy?",
    answer:
      "Look for verified reviews on platforms like Upwork or Toptal, ask for references from past clients, review their code on GitHub, and start with a small paid trial project. Establish clear milestones with payments tied to deliverables rather than paying everything upfront.",
  },
  {
    question: "Do agencies always cost more than freelancers?",
    answer:
      "On an hourly basis, yes. However, agencies often deliver projects faster due to parallel workstreams, include services like QA and PM that freelancers charge extra for, and produce more maintainable code. When you factor in total cost of ownership including bug fixes, technical debt, and project delays, agencies can sometimes be more cost-effective.",
  },
  {
    question: "What if I have a technical co-founder or CTO?",
    answer:
      "With strong technical leadership, both options become more viable. Your technical leader can vet freelancers effectively, review their code, and manage them directly. However, even with technical oversight, agencies remain valuable for larger projects due to their built-in scalability and diverse skill sets.",
  },
  {
    question: "How do agencies handle intellectual property and code ownership?",
    answer:
      "Reputable agencies include clear IP transfer clauses in their contracts, ensuring you own all code upon final payment. They provide access to version control repositories, documentation, and deployment credentials. Always review the IP section of any contract carefully before signing.",
  },
];

// FAQ Item Component
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
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base lg:text-lg font-semibold text-white leading-snug pr-8 group-hover:text-[#F5A623] transition-colors duration-200">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown
            className={`w-5 h-5 transition-colors duration-200 ${
              isOpen ? "text-[#F5A623]" : "text-gray-400"
            }`}
          />
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
            <p className="text-gray-400 font-normal pb-6 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Risk Badge Component
function RiskBadge({ level, color }: { level: string; color: string }) {
  const colorClasses: Record<string, string> = {
    green: "bg-green-500/20 text-green-400 border-green-500/30",
    yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    red: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <span
      className={`px-3 py-1 text-sm font-medium rounded-full border ${
        colorClasses[color] || colorClasses.yellow
      }`}
    >
      {level}
    </span>
  );
}

export default function AgencyVsFreelancerPage() {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(0);
  const [activeSection, setActiveSection] = React.useState<string>("");

  // Track active section for table of contents
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    tableOfContents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="bg-[#141414] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[800px] h-[800px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(245, 166, 35, 0.15) 0%, transparent 60%)",
            }}
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <FadeInUp>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-[#F5A623]">Compare</span>
              </div>
            </FadeInUp>

            {/* Title */}
            <FadeInUp delay={0.1}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                Agency vs Freelancer:{" "}
                <span className="text-[#F5A623]">How to Choose for Your Project</span>
              </h1>
            </FadeInUp>

            {/* Subtitle */}
            <FadeInUp delay={0.2}>
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed mb-10 max-w-3xl mx-auto">
                Choosing between a development agency and freelancer is one of the most
                important decisions for your project. This comprehensive guide will help
                you understand the trade-offs and make the right choice.
              </p>
            </FadeInUp>

            {/* Quick comparison cards */}
            <FadeInUp delay={0.3}>
              <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Agency</h3>
                  <p className="text-sm text-gray-400">
                    Full team, structured processes, higher cost, lower risk
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                    <User className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Freelancer</h3>
                  <p className="text-sm text-gray-400">
                    Individual expert, flexible, lower cost, higher risk
                  </p>
                </div>
              </div>
            </FadeInUp>

            {/* Scroll indicator */}
            <FadeInUp delay={0.4}>
              <button
                onClick={() => scrollToSection("what-defines")}
                className="inline-flex flex-col items-center text-gray-400 hover:text-white transition-colors"
              >
                <span className="text-sm mb-2">Read the guide</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown className="w-5 h-5" />
                </motion.div>
              </button>
            </FadeInUp>
          </div>
        </Container>
      </section>

      {/* Main Content with Table of Contents */}
      <section className="py-12 lg:py-20">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sticky Table of Contents */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-32">
                <FadeInUp>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F5A623] mb-4">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map(({ id, title }) => (
                      <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`block text-left text-sm py-1 transition-colors duration-200 ${
                          activeSection === id
                            ? "text-white font-medium"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {title}
                      </button>
                    ))}
                  </nav>
                </FadeInUp>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-3xl">
              {/* Section: What Defines Agency vs Freelancer */}
              <section id="what-defines" className="mb-20">
                <FadeInUp>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                    What Defines an Agency vs Freelancer?
                  </h2>
                </FadeInUp>

                <div className="space-y-8">
                  {/* Agency Definition */}
                  <FadeInUp delay={0.1}>
                    <div className="bg-white/5 rounded-2xl p-6 lg:p-8 border border-white/10">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-3">
                            Development Agency
                          </h3>
                          <p className="text-gray-400 leading-relaxed mb-4">
                            A development agency is an established company with a team of
                            specialists including developers, designers, project managers,
                            and QA engineers. They operate with defined processes, use
                            proven methodologies like Agile or Scrum, and provide
                            end-to-end services from strategy to deployment and
                            maintenance.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full">
                              Team-based
                            </span>
                            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full">
                              Structured processes
                            </span>
                            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full">
                              Full-service
                            </span>
                            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full">
                              Long-term partnerships
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeInUp>

                  {/* Freelancer Definition */}
                  <FadeInUp delay={0.2}>
                    <div className="bg-white/5 rounded-2xl p-6 lg:p-8 border border-white/10">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <User className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-3">
                            Freelance Developer
                          </h3>
                          <p className="text-gray-400 leading-relaxed mb-4">
                            A freelancer is an independent professional who works
                            on a contract basis. They typically specialize in specific
                            technologies or skill sets, work remotely, and handle their
                            own project management. Freelancers are found on platforms
                            like Upwork, Toptal, or through personal networks.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full">
                              Individual
                            </span>
                            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full">
                              Specialized
                            </span>
                            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full">
                              Flexible
                            </span>
                            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full">
                              Project-based
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeInUp>
                </div>
              </section>

              {/* Section: Agency Pros and Cons */}
              <section id="agency-pros-cons" className="mb-20">
                <FadeInUp>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                    Pros and Cons of Agencies
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Agencies bring structure, reliability, and comprehensive expertise to
                    projects, but at a premium price point.
                  </p>
                </FadeInUp>

                {/* Pros */}
                <FadeInUp delay={0.1}>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      Advantages of Agencies
                    </h3>
                    <ul className="space-y-4">
                      {agencyPros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-white font-medium">{pro.text}</span>
                            <p className="text-sm text-gray-400 mt-1">{pro.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>

                {/* Cons */}
                <FadeInUp delay={0.2}>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      Limitations of Agencies
                    </h3>
                    <ul className="space-y-4">
                      {agencyCons.map((con, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-white font-medium">{con.text}</span>
                            <p className="text-sm text-gray-400 mt-1">{con.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>
              </section>

              {/* Section: Freelancer Pros and Cons */}
              <section id="freelancer-pros-cons" className="mb-20">
                <FadeInUp>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                    Pros and Cons of Freelancers
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Freelancers offer cost-effectiveness and flexibility, but come with
                    inherent risks around reliability and capacity.
                  </p>
                </FadeInUp>

                {/* Pros */}
                <FadeInUp delay={0.1}>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      Advantages of Freelancers
                    </h3>
                    <ul className="space-y-4">
                      {freelancerPros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-white font-medium">{pro.text}</span>
                            <p className="text-sm text-gray-400 mt-1">{pro.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>

                {/* Cons */}
                <FadeInUp delay={0.2}>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      Limitations of Freelancers
                    </h3>
                    <ul className="space-y-4">
                      {freelancerCons.map((con, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-white font-medium">{con.text}</span>
                            <p className="text-sm text-gray-400 mt-1">{con.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>
              </section>

              {/* Section: When to Choose Agency */}
              <section id="when-agency" className="mb-20">
                <FadeInUp>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                    When to Choose an Agency
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Agencies are the right choice when your project requires coordinated
                    expertise, has significant complexity, or demands reliability and
                    scalability.
                  </p>
                </FadeInUp>

                <FadeInUp delay={0.1}>
                  <StaggerContainer staggerDelay={0.05} className="grid gap-4">
                    {agencyUseCases.map((useCase, index) => (
                      <StaggerItem key={index}>
                        <div className="flex items-start gap-4 p-5 bg-white/5 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                          <div className="w-11 h-11 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                            <useCase.icon className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">
                              {useCase.title}
                            </h4>
                            <p className="text-sm text-gray-400">
                              {useCase.description}
                            </p>
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </FadeInUp>
              </section>

              {/* Section: When to Choose Freelancer */}
              <section id="when-freelancer" className="mb-20">
                <FadeInUp>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                    When to Choose a Freelancer
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Freelancers make sense for smaller, well-defined projects where you
                    can provide technical oversight or have very constrained budgets.
                  </p>
                </FadeInUp>

                <FadeInUp delay={0.1}>
                  <StaggerContainer staggerDelay={0.05} className="grid gap-4">
                    {freelancerUseCases.map((useCase, index) => (
                      <StaggerItem key={index}>
                        <div className="flex items-start gap-4 p-5 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors">
                          <div className="w-11 h-11 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                            <useCase.icon className="w-5 h-5 text-purple-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">
                              {useCase.title}
                            </h4>
                            <p className="text-sm text-gray-400">
                              {useCase.description}
                            </p>
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </FadeInUp>
              </section>

              {/* Section: Cost Comparison */}
              <section id="cost-comparison" className="mb-20">
                <FadeInUp>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                    Cost Comparison
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    While freelancers typically have lower hourly rates, the total project
                    cost depends on scope, hidden requirements, and the need for additional
                    services like design, QA, and project management.
                  </p>
                </FadeInUp>

                <FadeInUp delay={0.1}>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-4 pr-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                            Category
                          </th>
                          <th className="text-left py-4 px-4 text-sm font-semibold text-blue-400 uppercase tracking-wider">
                            <Building2 className="w-4 h-4 inline mr-2" />
                            Agency
                          </th>
                          <th className="text-left py-4 px-4 text-sm font-semibold text-purple-400 uppercase tracking-wider">
                            <User className="w-4 h-4 inline mr-2" />
                            Freelancer
                          </th>
                          <th className="text-left py-4 pl-4 text-sm font-semibold text-gray-400 uppercase tracking-wider hidden md:table-cell">
                            Notes
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {costComparison.map((row, index) => (
                          <tr
                            key={index}
                            className="border-b border-white/5 hover:bg-white/5 transition-colors"
                          >
                            <td className="py-4 pr-4 font-medium text-white">
                              {row.category}
                            </td>
                            <td className="py-4 px-4 text-gray-300">{row.agency}</td>
                            <td className="py-4 px-4 text-gray-300">{row.freelancer}</td>
                            <td className="py-4 pl-4 text-sm text-gray-500 hidden md:table-cell">
                              {row.notes}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </FadeInUp>

                <FadeInUp delay={0.2}>
                  <div className="mt-6 p-4 bg-[#F5A623]/10 rounded-xl border border-[#F5A623]/20">
                    <p className="text-sm text-gray-300">
                      <strong className="text-[#F5A623]">Important:</strong> These
                      estimates are based on U.S. market rates. The "hidden costs" row is
                      critical, as freelancer projects often require separate hires for design,
                      QA, DevOps, and project management, which can significantly increase
                      total cost.
                    </p>
                  </div>
                </FadeInUp>
              </section>

              {/* Section: Risk Comparison */}
              <section id="risk-comparison" className="mb-20">
                <FadeInUp>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                    Risk Comparison
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Understanding the risks associated with each option is crucial for
                    making an informed decision. Agencies generally provide more safeguards,
                    while freelancers require more active risk management.
                  </p>
                </FadeInUp>

                <FadeInUp delay={0.1}>
                  <div className="space-y-4">
                    {riskComparison.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white/5 rounded-xl p-5 border border-white/10"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-white">{item.risk}</h4>
                              <p className="text-sm text-gray-500 mt-1">
                                {item.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-4 lg:gap-8 ml-8 lg:ml-0">
                            <div className="text-center">
                              <div className="text-xs text-blue-400 font-medium mb-2">
                                Agency
                              </div>
                              <RiskBadge level={item.agencyRisk} color={item.agencyColor} />
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-purple-400 font-medium mb-2">
                                Freelancer
                              </div>
                              <RiskBadge
                                level={item.freelancerRisk}
                                color={item.freelancerColor}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </FadeInUp>

                <FadeInUp delay={0.2}>
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl border border-blue-500/20">
                    <div className="flex items-start gap-4">
                      <Shield className="w-6 h-6 text-blue-400 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-2">
                          Risk Mitigation Insight
                        </h4>
                        <p className="text-gray-400 text-sm">
                          For projects where failure would significantly impact your business,
                          the risk reduction provided by agencies often justifies the higher
                          cost. The structured processes, team redundancy, and professional
                          accountability create multiple layers of protection that individual
                          freelancers cannot match.
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              </section>

              {/* Section: What to Look For */}
              <section id="what-to-look-for" className="mb-20">
                <FadeInUp>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                    What to Look For When Hiring
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Whether you choose an agency or freelancer, proper vetting is
                    essential. Here are the key factors to evaluate for each option.
                  </p>
                </FadeInUp>

                <div className="space-y-8">
                  {/* Agency Checklist */}
                  <FadeInUp delay={0.1}>
                    <div className="bg-white/5 rounded-2xl p-6 lg:p-8 border border-white/10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          Agency Evaluation Checklist
                        </h3>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {agencyChecklist.map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                              <item.icon className="w-4 h-4 text-blue-400" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white text-sm">
                                {item.title}
                              </h4>
                              <p className="text-xs text-gray-400 mt-0.5">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeInUp>

                  {/* Freelancer Checklist */}
                  <FadeInUp delay={0.2}>
                    <div className="bg-white/5 rounded-2xl p-6 lg:p-8 border border-white/10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                          <User className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          Freelancer Evaluation Checklist
                        </h3>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {freelancerChecklist.map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                              <item.icon className="w-4 h-4 text-purple-400" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white text-sm">
                                {item.title}
                              </h4>
                              <p className="text-xs text-gray-400 mt-0.5">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeInUp>
                </div>
              </section>

              {/* Section: Comparison Table */}
              <section id="comparison-table" className="mb-20">
                <FadeInUp>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                    Full Comparison Table
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    A comprehensive side-by-side comparison across all key factors to
                    help you make the right decision for your project.
                  </p>
                </FadeInUp>

                <FadeInUp delay={0.1}>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-4 pr-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                            Factor
                          </th>
                          <th className="text-center py-4 px-4 text-sm font-semibold text-blue-400 uppercase tracking-wider">
                            <Building2 className="w-4 h-4 inline mr-1" />
                            Agency
                          </th>
                          <th className="text-center py-4 px-4 text-sm font-semibold text-purple-400 uppercase tracking-wider">
                            <User className="w-4 h-4 inline mr-1" />
                            Freelancer
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonTableData.map((row, index) => (
                          <tr
                            key={index}
                            className="border-b border-white/5 hover:bg-white/5 transition-colors"
                          >
                            <td className="py-4 pr-4 font-medium text-white">
                              {row.feature}
                            </td>
                            <td
                              className={`py-4 px-4 text-center ${
                                row.winner === "agency"
                                  ? "text-blue-400 font-medium"
                                  : "text-gray-400"
                              }`}
                            >
                              {row.agency}
                              {row.winner === "agency" && (
                                <CheckCircle2 className="w-4 h-4 inline ml-2" />
                              )}
                            </td>
                            <td
                              className={`py-4 px-4 text-center ${
                                row.winner === "freelancer"
                                  ? "text-purple-400 font-medium"
                                  : "text-gray-400"
                              }`}
                            >
                              {row.freelancer}
                              {row.winner === "freelancer" && (
                                <CheckCircle2 className="w-4 h-4 inline ml-2" />
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </FadeInUp>

                <FadeInUp delay={0.2}>
                  <div className="mt-8 grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-1">10</div>
                      <div className="text-sm text-gray-400">
                        Categories favor Agencies
                      </div>
                    </div>
                    <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20 text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-1">3</div>
                      <div className="text-sm text-gray-400">
                        Categories favor Freelancers
                      </div>
                    </div>
                  </div>
                </FadeInUp>

                <FadeInUp delay={0.3}>
                  <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-sm text-gray-400">
                      <strong className="text-white">Key Takeaway:</strong> For most
                      serious projects, agencies offer significant advantages in reliability,
                      quality, and long-term support. Freelancers remain a good choice for
                      budget-conscious, smaller scope work with proper oversight.
                    </p>
                  </div>
                </FadeInUp>
              </section>

              {/* Section: FAQ */}
              <section id="faq" className="mb-20">
                <FadeInUp>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Common questions about choosing between agencies and freelancers
                    for your development project.
                  </p>
                </FadeInUp>

                <FadeInUp delay={0.1}>
                  <div className="bg-white/5 rounded-2xl p-6 lg:p-8 border border-white/10">
                    {faqData.map((faq, index) => (
                      <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openFaqIndex === index}
                        onToggle={() =>
                          setOpenFaqIndex(openFaqIndex === index ? null : index)
                        }
                      />
                    ))}
                  </div>
                </FadeInUp>
              </section>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#141414] to-[#1a1a1a]">
        <Container>
          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-4">
                Ready to Build Your Project?
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
                Get the Benefits of an Agency with a Boutique Approach
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                At RenderNext, we combine the reliability and expertise of an agency
                with the personalized attention of a boutique team. No layers of
                bureaucracy, direct access to senior developers, and a proven track
                record of delivering complex projects on time and on budget.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Dedicated team</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Transparent pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Direct communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>No minimum project size</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#FFB94D] text-[#141414] font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02]"
                >
                  Start a Conversation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/estimate"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
                >
                  Get a Free Estimate
                </Link>
              </div>
            </div>
          </FadeInUp>
        </Container>
      </section>
    </main>
  );
}
