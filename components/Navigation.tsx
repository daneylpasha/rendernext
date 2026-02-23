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
  BookOpen,
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

  // Pages that should use light (white) header style
  const useLightHeader = pathname.startsWith("/blog");

  // Handle scroll state
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || useLightHeader
            ? "bg-white/95 backdrop-blur-sm shadow-sm"
            : "bg-gradient-to-b from-black/60 to-transparent"
        )}
      >
        <Container>
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center z-10">
              <Image
                src={isScrolled || useLightHeader ? "/assets/logos/Logo_500w-H-light-trans.png" : "/assets/logos/Logo_500w-H-dark-trans.png"}
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
                        isScrolled || useLightHeader
                          ? "text-gray-600 hover:text-gray-900"
                          : "text-white/80 hover:text-white"
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
                          "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
                          openDropdown === link.dropdownType ? "w-full" : "w-0 group-hover:w-full"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "relative text-sm font-medium transition-colors duration-300 group",
                        isScrolled || useLightHeader
                          ? "text-gray-600 hover:text-gray-900"
                          : "text-white/80 hover:text-white",
                        pathname === link.href &&
                          (isScrolled || useLightHeader ? "text-gray-900" : "text-white")
                      )}
                    >
                      {link.label}
                      <span
                        className={cn(
                          "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
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
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                        >
                          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 w-[600px]">
                            <div className="grid grid-cols-2 gap-4">
                              {services.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                                >
                                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <service.icon className="h-5 w-5 text-accent" />
                                  </div>
                                  <div>
                                    <div className="font-medium text-gray-900 group-hover:text-accent transition-colors">
                                      {service.title}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                      {service.description}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-100">
                              <Link
                                href="/services"
                                className="text-sm font-medium text-accent hover:text-accent-dark transition-colors"
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
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                        >
                          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 w-[400px]">
                            <div className="grid grid-cols-2 gap-2">
                              {industries.map((industry) => (
                                <Link
                                  key={industry.href}
                                  href={industry.href}
                                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                                >
                                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <industry.icon className="h-4 w-4 text-accent" />
                                  </div>
                                  <span className="font-medium text-gray-900 group-hover:text-accent transition-colors text-sm">
                                    {industry.title}
                                  </span>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-3 pt-3 border-t border-gray-100">
                              <Link
                                href="/industries"
                                className="text-sm font-medium text-accent hover:text-accent-dark transition-colors"
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
            <div className="hidden xl:flex items-center gap-3">
              <Link
                href="/estimate"
                className={cn(
                  "flex items-center gap-1.5 text-sm font-medium transition-colors",
                  isScrolled || useLightHeader
                    ? "text-gray-600 hover:text-accent"
                    : "text-white/80 hover:text-accent"
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
                isScrolled || useLightHeader || isMobileMenuOpen
                  ? "text-gray-900 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
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
            <div className="absolute inset-0 bg-bg-dark" />
            <div className="relative h-full flex flex-col pt-24 pb-8 px-6">
              {/* Mobile Nav Links */}
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
                          onClick={() => setMobileOpenDropdown(mobileOpenDropdown === link.dropdownType ? null : link.dropdownType || null)}
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
                                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
                                  >
                                    <service.icon className="h-5 w-5 text-accent" />
                                    <span className="text-white/80">
                                      {service.title}
                                    </span>
                                  </Link>
                                ))}
                                {link.dropdownType === "industries" && industries.map((industry) => (
                                  <Link
                                    key={industry.href}
                                    href={industry.href}
                                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
                                  >
                                    <industry.icon className="h-5 w-5 text-accent" />
                                    <span className="text-white/80">
                                      {industry.title}
                                    </span>
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
                          pathname === link.href
                            ? "text-white"
                            : "text-white/60 hover:text-white"
                        )}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTA */}
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
