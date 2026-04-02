import { siteConfig } from "@/lib/site-config";
import { blogDateToIsoKst } from "@/lib/seo-metadata";
import { toJsonLd } from "@/lib/structured-data";
import { getOrganizationJsonLd } from "@/lib/jsonld-organization";
import type { BlogPost } from "@/lib/blog-posts";

export function BlogStructuredData({ post }: { post: BlogPost }) {
  const { siteUrl, siteName, ogImagePath, profile } = siteConfig;
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const imageUrl = ogImagePath ? `${siteUrl}${ogImagePath}` : `${siteUrl}/favicon.png`;

  const organization = getOrganizationJsonLd();
  const publishedIso = blogDateToIsoKst(post.datePublished);
  const modifiedIso = blogDateToIsoKst(post.dateModified);

  /** 리치 결과 검사기가 @id만 있는 author/publisher를 “누락”으로 표시하는 경우 방지 — 인라인 Person·Organization */
  const authorPerson = {
    "@type": "Person" as const,
    name: profile.name,
    worksFor: { "@id": `${siteUrl}/#organization` },
  };
  const publisherOrg = {
    "@type": "Organization" as const,
    name: siteName,
    logo: {
      "@type": "ImageObject" as const,
      url: imageUrl,
      width: 1200,
      height: 630,
    },
  };

  const articleBody = post.sections
    .map((s) => `## ${s.title}\n\n${s.paragraphs.join("\n\n")}`)
    .join("\n\n");

  const schemaArticle = {
    "@type": "Article" as const,
    "@id": `${postUrl}#article`,
    headline: post.title,
    description: post.description,
    articleBody: articleBody.length > 5000 ? articleBody.slice(0, 5000) + "…" : articleBody,
    inLanguage: "ko-KR" as const,
    datePublished: publishedIso,
    dateModified: modifiedIso,
    author: authorPerson,
    publisher: publisherOrg,
    mainEntityOfPage: {
      "@type": "WebPage" as const,
      "@id": `${postUrl}#webpage`,
      url: postUrl,
    },
    image: {
      "@type": "ImageObject" as const,
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    about: post.tags.map((tag) => ({ "@type": "Thing" as const, name: tag })),
  };

  const webPage = {
    "@type": "WebPage" as const,
    "@id": `${postUrl}#webpage`,
    url: postUrl,
    name: post.title,
    description: post.description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    inLanguage: "ko-KR" as const,
    datePublished: publishedIso,
    dateModified: modifiedIso,
    primaryImageOfPage: imageUrl,
    mainEntity: { "@id": `${postUrl}#article` },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList" as const,
    "@id": `${postUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem" as const, position: 1, name: siteName, item: siteUrl },
      { "@type": "ListItem" as const, position: 2, name: "블로그", item: `${siteUrl}/blog` },
      { "@type": "ListItem" as const, position: 3, name: post.title, item: postUrl },
    ],
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [organization, schemaArticle, webPage, breadcrumb],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }} />
  );
}
