import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaskHub Case Study | Team Collaboration App | RenderNext",
  description:
    "See how we built TaskHub — a team collaboration and task management app with real-time updates, project boards, and seamless communication. Full case study with features and tech stack.",
  openGraph: {
    title: "TaskHub Case Study | Team Collaboration App | RenderNext",
    description:
      "Deep dive into how we built TaskHub — a productivity app with real-time collaboration, Kanban boards, and team communication features.",
  },
  keywords: [
    "TaskHub",
    "task management app",
    "team collaboration",
    "React Native",
    "Supabase",
    "case study",
    "WebSockets",
    "project management",
    "productivity app",
    "mobile app development",
  ],
};

export default function TaskHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
