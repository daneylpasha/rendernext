"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "15123256674";
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
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />

      {/* Button */}
      <span
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366]
          shadow-lg shadow-[#25D366]/30
          transition-all duration-300
          group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#25D366]/40
          group-hover:bg-[#20BA5C]"
      >
        <MessageCircle className="w-6 h-6 text-white fill-white" />
      </span>

      {/* Tooltip */}
      <span
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2
          px-3 py-2 rounded-lg bg-gray-900 text-white text-sm whitespace-nowrap
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          pointer-events-none"
      >
        Chat with us
      </span>
    </a>
  );
}
