import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { AIChatbot } from "@/components/AIChatbot";
import { OrganizationJsonLd, WebsiteJsonLd, LocalBusinessJsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rendernext.io"),
  title: {
    default: "RenderNext | Mobile App & Web Development Studio",
    template: "%s | RenderNext",
  },
  description:
    "RenderNext is a digital product studio specializing in React Native mobile apps, Next.js web applications, and AI solutions. Based in Austin, Texas.",
  keywords: [
    "mobile app development",
    "React Native",
    "web development",
    "Next.js",
    "AI solutions",
    "Austin",
    "Texas",
    "app development agency",
    "iOS development",
    "Android development",
    "cross-platform apps",
    "UI/UX design",
  ],
  authors: [{ name: "RenderNext" }],
  creator: "RenderNext",
  publisher: "RenderNext",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rendernext.io",
    siteName: "RenderNext",
    title: "RenderNext | Digital Product Studio",
    description:
      "Austin-based digital product studio specializing in mobile apps, web applications, and AI solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RenderNext | Digital Product Studio",
    description:
      "Austin-based digital product studio specializing in mobile apps, web applications, and AI solutions.",
    creator: "@rendernext",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <LocalBusinessJsonLd />
      </head>
      <body className="font-sans antialiased">
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <ScrollToTop />
        <Navigation />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <Footer />
        <FloatingCTA />
        <ExitIntentPopup />
        <AIChatbot />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
