import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json().catch(() => ({ email: null }));

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    console.error("Missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID env vars.");
    return NextResponse.json(
      { error: "Signup isn't configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const beehiivRes = await fetch(
    `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: "squirrel-tamer-website",
      }),
    }
  );

  if (!beehiivRes.ok) {
    const detail = await beehiivRes.text().catch(() => "");
    console.error("Beehiiv subscribe failed:", beehiivRes.status, detail);
    return NextResponse.json(
      { error: "Something went wrong signing you up. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
