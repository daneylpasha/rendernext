// Project Cost Estimator Logic

export type ProjectType =
  | "mobile"
  | "web"
  | "both"
  | "ai"
  | "mvp";

export type DesignRequirement =
  | "have-designs"
  | "basic-design"
  | "premium-design";

export type Timeline =
  | "rush"
  | "standard"
  | "flexible"
  | "no-rush";

export interface EstimateInput {
  projectType: ProjectType;
  features: string[];
  designRequirement: DesignRequirement;
  timeline: Timeline;
}

export interface EstimateBreakdown {
  baseCost: { low: number; high: number };
  featuresCost: { low: number; high: number };
  designCost: { low: number; high: number };
  timelineAdjustment: { low: number; high: number };
  total: { low: number; high: number };
}

// Base prices by project type
const BASE_PRICES: Record<ProjectType, { low: number; high: number }> = {
  mobile: { low: 25000, high: 50000 },
  web: { low: 15000, high: 35000 },
  both: { low: 35000, high: 70000 },
  ai: { low: 20000, high: 45000 },
  mvp: { low: 15000, high: 30000 },
};

// Feature costs
const FEATURE_COSTS: Record<string, { low: number; high: number }> = {
  "user-auth": { low: 2000, high: 5000 },
  "payment": { low: 3000, high: 8000 },
  "push-notifications": { low: 1500, high: 3500 },
  "realtime": { low: 4000, high: 10000 },
  "admin-dashboard": { low: 5000, high: 12000 },
  "third-party-api": { low: 2000, high: 6000 },
  "ai-ml": { low: 8000, high: 20000 },
  "offline-support": { low: 3000, high: 8000 },
  "analytics": { low: 2000, high: 5000 },
  "social-features": { low: 3000, high: 8000 },
  "maps-location": { low: 2500, high: 6000 },
  "media": { low: 3000, high: 7000 },
};

// Design multipliers
const DESIGN_MULTIPLIERS: Record<DesignRequirement, number> = {
  "have-designs": 1.0,
  "basic-design": 1.15,
  "premium-design": 1.35,
};

// Timeline multipliers
const TIMELINE_MULTIPLIERS: Record<Timeline, number> = {
  "rush": 1.3,
  "standard": 1.0,
  "flexible": 0.95,
  "no-rush": 0.9,
};

export function calculateEstimate(input: EstimateInput): EstimateBreakdown {
  // Base cost
  const baseCost = BASE_PRICES[input.projectType];

  // Features cost
  let featuresLow = 0;
  let featuresHigh = 0;
  input.features.forEach((feature) => {
    const cost = FEATURE_COSTS[feature];
    if (cost) {
      featuresLow += cost.low;
      featuresHigh += cost.high;
    }
  });
  const featuresCost = { low: featuresLow, high: featuresHigh };

  // Design cost (applied as multiplier to base + features)
  const designMultiplier = DESIGN_MULTIPLIERS[input.designRequirement];
  const subtotalLow = baseCost.low + featuresCost.low;
  const subtotalHigh = baseCost.high + featuresCost.high;

  const designCostLow = Math.round(subtotalLow * (designMultiplier - 1));
  const designCostHigh = Math.round(subtotalHigh * (designMultiplier - 1));
  const designCost = { low: designCostLow, high: designCostHigh };

  // Timeline adjustment
  const timelineMultiplier = TIMELINE_MULTIPLIERS[input.timeline];
  const withDesignLow = subtotalLow + designCostLow;
  const withDesignHigh = subtotalHigh + designCostHigh;

  const timelineAdjustmentLow = Math.round(withDesignLow * (timelineMultiplier - 1));
  const timelineAdjustmentHigh = Math.round(withDesignHigh * (timelineMultiplier - 1));
  const timelineAdjustment = { low: timelineAdjustmentLow, high: timelineAdjustmentHigh };

  // Total
  const totalLow = withDesignLow + timelineAdjustmentLow;
  const totalHigh = withDesignHigh + timelineAdjustmentHigh;

  // Round to nearest 1000
  const roundToThousand = (n: number) => Math.round(n / 1000) * 1000;

  return {
    baseCost: { low: roundToThousand(baseCost.low), high: roundToThousand(baseCost.high) },
    featuresCost: { low: roundToThousand(featuresCost.low), high: roundToThousand(featuresCost.high) },
    designCost: { low: roundToThousand(designCost.low), high: roundToThousand(designCost.high) },
    timelineAdjustment: { low: roundToThousand(timelineAdjustment.low), high: roundToThousand(timelineAdjustment.high) },
    total: { low: roundToThousand(totalLow), high: roundToThousand(totalHigh) },
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  mobile: "Mobile App (iOS & Android)",
  web: "Web Application",
  both: "Both (Mobile + Web)",
  ai: "AI Integration / Chatbot",
  mvp: "MVP / Prototype",
};

export const FEATURE_OPTIONS = [
  { id: "user-auth", label: "User Authentication", description: "Login, signup, password reset" },
  { id: "payment", label: "Payment Integration", description: "Stripe, PayPal, etc." },
  { id: "push-notifications", label: "Push Notifications", description: "Real-time alerts" },
  { id: "realtime", label: "Real-time Features", description: "Chat, live updates" },
  { id: "admin-dashboard", label: "Admin Dashboard", description: "Management interface" },
  { id: "third-party-api", label: "Third-party APIs", description: "External integrations" },
  { id: "ai-ml", label: "AI/ML Features", description: "Smart recommendations, NLP" },
  { id: "offline-support", label: "Offline Support", description: "Works without internet" },
  { id: "analytics", label: "Analytics & Reporting", description: "Usage insights" },
  { id: "social-features", label: "Social Features", description: "Sharing, feeds, comments" },
  { id: "maps-location", label: "Maps & Location", description: "GPS, geofencing" },
  { id: "media", label: "Media Features", description: "Camera, video, audio" },
];

export const DESIGN_OPTIONS = [
  { id: "have-designs", label: "I have designs ready", description: "You'll provide Figma/Sketch files" },
  { id: "basic-design", label: "I need basic UI/UX design", description: "Clean, functional design" },
  { id: "premium-design", label: "I need premium custom design", description: "Unique, polished experience" },
];

export const TIMELINE_OPTIONS = [
  { id: "rush", label: "ASAP (Rush)", description: "Under 4 weeks", multiplier: "+30%" },
  { id: "standard", label: "Standard", description: "6-8 weeks", multiplier: "Base rate" },
  { id: "flexible", label: "Flexible", description: "8-12 weeks", multiplier: "-5%" },
  { id: "no-rush", label: "No rush", description: "12+ weeks", multiplier: "-10%" },
];
