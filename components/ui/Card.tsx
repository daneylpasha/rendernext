import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "dark" | "light";
  hoverable?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "dark", hoverable = false, children, ...props }, ref) => {
    const variants = {
      dark: "border-white/10 bg-white/5 backdrop-blur-sm",
      light: "border-gray-200 bg-white shadow-sm",
    };

    const hoverVariants = {
      dark: "hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_30px_rgba(245,166,35,0.1)]",
      light: "hover:-translate-y-1 hover:shadow-lg hover:border-accent/30",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border",
          variants[variant],
          hoverable && "transition-all duration-300",
          hoverable && hoverVariants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
