import Link from "next/link";
import { siteConfig, sectionAnchors } from "@/lib/site-config";
import { CtaButtonsFromConfig } from "@/components/CtaButtons";

const SERVICE_LINKS = [
  { label: "출장마사지", href: "/massage" },
  { label: "출장안마", href: "/anma" },
  { label: "출장스웨디시", href: "/swedish" },
  { label: "지역별 안내", href: "/regions" },
] as const;

const REGION_LINKS = [
  { label: "서울 출장마사지", href: "/regions/seoul" },
  { label: "강남 출장마사지", href: "/regions/gangnam" },
  { label: "강동구 출장마사지", href: "/regions/gangdong" },
  { label: "강서구 출장마사지", href: "/regions/gangseo" },
  { label: "인천 출장마사지", href: "/regions/incheon" },
  { label: "수원 출장마사지", href: "/regions/suwon" },
  { label: "부천 출장마사지", href: "/regions/bucheon" },
] as const;

const GUIDE_LINKS = [
  { label: "24시간 출장마사지", href: "/regions/common/allnight" },
  { label: "예약 가이드", href: "/regions/common/reservation-guide" },
  { label: "블로그", href: "/blog" },
] as const;

export function Footer() {
  const { siteName, companyName, nap } = siteConfig;
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
                  <span className="footer__tel-label">{companyName}·출장안마</span>
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

        <p className="footer__copy">
          <span>© {new Date().getFullYear()} {siteName}. All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}
