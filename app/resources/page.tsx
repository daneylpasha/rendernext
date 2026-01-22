"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Download,
  CheckCircle,
  X,
  Smartphone,
  Layers,
  Lightbulb,
  Bot,
  LayoutGrid,
  BookOpen,
} from "lucide-react";
import {
  Container,
  FadeIn,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  Input,
} from "@/components/ui";

interface Resource {
  id: string;
  title: string;
  description: string;
  format: "PDF" | "Checklist" | "Guide";
  icon: React.ElementType;
}

const resources: Resource[] = [
  {
    id: "mobile-app-checklist",
    title: "Mobile App Development Checklist",
    description:
      "A comprehensive 50-point checklist covering everything from planning to launch. Ensure you don't miss any critical steps in your app development journey.",
    format: "Checklist",
    icon: Smartphone,
  },
  {
    id: "react-native-vs-flutter",
    title: "React Native vs Flutter Guide",
    description:
      "An in-depth comparison of the two leading cross-platform frameworks. Make an informed decision for your next mobile project.",
    format: "PDF",
    icon: Layers,
  },
  {
    id: "mvp-planning",
    title: "How to Plan Your MVP",
    description:
      "Learn how to define your minimum viable product, prioritize features, and get to market faster without wasting resources.",
    format: "Guide",
    icon: Lightbulb,
  },
  {
    id: "ai-integration-playbook",
    title: "AI Integration Playbook",
    description:
      "Practical strategies for integrating AI into your applications. Covers chatbots, automation, LLMs, and more.",
    format: "PDF",
    icon: Bot,
  },
  {
    id: "web-vs-mobile-framework",
    title: "Web App vs Mobile App Decision Framework",
    description:
      "A structured decision-making framework to help you choose between web and mobile apps based on your specific needs and goals.",
    format: "PDF",
    icon: LayoutGrid,
  },
];

const formatColors: Record<string, { bg: string; text: string }> = {
  PDF: { bg: "bg-red-100", text: "text-red-700" },
  Checklist: { bg: "bg-green-100", text: "text-green-700" },
  Guide: { bg: "bg-blue-100", text: "text-blue-700" },
};

const formatIcons: Record<string, React.ElementType> = {
  PDF: FileText,
  Checklist: CheckCircle,
  Guide: BookOpen,
};

export default function ResourcesPage() {
  const [selectedResource, setSelectedResource] = React.useState<Resource | null>(null);
  const [formData, setFormData] = React.useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [errors, setErrors] = React.useState<{ name?: string; email?: string }>({});

  const validateForm = () => {
    const newErrors: { name?: string; email?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setShowSuccess(true);

    // Close modal after showing success
    setTimeout(() => {
      setSelectedResource(null);
      setShowSuccess(false);
      setFormData({ name: "", email: "" });
    }, 2000);
  };

  const closeModal = () => {
    setSelectedResource(null);
    setShowSuccess(false);
    setFormData({ name: "", email: "" });
    setErrors({});
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#141414] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#F5A623]/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.12, 0.08] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"
          />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <Container>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#F5A623] text-sm font-medium mb-6">
                <Download className="w-4 h-4" />
                Free Downloads
              </span>
            </FadeIn>

            <FadeInUp delay={0.1}>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-6">
                Free Resources
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
                Download our curated collection of guides, checklists, and playbooks to help you
                build better digital products. No fluff, just practical insights.
              </p>
            </FadeInUp>
          </div>
        </Container>
      </section>

      {/* Resources Grid */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {resources.map((resource) => {
              const FormatIcon = formatIcons[resource.format];
              const colors = formatColors[resource.format];

              return (
                <StaggerItem key={resource.id}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 h-full flex flex-col hover:border-[#F5A623]/30 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Icon/Thumbnail */}
                    <div className="w-14 h-14 bg-[#141414] rounded-xl flex items-center justify-center mb-5">
                      <resource.icon className="w-7 h-7 text-[#F5A623]" />
                    </div>

                    {/* Format Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}
                      >
                        <FormatIcon className="w-3 h-3" />
                        {resource.format}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                      {resource.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                      {resource.description}
                    </p>

                    {/* Download Button */}
                    <button
                      onClick={() => setSelectedResource(resource)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#141414] hover:bg-[#1a1a1a] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] group"
                    >
                      <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                      Download Free
                    </button>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* Newsletter/Additional CTA */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <Container>
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-4">
                Want More Resources?
              </h2>
              <p className="text-gray-600 mb-8">
                We regularly publish new guides and resources. Follow us to stay updated on the
                latest content for building better digital products.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#FFB84D] text-[#141414] px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
              >
                Get in Touch
              </a>
            </div>
          </FadeInUp>
        </Container>
      </section>

      {/* Download Modal */}
      <AnimatePresence>
        {selectedResource && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 lg:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>

              {showSuccess ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                    Check your inbox!
                  </h3>
                  <p className="text-gray-600">
                    We&apos;ve sent the download link to your email.
                  </p>
                </motion.div>
              ) : (
                /* Form State */
                <>
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#F5A623]/10 rounded-lg flex items-center justify-center">
                        <selectedResource.icon className="w-5 h-5 text-[#F5A623]" />
                      </div>
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                          formatColors[selectedResource.format].bg
                        } ${formatColors[selectedResource.format].text}`}
                      >
                        {selectedResource.format}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                      Download: {selectedResource.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Enter your details below to get instant access.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      label="Your Name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      error={errors.name}
                    />

                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      error={errors.email}
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#FFB84D] text-[#141414] px-6 py-3 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-[#141414]/20 border-t-[#141414] rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          Get Free Download
                        </>
                      )}
                    </button>
                  </form>

                  {/* Privacy note */}
                  <p className="mt-4 text-xs text-gray-500 text-center">
                    We respect your privacy. No spam, unsubscribe anytime.
                  </p>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
