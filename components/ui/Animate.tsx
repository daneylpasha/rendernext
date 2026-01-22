"use client";

import * as React from "react";
import { motion, useInView, Variants } from "framer-motion";

// Shared animation config
const defaultEasing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

interface AnimateProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  className?: string;
}

// FadeIn - Basic fade in
export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.2,
  className,
}: AnimateProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration, delay, ease: defaultEasing }}
      className={className}
      style={{ willChange: "opacity" }}
    >
      {children}
    </motion.div>
  );
}

// FadeInUp - Fade in + slide up (most common)
export function FadeInUp({
  children,
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.2,
  className,
}: AnimateProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration, delay, ease: defaultEasing }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

// FadeInDown - Fade in + slide down
export function FadeInDown({
  children,
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.2,
  className,
}: AnimateProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
      transition={{ duration, delay, ease: defaultEasing }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

// FadeInLeft - Fade in + slide from left
export function FadeInLeft({
  children,
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.2,
  className,
}: AnimateProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration, delay, ease: defaultEasing }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

// FadeInRight - Fade in + slide from right
export function FadeInRight({
  children,
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.2,
  className,
}: AnimateProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
      transition={{ duration, delay, ease: defaultEasing }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

// ScaleIn - Scale up entrance
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  threshold = 0.2,
  className,
}: AnimateProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration, delay, ease: defaultEasing }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
  threshold?: number;
  className?: string;
}

// StaggerContainer - Parent for staggered children
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delayChildren = 0.1,
  once = true,
  threshold = 0.2,
  className,
}: StaggerContainerProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const customVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayChildren,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={customVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// StaggerItem variants
const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: defaultEasing,
    },
  },
};

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

// StaggerItem - Child item for staggered animations
export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div
      variants={staggerItemVariants}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

// StaggerItemScale - Child item with scale animation
const staggerItemScaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: defaultEasing,
    },
  },
};

export function StaggerItemScale({ children, className }: StaggerItemProps) {
  return (
    <motion.div
      variants={staggerItemScaleVariants}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

// StaggerItemRight - Child item sliding from right
const staggerItemRightVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: defaultEasing,
    },
  },
};

export function StaggerItemRight({ children, className }: StaggerItemProps) {
  return (
    <motion.div
      variants={staggerItemRightVariants}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

// DrawLine - Animated line that draws itself
interface DrawLineProps {
  direction?: "horizontal" | "vertical";
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  className?: string;
}

export function DrawLine({
  direction = "horizontal",
  delay = 0,
  duration = 0.8,
  once = true,
  threshold = 0.2,
  className,
}: DrawLineProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const isHorizontal = direction === "horizontal";

  return (
    <motion.div
      ref={ref}
      initial={{ [isHorizontal ? "scaleX" : "scaleY"]: 0 }}
      animate={isInView ? { [isHorizontal ? "scaleX" : "scaleY"]: 1 } : { [isHorizontal ? "scaleX" : "scaleY"]: 0 }}
      transition={{ duration, delay, ease: defaultEasing }}
      className={className}
      style={{
        willChange: "transform",
        transformOrigin: isHorizontal ? "left" : "top",
      }}
    />
  );
}

// PulseGlow - Continuous pulsing glow animation
interface PulseGlowProps {
  children?: React.ReactNode;
  className?: string;
  duration?: number;
}

export function PulseGlow({ children, className, duration = 4 }: PulseGlowProps) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.6, 0.8, 0.6],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// FloatAnimation - Continuous floating animation for background elements
interface FloatAnimationProps {
  children?: React.ReactNode;
  className?: string;
  duration?: number;
  yOffset?: number;
}

export function FloatAnimation({
  children,
  className,
  duration = 6,
  yOffset = 20,
}: FloatAnimationProps) {
  return (
    <motion.div
      animate={{
        y: [-yOffset / 2, yOffset / 2, -yOffset / 2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
