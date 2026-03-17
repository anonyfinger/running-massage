import type { NextConfig } from "next";

/**
 * Next.js 설정 — SEO·성능·보안 100점
 * PageSpeed 90+ 목표: 렌더블로킹·미사용 JS·번들 최소화
 */
const nextConfig: NextConfig = {
  reactCompiler: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [480, 640, 750, 828, 1080, 1200],
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
};

export default nextConfig;
