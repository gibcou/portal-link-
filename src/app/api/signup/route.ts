import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, agency, clients } = body;

    if (!email || !name) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    // Forward to Node backend (when running separately)
    // In standalone mode this API route is the backend
    const backendUrl = process.env.BACKEND_URL;
    if (backendUrl) {
      const res = await fetch(`${backendUrl}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, agency, clients }),
      });
      const data = await res.json();
      return NextResponse.json(data, { status: res.status });
    }

    // Standalone: log and respond
    console.log("[PortalKit Signup]", { name, email, agency, clients });
    return NextResponse.json({ success: true, message: "Signup received!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
