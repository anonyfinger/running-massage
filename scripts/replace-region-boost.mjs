/**
 * blog-posts-region-detail.ts 내 「OO 안내 보강 — 추가로 읽어두면 좋은 내용」
 * paragraphs 배열을 regionBoostParagraphs("OO") 호출로 치환
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "../src/lib/blog-posts-region-detail.ts");

const MARKER = " 안내 보강 — 추가로 읽어두면 좋은 내용";

let s = fs.readFileSync(filePath, "utf8");

const re = /title: "([^"]+)",\s*paragraphs: \[[\s\S]*?\n        \],/g;

let count = 0;
s = s.replace(re, (full, title) => {
  if (!title.endsWith(MARKER)) return full;
  const area = title.slice(0, -MARKER.length);
  count += 1;
  return `title: "${title}",\n        paragraphs: regionBoostParagraphs(${JSON.stringify(area)}),`;
});

if (!s.includes('import { regionBoostParagraphs }')) {
  s = s.replace(
    /import type \{ BlogPost \} from "\.\/blog-types";/,
    `import type { BlogPost } from "./blog-types";\nimport { regionBoostParagraphs } from "./region-blog-boost";`,
  );
}

fs.writeFileSync(filePath, s);
console.log(`Replaced ${count} region boost sections.`);
