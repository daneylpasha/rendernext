import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web App Development",
  description:
    "Modern web application development with Next.js, React, and Node.js. Fast, scalable, SEO-optimized solutions.",
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
