import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agency vs Freelancer: How to Choose for Your Project | Complete Guide 2024",
  description:
    "Comprehensive comparison between hiring a development agency vs freelancer. Explore costs, risks, timelines, and discover which option is right for your project needs.",
  keywords: [
    "agency vs freelancer",
    "hire developer agency or freelancer",
    "freelancer vs agency cost",
    "software development agency",
    "freelance developer",
    "outsourcing development",
    "when to hire agency",
    "when to hire freelancer",
    "development team comparison",
    "agency benefits",
    "freelancer pros cons",
  ],
  openGraph: {
    title: "Agency vs Freelancer: How to Choose for Your Project",
    description:
      "Complete comparison guide to help you decide between hiring a development agency or freelancer. Includes cost analysis, risk assessment, and decision framework.",
    type: "article",
    url: "/compare/agency-vs-freelancer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agency vs Freelancer: How to Choose for Your Project",
    description:
      "Complete comparison guide to help you decide between hiring a development agency or freelancer.",
  },
  alternates: {
    canonical: "/compare/agency-vs-freelancer",
  },
};

export default function AgencyVsFreelancerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
