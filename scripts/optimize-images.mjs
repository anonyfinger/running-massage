#!/usr/bin/env node
/**
 * 히어로 배경 이미지 최적화 — WebP 변환, 1200px 리사이즈
 * 실행: node scripts/optimize-images.mjs
 */
import sharp from "sharp";
import { mkdir, stat } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");
const HERO_DIR = join(PUBLIC, "hero");
const MAX_WIDTH = 1200;
const WEBP_QUALITY = 80;

// 출장마사지·출장안마·출장스웨디시 테마 — 원본 JPG는 public/에 두고 변환 시 새 이름 사용
const HERO_SOURCES = [
  { src: "파주유흥주점.jpg", dest: "출장마사지-1" },
  { src: "파주노래방.jpg", dest: "출장마사지-2" },
  { src: "파주가라오케.jpg", dest: "출장안마-1" },
  { src: "파주하이퍼블릭.jpg", dest: "출장스웨디시-1" },
  { src: "파주퍼블릭.jpg", dest: "출장스웨디시-2" },
  { src: "파주아가씨.jpg", dest: "홈케어마사지-1" },
  { src: "파주아가씨사진.jpg", dest: "홈케어마사지-2" },
  { src: "파주유흥.jpg", dest: "방문마사지" },
];

async function main() {
  await mkdir(HERO_DIR, { recursive: true });

  for (const { src: file, dest: base } of HERO_SOURCES) {
    const src = join(PUBLIC, file);
    const dest = join(HERO_DIR, `${base}.webp`);

    try {
      await sharp(src)
        .resize(MAX_WIDTH, null, { withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(dest);
      const { size } = await stat(dest);
      console.log(`✓ ${file} → hero/${base}.webp (${(size / 1024).toFixed(1)} KB)`);
    } catch (e) {
      console.error(`✗ ${file}:`, e.message);
    }
  }

  console.log("\n완료. SCSS에서 /hero/*.webp 경로 사용하세요.");
}

main();
