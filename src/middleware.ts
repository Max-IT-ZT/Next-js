import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (request.nextUrl.pathname === "/about") {
    const url = request.nextUrl.clone();
    const group = Math.random() > 0.5 ? "variant-a" : "variant-b";
    url.pathname = `/${group}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/about/:path*", "/dashboard/:path*"],
};
