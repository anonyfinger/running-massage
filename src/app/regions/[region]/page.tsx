import Link from "next/link";
import { notFound } from "next/navigation";
import { getRegion, getAllRegionPaths } from "@/lib/region-posts";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { CtaButtonsFromConfig } from "@/components/CtaButtons";
import { RegionDetailStructuredData } from "@/components/RegionStructuredData";

type Props = { params: Promise<{ region: string }> };

export async function generateStaticParams() {
  return getAllRegionPaths();
}

export async function generateMetadata({ params }: Props) {
  const { region } = await params;
  const data = getRegion(region);
  if (!data)
    return {
      title: "지역을 찾을 수 없습니다",
      robots: { index: false, follow: false },
    };
  return createSocialMetadata({
    title: `${data.name} 출장마사지 출장안마 출장스웨디시 | 지역 안내`,
    description: data.description,
    path: `/regions/${region}`,
    keywords: [`${data.name} 출장마사지`, `${data.name} 출장안마`, `${data.name} 출장스웨디시`],
  });
}

export default async function RegionPage({ params }: Props) {
  const { region } = await params;
  const data = getRegion(region);
  if (!data) notFound();

  return (
    <>
      <RegionDetailStructuredData region={data} />
      <article className="page-article region-detail-page">
      <div className="content-block">
        <nav className="breadcrumb-nav" aria-label="breadcrumb">
          <Link href="/">홈</Link>
          <span className="breadcrumb-nav__sep">/</span>
          <Link href="/regions">지역별 안내</Link>
          <span className="breadcrumb-nav__sep">/</span>
          <span aria-current="page">{data.name}</span>
        </nav>

        <h1 className="page-article__title">{data.name} 출장마사지 출장안마 출장스웨디시 | 지역 안내</h1>
        <p className="page-article__lead">{data.description}</p>

        <ul className="post-list" role="list">
          {data.articles.map((article) => (
            <li key={article.slug} className="post-list__item">
              <Link
                href={`/regions/${region}/${article.slug}`}
                className="post-list__card"
              >
                <h2 className="post-list__title">{article.title}</h2>
                <p className="post-list__desc">{article.description}</p>
                <span className="post-list__link">자세히 보기 →</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="region-detail__cta">
          <CtaButtonsFromConfig />
        </div>
      </div>
    </article>
    </>
  );
}
