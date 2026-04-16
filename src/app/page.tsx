import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { homePageContent } from "@/lib/home-page-content";
import { homeBrandContent } from "@/lib/home-brand-content";
import { HomeStructuredData } from "@/components/HomeStructuredData";
import { HomeFAQSchema, FAQ_ITEMS } from "@/components/HomeFAQSchema";
import { CtaButtonsFromConfig } from "@/components/CtaButtons";

export const metadata = createSocialMetadata({
  title: "출장달리기 | 출장마사지 예약 안내·출장안마·출장스웨디시 이용 가이드",
  description:
    "출장달리기는 출장마사지, 출장안마, 출장스웨디시, 홈타이, 방문마사지 예약 전 확인해야 할 이용 흐름과 지역별 대표 문서를 정리한 상위 허브입니다.",
  path: "/",
  keywords: [
    "출장마사지",
    "출장마사지 예약",
    "출장마사지 안내",
    "출장안마",
    "출장안마 예약",
    "출장스웨디시",
    "출장스웨디시 안내",
    "홈타이",
    "방문마사지",
    "출장마사지 가이드",
    "출장마사지 이용 방법",
    "출장마사지 예약 가이드",
    "서울 출장마사지 안내",
    "경기 출장마사지 안내",
    "지역별 출장마사지 정보",
  ],
});

const coreIntentSections = [
  {
    title: "출장마사지",
    description:
      "출장마사지는 사용자가 원하는 장소에서 편하게 이용 흐름을 확인하고 예약을 진행하려는 의도가 강한 키워드입니다. 이 페이지는 단순 키워드 반복이 아니라 출장마사지 예약 전 알아야 할 기본 구조, 생활권별 차이, 문의 전 체크 포인트를 한 번에 정리하는 상위 허브 역할로 설계했습니다.",
  },
  {
    title: "출장안마",
    description:
      "출장안마 키워드는 빠른 이용 가능 여부와 실제 문의 흐름을 함께 찾는 검색이 많습니다. 그래서 홈에서는 서비스 전체 흐름과 예약 전 준비 항목을 먼저 설명하고, 세부적인 지역 맥락은 대표 지역 문서에서 더 깊게 보도록 주제를 분리했습니다.",
  },
  {
    title: "출장스웨디시",
    description:
      "출장스웨디시는 보다 섬세한 이용 경험과 편안한 동선에 대한 관심이 함께 나타나는 키워드입니다. 이 페이지는 출장스웨디시 관련 사용자가 궁금해하는 예약 흐름, 장소 준비, 시간대 선택, 지역별 차이를 설명하면서 AI와 검색엔진이 이해하기 쉬운 문단 구조로 정리했습니다.",
  },
  {
    title: "홈타이·방문마사지",
    description:
      "홈타이와 방문마사지는 실제 생활권 안에서 편하게 이용할 수 있는지, 어떤 장소가 적합한지, 예약 전에 무엇을 전달해야 하는지를 함께 찾는 경향이 있습니다. 그래서 홈에서는 이용 장면과 체크리스트를 넓게 설명하고, 세부적인 지역별 이용 가이드는 하위 문서로 자연스럽게 연결합니다.",
  },
];

const homeHubReasons = [
  {
    title: "큰 키워드는 홈이 받아야 신호가 강해집니다",
    description:
      "출장마사지, 출장안마, 출장스웨디시 같은 상위 키워드는 사이트 전체 주제를 대표하는 문서에서 먼저 정리하는 편이 구조적으로 더 안정적입니다. 홈이 상위 개념을 받아주고, 지역 페이지는 구체적인 생활권 의도와 지역별 문맥을 담당하면 각 문서의 역할이 더 선명해집니다.",
  },
  {
    title: "지역페이지와 역할이 겹치지 않아야 합니다",
    description:
      "홈이 서울·경기 전체 흐름과 예약 가이드를 담당하고, 지역 페이지가 영등포·강남·송파처럼 실제 지역 의도를 받는 구조라면 같은 키워드를 무리하게 반복하지 않아도 됩니다. 이렇게 문서 목적을 분리하면 내부 경쟁을 줄이면서도 전체 사이트 신호를 더 강하게 만들 수 있습니다.",
  },
  {
    title: "허브 문서가 강해지면 하위 문서도 같이 힘을 받습니다",
    description:
      "상위 허브 문서가 명확한 주제와 내부 링크 구조를 가지면 하위 지역 문서, 예약 가이드, 이용 가이드도 함께 연결성을 얻습니다. 검색엔진 입장에서는 사이트 전체가 하나의 체계적인 정보 구조를 갖춘 것으로 읽히기 쉬워지고, AI 기반 답변 시스템도 어떤 문서가 상위 설명 문서인지 파악하기 쉬워집니다.",
  },
];

const serviceFlowSections = [
  {
    title: "출장마사지 예약 전 가장 먼저 보는 정보",
    body:
      "처음 검색하는 사용자는 보통 가격이나 자극적인 문구보다 먼저 이용 가능 지역, 방문 가능한 장소, 예약 가능한 시간대, 문의 시 어떤 정보를 전달해야 하는지를 확인합니다. 그래서 홈에서는 검색 사용자가 실제로 먼저 궁금해하는 기본 질문부터 정리해야 하며, 이런 구조가 오히려 큰 키워드에서 더 안정적인 신호가 됩니다.",
  },
  {
    title: "출장안마·출장스웨디시 문의 흐름은 생각보다 단순합니다",
    body:
      "실제 문의 흐름은 복잡하지 않습니다. 위치, 이용 장소, 원하는 시간대, 기본적인 이용 목적만 먼저 정리하면 대화 속도가 훨씬 빨라집니다. 이 페이지는 그런 현실적인 문의 흐름을 설명함으로써 단순 광고 문서가 아니라 사용자 행동을 돕는 안내 문서라는 점을 분명하게 전달합니다.",
  },
  {
    title: "생활권마다 이용 맥락이 달라집니다",
    body:
      "같은 출장마사지라도 업무 밀집 지역, 주거 밀집 지역, 외곽 이동 지역은 예약 흐름과 대기 시간 체감이 달라질 수 있습니다. 홈에서는 이 차이를 넓게 설명하고, 세부 생활권 차이는 지역 대표 문서에서 더 구체적으로 안내하도록 계층을 나누는 것이 SEO와 GEO에 모두 유리합니다.",
  },
  {
    title: "검색 의도와 문서 의도를 맞춰야 합니다",
    body:
      "출장마사지 키워드 검색자는 단순 홍보가 아니라 실제 이용에 필요한 정리된 정보를 기대합니다. 따라서 홈 문서는 키워드만 반복하기보다 예약 흐름, 이용 환경, 준비 항목, 대표 문서 연결, FAQ 같은 구조를 가져야 합니다. 이런 형식은 검색엔진뿐 아니라 AI 요약 시스템에도 훨씬 잘 읽힙니다.",
  },
];

const geoSignals = [
  "홈은 출장마사지·출장안마·출장스웨디시 같은 상위 개념을 설명하는 상위 허브로 설계",
  "서울·경기 생활권이라는 넓은 지역 문맥을 잡고 세부 지역 페이지로 내부 링크 연결",
  "지역명만 반복하는 방식이 아니라 생활권, 이동 동선, 예약 흐름이라는 실제 문맥을 함께 설명",
  "예약 가이드, 이용 가이드, 대표 지역 페이지를 하나의 정보 체계로 연결",
  "상위 문서와 하위 지역 문서의 역할을 분리해 내부 키워드 충돌을 최소화",
  "지역 확장 시에도 홈의 주제가 흔들리지 않도록 문서 계층을 먼저 고정",
];

const aeoSummaryItems = [
  {
    label: "사이트 주제",
    value: "출장마사지, 출장안마, 출장스웨디시, 홈타이 관련 이용 가이드와 예약 흐름 안내",
  },
  {
    label: "홈페이지 역할",
    value: "상위 개념을 정리하는 허브 페이지이자 지역 대표 문서와 가이드 문서로 연결하는 시작점",
  },
  {
    label: "핵심 질문",
    value: "출장마사지가 무엇인지, 어떻게 예약하는지, 어떤 장소가 적합한지, 지역별 차이는 무엇인지",
  },
  {
    label: "핵심 답변 방식",
    value: "짧은 정의보다 실제 이용 흐름과 준비 항목, 생활권별 차이를 단계적으로 설명",
  },
  {
    label: "연결 문서",
    value: "대표 지역 페이지, 예약 가이드, 이용 가이드, 예약문의 페이지",
  },
];

const longformSections = [
  {
    title: "출장마사지란 무엇인지부터 명확하게 정리해야 합니다",
    paragraphs: [
      "출장마사지는 사용자가 원하는 장소에서 편하게 이용 흐름을 확인하고 예약을 진행할 수 있다는 점에서 검색 수요가 꾸준히 발생하는 주제입니다. 하지만 실제 검색 결과를 보면 단순 문구 반복이나 지역명 나열에 그치는 페이지도 많습니다. 그런 구조는 잠깐 특정 키워드에 걸릴 수는 있어도, 사이트 전체의 신호를 단단하게 쌓는 데에는 한계가 있습니다.",
      "그래서 홈은 단순히 한 지역만 미는 페이지가 아니라, 출장마사지라는 상위 개념 자체를 설명하는 페이지여야 합니다. 사용자는 여기서 서비스 이름만 보는 것이 아니라 어떤 상황에서 이용이 편한지, 예약 전에 무엇을 정리하면 좋은지, 생활권마다 왜 흐름이 달라지는지를 함께 이해하게 됩니다. 이런 상위 설명 문서가 있어야 사이트 전체가 하나의 정보 구조로 읽힙니다.",
      "특히 큰 키워드를 잡고 싶은 경우라면 홈의 역할이 더 중요합니다. 출장마사지, 출장안마, 출장스웨디시처럼 넓은 키워드는 특정 지역페이지 하나가 담당하기보다 사이트 대표 문서가 먼저 주제를 설명해야 검색엔진이 사이트의 중심 주제를 더 선명하게 파악할 수 있습니다.",
    ],
  },
  {
    title: "출장안마와 출장스웨디시 키워드를 함께 다루되 문서 목적은 흔들리지 않아야 합니다",
    paragraphs: [
      "홈페이지에서 여러 연관 키워드를 함께 다루는 것은 중요하지만, 그것이 곧 아무 키워드나 섞어서 나열한다는 뜻은 아닙니다. 출장안마와 출장스웨디시는 출장마사지라는 큰 주제 안에서 사용자가 실제로 함께 검색하는 대표 키워드입니다. 따라서 홈에서는 이 키워드들이 어떤 검색 의도에서 함께 묶이는지, 그리고 어떤 부분이 공통되고 어떤 부분이 다른지를 자연스럽게 설명해야 합니다.",
      "예를 들어 출장안마는 빠른 이용 가능 여부나 실전 문의 흐름에 관심이 큰 편이고, 출장스웨디시는 보다 편안한 이용 환경과 세부적인 설명을 기대하는 경우가 많습니다. 이런 차이를 문장 안에서 자연스럽게 풀어내면 단순 반복보다 훨씬 질 좋은 문서가 됩니다. 동시에 검색엔진도 문서가 실제 키워드 관계를 이해하고 있다는 신호를 받게 됩니다.",
      "핵심은 홈 문서가 상위 개념을 설명하는 허브라는 점입니다. 각 키워드를 다루더라도 목적은 하나로 유지되어야 합니다. 즉, 사용자가 출장마사지 계열 키워드를 검색했을 때 이 사이트가 전체 흐름을 정리해 주는 중심 문서라는 인상을 받게 만드는 것이 중요합니다.",
    ],
  },
  {
    title: "지역페이지와 홈의 역할을 분리해야 더 강한 구조가 됩니다",
    paragraphs: [
      "지역페이지는 영등포 출장마사지, 강남 출장마사지, 송파 출장마사지처럼 실제 생활권 의도를 받는 문서입니다. 반면 홈은 서울·경기 전반의 큰 문맥과 이용 가이드를 담당하는 문서입니다. 이 둘을 섞어버리면 홈도 지역 신호가 흐려지고, 지역페이지도 상위 키워드와 충돌하게 됩니다.",
      "따라서 홈에서는 서울과 경기라는 넓은 생활권을 배경으로 출장마사지 이용 흐름을 설명하고, 세부 지역 문서는 각 생활권의 이동 동선, 수요 시간대, 접근성, 실제 이용 맥락을 담당하도록 나누는 편이 훨씬 좋습니다. 이렇게 문서 계층을 나누면 내부 링크도 더 자연스럽고, 사용자도 어디에서 무엇을 봐야 하는지 헷갈리지 않습니다.",
      "이 구조는 GEO 관점에서도 강점이 있습니다. 지역명만 반복하는 대신 상위 문서가 전체 지역 문맥을 정리하고, 하위 문서가 세부 지역 맥락을 설명하면 검색엔진은 사이트를 단순 키워드 묶음이 아니라 계층형 지역 정보 구조로 이해하기 쉬워집니다.",
    ],
  },
  {
    title: "사용자가 실제로 궁금해하는 예약 흐름을 중심으로 써야 합니다",
    paragraphs: [
      "출장마사지 관련 키워드에서 좋은 홈 문서는 검색 사용자가 실제로 무엇을 알고 싶은지를 정확히 따라가야 합니다. 보통 사용자는 이용 가능 지역, 원하는 장소에서 진행 가능한지, 예약 가능 시간대가 어떤지, 문의할 때 어떤 정보를 먼저 전달해야 하는지를 궁금해합니다. 이런 질문에 답하지 못하는 페이지는 키워드가 많아도 체류나 연결이 약해질 수 있습니다.",
      "그래서 홈에는 예약 전 체크리스트, 준비하면 좋은 정보, 대표 가이드 문서 연결, 지역 대표 문서 연결이 함께 있어야 합니다. 이런 구성은 단순히 길게 쓰기 위한 것이 아니라, 사용자 행동을 다음 단계로 이동시키는 기능을 합니다. 검색 사용자가 홈에서 전체 흐름을 이해하고, 그 다음 예약 가이드나 지역 대표 페이지로 이동하면 사이트 전체 탐색 구조도 자연스럽게 강화됩니다.",
      "AEO 관점에서도 이런 구조가 유리합니다. AI 기반 답변 시스템은 사용자가 자주 묻는 질문과 그에 대한 명확한 문장을 찾는 경향이 있습니다. 홈이 질문형 구조와 정리된 답변형 문단을 충분히 갖추고 있으면, 단순 홍보 문서보다 훨씬 이해하기 쉬운 자료가 됩니다.",
    ],
  },
  {
    title: "홈타이와 방문마사지 키워드까지 넓게 묶어야 상위 신호가 단단해집니다",
    paragraphs: [
      "출장마사지 사용자 중 일부는 홈타이, 방문마사지 같은 표현으로도 비슷한 의도를 검색합니다. 이 키워드들을 완전히 별개 주제로 떼어내기보다, 홈에서 자연스럽게 함께 설명해 주면 더 넓은 연관 검색을 포괄할 수 있습니다. 물론 여기서도 핵심은 키워드만 던지는 것이 아니라 왜 함께 검색되는지 문맥을 설명하는 것입니다.",
      "예를 들어 홈타이나 방문마사지는 실제 생활권 안에서 편하게 이용하고 싶은 수요, 외출보다 현재 위치에서 진행하고 싶은 수요와 자주 연결됩니다. 이런 맥락을 홈에서 설명하면 단순 키워드 확장이 아니라 사용자의 의도를 더 넓게 받아주는 문서가 됩니다.",
      "결국 홈은 출장마사지라는 큰 주제 안에서 파생되는 검색 표현들을 하나의 체계로 정리하는 역할을 해야 합니다. 이렇게 해야 사이트 전체 신호가 분산되지 않고, 오히려 더 넓은 상위 개념으로 응집됩니다.",
    ],
  },
  {
    title: "사이트 전체 신호를 강하게 만들려면 허브 구조가 먼저 단단해야 합니다",
    paragraphs: [
      "사이트가 강해진다는 것은 단순히 특정 페이지 하나가 뜨는 것이 아니라, 검색엔진이 이 사이트를 어떤 주제의 전문 허브로 인식하는 상태에 가까워지는 것입니다. 출장달리기 홈이 출장마사지 계열 키워드의 상위 설명 문서 역할을 하고, 지역페이지와 가이드 페이지가 그 아래에서 각각의 목적을 수행하면 사이트 전체가 훨씬 일관된 구조를 갖게 됩니다.",
      "이때 중요한 것은 각 문서가 자기 역할을 잃지 않는 것입니다. 홈은 상위 개념과 흐름, 지역페이지는 생활권별 의도, 예약 가이드는 실전 행동 흐름, FAQ는 짧고 명확한 답변을 담당하도록 나누면 전체 구조가 더 단단해집니다. 이런 방식은 시간이 지나면서 문서가 늘어나도 흔들리지 않는 장점이 있습니다.",
      "즉, 나중에 지역이 많이 확장되더라도 홈은 계속 상위 허브로 남고, 새로운 지역 문서는 그 아래로 연결되며, 사이트 자체 신호는 더 강해지는 방향으로 누적될 수 있습니다. यही 홈을 큰 키워드용으로 설계해야 하는 이유입니다.",
    ],
  },
];

const additionalFaqs = [
  {
    question: "홈페이지에서 출장마사지 같은 큰 키워드를 잡아도 되나요?",
    answer:
      "네. 오히려 출장마사지, 출장안마, 출장스웨디시 같은 상위 키워드는 홈처럼 사이트 전체를 대표하는 문서에서 먼저 구조적으로 설명하는 편이 더 안정적입니다. 대신 지역페이지와 역할이 겹치지 않도록 홈은 상위 허브, 지역페이지는 세부 생활권 문서로 역할을 분리해야 합니다.",
  },
  {
    question: "왜 홈에서 지역명만 계속 반복하지 않나요?",
    answer:
      "홈은 특정 지역 한 곳을 밀어붙이는 문서가 아니라 서울·경기 전체 생활권을 설명하는 상위 페이지이기 때문입니다. 지역명 반복보다 이용 흐름, 예약 구조, 생활권 차이, 대표 문서 연결을 정리하는 편이 큰 키워드 관점에서 더 자연스럽고 강한 신호가 됩니다.",
  },
  {
    question: "이 페이지가 AEO에 유리한 이유는 무엇인가요?",
    answer:
      "이 페이지는 출장마사지가 무엇인지, 어떻게 예약하는지, 어떤 정보를 먼저 봐야 하는지, 지역 문서와 어떻게 연결되는지를 질문과 답변 형태에 가깝게 정리하고 있습니다. 그래서 AI 기반 검색이나 요약 시스템이 문서 목적과 핵심 답변을 파악하기 쉬운 구조를 가집니다.",
  },
  {
    question: "GEO 관점에서는 무엇이 중요한가요?",
    answer:
      "상위 홈 문서에서 서울·경기 전체 문맥을 설명하고, 하위 지역 문서에서 영등포·강남·송파 같은 세부 생활권을 설명하는 계층 구조가 중요합니다. 이렇게 해야 지역 문맥이 자연스럽게 확장되고, 지역별 키워드도 서로 충돌하지 않고 쌓일 수 있습니다.",
  },
];

export default function Home() {
  const { homeHeroH1, homeHeroLead } = siteConfig;
  const combinedFaqItems = [...FAQ_ITEMS, ...additionalFaqs];

  return (
    <>
      <HomeStructuredData />
      <HomeFAQSchema items={combinedFaqItems} />
      <article>
        <section id="intro" className="hero" aria-labelledby="hero-heading">
          <div className="hero__bg-slide hero__bg-slide--1 hero__bg-slide--img" aria-hidden="true">
            <Image
              src="/post_img/출장마사지-이용-시나리오-직장인.jpg"
              alt="테라피스트가 고객 숙소에서 마사지 서비스를 제공하는 장면"
              fill
              priority
              fetchPriority="high"
              quality={60}
              sizes="(max-width: 768px) 430px, (max-width: 1200px) 100vw, 1200px"
              className="hero__bg-img"
            />
          </div>
          <div className="hero__bg-slide hero__bg-slide--2" aria-hidden="true" />
          <div className="hero__bg-slide hero__bg-slide--3" aria-hidden="true" />
          <div className="hero__bg-slide hero__bg-slide--4" aria-hidden="true" />
          <div className="hero__bg-slide hero__bg-slide--5" aria-hidden="true" />
          <div className="hero__overlay" aria-hidden="true" />
          <div className="hero__inner">
            <div className="hero__content">
              <h1 id="hero-heading" className="hero__title">
                {homeHeroH1}
              </h1>
              <p className="hero__lead">{homeHeroLead}</p>
              <p className="hero__sub">
                출장달리기는 출장마사지, 출장안마, 출장스웨디시, 홈타이, 방문마사지 관련 이용 흐름을 정리하는 상위 허브입니다. 큰 키워드는 홈에서 넓게 설명하고, 실제 생활권 경쟁은 대표 지역 문서가 맡도록 구조를 분리해 사이트 전체 주제 신호를 더 선명하게 설계했습니다.
              </p>
              <div className="hero__actions">
                <CtaButtonsFromConfig />
              </div>
            </div>
          </div>
        </section>

        <section id="brand" className="content-block" aria-labelledby="brand-heading">
          <h2 id="brand-heading" className="section-title">
            출장마사지 큰 키워드를 잡기 위한 상위 허브 설계
          </h2>
          <div className="prose">
            <p>
              출장달리기 홈은 특정 지역 키워드 하나를 직접 밀어붙이는 페이지가 아니라, 출장마사지·출장안마·출장스웨디시 같은
              상위 개념을 먼저 설명하고 지역별 대표 문서로 연결하는 허브 역할을 합니다. 큰 키워드는 사이트 전체를 대표하는 문서가
              받아야 장기적으로 더 안정적인 신호가 쌓이기 때문에, 홈에서는 서울·경기 생활권 전체의 이용 흐름과 예약 기준을 먼저
              정리하고 지역 페이지는 실제 생활권 문맥을 담당하도록 구조를 분리했습니다.
            </p>
            <p>
              이런 구조는 단순히 SEO만 위한 것이 아닙니다. 사용자가 출장마사지 계열 키워드를 검색했을 때 가장 먼저 궁금해하는 것은
              어디서 가능한지, 어떤 흐름으로 예약하는지, 생활권마다 무엇이 다른지 같은 기본 정보입니다. 그래서 홈은 상위 개념 설명,
              예약 전 체크 포인트, 대표 가이드 연결, 지역 대표 문서 연결을 함께 제공하는 쪽이 더 자연스럽습니다.
            </p>
            <p>
              결과적으로 홈은 사이트 전체의 방향을 설명하는 문서가 되고, 하위 문서는 각자의 검색 의도를 받는 구조가 됩니다. 이런
              방식은 앞으로 지역 페이지가 더 늘어나더라도 흔들리지 않는 기반이 되며, 사이트 자체의 주제 신호를 점점 더 강하게
              쌓는 데 유리합니다.
            </p>
            <h3 className="prose__subtitle">왜 홈이 큰 키워드를 받아야 하는가</h3>
            {homeHubReasons.map((item) => (
              <div key={item.title} className="home-service-teaser">
                <h4 className="prose__subtitle">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="service" className="content-block" aria-labelledby="service-heading">
          <h2 id="service-heading" className="section-title">
            출장마사지·출장안마·출장스웨디시 검색 의도별 핵심 안내
          </h2>
          <div className="prose">
            <p>
              홈 문서는 키워드를 많이 넣는 것보다, 실제로 함께 검색되는 주제들을 어떤 구조로 정리하느냐가 더 중요합니다. 출장마사지,
              출장안마, 출장스웨디시, 홈타이, 방문마사지처럼 연관된 표현은 검색창에서는 서로 다르게 보일 수 있지만, 실제 사용자
              의도는 상당 부분 연결되어 있습니다. 그래서 이 페이지에서는 각 키워드의 차이를 억지로 분리하기보다, 공통되는 이용 흐름과
              각각 조금씩 다른 기대 포인트를 함께 설명하는 방식을 택했습니다.
            </p>
            {coreIntentSections.map((item) => (
              <div key={item.title} className="home-service-teaser">
                <h3 className="prose__subtitle">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
            <h3 className="prose__subtitle">실제 이용 흐름을 기준으로 보면 좋은 이유</h3>
            {serviceFlowSections.map((item) => (
              <div key={item.title} className="home-service-teaser">
                <h4 className="prose__subtitle">{item.title}</h4>
                <p>{item.body}</p>
              </div>
            ))}
            {homePageContent.serviceTeasers.map(({ href, title, line }) => (
              <div key={href} className="home-service-teaser">
                <h3 className="prose__subtitle">
                  <Link href={href} className="prose__subtitle-link">
                    {title}
                  </Link>
                </h3>
                <p>{line}</p>
                <p>
                  <Link href={href} className="prose__subtitle-link">
                    상세 보기 →
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-block section section--white" aria-labelledby="longform-heading">
          <h2 id="longform-heading" className="section-title">
            출장마사지 상위 키워드를 위한 장문 가이드
          </h2>
          <div className="prose">
            {longformSections.map((section) => (
              <div key={section.title} className="home-service-teaser">
                <h3 className="prose__subtitle">{section.title}</h3>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="content-block section section--white" aria-labelledby="choice-heading">
          <h2 id="choice-heading" className="section-title">
            이럴 때 출장마사지가 더 편합니다
          </h2>
          <div className="prose">
            <p>
              출장마사지가 더 편하게 느껴지는 상황은 생각보다 분명합니다. 외출 동선을 줄이고 싶을 때, 익숙한 공간에서 편하게 흐름을
              진행하고 싶을 때, 늦은 시간 이동 부담을 줄이고 싶을 때처럼 사용자는 특정 상황에서 이 서비스를 더 선호합니다. 그래서
              큰 키워드를 담당하는 홈 문서에는 단순 소개가 아니라 실제 이용 장면을 떠올릴 수 있는 설명이 함께 있어야 합니다.
            </p>
            <p>{homePageContent.quickChoiceIntro}</p>
            <ul className="faq-list" role="list">
              {homePageContent.situationGuides.map((item, i) => (
                <li key={i} className="faq-list__item">
                  <p className="faq-list__a">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="regions"
          className="content-block home-region-nav"
          aria-labelledby="home-region-heading"
        >
          <h2 id="home-region-heading" className="section-title">
            대표 지역 문서와 가이드 문서를 함께 보는 이유
          </h2>
          <div className="prose">
            <p>
              홈이 출장마사지 같은 큰 키워드를 받는 상위 허브라면, 대표 지역 문서는 영등포·서울·경기처럼 실제 생활권 의도를 더
              구체적으로 받는 문서입니다. 홈과 지역 문서가 서로 역할을 나누고 연결되면, 사이트 전체가 하나의 체계적인 정보 구조로
              읽히기 쉬워집니다.
            </p>
            <p>
              특히 지역 문서는 실제 이동 동선, 생활권 특성, 예약 시간대, 이용 맥락을 더 깊게 설명하는 데 유리합니다. 반면 홈은
              출장마사지 전체 흐름과 공통 질문, 예약 전 준비 항목, 상위 개념 설명을 담당하는 쪽이 더 적절합니다. 이런 구조가 SEO와
              GEO를 동시에 안정적으로 가져가는 기본 틀입니다.
            </p>
            <p className="page-article__sub" style={{ marginBottom: "1rem" }}>
              {homePageContent.regionLead}
            </p>
          </div>
          <ul className="home-representative-regions" role="list">
            {homeBrandContent.representativeRegionLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="prose__subtitle-link">
                  {label} 바로 보기
                </Link>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "1rem" }}>
            <Link href="/reserve" className="prose__subtitle-link">
              예약문의 바로 가기 →
            </Link>
          </p>
        </section>

        <section className="content-block" aria-labelledby="geo-heading">
          <h2 id="geo-heading" className="section-title">
            홈 문서의 GEO 관점 핵심 신호
          </h2>
          <div className="prose">
            <p>
              GEO 관점에서는 지역명만 나열하는 방식보다, 상위 문서와 하위 문서의 역할을 분리하고 지역 문맥을 단계적으로 설명하는
              구조가 훨씬 중요합니다. 출장달리기 홈은 서울·경기 생활권 전체를 설명하는 상위 문서로 기능하고, 세부 생활권은 대표
              지역 문서에서 받도록 설계해 지역 신호가 더 자연스럽게 확장되도록 만들었습니다.
            </p>
          </div>
          <ul className="faq-list" role="list">
            {geoSignals.map((item) => (
              <li key={item} className="faq-list__item">
                <p className="faq-list__a">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="content-block section section--white" aria-labelledby="aeo-heading">
          <h2 id="aeo-heading" className="section-title">
            검색엔진과 AI가 이해하기 쉬운 홈페이지 요약
          </h2>
          <div className="prose">
            <p>
              AEO 관점에서는 이 페이지가 무엇을 설명하는 문서인지 빠르게 이해할 수 있어야 합니다. 그래서 홈은 출장마사지가 무엇인지,
              어떻게 예약 흐름을 이해하면 되는지, 어떤 하위 문서로 이동해야 하는지를 짧고 분명한 구조로 설명하도록 보강했습니다.
            </p>
          </div>
          <ul className="faq-list" role="list">
            {aeoSummaryItems.map((item) => (
              <li key={item.label} className="faq-list__item">
                <h3 className="faq-list__q">{item.label}</h3>
                <p className="faq-list__a">{item.value}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="faq" className="content-block" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="section-title">
            출장마사지 예약 전 바로 정리할 항목과 FAQ
          </h2>
          <p className="prose__lead">
            서비스 선택 전 아래 항목을 먼저 정리하면 실제 예약 대화가 훨씬 빨라집니다. 큰 키워드를 담당하는 홈 문서에서는 이런
            실전형 안내가 함께 있어야 사용자 만족도와 문서 완성도가 같이 올라갑니다.
          </p>
          <ul className="faq-list" role="list">
            {homePageContent.starterChecklist.map((item, i) => (
              <li key={i} className="faq-list__item">
                <p className="faq-list__a">{item}</p>
              </li>
            ))}
          </ul>
          <p className="prose__lead" style={{ marginTop: "1rem" }}>
            더 자세한 흐름은{" "}
            <Link href="/regions/common/reservation-guide" className="prose__subtitle-link">
              출장마사지 예약 가이드
            </Link>
            에서 확인하실 수 있습니다.
          </p>
          <p className="prose__lead" style={{ marginTop: "0.5rem" }}>
            바로 문의가 필요하면{" "}
            <Link href="/reserve" className="prose__subtitle-link">
              예약문의 페이지
            </Link>
            로 이동해 위치·장소·시간대를 먼저 전달해 주세요.
          </p>
          <p className="prose__lead" style={{ marginTop: "0.5rem" }}>
            세부 가이드는{" "}
            <Link href="/guides" className="prose__subtitle-link">
              이용 가이드 모음
            </Link>
            에서 확인하실 수 있습니다.
          </p>
          <ul className="faq-list" role="list" style={{ marginTop: "2rem" }}>
            {combinedFaqItems.map((item, i) => (
              <li key={i} className="faq-list__item">
                <h3 className="faq-list__q">{item.question}</h3>
                <p className="faq-list__a">{item.answer}</p>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
