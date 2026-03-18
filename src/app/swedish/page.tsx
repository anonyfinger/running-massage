import Link from "next/link";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { longFormContent } from "@/lib/long-form-content";
import { CtaButtonsFromConfig } from "@/components/CtaButtons";
import { KeywordPageStructuredData } from "@/components/KeywordPageStructuredData";

export const metadata = createSocialMetadata({
  title: "출장스웨디시 | 오일 마사지 방문 서비스",
  description:
    "출장스웨디시는 고객 지정 장소로 방문해 오일 마사지를 제공합니다. 혈액순환·근육 이완·림프 촉진에 초점, 60~120분 전신·상하체 코스. 서울·경기·인천 출장.",
  path: "/swedish",
  keywords: ["출장스웨디시", "출장 스웨디시", "방문 스웨디시", "오일 마사지", "출장 오일마사지"],
});

export default function SwedishPage() {
  return (
    <>
      <KeywordPageStructuredData
        keyword="출장스웨디시"
        description="출장스웨디시는 고객 지정 장소로 방문해 오일 마사지를 제공하는 출장 형태 서비스입니다. 혈액순환 개선·근육 이완·림프 흐름 촉진에 초점을 두며, 60~120분 전신 또는 상·하체 구분 코스로 진행됩니다."
        path="/swedish"
      />
      <article className="page-article article-detail-page">
        <div className="content-block">
          <nav className="breadcrumb-nav" aria-label="breadcrumb">
            <Link href="/">홈</Link>
            <span className="breadcrumb-nav__sep">/</span>
            <span aria-current="page">출장스웨디시</span>
          </nav>

          <h1 className="page-article__title">출장스웨디시</h1>
          <p className="page-article__lead">
            고객 지정 장소로 방문해 오일 마사지를 제공합니다. 혈액순환·근육 이완·림프 촉진에 초점을 둡니다.
          </p>

          <div className="article-detail__body">
            <div className="page-article__prose">
              {longFormContent.serviceSwedish.map((paragraph, i) => (
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
