import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development",
  description:
    "Expert React Native mobile app development for iOS and Android. Native performance, cross-platform efficiency. Based in Austin, Texas.",
};

export default function MobileDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
