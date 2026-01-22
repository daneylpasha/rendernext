import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "success";
  onDark?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", onDark = true, children, ...props }, ref) => {
    const variants = {
      default: onDark
        ? "bg-white/10 text-white/70 border-transparent"
        : "bg-gray-100 text-gray-600 border-transparent",
      primary: onDark
        ? "bg-accent/10 border-accent/50 text-accent"
        : "bg-accent/10 border-accent/30 text-accent-dark",
      success: onDark
        ? "bg-green-500/10 border-green-500/50 text-green-400"
        : "bg-green-50 border-green-200 text-green-600",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
