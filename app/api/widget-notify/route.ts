import { NextRequest, NextResponse } from "next/server";
import { createRateLimiter } from "@/lib/rateLimit";
import { escapeHtml } from "@/lib/escapeHtml";

const checkRateLimit = createRateLimiter(60 * 60 * 1000, 5, "widget:");

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const { allowed, remaining } = checkRateLimit(request);

    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": "3600",
          },
        }
      );
    }

    const body = await request.json();
    const { name, email, phone, type, transcript } = body;

    const targetEmail = "sales@rendernext.io";

    // ── Chat log: full transcript on widget close ──────────────────────────
    if (type === "chat_log") {
      if (!transcript) {
        return NextResponse.json({ error: "Transcript is required." }, { status: 400 });
      }

      const logData = {
        name: String(name || "Unknown").trim(),
        email: String(email || "").trim().toLowerCase(),
        phone: phone ? String(phone).trim() : "Not provided",
        transcript: String(transcript).trim(),
        closedAt: new Date().toISOString(),
      };

      if (process.env.RESEND_API_KEY) {
        try {
          const emailRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "RenderNext <noreply@rendernext.io>",
              to: targetEmail,
              ...(logData.email ? { reply_to: logData.email } : {}),
              subject: `Chat Log — ${logData.name}`,
              html: `
                <h2>Sara AI Chat Log</h2>
                <p><strong>Name:</strong> ${escapeHtml(logData.name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(logData.email || "Not provided")}</p>
                <p><strong>Phone:</strong> ${escapeHtml(logData.phone)}</p>
                <hr />
                <h3>Conversation Transcript</h3>
                <pre style="background:#f5f5f5;padding:16px;border-radius:8px;font-size:13px;line-height:1.6;white-space:pre-wrap;font-family:monospace;">${escapeHtml(logData.transcript)}</pre>
                <hr />
                <p><em>Chat closed at: ${logData.closedAt}</em></p>
              `,
            }),
          });
          if (!emailRes.ok) {
            const errBody = await emailRes.text();
            console.error("Resend chat log error:", emailRes.status, errBody);
          }
        } catch (emailError) {
          console.error("Chat log email delivery failed:", emailError);
        }
      }

      return NextResponse.json(
        { success: true },
        { headers: { "X-RateLimit-Remaining": String(remaining) } }
      );
    }

    // ── Initial widget form submission ─────────────────────────────────────
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : "Not provided",
      submittedAt: new Date().toISOString(),
    };

    // Send webhook if configured
    if (process.env.CONTACT_WEBHOOK_URL) {
      try {
        await fetch(process.env.CONTACT_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...sanitizedData, targetEmail, source: "widget" }),
        });
      } catch (webhookError) {
        console.error("Widget webhook delivery failed:", webhookError);
      }
    }

    // Send email via Resend if configured
    if (process.env.RESEND_API_KEY) {
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "RenderNext <noreply@rendernext.io>",
            to: targetEmail,
            reply_to: sanitizedData.email,
            subject: `New Widget Contact: ${sanitizedData.name}`,
            html: `
              <h2>New Widget Contact</h2>
              <p><strong>Name:</strong> ${escapeHtml(sanitizedData.name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(sanitizedData.email)}</p>
              <p><strong>Phone:</strong> ${escapeHtml(sanitizedData.phone)}</p>
              <hr />
              <p><em>Submitted at: ${sanitizedData.submittedAt}</em></p>
              <p><em>Source: Chat/Voice Widget</em></p>
            `,
          }),
        });
        if (!emailRes.ok) {
          const errBody = await emailRes.text();
          console.error("Resend API error:", emailRes.status, errBody);
        }
      } catch (emailError) {
        console.error("Widget email delivery failed:", emailError);
      }
    }

    if (process.env.NODE_ENV !== "production") {
      console.log("Widget form submission:", sanitizedData);
    }

    return NextResponse.json(
      { success: true },
      {
        headers: {
          "X-RateLimit-Remaining": String(remaining),
        },
      }
    );
  } catch (error) {
    console.error("Widget notify error:", error);
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
