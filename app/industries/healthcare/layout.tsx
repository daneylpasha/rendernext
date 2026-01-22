import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare App Development | HIPAA-Compliant Solutions",
  description:
    "Expert healthcare app development services specializing in HIPAA-compliant patient portals, telemedicine platforms, health tracking apps, and EHR integrations. We build secure, interoperable solutions that prioritize patient trust and regulatory compliance.",
  keywords: [
    "healthcare app development",
    "HIPAA compliant software",
    "patient portal development",
    "telemedicine app",
    "EHR integration",
    "HL7 integration",
    "FHIR API development",
    "health tracking app",
    "remote patient monitoring",
    "medical software development",
    "healthcare mobile app",
    "clinical software",
    "PHI security",
    "healthcare interoperability",
  ],
  openGraph: {
    title: "Healthcare App Development | HIPAA-Compliant Solutions",
    description:
      "Expert healthcare app development services specializing in HIPAA-compliant patient portals, telemedicine platforms, health tracking apps, and EHR integrations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare App Development | HIPAA-Compliant Solutions",
    description:
      "Expert healthcare app development services specializing in HIPAA-compliant patient portals, telemedicine platforms, health tracking apps, and EHR integrations.",
  },
};

export default function HealthcareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
