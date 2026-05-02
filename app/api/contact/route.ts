import { NextRequest, NextResponse } from "next/server";
import { createRateLimiter } from "@/lib/rateLimit";
import { escapeHtml } from "@/lib/escapeHtml";

const checkRateLimit = createRateLimiter(60 * 60 * 1000, 5);

// Honeypot check - bots often fill hidden fields
function isBot(formData: Record<string, unknown>): boolean {
  // If a hidden honeypot field is filled, it's likely a bot
  if (formData.website && String(formData.website).trim() !== "") {
    return true;
  }
  return false;
}

// Basic validation
function validateForm(data: Record<string, unknown>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || typeof data.name !== "string" || data.name.trim().length < 2) {
    errors.push("Name is required and must be at least 2 characters");
  }

  if (!data.email || typeof data.email !== "string") {
    errors.push("Email is required");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Please enter a valid email address");
  }

  if (!data.projectType || data.projectType === "Select project type") {
    errors.push("Please select a project type");
  }

  if (!data.budget || data.budget === "Select your budget" || data.budget === "Select your budget range") {
    errors.push("Please select a budget range");
  }

  if (!data.description || typeof data.description !== "string" || data.description.trim().length < 10) {
    errors.push("Project description is required (at least 10 characters)");
  }

  return { valid: errors.length === 0, errors };
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
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

    // Honeypot check
    if (isBot(body)) {
      // Return success to fool bots, but don't process
      return NextResponse.json({ success: true, message: "Message sent successfully!" });
    }

    // Validate form data
    const validation = validateForm(body);
    if (!validation.valid) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.errors },
        { status: 400 }
      );
    }

    // Prepare the email data
    const emailData = {
      name: String(body.name).trim(),
      email: String(body.email).trim().toLowerCase(),
      phone: body.phone ? String(body.phone).trim() : "Not provided",
      company: body.company ? String(body.company).trim() : "Not provided",
      projectType: String(body.projectType),
      budget: String(body.budget),
      description: String(body.description).trim(),
      hearAbout: body.hearAbout ? String(body.hearAbout) : "Not specified",
      submittedAt: new Date().toISOString(),
    };

    // Target email for all form submissions
    const targetEmail = "sales@rendernext.io";

    // Send via webhook if configured (e.g., Zapier, Make, or custom endpoint)
    if (process.env.CONTACT_WEBHOOK_URL) {
      try {
        await fetch(process.env.CONTACT_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...emailData, targetEmail }),
        });
      } catch (webhookError) {
        // eslint-disable-next-line no-console
        console.error("Webhook delivery failed:", webhookError);
      }
    }

    // Send via email service (Resend, SendGrid, etc.) if configured
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
            reply_to: emailData.email,
            subject: `New Contact Form: ${emailData.projectType} - ${emailData.name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${escapeHtml(emailData.name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(emailData.email)}</p>
              <p><strong>Phone:</strong> ${escapeHtml(emailData.phone)}</p>
              <p><strong>Company:</strong> ${escapeHtml(emailData.company)}</p>
              <p><strong>Project Type:</strong> ${escapeHtml(emailData.projectType)}</p>
              <p><strong>Budget:</strong> ${escapeHtml(emailData.budget)}</p>
              <p><strong>How they heard about us:</strong> ${escapeHtml(emailData.hearAbout)}</p>
              <p><strong>Description:</strong></p>
              <p>${escapeHtml(emailData.description)}</p>
              <hr />
              <p><em>Submitted at: ${emailData.submittedAt}</em></p>
            `,
          }),
        });
        if (!emailRes.ok) {
          const errBody = await emailRes.text();
          // eslint-disable-next-line no-console
          console.error("Resend API error:", emailRes.status, errBody);
        }
      } catch (emailError) {
        // eslint-disable-next-line no-console
        console.error("Email delivery failed:", emailError);
      }
    }

    // Development logging
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.log("Contact form submission to", targetEmail, ":", emailData);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! We'll be in touch within 24 hours."
      },
      {
        headers: {
          "X-RateLimit-Remaining": String(remaining),
        },
      }
    );

  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Contact form error:", error);
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
