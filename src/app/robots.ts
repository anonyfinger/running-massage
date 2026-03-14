import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * robots.txt — 검색엔진 크롤러 지침 (SEO 100점)
 * host, sitemap 필수. allow/disallow로 크롤링 범위 명시.
 */
export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.siteUrl;
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
    ],
    host: base,
    sitemap: `${base}/sitemap.xml`,
  };
}
