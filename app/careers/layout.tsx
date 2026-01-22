import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join RenderNext and help build exceptional digital products. We're a remote-first team passionate about mobile apps, web development, and AI solutions.",
  openGraph: {
    title: "Careers at RenderNext",
    description:
      "Join our team and help build exceptional digital products. Remote-first, growth-focused, and passionate about great work.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
