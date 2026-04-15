import { siteConfig } from "@/lib/site-config";
import { toJsonLd } from "@/lib/structured-data";
import { getOrganizationJsonLd } from "@/lib/jsonld-organization";
import type { RegionMeta, ArticleMeta } from "@/lib/region-posts";

/** 게시글 상세 페이지용 구조화데이터 — Article, Service, WebPage, BreadcrumbList, Organization */
export function ArticleStructuredData({
  region,
  article,
  sections,
}: {
  region: RegionMeta;
  article: ArticleMeta;
  sections: { title: string; paragraphs: string[] }[];
}) {
  const { siteUrl, siteName, ogImagePath } = siteConfig;
  const dateModified = siteConfig.contentLastModified;
  const regionName = region.name;
  const articleUrl = `${siteUrl}/regions/${region.slug}/${article.slug}`;
  const representativeUrl = `${siteUrl}/yeongdeungpo-chuljangmassage`;
  const isRepresentativeArticle = articleUrl === representativeUrl;

  const organization = getOrganizationJsonLd();

  const articleBody = sections
    .map((s) => `## ${s.title}\n\n${s.paragraphs.join("\n\n")}`)
    .join("\n\n");

  const schemaArticle = {
    "@type": "Article" as const,
    "@id": `${articleUrl}#article`,
    headline: article.title,
    description: article.description,
    articleBody: articleBody.length > 5000 ? articleBody.slice(0, 5000) + "…" : articleBody,
    inLanguage: "ko-KR" as const,
    datePublished: "2025-01-01",
    dateModified,
    isPartOf: { "@id": `${siteUrl}/#website` },
    author: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: { "@id": `${articleUrl}#webpage` },
  };

  const service = {
    "@type": "Service" as const,
    "@id": `${articleUrl}#service`,
    name: article.title,
    description: article.description,
    serviceType: article.title,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: {
      "@type": "Place" as const,
      name: regionName,
      address: { "@type": "PostalAddress" as const, addressLocality: regionName, addressCountry: "KR" },
    },
  };

  const webPage = {
    "@type": "WebPage" as const,
    "@id": `${articleUrl}#webpage`,
    url: articleUrl,
    name: article.title,
    description: article.description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    inLanguage: "ko-KR" as const,
    datePublished: "2025-01-01",
    dateModified,
    primaryImageOfPage: ogImagePath ? `${siteUrl}${ogImagePath}` : `${siteUrl}/favicon.png`,
    mainEntity: { "@id": `${articleUrl}#article` },
    about: { "@id": `${articleUrl}#service` },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList" as const,
    "@id": `${articleUrl}#breadcrumb`,
    itemListElement: isRepresentativeArticle
      ? [
          { "@type": "ListItem" as const, position: 1, name: siteName, item: siteUrl },
          { "@type": "ListItem" as const, position: 2, name: article.title, item: articleUrl },
        ]
      : [
          { "@type": "ListItem" as const, position: 1, name: siteName, item: siteUrl },
          { "@type": "ListItem" as const, position: 2, name: "영등포 출장마사지", item: representativeUrl },
          { "@type": "ListItem" as const, position: 3, name: article.title, item: articleUrl },
        ],
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [organization, schemaArticle, service, webPage, breadcrumb],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }} />
  );
}
