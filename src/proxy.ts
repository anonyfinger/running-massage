import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_REGION_PATH = "/yeongdeungpo-chuljangmassage";
const ALLOWED_REGION_PATHS = new Set([
  "/regions/common/allnight",
  "/regions/common/reservation-guide",
]);

function redirectToCanonicalRegion(request: NextRequest) {
  const destination = request.nextUrl.clone();
  destination.pathname = CANONICAL_REGION_PATH;
  return NextResponse.redirect(destination, 308);
}

/**
 * 블로그 라우트는 제거됨. next.config redirects와 함께 proxy에서도 영구 리다이렉트.
 * 지역 경로도 화이트리스트 방식으로 정규화해 404를 줄이고, 자기 자신 리다이렉트 루프를 방지한다.
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

  if (pathname.startsWith("/regions/")) {
    if (ALLOWED_REGION_PATHS.has(pathname)) {
      return NextResponse.next();
    }
    return redirectToCanonicalRegion(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blog", "/blog/:path*", "/regions/:path*"],
};
