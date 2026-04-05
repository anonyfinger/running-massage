import { createSocialMetadata } from "@/lib/seo-metadata";
import { massagePageContent } from "@/lib/keyword-page-content";
import { massagePageRegionLinks, massagePageRelatedArticles } from "@/lib/massage-page-links";
import { KeywordPageStructuredData } from "@/components/KeywordPageStructuredData";
import { KeywordLandingPage } from "@/components/KeywordLandingPage";

export const metadata = createSocialMetadata({
  title: "출장마사지 | 집·호텔·오피스 방문 마사지",
  description:
    "출장마사지 안내: 코스·예약·가격 원칙·심야·지역별 상세까지 한 문서에서 확인하세요. 전신·부분·집중 코스, 서울·경기·인천 출장, 24시간 문의.",
  path: "/massage",
  keywords: ["출장마사지", "출장 마사지", "방문 마사지", "홈케어 마사지", "출장 전신마사지"],
});

export default function MassagePage() {
  return (
    <>
      <KeywordPageStructuredData
        keyword="출장마사지"
        description="출장마사지는 고객이 지정한 집·호텔·오피스로 테라피스트가 방문해 마사지를 제공하는 서비스입니다. 코스·예약·가격·심야·지역 안내를 한 페이지에서 확인하고, 관련 블로그·지역 상세로 이어집니다."
        path="/massage"
      />
      <KeywordLandingPage
        keyword="출장마사지"
        lead="고객이 계신 곳으로 찾아가는 프리미엄 마사지 서비스"
        sub="전신·부분·두통·어깨 결림 맞춤형 — 집·호텔·오피스로 방문해 드립니다"
        sections={massagePageContent}
        heroImage="/post_img/고품격-출장마사지-스웨디시-서비스.jpg"
        relatedServices={[
          { label: "출장안마 — 경락 기반 방문 안마", href: "/anma" },
          { label: "출장스웨디시 — 오일 마사지 방문 서비스", href: "/swedish" },
          { label: "24시간·심야 출장마사지 안내", href: "/regions/common/allnight" },
          { label: "출장마사지 예약 가이드", href: "/regions/common/reservation-guide" },
        ]}
        relatedRegions={[...massagePageRegionLinks]}
        regionSectionLead="대표 지역은 출장마사지 상세 페이지로 바로 연결됩니다. 생활권·동선은 각 지역 안내에서 이어집니다."
        relatedArticles={[...massagePageRelatedArticles]}
      />
    </>
  );
}
