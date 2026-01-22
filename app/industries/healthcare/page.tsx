"use client";

import {
  Heart,
  Shield,
  Lock,
  Users,
  Activity,
  Stethoscope,
  FileText,
  Clock,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";

const challenges = [
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description:
      "Navigating complex healthcare regulations while building user-friendly applications requires deep expertise in data protection, access controls, and audit trails.",
  },
  {
    icon: Lock,
    title: "Data Security",
    description:
      "Protected Health Information (PHI) demands enterprise-grade encryption, secure transmission protocols, and comprehensive breach prevention measures.",
  },
  {
    icon: Activity,
    title: "System Interoperability",
    description:
      "Integrating with legacy EHR systems, HL7 feeds, and FHIR APIs while maintaining data integrity across disparate healthcare platforms.",
  },
  {
    icon: Users,
    title: "User Trust & Adoption",
    description:
      "Building patient confidence through transparent data practices, intuitive interfaces, and reliable performance in critical care situations.",
  },
];

const solutions = [
  {
    title: "Patient Portal Development",
    description:
      "Secure, accessible platforms that empower patients to manage their healthcare journey with confidence and convenience.",
    features: [
      "Secure patient authentication with MFA",
      "Medical records access and download",
      "Appointment scheduling and reminders",
      "Prescription refill requests",
      "Lab results viewing with explanations",
      "Secure messaging with care teams",
      "Insurance and billing management",
      "Health history timeline visualization",
    ],
  },
  {
    title: "Telemedicine Solutions",
    description:
      "HIPAA-compliant virtual care platforms that connect patients with providers through seamless video consultations.",
    features: [
      "HD video consultations with encryption",
      "Virtual waiting rooms and queue management",
      "Screen sharing for result review",
      "E-prescribing integration",
      "Automated visit summaries",
      "Multi-provider conference capabilities",
      "Mobile-first responsive design",
      "Bandwidth-adaptive streaming",
    ],
  },
  {
    title: "Health Tracking Applications",
    description:
      "Comprehensive wellness monitoring tools that collect, analyze, and present health data in actionable formats.",
    features: [
      "Wearable device integration (Apple Health, Fitbit, Garmin)",
      "Medication adherence tracking",
      "Vital signs monitoring and alerts",
      "Symptom logging and pattern analysis",
      "Goal setting and progress visualization",
      "Care plan compliance tracking",
      "Family health sharing options",
      "AI-powered health insights",
    ],
  },
  {
    title: "EHR Integration Services",
    description:
      "Robust connectivity solutions that bridge your applications with major electronic health record systems.",
    features: [
      "Epic, Cerner, and Allscripts integration",
      "FHIR R4 API implementation",
      "HL7 v2 message parsing",
      "Bidirectional data synchronization",
      "Clinical data mapping and transformation",
      "Real-time event notifications",
      "Bulk data export capabilities",
      "Integration testing and validation",
    ],
  },
];

const useCases = [
  {
    title: "Remote Patient Monitoring Platform",
    description:
      "A comprehensive RPM solution enabling continuous health monitoring for chronic disease management and post-acute care.",
    features: [
      "Real-time vital signs dashboard",
      "Automated alert escalation workflows",
      "Care team notification system",
      "Patient-reported outcomes collection",
      "Trend analysis and risk scoring",
      "Medicare RPM billing compliance",
    ],
  },
  {
    title: "Mental Health & Therapy App",
    description:
      "A secure platform connecting patients with mental health professionals through video sessions, messaging, and self-help tools.",
    features: [
      "Therapist matching algorithm",
      "Mood tracking and journaling",
      "Crisis intervention resources",
      "Group therapy session support",
      "Progress notes and treatment plans",
      "Insurance verification automation",
    ],
  },
  {
    title: "Clinical Trial Management System",
    description:
      "A digital platform streamlining participant recruitment, consent management, and data collection for research organizations.",
    features: [
      "Electronic consent (eConsent) workflows",
      "Participant screening and eligibility",
      "Visit scheduling and reminders",
      "Adverse event reporting",
      "21 CFR Part 11 compliance",
      "Real-time enrollment analytics",
    ],
  },
];

const compliance = [
  {
    name: "HIPAA",
    description:
      "Full compliance with the Health Insurance Portability and Accountability Act, including Privacy Rule, Security Rule, and Breach Notification requirements.",
  },
  {
    name: "HL7",
    description:
      "Implementation of Health Level Seven International standards for electronic health information exchange between healthcare systems.",
  },
  {
    name: "FHIR",
    description:
      "Fast Healthcare Interoperability Resources API implementation for modern, RESTful health data exchange and integration.",
  },
  {
    name: "HITRUST",
    description:
      "Alignment with HITRUST Common Security Framework (CSF) for comprehensive healthcare security certification readiness.",
  },
  {
    name: "SOC 2 Type II",
    description:
      "System and Organization Controls compliance ensuring security, availability, processing integrity, and confidentiality.",
  },
  {
    name: "21 CFR Part 11",
    description:
      "FDA compliance for electronic records and signatures in clinical and pharmaceutical applications.",
  },
];

const techStack = [
  {
    name: "End-to-End Encryption",
    description:
      "AES-256 encryption for data at rest and TLS 1.3 for data in transit, ensuring PHI protection at every layer.",
  },
  {
    name: "FHIR R4 APIs",
    description:
      "Modern RESTful APIs following the latest FHIR specification for seamless EHR integration and data exchange.",
  },
  {
    name: "AWS HIPAA-Eligible Services",
    description:
      "Cloud infrastructure leveraging AWS Business Associate Agreement (BAA) covered services for compliant hosting.",
  },
  {
    name: "React Native / Flutter",
    description:
      "Cross-platform mobile development for iOS and Android patient apps with native performance.",
  },
  {
    name: "WebRTC",
    description:
      "Real-time communication protocol powering secure, low-latency telemedicine video consultations.",
  },
  {
    name: "PostgreSQL with Row-Level Security",
    description:
      "Enterprise database with granular access controls ensuring patients only see their own data.",
  },
  {
    name: "OAuth 2.0 / OpenID Connect",
    description:
      "Industry-standard authentication protocols with support for SMART on FHIR app authorization.",
  },
  {
    name: "Audit Logging & SIEM",
    description:
      "Comprehensive activity logging with security information and event management for compliance reporting.",
  },
  {
    name: "Kubernetes with RBAC",
    description:
      "Container orchestration with role-based access control for scalable, secure deployment.",
  },
];

export default function HealthcarePage() {
  return (
    <IndustryPageTemplate
      industry="Healthcare"
      headline="Secure Healthcare Applications Built for Patient Trust"
      subheadline="We develop HIPAA-compliant patient portals, telemedicine platforms, and health tracking applications that prioritize security, interoperability, and exceptional user experiences. From EHR integrations to remote monitoring solutions, we help healthcare organizations deliver better care through technology."
      heroIcon={Heart}
      accentColor="red"
      challenges={challenges}
      solutions={solutions}
      useCases={useCases}
      compliance={compliance}
      techStack={techStack}
      ctaHeadline="Ready to Transform Healthcare Delivery?"
      ctaDescription="Let's discuss how we can help you build secure, compliant healthcare applications that patients and providers will love. Our team has deep expertise in HIPAA, HL7, FHIR, and healthcare-specific UX design."
    />
  );
}
