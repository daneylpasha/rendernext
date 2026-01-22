import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce App Development | Mobile Shopping Solutions",
  description:
    "Build powerful e-commerce and mobile shopping apps with seamless payment gateways, AR try-on features, personalized experiences, and analytics. Expert development for shopping apps, marketplace platforms, and inventory management systems.",
  keywords: [
    "e-commerce app development",
    "mobile shopping app",
    "marketplace platform",
    "inventory management app",
    "payment gateway integration",
    "AR try-on",
    "shopping cart optimization",
    "omnichannel retail",
  ],
};

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
