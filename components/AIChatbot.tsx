"use client";

import * as React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Loader2,
  ArrowLeft,
  Phone,
  PhoneOff,
  Headset,
  Hand,
  Speech,
  Mic,
  MicOff,
  User,
  Mail,
  ChevronDown,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { countryCodes, type CountryCode } from "@/lib/countryCodes";

// ─── Types ────────────────────────────────────────────────────────────────────

type Screen = "form" | "action-select" | "chat" | "voice-call";

type VoiceCallStatus =
  | "idle"
  | "connecting"
  | "connected"
  | "error"
  | "ended";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface UserInfo {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const CALENDLY_URL = "https://calendly.com/rendernext/15min?back=1";

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! I'm the RenderNext Assistant. I can help you learn about our services, pricing, and how we can bring your digital product ideas to life. What would you like to know?",
  timestamp: new Date(),
};

const screenTransition = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
  transition: { duration: 0.2 },
};

// Default country: US
const DEFAULT_COUNTRY = countryCodes[0];

// ─── Component ────────────────────────────────────────────────────────────────

export function AIChatbot() {
  // Widget open/close
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  // Screen state machine
  const [screen, setScreen] = useState<Screen>("form");

  // Form state
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    email: "",
    countryCode: DEFAULT_COUNTRY.code,
    phone: "",
  });
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(DEFAULT_COUNTRY);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof UserInfo, string>>>({});
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Chat state
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [consecutiveErrors, setConsecutiveErrors] = useState(0);
  const [showVoiceFallback, setShowVoiceFallback] = useState(false);

  // Voice call state
  const [voiceStatus, setVoiceStatus] = useState<VoiceCallStatus>("idle");
  const [isMuted, setIsMuted] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [agentSpeaking, setAgentSpeaking] = useState(false);

  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const retellClientRef = useRef<RetellWebClient | null>(null);
  const callTimerRef = useRef<NodeJS.Timeout | null>(null);
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  // ─── Retell SDK type (dynamically imported) ───────────────────────────────

  type RetellWebClient = InstanceType<typeof import("retell-client-js-sdk").RetellWebClient>;

  // ─── Helpers ──────────────────────────────────────────────────────────────

  const generateId = () =>
    `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

  const formatCallDuration = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // ─── Cleanup ──────────────────────────────────────────────────────────────

  const stopCall = useCallback(async () => {
    if (callTimerRef.current) {
      clearInterval(callTimerRef.current);
      callTimerRef.current = null;
    }
    if (retellClientRef.current) {
      try {
        retellClientRef.current.stopCall();
      } catch {
        // ignore
      }
      retellClientRef.current = null;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCall();
    };
  }, [stopCall]);

  // ─── Close widget (stop call if active) ───────────────────────────────────

  const handleClose = useCallback(() => {
    stopCall();
    setIsOpen(false);
  }, [stopCall]);

  // ─── Back navigation ─────────────────────────────────────────────────────

  const handleBack = useCallback(() => {
    if (screen === "chat" || screen === "voice-call") {
      stopCall();
      setVoiceStatus("idle");
      setCallDuration(0);
      setIsMuted(false);
      setAgentSpeaking(false);
      setScreen("action-select");
    }
  }, [screen, stopCall]);

  // ─── Auto-scroll chat ────────────────────────────────────────────────────

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setHasOpened(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && screen === "chat") {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, screen]);

  // Lock body scroll on mobile when widget is open
  useEffect(() => {
    if (isOpen) {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "";
        };
      }
    }
  }, [isOpen]);

  // Close country dropdown on outside click
  useEffect(() => {
    if (!countryDropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(e.target as Node)
      ) {
        setCountryDropdownOpen(false);
        setCountrySearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [countryDropdownOpen]);

  // ─── Form validation & submit ─────────────────────────────────────────────

  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof UserInfo, string>> = {};

    if (!userInfo.name.trim() || userInfo.name.trim().length < 2) {
      errors.name = "Name is required";
    }

    if (!userInfo.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email.trim())) {
      errors.email = "Invalid email";
    }

    if (!userInfo.phone.trim() || userInfo.phone.trim().length < 4) {
      errors.phone = "Phone is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async () => {
    if (!validateForm()) return;

    setFormSubmitting(true);
    try {
      await fetch("/api/widget-notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userInfo.name.trim(),
          email: userInfo.email.trim(),
          phone: `${userInfo.countryCode} ${userInfo.phone.trim()}`,
        }),
      });
    } catch {
      // Non-blocking, continue to action select even if notify fails
    } finally {
      setFormSubmitting(false);
      setScreen("action-select");
    }
  };

  // ─── Chat ─────────────────────────────────────────────────────────────────

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: generateId(),
      role: "user",
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();

      const assistantMessage: Message = {
        id: generateId(),
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setConsecutiveErrors(0);
    } catch (error) {
      console.error("Chat error:", error);
      const newErrorCount = consecutiveErrors + 1;
      setConsecutiveErrors(newErrorCount);

      if (newErrorCount >= 3) {
        setShowVoiceFallback(true);
      }

      const errorMessage: Message = {
        id: generateId(),
        role: "assistant",
        content:
          "I apologize, but I'm having trouble connecting right now. Please try again in a moment, or feel free to reach out to us directly through our contact form or WhatsApp.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // ─── Voice Call ───────────────────────────────────────────────────────────

  const startVoiceCall = async () => {
    setVoiceStatus("connecting");

    try {
      // Get access token from our API
      const res = await fetch("/api/retell", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userInfo.name.trim(),
          email: userInfo.email.trim(),
          phone: `${userInfo.countryCode} ${userInfo.phone.trim()}`,
        }),
      });

      if (!res.ok) throw new Error("Failed to create call");

      const { access_token } = await res.json();

      // Dynamic import for SSR safety
      const { RetellWebClient } = await import("retell-client-js-sdk");
      const client = new RetellWebClient();
      retellClientRef.current = client;

      client.on("call_started", () => {
        setVoiceStatus("connected");
        setCallDuration(0);
        callTimerRef.current = setInterval(() => {
          setCallDuration((d) => d + 1);
        }, 1000);
      });

      client.on("call_ended", () => {
        setVoiceStatus("ended");
        if (callTimerRef.current) {
          clearInterval(callTimerRef.current);
          callTimerRef.current = null;
        }
      });

      client.on("agent_start_talking", () => {
        setAgentSpeaking(true);
      });

      client.on("agent_stop_talking", () => {
        setAgentSpeaking(false);
      });

      client.on("error", (error) => {
        console.error("Retell error:", error);
        setVoiceStatus("error");
        if (callTimerRef.current) {
          clearInterval(callTimerRef.current);
          callTimerRef.current = null;
        }
      });

      await client.startCall({ accessToken: access_token });
    } catch (error) {
      console.error("Voice call error:", error);
      setVoiceStatus("error");
    }
  };

  const toggleMute = () => {
    if (retellClientRef.current && voiceStatus === "connected") {
      if (isMuted) {
        retellClientRef.current.unmute();
      } else {
        retellClientRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  const endCall = () => {
    stopCall();
    setVoiceStatus("ended");
  };

  // ─── Filtered country list ────────────────────────────────────────────────

  const filteredCountries = countrySearch
    ? countryCodes.filter(
        (c) =>
          c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
          c.code.includes(countrySearch) ||
          c.country.toLowerCase().includes(countrySearch.toLowerCase())
      )
    : countryCodes;

  // ─── Header ───────────────────────────────────────────────────────────────

  const headerTitle = {
    form: "Get Started",
    "action-select": "How can we help?",
    chat: "RenderNext Assistant",
    "voice-call": "Voice Call",
  }[screen];

  const headerSubtitle = {
    form: "Tell us about yourself",
    "action-select": "Choose your preferred option",
    chat: "Typically replies instantly",
    "voice-call":
      voiceStatus === "connected"
        ? "Call in progress"
        : voiceStatus === "connecting"
          ? "Connecting..."
          : voiceStatus === "ended"
            ? "Call ended"
            : voiceStatus === "error"
              ? "Call failed"
              : "",
  }[screen];

  const showBackButton = screen === "chat" || screen === "voice-call";

  const headerIcon = {
    form: <User className="w-4 h-4" />,
    "action-select": <Headset className="w-4 h-4" />,
    chat: <Headset className="w-4 h-4" />,
    "voice-call": <Phone className="w-4 h-4" />,
  }[screen];

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <>
      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-6 z-50 group"
            aria-label="Open chat"
          >
            <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
            <span
              className="relative flex items-center justify-center w-14 h-14 rounded-full bg-accent
                shadow-lg shadow-accent/30 transition-all duration-300
                group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-accent/40
                group-hover:bg-accent-light"
            >
              <Headset className="w-6 h-6 text-[#141414]" />
            </span>
            <span
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2
                px-3 py-2 rounded-lg bg-gray-900 text-white text-sm whitespace-nowrap
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                pointer-events-none"
            >
              Let's talk!
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Widget Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed z-50 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col",
              "bottom-24 right-6 w-[350px] h-[500px]",
              "max-md:bottom-0 max-md:right-0 max-md:left-0 max-md:top-0 max-md:w-full max-md:h-full max-md:rounded-none"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-accent text-[#141414] shrink-0">
              <div className="flex items-center gap-3">
                {showBackButton && (
                  <button
                    onClick={handleBack}
                    className="p-1 rounded-full hover:bg-[#141414]/10 transition-colors"
                    aria-label="Go back"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                )}
                <div className="w-8 h-8 rounded-full bg-[#141414]/10 flex items-center justify-center">
                  {headerIcon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{headerTitle}</h3>
                  <p className="text-xs opacity-80">{headerSubtitle}</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-[#141414]/10 transition-colors"
                aria-label="Close widget"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Screen Content */}
            <AnimatePresence mode="wait">
              {/* ── Screen 1: Form ──────────────────────────────────────── */}
              {screen === "form" && (
                <motion.div
                  key="form"
                  {...screenTransition}
                  className="flex-1 overflow-y-auto p-4 flex flex-col"
                >
                  <div className="space-y-3 flex-1">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          value={userInfo.name}
                          onChange={(e) => {
                            setUserInfo((p) => ({ ...p, name: e.target.value }));
                            setFormErrors((p) => ({ ...p, name: undefined }));
                          }}
                          placeholder="John Doe"
                          className={cn(
                            "w-full pl-10 pr-4 py-2.5 rounded-lg border-2 text-sm text-gray-900 placeholder:text-gray-400 transition-all duration-200 outline-none",
                            formErrors.name
                              ? "border-red-400 focus:border-red-400"
                              : "border-gray-200 hover:border-gray-300 focus:border-[#F5A623]"
                          )}
                        />
                      </div>
                      {formErrors.name && (
                        <p className="text-xs text-red-500 mt-1">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Phone with Country Code */}
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Contact Number
                      </label>
                      <div className="flex gap-2">
                        {/* Country Code Dropdown */}
                        <div className="relative" ref={countryDropdownRef}>
                          <button
                            type="button"
                            onClick={() => {
                              setCountryDropdownOpen(!countryDropdownOpen);
                              setCountrySearch("");
                            }}
                            className={cn(
                              "flex items-center gap-1 px-2 py-2.5 rounded-lg border-2 text-sm transition-all duration-200 outline-none whitespace-nowrap",
                              countryDropdownOpen
                                ? "border-[#F5A623]"
                                : "border-gray-200 hover:border-gray-300"
                            )}
                          >
                            <span className="text-gray-900">{selectedCountry.flag}</span>
                            <span className="text-gray-700">{selectedCountry.code}</span>
                            <ChevronDown className="w-3 h-3 text-gray-400" />
                          </button>

                          {/* Dropdown List */}
                          {countryDropdownOpen && (
                            <div className="absolute top-full left-0 mt-1 w-64 max-h-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden flex flex-col">
                              <div className="p-2 border-b border-gray-100">
                                <input
                                  type="text"
                                  value={countrySearch}
                                  onChange={(e) => setCountrySearch(e.target.value)}
                                  placeholder="Search country..."
                                  className="w-full px-2 py-1.5 text-xs text-gray-900 placeholder:text-gray-400 border border-gray-200 rounded outline-none focus:border-[#F5A623]"
                                  autoFocus
                                />
                              </div>
                              <div className="overflow-y-auto flex-1">
                                {filteredCountries.map((c, i) => (
                                  <button
                                    key={`${c.country}-${i}`}
                                    type="button"
                                    onClick={() => {
                                      setSelectedCountry(c);
                                      setUserInfo((p) => ({
                                        ...p,
                                        countryCode: c.code,
                                      }));
                                      setCountryDropdownOpen(false);
                                      setCountrySearch("");
                                    }}
                                    className="w-full flex items-center gap-2 px-3 py-2 text-xs hover:bg-gray-50 transition-colors text-left"
                                  >
                                    <span className="text-gray-900">{c.flag}</span>
                                    <span className="text-gray-500">{c.code}</span>
                                    <span className="text-gray-700 truncate">{c.name}</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Phone Number Input */}
                        <div className="flex-1 relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="tel"
                            value={userInfo.phone}
                            onChange={(e) => {
                              setUserInfo((p) => ({ ...p, phone: e.target.value }));
                              setFormErrors((p) => ({ ...p, phone: undefined }));
                            }}
                            placeholder="555 123 4567"
                            className={cn(
                              "w-full pl-10 pr-4 py-2.5 rounded-lg border-2 text-sm text-gray-900 placeholder:text-gray-400 transition-all duration-200 outline-none",
                              formErrors.phone
                                ? "border-red-400 focus:border-red-400"
                                : "border-gray-200 hover:border-gray-300 focus:border-[#F5A623]"
                            )}
                          />
                        </div>
                      </div>
                      {formErrors.phone && (
                        <p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Email ID
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          value={userInfo.email}
                          onChange={(e) => {
                            setUserInfo((p) => ({ ...p, email: e.target.value }));
                            setFormErrors((p) => ({ ...p, email: undefined }));
                          }}
                          placeholder="john@example.com"
                          className={cn(
                            "w-full pl-10 pr-4 py-2.5 rounded-lg border-2 text-sm text-gray-900 placeholder:text-gray-400 transition-all duration-200 outline-none",
                            formErrors.email
                              ? "border-red-400 focus:border-red-400"
                              : "border-gray-200 hover:border-gray-300 focus:border-[#F5A623]"
                          )}
                        />
                      </div>
                      {formErrors.email && (
                        <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Continue Button */}
                  <button
                    onClick={handleFormSubmit}
                    disabled={formSubmitting}
                    className="w-full mt-4 py-3 rounded-xl bg-[#141414] text-white font-medium text-sm
                      hover:bg-[#141414]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed
                      flex items-center justify-center gap-2"
                  >
                    {formSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      "Continue"
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-3">
                    Your info helps us assist you better
                  </p>
                </motion.div>
              )}

              {/* ── Screen 2: Action Select ─────────────────────────────── */}
              {screen === "action-select" && (
                <motion.div
                  key="action-select"
                  {...screenTransition}
                  className="flex-1 overflow-y-auto p-4 flex flex-col"
                >
                  <p className="text-sm text-gray-600 mb-4">
                    Hi <b>{userInfo.name.split(" ")[0]}!</b> How would you like to connect?
                  </p>

                  <div className="space-y-3 flex-1">
                    {/* Chat Option */}
                    <button
                      onClick={() => setScreen("chat")}
                      className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-gray-200
                        hover:border-[#F5A623] hover:bg-[#F5A623]/5 transition-all duration-200 text-left group"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 flex items-center justify-center shrink-0
                        group-hover:bg-[#F5A623]/20 transition-colors">
                        <MessageSquare className="w-5 h-5 text-[#F5A623]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900">Chat with AI</h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Get instant answers about our services
                        </p>
                      </div>
                    </button>

                    {/* Voice Call Option */}
                    <button
                      onClick={() => {
                        setScreen("voice-call");
                        startVoiceCall();
                      }}
                      className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-gray-200
                        hover:border-[#F5A623] hover:bg-[#F5A623]/5 transition-all duration-200 text-left group"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 flex items-center justify-center shrink-0
                        group-hover:bg-[#F5A623]/20 transition-colors">
                        <Phone className="w-5 h-5 text-[#F5A623]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900">Free Voice Call</h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Talk to our AI assistant directly
                        </p>
                      </div>
                    </button>
                  </div>

                  {/* Calendly Link */}
                  <div className="mt-4 pt-3 border-t border-gray-100 text-center">
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#F5A623] transition-colors"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      Or book a meeting with our team
                    </a>
                  </div>
                </motion.div>
              )}

              {/* ── Screen 3a: Chat ─────────────────────────────────────── */}
              {screen === "chat" && (
                <motion.div
                  key="chat"
                  {...screenTransition}
                  className="flex-1 flex flex-col overflow-hidden"
                >
                  {/* Voice Fallback Banner */}
                  {showVoiceFallback && (
                    <div className="px-4 py-2.5 bg-[#F5A623]/10 border-b border-[#F5A623]/20 flex items-center justify-between shrink-0">
                      <p className="text-xs text-gray-700">
                        Chat having issues? Try a free voice call instead.
                      </p>
                      <button
                        onClick={() => {
                          setScreen("voice-call");
                          setShowVoiceFallback(false);
                          setConsecutiveErrors(0);
                          startVoiceCall();
                        }}
                        className="text-xs font-medium text-[#F5A623] hover:underline whitespace-nowrap ml-2"
                      >
                        Call now
                      </button>
                    </div>
                  )}

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={
                          hasOpened && message.id !== "welcome"
                            ? { opacity: 0, y: 10 }
                            : false
                        }
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                          "flex flex-col max-w-[85%]",
                          message.role === "user"
                            ? "ml-auto items-end"
                            : "mr-auto items-start"
                        )}
                      >
                        <div
                          className={cn(
                            "px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
                            message.role === "user"
                              ? "bg-[#141414] text-white rounded-br-md"
                              : "bg-white text-gray-800 border border-gray-200 rounded-bl-md shadow-sm"
                          )}
                        >
                          {message.content}
                        </div>
                        <span className="text-xs text-gray-400 mt-1 px-1">
                          {formatTime(message.timestamp)}
                        </span>
                      </motion.div>
                    ))}

                    {/* Typing Indicator */}
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start max-w-[85%]"
                      >
                        <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md border border-gray-200 shadow-sm">
                          <div className="flex items-center gap-1">
                            <span
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            />
                            <span
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "150ms" }}
                            />
                            <span
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input Area */}
                  <div className="p-4 bg-white border-t border-gray-200 shrink-0">
                    <div className="flex items-center gap-2">
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your message..."
                        disabled={isLoading}
                        className="flex-1 px-4 py-2.5 bg-gray-100 rounded-full text-sm text-gray-800
                          placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50
                          disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      <button
                        onClick={sendMessage}
                        disabled={!inputValue.trim() || isLoading}
                        className={cn(
                          "p-2.5 rounded-full transition-all duration-200",
                          inputValue.trim() && !isLoading
                            ? "bg-accent text-[#141414] hover:bg-accent-light"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        )}
                        aria-label="Send message"
                      >
                        {isLoading ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <Send className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-gray-400 text-center mt-2">
                      Powered by AI - For detailed quotes, please{" "}
                      <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        book a call
                      </a>
                    </p>
                  </div>
                </motion.div>
              )}

              {/* ── Screen 3b: Voice Call ────────────────────────────────── */}
              {screen === "voice-call" && (
                <motion.div
                  key="voice-call"
                  {...screenTransition}
                  className="flex-1 flex flex-col items-center justify-center p-6"
                >
                  {/* Connecting */}
                  {voiceStatus === "connecting" && (
                    <div className="flex flex-col items-center gap-4 text-center">
                      <div className="relative w-20 h-20">
                        <div className="absolute inset-0 rounded-full bg-[#F5A623]/20 animate-ping" />
                        <div className="relative w-20 h-20 rounded-full bg-[#F5A623]/10 flex items-center justify-center">
                          <Phone className="w-8 h-8 text-[#F5A623]" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Connecting...</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Setting up your voice call
                        </p>
                      </div>
                      <Loader2 className="w-5 h-5 text-[#F5A623] animate-spin" />
                    </div>
                  )}

                  {/* Connected / Active Call */}
                  {voiceStatus === "connected" && (
                    <div className="flex flex-col items-center gap-5 text-center w-full">
                      {/* Agent Speaking Animation */}
                      <div className="relative w-24 h-24">
                        {agentSpeaking && (
                          <>
                            <div className="absolute inset-0 rounded-full bg-[#F5A623]/10 animate-ping" />
                            <div className="absolute -inset-2 rounded-full bg-[#F5A623]/5 animate-pulse" />
                          </>
                        )}
                        <div
                          className={cn(
                            "relative w-24 h-24 rounded-full flex items-center justify-center transition-colors duration-300",
                            agentSpeaking
                              ? "bg-[#F5A623]/20"
                              : "bg-[#F5A623]/10"
                          )}
                        >
                          <Phone className="w-10 h-10 text-[#F5A623]" />
                        </div>
                      </div>

                      {/* Speaking indicator */}
                      {agentSpeaking && (
                        <div className="flex items-center gap-1">
                          {[0, 1, 2, 3, 4].map((i) => (
                            <motion.div
                              key={i}
                              className="w-1 bg-[#F5A623] rounded-full"
                              animate={{
                                height: [4, 16, 4],
                              }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.1,
                              }}
                            />
                          ))}
                        </div>
                      )}

                      {/* Timer */}
                      <p className="text-2xl font-mono text-gray-900 tabular-nums">
                        {formatCallDuration(callDuration)}
                      </p>

                      {/* Controls */}
                      <div className="flex items-center gap-4">
                        <button
                          onClick={toggleMute}
                          className={cn(
                            "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200",
                            isMuted
                              ? "bg-red-100 text-red-600 hover:bg-red-200"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          )}
                          aria-label={isMuted ? "Unmute" : "Mute"}
                        >
                          {isMuted ? (
                            <MicOff className="w-6 h-6" />
                          ) : (
                            <Mic className="w-6 h-6" />
                          )}
                        </button>
                        <button
                          onClick={endCall}
                          className="w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center
                            hover:bg-red-600 transition-colors"
                          aria-label="End call"
                        >
                          <PhoneOff className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Call Ended */}
                  {voiceStatus === "ended" && (
                    <div className="flex flex-col items-center gap-4 text-center">
                      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                        <PhoneOff className="w-7 h-7 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Call Ended</p>
                        {callDuration > 0 && (
                          <p className="text-xs text-gray-500 mt-1">
                            Duration: {formatCallDuration(callDuration)}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col gap-2 w-full max-w-[200px]">
                        <button
                          onClick={() => {
                            setVoiceStatus("idle");
                            setCallDuration(0);
                            startVoiceCall();
                          }}
                          className="w-full py-2.5 rounded-xl bg-[#141414] text-white text-sm font-medium
                            hover:bg-[#141414]/90 transition-colors"
                        >
                          Call Again
                        </button>
                        <a
                          href={CALENDLY_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 rounded-xl border-2 border-gray-200 text-gray-700 text-sm font-medium
                            hover:border-[#F5A623] transition-colors text-center inline-flex items-center justify-center gap-1.5"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          Book a Meeting
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Error */}
                  {voiceStatus === "error" && (
                    <div className="flex flex-col items-center gap-4 text-center">
                      <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
                        <PhoneOff className="w-7 h-7 text-red-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Unable to connect
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          The voice call couldn&apos;t be established.
                          <br />
                          Please book a meeting instead.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 w-full max-w-[200px]">
                        <button
                          onClick={() => {
                            setVoiceStatus("idle");
                            setCallDuration(0);
                            startVoiceCall();
                          }}
                          className="w-full py-2.5 rounded-xl bg-[#141414] text-white text-sm font-medium
                            hover:bg-[#141414]/90 transition-colors"
                        >
                          Try Again
                        </button>
                        <a
                          href={CALENDLY_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 rounded-xl border-2 border-gray-200 text-gray-700 text-sm font-medium
                            hover:border-[#F5A623] transition-colors text-center inline-flex items-center justify-center gap-1.5"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          Book a Meeting
                        </a>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
