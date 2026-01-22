import * as React from "react";
import { cn } from "@/lib/utils";

export type GradientTextProps = React.HTMLAttributes<HTMLSpanElement>;

const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn("text-accent", className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

GradientText.displayName = "GradientText";

export { GradientText };
