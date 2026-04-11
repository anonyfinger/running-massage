import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getBlogPost,
  getAllBlogSlugs,
  getBlogPostsSortedByDate,
} from "@/lib/blog-posts";
import { getBlogClusterDefinition, getBlogPostsInSameCluster } from "@/lib/blog-clusters";
import { blogDateToIsoKst, createSocialMetadata } from "@/lib/seo-metadata";
import { BlogStructuredData } from "@/components/BlogStructuredData";
import { BlogParagraph } from "@/components/BlogParagraph";
import { CtaButtonsFromConfig } from "@/components/CtaButtons";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBlogSlugs();
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post)
    return {
      title: "게시글을 찾을 수 없습니다",
      robots: { index: false, follow: false },
    };
  return {
    ...createSocialMetadata({
      title: post.title,
      description: post.description,
      path: `/blog/${post.slug}`,
      keywords: post.tags,
      publishedTime: blogDateToIsoKst(post.datePublished),
      modifiedTime: blogDateToIsoKst(post.dateModified),
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
}

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-");
  return `${y}년 ${m}월 ${d}일`;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const cluster = getBlogClusterDefinition(post);

  const allPosts = getBlogPostsSortedByDate();
  const otherPosts = getBlogPostsInSameCluster(allPosts, post, 3);
  const fallbackPosts = otherPosts.length > 0
    ? otherPosts
    : allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <BlogStructuredData post={post} />
      <article className="page-article blog-post-page">
        <div className="content-block">
          <nav className="breadcrumb-nav" aria-label="breadcrumb">
            <Link href="/">홈</Link>
            <span className="breadcrumb-nav__sep">/</span>
            <Link href="/blog">블로그</Link>
            <span className="breadcrumb-nav__sep">/</span>
            <span aria-current="page">{post.category}</span>
          </nav>

          <header className="blog-post__header">
            <div className="blog-post__meta">
              <span className="blog-card__category">{post.category}</span>
              <span className="blog-card__category">{cluster.label}</span>
              <time className="blog-card__date" dateTime={post.datePublished}>
                {formatDate(post.datePublished)}
              </time>
              {post.dateModified !== post.datePublished && (
                <span className="blog-post__modified">
                  최종 수정: <time dateTime={post.dateModified}>{formatDate(post.dateModified)}</time>
                </span>
              )}
            </div>
            <h1 className="page-article__title">{post.title}</h1>
            <p className="page-article__lead">{post.description}</p>
            <p className="page-article__sub">{cluster.description}</p>
            <div className="blog-card__tags">
              {post.tags.map((tag) => (
                <span key={tag} className="blog-card__tag">
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          <div className="article-detail__body">
            {post.sections.map((section, i) => (
              <section
                key={i}
                className="page-article__section"
                aria-labelledby={`section-${i}`}
              >
                <h2 id={`section-${i}`} className="page-article__section-title">
                  {section.title}
                </h2>
                <div className="page-article__prose">
                  {section.paragraphs.map((p, j) => (
                    <BlogParagraph key={j}>{p}</BlogParagraph>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {post.showHubLinks && (
            <section
              className="page-article__section blog-post__hub-links"
              aria-labelledby="blog-hub-links-heading"
            >
              <h2 id="blog-hub-links-heading" className="page-article__section-title">
                이 사이트에서 더 보기
              </h2>
              <div className="page-article__prose">
                <p>
                  <Link href="/massage" className="prose__subtitle-link">
                    출장마사지
                  </Link>
                  안내와{" "}
                  <Link href="/regions/yeongdeungpo/massage" className="prose__subtitle-link">
                    영등포 출장마사지
                  </Link>
                  안내를 중심으로 읽으시면 됩니다. 예약 요령·FAQ는{" "}
                  <Link href="/regions/common/reservation-guide" className="prose__subtitle-link">
                    예약 가이드
                  </Link>
                  에서 정리해 두었습니다.
                </p>
              </div>
            </section>
          )}

          <div className="article-detail__cta">
            <CtaButtonsFromConfig />
          </div>

          {fallbackPosts.length > 0 && (
            <nav className="blog-post__related" aria-label="다른 블로그 글">
              <h2 className="blog-post__related-title">{cluster.label} 글 더 보기</h2>
              <ul className="blog-post__related-list" role="list">
                {fallbackPosts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="blog-post__related-link">
                      <span className="blog-card__category">{p.category}</span>
                      <span className="blog-post__related-name">{p.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <nav className="article-detail__back" aria-label="목록으로">
            <Link href="/blog" className="page-article__back">
              ← 블로그 목록으로
            </Link>
          </nav>
        </div>
      </article>
    </>
  );
}
