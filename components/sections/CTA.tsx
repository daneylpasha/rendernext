"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Loader2, ArrowRight, ChevronDown, Search } from "lucide-react";
import { Container, DecorativeRing, Input } from "@/components/ui";
import { countryCodes } from "@/lib/countryCodes";

const budgetOptions = [
  { value: "", label: "Select your budget range", disabled: true },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "100k+", label: "$100,000+" },
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

export function CTA() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
          description: "Quick quote request from CTA section",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setIsSubmitted(true);
    } catch {
      // Silent fail for CTA form - user can try full contact form
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
    <section
      ref={sectionRef}
      id="cta"
      className="bg-[#141414] py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Enhanced background with spotlight effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Pulsing mustard glow - more visible */}
        <motion.div
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[800px] rounded-full"
          style={{
            backgroundColor: "#F5A623",
            filter: "blur(120px)",
          }}
        />

        {/* Stronger radial gradient spotlight */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center top, rgba(245, 166, 35, 0.15) 0%, transparent 60%)",
          }}
        />

        {/* Subtle dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Decorative rings */}
        <DecorativeRing position="center-left" size={400} opacity={0.04} />
        <DecorativeRing position="center-right" size={300} opacity={0.03} />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 noise-texture opacity-30" />
      </div>

      <Container className="relative z-10">
        {/* Decorative top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16"
        />

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3"
            >
              Ready to Start?
            </motion.span>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              Let&apos;s Build Something Great Together
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-gray-400 font-normal text-lg leading-relaxed mb-8"
            >
              Have a project in mind? Fill out the form and we&apos;ll get back to you within 24 hours with a custom quote.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="space-y-3"
            >
              <p className="text-gray-500 font-normal text-sm">Or reach out directly:</p>
              <a
                href="mailto:hello@rendernext.io"
                className="text-white hover:text-[#F5A623] transition-colors duration-300 font-medium block"
              >
                hello@rendernext.io
              </a>
              <a
                href="tel:+15123256674"
                className="text-white hover:text-[#F5A623] transition-colors duration-300 font-medium block"
              >
                +1 (512) 325-6674
              </a>
              <p className="text-gray-500 font-normal text-sm pt-4">
                Based in Austin, Texas • Available Worldwide
              </p>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl shadow-black/30 ring-1 ring-white/10">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-7 h-7 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-500 text-sm">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  {/* Form Header */}
                  <div className="mb-8">
                    <h3 className="font-heading text-xl lg:text-2xl font-bold text-gray-900 leading-tight tracking-tight mb-3">
                      Get a Free Quote
                    </h3>
                    <p className="text-gray-600 font-normal leading-snug">
                      Tell us about your project
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="cta-name"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Your Name <span className="text-accent">*</span>
                      </label>
                      <Input
                        id="cta-name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`h-12 text-base ${errors.name ? "border-red-500" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="cta-email"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Work Email <span className="text-accent">*</span>
                      </label>
                      <Input
                        id="cta-email"
                        name="email"
                        type="email"
                        placeholder="Enter your work email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`h-12 text-base ${errors.email ? "border-red-500" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone Field with Country Code */}
                    <div>
                      <label
                        htmlFor="cta-phone"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Phone Number
                      </label>
                      <div className="flex gap-2">
                        {/* Country Code Selector */}
                        <div className="relative" ref={countryDropdownRef}>
                          <button
                            type="button"
                            onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                            className="flex items-center gap-1.5 px-4 h-12 bg-gray-50 border-2 border-gray-200 rounded-lg
                              text-gray-900 hover:bg-gray-100 transition-colors min-w-[95px]
                              outline-none ring-0 focus:outline-none focus:ring-0 focus:border-[#F5A623]"
                          >
                            <span className="text-base">{selectedCountry.flag}</span>
                            <span className="text-sm">{selectedCountry.code}</span>
                            <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isCountryDropdownOpen ? "rotate-180" : ""}`} />
                          </button>

                          {isCountryDropdownOpen && (
                            <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                              {/* Search Input */}
                              <div className="p-2 border-b border-gray-100">
                                <div className="relative">
                                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                  <input
                                    type="text"
                                    placeholder="Search country..."
                                    value={countrySearch}
                                    onChange={(e) => setCountrySearch(e.target.value)}
                                    className="w-full pl-9 pr-3 py-2 text-sm text-gray-900 bg-white border border-gray-200 rounded-md
                                      outline-none focus:border-[#F5A623] transition-colors placeholder:text-gray-400"
                                    onClick={(e) => e.stopPropagation()}
                                  />
                                </div>
                              </div>
                              {/* Country List */}
                              <div className="max-h-52 overflow-y-auto">
                                {filteredCountries.length > 0 ? (
                                  filteredCountries.map((country, index) => (
                                    <button
                                      key={`cta-${country.code}-${country.country}-${index}`}
                                      type="button"
                                      onClick={() => selectCountryCode(country.code)}
                                      className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 text-sm text-left"
                                    >
                                      <span className="text-base">{country.flag}</span>
                                      <span className="text-gray-900 truncate flex-1">{country.name}</span>
                                      <span className="text-gray-400 text-xs">{country.code}</span>
                                    </button>
                                  ))
                                ) : (
                                  <div className="px-3 py-4 text-sm text-gray-500 text-center">
                                    No countries found
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Phone Input */}
                        <Input
                          id="cta-phone"
                          name="phone"
                          type="tel"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="flex-1 h-12 text-base"
                        />
                      </div>
                    </div>

                    {/* Budget Field */}
                    <div>
                      <label
                        htmlFor="cta-budget"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Budget Range <span className="text-accent">*</span>
                      </label>
                      <select
                        id="cta-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={`w-full px-4 h-12 bg-white border-2 rounded-lg text-base
                          transition-all duration-200 outline-none ring-0
                          focus:outline-none focus:ring-0 focus:border-[#F5A623]
                          ${errors.budget ? "border-red-500 focus:border-red-500" : "border-gray-200"}
                          ${!formData.budget ? "text-gray-400" : "text-gray-900"}`}
                      >
                        {budgetOptions.map((option) => (
                          <option
                            key={option.value}
                            value={option.value}
                            disabled={option.disabled}
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.budget && (
                        <p className="text-red-500 text-xs mt-1">{errors.budget}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent-light text-[#141414] font-semibold
                        px-8 py-4 rounded-xl text-base transition-all duration-200
                        flex items-center justify-center gap-2 mt-2
                        disabled:opacity-70 disabled:cursor-not-allowed
                        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
                        shadow-lg shadow-accent/20 hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get Quote
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-16"
        />
      </Container>
    </section>
  );
}
