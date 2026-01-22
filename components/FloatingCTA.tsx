"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, X, ArrowRight } from "lucide-react";
import Link from "next/link";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isDismissed, setIsDismissed] = React.useState(false);

  React.useEffect(() => {
    // Show CTA after user has scrolled 50% of the page
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 30 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 right-6 z-40 hidden lg:block"
        >
          <div className="relative bg-[#141414] rounded-2xl shadow-2xl shadow-black/20 p-5 max-w-[280px] border border-white/10">
            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-3 h-3 text-white" />
            </button>

            {/* Content */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-[#F5A623]/20 rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#F5A623]" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">
                  Ready to start?
                </p>
                <p className="text-gray-400 text-xs mb-3">
                  Schedule a free 30-min strategy call
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[#F5A623] text-sm font-semibold hover:text-[#FFB84D] transition-colors group"
                >
                  Book a call
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F5A623] to-[#FFB84D] rounded-t-2xl" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
