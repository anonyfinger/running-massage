import { createSocialMetadata } from "@/lib/seo-metadata";
import { massagePageContent } from "@/lib/keyword-page-content";
import { KeywordPageStructuredData } from "@/components/KeywordPageStructuredData";
import { KeywordLandingPage } from "@/components/KeywordLandingPage";

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
      <KeywordLandingPage
        keyword="출장마사지"
        lead="고객이 계신 곳으로 찾아가는 프리미엄 마사지 서비스"
        sub="전신·부분·두통·어깨 결림 맞춤형 — 집·호텔·오피스로 방문해 드립니다"
        sections={massagePageContent}
        heroImage="/post_img/고품격-출장마사지-스웨디시-서비스.jpg"
      />
    </>
  );
}
