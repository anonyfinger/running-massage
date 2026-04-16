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
  /**
   * 캐시: 수정·SEO 검수 단계 — HTML(문서)은 브라우저·Vercel 엣지 모두 최소화, 해시 번들·정적 자산만 길게.
   * - `Cache-Control`: 브라우저·중간 캐시 공통
   * - `Vercel-CDN-Cache-Control`: Vercel 엣지 전용(문서: https://vercel.com/docs/headers/cache-control-headers)
   * 순서 중요 — 첫 일치만 적용되므로 구체적인 경로를 먼저 둔다.
   */
  async headers() {
    const security = [
      { key: "X-DNS-Prefetch-Control", value: "on" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    ] as const;

    /** 브라우저·Vercel 엣지 공통 — 해시 정적 자산 */
    const longImmutable = "public, max-age=31536000, immutable";
    /** 문서·메타·내부링크 검증용 — HTML·robots·sitemap 등 */
    const noStoreHtml = "no-store";

    return [
      {
        source: "/_next/static/:path*",
        headers: [
          ...security,
          { key: "Cache-Control", value: longImmutable },
          { key: "Vercel-CDN-Cache-Control", value: longImmutable },
        ],
      },
      {
        source: "/_next/image",
        headers: [
          ...security,
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, stale-while-revalidate=86400",
          },
          {
            key: "Vercel-CDN-Cache-Control",
            value: "public, max-age=31536000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/post_img/:path*",
        headers: [
          ...security,
          { key: "Cache-Control", value: longImmutable },
          { key: "Vercel-CDN-Cache-Control", value: longImmutable },
        ],
      },
      {
        source: "/hero/:path*",
        headers: [
          ...security,
          { key: "Cache-Control", value: longImmutable },
          { key: "Vercel-CDN-Cache-Control", value: longImmutable },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          ...security,
          { key: "Cache-Control", value: longImmutable },
          { key: "Vercel-CDN-Cache-Control", value: longImmutable },
        ],
      },
      {
        source: "/shareImg.jpg",
        headers: [
          ...security,
          { key: "Cache-Control", value: longImmutable },
          { key: "Vercel-CDN-Cache-Control", value: longImmutable },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          ...security,
          { key: "Cache-Control", value: longImmutable },
          { key: "Vercel-CDN-Cache-Control", value: longImmutable },
        ],
      },
      {
        source: "/favicon.png",
        headers: [
          ...security,
          { key: "Cache-Control", value: longImmutable },
          { key: "Vercel-CDN-Cache-Control", value: longImmutable },
        ],
      },
      {
        source: "/icon.png",
        headers: [
          ...security,
          { key: "Cache-Control", value: longImmutable },
          { key: "Vercel-CDN-Cache-Control", value: longImmutable },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          ...security,
          { key: "Cache-Control", value: noStoreHtml },
          { key: "Vercel-CDN-Cache-Control", value: noStoreHtml },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          ...security,
          { key: "Cache-Control", value: noStoreHtml },
          { key: "Vercel-CDN-Cache-Control", value: noStoreHtml },
        ],
      },
      {
        source: "/manifest.webmanifest",
        headers: [
          ...security,
          { key: "Cache-Control", value: noStoreHtml },
          { key: "Vercel-CDN-Cache-Control", value: noStoreHtml },
        ],
      },
      {
        source: "/:path*",
        headers: [
          ...security,
          { key: "Cache-Control", value: noStoreHtml },
          { key: "Vercel-CDN-Cache-Control", value: noStoreHtml },
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
      {
        source: "/anma",
        destination: "/regions/yeongdeungpo",
        permanent: true,
      },
      {
        source: "/swedish",
        destination: "/regions/yeongdeungpo",
        permanent: true,
      },
      {
        source: "/regions",
        destination: "/regions/seoul",
        permanent: true,
      },
      {
        source: "/regions/guide",
        destination: "/regions/common/reservation-guide",
        permanent: true,
      },
      {
        source: "/regions/common",
        destination: "/regions/common/reservation-guide",
        permanent: true,
      },
      {
        source: "/yeongdeungpo-chuljangmassage",
        destination: "/regions/yeongdeungpo",
        permanent: true,
      },
      {
        source: "/regions/yeongdeungpo/massage",
        destination: "/regions/yeongdeungpo",
        permanent: true,
      },
      /** 블로그 전 구간 폐지 — 영등포 핵심 랜딩으로 신호·크롤 집중 */
      {
        source: "/blog",
        destination: "/regions/yeongdeungpo",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/regions/yeongdeungpo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
