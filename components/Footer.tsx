"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Github, Instagram } from "lucide-react";
import {
  Container,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui";

const services = [
  { name: "Mobile App Development", href: "/services/mobile-development" },
  { name: "Web App Development", href: "/services/web-development" },
  { name: "AI Solutions", href: "/services/ai-solutions" },
  { name: "UI/UX Design", href: "/services/ui-ux-design" },
  { name: "MVP Development", href: "/services/mvp-development" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Work", href: "/work" },
  { name: "Industries", href: "/industries" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
];

const resources = [
  { name: "Free Resources", href: "/resources" },
  { name: "Cost Estimator", href: "/estimate" },
  { name: "React Native vs Flutter", href: "/compare/react-native-vs-flutter" },
  { name: "Web vs Mobile App", href: "/compare/web-app-vs-mobile-app" },
];

// TODO: Update with actual RenderNext social media URLs
const social = [
  { name: "LinkedIn", href: "https://linkedin.com/company/rendernext", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/rendernext", icon: Twitter },
  { name: "GitHub", href: "https://github.com/rendernext", icon: Github },
  { name: "Instagram", href: "https://instagram.com/rendernext", icon: Instagram },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] border-t border-white/10">
      <Container>
        <div className="py-16 lg:py-20">
          <StaggerContainer
            staggerDelay={0.1}
            delayChildren={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8"
          >
            {/* Brand Column */}
            <StaggerItem>
              <Link href="/" className="inline-block">
                <Image
                  src="/assets/logos/Logo_500w-SQ-trans-dark-web.png"
                  alt="RenderNext"
                  width={100}
                  height={75}
                  className="h-24 w-auto"
                />
              </Link>
              <p className="text-gray-400 text-sm mt-4">
                Building tomorrow&apos;s apps, today.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4 mt-6">
                {social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-[#F5A623] transition-colors duration-200 hover:scale-110"
                    aria-label={item.name}
                  >
                    <item.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </StaggerItem>

            {/* Services Column */}
            <StaggerItem>
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-[#F5A623] text-sm transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            {/* Company Column */}
            <StaggerItem>
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-[#F5A623] text-sm transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            {/* Resources Column */}
            <StaggerItem>
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-[#F5A623] text-sm transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            {/* Contact Column */}
            <StaggerItem>
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                Get in Touch
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@rendernext.io"
                    className="text-gray-400 hover:text-[#F5A623] text-sm transition-colors duration-200"
                  >
                    hello@rendernext.io
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+15123256674"
                    className="text-gray-400 hover:text-[#F5A623] text-sm transition-colors duration-200"
                  >
                    +1 (512) 325-6674
                  </a>
                </li>
                <li>
                  <span className="text-gray-400 text-sm">
                    Austin, Texas, USA
                  </span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-block mt-6 px-5 py-2.5 text-sm font-medium text-[#F5A623]
                  border border-[#F5A623]/50 rounded-lg
                  hover:bg-[#F5A623]/10 hover:border-[#F5A623] hover:scale-105
                  transition-all duration-200"
              >
                Schedule a Call
              </Link>
            </StaggerItem>
          </StaggerContainer>

          {/* Bottom Bar */}
          <FadeIn delay={0.5}>
            <div className="border-t border-white/10 pt-8 mt-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-500 text-sm">
                  &copy; {currentYear} RenderNext LLC. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                  <Link
                    href="/privacy-policy"
                    className="text-gray-500 hover:text-[#F5A623] text-sm transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                  <span className="text-gray-600">•</span>
                  <Link
                    href="/terms"
                    className="text-gray-500 hover:text-[#F5A623] text-sm transition-colors duration-200"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </footer>
  );
}
