import { NextRequest } from "next/server";

export function createRateLimiter(windowMs: number, max: number, prefix = "") {
  const store = new Map<string, { count: number; lastReset: number }>();

  return function checkRateLimit(request: NextRequest): { allowed: boolean; remaining: number } {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : "unknown";
    const key = prefix ? `${prefix}${ip}` : ip;

    const now = Date.now();
    const record = store.get(key);

    if (!record || now - record.lastReset > windowMs) {
      store.set(key, { count: 1, lastReset: now });
      return { allowed: true, remaining: max - 1 };
    }

    if (record.count >= max) {
      return { allowed: false, remaining: 0 };
    }

    record.count += 1;
    return { allowed: true, remaining: max - record.count };
  };
}
