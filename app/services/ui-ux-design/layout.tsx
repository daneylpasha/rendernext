import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design",
  description:
    "User-centered design services including research, wireframing, prototyping, and design systems. Beautiful interfaces that convert.",
};

export default function UIUXDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
