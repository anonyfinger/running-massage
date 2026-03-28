import { createSocialMetadata } from "@/lib/seo-metadata";
import { swedishPageContent } from "@/lib/keyword-page-content";
import { KeywordPageStructuredData } from "@/components/KeywordPageStructuredData";
import { KeywordLandingPage } from "@/components/KeywordLandingPage";

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
      <KeywordLandingPage
        keyword="출장스웨디시"
        lead="오일 마사지로 깊은 이완, 고객 지정 장소로 방문"
        sub="혈액순환·근육 이완·림프 촉진 — 집·호텔·오피스로 방문해 드립니다"
        sections={swedishPageContent}
        heroImage="/post_img/프리미엄-출장마사지-오일-마사지-서비스.jpg"
        relatedServices={[
          { label: "출장마사지 — 집·호텔·오피스 방문 마사지", href: "/massage" },
          { label: "출장안마 — 경락 기반 방문 안마", href: "/anma" },
          { label: "24시간 출장스웨디시 예약 안내", href: "/regions/common/allnight" },
          { label: "출장스웨디시 예약 가이드", href: "/regions/common/reservation-guide" },
        ]}
      />
    </>
  );
}
