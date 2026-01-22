import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Mobile app development, web applications, AI solutions, UI/UX design, MVP development, and maintenance services by RenderNext.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
