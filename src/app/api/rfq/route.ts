import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface RfqPayload {
  inquiryType?: string;
  name?: string;
  company?: string;
  country?: string;
  email?: string;
  whatsapp?: string;
  product?: string;
  projectType?: string;
  quantity?: string;
  dcCapacity?: string;
  rackCount?: string;
  itLoad?: string;
  powerCapacity?: string;
  coolingType?: string;
  location?: string;
  deliveryDate?: string;
  requirements?: string;
}

const FIELD_LABELS: Record<keyof RfqPayload, string> = {
  inquiryType: "Inquiry Type",
  name: "Name",
  company: "Company",
  country: "Country",
  email: "Email",
  whatsapp: "WhatsApp",
  product: "Product Category",
  projectType: "Project Type",
  quantity: "Quantity",
  dcCapacity: "Data Center Capacity",
  rackCount: "Rack Count",
  itLoad: "IT Load",
  powerCapacity: "Power Capacity",
  coolingType: "Cooling Type",
  location: "Site Location",
  deliveryDate: "Requested Delivery Date",
  requirements: "Requirements",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailBody(payload: RfqPayload) {
  const rows = (Object.keys(FIELD_LABELS) as (keyof RfqPayload)[])
    .filter((key) => payload[key])
    .map((key) => ({ label: FIELD_LABELS[key], value: payload[key] as string }));

  const text = rows.map((r) => `${r.label}: ${r.value}`).join("\n");

  const html = `
    <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      ${rows
        .map(
          (r) => `
        <tr>
          <td style="padding:6px 12px;border:1px solid #ddd;font-weight:600;color:#111;white-space:nowrap;">${r.label}</td>
          <td style="padding:6px 12px;border:1px solid #ddd;color:#333;">${escapeHtml(r.value)}</td>
        </tr>`
        )
        .join("")}
    </table>
  `;

  return { text, html };
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as RfqPayload | null;

  if (!body || !body.name || !body.email || !body.inquiryType) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const recipients = process.env.RFQ_RECIPIENT_EMAILS;

  if (!host || !user || !password || !recipients) {
    console.error("RFQ email is not configured — missing SMTP_HOST/SMTP_USER/SMTP_PASSWORD/RFQ_RECIPIENT_EMAILS.");
    return NextResponse.json({ ok: false, error: "RFQ intake is not configured." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass: password },
  });

  const { text, html } = buildEmailBody(body);
  const subject = `New RFQ — ${body.company ?? body.name} (${body.inquiryType})`;

  try {
    await transporter.sendMail({
      from: `"Wandtung Website" <${user}>`,
      to: recipients.split(",").map((r) => r.trim()),
      replyTo: body.email,
      subject,
      text,
      html,
    });
  } catch (err) {
    console.error("Failed to send RFQ email:", err);
    return NextResponse.json({ ok: false, error: "Failed to send inquiry." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
