import { createSocialMetadata } from "@/lib/seo-metadata";
import { anmaPageContent } from "@/lib/keyword-page-content";
import { KeywordPageStructuredData } from "@/components/KeywordPageStructuredData";
import { KeywordLandingPage } from "@/components/KeywordLandingPage";

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
      <KeywordLandingPage
        keyword="출장안마"
        lead="경락 기반 피로 해소, 고객 지정 장소로 방문"
        sub="목·어깨·등·다리 — 오일 없이 진행 가능, 집·호텔·오피스로 방문해 드립니다"
        sections={anmaPageContent}
        heroImage="/post_img/전문-출장마사지-스웨디시-웰니스.jpg"
        relatedServices={[
          { label: "출장마사지 — 집·호텔·오피스 방문 마사지", href: "/massage" },
          { label: "출장스웨디시 — 오일 마사지 방문 서비스", href: "/swedish" },
          { label: "24시간 출장안마 예약 안내", href: "/regions/common/allnight" },
          { label: "출장안마 예약 가이드", href: "/regions/common/reservation-guide" },
        ]}
      />
    </>
  );
}
