import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cartaisy Case Study | Mobile Apps for Shopify | RenderNext",
  description:
    "See how we built Cartaisy — a SaaS platform that transforms Shopify stores into native mobile apps. Full case study with features, tech stack, pricing, and ROI examples.",
  openGraph: {
    title: "Cartaisy Case Study | Mobile Apps for Shopify | RenderNext",
    description:
      "Deep dive into how we built Cartaisy — transforming Shopify stores into native iOS & Android apps with push notifications, Apple Pay, and abandoned cart recovery.",
  },
  keywords: [
    "Cartaisy",
    "Shopify mobile app",
    "Shopify app builder",
    "mobile commerce",
    "React Native",
    "case study",
    "SaaS product",
    "push notifications",
    "Apple Pay",
    "abandoned cart recovery",
  ],
};

export default function CartaisyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
