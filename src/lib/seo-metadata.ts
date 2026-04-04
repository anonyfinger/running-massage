import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

/** blog-posts의 YYYY-MM-DD → ISO 8601 (한국 시간 자정, 색인·OG용) */
export function blogDateToIsoKst(dateStr: string): string {
  return `${dateStr}T00:00:00+09:00`;
}

type SocialMetaInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  /** 설정 시 og:type=article 및 article:published_time / modified_time 메타 생성 */
  publishedTime?: string;
  modifiedTime?: string;
  /**
   * true면 `<title>`·OG·트위터 제목 끝에 ` | 브랜드명`을 붙이지 않음.
   * 제목에 이미 브랜드가 포함된 경우 자동으로 중복 접미사는 붙지 않음.
   */
  omitBrandSuffix?: boolean;
};

/** 검색 스니펫·SNS 공유 제목을 사이트 브랜드와 일치시킴 (브랜드 검색·일관성) */
function appendBrandSuffix(title: string, omit: boolean | undefined): string {
  if (omit) return title;
  const brand = siteConfig.siteName;
  if (!brand || title.includes(brand)) return title;
  return `${title} | ${brand}`;
}

function mergeKeywordsWithBrand(keywords: string[] | undefined): string[] | undefined {
  if (!keywords?.length) return keywords;
  const brand = siteConfig.siteName;
  if (keywords.some((k) => k === brand)) return keywords;
  return [brand, ...keywords];
}

function normalizeMetaText(value: string, maxLength = 160): string {
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
  const path = ogPath.startsWith("/") ? ogPath : `/${ogPath}`;
  const absoluteUrl = ogPath.startsWith("http") ? ogPath : buildAbsoluteUrl(path);
  const ext = ogPath.split(".").pop()?.toLowerCase();
  const mime = ext === "png" ? "image/png" : ext === "webp" ? "image/webp" : "image/jpeg";
  return [{
    url: absoluteUrl,
    width: 1200,
    height: 630,
    alt: "출장달리기 — 출장마사지·출장안마·출장스웨디시, 집·호텔·오피스 방문 홈케어 마사지",
    type: mime,
  }];
}

export function createSocialMetadata({
  title,
  description,
  path = "/",
  keywords,
  publishedTime,
  modifiedTime,
  omitBrandSuffix,
}: SocialMetaInput): Metadata {
  const canonical = buildAbsoluteUrl(path);
  const normalizedDescription = normalizeMetaText(description);
  const ogImages = buildOgImages();
  const isArticle = Boolean(publishedTime);
  const fullTitle = appendBrandSuffix(title, omitBrandSuffix);
  const mergedKeywords = mergeKeywordsWithBrand(keywords);

  return {
    title: { absolute: fullTitle },
    description: normalizedDescription,
    ...(mergedKeywords && mergedKeywords.length > 0 && { keywords: mergedKeywords }),
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
      type: isArticle ? "article" : "website",
      locale: "ko_KR",
      url: canonical,
      siteName: siteConfig.siteName,
      title: fullTitle,
      description: normalizedDescription,
      ...(isArticle && {
        publishedTime,
        ...(modifiedTime && { modifiedTime }),
        authors: [siteConfig.siteName],
      }),
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
      title: fullTitle,
      description: normalizedDescription,
      ...(ogImages && { images: ogImages.map((image) => image.url) }),
      creator: siteConfig.siteName,
    },
  };
}
