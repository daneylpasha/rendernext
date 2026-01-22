import { NextRequest, NextResponse } from "next/server";

// Rate limiting - simple in-memory store
const rateLimitStore = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 10; // Max 10 messages per minute per IP

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "unknown";
  return ip;
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

// System prompt for the RenderNext assistant
const SYSTEM_PROMPT = `You are the RenderNext AI Assistant, a helpful and knowledgeable representative of RenderNext, a digital product studio based in Austin, Texas.

## About RenderNext
RenderNext is a full-service digital product studio specializing in:
- Mobile App Development (React Native, iOS, Android)
- Web Development (Next.js, React, Node.js)
- AI Solutions & Integration
- UI/UX Design
- MVP Development for startups
- Ongoing Maintenance & Support

## Key Information
- Location: Austin, Texas (but works with clients globally)
- Team: Experienced developers, designers, and project managers
- Approach: Collaborative, agile, and focused on quality

## Pricing Guidance (General Ranges)
When discussing pricing, be helpful but encourage booking a call for accurate quotes:

- Simple Landing Page / Marketing Site: $3,000 - $10,000
- Small Web Application: $10,000 - $30,000
- Medium Web Application: $30,000 - $75,000
- Large/Complex Web Application: $75,000 - $200,000+
- Simple Mobile App (single platform): $15,000 - $40,000
- Medium Mobile App (cross-platform): $40,000 - $100,000
- Complex Mobile App: $100,000 - $300,000+
- MVP Development: $20,000 - $80,000 (depending on scope)
- UI/UX Design: $5,000 - $30,000
- AI Integration/Chatbot: $10,000 - $50,000
- Monthly Maintenance: $1,000 - $5,000/month

Note: These are rough estimates. Actual pricing depends on specific requirements, timeline, and complexity.

## Your Behavior Guidelines
1. Be friendly, professional, and helpful
2. Provide useful information about services and general pricing
3. Always encourage booking a discovery call for detailed discussions and accurate quotes
4. If asked about specific technical implementations, provide general guidance
5. Don't make specific promises about timelines or exact costs
6. Redirect complex questions to the contact form or booking a call
7. Keep responses concise but informative (2-4 paragraphs max)
8. If you don't know something specific about RenderNext, say so honestly

## Contact Information
- Website: rendernext.io
- Schedule a call: /contact page
- WhatsApp available for quick questions

Remember: Your goal is to help potential clients understand if RenderNext is a good fit and guide them toward booking a discovery call for detailed project discussions.`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    // Check for API key
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      console.error("ANTHROPIC_API_KEY is not configured");
      return NextResponse.json(
        { error: "Chat service is not configured. Please contact support." },
        { status: 503 }
      );
    }

    // Rate limiting check
    const rateLimitKey = getRateLimitKey(request);
    const { allowed, remaining } = checkRateLimit(rateLimitKey);

    if (!allowed) {
      return NextResponse.json(
        { error: "You're sending messages too quickly. Please wait a moment." },
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
    const messages: ChatMessage[] = body.messages;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages are required" },
        { status: 400 }
      );
    }

    // Validate message content
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage.content || typeof lastMessage.content !== "string") {
      return NextResponse.json(
        { error: "Invalid message format" },
        { status: 400 }
      );
    }

    // Limit conversation history to last 10 messages to manage token usage
    const recentMessages = messages.slice(-10);

    // Format messages for Claude API
    const formattedMessages = recentMessages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));

    // Call Claude API
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages: formattedMessages,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Claude API error:", response.status, errorText);

      if (response.status === 401) {
        return NextResponse.json(
          { error: "Chat service authentication error. Please contact support." },
          { status: 503 }
        );
      }

      if (response.status === 429) {
        return NextResponse.json(
          { error: "Our chat service is experiencing high demand. Please try again shortly." },
          { status: 503 }
        );
      }

      return NextResponse.json(
        { error: "Unable to get a response. Please try again." },
        { status: 500 }
      );
    }

    const data = await response.json();

    // Extract the text content from Claude's response
    const assistantMessage = data.content?.[0]?.text || "I apologize, but I couldn't generate a response. Please try again.";

    return NextResponse.json(
      { message: assistantMessage },
      {
        headers: {
          "X-RateLimit-Remaining": String(remaining),
        },
      }
    );
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
