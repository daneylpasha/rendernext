import { NextRequest, NextResponse } from "next/server";

// Rate limiting - 3 calls per minute per IP
const rateLimitStore = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "unknown";
  return `retell:${ip}`;
}

function checkRateLimit(key: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitStore.get(key);

  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitStore.set(key, { count: 1, lastReset: now });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (record.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  record.count += 1;
  return { allowed: true, remaining: MAX_REQUESTS - record.count };
}

const RETELL_AGENT_ID = "agent_fdab41282cad0d692512434a4f";

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RETELL_API_KEY;
    if (!apiKey) {
      console.error("RETELL_API_KEY is not configured");
      return NextResponse.json(
        { error: "Voice call service is not configured." },
        { status: 503 }
      );
    }

    // Rate limiting
    const rateLimitKey = getRateLimitKey(request);
    const { allowed, remaining } = checkRateLimit(rateLimitKey);

    if (!allowed) {
      return NextResponse.json(
        { error: "Too many call requests. Please try again later." },
        {
          status: 429,
          headers: {
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": String(RATE_LIMIT_WINDOW / 1000),
          },
        }
      );
    }

    const body = await request.json();
    const { name, email, phone } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Create web call via Retell API
    const response = await fetch("https://api.retellai.com/v2/create-web-call", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        agent_id: RETELL_AGENT_ID,
        metadata: {
          name: String(name).trim(),
          email: String(email).trim(),
          phone: phone ? String(phone).trim() : "",
        },
        retell_llm_dynamic_variables: {
          user_name: String(name).trim(),
          user_email: String(email).trim(),
          user_phone: phone ? String(phone).trim() : "Not provided",
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Retell API error:", response.status, errorText);
      return NextResponse.json(
        { error: "Failed to create voice call." },
        { status: 502 }
      );
    }

    const data = await response.json();

    return NextResponse.json(
      {
        access_token: data.access_token,
        call_id: data.call_id,
      },
      {
        headers: {
          "X-RateLimit-Remaining": String(remaining),
        },
      }
    );
  } catch (error) {
    console.error("Retell route error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
