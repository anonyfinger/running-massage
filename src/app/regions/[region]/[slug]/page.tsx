import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getRegion,
  getArticle,
  getArticleContent,
  getAllArticlePaths,
} from "@/lib/region-posts";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { CtaButtonsFromConfig } from "@/components/CtaButtons";
import { ArticleStructuredData } from "@/components/ArticleStructuredData";

type Props = { params: Promise<{ region: string; slug: string }> };

export async function generateStaticParams() {
  return getAllArticlePaths();
}

export async function generateMetadata({ params }: Props) {
  const { region, slug } = await params;
  const regionData = getRegion(region);
  const article = getArticle(region, slug);
  if (!regionData || !article)
    return { title: "게시글을 찾을 수 없습니다" };
  return createSocialMetadata({
    title: `${article.title} | ${regionData.name}`,
    description: article.description,
    path: `/regions/${region}/${slug}`,
    keywords: [article.title, `${regionData.name} 출장마사지`, `${regionData.name} 출장안마`, `${regionData.name} 출장스웨디시`],
  });
}

export default async function ArticlePage({ params }: Props) {
  const { region, slug } = await params;
  const regionData = getRegion(region);
  const article = getArticle(region, slug);
  if (!regionData || !article) notFound();

  const sections = getArticleContent(region, slug);

  return (
    <>
      <ArticleStructuredData region={regionData} article={article} sections={sections} />
      <article className="page-article article-detail-page">
      <div className="content-block">
        <nav className="breadcrumb-nav" aria-label="breadcrumb">
          <Link href="/">홈</Link>
          <span className="breadcrumb-nav__sep">/</span>
          <Link href="/regions">지역별 안내</Link>
          <span className="breadcrumb-nav__sep">/</span>
          <Link href={`/regions/${region}`}>{regionData.name}</Link>
          <span className="breadcrumb-nav__sep">/</span>
          <span aria-current="page">{article.title}</span>
        </nav>

        <h1 className="page-article__title">{article.title}</h1>
        <p className="page-article__lead">{article.description}</p>

        <div className="article-detail__body">
          {sections.map((section, i) => (
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
                  <p key={j}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="article-detail__cta">
          <CtaButtonsFromConfig />
        </div>

        <nav className="article-detail__back" aria-label="이전 페이지">
          <Link href={`/regions/${region}`} className="page-article__back">
            ← {regionData.name} 목록으로
          </Link>
        </nav>
      </div>
    </article>
    </>
  );
}
