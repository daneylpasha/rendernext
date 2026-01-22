"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
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
  Code2,
  Layers,
  Server,
  Bell,
  Camera,
  MapPin,
  Wifi,
  WifiOff,
  ShoppingCart,
  Briefcase,
  Gamepad2,
  Heart,
  Building2,
  GraduationCap,
  HelpCircle,
  ArrowDown,
} from "lucide-react";
import {
  Container,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui";

// Table of Contents data
const tableOfContents = [
  { id: "what-is", title: "What is a Web App vs Mobile App?" },
  { id: "when-web-app", title: "When to Choose a Web App" },
  { id: "when-mobile-app", title: "When to Choose a Mobile App" },
  { id: "cost-comparison", title: "Cost Comparison" },
  { id: "timeline-comparison", title: "Timeline Comparison" },
  { id: "hybrid-options", title: "Hybrid Options (PWA, React Native)" },
  { id: "decision-framework", title: "Decision Framework" },
  { id: "comparison-table", title: "Full Comparison Table" },
  { id: "faq", title: "FAQ" },
];

// Web App Pros and Cons
const webAppPros = [
  "No app store approval needed",
  "Works on all devices with a browser",
  "Easier and faster to update",
  "Lower development cost (single codebase)",
  "Better for SEO and discoverability",
  "No installation required",
  "Easier to maintain",
];

const webAppCons = [
  "Requires internet connection",
  "Limited access to device features",
  "Less performant for complex tasks",
  "No presence in app stores",
  "Push notifications limited on iOS",
  "Browser compatibility issues",
];

// Mobile App Pros and Cons
const mobileAppPros = [
  "Full access to device features",
  "Better performance and speed",
  "Works offline",
  "Push notifications on all platforms",
  "App store presence and discovery",
  "Better user engagement",
  "Native look and feel",
];

const mobileAppCons = [
  "Higher development cost",
  "App store approval process",
  "Separate codebases (iOS/Android)",
  "Users must download and install",
  "Regular updates require re-submission",
  "Platform-specific guidelines",
];

// When to choose web app
const webAppUseCases = [
  {
    icon: ShoppingCart,
    title: "E-commerce Stores",
    description:
      "Online stores benefit from SEO and easy access without installation barriers.",
  },
  {
    icon: Briefcase,
    title: "B2B SaaS Platforms",
    description:
      "Business tools used primarily on desktops with occasional mobile access.",
  },
  {
    icon: Users,
    title: "Content Platforms",
    description:
      "Blogs, news sites, and content-heavy platforms that need search visibility.",
  },
  {
    icon: GraduationCap,
    title: "Educational Platforms",
    description:
      "Learning management systems and course platforms accessed on various devices.",
  },
  {
    icon: Building2,
    title: "Internal Business Tools",
    description:
      "Dashboards, admin panels, and internal tools for team productivity.",
  },
];

// When to choose mobile app
const mobileAppUseCases = [
  {
    icon: Gamepad2,
    title: "Gaming Apps",
    description:
      "Games require high performance, offline play, and device capabilities.",
  },
  {
    icon: Heart,
    title: "Health & Fitness",
    description:
      "Fitness trackers need sensors, GPS, and background processing.",
  },
  {
    icon: Camera,
    title: "Camera/AR Apps",
    description:
      "Apps using camera, augmented reality, or advanced image processing.",
  },
  {
    icon: MapPin,
    title: "Navigation Apps",
    description:
      "Turn-by-turn navigation requiring GPS and offline map access.",
  },
  {
    icon: Bell,
    title: "Social/Messaging",
    description:
      "Apps requiring real-time notifications and constant engagement.",
  },
];

// Cost comparison data
const costComparison = [
  {
    category: "Simple App",
    webApp: "$10,000 - $25,000",
    mobileApp: "$25,000 - $50,000",
    notes: "Basic features, standard design",
  },
  {
    category: "Medium Complexity",
    webApp: "$25,000 - $75,000",
    mobileApp: "$50,000 - $150,000",
    notes: "Custom features, integrations",
  },
  {
    category: "Complex/Enterprise",
    webApp: "$75,000 - $200,000+",
    mobileApp: "$150,000 - $500,000+",
    notes: "Advanced features, multiple integrations",
  },
  {
    category: "Maintenance (Annual)",
    webApp: "15-20% of initial cost",
    mobileApp: "20-30% of initial cost",
    notes: "Updates, hosting, support",
  },
];

// Timeline comparison data
const timelineComparison = [
  {
    phase: "MVP Development",
    webApp: "6-10 weeks",
    mobileApp: "10-16 weeks",
    description: "Core features, basic design",
  },
  {
    phase: "Full Product",
    webApp: "3-5 months",
    mobileApp: "5-8 months",
    description: "Complete feature set",
  },
  {
    phase: "App Store Approval",
    webApp: "N/A (instant)",
    mobileApp: "1-4 weeks",
    description: "Review and approval process",
  },
  {
    phase: "Updates/Bug Fixes",
    webApp: "Instant deployment",
    mobileApp: "1-7 days for approval",
    description: "Time to reach users",
  },
];

// Hybrid options data
const hybridOptions = [
  {
    name: "Progressive Web App (PWA)",
    icon: Globe,
    description:
      "Web apps that look and feel like native apps, with offline support and push notifications.",
    bestFor: [
      "Startups testing product-market fit",
      "Content-heavy applications",
      "E-commerce with mobile users",
      "Internal business tools",
    ],
    pros: [
      "Single codebase for all platforms",
      "No app store required",
      "Installable on home screen",
      "Works offline with service workers",
      "Automatic updates",
    ],
    cons: [
      "Limited iOS support for notifications",
      "No access to some native features",
      "Less discoverable than app store apps",
    ],
    costRange: "$15,000 - $100,000",
  },
  {
    name: "React Native / Flutter",
    icon: Smartphone,
    description:
      "Cross-platform frameworks that compile to native code, offering near-native performance.",
    bestFor: [
      "Apps needing native features",
      "Startups with limited budget",
      "Products targeting both iOS and Android",
      "Apps requiring offline functionality",
    ],
    pros: [
      "Single codebase, native performance",
      "Access to device features",
      "App store presence",
      "Large community and ecosystem",
      "Hot reload for faster development",
    ],
    cons: [
      "Some platform-specific code still needed",
      "May need native modules for complex features",
      "Performance slightly below pure native",
    ],
    costRange: "$30,000 - $200,000",
  },
];

// Full comparison table data
const comparisonTableData = [
  {
    feature: "Development Cost",
    webApp: "Lower",
    mobileApp: "Higher",
    winner: "web",
  },
  {
    feature: "Time to Market",
    webApp: "Faster",
    mobileApp: "Slower",
    winner: "web",
  },
  {
    feature: "Performance",
    webApp: "Good",
    mobileApp: "Excellent",
    winner: "mobile",
  },
  {
    feature: "Offline Access",
    webApp: "Limited (PWA)",
    mobileApp: "Full",
    winner: "mobile",
  },
  {
    feature: "Device Features",
    webApp: "Limited",
    mobileApp: "Full Access",
    winner: "mobile",
  },
  {
    feature: "Push Notifications",
    webApp: "Limited on iOS",
    mobileApp: "Full Support",
    winner: "mobile",
  },
  {
    feature: "SEO & Discoverability",
    webApp: "Excellent",
    mobileApp: "Limited",
    winner: "web",
  },
  {
    feature: "Installation Required",
    webApp: "No",
    mobileApp: "Yes",
    winner: "web",
  },
  {
    feature: "Update Distribution",
    webApp: "Instant",
    mobileApp: "App Store Review",
    winner: "web",
  },
  {
    feature: "Maintenance Cost",
    webApp: "Lower",
    mobileApp: "Higher",
    winner: "web",
  },
  {
    feature: "User Engagement",
    webApp: "Moderate",
    mobileApp: "Higher",
    winner: "mobile",
  },
  {
    feature: "Cross-Platform",
    webApp: "Native",
    mobileApp: "Requires Extra Work",
    winner: "web",
  },
];

// Decision framework questions
const decisionQuestions = [
  {
    question: "Do you need access to device hardware (camera, GPS, sensors)?",
    webAnswer: "No or limited",
    mobileAnswer: "Yes, extensively",
    icon: Camera,
  },
  {
    question: "Will users need the app to work offline?",
    webAnswer: "No or basic caching",
    mobileAnswer: "Yes, full offline mode",
    icon: WifiOff,
  },
  {
    question: "Is your budget limited?",
    webAnswer: "Yes, starting lean",
    mobileAnswer: "No, can invest more",
    icon: DollarSign,
  },
  {
    question: "Do you need to reach market quickly?",
    webAnswer: "Yes, ASAP",
    mobileAnswer: "Can wait for quality",
    icon: Clock,
  },
  {
    question: "Is SEO important for user acquisition?",
    webAnswer: "Yes, very important",
    mobileAnswer: "No, other channels",
    icon: TrendingUp,
  },
  {
    question: "Do users expect native app experience?",
    webAnswer: "No, web is fine",
    mobileAnswer: "Yes, definitely",
    icon: Smartphone,
  },
];

// FAQ data
const faqData = [
  {
    question: "Can a web app be converted to a mobile app later?",
    answer:
      "Yes, but it requires significant development effort. A better approach is to build a Progressive Web App (PWA) first, which can be enhanced later, or use a cross-platform framework like React Native from the start if you anticipate needing native features.",
  },
  {
    question: "Which is better for a startup with limited budget?",
    answer:
      "For most startups, a web app or PWA is the better choice. It allows you to validate your idea faster and at lower cost. You can always add a native mobile app later once you have proven product-market fit and have more resources.",
  },
  {
    question: "Do I need both a web app and mobile app?",
    answer:
      "Not necessarily. Many successful products start with one platform and expand later. Consider your target audience, use cases, and budget. If your users primarily access on mobile and need device features, prioritize mobile. If they access from various devices, a responsive web app might be sufficient.",
  },
  {
    question: "What about hybrid apps using React Native or Flutter?",
    answer:
      "Cross-platform frameworks like React Native and Flutter are excellent middle-ground options. They let you build native apps for both iOS and Android from a single codebase, reducing cost by 30-40% compared to building separate native apps while still providing near-native performance.",
  },
  {
    question: "How long does app store approval take?",
    answer:
      "Apple App Store review typically takes 24-48 hours for updates and up to a week for new apps. Google Play Store is usually faster, often within hours for updates. However, rejection and resubmission can add weeks. Web apps have no approval process and deploy instantly.",
  },
  {
    question: "Which platform has better user retention?",
    answer:
      "Mobile apps generally have higher user retention due to home screen presence, push notifications, and offline access. However, this depends heavily on your app category and user behavior. Web apps can improve retention with PWA features.",
  },
  {
    question: "Can web apps access device features like camera and GPS?",
    answer:
      "Modern web APIs allow access to many device features including camera, GPS, microphone, and even some sensors. However, access is more limited than native apps, especially on iOS. Features like background processing and advanced Bluetooth are not available in web apps.",
  },
  {
    question: "What is a Progressive Web App (PWA)?",
    answer:
      "A PWA is a web app that uses modern web technologies to deliver an app-like experience. PWAs can be installed on the home screen, work offline, and send push notifications (on Android). They combine the reach of web apps with some benefits of native apps.",
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

export default function WebAppVsMobileAppPage() {
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
                Web App vs Mobile App:{" "}
                <span className="text-[#F5A623]">Which Should You Build?</span>
              </h1>
            </FadeInUp>

            {/* Subtitle */}
            <FadeInUp delay={0.2}>
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed mb-10 max-w-3xl mx-auto">
                Making the right choice between web and mobile development can
                save you thousands of dollars and months of development time.
                This comprehensive guide will help you decide.
              </p>
            </FadeInUp>

            {/* Quick stats */}
            <FadeInUp delay={0.3}>
              <div className="flex flex-wrap justify-center gap-8 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">30-50%</div>
                  <div className="text-sm text-gray-400">Lower cost for web apps</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">2-3x</div>
                  <div className="text-sm text-gray-400">Faster time to market</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">85%</div>
                  <div className="text-sm text-gray-400">Mobile time on native apps</div>
                </div>
              </div>
            </FadeInUp>

            {/* Scroll indicator */}
            <FadeInUp delay={0.4}>
              <button
                onClick={() => scrollToSection("what-is")}
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
              {/* Section: What is Web App vs Mobile App */}
              <section id="what-is" className="mb-20">
                <FadeInUp>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                    What is a Web App vs Mobile App?
                  </h2>
                </FadeInUp>

                <div className="space-y-8">
                  {/* Web App Definition */}
                  <FadeInUp delay={0.1}>
                    <div className="bg-white/5 rounded-2xl p-6 lg:p-8 border border-white/10">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <Globe className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-3">
                            Web Application
                          </h3>
                          <p className="text-gray-400 leading-relaxed mb-4">
                            A web app runs in a browser and is accessed via a
                            URL. It works on any device with a browser (desktop,
                            tablet, mobile) without installation. Modern web
                            apps can look and feel like native apps, especially
                            Progressive Web Apps (PWAs).
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full">
                              Browser-based
                            </span>
                            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full">
                              No installation
                            </span>
                            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full">
                              Cross-platform
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeInUp>

                  {/* Mobile App Definition */}
                  <FadeInUp delay={0.2}>
                    <div className="bg-white/5 rounded-2xl p-6 lg:p-8 border border-white/10">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <Smartphone className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-3">
                            Mobile Application
                          </h3>
                          <p className="text-gray-400 leading-relaxed mb-4">
                            A mobile app is installed directly on a smartphone
                            or tablet, downloaded from app stores (Apple App
                            Store, Google Play). Native apps have full access to
                            device features and typically offer the best
                            performance and user experience.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">
                              Device-installed
                            </span>
                            <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">
                              App store distribution
                            </span>
                            <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">
                              Native features
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeInUp>
                </div>
              </section>

              {/* Section: When to Choose Web App */}
              <section id="when-web-app" className="mb-20">
                <FadeInUp>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                    When to Choose a Web App
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Web apps are ideal when you need broad reach, quick
                    deployment, and cost efficiency. Here are the key advantages
                    and best use cases.
                  </p>
                </FadeInUp>

                {/* Pros */}
                <FadeInUp delay={0.1}>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      Advantages
                    </h3>
                    <ul className="grid gap-3">
                      {webAppPros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>

                {/* Cons */}
                <FadeInUp delay={0.2}>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      Limitations
                    </h3>
                    <ul className="grid gap-3">
                      {webAppCons.map((con, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>

                {/* Use Cases */}
                <FadeInUp delay={0.3}>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Best For
                    </h3>
                    <StaggerContainer
                      staggerDelay={0.05}
                      className="grid gap-4"
                    >
                      {webAppUseCases.map((useCase, index) => (
                        <StaggerItem key={index}>
                          <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
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
                  </div>
                </FadeInUp>
              </section>

              {/* Section: When to Choose Mobile App */}
              <section id="when-mobile-app" className="mb-20">
                <FadeInUp>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                    When to Choose a Mobile App
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Mobile apps excel when you need device features, offline
                    functionality, or the highest performance. Here is when native
                    makes sense.
                  </p>
                </FadeInUp>

                {/* Pros */}
                <FadeInUp delay={0.1}>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      Advantages
                    </h3>
                    <ul className="grid gap-3">
                      {mobileAppPros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>

                {/* Cons */}
                <FadeInUp delay={0.2}>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      Limitations
                    </h3>
                    <ul className="grid gap-3">
                      {mobileAppCons.map((con, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>

                {/* Use Cases */}
                <FadeInUp delay={0.3}>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Best For
                    </h3>
                    <StaggerContainer
                      staggerDelay={0.05}
                      className="grid gap-4"
                    >
                      {mobileAppUseCases.map((useCase, index) => (
                        <StaggerItem key={index}>
                          <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                              <useCase.icon className="w-5 h-5 text-green-400" />
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
                  </div>
                </FadeInUp>
              </section>

              {/* Section: Cost Comparison */}
              <section id="cost-comparison" className="mb-20">
                <FadeInUp>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                    Cost Comparison
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Development costs vary significantly based on complexity,
                    features, and platform choice. Here is a realistic breakdown
                    of what to expect.
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
                            <Globe className="w-4 h-4 inline mr-2" />
                            Web App
                          </th>
                          <th className="text-left py-4 px-4 text-sm font-semibold text-green-400 uppercase tracking-wider">
                            <Smartphone className="w-4 h-4 inline mr-2" />
                            Mobile App
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
                            <td className="py-4 px-4 text-gray-300">
                              {row.webApp}
                            </td>
                            <td className="py-4 px-4 text-gray-300">
                              {row.mobileApp}
                            </td>
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
                      <strong className="text-[#F5A623]">Note:</strong> These
                      are estimates based on U.S. development rates. Costs can
                      vary based on location, team experience, and specific
                      requirements. Always get detailed quotes for your project.
                    </p>
                  </div>
                </FadeInUp>
              </section>

              {/* Section: Timeline Comparison */}
              <section id="timeline-comparison" className="mb-20">
                <FadeInUp>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                    Timeline Comparison
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Time to market can be crucial for startups and businesses.
                    Here is how web and mobile development timelines typically
                    compare.
                  </p>
                </FadeInUp>

                <FadeInUp delay={0.1}>
                  <div className="space-y-4">
                    {timelineComparison.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white/5 rounded-xl p-5 border border-white/10"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-[#F5A623]" />
                            <div>
                              <h4 className="font-semibold text-white">
                                {item.phase}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {item.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-6 md:gap-8">
                            <div className="text-center">
                              <div className="text-sm text-blue-400 font-medium">
                                Web App
                              </div>
                              <div className="text-white font-semibold">
                                {item.webApp}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-green-400 font-medium">
                                Mobile App
                              </div>
                              <div className="text-white font-semibold">
                                {item.mobileApp}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </FadeInUp>
              </section>

              {/* Section: Hybrid Options */}
              <section id="hybrid-options" className="mb-20">
                <FadeInUp>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                    Hybrid Options: PWA and Cross-Platform
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    You do not have to choose strictly between web and native.
                    Hybrid approaches offer compelling middle-ground options
                    that can reduce costs while maintaining quality.
                  </p>
                </FadeInUp>

                <div className="space-y-8">
                  {hybridOptions.map((option, index) => (
                    <FadeInUp key={index} delay={0.1 * (index + 1)}>
                      <div className="bg-white/5 rounded-2xl p-6 lg:p-8 border border-white/10">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-12 h-12 rounded-xl bg-[#F5A623]/20 flex items-center justify-center flex-shrink-0">
                            <option.icon className="w-6 h-6 text-[#F5A623]" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                              {option.name}
                            </h3>
                            <p className="text-gray-400">{option.description}</p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Best For */}
                          <div>
                            <h4 className="text-sm font-semibold text-[#F5A623] uppercase tracking-wider mb-3">
                              Best For
                            </h4>
                            <ul className="space-y-2">
                              {option.bestFor.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-gray-300"
                                >
                                  <Zap className="w-4 h-4 text-[#F5A623] flex-shrink-0 mt-0.5" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Pros & Cons */}
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-2">
                                Pros
                              </h4>
                              <ul className="space-y-1">
                                {option.pros.slice(0, 3).map((pro, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-sm text-gray-300"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                    {pro}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-2">
                                Cons
                              </h4>
                              <ul className="space-y-1">
                                {option.cons.slice(0, 2).map((con, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-sm text-gray-300"
                                  >
                                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                    {con}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/10">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-400">
                              Typical Cost Range
                            </span>
                            <span className="font-semibold text-white">
                              {option.costRange}
                            </span>
                          </div>
                        </div>
                      </div>
                    </FadeInUp>
                  ))}
                </div>
              </section>

              {/* Section: Decision Framework */}
              <section id="decision-framework" className="mb-20">
                <FadeInUp>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                    Decision Framework
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Answer these questions to help determine which platform is
                    right for your project. Each question points toward either
                    web or mobile development.
                  </p>
                </FadeInUp>

                <FadeInUp delay={0.1}>
                  <div className="space-y-4">
                    {decisionQuestions.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white/5 rounded-xl p-5 border border-white/10"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-gray-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-white mb-3">
                              {item.question}
                            </h4>
                            <div className="flex flex-col sm:flex-row gap-3">
                              <div className="flex-1 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                                <div className="flex items-center gap-2 mb-1">
                                  <Globe className="w-4 h-4 text-blue-400" />
                                  <span className="text-sm font-medium text-blue-400">
                                    Web App
                                  </span>
                                </div>
                                <span className="text-sm text-gray-300">
                                  {item.webAnswer}
                                </span>
                              </div>
                              <div className="flex-1 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                                <div className="flex items-center gap-2 mb-1">
                                  <Smartphone className="w-4 h-4 text-green-400" />
                                  <span className="text-sm font-medium text-green-400">
                                    Mobile App
                                  </span>
                                </div>
                                <span className="text-sm text-gray-300">
                                  {item.mobileAnswer}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </FadeInUp>

                <FadeInUp delay={0.2}>
                  <div className="mt-8 p-6 bg-gradient-to-r from-[#F5A623]/10 to-transparent rounded-xl border border-[#F5A623]/20">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="w-6 h-6 text-[#F5A623] flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-2">
                          Still not sure?
                        </h4>
                        <p className="text-gray-400 text-sm mb-4">
                          Most answers pointing to web? Start with a web app or
                          PWA. Most pointing to mobile? Go native or
                          cross-platform. Split down the middle? Consider a PWA
                          first to validate, then add native apps.
                        </p>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-[#F5A623] hover:text-[#FFB94D] transition-colors font-medium"
                        >
                          Get expert advice
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              </section>

              {/* Section: Comparison Table */}
              <section id="comparison-table" className="mb-20">
                <FadeInUp>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                    Full Comparison Table
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    A comprehensive side-by-side comparison of web apps versus
                    mobile apps across all key factors.
                  </p>
                </FadeInUp>

                <FadeInUp delay={0.1}>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-4 pr-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                            Feature
                          </th>
                          <th className="text-center py-4 px-4 text-sm font-semibold text-blue-400 uppercase tracking-wider">
                            <Globe className="w-4 h-4 inline mr-1" />
                            Web App
                          </th>
                          <th className="text-center py-4 px-4 text-sm font-semibold text-green-400 uppercase tracking-wider">
                            <Smartphone className="w-4 h-4 inline mr-1" />
                            Mobile App
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
                                row.winner === "web"
                                  ? "text-blue-400 font-medium"
                                  : "text-gray-400"
                              }`}
                            >
                              {row.webApp}
                              {row.winner === "web" && (
                                <CheckCircle2 className="w-4 h-4 inline ml-2" />
                              )}
                            </td>
                            <td
                              className={`py-4 px-4 text-center ${
                                row.winner === "mobile"
                                  ? "text-green-400 font-medium"
                                  : "text-gray-400"
                              }`}
                            >
                              {row.mobileApp}
                              {row.winner === "mobile" && (
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
                      <div className="text-3xl font-bold text-blue-400 mb-1">
                        7
                      </div>
                      <div className="text-sm text-gray-400">
                        Categories favor Web Apps
                      </div>
                    </div>
                    <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20 text-center">
                      <div className="text-3xl font-bold text-green-400 mb-1">
                        5
                      </div>
                      <div className="text-sm text-gray-400">
                        Categories favor Mobile Apps
                      </div>
                    </div>
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
                    Common questions about choosing between web and mobile app
                    development.
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
                          setOpenFaqIndex(
                            openFaqIndex === index ? null : index
                          )
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
                Ready to Build?
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
                Let Us Help You Choose the Right Platform
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Our team has built web apps, mobile apps, and everything in
                between. We will help you make the right choice for your
                business goals and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#FFB94D] text-[#141414] font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02]"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/estimate"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
                >
                  Get a Cost Estimate
                </Link>
              </div>
            </div>
          </FadeInUp>
        </Container>
      </section>
    </main>
  );
}
