#!/usr/bin/env node
/**
 * 히어로 배경 이미지 최적화 — WebP 변환, 1200px 리사이즈
 * 실행: node scripts/optimize-images.mjs
 */
import sharp from "sharp";
import { mkdir, stat } from "fs/promises";
import { join, extname } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");
const HERO_DIR = join(PUBLIC, "hero");
const MAX_WIDTH = 1200;
const WEBP_QUALITY = 80;

const HERO_FILES = [
  "파주유흥주점.jpg",
  "파주노래방.jpg",
  "파주가라오케.jpg",
  "파주하이퍼블릭.jpg",
  "파주퍼블릭.jpg",
  "파주아가씨.jpg",
  "파주아가씨사진.jpg",
  "파주유흥.jpg",
];

async function main() {
  await mkdir(HERO_DIR, { recursive: true });

  for (const file of HERO_FILES) {
    const src = join(PUBLIC, file);
    const base = file.replace(extname(file), "");
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
