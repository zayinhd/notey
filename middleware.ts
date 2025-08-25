import { NextResponse, type NextRequest } from "next/server";
import { Helper } from "./app/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
    const { session, supabaseResponse } = await Helper(request);

    const url = request.nextUrl.clone();

    if (!session && url.pathname.startsWith("/dashboard")) {
        url.pathname = "/auth/login";
        return NextResponse.redirect(url);
    }

    if (
        session &&
        (url.pathname.startsWith("/auth/login") ||
            url.pathname.startsWith("/auth/signup"))
    ) {
        url.pathname = "/dashboard";
        return NextResponse.redirect(url);
    }

    return supabaseResponse;
}

export const config = {
    matcher: ["/dashboard/:path*", "/auth/login", "/auth/signup"],
};
