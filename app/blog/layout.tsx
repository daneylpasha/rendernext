import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | RenderNext Blog",
    default: "Blog",
  },
  description:
    "Insights on mobile app development, web applications, AI solutions, and digital product strategy from RenderNext.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
