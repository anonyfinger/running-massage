import Link from "next/link";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { regions } from "@/lib/region-posts";
import { regionsPageContent } from "@/lib/regions-page-content";
import { RegionsListStructuredData } from "@/components/RegionStructuredData";

export const metadata = createSocialMetadata({
  title: "출장마사지 출장안마 출장스웨디시 | 지역별 안내",
  description: "출장마사지·출장안마·출장스웨디시 지역별 정보. 서울·강남·인천·수원·부천·강서구 등 지역별 이용 안내.",
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
          출장마사지·출장안마·출장스웨디시 지역별 이용 정보. 서울·강남·인천·수원·부천·강서구 등 방문 가능 지역을 확인하세요.
        </p>

        <div className="prose" style={{ marginBottom: "2rem" }}>
          {regionsPageContent.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <h2 className="section-title" style={{ marginTop: "2rem" }}>지역별 출장 안내</h2>
        <p className="page-article__sub" style={{ marginBottom: "1.5rem" }}>
          각 지역을 선택하면 출장마사지·출장안마·출장스웨디시 테마별 상세 게시글을 볼 수 있습니다.
        </p>

        <ul className="region-list" role="list">
          {regions.map((region) => (
            <li key={region.slug} className="region-list__item">
              <Link href={`/regions/${region.slug}`} className="region-list__card">
                <h2 className="region-list__title">{region.name}</h2>
                <p className="region-list__desc">{region.description}</p>
                <span className="region-list__count">
                  게시글 {region.articles.length}개
                </span>
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
