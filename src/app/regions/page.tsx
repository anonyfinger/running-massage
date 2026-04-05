import Link from "next/link";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { regions } from "@/lib/region-posts";
import { regionsPageContent } from "@/lib/regions-page-content";
import {
  regionsHubIntro,
  regionsFeaturedMassageSlugs,
  regionsFeaturedMassageLabels,
  regionsSecondaryMassageLinks,
} from "@/lib/regions-hub-content";
import { RegionsListStructuredData } from "@/components/RegionStructuredData";

export const metadata = createSocialMetadata({
  title: "출장마사지 출장안마 출장스웨디시 | 지역별 안내",
  description:
    "출장마사지·출장안마·출장스웨디시 지역별 정보. 서울·강서·인천·수원 대표 출장마사지 상세와 강남·강동·부천 등 지역 허브에서 예약·코스·FAQ를 확인하세요.",
  path: "/regions",
  keywords: ["출장마사지", "출장안마", "출장스웨디시", "지역별 출장마사지", "서울 출장마사지", "강남 출장마사지", "인천 출장마사지"],
});

export default function RegionsPage() {
  return (
    <>
      <RegionsListStructuredData />
      <article className="page-article regions-page">
        <div className="content-block">
          <h1 className="page-article__title">출장마사지 출장안마 출장스웨디시 | 지역별 안내</h1>
          <p className="page-article__lead">
            출장마사지·출장안마·출장스웨디시 지역별 이용 정보. 대표 지역은 출장마사지 상세로, 그 외 지역은 허브에서 테마별 게시글을 확인하세요.
          </p>

          <h2 className="section-title" style={{ marginTop: "1.5rem" }}>
            {regionsHubIntro.h2}
          </h2>
          <div className="prose" style={{ marginBottom: "2rem" }}>
            <p>{regionsHubIntro.paragraph}</p>
          </div>

          <h3 className="prose__subtitle" style={{ marginTop: 0 }}>
            대표 지역 바로가기
          </h3>
          <ul className="region-list regions-hub__featured" role="list">
            {regionsFeaturedMassageSlugs.map((slug) => {
              const region = regions.find((r) => r.slug === slug);
              const labels = regionsFeaturedMassageLabels[slug];
              if (!region) return null;
              return (
                <li key={slug} className="region-list__item">
                  <Link href={`/regions/${slug}/massage`} className="region-list__card">
                    <h4 className="region-list__title">{labels.title}</h4>
                    <p className="region-list__desc">{region.description}</p>
                    <span className="region-list__count">{labels.cta}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <h3 className="prose__subtitle" style={{ marginTop: "2rem" }}>
            추가 지역 안내
          </h3>
          <ul className="regions-hub__secondary" role="list">
            {regionsSecondaryMassageLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="prose__subtitle-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="prose" style={{ marginTop: "2rem" }}>
            {regionsPageContent.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <h2 className="section-title" style={{ marginTop: "2rem" }}>
            지역별 출장 안내
          </h2>
          <p className="page-article__sub" style={{ marginBottom: "1.5rem" }}>
            각 지역을 선택하면 출장마사지·출장안마·출장스웨디시 테마별 상세 게시글을 볼 수 있습니다.
          </p>

          <ul className="region-list" role="list">
            {regions.map((region) => (
              <li key={region.slug} className="region-list__item">
                <Link href={`/regions/${region.slug}`} className="region-list__card">
                  <h4 className="region-list__title">{region.name}</h4>
                  <p className="region-list__desc">{region.description}</p>
                  <span className="region-list__count">게시글 {region.articles.length}개</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="prose" style={{ marginTop: "2rem" }}>
            <h2 className="section-title">심층 가이드</h2>
            <p>
              서비스 비교, 예약 요령, 지역별 이용 패턴, FAQ, 코스 추천 등은{" "}
              <Link href="/regions/guide" className="prose__subtitle-link">
                출장마사지 심층 가이드
              </Link>
              페이지에서 확인하실 수 있습니다.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
