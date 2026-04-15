import Link from "next/link";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { guidePages } from "@/lib/guide-pages";

export const metadata = createSocialMetadata({
  title: "영등포 출장마사지 보조 가이드 모음",
  description:
    "영등포 출장마사지 대표 페이지를 보완하는 체크리스트, 야간 케어, 생활권 안내, 숙소 이용 가이드 문서를 모았습니다.",
  path: "/guides",
  keywords: ["영등포 출장마사지 가이드", "영등포 예약 체크리스트", "여의도 야간 케어"],
});

export default function GuidesIndexPage() {
  return (
    <article className="page-article">
      <div className="content-block">
        <nav className="breadcrumb-nav" aria-label="breadcrumb">
          <Link href="/">홈</Link>
          <span className="breadcrumb-nav__sep">/</span>
          <span aria-current="page">가이드 모음</span>
        </nav>
        <h1 className="page-article__title">영등포 출장마사지 보조 가이드</h1>
        <p className="page-article__lead">
          대표 페이지에서 다루는 핵심 흐름을 더 구체적으로 확인할 수 있는 보조 문서를 정리했습니다.
        </p>
        <ul className="page-article__list">
          {guidePages.map((guide) => (
            <li key={guide.slug}>
              <Link href={`/guides/${guide.slug}`} className="prose__subtitle-link">
                {guide.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
