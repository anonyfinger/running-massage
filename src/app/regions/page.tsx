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

        <div className="prose section section--white" style={{ marginTop: "2rem" }}>
          <div className="content-block">
            <h2 className="section-title">서울·강남 출장마사지</h2>
            {regionsPageContent.seoul.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>강서구·인천 출장마사지</h2>
            {regionsPageContent.gangseo.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {regionsPageContent.incheon.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>수원·부천 출장마사지</h2>
            {regionsPageContent.suwon.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {regionsPageContent.bucheon.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>강남 출장마사지</h2>
            {regionsPageContent.gangnam.map((p, i) => (
              <p key={`gangnam-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>이용 안내</h2>
            {regionsPageContent.common.map((p, i) => (
              <p key={`common-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>지역별 이용 패턴</h2>
            {regionsPageContent.usagePatterns.map((p, i) => (
              <p key={`usage-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>출장마사지·출장안마·출장스웨디시 안내</h2>
            {regionsPageContent.serviceOverview.map((p, i) => (
              <p key={`overview-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>준비 사항</h2>
            {regionsPageContent.preparation.map((p, i) => (
              <p key={`prep-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>예약 요령</h2>
            {regionsPageContent.bookingTips.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>서비스 상세 안내</h2>
            {regionsPageContent.serviceDetail.map((p, i) => (
              <p key={`detail-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>자주 묻는 질문</h2>
            {regionsPageContent.faq.map((p, i) => (
              <p key={`faq-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>지역별 코스 추천</h2>
            {regionsPageContent.courseRecommend.map((p, i) => (
              <p key={`course-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>지역별 이용 후기</h2>
            {regionsPageContent.reviews.map((p, i) => (
              <p key={`review-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>코스 요약</h2>
            {regionsPageContent.courseSummary.map((p, i) => (
              <p key={`summary-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>방문 가능 구역</h2>
            {regionsPageContent.areaDetail.map((p, i) => (
              <p key={`area-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>이용 시나리오</h2>
            {regionsPageContent.scenarios.map((p, i) => (
              <p key={`scenario-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>지역별 이용 요약</h2>
            {regionsPageContent.summary.map((p, i) => (
              <p key={`summary2-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>이용 시 주의사항</h2>
            {regionsPageContent.regionTips.map((p, i) => (
              <p key={`tip-${i}`}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
    </>
  );
}
