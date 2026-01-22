"use client";

import {
  DollarSign,
  Shield,
  CreditCard,
  TrendingUp,
  Lock,
  BarChart3,
  Wallet,
  ArrowLeftRight,
} from "lucide-react";
import {
  IndustryPageTemplate,
  IndustryPageProps,
} from "@/components/templates/IndustryPageTemplate";

const fintechPageData: IndustryPageProps = {
  // Hero
  industry: "Fintech",
  headline: "Secure Financial Solutions That Users Trust",
  subheadline:
    "We build banking apps, payment platforms, investment tools, and cryptocurrency solutions with enterprise-grade security and regulatory compliance at their core.",
  heroIcon: DollarSign,
  accentColor: "green",

  // Challenges
  challenges: [
    {
      icon: Shield,
      title: "Security Requirements",
      description:
        "Financial applications face constant threats from fraud, data breaches, and cyberattacks. Every transaction must be protected with bank-level encryption and multi-factor authentication.",
    },
    {
      icon: ArrowLeftRight,
      title: "Real-Time Processing",
      description:
        "Users expect instant transactions, live market data, and real-time balance updates. Milliseconds matter when money is on the line.",
    },
    {
      icon: Lock,
      title: "Regulatory Compliance",
      description:
        "Navigating PCI-DSS, KYC/AML, SOC 2, and regional regulations requires deep expertise. Non-compliance can result in massive fines and loss of operating licenses.",
    },
    {
      icon: BarChart3,
      title: "Scalability Under Load",
      description:
        "Financial apps must handle traffic spikes during market events, paydays, and promotional campaigns without degradation in performance or security.",
    },
  ],

  // Solutions
  solutions: [
    {
      title: "Digital Banking Applications",
      description:
        "Full-featured mobile and web banking platforms that deliver seamless user experiences while maintaining institutional-grade security.",
      features: [
        "Account management and dashboards",
        "Secure fund transfers (ACH, wire, P2P)",
        "Bill pay and scheduled payments",
        "Mobile check deposit with OCR",
        "Multi-currency support",
        "Biometric authentication (Face ID, fingerprint)",
        "Push notification alerts for transactions",
        "Spending insights and analytics",
      ],
    },
    {
      title: "Payment Processing Platforms",
      description:
        "Build payment gateways, merchant services, and checkout solutions that handle transactions securely at scale.",
      features: [
        "PCI-DSS Level 1 compliant architecture",
        "Multi-payment method support (cards, ACH, wallets)",
        "Tokenization and encryption",
        "Fraud detection and prevention",
        "Recurring billing and subscriptions",
        "Split payments and marketplace payouts",
        "Real-time transaction monitoring",
        "Dispute and chargeback management",
      ],
    },
    {
      title: "Investment and Trading Platforms",
      description:
        "Sophisticated trading interfaces and portfolio management tools for retail and institutional investors.",
      features: [
        "Real-time market data feeds",
        "Order execution and management",
        "Portfolio tracking and analytics",
        "Robo-advisory algorithms",
        "Research and charting tools",
        "Tax-loss harvesting automation",
        "Social trading and copy trading",
        "Fractional share investing",
      ],
    },
    {
      title: "Cryptocurrency and Blockchain Solutions",
      description:
        "Secure crypto wallets, exchanges, and DeFi applications built with the latest blockchain technologies.",
      features: [
        "Multi-chain wallet support",
        "Secure key management and custody",
        "Crypto-to-fiat on/off ramps",
        "DEX and swap integrations",
        "NFT marketplace functionality",
        "Staking and yield farming",
        "Transaction history and tax reporting",
        "Hardware wallet integration",
      ],
    },
  ],

  // Use Cases
  useCases: [
    {
      title: "Neobank Mobile App",
      description:
        "A modern digital bank offering checking, savings, and debit cards with zero fees and smart financial tools.",
      features: [
        "Instant account opening with KYC verification",
        "Virtual and physical debit card management",
        "Early direct deposit and paycheck advances",
        "Automated savings goals and round-ups",
        "Real-time spending notifications",
        "Budgeting tools and financial insights",
      ],
    },
    {
      title: "B2B Payment Platform",
      description:
        "Enterprise payment infrastructure enabling businesses to send, receive, and manage payments globally.",
      features: [
        "Multi-user access with role-based permissions",
        "Batch payment processing",
        "Invoice generation and tracking",
        "API-first architecture for integrations",
        "Cross-border payments with FX",
        "Compliance reporting and audit trails",
      ],
    },
    {
      title: "Wealth Management Dashboard",
      description:
        "Comprehensive platform for financial advisors and clients to manage investments and plan for the future.",
      features: [
        "Aggregated account views across institutions",
        "Goal-based financial planning",
        "Risk assessment and rebalancing",
        "Performance reporting and benchmarking",
        "Secure client-advisor messaging",
        "Document vault for statements and tax forms",
      ],
    },
  ],

  // Compliance
  compliance: [
    {
      name: "PCI-DSS",
      description:
        "Payment Card Industry Data Security Standard compliance for secure handling of credit card information and transactions.",
    },
    {
      name: "KYC/AML",
      description:
        "Know Your Customer and Anti-Money Laundering protocols to verify user identities and prevent financial crimes.",
    },
    {
      name: "SOC 2 Type II",
      description:
        "Service Organization Control certification demonstrating security, availability, and confidentiality controls.",
    },
    {
      name: "GDPR & CCPA",
      description:
        "Data privacy compliance ensuring user rights are protected and personal data is handled responsibly.",
    },
    {
      name: "Open Banking (PSD2)",
      description:
        "European Payment Services Directive compliance enabling secure third-party access to banking data.",
    },
    {
      name: "State Money Transmitter",
      description:
        "Licensing and compliance support for money transmission activities across different jurisdictions.",
    },
  ],

  // Tech Stack
  techStack: [
    {
      name: "React Native & Next.js",
      description:
        "Cross-platform mobile apps and performant web applications with shared business logic.",
    },
    {
      name: "Node.js & Python",
      description:
        "Scalable backend services for transaction processing, data analysis, and ML-powered fraud detection.",
    },
    {
      name: "PostgreSQL & Redis",
      description:
        "ACID-compliant databases for financial transactions with high-performance caching layers.",
    },
    {
      name: "Plaid & Stripe",
      description:
        "Best-in-class integrations for bank connections, payment processing, and identity verification.",
    },
    {
      name: "AWS & GCP",
      description:
        "Cloud infrastructure with compliance certifications, encryption at rest, and disaster recovery.",
    },
    {
      name: "Kafka & WebSockets",
      description:
        "Real-time event streaming and live data feeds for instant updates and notifications.",
    },
  ],

  // CTA
  ctaHeadline: "Ready to Build Your Fintech Product?",
  ctaDescription:
    "Let's discuss your vision and create a secure, compliant, and user-friendly financial application that stands out in the market.",
};

export default function FintechPage() {
  return <IndustryPageTemplate {...fintechPageData} />;
}
