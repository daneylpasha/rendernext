"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Github } from "lucide-react";
import { Container } from "@/components/ui";

const projectTypes = [
  "Select project type",
  "Mobile App Development",
  "Web App Development",
  "AI Solutions",
  "UI/UX Design",
  "MVP Development",
  "Other",
];

const budgetRanges = [
  "Select your budget",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
];

const hearAboutOptions = [
  "Select an option",
  "Google Search",
  "LinkedIn",
  "Referral",
  "Social Media",
  "Other",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  description: string;
  hearAbout: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budget: "",
  description: "",
  hearAbout: "",
};

export default function ContactPage() {
  const [formData, setFormData] = React.useState<FormData>(initialFormData);
  const [errors, setErrors] = React.useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.projectType || formData.projectType === "Select project type") {
      newErrors.projectType = "Please select a project type";
    }
    if (!formData.budget || formData.budget === "Select your budget") {
      newErrors.budget = "Please select a budget range";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Project description is required";
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setIsSuccess(true);
      setFormData(initialFormData);

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({
        description: error instanceof Error ? error.message : "Failed to send message. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Page Header - Dark */}
      <section className="bg-[#141414] py-20 lg:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-4">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? We&apos;d love to hear about it. Fill out the form below
              and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Main Content - Light */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form - 3 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">
                Send us a message
              </h2>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thanks! We&apos;ll be in touch within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg transition-all duration-200
                          outline-none ring-0 ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#F5A623]
                          ${errors.name ? "border-red-500" : "border-gray-300"}`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg transition-all duration-200
                          outline-none ring-0 ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#F5A623]
                          ${errors.email ? "border-red-500" : "border-gray-300"}`}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone + Company Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200
                          outline-none ring-0 ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#F5A623]"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200
                          outline-none ring-0 ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#F5A623]"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg transition-all duration-200
                        outline-none ring-0 ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#F5A623]
                        ${errors.projectType ? "border-red-500" : "border-gray-300"}
                        ${!formData.projectType ? "text-gray-400" : "text-gray-900"}`}
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type === "Select project type" ? "" : type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg transition-all duration-200
                        outline-none ring-0 ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#F5A623]
                        ${errors.budget ? "border-red-500" : "border-gray-300"}
                        ${!formData.budget ? "text-gray-400" : "text-gray-900"}`}
                    >
                      {budgetRanges.map((range) => (
                        <option key={range} value={range === "Select your budget" ? "" : range}>
                          {range}
                        </option>
                      ))}
                    </select>
                    {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 resize-none
                        outline-none ring-0 ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#F5A623]
                        ${errors.description ? "border-red-500" : "border-gray-300"}`}
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                    {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                  </div>

                  {/* How did you hear about us */}
                  <div>
                    <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      id="hearAbout"
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200
                        outline-none ring-0 ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#F5A623]
                        ${!formData.hearAbout ? "text-gray-400" : "text-gray-900"}`}
                    >
                      {hearAboutOptions.map((option) => (
                        <option key={option} value={option === "Select an option" ? "" : option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#F5A623] text-[#141414] font-semibold rounded-xl
                      transition-all duration-300
                      hover:bg-[#ffb84d] hover:shadow-lg hover:shadow-[#F5A623]/20
                      disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information - 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Email Card */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F5A623]/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#F5A623]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email us</p>
                    <a
                      href="mailto:hello@rendernext.io"
                      className="text-gray-900 font-medium hover:text-[#F5A623] transition-colors duration-200"
                    >
                      hello@rendernext.io
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F5A623]/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#F5A623]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Call us</p>
                    <a
                      href="tel:+15123256674"
                      className="text-gray-900 font-medium hover:text-[#F5A623] transition-colors duration-200"
                    >
                      +1 (512) 325-6674
                    </a>
                  </div>
                </div>

                {/* Location Card */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F5A623]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#F5A623]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Based in</p>
                    <p className="text-gray-900 font-medium">Austin, Texas, USA</p>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F5A623]/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#F5A623]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Working hours</p>
                    <p className="text-gray-900 font-medium">Mon - Fri: 9AM - 6PM CST</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Follow us</p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#F5A623] transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#F5A623] transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#F5A623] transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Response Time Note */}
              <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Quick response guaranteed.</span>{" "}
                  We typically respond to all inquiries within 24 business hours.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}
