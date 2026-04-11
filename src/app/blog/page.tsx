import Link from "next/link";
import { getBlogPostsSortedByDate } from "@/lib/blog-posts";
import { BLOG_CLUSTER_DEFINITIONS, getBlogClusterDefinition } from "@/lib/blog-clusters";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { siteConfig } from "@/lib/site-config";
import { toJsonLd } from "@/lib/structured-data";
import { getOrganizationJsonLd } from "@/lib/jsonld-organization";

export const metadata = {
  ...createSocialMetadata({
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
  }),
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

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
  const posts = getBlogPostsSortedByDate();

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
              비교형, 예약형, 장소형, 생활 리듬형, 지역 생활권형, 초보자형 클러스터로 실용적인 글을 정리합니다.
            </p>
          </header>

          <div className="prose" style={{ marginBottom: "2rem" }}>
            <p>
              이 블로그는 글을 무작정 늘리기보다 검색 의도별 클러스터로 운영합니다. 서비스 비교가 필요하면 비교형,
              예약 전 확인이 필요하면 예약형, 집·호텔·오피스처럼 장소가 중요하면 장소형 글부터 읽는 편이 좋습니다.
            </p>
            <ul className="related-links" role="list" aria-label="블로그 클러스터">
              {Object.values(BLOG_CLUSTER_DEFINITIONS).map((cluster) => (
                <li key={cluster.id}>
                  <span className="related-links__item">
                    {cluster.label} - {cluster.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <ul className="blog-list__grid" role="list">
            {posts.map((post) => (
              <li key={post.slug} className="blog-list__item">
                <Link href={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card__meta">
                    <span className="blog-card__category">{post.category}</span>
                    <span className="blog-card__category">{getBlogClusterDefinition(post).label}</span>
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
