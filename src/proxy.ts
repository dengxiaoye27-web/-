import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

function pathnameHasLocale(pathname: string) {
  return locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
}

// Canonical host is www.wandtung.com (see src/lib/site.ts). Requests to the
// bare apex domain get a permanent redirect so there's a single canonical
// URL per page for SEO — no duplicate-content split between the two hosts.
const APEX_HOST = "wandtung.com";
const CANONICAL_HOST = "www.wandtung.com";

function unauthorized() {
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Wandtung Admin"' },
  });
}

// Internal tooling (the sales-file upload admin at /admin) is gated by a
// shared password set via ADMIN_UPLOAD_PASSWORD on the server — never
// committed to the repo. It is not part of the public, locale-prefixed site.
function checkAdminAuth(request: NextRequest) {
  const expected = process.env.ADMIN_UPLOAD_PASSWORD;
  if (!expected) return unauthorized();

  const header = request.headers.get("authorization");
  if (!header?.startsWith("Basic ")) return unauthorized();

  const decoded = Buffer.from(header.slice(6), "base64").toString("utf8");
  const password = decoded.slice(decoded.indexOf(":") + 1);
  if (password !== expected) return unauthorized();

  return null;
}

// Default-locale-unprefixed routing: English (default) serves at the bare
// path ("/", "/products"), while other locales require a prefix
// ("/ar/products"). Requests without a recognized locale prefix are
// rewritten (not redirected) to the default locale segment internally,
// so the URL bar keeps showing the clean, unprefixed path.
export default function proxy(request: NextRequest) {
  const host = request.headers.get("host");
  if (host === APEX_HOST) {
    const url = request.nextUrl.clone();
    url.protocol = "https";
    url.host = CANONICAL_HOST;
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

  const { pathname } = request.nextUrl;

  if (pathname === "/admin" || pathname.startsWith("/admin/") || pathname.startsWith("/api/admin/")) {
    return checkAdminAuth(request) ?? NextResponse.next();
  }

  if (pathnameHasLocale(pathname)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|certifications/|.*\\..*).*)",
    "/api/admin/:path*",
  ],
};
