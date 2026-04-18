import { createSocialMetadata } from "@/lib/seo-metadata";
import { massagePageContent } from "@/lib/massage-page-content";
import { massagePageRegionLinks, massagePageRelatedArticles } from "@/lib/massage-page-links";
import { KeywordPageStructuredData } from "@/components/KeywordPageStructuredData";
import { KeywordLandingPage } from "@/components/KeywordLandingPage";
import { getRegionLandingPath } from "@/lib/region-landings";

export const metadata = createSocialMetadata({
  title: "출장마사지 | 방문 마사지 이용 가이드",
  description:
    "출장마사지를 처음 찾을 때 필요한 방문 마사지 이용 가이드입니다. 전신·부분 집중 선택 기준과 장소별 준비 사항을 정리하고, 지역 페이지와 분리된 서비스 기준 문서로 구성했습니다.",
  path: "/massage",
  keywords: ["출장마사지", "방문 마사지 이용 가이드", "출장마사지 예약 안내", "전신 부분 마사지 선택"],
});

export default function MassagePage() {
  return (
    <>
      <KeywordPageStructuredData
        keyword="출장마사지"
        description="출장마사지는 방문 마사지 선택 기준이 필요한 검색자를 위한 이용 가이드입니다. 전신·부분·집중 구조와 장소별 차이를 정리하고, 지역 페이지와 역할이 겹치지 않도록 분리 구성했습니다."
        path="/massage"
      />
      <KeywordLandingPage
        keyword="출장마사지"
        heroTitle="출장마사지 | 방문 마사지 이용 가이드"
        lead="전신·부분 집중·장소 선택을 먼저 정리하는 방문 마사지 가이드"
        sub="출장마사지가 어떤 상황에 잘 맞는지, 집·호텔·오피스 중 어디가 더 편한지, 예약 전에 무엇을 준비하면 좋은지 한 번에 확인할 수 있게 구성했습니다"
        sections={massagePageContent}
        heroImage="/post_img/고품격-출장마사지-스웨디시-서비스.jpg"
        serviceSectionTitle="출장마사지 선택 기준과 이용 흐름"
        relatedServicesTitle="대표 지역 페이지와 함께 보면 좋은 안내"
        relatedServices={[
          { label: "영등포 출장마사지", href: getRegionLandingPath("yeongdeungpo") },
          { label: "강남 출장마사지", href: getRegionLandingPath("gangnam") },
          { label: "강서 출장마사지", href: getRegionLandingPath("gangseo") },
          { label: "영등포 출장마사지 예약문의", href: "/reserve" },
          { label: "24시간 출장마사지 안내", href: "/regions/common/allnight" },
          { label: "출장마사지 예약 가이드", href: "/regions/common/reservation-guide" },
        ]}
        relatedRegions={[...massagePageRegionLinks]}
        regionSectionLead="현재는 영등포·강남·강서 대표 지역 페이지를 운영 중이며, 지역마다 도입·결론 문장을 다르게 두어 중복 없이 읽히게 했습니다. 실제 예약 흐름은 예약 가이드와 24시간 안내에서 이어서 확인하시는 편이 좋습니다."
        relatedArticles={[...massagePageRelatedArticles]}
        relatedArticlesTitle="출장마사지 예약 전 함께 볼 문서"
        regionsSectionTitle="대표 지역 안내"
      />
    </>
  );
}
