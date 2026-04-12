import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * 블로그 라우트는 제거됨. next.config redirects와 함께 미들웨어에서도 영구 리다이렉트.
 * (빈 `app/blog` 폴더 잔존·캐시 등으로 /blog 가 살아 보이는 경우 방지)
 */
export function middleware(request: NextRequest) {
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
