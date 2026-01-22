import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Cost Estimator | Get a Free Quote",
  description:
    "Estimate your mobile app or web application development cost in under 2 minutes. Get an instant rough quote for your project from RenderNext.",
  openGraph: {
    title: "Project Cost Estimator | RenderNext",
    description:
      "Get a free, instant estimate for your mobile app, web application, or AI project. No commitment required.",
  },
};

export default function EstimateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
