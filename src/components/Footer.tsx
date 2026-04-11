import Link from "next/link";
import { siteConfig, sectionAnchors } from "@/lib/site-config";
import { CtaButtonsFromConfig } from "@/components/CtaButtons";

const SERVICE_LINKS = [
  { label: "영등포 출장마사지", href: "/regions/yeongdeungpo/massage" },
  { label: "출장마사지", href: "/massage" },
  { label: "예약 가이드", href: "/regions/common/reservation-guide" },
  { label: "24시간 출장마사지", href: "/regions/common/allnight" },
] as const;

/** 대표 지역 → /regions/{지역}/massage (허브보다 상세 URL로 신호 집중) */
const REGION_LINKS = [
  { label: "영등포 출장마사지", href: "/regions/yeongdeungpo/massage" },
  { label: "출장마사지 안내", href: "/massage" },
  { label: "출장마사지 예약 가이드", href: "/regions/common/reservation-guide" },
  { label: "24시간 출장마사지 안내", href: "/regions/common/allnight" },
] as const;

const GUIDE_LINKS = [
  { label: "24시간 출장마사지", href: "/regions/common/allnight" },
  { label: "예약 가이드", href: "/regions/common/reservation-guide" },
  { label: "영등포 출장마사지 안내", href: "/regions/yeongdeungpo/massage" },
] as const;

const LEGAL_LINKS = [
  { label: "회사 소개", href: "/about" },
  { label: "개인정보처리방침", href: "/privacy" },
  { label: "이용약관", href: "/terms" },
] as const;

export function Footer() {
  const { siteName, nap } = siteConfig;
  const fullAddress = [
    nap.address.streetAddress,
    nap.address.addressLocality,
    nap.address.addressRegion,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <footer id="contact" className="footer">
      <div className="footer__inner">
        <div className="footer__row">
          <div>
            <p className="footer__brand">{siteName}</p>
            <div className="footer__contact">
              {nap.telephone && (
                <a href={`tel:${nap.telephone.replace(/\s/g, "")}`} className="footer__tel-item">
                  <span className="footer__tel-label">
                    {siteName} · 예약·문의
                  </span>
                  <span className="footer__tel-num">{nap.telephone}</span>
                </a>
              )}
              {fullAddress && <address>{fullAddress}</address>}
            </div>
            <CtaButtonsFromConfig />
          </div>

          <nav className="footer__nav footer__nav--pages" aria-label="서비스 메뉴">
            <p className="footer__nav-title">서비스</p>
            {SERVICE_LINKS.map(({ label, href }) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>

          <nav className="footer__nav footer__nav--regions" aria-label="지역별 안내">
            <p className="footer__nav-title">지역별 안내</p>
            {REGION_LINKS.map(({ label, href }) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>

          <nav className="footer__nav footer__nav--guide" aria-label="이용 가이드">
            <p className="footer__nav-title">이용 안내</p>
            {GUIDE_LINKS.map(({ label, href }) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
            {sectionAnchors.map(({ id, label }) => (
              <a key={id} href={`/#${id}`}>
                {label}
              </a>
            ))}
          </nav>
        </div>

        <nav className="footer__legal" aria-label="법적 고지">
          {LEGAL_LINKS.map(({ label, href }) => (
            <Link key={href} href={href} className="footer__legal-link">
              {label}
            </Link>
          ))}
        </nav>

        <p className="footer__copy">
          <span>© {new Date().getFullYear()} {siteName}. All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}
