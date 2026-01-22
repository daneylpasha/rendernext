import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup MVP Development | Launch Fast, Learn Faster",
  description:
    "Expert MVP development for startups. Rapid prototyping, investor-ready demos, and scalable architecture. Go from idea to launch in weeks, not months. Based in Austin, Texas.",
  keywords: [
    "startup MVP development",
    "rapid prototyping",
    "MVP app development",
    "startup software development",
    "investor demo",
    "scalable architecture",
    "lean startup development",
    "product market fit",
  ],
};

export default function StartupsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
