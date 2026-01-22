"use client";

import {
  Rocket,
  Zap,
  Target,
  Clock,
  DollarSign,
  Users,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import {
  IndustryPageTemplate,
  IndustryPageProps,
} from "@/components/templates/IndustryPageTemplate";

const startupsPageData: IndustryPageProps = {
  // Hero
  industry: "Startups",
  headline: "Launch Fast, Learn Faster",
  subheadline:
    "We help startups build investor-ready MVPs, validate ideas quickly, and scale with confidence. From concept to launch in weeks, not months.",
  heroIcon: Rocket,
  accentColor: "orange",

  // Challenges
  challenges: [
    {
      icon: DollarSign,
      title: "Limited Budget",
      description:
        "Every dollar counts when you're bootstrapping or working with seed funding. You need maximum impact from minimal investment without sacrificing quality.",
    },
    {
      icon: Clock,
      title: "Time to Market",
      description:
        "Speed is your competitive advantage. Getting to market first means capturing users, gathering feedback, and iterating before competitors catch up.",
    },
    {
      icon: Target,
      title: "Pivoting Capability",
      description:
        "Your product vision will evolve based on user feedback. You need flexible architecture that can adapt quickly without costly rebuilds.",
    },
    {
      icon: TrendingUp,
      title: "Scalability Concerns",
      description:
        "What works for 100 users might break at 10,000. Building for scale from day one prevents painful and expensive rewrites down the road.",
    },
  ],

  // Solutions
  solutions: [
    {
      title: "MVP Development",
      description:
        "Launch your core product fast with just the features that matter. Validate your idea with real users before investing in the full vision.",
      features: [
        "Core feature identification and prioritization",
        "4-8 week development sprints",
        "User feedback integration loops",
        "Lean tech stack selection",
        "Cost-effective cloud infrastructure",
        "Analytics and user tracking built-in",
        "Investor-ready demo environments",
        "Technical documentation for due diligence",
      ],
    },
    {
      title: "Rapid Prototyping",
      description:
        "Test concepts and gather user feedback before committing to full development. Reduce risk and validate assumptions early.",
      features: [
        "Interactive clickable prototypes",
        "User testing and feedback sessions",
        "A/B testing infrastructure",
        "Landing page experiments",
        "Feature flag implementation",
        "Quick iteration cycles",
        "Prototype-to-production path",
        "Market validation support",
      ],
    },
    {
      title: "Scalable Architecture",
      description:
        "Build on a foundation that grows with you. Start small but think big with architecture designed for your future success.",
      features: [
        "Microservices-ready architecture",
        "Auto-scaling cloud infrastructure",
        "Database design for growth",
        "API-first development approach",
        "Caching and performance optimization",
        "CI/CD pipeline setup",
        "Monitoring and alerting systems",
        "Load testing and capacity planning",
      ],
    },
    {
      title: "Investor Demo Preparation",
      description:
        "Make your pitch unforgettable with polished demos that showcase your product's potential and technical capabilities.",
      features: [
        "Demo environment setup",
        "Pitch deck technical support",
        "Product roadmap visualization",
        "Technical metrics dashboard",
        "Security and compliance overview",
        "Architecture documentation",
        "Scalability demonstrations",
        "Live demo rehearsal support",
      ],
    },
  ],

  // Use Cases
  useCases: [
    {
      title: "SaaS Platform MVP",
      description:
        "Launch a subscription-based software product with essential features to validate market fit and start generating revenue.",
      features: [
        "User authentication and onboarding",
        "Core product functionality",
        "Subscription billing integration",
        "Admin dashboard for metrics",
        "Email notifications and workflows",
        "Basic API for future integrations",
      ],
    },
    {
      title: "Marketplace Application",
      description:
        "Connect buyers and sellers with a two-sided marketplace platform that handles listings, transactions, and communications.",
      features: [
        "User profiles for buyers and sellers",
        "Listing creation and search",
        "Messaging between parties",
        "Payment processing and escrow",
        "Review and rating system",
        "Mobile-responsive design",
      ],
    },
    {
      title: "Mobile-First Consumer App",
      description:
        "Reach users on their devices with a native-quality mobile app that delivers a smooth, engaging experience.",
      features: [
        "Cross-platform mobile development",
        "Push notifications for engagement",
        "Social login and sharing",
        "Offline functionality",
        "App store optimization support",
        "Analytics and user behavior tracking",
      ],
    },
  ],

  // No compliance section for startups

  // Tech Stack
  techStack: [
    {
      name: "Next.js & React",
      description:
        "Fast, SEO-friendly web applications with excellent developer experience and rapid iteration capabilities.",
    },
    {
      name: "React Native & Expo",
      description:
        "Cross-platform mobile apps from a single codebase. Ship to iOS and Android simultaneously.",
    },
    {
      name: "Node.js & TypeScript",
      description:
        "Type-safe backend development with excellent tooling and a huge ecosystem of packages.",
    },
    {
      name: "PostgreSQL & Supabase",
      description:
        "Reliable database solutions with real-time capabilities and built-in authentication.",
    },
    {
      name: "Vercel & AWS",
      description:
        "Scalable hosting that grows with you. Start free, pay as you scale.",
    },
    {
      name: "Stripe & Analytics",
      description:
        "Payment processing and user analytics out of the box. Understand your users and monetize from day one.",
    },
  ],

  // CTA
  ctaHeadline: "Ready to Build Your Startup's MVP?",
  ctaDescription:
    "Let's turn your idea into a product. We'll help you launch fast, learn from users, and iterate your way to product-market fit.",
};

export default function StartupsPage() {
  return <IndustryPageTemplate {...startupsPageData} />;
}
