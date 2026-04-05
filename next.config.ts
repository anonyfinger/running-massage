import type { NextConfig } from "next";
import path from "node:path";

/** 빌드 실행 디렉터리 — 상위 폴더 lockfile 등으로 루트가 어긋나는 경고 완화 */
const projectRoot = process.cwd();

/**
 * Next.js 설정 — SEO·성능·보안 100점
 * PageSpeed 90+ 목표: 렌더블로킹·미사용 JS·번들 최소화
 */
const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(projectRoot),
  },
  reactCompiler: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [430, 480, 640, 750, 828, 1080, 1200],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  /** 검색·중복 신호 정리: www → 비-www 단일 호스트 (배포 호스트명과 일치해야 함) */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.msg-trip.com" }],
        destination: "https://msg-trip.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
