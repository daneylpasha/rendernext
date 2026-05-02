"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Loader2, ArrowRight, ChevronDown, Search } from "lucide-react";
import { Container, FloatingParticles } from "@/components/ui";
import { countryCodes } from "@/lib/countryCodes";

const tickerItems = [
  "Mobile Apps", "Web Platforms", "AI Automation", "React Native", "Next.js 14",
  "UI/UX Design", "MVP in 8 Weeks", "100% Code Ownership", "Stripe Payments", "AWS Cloud",
];

const budgetOptions = [
  { value: "", label: "Select your budget range", disabled: true },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "100k+", label: "$100,000+" },
];

const techPartners = [
  {
    name: "React Native",
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="9.5" ry="3" stroke="#61DAFB" strokeWidth="1.2"/>
        <ellipse cx="12" cy="12" rx="9.5" ry="3" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="9.5" ry="3" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" fill="#fff" opacity="0.08"/>
        <path d="M9 7v10l9-10v10" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg className="w-5 h-4 flex-shrink-0" viewBox="0 0 40 24" fill="none">
        <path fill="#FF9900" d="M14 18a7 7 0 0 1-.4-14A8 8 0 0 1 28.3 7a5 5 0 0 1-.3 11H14z"/>
        <path stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" d="M6 20.5Q10 23 14 20.5M14 20.5Q18 23 22 20.5"/>
        <path fill="#FF9900" d="M21.5 19.5l3-1.5-3-1.5"/>
      </svg>
    ),
  },
  {
    name: "OpenAI",
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9.5" stroke="#10A37F" strokeWidth="1.3" fill="none"/>
        <path stroke="#10A37F" strokeWidth="1.3" strokeLinecap="round" d="M12 6.5v11M6.5 12h11M8.3 8.3l7.4 7.4M15.7 8.3l-7.4 7.4"/>
      </svg>
    ),
  },
  {
    name: "Stripe",
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#635BFF"/>
        <path fill="white" d="M9.8 10.1c0-.8.7-1.4 1.9-1.4.9 0 1.6.4 2 1.2l1.3-.5c-.5-1.3-1.7-2.1-3.3-2.1-2 0-3.4 1.2-3.4 3 0 3.7 5 2.8 5 5.2 0 .9-.8 1.5-2 1.5-1.1 0-1.9-.5-2.3-1.5l-1.3.5c.5 1.4 1.8 2.3 3.6 2.3 2.1 0 3.6-1.2 3.6-3.1 0-3.8-5.1-2.9-5.1-5.1z"/>
      </svg>
    ),
  },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  budget: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  budget?: string;
}

export function Hero() {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    phone: "",
    countryCode: "+1",
    budget: "",
  });
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = React.useState(false);
  const [countrySearch, setCountrySearch] = React.useState("");
  const countryDropdownRef = React.useRef<HTMLDivElement>(null);

  const selectedCountry = countryCodes.find((c) => c.code === formData.countryCode) || countryCodes[0];

  const filteredCountries = countryCodes.filter(
    (country) =>
      country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      country.country.toLowerCase().includes(countrySearch.toLowerCase()) ||
      country.code.includes(countrySearch)
  );

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryDropdownOpen(false);
      }
    };

    if (isCountryDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCountryDropdownOpen]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a budget range";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone ? `${formData.countryCode} ${formData.phone}` : "",
          projectType: "Quick Quote",
          budget: formData.budget,
          description: "Quick quote request from homepage",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setIsSubmitted(true);
    } catch {
      // Silent fail for hero form - user can try full contact form
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const selectCountryCode = (code: string) => {
    setFormData((prev) => ({ ...prev, countryCode: code }));
    setIsCountryDropdownOpen(false);
    setCountrySearch("");
  };

  return (
    <>
      <section className="relative min-h-[90vh] bg-[#141414]">
        {/* Enhanced Background Elements with CSS Animations */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(245, 166, 35, 0.15), transparent)",
            }}
          />

          {/* Animated gradient orb - Top Right (Primary) */}
          <div
            className="absolute -top-[200px] right-[10%] w-[600px] h-[600px] animate-blob"
            style={{
              background: "radial-gradient(circle, rgba(245, 166, 35, 0.6) 0%, rgba(245, 166, 35, 0.2) 40%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />

          {/* Animated gradient orb - Center Right */}
          <div
            className="absolute top-[30%] right-[5%] w-[500px] h-[500px] animate-blob animation-delay-2000"
            style={{
              background: "radial-gradient(circle, rgba(255, 184, 77, 0.5) 0%, rgba(245, 166, 35, 0.2) 40%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          {/* Animated gradient orb - Bottom Left */}
          <div
            className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] animate-blob animation-delay-4000"
            style={{
              background: "radial-gradient(circle, rgba(245, 166, 35, 0.4) 0%, rgba(212, 137, 28, 0.15) 40%, transparent 70%)",
              filter: "blur(70px)",
            }}
          />

          {/* Animated gradient orb - Top Left (Subtle) */}
          <div
            className="absolute top-[20%] left-[15%] w-[300px] h-[300px] animate-blob-slow"
            style={{
              background: "radial-gradient(circle, rgba(245, 166, 35, 0.4) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Vignette effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 10, 0.4) 100%)",
            }}
          />

          {/* Floating particles for depth */}
          <FloatingParticles count={15} className="opacity-40" />
        </div>

        {/* Content */}
        <Container className="relative z-10">
          <div className="min-h-[90vh] flex items-center pt-20 pb-12 lg:pt-24 lg:pb-20">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full">
              {/* Left Content */}
              <div className="max-w-xl">
                {/* Trust Badges Row */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="flex flex-wrap items-center gap-2 mb-6"
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
                    <span>⚡</span>
                    <span className="text-white/80">React Native Experts</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
                    <span>🚀</span>
                    <span className="text-white/80">AI-Powered Solutions</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
                    <span>📍</span>
                    <span className="text-white/80">Austin, Texas</span>
                  </span>
                </motion.div>

                {/* Headline - Larger and bolder */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
                >
                  Turn Your Ideas into{" "}
                  <span className="relative">
                    <span className="relative z-10 bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                      High-Performance
                    </span>
                  </span>{" "}
                  Digital Products
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-base lg:text-lg text-gray-400 font-normal leading-relaxed mb-10 max-w-xl"
                >
                  From mobile apps to AI automation, web platforms, and UX design, we
                  create solutions that scale, engage, and deliver measurable results.
                </motion.p>

                {/* Single CTA Button - More prominent */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-3 mb-10"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full
                      bg-gradient-to-r from-[#F5A623] to-[#FFB84D] text-[#141414] font-semibold
                      hover:shadow-lg hover:shadow-[#F5A623]/30 hover:scale-[1.03] transition-all duration-300 group"
                  >
                    Start Your Project
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full
                      border border-white/20 text-white font-medium
                      hover:bg-white/5 transition-all duration-300 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    View Our Work
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>

                {/* Tech Partners / Built With */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="pt-8 border-t border-white/10"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
                    Technologies We Use
                  </p>
                  <div className="flex flex-wrap items-center gap-5">
                    {techPartners.map((partner) => (
                      <div
                        key={partner.name}
                        className="flex items-center gap-2 group cursor-default"
                      >
                        <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                          {partner.icon}
                        </div>
                        <span className="text-sm font-medium text-white/45 group-hover:text-white/75 transition-colors duration-200">
                          {partner.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Quote Form (glassmorphic) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full max-w-[500px] mx-auto lg:mx-0 lg:ml-auto"
              >
                <div className="relative rounded-2xl p-8 lg:p-10"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    boxShadow: "0 32px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Mustard top accent */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#F5A623] to-transparent" />
                  {/* Glow orb inside card */}
                  <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 70%)" }} />

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-14 h-14 bg-[#F5A623]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-7 h-7 text-[#F5A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-white mb-2">Thank You!</h3>
                      <p className="text-white/50 text-sm">We&apos;ll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <>
                      <div className="mb-7 relative z-10">
                        <h2 className="font-heading text-xl lg:text-2xl font-bold text-white leading-tight tracking-tight mb-2">
                          Get a Free Quote
                        </h2>
                        <p className="text-white/45 text-sm">Tell us about your project — no commitment</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                        {/* Name */}
                        <div>
                          <label htmlFor="name" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">
                            Your Name <span className="text-[#F5A623]">*</span>
                          </label>
                          <input
                            id="name" name="name" type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 h-11 rounded-xl text-white text-sm placeholder:text-white/25 outline-none transition-all duration-200
                              ${errors.name
                                ? "bg-red-500/10 border border-red-400/60"
                                : "bg-white/[0.07] border border-white/[0.12] focus:border-[#F5A623]/70 focus:bg-white/[0.10]"}`}
                          />
                          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">
                            Work Email <span className="text-[#F5A623]">*</span>
                          </label>
                          <input
                            id="email" name="email" type="email"
                            placeholder="Enter your work email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 h-11 rounded-xl text-white text-sm placeholder:text-white/25 outline-none transition-all duration-200
                              ${errors.email
                                ? "bg-red-500/10 border border-red-400/60"
                                : "bg-white/[0.07] border border-white/[0.12] focus:border-[#F5A623]/70 focus:bg-white/[0.10]"}`}
                          />
                          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                          <label htmlFor="phone" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">
                            Phone <span className="text-white/30 font-normal normal-case tracking-normal">(optional)</span>
                          </label>
                          <div className="flex gap-2">
                            <div className="relative" ref={countryDropdownRef}>
                              <button
                                type="button"
                                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                className="flex items-center gap-1.5 px-3 h-11 bg-white/[0.07] border border-white/[0.12]
                                  rounded-xl text-white hover:bg-white/[0.10] transition-colors min-w-[90px]
                                  outline-none focus:outline-none focus:border-[#F5A623]/70"
                              >
                                <span>{selectedCountry.flag}</span>
                                <span className="text-sm text-white/80">{selectedCountry.code}</span>
                                <ChevronDown className={`w-3 h-3 text-white/40 transition-transform ${isCountryDropdownOpen ? "rotate-180" : ""}`} />
                              </button>
                              {isCountryDropdownOpen && (
                                <div className="absolute top-full left-0 mt-1 w-72 rounded-xl shadow-2xl z-50 overflow-hidden"
                                  style={{ background: "rgba(20,20,20,0.95)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.10)" }}>
                                  <div className="p-2 border-b border-white/[0.08]">
                                    <div className="relative">
                                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                      <input
                                        type="text" placeholder="Search country..."
                                        value={countrySearch}
                                        onChange={(e) => setCountrySearch(e.target.value)}
                                        className="w-full pl-9 pr-3 py-2 text-sm text-white bg-white/[0.08] border border-white/[0.12] rounded-lg
                                          outline-none focus:border-[#F5A623]/60 placeholder:text-white/25 transition-colors"
                                        onClick={(e) => e.stopPropagation()}
                                      />
                                    </div>
                                  </div>
                                  <div className="max-h-48 overflow-y-auto">
                                    {filteredCountries.length > 0 ? filteredCountries.map((country, index) => (
                                      <button
                                        key={`${country.code}-${country.country}-${index}`}
                                        type="button"
                                        onClick={() => selectCountryCode(country.code)}
                                        className="w-full flex items-center gap-2 px-3 py-2 hover:bg-white/[0.07] text-sm text-left transition-colors"
                                      >
                                        <span>{country.flag}</span>
                                        <span className="text-white/80 truncate flex-1">{country.name}</span>
                                        <span className="text-white/30 text-xs">{country.code}</span>
                                      </button>
                                    )) : (
                                      <div className="px-3 py-4 text-sm text-white/40 text-center">No countries found</div>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                            <input
                              id="phone" name="phone" type="tel"
                              placeholder="Your phone number"
                              value={formData.phone}
                              onChange={handleChange}
                              className="flex-1 px-4 h-11 bg-white/[0.07] border border-white/[0.12] rounded-xl text-white text-sm
                                placeholder:text-white/25 outline-none focus:border-[#F5A623]/70 focus:bg-white/[0.10] transition-all duration-200"
                            />
                          </div>
                        </div>

                        {/* Budget */}
                        <div>
                          <label htmlFor="budget" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">
                            Budget Range <span className="text-[#F5A623]">*</span>
                          </label>
                          <select
                            id="budget" name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className={`w-full px-4 h-11 rounded-xl text-sm outline-none transition-all duration-200 appearance-none cursor-pointer
                              ${errors.budget
                                ? "bg-red-500/10 border border-red-400/60 text-white"
                                : "bg-white/[0.07] border border-white/[0.12] focus:border-[#F5A623]/70 focus:bg-white/[0.10]"}
                              ${!formData.budget ? "text-white/30" : "text-white"}`}
                          >
                            {budgetOptions.map((option) => (
                              <option key={option.value} value={option.value} disabled={option.disabled}
                                className="bg-[#1a1a1a] text-white">
                                {option.label}
                              </option>
                            ))}
                          </select>
                          {errors.budget && <p className="text-red-400 text-xs mt-1">{errors.budget}</p>}
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-[#F5A623] to-[#FFB84D] text-[#141414] font-bold
                            px-8 py-3.5 rounded-xl text-sm transition-all duration-300 mt-1
                            flex items-center justify-center gap-2
                            disabled:opacity-60 disabled:cursor-not-allowed
                            hover:from-[#FFB84D] hover:to-[#F5A623] hover:shadow-xl hover:shadow-[#F5A623]/30 hover:scale-[1.02]"
                        >
                          {isSubmitting ? (
                            <><Loader2 className="w-4 h-4 animate-spin" />Submitting...</>
                          ) : (
                            <>Get Free Quote<ArrowRight className="w-4 h-4" /></>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>

        {/* Scrolling ticker strip */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/[0.06]">
          <div className="flex animate-marquee-left py-3" style={{ width: "fit-content" }}>
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-3 text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase mx-10 whitespace-nowrap">
                <span className="w-1 h-1 rounded-full bg-[#F5A623] flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/15551234567?text=Hi%2C%20I%27m%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center
          shadow-lg shadow-[#25D366]/30 hover:scale-105 transition-transform duration-200 group"
        aria-label="Contact us on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>

        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </motion.a>
    </>
  );
}
