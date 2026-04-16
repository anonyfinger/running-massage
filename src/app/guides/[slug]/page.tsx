import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { getGuidePage, guidePages } from "@/lib/guide-pages";
import { getRegionLandingPath } from "@/lib/region-landings";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guidePages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuidePage(slug);
  if (!guide) {
    return { title: "문서를 찾을 수 없습니다", robots: { index: false, follow: false } };
  }
  return createSocialMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    keywords: guide.keywords,
  });
}

export default async function GuideDetailPage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuidePage(slug);
  if (!guide) notFound();

  return (
    <article className="page-article">
      <div className="content-block">
        <nav className="breadcrumb-nav" aria-label="breadcrumb">
          <Link href="/">홈</Link>
          <span className="breadcrumb-nav__sep">/</span>
          <Link href="/guides">가이드 모음</Link>
          <span className="breadcrumb-nav__sep">/</span>
          <span aria-current="page">{guide.title}</span>
        </nav>
        <h1 className="page-article__title">{guide.title}</h1>
        <p className="page-article__lead">{guide.lead}</p>

        {guide.sections.map((section) => (
          <section key={section.title} className="page-article__section">
            <h2 className="page-article__section-title">{section.title}</h2>
            <div className="page-article__prose">
              {section.paragraphs.map((paragraph, idx) => (
                <p key={`${section.title}-${idx}`}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <section className="page-article__section">
          <h2 className="page-article__section-title">핵심 페이지 연결</h2>
          <ul className="page-article__list">
            <li><Link href={getRegionLandingPath("yeongdeungpo")} className="prose__subtitle-link">영등포 출장마사지 대표 페이지</Link></li>
            <li><Link href="/reserve" className="prose__subtitle-link">영등포 출장마사지 예약문의 페이지</Link></li>
            <li><Link href="/regions/common/reservation-guide" className="prose__subtitle-link">영등포 출장마사지 예약 가이드</Link></li>
          </ul>
          <p className="page-article__lead" style={{ marginTop: "1.25rem" }}>
            전체 흐름은 <Link href={getRegionLandingPath("yeongdeungpo")} className="prose__subtitle-link">영등포 출장마사지 대표 페이지</Link>에서 먼저 확인하고,
            바로 진행이 필요하면 <Link href="/reserve" className="prose__subtitle-link">예약문의 페이지</Link>에서 위치·장소·시간대를 전달해 주세요.
          </p>
        </section>
      </div>
    </article>
  );
}
