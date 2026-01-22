import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand accent colors (mustard yellow)
        accent: {
          DEFAULT: "#F5A623",
          light: "#FFB84D",
          dark: "#D4891C",
        },
        // Mustard alias for service pages
        mustard: {
          DEFAULT: "#F5A623",
          light: "#FFB84D",
          dark: "#D4891C",
        },
        // Dark sections (hero, CTA, footer)
        "bg-dark": "#141414",
        "fg-dark": "#FFFFFF",
        "muted-dark": "#9CA3AF",
        // Light sections (services, process, work)
        "bg-light": "#FFFFFF",
        "bg-muted": "#F9FAFB",
        "fg-light": "#111827",
        "muted-light": "#6B7280",
        // Border colors
        "border-dark": "rgba(255, 255, 255, 0.1)",
        "border-light": "#E5E7EB",
        // Legacy support
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "pulse-glow": "pulseGlow 2s infinite",
        "blob": "blob 8s ease-in-out infinite",
        "blob-slow": "blob 12s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(245, 166, 35, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(245, 166, 35, 0.5)" },
        },
        blob: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "25%": {
            transform: "translate(20px, -30px) scale(1.1)",
          },
          "50%": {
            transform: "translate(-20px, 20px) scale(0.95)",
          },
          "75%": {
            transform: "translate(30px, 10px) scale(1.05)",
          },
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(245, 166, 35, 0.3)",
        "glow-lg": "0 0 40px rgba(245, 166, 35, 0.4)",
      },
    },
  },
  plugins: [typography],
};

export default config;
