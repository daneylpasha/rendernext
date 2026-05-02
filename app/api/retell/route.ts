import { NextRequest, NextResponse } from "next/server";
import { createRateLimiter } from "@/lib/rateLimit";

const checkRateLimit = createRateLimiter(60 * 1000, 3, "retell:");

const RETELL_AGENT_ID = process.env.RETELL_AGENT_ID ?? "agent_fdab41282cad0d692512434a4f";

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
    const { allowed, remaining } = checkRateLimit(request);

    if (!allowed) {
      return NextResponse.json(
        { error: "Too many call requests. Please try again later." },
        {
          status: 429,
          headers: {
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": "60",
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
