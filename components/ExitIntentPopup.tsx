"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, CheckCircle, Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "exit-intent-shown";
const MOBILE_TRIGGER_DELAY = 30000; // 30 seconds for mobile

type SubmitState = "idle" | "loading" | "success" | "error";

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [submitState, setSubmitState] = React.useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = React.useState("");
  const pathname = usePathname();

  // Check if we're on excluded pages
  const isExcludedPage = pathname === "/contact" || pathname === "/estimate";

  // Check if popup was already shown this session
  const hasShownThisSession = React.useCallback(() => {
    if (typeof window === "undefined") return true;
    return sessionStorage.getItem(STORAGE_KEY) === "true";
  }, []);

  // Mark popup as shown for this session
  const markAsShown = React.useCallback(() => {
    if (typeof window === "undefined") return;
    sessionStorage.setItem(STORAGE_KEY, "true");
  }, []);

  // Detect if device is mobile
  const isMobile = React.useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 768px)").matches || "ontouchstart" in window;
  }, []);

  // Show popup
  const showPopup = React.useCallback(() => {
    if (hasShownThisSession() || isExcludedPage) return;
    setIsVisible(true);
    markAsShown();
  }, [hasShownThisSession, markAsShown, isExcludedPage]);

  // Close popup
  const closePopup = React.useCallback(() => {
    setIsVisible(false);
  }, []);

  // Desktop: Mouse exit intent detection
  React.useEffect(() => {
    if (isExcludedPage || hasShownThisSession() || isMobile()) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse moves to top of viewport (exit intent)
      if (e.clientY <= 5) {
        showPopup();
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isExcludedPage, hasShownThisSession, isMobile, showPopup]);

  // Mobile: Time-based trigger (30 seconds)
  React.useEffect(() => {
    if (isExcludedPage || hasShownThisSession() || !isMobile()) return;

    const timer = setTimeout(() => {
      showPopup();
    }, MOBILE_TRIGGER_DELAY);

    return () => {
      clearTimeout(timer);
    };
  }, [isExcludedPage, hasShownThisSession, isMobile, showPopup]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setSubmitState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Exit Intent Lead",
          email,
          projectType: "Lead Magnet",
          budget: "Not specified",
          description: "Requested Mobile App Planning Checklist",
          source: "exit-intent",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitState("success");

      // Auto-close after 2 seconds
      setTimeout(() => {
        closePopup();
      }, 2000);
    } catch {
      setSubmitState("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };

    if (isVisible) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isVisible, closePopup]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={closePopup}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-intent-title"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
              {/* Decorative accent bar */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#F5A623] to-[#FFB84D]" />

              {/* Close button */}
              <button
                onClick={closePopup}
                className="absolute right-4 top-4 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                aria-label="Close popup"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Content */}
              <div className="p-6 pt-8 sm:p-8 sm:pt-10">
                {submitState === "success" ? (
                  /* Success State */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-4 text-center"
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      Check your inbox!
                    </h3>
                    <p className="text-gray-600">
                      Your checklist is on its way.
                    </p>
                  </motion.div>
                ) : (
                  /* Form State */
                  <>
                    {/* Icon */}
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5A623]/10">
                      <FileText className="h-6 w-6 text-[#F5A623]" />
                    </div>

                    {/* Headline */}
                    <h2
                      id="exit-intent-title"
                      className="mb-2 font-heading text-2xl font-bold text-gray-900 sm:text-3xl"
                    >
                      Before you go...
                    </h2>

                    {/* Subheadline */}
                    <p className="mb-6 text-gray-600">
                      Get our free{" "}
                      <span className="font-semibold text-gray-900">
                        Mobile App Planning Checklist
                      </span>{" "}
                      to help you plan your next project.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="exit-email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="exit-email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 transition-all duration-200 outline-none focus:border-[#F5A623] hover:border-gray-300"
                          disabled={submitState === "loading"}
                          autoComplete="email"
                        />
                        {errorMessage && (
                          <p className="mt-2 text-sm text-red-500">
                            {errorMessage}
                          </p>
                        )}
                      </div>

                      {/* CTA Button */}
                      <button
                        type="submit"
                        disabled={submitState === "loading"}
                        className="w-full rounded-lg bg-[#F5A623] px-6 py-3 font-semibold text-[#141414] transition-all duration-300 hover:bg-[#FFB84D] hover:shadow-lg hover:shadow-[#F5A623]/25 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {submitState === "loading" ? (
                          <span className="inline-flex items-center gap-2">
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          "Send Me the Checklist"
                        )}
                      </button>
                    </form>

                    {/* No thanks link */}
                    <button
                      onClick={closePopup}
                      className="mt-4 block w-full text-center text-sm text-gray-500 transition-colors hover:text-gray-700"
                    >
                      No thanks, I&apos;m not interested
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
