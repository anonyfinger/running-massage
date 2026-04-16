import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_REGION_PATH = "/regions/yeongdeungpo";

function redirectToCanonicalRegion(request: NextRequest) {
  const destination = request.nextUrl.clone();
  destination.pathname = CANONICAL_REGION_PATH;
  return NextResponse.redirect(destination, 308);
}

/**
 * 블로그 라우트는 제거됨. next.config redirects와 함께 proxy에서도 영구 리다이렉트.
 * 오래된 보조 경로만 정규화하고, 실제 지역 라우트는 App Router가 직접 처리한다.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/blog" || pathname.startsWith("/blog/")) {
    return redirectToCanonicalRegion(request);
  }

  if (pathname === "/regions/common" || pathname === "/regions/guide") {
    const destination = request.nextUrl.clone();
    destination.pathname = "/regions/common/reservation-guide";
    return NextResponse.redirect(destination, 308);
  }

  if (pathname === "/regions/yeongdeungpo/massage") {
    return redirectToCanonicalRegion(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/blog",
    "/blog/:path*",
    "/regions/common",
    "/regions/guide",
    "/regions/yeongdeungpo/massage",
  ],
};
