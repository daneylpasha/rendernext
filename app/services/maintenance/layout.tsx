import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maintenance & Support",
  description:
    "Ongoing app maintenance, support, and monitoring services. Bug fixes, updates, and 24/7 monitoring to keep your product running smoothly.",
};

export default function MaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
