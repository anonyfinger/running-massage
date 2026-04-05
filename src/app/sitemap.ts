import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { blogPosts } from "@/lib/blog-posts";
import {
  SITEMAP_BLOG_SLUGS_INFO,
  SITEMAP_BLOG_SLUGS_REGIONAL_SAMPLE,
  SITEMAP_REGION_HUB_SLUGS,
  SITEMAP_REGION_SERVICE_PATHS,
} from "@/lib/sitemap-policy";

/** 빌드 시 정적 생성 */
export const dynamic = "force-static";

const postLastMod = (d: string) => new Date(`${d}T12:00:00+09:00`);

function findBlogLastMod(slug: string): Date {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return new Date(`${siteConfig.contentLastModified}T12:00:00+09:00`);
  }
  return postLastMod(post.dateModified);
}

/**
 * sitemap.xml — 코어·대표 지역·정보형 블로그 위주 (약 29 URL)
 * 제외: /privacy, /terms, /about, /regions/common/*, 비대표 지역 허브, 지역×anma|swedish, 대량 지역 블로그
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const siteContentLastMod = new Date(`${siteConfig.contentLastModified}T12:00:00+09:00`);

  const blogIndexLastMod =
    blogPosts.length > 0
      ? new Date(
          Math.max(...blogPosts.map((p) => postLastMod(p.dateModified).getTime())),
        )
      : siteContentLastMod;

  const core: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/massage`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/anma`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/swedish`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/regions`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/regions/guide`,
      lastModified: siteContentLastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/blog`,
      lastModified: blogIndexLastMod,
      changeFrequency: "weekly",
      priority: 0.65,
    },
  ];

  const hubs: MetadataRoute.Sitemap = SITEMAP_REGION_HUB_SLUGS.map((region) => ({
    url: `${base}/regions/${region}`,
    lastModified: siteContentLastMod,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const regionServices: MetadataRoute.Sitemap = SITEMAP_REGION_SERVICE_PATHS.map(
    ({ region, slug }) => ({
      url: `${base}/regions/${region}/${slug}`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    }),
  );

  const blogInfo: MetadataRoute.Sitemap = SITEMAP_BLOG_SLUGS_INFO.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: findBlogLastMod(slug),
    changeFrequency: "monthly" as const,
    priority: 0.58,
  }));

  const blogRegional: MetadataRoute.Sitemap =
    SITEMAP_BLOG_SLUGS_REGIONAL_SAMPLE.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: findBlogLastMod(slug),
      changeFrequency: "monthly" as const,
      priority: 0.55,
    }));

  return [...core, ...hubs, ...regionServices, ...blogInfo, ...blogRegional];
}
