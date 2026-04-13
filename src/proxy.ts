import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * 블로그 라우트는 제거됨. next.config redirects와 함께 proxy에서도 영구 리다이렉트.
 * (캐시나 과거 경로 유입으로 /blog가 보이는 경우 방지)
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/blog" || pathname.startsWith("/blog/")) {
    const dest = new URL("/regions/yeongdeungpo/massage", request.url);
    return NextResponse.redirect(dest, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/blog", "/blog/:path*"],
};
