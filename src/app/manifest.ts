import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * 웹 앱 매니페스트 — 검색엔진·브라우저에 사이트 정보 제공 (SEO·PWA 100점)
 */
export default function manifest(): MetadataRoute.Manifest {
  const { siteName, metaDescription, ogImagePath, siteUrl } = siteConfig;
  const shareImageUrl = ogImagePath
    ? (ogImagePath.startsWith("http") ? ogImagePath : `${siteUrl}${ogImagePath.startsWith("/") ? ogImagePath : `/${ogImagePath}`}`)
    : undefined;
  return {
    id: "/",
    name: siteName,
    short_name: siteName,
    description: metaDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    dir: "ltr",
    lang: "ko",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    prefer_related_applications: false,
    icons: [
      {
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      ...(shareImageUrl
        ? [
            {
              src: shareImageUrl,
              sizes: "1200x630",
              type: "image/jpeg",
              purpose: "any" as const,
            },
          ]
        : []),
    ],
    categories: ["health", "lifestyle"],
  };
}
