import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Resources",
  description:
    "Download free guides, checklists, and playbooks for mobile app development, React Native, Flutter, MVP planning, and AI integration.",
  openGraph: {
    title: "Free Resources | RenderNext",
    description:
      "Download free guides, checklists, and playbooks for mobile app development, React Native, Flutter, MVP planning, and AI integration.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Resources | RenderNext",
    description:
      "Download free guides, checklists, and playbooks for mobile app development, React Native, Flutter, MVP planning, and AI integration.",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
