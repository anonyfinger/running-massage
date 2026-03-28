import { siteConfig } from "@/lib/site-config";
import { toJsonLd } from "@/lib/structured-data";
import { getOrganizationJsonLd } from "@/lib/jsonld-organization";
import type { BlogPost } from "@/lib/blog-posts";

export function BlogStructuredData({ post }: { post: BlogPost }) {
  const { siteUrl, siteName, ogImagePath } = siteConfig;
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const imageUrl = ogImagePath ? `${siteUrl}${ogImagePath}` : `${siteUrl}/favicon.png`;

  const organization = getOrganizationJsonLd();

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
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: { "@id": `${postUrl}#webpage` },
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
    datePublished: post.datePublished,
    dateModified: post.dateModified,
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
