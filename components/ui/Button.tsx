"use client";

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  asChild?: boolean;
  onDark?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      asChild = false,
      onDark = true,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-accent text-[#141414] hover:bg-accent-light focus:ring-accent focus:ring-offset-bg-dark",
      secondary: onDark
        ? "border border-white/20 bg-transparent text-white hover:bg-white/10 focus:ring-white/50 focus:ring-offset-bg-dark"
        : "border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100 focus:ring-gray-300 focus:ring-offset-white",
      ghost: onDark
        ? "bg-transparent text-white/70 hover:text-white hover:bg-white/5"
        : "bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm gap-2",
      md: "px-6 py-3 text-base gap-2",
      lg: "px-8 py-4 text-lg gap-3",
    };

    const combinedClassName = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    // When asChild is true, use Slot with Slottable for proper child merging
    if (asChild) {
      return (
        <Slot className={combinedClassName} ref={ref} {...props}>
          {isLoading && (
            <Loader2
              className={cn(
                "animate-spin",
                size === "sm" ? "h-4 w-4" : size === "md" ? "h-5 w-5" : "h-6 w-6"
              )}
            />
          )}
          <Slottable>{children}</Slottable>
        </Slot>
      );
    }

    return (
      <button
        className={combinedClassName}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <Loader2
            className={cn(
              "animate-spin",
              size === "sm" ? "h-4 w-4" : size === "md" ? "h-5 w-5" : "h-6 w-6"
            )}
          />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
