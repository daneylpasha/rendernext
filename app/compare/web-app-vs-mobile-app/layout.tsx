import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web App vs Mobile App: Which Should You Build? | Complete Guide 2024",
  description:
    "Discover whether you should build a web app or mobile app. Compare costs, timelines, features, and learn about hybrid options like PWA and React Native. Expert guide with decision framework.",
  keywords: [
    "web app vs mobile app",
    "should I build a web app or mobile app",
    "web application development",
    "mobile app development",
    "PWA vs native app",
    "React Native vs web app",
    "app development cost comparison",
    "web app vs mobile app pros cons",
    "cross-platform app development",
    "hybrid app development",
  ],
  openGraph: {
    title: "Web App vs Mobile App: Which Should You Build?",
    description:
      "Complete comparison guide to help you decide between web app and mobile app development. Includes cost analysis, timeline comparison, and decision framework.",
    type: "article",
    url: "/compare/web-app-vs-mobile-app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web App vs Mobile App: Which Should You Build?",
    description:
      "Complete comparison guide to help you decide between web app and mobile app development.",
  },
  alternates: {
    canonical: "/compare/web-app-vs-mobile-app",
  },
};

export default function WebAppVsMobileAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
