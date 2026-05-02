"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Smartphone,
  Globe,
  Brain,
  Palette,
  Rocket,
  Shield,
  Heart,
  DollarSign,
  ShoppingCart,
  GraduationCap,
  Truck,
  Calculator,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui";
import { Button } from "@/components/ui";

const services = [
  {
    title: "Mobile App Development",
    description: "iOS, Android & Cross-platform apps",
    href: "/services/mobile-development",
    icon: Smartphone,
  },
  {
    title: "Web App Development",
    description: "Next.js, React & Node.js solutions",
    href: "/services/web-development",
    icon: Globe,
  },
  {
    title: "AI Solutions",
    description: "Chatbots, automation & LLM integration",
    href: "/services/ai-solutions",
    icon: Brain,
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that converts",
    href: "/services/ui-ux-design",
    icon: Palette,
  },
  {
    title: "MVP Development",
    description: "Validate your idea in weeks",
    href: "/services/mvp-development",
    icon: Rocket,
  },
  {
    title: "Maintenance & Support",
    description: "Keep your product running smoothly",
    href: "/services/maintenance",
    icon: Shield,
  },
];

const industries = [
  { title: "Healthcare", href: "/industries/healthcare", icon: Heart },
  { title: "Fintech", href: "/industries/fintech", icon: DollarSign },
  { title: "E-commerce", href: "/industries/ecommerce", icon: ShoppingCart },
  { title: "Startups", href: "/industries/startups", icon: Rocket },
  { title: "Education", href: "/industries/education", icon: GraduationCap },
  { title: "Logistics", href: "/industries/logistics", icon: Truck },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true, dropdownType: "services" },
  { label: "Industries", href: "/industries", hasDropdown: true, dropdownType: "industries" },
  { label: "Work", href: "/work" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = React.useState<string | null>(null);
  const pathname = usePathname();

  const useLightHeader = pathname.startsWith("/blog");

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          useLightHeader
            ? "bg-white/95 backdrop-blur-sm shadow-sm"
            : isScrolled
              ? "bg-[#0e0e0e]/95 backdrop-blur-2xl border-b border-white/[0.10] shadow-xl shadow-black/30"
              : "bg-[#141414]/80 backdrop-blur-xl border-b border-white/[0.06]"
        )}
      >
        {/* Amber accent line */}
        {!useLightHeader && (
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5A623]/60 to-transparent" />
        )}

        <Container>
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center z-10">
              <Image
                src={useLightHeader
                  ? "/assets/logos/Logo_500w-H-light-trans.png"
                  : "/assets/logos/Logo_500w-H-dark-trans.png"}
                alt="RenderNext"
                width={160}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.dropdownType || null)}
                  onMouseLeave={() => link.hasDropdown && setOpenDropdown(null)}
                >
                  {link.hasDropdown ? (
                    <button
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium transition-colors duration-300 group",
                        useLightHeader
                          ? "text-gray-600 hover:text-gray-900"
                          : "text-white/65 hover:text-white"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          openDropdown === link.dropdownType && "rotate-180"
                        )}
                      />
                      <span
                        className={cn(
                          "absolute -bottom-1 left-0 h-0.5 bg-[#F5A623] transition-all duration-300",
                          openDropdown === link.dropdownType ? "w-full" : "w-0 group-hover:w-full"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "relative text-sm font-medium transition-colors duration-300 group",
                        useLightHeader
                          ? "text-gray-600 hover:text-gray-900"
                          : "text-white/65 hover:text-white",
                        pathname === link.href &&
                          (useLightHeader ? "!text-gray-900" : "!text-white")
                      )}
                    >
                      {link.label}
                      <span
                        className={cn(
                          "absolute -bottom-1 left-0 h-0.5 bg-[#F5A623] transition-all duration-300",
                          pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                        )}
                      />
                    </Link>
                  )}

                  {/* Services Dropdown */}
                  {link.dropdownType === "services" && (
                    <AnimatePresence>
                      {openDropdown === "services" && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                        >
                          <div
                            className="rounded-2xl p-6 w-[600px]"
                            style={{
                              background: "rgba(12,12,12,0.97)",
                              backdropFilter: "blur(24px)",
                              border: "1px solid rgba(255,255,255,0.10)",
                              boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(245,166,35,0.06)",
                            }}
                          >
                            {/* Top accent */}
                            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#F5A623]/30 to-transparent" />
                            <div className="grid grid-cols-2 gap-2">
                              {services.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition-colors group"
                                >
                                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#F5A623]/12 flex items-center justify-center group-hover:bg-[#F5A623]/20 transition-colors">
                                    <service.icon className="h-4 w-4 text-[#F5A623]" />
                                  </div>
                                  <div>
                                    <div className="font-semibold text-white/85 group-hover:text-white transition-colors text-sm">
                                      {service.title}
                                    </div>
                                    <div className="text-xs text-white/35 mt-0.5 leading-relaxed">
                                      {service.description}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/[0.07]">
                              <Link
                                href="/services"
                                className="text-sm font-semibold text-[#F5A623] hover:text-[#FFB84D] transition-colors"
                              >
                                View all services →
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {/* Industries Dropdown */}
                  {link.dropdownType === "industries" && (
                    <AnimatePresence>
                      {openDropdown === "industries" && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                        >
                          <div
                            className="rounded-2xl p-5 w-[380px]"
                            style={{
                              background: "rgba(12,12,12,0.97)",
                              backdropFilter: "blur(24px)",
                              border: "1px solid rgba(255,255,255,0.10)",
                              boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(245,166,35,0.06)",
                            }}
                          >
                            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#F5A623]/30 to-transparent" />
                            <div className="grid grid-cols-2 gap-1.5">
                              {industries.map((industry) => (
                                <Link
                                  key={industry.href}
                                  href={industry.href}
                                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition-colors group"
                                >
                                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#F5A623]/12 flex items-center justify-center group-hover:bg-[#F5A623]/20 transition-colors">
                                    <industry.icon className="h-3.5 w-3.5 text-[#F5A623]" />
                                  </div>
                                  <span className="font-medium text-white/75 group-hover:text-white transition-colors text-sm">
                                    {industry.title}
                                  </span>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-3 pt-3 border-t border-white/[0.07]">
                              <Link
                                href="/industries"
                                className="text-sm font-semibold text-[#F5A623] hover:text-[#FFB84D] transition-colors"
                              >
                                View all industries →
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden xl:flex items-center gap-4">
              <Link
                href="/estimate"
                className={cn(
                  "flex items-center gap-1.5 text-sm font-medium transition-colors",
                  useLightHeader
                    ? "text-gray-600 hover:text-[#F5A623]"
                    : "text-white/55 hover:text-[#F5A623]"
                )}
              >
                <Calculator className="w-4 h-4" />
                Estimate
              </Link>
              <Button asChild size="sm">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "xl:hidden p-2 rounded-lg transition-colors z-10",
                useLightHeader || isMobileMenuOpen
                  ? "text-gray-900 hover:bg-gray-100"
                  : "text-white/80 hover:bg-white/10"
              )}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 xl:hidden"
          >
            <div className="absolute inset-0 bg-[#0c0c0c]" />
            <div className="relative h-full flex flex-col pt-24 pb-8 px-6">
              <nav className="flex-1 flex flex-col items-center justify-center gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="w-full max-w-sm"
                  >
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setMobileOpenDropdown(
                            mobileOpenDropdown === link.dropdownType ? null : link.dropdownType || null
                          )}
                          className="w-full flex items-center justify-center gap-2 text-xl font-semibold text-white"
                        >
                          {link.label}
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 transition-transform duration-200",
                              mobileOpenDropdown === link.dropdownType && "rotate-180"
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileOpenDropdown === link.dropdownType && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 space-y-2">
                                {link.dropdownType === "services" && services.map((service) => (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors"
                                  >
                                    <service.icon className="h-5 w-5 text-[#F5A623]" />
                                    <span className="text-white/80">{service.title}</span>
                                  </Link>
                                ))}
                                {link.dropdownType === "industries" && industries.map((industry) => (
                                  <Link
                                    key={industry.href}
                                    href={industry.href}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors"
                                  >
                                    <industry.icon className="h-5 w-5 text-[#F5A623]" />
                                    <span className="text-white/80">{industry.title}</span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          "block text-center text-xl font-semibold transition-colors",
                          pathname === link.href ? "text-white" : "text-white/55 hover:text-white"
                        )}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
