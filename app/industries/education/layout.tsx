import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EdTech App Development | Digital Learning Solutions",
  description:
    "Expert education app development services specializing in learning management systems, e-learning platforms, student management, and corporate training solutions. We build engaging, accessible digital learning experiences with video streaming, progress tracking, gamification, and comprehensive assessments.",
  keywords: [
    "edtech app development",
    "learning management system",
    "LMS development",
    "e-learning platform",
    "student management system",
    "corporate training app",
    "online course platform",
    "educational software development",
    "video learning platform",
    "gamification in education",
    "assessment system",
    "SCORM development",
    "xAPI integration",
    "FERPA compliant software",
    "accessible education technology",
    "mobile learning app",
    "virtual classroom",
    "education analytics",
  ],
  openGraph: {
    title: "EdTech App Development | Digital Learning Solutions",
    description:
      "Expert education app development services specializing in learning management systems, e-learning platforms, student management, and corporate training solutions with video streaming, gamification, and analytics.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EdTech App Development | Digital Learning Solutions",
    description:
      "Expert education app development services specializing in learning management systems, e-learning platforms, student management, and corporate training solutions with video streaming, gamification, and analytics.",
  },
};

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
