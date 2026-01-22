"use client";

import {
  GraduationCap,
  BookOpen,
  Video,
  Users,
  BarChart3,
  Trophy,
  ClipboardCheck,
  MessageSquare,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";

const challenges = [
  {
    icon: Users,
    title: "Student Engagement",
    description:
      "Keeping learners motivated and actively participating in digital environments requires thoughtful design, interactive content, and personalized learning pathways that adapt to individual needs.",
  },
  {
    icon: BookOpen,
    title: "Accessibility Compliance",
    description:
      "Ensuring educational content meets WCAG 2.1 AA standards and accommodates diverse learning needs, including screen readers, captions, and alternative input methods for all students.",
  },
  {
    icon: Video,
    title: "Content Management",
    description:
      "Organizing, updating, and delivering vast libraries of educational content across multiple formats while maintaining version control and ensuring curriculum alignment.",
  },
  {
    icon: BarChart3,
    title: "Learning Analytics",
    description:
      "Collecting meaningful data on student progress, identifying at-risk learners early, and providing actionable insights to educators without overwhelming them with information.",
  },
];

const solutions = [
  {
    title: "Learning Management Systems (LMS)",
    description:
      "Comprehensive platforms that centralize course delivery, student management, and administrative functions for educational institutions of all sizes.",
    features: [
      "Course creation and curriculum mapping tools",
      "Student enrollment and registration workflows",
      "Assignment submission and grading systems",
      "Discussion forums and collaborative spaces",
      "Gradebook with weighted scoring and rubrics",
      "Certificate generation and credential tracking",
      "Parent/guardian portal access",
      "Multi-tenant architecture for institutions",
    ],
  },
  {
    title: "E-Learning & Course Platforms",
    description:
      "Engaging digital learning experiences that deliver content through interactive modules, video lessons, and self-paced curricula.",
    features: [
      "SCORM and xAPI compliance for content interoperability",
      "Adaptive learning paths based on performance",
      "Interactive video with embedded quizzes",
      "Microlearning module support",
      "Offline learning capabilities for mobile",
      "Content authoring tools for educators",
      "Multi-language and localization support",
      "Drip content scheduling for course pacing",
    ],
  },
  {
    title: "Video Streaming & Live Classes",
    description:
      "High-quality video delivery infrastructure supporting both live instruction and on-demand content libraries with interactive features.",
    features: [
      "Live streaming with low-latency delivery",
      "Virtual classroom with whiteboard tools",
      "Breakout rooms for group activities",
      "Screen sharing and presentation mode",
      "Automatic recording and transcription",
      "Closed captions and subtitle support",
      "Bandwidth-adaptive streaming quality",
      "Integration with Zoom, Teams, and Google Meet",
    ],
  },
  {
    title: "Assessment & Testing Systems",
    description:
      "Secure, flexible evaluation tools that support diverse assessment types from formative quizzes to high-stakes examinations.",
    features: [
      "Question bank management with tagging",
      "Multiple question types (MCQ, essay, matching)",
      "Randomized question pools and answer shuffling",
      "Timed assessments with auto-submission",
      "Proctoring integration for exam integrity",
      "Instant feedback and detailed explanations",
      "Competency-based assessment tracking",
      "Analytics on question difficulty and discrimination",
    ],
  },
];

const useCases = [
  {
    title: "K-12 School Management Platform",
    description:
      "An integrated solution for schools managing student information, attendance, grades, and parent communication in one unified system.",
    features: [
      "Student information system (SIS) integration",
      "Attendance tracking with absence notifications",
      "Report card generation and transcripts",
      "Parent-teacher communication portal",
      "Behavior tracking and intervention alerts",
      "Class scheduling and room management",
    ],
  },
  {
    title: "Corporate Training & Upskilling App",
    description:
      "A mobile-first learning platform enabling organizations to deliver compliance training, skill development, and onboarding programs at scale.",
    features: [
      "Role-based learning paths and curricula",
      "Compliance training with certification tracking",
      "Gamified learning with badges and leaderboards",
      "Manager dashboards for team progress",
      "Integration with HR systems (Workday, SAP)",
      "Push notifications for training reminders",
    ],
  },
  {
    title: "Online Course Marketplace",
    description:
      "A Udemy-style platform where educators create and sell courses while students discover, purchase, and learn at their own pace.",
    features: [
      "Instructor onboarding and course creation",
      "Payment processing and revenue splitting",
      "Student reviews and course ratings",
      "Recommendation engine for course discovery",
      "Affiliate and referral program support",
      "Promotional tools and discount codes",
    ],
  },
];

const compliance = [
  {
    name: "FERPA",
    description:
      "Full compliance with the Family Educational Rights and Privacy Act, protecting student education records and ensuring proper consent for data sharing.",
  },
  {
    name: "COPPA",
    description:
      "Children's Online Privacy Protection Act compliance for platforms serving users under 13, with verifiable parental consent mechanisms.",
  },
  {
    name: "WCAG 2.1 AA",
    description:
      "Web Content Accessibility Guidelines compliance ensuring educational content is accessible to learners with disabilities.",
  },
  {
    name: "Section 508",
    description:
      "Federal accessibility standards compliance for educational technology used in government-funded institutions and programs.",
  },
  {
    name: "GDPR",
    description:
      "General Data Protection Regulation compliance for platforms serving European students, including data portability and right to erasure.",
  },
  {
    name: "SOC 2 Type II",
    description:
      "System and Organization Controls certification demonstrating security, availability, and confidentiality of student data.",
  },
];

const techStack = [
  {
    name: "Video Streaming Infrastructure",
    description:
      "HLS and DASH adaptive streaming with CDN distribution for smooth playback across devices and network conditions.",
  },
  {
    name: "SCORM & xAPI (Tin Can)",
    description:
      "E-learning standards for content packaging, tracking learner interactions, and ensuring LMS interoperability.",
  },
  {
    name: "WebRTC",
    description:
      "Real-time communication protocol enabling low-latency live classes, virtual tutoring, and peer collaboration.",
  },
  {
    name: "React Native / Flutter",
    description:
      "Cross-platform mobile development for iOS and Android learning apps with offline-first capabilities.",
  },
  {
    name: "GraphQL APIs",
    description:
      "Flexible data fetching enabling efficient queries for complex educational data relationships and dashboards.",
  },
  {
    name: "PostgreSQL / MongoDB",
    description:
      "Robust database solutions for structured student records and flexible content storage with full-text search.",
  },
  {
    name: "Redis & Caching",
    description:
      "High-performance caching for leaderboards, session management, and frequently accessed course content.",
  },
  {
    name: "AWS / GCP Cloud",
    description:
      "Scalable cloud infrastructure with auto-scaling to handle enrollment surges and concurrent users during peak times.",
  },
  {
    name: "Elasticsearch",
    description:
      "Advanced search capabilities for course catalogs, content libraries, and student record queries.",
  },
];

export default function EducationPage() {
  return (
    <IndustryPageTemplate
      industry="Education"
      headline="EdTech App Development | Digital Learning Solutions"
      subheadline="We build innovative learning management systems, e-learning platforms, and student management applications that drive engagement and improve learning outcomes. From K-12 schools to corporate training programs, we help educational organizations leverage technology to transform how people learn."
      heroIcon={GraduationCap}
      accentColor="blue"
      challenges={challenges}
      solutions={solutions}
      useCases={useCases}
      compliance={compliance}
      techStack={techStack}
      ctaHeadline="Ready to Transform Learning Experiences?"
      ctaDescription="Let's discuss how we can help you build engaging, accessible educational applications that students and educators will love. Our team has deep expertise in LMS development, video streaming, gamification, and learning analytics."
    />
  );
}
