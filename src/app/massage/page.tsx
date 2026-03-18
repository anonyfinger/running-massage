import Link from "next/link";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { longFormContent } from "@/lib/long-form-content";
import { CtaButtonsFromConfig } from "@/components/CtaButtons";
import { KeywordPageStructuredData } from "@/components/KeywordPageStructuredData";

export const metadata = createSocialMetadata({
  title: "출장마사지 | 집·호텔·오피스 방문 마사지",
  description:
    "출장마사지는 고객 지정 장소로 테라피스트가 방문해 전신·부분·두통·어깨 결림 맞춤형 마사지를 제공합니다. 24시간 예약 가능, 서울·경기·인천 전역 출장.",
  path: "/massage",
  keywords: ["출장마사지", "출장 마사지", "방문 마사지", "홈케어 마사지", "출장 전신마사지"],
});

export default function MassagePage() {
  return (
    <>
      <KeywordPageStructuredData
        keyword="출장마사지"
        description="출장마사지는 고객이 지정한 집·호텔·오피스로 테라피스트가 방문해 마사지를 제공하는 서비스입니다. 전신 마사지(90~120분), 부분 마사지(어깨·허리·다리, 60분), 두통·어깨 결림 집중 관리 등 맞춤형 코스로 진행됩니다."
        path="/massage"
      />
      <article className="page-article article-detail-page">
        <div className="content-block">
          <nav className="breadcrumb-nav" aria-label="breadcrumb">
            <Link href="/">홈</Link>
            <span className="breadcrumb-nav__sep">/</span>
            <span aria-current="page">출장마사지</span>
          </nav>

          <h1 className="page-article__title">출장마사지</h1>
          <p className="page-article__lead">
            고객 지정 장소로 방문해 전신·부분·두통·어깨 결림 맞춤형 마사지를 제공합니다. 집, 호텔, 오피스로 찾아갑니다.
          </p>

          <div className="article-detail__body">
            <div className="page-article__prose">
              {longFormContent.serviceMassage.map((paragraph, i) => (
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
