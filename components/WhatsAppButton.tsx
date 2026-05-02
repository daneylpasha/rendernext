"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "923332240596";
  const message = "Hi! I'm interested in discussing a project with RenderNext.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Outer glow ring */}
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
        style={{ background: "rgba(37,211,102,0.35)", transform: "scale(1.3)" }}
      />

      {/* Button */}
      <span
        className="relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 group-hover:scale-105"
        style={{
          background: "rgba(14,14,14,0.92)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(37,211,102,0.35)",
          boxShadow: "0 0 18px rgba(37,211,102,0.18), 0 8px 24px rgba(0,0,0,0.45)",
        }}
      >
        <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
      </span>

      {/* Tooltip */}
      <span
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2
          px-3 py-1.5 rounded-lg text-white text-xs whitespace-nowrap font-medium
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          pointer-events-none"
        style={{
          background: "rgba(14,14,14,0.92)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.09)",
        }}
      >
        Chat on WhatsApp
      </span>
    </a>
  );
}
