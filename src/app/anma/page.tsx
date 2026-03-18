import Link from "next/link";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { longFormContent } from "@/lib/long-form-content";
import { CtaButtonsFromConfig } from "@/components/CtaButtons";
import { KeywordPageStructuredData } from "@/components/KeywordPageStructuredData";

export const metadata = createSocialMetadata({
  title: "출장안마 | 경락 기반 방문 안마",
  description:
    "출장안마는 전통 안마와 현대 마사지를 결합해 고객 지정 장소로 방문합니다. 목·어깨·등·다리 피로 해소, 오일 없이 진행 가능. 24시간 예약, 서울·경기·인천 출장.",
  path: "/anma",
  keywords: ["출장안마", "출장 안마", "방문 안마", "경락 안마", "출장 전통안마"],
});

export default function AnmaPage() {
  return (
    <>
      <KeywordPageStructuredData
        keyword="출장안마"
        description="출장안마는 전통 안마 기법과 현대 마사지를 결합해 고객 지정 장소로 방문하는 서비스입니다. 경락과 근육을 함께 다루며, 목·어깨·등 긴장 완화, 다리 피로·부기 해소에 강점이 있습니다. 60~90분 코스, 오일 없이 진행 가능."
        path="/anma"
      />
      <article className="page-article article-detail-page">
        <div className="content-block">
          <nav className="breadcrumb-nav" aria-label="breadcrumb">
            <Link href="/">홈</Link>
            <span className="breadcrumb-nav__sep">/</span>
            <span aria-current="page">출장안마</span>
          </nav>

          <h1 className="page-article__title">출장안마</h1>
          <p className="page-article__lead">
            전통 안마와 현대 마사지를 결합해 고객 지정 장소로 방문합니다. 목·어깨·등·다리 피로 해소에 강점이 있습니다.
          </p>

          <div className="article-detail__body">
            <div className="page-article__prose">
              {longFormContent.serviceAnma.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="article-detail__cta">
            <CtaButtonsFromConfig />
          </div>

          <nav className="article-detail__back" aria-label="이전 페이지">
            <Link href="/" className="page-article__back">
              ← 출장마사지·출장안마·출장스웨디시 홈으로
            </Link>
          </nav>
        </div>
      </article>
    </>
  );
}
