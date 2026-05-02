"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MessageCircle, X, ArrowRight } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isDismissed, setIsDismissed] = React.useState(false);

  React.useEffect(() => {
    if (isDismissed) return;
    const timer = setTimeout(() => setIsVisible(true), 4000);
    return () => clearTimeout(timer);
  }, [isDismissed]);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 30 && !isDismissed) setIsVisible(true);
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
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-44 right-6 z-40 hidden lg:block"
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 rounded-2xl blur-2xl pointer-events-none"
            style={{ background: "rgba(245,166,35,0.08)", transform: "scale(1.1)" }}
          />

          {/* 1px rotating border wrapper */}
          <div className="relative rounded-2xl" style={{ padding: "1px" }}>

            {/* Spinning conic-gradient — clipped to the border area */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                style={{
                  position: "absolute",
                  width: "200%",
                  height: "200%",
                  top: "-50%",
                  left: "-50%",
                  background:
                    "conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 72%, rgba(245,166,35,0.1) 78%, rgba(245,166,35,0.65) 85%, #FFB84D 89%, rgba(245,166,35,0.65) 93%, rgba(245,166,35,0.1) 97%, transparent 100%)",
                }}
              />
            </div>

            {/* Card */}
            <div
              className="relative rounded-[15px] p-5 w-[268px]"
              style={{
                background: "rgba(16,16,16,0.92)",
                backdropFilter: "blur(28px)",
                boxShadow: "0 32px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              {/* Dismiss */}
              <button
                onClick={handleDismiss}
                aria-label="Dismiss"
                className="absolute -top-2.5 -right-2.5 z-10 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(28,28,28,0.98)",
                  border: "1px solid rgba(255,255,255,0.11)",
                }}
              >
                <X className="w-3 h-3 text-white/50" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(245,166,35,0.14)" }}
                >
                  <Calendar className="w-4 h-4 text-[#F5A623]" />
                </div>
                <p className="text-white/90 font-semibold text-sm tracking-tight">Ready to start?</p>
              </div>

              <div className="h-px bg-white/[0.06] mb-4" />

              {/* Actions */}
              <div className="space-y-4">
                <a
                  href="https://calendly.com/rendernext/15min?back=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-[#F5A623]/10 group-hover:bg-[#F5A623]/20 transition-colors duration-200">
                    <Calendar className="w-3 h-3 text-[#F5A623]" />
                  </div>
                  <div>
                    <span className="flex items-center gap-1 text-[#F5A623] text-xs font-semibold group-hover:text-[#FFB84D] transition-colors duration-200">
                      Book a call
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </span>
                    <p className="text-white/30 text-xs mt-0.5 leading-snug">Free 30-min strategy call</p>
                  </div>
                </a>

                <button
                  onClick={() => {
                    handleDismiss();
                    window.dispatchEvent(new CustomEvent("open-chat-widget"));
                  }}
                  className="group flex items-start gap-3 w-full text-left"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white/[0.06] group-hover:bg-white/[0.10] transition-colors duration-200">
                    <MessageCircle className="w-3 h-3 text-white/40" />
                  </div>
                  <div>
                    <span className="flex items-center gap-1 text-white/60 text-xs font-semibold group-hover:text-white/90 transition-colors duration-200">
                      Let&apos;s Talk
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </span>
                    <p className="text-white/30 text-xs mt-0.5 leading-snug">Connect with our team directly</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
