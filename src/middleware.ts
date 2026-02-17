import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    // Get the session cookie (Better Auth uses "better-auth.session_token")
    const sessionToken =
        request.cookies.get("better-auth.session_token")?.value;

    const isAuthPage = request.nextUrl.pathname.startsWith("/chat");

    // If trying to access /chat without a session, redirect to home
    if (isAuthPage && !sessionToken) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/chat/:path*"],
};
