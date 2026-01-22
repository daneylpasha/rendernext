import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "RenderNext builds specialized digital solutions for healthcare, fintech, e-commerce, startups, education, and logistics. Industry-specific expertise for your unique challenges.",
  keywords: [
    "healthcare app development",
    "fintech development",
    "e-commerce app",
    "startup MVP",
    "edtech development",
    "logistics software",
    "industry solutions",
  ],
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
