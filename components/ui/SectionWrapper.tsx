import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionWrapperProps
  extends React.HTMLAttributes<HTMLElement> {
  theme?: "dark" | "light" | "muted";
}

const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  ({ className, theme = "dark", id, children, ...props }, ref) => {
    const themes = {
      dark: "bg-[#141414] text-white",
      light: "bg-white text-gray-900",
      muted: "bg-gray-50 text-gray-900",
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn("py-20 lg:py-32", themes[theme], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";

export { SectionWrapper };
