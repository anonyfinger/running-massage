This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 도메인 설정

sitemap.xml, robots.txt, Open Graph, 구조화데이터 등에 사용되는 사이트 URL을 환경 변수로 설정할 수 있습니다.

```bash
# .env.local 생성 (프로젝트 루트)
NEXT_PUBLIC_SITE_URL=https://msg-trip.com
```

- 배포 시: Vercel/Netlify 등 플랫폼의 환경 변수에 `NEXT_PUBLIC_SITE_URL` 추가
- 미설정 시: `https://msg-trip.com` 기본값 사용
- 참고: `.env.example` 파일 참고

## Google Search Console 설정

1. **소유권 확인**
   - [Search Console](https://search.google.com/search-console) → 속성 추가 → URL 접두어 입력
   - HTML 파일 방식: `public/google04e4066736e48366.html` 이미 포함됨 (배포 후 `https://msg-trip.com/google04e4066736e48366.html` 접근 가능)
   - 메타태그 방식: `.env.local`에 `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=검증코드` 설정

2. **사이트맵 제출**
   - Search Console → 색인 생성 → Sitemaps → `https://msg-trip.com/sitemap.xml` 입력 후 제출

3. **robots.txt 확인**
   - `https://msg-trip.com/robots.txt` 접속 시 sitemap 경로가 포함되어 있는지 확인

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
