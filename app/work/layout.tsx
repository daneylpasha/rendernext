import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Portfolio of mobile apps, web applications, and digital products built by RenderNext. See our featured projects and case studies.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
