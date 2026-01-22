import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Native vs Cross-Platform Development: Full Breakdown 2026 | RenderNext",
  description:
    "Complete technical comparison of native (Swift/Kotlin) vs cross-platform (React Native, Flutter) mobile development. Performance metrics, cost analysis, timeline comparisons, and expert recommendations.",
  keywords: [
    "native vs cross-platform",
    "native vs cross-platform development",
    "Swift vs React Native",
    "Kotlin vs Flutter",
    "mobile app development comparison",
    "cross-platform mobile development",
    "native mobile development",
    "React Native vs native",
    "Flutter vs native",
    "mobile development cost comparison",
    "mobile app development timeline",
    "iOS development",
    "Android development",
  ],
  openGraph: {
    title: "Native vs Cross-Platform Development: Full Breakdown 2026",
    description:
      "In-depth technical comparison of native vs cross-platform mobile development. Performance, cost, timeline, and maintenance considerations with expert recommendations.",
    url: "https://rendernext.io/compare/native-vs-cross-platform",
    siteName: "RenderNext",
    type: "article",
    images: [
      {
        url: "https://rendernext.io/og/native-vs-cross-platform.png",
        width: 1200,
        height: 630,
        alt: "Native vs Cross-Platform Development Comparison 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Native vs Cross-Platform Development: Full Breakdown 2026",
    description:
      "In-depth technical comparison of native vs cross-platform mobile development. Performance, cost, timeline, and maintenance considerations.",
  },
  alternates: {
    canonical: "https://rendernext.io/compare/native-vs-cross-platform",
  },
};

export default function NativeVsCrossPlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
