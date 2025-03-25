import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    const url = new URL("/about-me", request.url);
    return NextResponse.redirect(url);
  }
}
