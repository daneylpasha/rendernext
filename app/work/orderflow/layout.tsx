import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OrderFlow Case Study | Restaurant Ordering Platform | RenderNext",
  description:
    "See how we built OrderFlow — a restaurant ordering platform with real-time tracking, seamless payments, and loyalty rewards. Full case study with features, tech stack, and results.",
  openGraph: {
    title: "OrderFlow Case Study | Restaurant Ordering Platform | RenderNext",
    description:
      "Deep dive into how we built OrderFlow — a modern food ordering app with real-time tracking, Stripe payments, and an integrated loyalty rewards system.",
  },
  keywords: [
    "OrderFlow",
    "restaurant ordering app",
    "food delivery app",
    "React Native",
    "Next.js",
    "case study",
    "Stripe integration",
    "real-time tracking",
    "loyalty rewards",
    "mobile app development",
  ],
};

export default function OrderFlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
