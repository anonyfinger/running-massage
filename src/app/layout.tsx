import type { Metadata } from "next";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import { siteConfig } from "@/lib/site-config";
import { createSocialMetadata } from "@/lib/seo-metadata";
import "./globals.scss";

const Header = dynamic(() => import("@/components/Header").then((m) => ({ default: m.Header })), {
  ssr: true,
});

const Footer = dynamic(() => import("@/components/Footer").then((m) => ({ default: m.Footer })), {
  ssr: true,
});

const fontJua = localFont({
  src: "../../Jua-Regular.woff2",
  variable: "--font-jua",
  display: "swap",
});

const {
  siteUrl,
  siteName,
  metaTitle,
  metaDescription,
  verification,
} = siteConfig;
const socialMetadata = createSocialMetadata({
  title: metaTitle,
  description: metaDescription,
  path: "/",
});

const verificationMeta: Record<string, string> = {};
if (verification.google) verificationMeta["google-site-verification"] = verification.google;
if (verification.naver) verificationMeta["naver-site-verification"] = verification.naver;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: metaTitle,
    template: `%s | ${siteName}`,
  },
  description: socialMetadata.description,
  applicationName: siteName,
  referrer: "origin-when-cross-origin",
  keywords: ["출장마사지", "출장안마", "출장스웨디시", "출장 마사지", "출장 안마", "홈케어 마사지", "방문 마사지"],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: socialMetadata.alternates,
  openGraph: socialMetadata.openGraph,
  twitter: socialMetadata.twitter,
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
  verification: Object.keys(verificationMeta).length ? verificationMeta : undefined,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={fontJua.variable}>
        <a href="#main-content" className="skip-link">본문으로 건너뛰기</a>
        <div className="wrapper">
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
