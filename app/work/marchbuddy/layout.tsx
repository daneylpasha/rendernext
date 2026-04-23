import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MarchBuddy Case Study | AI Fitness Coach App | RenderNext",
  description:
    "See how we built MarchBuddy — an AI-powered fitness coaching app with personalized running plans, workout tracking, FoodSnap nutrition logging, and real-time AI coaching. Full case study.",
  openGraph: {
    title: "MarchBuddy Case Study | AI Fitness Coach App | RenderNext",
    description:
      "Deep dive into how we built MarchBuddy — a personal AI fitness coach for running, workouts, and nutrition with adaptive training plans and AI-powered coaching.",
  },
  keywords: [
    "MarchBuddy",
    "AI fitness coach",
    "running app",
    "workout tracker",
    "nutrition tracking",
    "FoodSnap",
    "React Native",
    "AI coaching",
    "fitness app",
    "case study",
    "mobile app development",
  ],
};

export default function MarchBuddyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
