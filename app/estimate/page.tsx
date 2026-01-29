"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Smartphone,
  Globe,
  Layers,
  Brain,
  Rocket,
  ArrowRight,
  ArrowLeft,
  Check,
  Calculator,
  Calendar,
  Mail,
  Building2,
  User,
  FileText,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { Container, FadeInUp } from "@/components/ui";
import {
  ProjectType,
  DesignRequirement,
  Timeline,
  calculateEstimate,
  formatCurrency,
  FEATURE_OPTIONS,
  DESIGN_OPTIONS,
  TIMELINE_OPTIONS,
  EstimateBreakdown,
} from "@/lib/estimate-calculator";

const PROJECT_TYPES = [
  { id: "mobile" as const, label: "Mobile App", description: "iOS & Android", icon: Smartphone },
  { id: "web" as const, label: "Web Application", description: "Modern web app", icon: Globe },
  { id: "both" as const, label: "Mobile + Web", description: "Full platform", icon: Layers },
  { id: "ai" as const, label: "AI Integration", description: "Chatbot, AI features", icon: Brain },
  { id: "mvp" as const, label: "MVP / Prototype", description: "Launch fast", icon: Rocket },
];

const STEPS = [
  { number: 1, title: "Project Type" },
  { number: 2, title: "Features" },
  { number: 3, title: "Design" },
  { number: 4, title: "Timeline" },
  { number: 5, title: "Contact" },
];

interface FormData {
  projectType: ProjectType | null;
  features: string[];
  designRequirement: DesignRequirement | null;
  timeline: Timeline | null;
  name: string;
  email: string;
  company: string;
  description: string;
}

export default function EstimatePage() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState<FormData>({
    projectType: null,
    features: [],
    designRequirement: null,
    timeline: null,
    name: "",
    email: "",
    company: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);
  const [estimate, setEstimate] = React.useState<EstimateBreakdown | null>(null);

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.projectType !== null;
      case 2:
        return formData.features.length > 0;
      case 3:
        return formData.designRequirement !== null;
      case 4:
        return formData.timeline !== null;
      case 5:
        return formData.name.trim() !== "" && formData.email.trim() !== "" && formData.description.trim() !== "";
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < 5 && canProceed()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;

    setIsSubmitting(true);

    // Calculate estimate
    const result = calculateEstimate({
      projectType: formData.projectType!,
      features: formData.features,
      designRequirement: formData.designRequirement!,
      timeline: formData.timeline!,
    });
    setEstimate(result);

    // Submit to API
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectType: formData.projectType,
          budget: `${formatCurrency(result.total.low)} - ${formatCurrency(result.total.high)}`,
          description: `
Project Estimate Request:
- Type: ${formData.projectType}
- Features: ${formData.features.join(", ")}
- Design: ${formData.designRequirement}
- Timeline: ${formData.timeline}
- Estimated Range: ${formatCurrency(result.total.low)} - ${formatCurrency(result.total.high)}

Description: ${formData.description}
          `.trim(),
        }),
      });
    } catch {
      // Silent fail - estimate still shows
    }

    setIsSubmitting(false);
    setIsComplete(true);
  };

  const toggleFeature = (featureId: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter((f) => f !== featureId)
        : [...prev.features, featureId],
    }));
  };

  // Results view
  if (isComplete && estimate) {
    return (
      <main className="min-h-screen bg-gray-50">
        <section className="bg-[#141414] pt-32 pb-16 lg:pt-40 lg:pb-20">
          <Container>
            <FadeInUp>
              <div className="text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                  Your Estimate is Ready
                </h1>
                <p className="text-gray-400">
                  Based on your selections, here&apos;s a rough estimate for your project.
                </p>
              </div>
            </FadeInUp>
          </Container>
        </section>

        <section className="py-12 lg:py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              {/* Main Estimate */}
              <FadeInUp>
                <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100 mb-8 text-center">
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                    Estimated Investment
                  </p>
                  <p className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
                    {formatCurrency(estimate.total.low)} – {formatCurrency(estimate.total.high)}
                  </p>
                  <p className="text-gray-500 text-sm">
                    This is a rough estimate. Final pricing depends on detailed requirements.
                  </p>
                </div>
              </FadeInUp>

              {/* Breakdown */}
              <FadeInUp delay={0.1}>
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 mb-8">
                  <h2 className="text-lg font-heading font-bold text-gray-900 mb-6">
                    Cost Breakdown
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600">Base Development</span>
                      <span className="font-semibold text-gray-900">
                        {formatCurrency(estimate.baseCost.low)} – {formatCurrency(estimate.baseCost.high)}
                      </span>
                    </div>
                    {estimate.featuresCost.high > 0 && (
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600">Features ({formData.features.length} selected)</span>
                        <span className="font-semibold text-gray-900">
                          +{formatCurrency(estimate.featuresCost.low)} – {formatCurrency(estimate.featuresCost.high)}
                        </span>
                      </div>
                    )}
                    {estimate.designCost.high > 0 && (
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600">Design Services</span>
                        <span className="font-semibold text-gray-900">
                          +{formatCurrency(estimate.designCost.low)} – {formatCurrency(estimate.designCost.high)}
                        </span>
                      </div>
                    )}
                    {estimate.timelineAdjustment.low !== 0 && (
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600">Timeline Adjustment</span>
                        <span className={`font-semibold ${estimate.timelineAdjustment.low > 0 ? "text-red-600" : "text-green-600"}`}>
                          {estimate.timelineAdjustment.low > 0 ? "+" : ""}
                          {formatCurrency(estimate.timelineAdjustment.low)} – {formatCurrency(estimate.timelineAdjustment.high)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </FadeInUp>

              {/* Next Steps */}
              <FadeInUp delay={0.2}>
                <div className="bg-[#141414] rounded-2xl p-8 text-center">
                  <h2 className="text-xl font-heading font-bold text-white mb-3">
                    What Happens Next?
                  </h2>
                  <p className="text-gray-400 mb-6">
                    We&apos;ll reach out within 24 hours to discuss your project in detail
                    and provide a more accurate quote.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="https://calendly.com/rendernext/15min?back=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#F5A623] text-black px-6 py-3 rounded-xl font-semibold hover:bg-[#F5A623]/90 transition-all"
                    >
                      <Calendar className="w-4 h-4" />
                      Schedule a Call
                    </a>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all"
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </Container>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#141414] pt-32 pb-8 lg:pt-40 lg:pb-12">
        <Container>
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#F5A623] text-sm font-medium mb-6">
                <Calculator className="w-4 h-4" />
                Free Estimate
              </span>
              <h1 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                Project Cost Estimator
              </h1>
              <p className="text-gray-400">
                Get a rough estimate for your project in under 2 minutes.
              </p>
            </div>
          </FadeInUp>
        </Container>
      </section>

      {/* Progress Bar */}
      <section className="bg-[#141414] pb-8">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              {STEPS.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                        currentStep >= step.number
                          ? "bg-[#F5A623] text-black"
                          : "bg-white/10 text-gray-400"
                      }`}
                    >
                      {currentStep > step.number ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        step.number
                      )}
                    </div>
                    <span
                      className={`mt-2 text-xs hidden sm:block ${
                        currentStep >= step.number ? "text-white" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < STEPS.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-2 ${
                        currentStep > step.number ? "bg-[#F5A623]" : "bg-white/10"
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Form Content */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {/* Step 1: Project Type */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                    <h2 className="text-xl font-heading font-bold text-gray-900 mb-2">
                      What are you building?
                    </h2>
                    <p className="text-gray-500 mb-6">
                      Select the type of project you have in mind.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {PROJECT_TYPES.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setFormData((prev) => ({ ...prev, projectType: type.id }))}
                          className={`p-5 rounded-xl border-2 text-left transition-all ${
                            formData.projectType === type.id
                              ? "border-[#F5A623] bg-[#F5A623]/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <type.icon
                            className={`w-8 h-8 mb-3 ${
                              formData.projectType === type.id ? "text-[#F5A623]" : "text-gray-400"
                            }`}
                          />
                          <h3 className="font-semibold text-gray-900">{type.label}</h3>
                          <p className="text-sm text-gray-500">{type.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Features */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                    <h2 className="text-xl font-heading font-bold text-gray-900 mb-2">
                      What features do you need?
                    </h2>
                    <p className="text-gray-500 mb-6">
                      Select all that apply. You can always add more later.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {FEATURE_OPTIONS.map((feature) => (
                        <button
                          key={feature.id}
                          onClick={() => toggleFeature(feature.id)}
                          className={`p-4 rounded-xl border-2 text-left transition-all flex items-start gap-3 ${
                            formData.features.includes(feature.id)
                              ? "border-[#F5A623] bg-[#F5A623]/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                              formData.features.includes(feature.id)
                                ? "border-[#F5A623] bg-[#F5A623]"
                                : "border-gray-300"
                            }`}
                          >
                            {formData.features.includes(feature.id) && (
                              <Check className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 text-sm">{feature.label}</h3>
                            <p className="text-xs text-gray-500">{feature.description}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Design */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                    <h2 className="text-xl font-heading font-bold text-gray-900 mb-2">
                      What about design?
                    </h2>
                    <p className="text-gray-500 mb-6">
                      Do you have designs ready or need us to create them?
                    </p>
                    <div className="space-y-3">
                      {DESIGN_OPTIONS.map((option) => (
                        <button
                          key={option.id}
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              designRequirement: option.id as DesignRequirement,
                            }))
                          }
                          className={`w-full p-5 rounded-xl border-2 text-left transition-all ${
                            formData.designRequirement === option.id
                              ? "border-[#F5A623] bg-[#F5A623]/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <h3 className="font-semibold text-gray-900">{option.label}</h3>
                          <p className="text-sm text-gray-500">{option.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Timeline */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                    <h2 className="text-xl font-heading font-bold text-gray-900 mb-2">
                      When do you need it?
                    </h2>
                    <p className="text-gray-500 mb-6">
                      Timeline affects pricing. Rush jobs cost more; flexible timelines save money.
                    </p>
                    <div className="space-y-3">
                      {TIMELINE_OPTIONS.map((option) => (
                        <button
                          key={option.id}
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              timeline: option.id as Timeline,
                            }))
                          }
                          className={`w-full p-5 rounded-xl border-2 text-left transition-all flex justify-between items-center ${
                            formData.timeline === option.id
                              ? "border-[#F5A623] bg-[#F5A623]/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div>
                            <h3 className="font-semibold text-gray-900">{option.label}</h3>
                            <p className="text-sm text-gray-500">{option.description}</p>
                          </div>
                          <span
                            className={`text-sm font-semibold px-3 py-1 rounded-full ${
                              option.id === "rush"
                                ? "bg-red-100 text-red-600"
                                : option.id === "standard"
                                ? "bg-gray-100 text-gray-600"
                                : "bg-green-100 text-green-600"
                            }`}
                          >
                            {option.multiplier}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Contact */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                    <h2 className="text-xl font-heading font-bold text-gray-900 mb-2">
                      Almost there! Tell us about yourself.
                    </h2>
                    <p className="text-gray-500 mb-6">
                      We&apos;ll send your estimate and follow up to discuss details.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          <User className="w-4 h-4 inline mr-1" />
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F5A623] focus:outline-none transition-colors text-gray-900 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          <Mail className="w-4 h-4 inline mr-1" />
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F5A623] focus:outline-none transition-colors text-gray-900 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          <Building2 className="w-4 h-4 inline mr-1" />
                          Company <span className="text-gray-400">(optional)</span>
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                          placeholder="Acme Inc."
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F5A623] focus:outline-none transition-colors text-gray-900 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          <FileText className="w-4 h-4 inline mr-1" />
                          Brief Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          value={formData.description}
                          onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                          placeholder="Tell us briefly about your project idea..."
                          rows={4}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F5A623] focus:outline-none transition-colors resize-none text-gray-900 bg-white"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  currentStep === 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              {currentStep < 5 ? (
                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                    canProceed()
                      ? "bg-[#F5A623] text-black hover:bg-[#F5A623]/90"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                  className={`inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all ${
                    canProceed() && !isSubmitting
                      ? "bg-[#F5A623] text-black hover:bg-[#F5A623]/90"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Calculating...
                    </>
                  ) : (
                    <>
                      Get My Estimate
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
