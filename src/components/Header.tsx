"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig, navGroups } from "@/lib/site-config";

export function Header() {
  const { siteName } = siteConfig;
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  function closeAll() {
    setMobileOpen(false);
  }

  return (
    <header className={`header${mobileOpen ? " header--open" : ""}`}>
      <div className="header__inner">
        <div className="header__row">
          <Link
            href="/"
            className="header__brand"
            aria-label={`${siteName}, 홈으로`}
            onClick={closeAll}
          >
            <span className="header__brand-name">{siteName}</span>
            {(pathname === "/massage" || pathname?.startsWith("/regions/")) && (
              <span className="header__brand-context" aria-hidden="true">
                {pathname === "/massage" ? "· 출장마사지" : "· 지역안내"}
              </span>
            )}
          </Link>

          <button
            type="button"
            className="header__toggle"
            aria-expanded={mobileOpen}
            aria-controls="header-nav"
            aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span className="header__toggle-bar" />
            <span className="header__toggle-bar" />
            <span className="header__toggle-bar" />
          </button>

          <nav id="header-nav" className="header__nav" aria-label="메인 메뉴">
            {navGroups.map(({ label, href }) => {
              const isActive = pathname?.startsWith(href) ?? false;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`header__nav-link${isActive ? " header__nav-link--active" : ""}`}
                  onClick={closeAll}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/reserve"
              className="header__cta"
              aria-label="예약 가능 여부 확인"
              onClick={closeAll}
            >
              예약문의
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
