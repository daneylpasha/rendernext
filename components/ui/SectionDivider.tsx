"use client";

interface SectionDividerProps {
  from?: "dark" | "light" | "muted";
  to?: "dark" | "light" | "muted";
  variant?: "wave" | "curve" | "angle";
  flip?: boolean;
  className?: string;
}

const colors = {
  dark: "#141414",
  light: "#FFFFFF",
  muted: "#F9FAFB",
};

export function SectionDivider({
  from = "dark",
  to = "light",
  variant = "curve",
  flip = false,
  className = "",
}: SectionDividerProps) {
  const fillColor = colors[to];

  const paths = {
    wave: "M0,64 C320,128 640,0 960,64 L960,128 L0,128 Z",
    curve: "M0,96 Q480,0 960,96 L960,128 L0,128 Z",
    angle: "M0,128 L960,64 L960,128 L0,128 Z",
  };

  return (
    <div
      className={`relative w-full ${className}`}
      style={{
        marginTop: "-1px",
        backgroundColor: colors[from],
      }}
    >
      <svg
        viewBox="0 0 960 128"
        preserveAspectRatio="none"
        className={`w-full h-16 lg:h-24 ${flip ? "rotate-360" : ""}`}
        style={{ display: "block" }}
      >
        <rect width="960" height="128" fill={colors[from]} />
        <path d={paths[variant]} fill={fillColor} />
      </svg>
      {/* Absolute-positioned overlap to cover subpixel gap with next section */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: "6px",
          backgroundColor: fillColor,
          transform: "translateY(3px)",
        }}
      />
    </div>
  );
}

// Decorative ring element
export function DecorativeRing({
  size = 400,
  opacity = 0.05,
  color = "#F5A623",
  position = "top-right",
  className = "",
}: {
  size?: number;
  opacity?: number;
  color?: string;
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "center-right"
    | "center-left";
  className?: string;
}) {
  const positionClasses = {
    "top-right": "-top-1/4 -right-1/4",
    "top-left": "-top-1/4 -left-1/4",
    "bottom-right": "-bottom-1/4 -right-1/4",
    "bottom-left": "-bottom-1/4 -left-1/4",
    "center-right": "top-1/2 -translate-y-1/2 -right-1/4",
    "center-left": "top-1/2 -translate-y-1/2 -left-1/4",
  };

  return (
    <div
      className={`absolute pointer-events-none ${positionClasses[position]} ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <div
        className="w-full h-full rounded-full border-2"
        style={{
          borderColor: color,
          opacity: opacity,
        }}
      />
    </div>
  );
}

// Floating particles component
export function FloatingParticles({
  count = 20,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float-slow ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
