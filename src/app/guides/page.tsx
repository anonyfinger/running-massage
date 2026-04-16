import Link from "next/link";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { guidePages } from "@/lib/guide-pages";
import { getRegionLandingPath } from "@/lib/region-landings";

export const metadata = createSocialMetadata({
  title: "영등포 출장마사지 가이드 모음 | 대표페이지 보조 문서 허브",
  description:
    "영등포 출장마사지 대표 페이지를 보완하는 보조 문서 허브입니다. 예약 전 체크리스트, 여의도 야간 가이드, 생활권 방문 안내, 호텔·오피스텔 체크포인트를 한곳에 모았습니다.",
  path: "/guides",
  keywords: [
    "영등포 출장마사지 가이드 모음",
    "영등포 출장마사지 보조 문서",
    "영등포 출장마사지 예약 체크리스트",
    "여의도 영등포 출장마사지 야간 가이드",
    "영등포 호텔 오피스텔 체크포인트",
  ],
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
        <h1 className="page-article__title">영등포 출장마사지 가이드 모음</h1>
        <p className="page-article__lead">
          이 페이지는 영등포 출장마사지 대표 페이지를 보완하는 보조 문서 허브입니다.
          예약 전 체크리스트, 여의도 야간 이용 흐름, 생활권 방문 안내, 호텔·오피스텔 체크포인트를 한곳에서 확인할 수 있도록 정리했습니다.
        </p>
        <p className="page-article__lead" style={{ marginTop: "0.75rem" }}>
          전체 흐름은 <Link href={getRegionLandingPath("yeongdeungpo")} className="prose__subtitle-link">영등포 출장마사지 대표 페이지</Link>에서 먼저 보고,
          세부 상황이 필요할 때 아래 가이드를 순서대로 확인하는 구조가 가장 자연스럽습니다.
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
        <p className="page-article__lead" style={{ marginTop: "1.25rem" }}>
          바로 진행이 필요하면 <Link href="/reserve" className="prose__subtitle-link">예약문의 페이지</Link>에서 위치·장소·시간대를 먼저 전달해 주세요.
        </p>
      </div>
    </article>
  );
}
