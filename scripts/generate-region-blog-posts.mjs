/**
 * 지역별 출장마사지 블로그 생성 — 실행: node scripts/generate-region-blog-posts.mjs
 * 지역별 문단은 region-sections-by-slug.mjs, 5000자 이상 확장은 region-expand-5000.mjs 가 병합합니다.
 * 각 글의 tags는 서로 겹치지 않도록 고유 문자열만 사용합니다.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getExpandedSectionsForPost } from "./region-expand-5000.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "../src/lib/blog-posts-region-detail.ts");

/** @type {{ slug: string; title: string; desc: string; tags: [string, string, string, string] }[]} */
const posts = [
  // 서울
  {
    slug: "seoul-gangnam-chuljang-local",
    title: "강남구 출장마사지 — 역삼·논현·청담 일대에서 받을 때",
    desc: "강남구는 직장·상권 밀집으로 출장마사지 문의가 많은 지역입니다. 동별 특성, 예약 시 알아둘 점, 코스 선택 팁을 정리했습니다.",
    tags: ["강남구방문마사지", "역삼출장예약", "논현동출장안내", "청담동출장케어"],
  },
  {
    slug: "seoul-gangseo-chuljang-local",
    title: "강서구 출장마사지 — 김포공항·마곡·화곡 인근 이용 가이드",
    desc: "서울 강서구는 김포공항·마곡·등촌·화곡 등 광역 이동과 신도시가 섞인 지역입니다. 출장마사지 예약 시 도착·시간 잡는 법을 안내합니다.",
    tags: ["서울강서출장예약", "마곡출장마사지", "등촌동출장안내", "김포공항인근출장"],
  },
  // 전북
  {
    slug: "jeonju-chuljang-local",
    title: "전주 출장마사지 — 완산·덕진 중심 이용 시 체크포인트",
    desc: "전주시는 한옥마을·대학가·신시가지가 함께 있어 이동 동선이 길어질 수 있습니다. 출장마사지 이용 시 구역별 특징을 정리했습니다.",
    tags: ["전주시출장마사지", "완산구출장예약", "덕진구출장안내", "전북전주출장"],
  },
  {
    slug: "iksan-chuljang-local",
    title: "익산 출장마사지 — 모현·영등·원광대 인근 문의가 많은 이유",
    desc: "익산은 KTX와 국도가 지나는 호남 거점이라 출장·이사 인구가 꾸준합니다. 시내·외곽 예약 시 차이를 설명합니다.",
    tags: ["익산시출장마사지", "모현동출장예약", "원광대인근출장", "익산역출장안내"],
  },
  {
    slug: "gunsan-chuljang-local",
    title: "군산·익산 인근 출장마사지 — 산단·신도시 거주자 이용 팁",
    desc: "군산국가산단·신항·근린 익산과의 이동이 잦은 지역입니다. 산업단지 인근 숙소와 주거지에서의 출장 이용을 정리했습니다.",
    tags: ["군산출장마사지", "군산국가산단출장", "새만금인근출장", "익산군산출장"],
  },
  // 경기 — 시·군별 (태그 전부 유일)
  {
    slug: "gyeonggi-suwon-chuljang-local",
    title: "수원 출장마사지 — 영통·팔달·권선·장안 구별 이동 안내",
    desc: "수원시는 광역시급 인구로 구마다 생활권이 다릅니다. 출장마사지 예약 시 정확한 주소와 구 이름이 도착 시간에 영향을 줍니다.",
    tags: ["수원시출장마사지", "영통구출장예약", "팔달문화권출장", "수원권선출장안내"],
  },
  {
    slug: "gyeonggi-seongnam-chuljang-local",
    title: "성남 출장마사지 — 분당·수정·중원 생활권별 예약 요령",
    desc: "성남시는 분당과 수정·중원이 생활권이 크게 다릅니다. 동선과 시간대를 잡을 때 참고할 점을 적었습니다.",
    tags: ["성남시출장마사지", "분당구출장예약", "판교인근출장", "성남중원출장"],
  },
  {
    slug: "gyeonggi-goyang-chuljang-local",
    title: "고양 출장마사지 — 일산·덕양·행신 일대 방문 시 참고사항",
    desc: "고양시는 일산 신도시와 덕양 구도심이 나뉩니다. 출장마사지 도착 동선을 짤 때 유용한 구분입니다.",
    tags: ["고양시출장마사지", "일산동구출장", "덕양구출장예약", "행신역인근출장"],
  },
  {
    slug: "gyeonggi-yongin-chuljang-local",
    title: "용인 출장마사지 — 기흥·수지·처인 구역 특성과 예약 팁",
    desc: "용인시는 수지·기흥·처인으로 면적이 넓습니다. 같은 시라도 이동 시간 차이가 크므로 예약 시 위치를 구체적으로 알려주세요.",
    tags: ["용인시출장마사지", "수지구출장예약", "기흥구출장안내", "처인구출장마사지"],
  },
  {
    slug: "gyeonggi-bucheon-chuljang-local",
    title: "부천 출장마사지 — 원미·소사·오정 구별 상권과 주거 밀도",
    desc: "부천시는 서울 접경으로 밀집 주거와 상가가 혼재합니다. 출장마사지 이용 시 주차·현관 안내를 미리 적어두면 수월합니다.",
    tags: ["부천시출장마사지", "원미구출장예약", "상동출장안내", "부천역인근출장"],
  },
  {
    slug: "gyeonggi-anyang-chuljang-local",
    title: "안양 출장마사지 — 만안·동안 구 나눔과 평촌·안양역 일대",
    desc: "안양시는 평촌 신도시와 구도심이 공존합니다. 거주지 유형에 따라 동선이 달라 출장 예약 시 구·동을 함께 알려주시면 좋습니다.",
    tags: ["안양시출장마사지", "평촌출장예약", "동안구출장안내", "만안구출장마사지"],
  },
  {
    slug: "gyeonggi-ansan-chuljang-local",
    title: "안산 출장마사지 — 단원·상록, 고잔·본오 일대 이용 안내",
    desc: "안산은 외국인 거주와 산단이 많아 생활 패턴이 다양합니다. 출장마사지는 공간만 확보되면 진행 가능하며, 예약 시 층수·현관 방식을 알려주세요.",
    tags: ["안산시출장마사지", "단원구출장예약", "고잔동출장안내", "상록구출장마사지"],
  },
  {
    slug: "gyeonggi-namyangju-chuljang-local",
    title: "남양주 출장마사지 — 별내·다산·와부 신도시 중심",
    desc: "남양주는 신도시 확장이 컸습니다. 동별로 판교·서울 접근이 달라 예약 시간대 추천이 달라질 수 있습니다.",
    tags: ["남양주출장마사지", "별내출장예약", "다산신도시출장", "와부출장안내"],
  },
  {
    slug: "gyeonggi-hwaseong-chuljang-local",
    title: "화성 출장마사지 — 동탄·병점·봉담·향남 권역별 특징",
    desc: "화성시는 동탄을 중심으로 면적이 매우 넓습니다. ‘화성시’만으로는 동선 파악이 어려워 동·읍까지 알려주시는 것이 좋습니다.",
    tags: ["화성시출장마사지", "동탄출장예약", "병점출장안내", "향남출장마사지"],
  },
  {
    slug: "gyeonggi-pyeongtaek-chuljang-local",
    title: "평택 출장마사지 — 송탄·비전·안중·서정리 일대",
    desc: "평택은 미군 기지·항만·산단이 있어 이동 패턴이 복잡합니다. 출장마사지는 예약 시 대략적 위치(읍·면·동)를 알려주시면 도착 예상이 정확해집니다.",
    tags: ["평택시출장마사지", "송탄출장예약", "비전동출장안내", "안중출장마사지"],
  },
  {
    slug: "gyeonggi-uijeongbu-chuljang-local",
    title: "의정부 출장마사지 — 회룡·가능·의정부역 일대",
    desc: "의정부는 수도권 북부 거점으로 아파트 밀집 지역이 많습니다. 출장 이용 시 공동현관·주차 정보를 미리 알려주시면 방문이 매끄럽습니다.",
    tags: ["의정부출장마사지", "회룡출장예약", "가능동출장안내", "의정부역인근출장"],
  },
  {
    slug: "gyeonggi-siheung-chuljang-local",
    title: "시흥 출장마사지 — 배곧·정왕·오이도 인근 (시흥시 전역)",
    desc: "시흥은 배곧 신도시와 산단 인근이 함께 있습니다. 바다 인접 지역은 교통 상황에 따라 도착이 달라질 수 있습니다.",
    tags: ["시흥시출장마사지", "배곧신도시출장", "정왕동출장예약", "오이도인근출장"],
  },
  {
    slug: "gyeonggi-paju-chuljang-local",
    title: "파주 출장마사지 — 운정·금촌·일산 인접 권역",
    desc: "파주는 신도시와 농촌이 섞여 있습니다. 운정·금촌 등 생활권에 따라 이동 시간이 크게 달라집니다.",
    tags: ["파주시출장마사지", "운정출장예약", "금촌출장안내", "교하출장마사지"],
  },
  {
    slug: "gyeonggi-gimpo-chuljang-local",
    title: "김포 출장마사지 — 장기·구래·풍무 일대",
    desc: "김포는 공항 접근과 신도시 확장이 두드러집니다. 출장마사지 예약 시 단지명·동 이름을 함께 적어주시면 찾아가기 쉽습니다.",
    tags: ["김포시출장마사지", "장기동출장예약", "구래동출장안내", "김포한강출장"],
  },
  {
    slug: "gyeonggi-gwangmyeong-chuljang-local",
    title: "광명 출장마사지 — 철산·광명역·소하동 일대",
    desc: "광명시는 면적은 작지만 밀도가 높습니다. 아파트 단지가 많아 공동현관 안내가 중요합니다.",
    tags: ["광명시출장마사지", "철산출장예약", "광명역인근출장", "소하동출장안내"],
  },
  {
    slug: "gyeonggi-hanam-chuljang-local",
    title: "하남 출장마사지 — 미사·위례·감일 신도시 중심",
    desc: "하남은 미사·위례 등 대규모 단지가 많습니다. 단지 규모가 커서 동·호수·입구 안내가 예약 시 도움이 됩니다.",
    tags: ["하남시출장마사지", "미사출장예약", "위례출장안내", "감일동출장마사지"],
  },
  {
    slug: "gyeonggi-osan-chuljang-local",
    title: "오산 출장마사지 — 세마·초평·오산역 인근",
    desc: "오산시는 경부선·수인선이 지나 직주근접 수요가 있습니다. 출장마사지는 퇴근 후 시간대 예약이 많은 편입니다.",
    tags: ["오산시출장마사지", "세마동출장예약", "오산역인근출장", "초평출장안내"],
  },
  {
    slug: "gyeonggi-icheon-chuljang-local",
    title: "이천 출장마사지 — 부발·모가·장호원 일대",
    desc: "이천은 도농복합으로 읍·면 이동이 길어질 수 있습니다. 출장 예약 시 읍·면·동을 구체적으로 알려주세요.",
    tags: ["이천시출장마사지", "부발읍출장예약", "장호원출장안내", "이천시청인근출장"],
  },
  {
    slug: "gyeonggi-anseong-chuljang-local",
    title: "안성 출장마사지 — 공도·안성시내·대덕면 권역",
    desc: "안성은 공단·물류 인구가 있어 주간·야간 이용 패턴이 다양합니다. 출장마사지는 공간과 수건만 준비되면 진행 가능합니다.",
    tags: ["안성시출장마사지", "공도읍출장예약", "안성시내출장", "대덕면출장안내"],
  },
  {
    slug: "gyeonggi-guri-chuljang-local",
    title: "구리 출장마사지 — 갈매·수택·아차산 인근",
    desc: "구리시는 서울 접경으로 통근 인구가 많습니다. 퇴근 후 저녁 시간대 예약이 집중되는 경향이 있습니다.",
    tags: ["구리시출장마사지", "갈매출장예약", "수택동출장안내", "토평동출장마사지"],
  },
  {
    slug: "gyeonggi-uiwang-chuljang-local",
    title: "의왕 출장마사지 — 왕곡·포일·청계동 일대",
    desc: "의왕은 산지와 단지가 섞여 있습니다. 배방·학의동 등 동별 도로 상황이 달라 예약 시 동 이름을 알려주시면 좋습니다.",
    tags: ["의왕시출장마사지", "왕곡출장예약", "포일동출장안내", "청계출장마사지"],
  },
  {
    slug: "gyeonggi-yangju-chuljang-local",
    title: "양주 출장마사지 — 옥정·덕정·회천 일대",
    desc: "양주는 옥정 등 신도시 성장이 빠릅니다. 출장마사지 이용 시 신축 단지는 현관·주차 안내를 미리 적어 두면 방문이 빠릅니다.",
    tags: ["양주시출장마사지", "옥정출장예약", "덕정역인근출장", "회천출장안내"],
  },
  {
    slug: "gyeonggi-gwangju-gg-chuljang-local",
    title: "경기 광주 출장마사지 — 경안·오포·초월 일대",
    desc: "경기도 광주시는 성남·용인과 인접해 주거 단지가 넓게 퍼져 있습니다. 동남부권 출장 시 위치를 구체적으로 알려주세요.",
    tags: ["경기광주출장마사지", "경안동출장예약", "오포읍출장안내", "초월읍출장마사지"],
  },
  {
    slug: "gyeonggi-yeoju-chuljang-local",
    title: "여주 출장마사지 — 흥천·가남·북내 일대",
    desc: "여주는 농업·물류와 주거가 섞인 지역입니다. 읍·면 방문 시 이동 시간을 넉넉히 잡는 것이 좋습니다.",
    tags: ["여주시출장마사지", "흥천출장예약", "가남출장안내", "여주시청인근출장"],
  },
  {
    slug: "gyeonggi-pocheon-chuljang-local",
    title: "포천 출장마사지 — 소흘·선단·가산 일대",
    desc: "포천은 산간 지역이 넓어 동선에 시간이 걸릴 수 있습니다. 출장마사지 예약 시 도로 상황을 고려해 시간을 잡아주세요.",
    tags: ["포천시출장마사지", "소흘읍출장예약", "선단출장안내", "포천시내출장"],
  },
  {
    slug: "gyeonggi-gwacheon-chuljang-local",
    title: "과천 출장마사지 — 중앙·별양·문원동 일대",
    desc: "과천은 면적이 작고 아파트 밀도가 높습니다. 출장마사지는 단지 내 동선만 안내되면 방문이 수월합니다.",
    tags: ["과천시출장마사지", "중앙동출장예약", "별양동출장안내", "문원출장마사지"],
  },
  {
    slug: "gyeonggi-gunpo-chuljang-local",
    title: "군포 출장마사지 — 산본·금정·당동 일대",
    desc: "군포시는 산본 중심 상권과 주거가 밀집해 있습니다. 출장 예약은 저녁 시간대가 많으니 미리 문의하시면 좋습니다.",
    tags: ["군포시출장마사지", "산본출장예약", "금정동출장안내", "당동출장마사지"],
  },
  {
    slug: "gyeonggi-dongducheon-chuljang-local",
    title: "동두천 출장마사지 — 생연·보산·송내동 일대",
    desc: "동두천은 의정부·연천과 연결되는 북부 거점입니다. 출장마사지 이용 시 군부대 인근 거주는 예약 시 말씀해 주시면 안내에 도움이 됩니다.",
    tags: ["동두천출장마사지", "생연출장예약", "보산동출장안내", "송내출장마사지"],
  },
  {
    slug: "gyeonggi-gapyeong-chuljang-local",
    title: "가평 출장마사지 — 가평읍·청평·남이섬 인근",
    desc: "가평군은 관광지와 주거가 섞여 있습니다. 산간·호반 도로는 시간대에 따라 이동이 달라질 수 있습니다.",
    tags: ["가평군출장마사지", "가평읍출장예약", "청평출장안내", "남이섬인근출장"],
  },
  {
    slug: "gyeonggi-yangpyeong-chuljang-local",
    title: "양평 출장마사지 — 양평읍·용문·옥천 일대",
    desc: "양평군은 읍·면 거리가 멀 수 있습니다. 출장마사지 예약 시 최대한 구체적인 주소를 알려주시면 도착 예상이 정확해집니다.",
    tags: ["양평군출장마사지", "양평읍출장예약", "용문출장안내", "옥천면출장마사지"],
  },
  {
    slug: "gyeonggi-yeoncheon-chuljang-local",
    title: "연천 출장마사지 — 연천읍·전곡·청산 일대",
    desc: "연천은 최북단이라 이동 시간이 길어질 수 있습니다. 출장 가능 여부는 문의 시 일정과 함께 확인하는 것이 좋습니다.",
    tags: ["연천군출장마사지", "연천읍출장예약", "전곡출장안내", "청산면출장마사지"],
  },
];

// Remove duplicate slug if any
const slugs = new Set();
for (const p of posts) {
  if (slugs.has(p.slug)) throw new Error(`dup slug ${p.slug}`);
  slugs.add(p.slug);
}

let out = `/**
 * 지역별 출장마사지 안내 블로그 — 키워드는 글마다 유일하게 설정
 * 본문: region-sections-by-slug + region-expand-5000 (각 글 본문 5000자 이상) · npm run generate:region-blog
 */
import type { BlogPost } from "./blog-types";

export const regionDetailBlogPosts: BlogPost[] = [
`;

for (const p of posts) {
  const sec = getExpandedSectionsForPost(p);
  out += `  {
    slug: "${p.slug}",
    title: ${JSON.stringify(p.title)},
    description: ${JSON.stringify(p.desc)},
    datePublished: "2026-04-04",
    dateModified: "2026-04-05",
    category: "지역 안내",
    tags: ${JSON.stringify(p.tags)},
    showHubLinks: true,
    sections: [
`;
  for (const s of sec) {
    out += `      {
        title: ${JSON.stringify(s.title)},
        paragraphs: [
`;
    for (const para of s.paragraphs) {
      out += `          ${JSON.stringify(para)},
`;
    }
    out += `        ],
      },
`;
  }
  out += `    ],
  },
`;
}

out += `];
`;

fs.writeFileSync(outPath, out, "utf8");
console.log("Wrote", outPath, "posts:", posts.length);
