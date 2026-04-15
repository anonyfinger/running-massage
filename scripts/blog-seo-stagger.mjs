/**
 * 지역 상세 블로그: 발행일 일괄 분산 + 제목 패턴 5종 순환
 * (한 번 실행 후에는 date 패턴이 바뀌므로 재실행 시 스크립트 수정 필요)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function fmt(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** @param {string} t @param {number} i */
function transformRegionTitle(t, i) {
  const mod = i % 5;
  if (mod === 0) return t;
  const parts = t.split(" — ");
  if (parts.length >= 2) {
    const a = parts[0];
    const b = parts.slice(1).join(" — ");
    if (mod === 1) return `[예약·동선] ${a} — ${b}`;
    if (mod === 2) return `${b} — ${a}`;
    if (mod === 3) return `${a.replace(/출장마사지/g, "방문 마사지")} — ${b}`;
    if (mod === 4) {
      const short = a.replace(/ 출장마사지$/, "").trim();
      return `동선·시간 잡기 — ${b} (${short})`;
    }
  }
  return t;
}

function diversifyRegionTitles() {
  const file = path.join(root, "src/lib/blog-posts-region-detail.ts");
  let text = fs.readFileSync(file, "utf8");
  const re = /(    slug: "[^"]+",\n)(    title: ")([^"]+)(")/g;
  let idx = 0;
  text = text.replace(re, (_, slugLine, titlePrefix, title, titleSuffix) => {
    const newTitle = transformRegionTitle(title, idx);
    idx++;
    return `${slugLine}${titlePrefix}${newTitle}${titleSuffix}`;
  });
  if (idx !== 36) throw new Error(`제목 필드 개수 불일치: ${idx} (기대 36)`);
  fs.writeFileSync(file, text);
  console.log("blog-posts-region-detail.ts 제목 패턴 분산:", idx);
}

function staggerRegionDates() {
  const file = path.join(root, "src/lib/blog-posts-region-detail.ts");
  let text = fs.readFileSync(file, "utf8");
  const start = new Date("2026-02-01T12:00:00+09:00");
  let i = 0;
  const pattern =
    /    datePublished: "2026-04-04",\r?\n    dateModified: "2026-04-05",/g;
  text = text.replace(pattern, () => {
    const pub = new Date(start);
    pub.setDate(pub.getDate() + i);
    const mod = new Date(pub);
    mod.setDate(mod.getDate() + 1);
    i++;
    return `    datePublished: "${fmt(pub)}",\n    dateModified: "${fmt(mod)}",`;
  });
  if (i !== 36) {
    throw new Error(
      `지역 블로그 datePublished 블록 개수 불일치: ${i} (기대 36, 이미 분산됐을 수 있음)`,
    );
  }
  fs.writeFileSync(file, text);
  console.log("blog-posts-region-detail.ts 발행일 분산:", i, "건");
}

function staggerKeywordDates() {
  const file = path.join(root, "src/lib/blog-posts-keyword-longtail.ts");
  let text = fs.readFileSync(file, "utf8");
  const start = new Date("2026-03-10T12:00:00+09:00");
  let i = 0;
  const pattern =
    /    datePublished: "2026-04-02",\r?\n    dateModified: "2026-04-02",/g;
  text = text.replace(pattern, () => {
    const pub = new Date(start);
    pub.setDate(pub.getDate() + i);
    const mod = new Date(pub);
    i++;
    return `    datePublished: "${fmt(pub)}",\n    dateModified: "${fmt(mod)}",`;
  });
  if (i !== 10) {
    throw new Error(
      `키워드 롱테일 date 블록 개수 불일치: ${i} (기대 10, 이미 분산됐을 수 있음)`,
    );
  }
  fs.writeFileSync(file, text);
  console.log("blog-posts-keyword-longtail.ts 발행일 분산:", i, "건");
}

diversifyRegionTitles();
staggerRegionDates();
staggerKeywordDates();
console.log("완료.");
