import { NextRequest, NextResponse } from "next/server";

// Placeholder RFQ intake endpoint — wire this up to a real CRM/email
// service (e.g. HubSpot, Salesforce, or an SMTP/email API) before
// launch. For now it validates the payload and returns success so the
// front-end form flow can be built and tested end-to-end.
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || !body.name || !body.email || !body.inquiryType) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
