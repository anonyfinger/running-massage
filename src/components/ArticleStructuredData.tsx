import { siteConfig } from "@/lib/site-config";
import { toJsonLd } from "@/lib/structured-data";
import type { RegionMeta, ArticleMeta } from "@/lib/region-posts";

/** 게시글 상세 페이지용 구조화데이터 — 해당 지역·키워드에 맞는 Article, Service, BreadcrumbList */
export function ArticleStructuredData({
  region,
  article,
  sections,
}: {
  region: RegionMeta;
  article: ArticleMeta;
  sections: { title: string; paragraphs: string[] }[];
}) {
  const { siteUrl, siteName, nap, ogImagePath } = siteConfig;
  const regionName = region.name;
  const articleUrl = `${siteUrl}/regions/${region.slug}/${article.slug}`;

  const articleBody = sections
    .map((s) => `## ${s.title}\n\n${s.paragraphs.join("\n\n")}`)
    .join("\n\n");

  const schemaArticle = {
    "@type": "Article" as const,
    "@id": `${articleUrl}#article`,
    headline: article.title,
    description: article.description,
    articleBody,
    inLanguage: "ko-KR" as const,
    isPartOf: { "@id": `${siteUrl}/regions/${region.slug}#webpage` },
    author: { "@type": "Organization" as const, name: siteName },
    publisher: {
      "@type": "Organization" as const,
      name: siteName,
      logo: { "@type": "ImageObject" as const, url: ogImagePath ? `${siteUrl}${ogImagePath}` : `${siteUrl}/favicon.png` },
    },
    mainEntityOfPage: { "@id": `${articleUrl}#webpage` },
  };

  const service = {
    "@type": "Service" as const,
    "@id": `${articleUrl}#service`,
    name: article.title,
    description: article.description,
    serviceType: article.title,
    areaServed: {
      "@type": "Place" as const,
      name: regionName,
      address: { "@type": "PostalAddress" as const, addressLocality: regionName, addressCountry: "KR" },
    },
    provider: { "@type": "Organization" as const, name: siteName },
  };

  const webPage = {
    "@type": "WebPage" as const,
    "@id": `${articleUrl}#webpage`,
    url: articleUrl,
    name: article.title,
    description: article.description,
    isPartOf: { "@type": "WebSite", url: siteUrl },
    inLanguage: "ko-KR" as const,
    primaryImageOfPage: (ogImagePath ? `${siteUrl}${ogImagePath}` : `${siteUrl}/favicon.png`) as string,
    mainEntity: { "@id": `${articleUrl}#article` },
    about: { "@id": `${articleUrl}#service` },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList" as const,
    "@id": `${articleUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem" as const, position: 1, name: siteName, item: siteUrl },
      { "@type": "ListItem" as const, position: 2, name: "지역별 안내", item: `${siteUrl}/regions` },
      { "@type": "ListItem" as const, position: 3, name: `${regionName} 출장마사지`, item: `${siteUrl}/regions/${region.slug}` },
      { "@type": "ListItem" as const, position: 4, name: article.title, item: articleUrl },
    ],
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [schemaArticle, service, webPage, breadcrumb],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }} />
  );
}
