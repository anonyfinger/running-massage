import Link from "next/link";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { regionsPageContent } from "@/lib/regions-page-content";
import { RegionsGuideStructuredData } from "@/components/RegionStructuredData";

export const metadata = createSocialMetadata({
  title: "출장마사지 지역별 심층 가이드 | 예약·코스·FAQ",
  description:
    "출장마사지·출장안마·출장스웨디시 지역별 이용 패턴, 서비스 비교, 예약 요령, FAQ, 코스 추천 등 심층 안내. 서울·강남·강서·인천·수원·부천.",
  path: "/regions/guide",
  keywords: [
    "출장마사지 예약",
    "출장안마 안내",
    "출장스웨디시 코스",
    "지역별 출장마사지",
    "서울 출장마사지",
    "강남 출장마사지",
  ],
});

export default function RegionsGuidePage() {
  return (
    <>
      <RegionsGuideStructuredData />
      <article className="page-article regions-guide-page">
      <div className="content-block">
        <nav className="breadcrumb-nav" aria-label="breadcrumb">
          <Link href="/">홈</Link>
          <span className="breadcrumb-nav__sep">/</span>
          <Link href="/regions">지역별 안내</Link>
          <span className="breadcrumb-nav__sep">/</span>
          <span aria-current="page">심층 가이드</span>
        </nav>

        <h1 className="page-article__title">출장마사지·출장안마·출장스웨디시 심층 가이드</h1>
        <p className="page-article__lead">
          서비스 비교, 예약 요령, 지역별 이용 패턴, FAQ, 코스 추천 등을 한곳에 정리했습니다. 시·구 단위 안내는
          지역 허브 페이지, 동선·상황 위주 글은 블로그, 이 페이지는 권역·서비스 흐름을 묶은 심층 요약으로 역할을
          나눴습니다. 지역별 상세 페이지는{" "}
          <Link href="/regions" className="prose__subtitle-link">
            지역별 안내
          </Link>
          에서 선택하실 수 있습니다.
        </p>

        <div className="prose section section--white" style={{ marginTop: "1.5rem" }}>
          <div className="content-block">
            <h2 className="section-title">서울·강남 출장마사지</h2>
            {regionsPageContent.seoul.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>
              강남 출장마사지
            </h2>
            {regionsPageContent.gangnam.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>
              강서구·인천 출장마사지
            </h2>
            {regionsPageContent.gangseo.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {regionsPageContent.incheon.map((p, i) => (
              <p key={`incheon-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>
              수원·부천 출장마사지
            </h2>
            {regionsPageContent.suwon.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {regionsPageContent.bucheon.map((p, i) => (
              <p key={`bucheon-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>
              이용 안내
            </h2>
            {regionsPageContent.common.map((p, i) => (
              <p key={`common-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>
              지역별 이용 패턴
            </h2>
            {regionsPageContent.usagePatterns.map((p, i) => (
              <p key={`usage-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>
              출장마사지·출장안마·출장스웨디시 안내
            </h2>
            {regionsPageContent.serviceOverview.map((p, i) => (
              <p key={`overview-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>
              준비 사항
            </h2>
            {regionsPageContent.preparation.map((p, i) => (
              <p key={`prep-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>
              자주 묻는 질문
            </h2>
            {regionsPageContent.faq.map((p, i) => (
              <p key={`faq-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>
              서비스 상세 안내
            </h2>
            {regionsPageContent.serviceDetail.map((p, i) => (
              <p key={`detail-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>
              지역별 이용 후기
            </h2>
            {regionsPageContent.reviews.map((p, i) => (
              <p key={`review-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>
              지역별 코스 추천
            </h2>
            {regionsPageContent.courseRecommend.map((p, i) => (
              <p key={`course-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>
              코스 요약
            </h2>
            {regionsPageContent.courseSummary.map((p, i) => (
              <p key={`summary-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>
              방문 가능 구역
            </h2>
            {regionsPageContent.areaDetail.map((p, i) => (
              <p key={`area-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>
              이용 시나리오
            </h2>
            {regionsPageContent.scenarios.map((p, i) => (
              <p key={`scenario-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>
              지역별 이용 요약
            </h2>
            {regionsPageContent.summary.map((p, i) => (
              <p key={`summary2-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>
              예약 요령
            </h2>
            {regionsPageContent.bookingTips.map((p, i) => (
              <p key={`book-${i}`}>{p}</p>
            ))}
            <h2 className="section-title" style={{ marginTop: "1.5rem" }}>
              이용 시 주의사항
            </h2>
            {regionsPageContent.regionTips.map((p, i) => (
              <p key={`tip-${i}`}>{p}</p>
            ))}
          </div>
        </div>

        <p style={{ marginTop: "2rem" }}>
          <Link href="/regions" className="page-article__back">
            ← 지역별 안내 목록으로
          </Link>
        </p>
      </div>
    </article>
    </>
  );
}
