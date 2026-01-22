"use client";

import * as React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! I'm the RenderNext Assistant. I can help you learn about our services, pricing, and how we can bring your digital product ideas to life. What would you like to know?",
  timestamp: new Date(),
};

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to latest message
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
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const generateId = () => {
    return `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: generateId(),
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
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

  return (
    <>
      {/* Chat Toggle Button */}
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
            {/* Pulse ring animation */}
            <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />

            {/* Button */}
            <span
              className="relative flex items-center justify-center w-14 h-14 rounded-full bg-accent
                shadow-lg shadow-accent/30
                transition-all duration-300
                group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-accent/40
                group-hover:bg-accent-light"
            >
              <MessageSquare className="w-6 h-6 text-[#141414]" />
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
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed z-50 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col",
              // Desktop positioning
              "bottom-24 right-6 w-[350px] h-[500px]",
              // Mobile full-screen
              "max-md:bottom-0 max-md:right-0 max-md:left-0 max-md:top-0 max-md:w-full max-md:h-full max-md:rounded-none"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-accent text-[#141414]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#141414]/10 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">RenderNext Assistant</h3>
                  <p className="text-xs opacity-80">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-[#141414]/10 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={hasOpened && message.id !== "welcome" ? { opacity: 0, y: 10 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    message.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
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
            <div className="p-4 bg-white border-t border-gray-200">
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
                <a href="/contact" className="text-accent hover:underline">
                  book a call
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
