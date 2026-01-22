import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about RenderNext, a digital product studio specializing in mobile apps, web development, and AI solutions. Based in Austin, Texas.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
