import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { contactSchema, type ContactFieldErrors } from "@/lib/validation";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

function clientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(req: NextRequest) {
  // 1. Rate limit per IP
  const limit = rateLimit(clientIp(req));
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many messages. Try again in a few minutes." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  // 2. Parse JSON
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // 3. Honeypot: pretend success so bots don't retry
  if (body && typeof body === "object" && "company" in body && (body as { company?: string }).company) {
    return NextResponse.json({ ok: true });
  }

  // 4. Validate on the server (never trust the client)
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: ContactFieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (key === "name" || key === "email" || key === "message") {
        fieldErrors[key] = [...(fieldErrors[key] ?? []), issue.message];
      }
    }
    return NextResponse.json({ error: "Check the highlighted fields.", fieldErrors }, { status: 400 });
  }

  // 5. Send the email
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "fathurrahmanrifaldi@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "The contact form is not configured yet. Email me directly instead." },
      { status: 503 },
    );
  }

  const { name, email, message } = parsed.data;
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
        <h2 style="font-size: 20px; font-weight: 600; color: #111827; margin-top: 0; margin-bottom: 20px; border-bottom: 1px solid #e5e7eb; padding-bottom: 12px;">
          Pesan Baru dari Form Kontak Portofolio
        </h2>
        <div style="margin-bottom: 16px;">
          <p style="margin: 4px 0;"><strong>Pengirim:</strong> ${name}</p>
          <p style="margin: 4px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
        </div>
        <div style="margin-top: 20px; padding: 16px; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
          <strong style="display: block; margin-bottom: 8px; color: #374151;">Isi Pesan:</strong>
          <p style="white-space: pre-wrap; margin: 0; color: #1f2937;">${message}</p>
        </div>
        <p style="margin-top: 24px; font-size: 13px; color: #6b7280;">
          Anda dapat langsung membalas email ini untuk merespons ke <strong>${email}</strong>.
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      { error: "I couldn't send your message. Email me directly instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
