import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CBMS Case Study | Catering Business Management System | RenderNext",
  description:
    "See how we built CBMS — a multi-tenant SaaS platform for catering businesses with order management, branded invoicing, CRM, and real-time analytics. Full case study with features, tech stack, and results.",
  openGraph: {
    title: "CBMS Case Study | Catering Business Management System | RenderNext",
    description:
      "Deep dive into how we built CBMS — a complete digital toolkit for caterers with order lifecycle management, branded PDF generation, and multi-tenant architecture.",
  },
  keywords: [
    "CBMS",
    "catering management",
    "catering business",
    "SaaS platform",
    "multi-tenant",
    "React Native",
    "Supabase",
    "order management",
    "invoice generation",
    "case study",
    "mobile app development",
  ],
};

export default function CBMSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
