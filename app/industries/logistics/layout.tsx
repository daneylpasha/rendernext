import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logistics & Fleet App Development | Streamline Operations",
  description:
    "Expert logistics and fleet management app development services specializing in real-time GPS tracking, route optimization, delivery tracking, warehouse applications, and driver mobile apps. We build offline-capable, hardware-integrated solutions that streamline operations and reduce costs.",
  keywords: [
    "logistics app development",
    "fleet management software",
    "delivery tracking app",
    "route optimization software",
    "warehouse management app",
    "driver mobile app",
    "GPS tracking software",
    "fleet tracking system",
    "last-mile delivery app",
    "transportation management system",
    "ELD compliance software",
    "supply chain app",
    "cold chain monitoring",
    "dispatch software",
    "logistics mobile app",
  ],
  openGraph: {
    title: "Logistics & Fleet App Development | Streamline Operations",
    description:
      "Expert logistics and fleet management app development services specializing in real-time GPS tracking, route optimization, delivery tracking, and warehouse applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logistics & Fleet App Development | Streamline Operations",
    description:
      "Expert logistics and fleet management app development services specializing in real-time GPS tracking, route optimization, delivery tracking, and warehouse applications.",
  },
};

export default function LogisticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
