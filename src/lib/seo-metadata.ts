import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type SocialMetaInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

function normalizeMetaText(value: string, maxLength = 150): string {
  const compact = value.replace(/\s+/g, " ").trim();
  if (compact.length <= maxLength) {
    return compact;
  }
  return `${compact.slice(0, maxLength - 1).trimEnd()}…`;
}

function buildAbsoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.siteUrl).toString();
}

function buildOgImages(): { url: string; width: number; height: number; alt: string; type?: string }[] | undefined {
  const ogPath = siteConfig.ogImagePath?.trim();
  if (!ogPath) {
    return undefined;
  }
  // 절대 URL 필수 — 카카오/페이스북 등 크롤러가 상대 경로를 제대로 못 가져오는 경우 대비
  const url = ogPath.startsWith("http") ? ogPath : buildAbsoluteUrl(ogPath.startsWith("/") ? ogPath : `/${ogPath}`);
  const ext = ogPath.split(".").pop()?.toLowerCase();
  const mime = ext === "png" ? "image/png" : ext === "webp" ? "image/webp" : "image/jpeg";
  return [{
    url,
    width: 1200,
    height: 630,
    alt: "출장마사지 출장안마 출장스웨디시 - 고객 지정 장소로 방문하는 프리미엄 홈케어 마사지 서비스",
    type: mime,
  }];
}

export function createSocialMetadata({
  title,
  description,
  path = "/",
  keywords,
}: SocialMetaInput): Metadata {
  const canonical = buildAbsoluteUrl(path);
  const normalizedDescription = normalizeMetaText(description);
  const ogImages = buildOgImages();

  return {
    title,
    description: normalizedDescription,
    ...(keywords && keywords.length > 0 && { keywords }),
    alternates: { canonical },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: canonical,
      siteName: siteConfig.siteName,
      title,
      description: normalizedDescription,
      ...(ogImages && {
        images: ogImages.map((img) => ({
          url: img.url,
          width: img.width,
          height: img.height,
          alt: img.alt,
          type: img.type,
        })),
      }),
    },
    twitter: {
      card: ogImages ? "summary_large_image" : "summary",
      title,
      description: normalizedDescription,
      ...(ogImages && { images: ogImages.map((image) => image.url) }),
      creator: siteConfig.siteName,
    },
  };
}
