import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Native vs Flutter 2026: Complete Comparison Guide | RenderNext",
  description:
    "Comprehensive comparison of React Native vs Flutter in 2026. Compare performance, development speed, UI capabilities, costs, and more. Expert insights from a mobile development agency.",
  keywords: [
    "React Native vs Flutter",
    "React Native vs Flutter 2026",
    "Flutter vs React Native comparison",
    "cross-platform mobile development",
    "mobile app framework comparison",
    "React Native performance",
    "Flutter performance",
    "mobile development cost",
    "best mobile framework 2026",
  ],
  openGraph: {
    title: "React Native vs Flutter 2026: Complete Comparison Guide",
    description:
      "In-depth comparison of React Native and Flutter for mobile app development. Performance, cost, learning curve, and expert recommendations.",
    url: "https://rendernext.io/compare/react-native-vs-flutter",
    siteName: "RenderNext",
    type: "article",
    images: [
      {
        url: "https://rendernext.io/og/react-native-vs-flutter.png",
        width: 1200,
        height: 630,
        alt: "React Native vs Flutter Comparison 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "React Native vs Flutter 2026: Complete Comparison Guide",
    description:
      "In-depth comparison of React Native and Flutter for mobile app development. Performance, cost, learning curve, and expert recommendations.",
  },
  alternates: {
    canonical: "https://rendernext.io/compare/react-native-vs-flutter",
  },
};

export default function ReactNativeVsFlutterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
