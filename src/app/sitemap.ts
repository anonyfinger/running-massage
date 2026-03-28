import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getSitemapRegionPaths, getSitemapArticlePaths } from "@/lib/sitemap-paths";
import { blogPosts } from "@/lib/blog-posts";

/** 빌드 시 정적 생성 — Vercel 서버리스 500 방지 */
export const dynamic = "force-static";

/**
 * sitemap.xml — 검색엔진 인덱싱용 URL 목록 (SEO 100점)
 * keyword-long-content 미로딩으로 Vercel 500 방지.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const lastModified = new Date();

  const regionUrls = getSitemapRegionPaths().map(({ region }) => ({
    url: `${base}/regions/${region}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const articleUrls = getSitemapArticlePaths().map(({ region, slug }) => ({
    url: `${base}/regions/${region}/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const keywordUrls = [
    { path: "/massage", priority: 0.95 },
    { path: "/anma", priority: 0.95 },
    { path: "/swedish", priority: 0.95 },
  ].map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority,
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...keywordUrls,
    {
      url: `${base}/blog`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...blogUrls,
    {
      url: `${base}/regions`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...regionUrls,
    ...articleUrls,
  ];
}
