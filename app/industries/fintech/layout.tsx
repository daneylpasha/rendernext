import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fintech App Development | Secure Financial Solutions",
  description:
    "Expert fintech app development for banking, payments, investments, and cryptocurrency. PCI-DSS compliant, secure, and scalable financial solutions. Based in Austin, Texas.",
  keywords: [
    "fintech app development",
    "banking app development",
    "payment platform development",
    "investment app",
    "cryptocurrency app",
    "PCI-DSS compliant",
    "KYC AML solutions",
    "financial software development",
  ],
};

export default function FintechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
