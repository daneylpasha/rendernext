import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FitPlus Case Study | Fitness Tracking App | RenderNext",
  description:
    "See how we built FitPlus — a comprehensive fitness tracking app with personalized workout plans, nutrition logging, and progress analytics. Full case study with features and tech stack.",
  openGraph: {
    title: "FitPlus Case Study | Fitness Tracking App | RenderNext",
    description:
      "Deep dive into how we built FitPlus — a fitness app with personalized workouts, nutrition tracking, HealthKit integration, and progress analytics.",
  },
  keywords: [
    "FitPlus",
    "fitness app",
    "workout tracking",
    "React Native",
    "Firebase",
    "case study",
    "HealthKit",
    "nutrition tracking",
    "fitness analytics",
    "mobile app development",
  ],
};

export default function FitPlusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
