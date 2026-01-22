import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MVP Development",
  description:
    "Launch your MVP in 8-12 weeks. Validate your idea fast without cutting corners. Investor-ready products for startups.",
};

export default function MVPDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
