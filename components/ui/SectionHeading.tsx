"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "dark",
  className,
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
  };

  const themeClasses = {
    dark: {
      title: "text-white",
      subtitle: "text-[#9CA3AF]",
    },
    light: {
      title: "text-gray-900",
      subtitle: "text-gray-600",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("flex flex-col gap-4", alignmentClasses[align], className)}
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className={cn("font-heading text-4xl md:text-5xl font-bold tracking-tight", themeClasses[theme].title)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-lg max-w-2xl", themeClasses[theme].subtitle)}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export { SectionHeading };
