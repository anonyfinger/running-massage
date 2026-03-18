#!/usr/bin/env node
/**
 * post_img 폴더 JPG → WebP 변환 (선택적 사용)
 * Next.js Image가 런타임 최적화하므로 필수는 아님
 */
const fs = require("fs");
const path = require("path");

async function optimize() {
  try {
    const sharp = require("sharp");
    const dir = path.join(process.cwd(), "public/post_img");
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".jpg"));
    const webpDir = path.join(dir, "webp");
    if (!fs.existsSync(webpDir)) fs.mkdirSync(webpDir, { recursive: true });

    for (const file of files) {
      const src = path.join(dir, file);
      const dest = path.join(webpDir, file.replace(".jpg", ".webp"));
      await sharp(src).webp({ quality: 75 }).toFile(dest);
      console.log("✓", file, "→", path.basename(dest));
    }
    console.log("\nWebP 생성 완료. 사용 시 src를 /post_img/webp/xxx.webp 로 변경.");
  } catch (e) {
    console.warn("sharp 미설치 또는 오류:", e.message);
  }
}

optimize();
