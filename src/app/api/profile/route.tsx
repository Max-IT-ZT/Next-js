import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  if (token.value === "FAKE_TOKEN_123") {
    return NextResponse.json({
      id: 1,
      name: "Максим",
      email: "test@example.com",
    });
  }

  return NextResponse.json({ error: "Invalid token" }, { status: 403 });
}
