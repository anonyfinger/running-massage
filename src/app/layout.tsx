import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FireflyCanvas } from "@/components/FireflyCanvas";
import "./globals.scss";

const { siteUrl, siteName, metaTitle, metaDescription, verification } =
  siteConfig;
// canonical·og:url은 각 페이지가 자체 path로 설정. 레이아웃에서 고정하면
// /massage, /regions/yeongdeungpo/massage 등 모든 페이지가 홈 canonical을 상속해 색인되지 않음.
const verificationMeta: Record<string, string> = {};
if (verification.google)
  verificationMeta["google-site-verification"] = verification.google;
if (verification.naver)
  verificationMeta["naver-site-verification"] = verification.naver;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: metaTitle,
    template: `%s | ${siteName}`,
  },
  description: metaDescription,
  applicationName: siteName,
  referrer: "origin-when-cross-origin",
  keywords: [
    "출장달리기",
    "출장마사지",
    "영등포 출장마사지",
    "출장 마사지",
    "방문 마사지",
    "홈케어 마사지",
    "출장 홈케어",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: Object.keys(verificationMeta).length
    ? verificationMeta
    : undefined,
  formatDetection: { telephone: false, email: false, address: false },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "any" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

/**
 * 문구·메타 검수 단계: 프리렌더 HTML이 Vercel 엣지에 `age`만큼 남는 현상을 줄이기 위해
 * 페이지를 매 요청 동적 렌더로 둔다(`next.config`의 `no-store`만으로는 정적 HTML이 덮어쓸 수 있음).
 * 구조·카피가 안정화되면 `3600` 등 ISR 초로 바꿔 엣지·함수 비용을 절약하는 편이 좋다.
 */
export const revalidate = 0;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head></head>
      <body>
        <a href="#main-content" className="skip-link">
          본문으로 건너뛰기
        </a>
        <div className="wrapper">
          <FireflyCanvas />
          <Header />
          <main id="main-content" className="main" aria-label="메인 콘텐츠">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
