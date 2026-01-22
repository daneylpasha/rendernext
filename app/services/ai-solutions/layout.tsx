import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions",
  description:
    "Custom AI solutions including chatbots, automation, and LLM integration. OpenAI, Claude, and LangChain expertise.",
};

export default function AISolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
