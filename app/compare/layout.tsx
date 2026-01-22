import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | RenderNext",
    default: "Technology Comparisons | RenderNext",
  },
  description:
    "Expert comparisons and guides to help you make the right technology decisions for your app development project.",
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
