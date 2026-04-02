import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { siteConfig } from "@/lib/site-config";
import { toJsonLd } from "@/lib/structured-data";
import { getOrganizationJsonLd } from "@/lib/jsonld-organization";

export const metadata = createSocialMetadata({
  title: "출장마사지 블로그 | 이용 가이드·정보·비교",
  description:
    "출장마사지 이용 방법, 준비사항, 코스 비교, 지역별 안내 등 실용적인 정보를 정리한 블로그입니다. 처음 이용하시는 분도 쉽게 따라할 수 있는 가이드를 제공합니다.",
  path: "/blog",
  keywords: [
    "출장마사지블로그",
    "출장마사지정보",
    "출장마사지가이드",
    "출장안마",
    "출장스웨디시",
  ],
});

function BlogListStructuredData() {
  const { siteUrl, siteName } = siteConfig;
  const organization = getOrganizationJsonLd();

  const webPage = {
    "@type": "CollectionPage" as const,
    "@id": `${siteUrl}/blog#webpage`,
    url: `${siteUrl}/blog`,
    name: "출장마사지 블로그",
    description: "출장마사지 이용 가이드·정보·비교 블로그",
    isPartOf: { "@id": `${siteUrl}/#website` },
    inLanguage: "ko-KR" as const,
  };

  const breadcrumb = {
    "@type": "BreadcrumbList" as const,
    "@id": `${siteUrl}/blog#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem" as const, position: 1, name: siteName, item: siteUrl },
      { "@type": "ListItem" as const, position: 2, name: "블로그", item: `${siteUrl}/blog` },
    ],
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [organization, webPage, breadcrumb],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }} />
  );
}

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-");
  return `${y}년 ${m}월 ${d}일`;
}

export default function BlogListPage() {
  return (
    <>
      <BlogListStructuredData />
      <article className="page-article blog-list-page">
        <div className="content-block">
          <nav className="breadcrumb-nav" aria-label="breadcrumb">
            <Link href="/">홈</Link>
            <span className="breadcrumb-nav__sep">/</span>
            <span aria-current="page">블로그</span>
          </nav>

          <header className="blog-list__header">
            <h1 className="page-article__title">출장마사지 블로그</h1>
            <p className="page-article__lead">
              출장마사지 이용 가이드, 코스 비교, 준비사항 등 실용적인 정보를 정리합니다.
            </p>
          </header>

          <ul className="blog-list__grid" role="list">
            {blogPosts.map((post) => (
              <li key={post.slug} className="blog-list__item">
                <Link href={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card__meta">
                    <span className="blog-card__category">{post.category}</span>
                    <time className="blog-card__date" dateTime={post.datePublished}>
                      {formatDate(post.datePublished)}
                    </time>
                  </div>
                  <h2 className="blog-card__title">{post.title}</h2>
                  <p className="blog-card__desc">{post.description}</p>
                  <div className="blog-card__tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-card__tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="blog-card__cta">자세히 읽기 →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </>
  );
}
