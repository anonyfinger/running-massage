"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent as ReactMouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { siteConfig, navGroups, serviceMenuLinks } from "@/lib/site-config";
import {
  SEOUL_REGIONS_PATH,
  getRegionLandingPath,
  getSeoulRegionLandings,
} from "@/lib/region-landings";

export function Header() {
  const { siteName } = siteConfig;
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [seoulOpen, setSeoulOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const seoulRegions = getSeoulRegionLandings();
  const activeSeoulRegion = seoulRegions.find((region) =>
    pathname?.startsWith(getRegionLandingPath(region.slug)),
  );
  const isSeoulActive =
    pathname === SEOUL_REGIONS_PATH ||
    seoulRegions.some(
      (region) => pathname === getRegionLandingPath(region.slug),
    );
  const isServiceActive = serviceMenuLinks.some(({ href }) =>
    pathname?.startsWith(href),
  );
  const serviceRootLink = serviceMenuLinks[0];
  const serviceDropdownLinks = serviceMenuLinks.slice(1);
  const brandContext = activeSeoulRegion
    ? `· ${activeSeoulRegion.district}`
    : isSeoulActive
      ? "· 서울"
    : isServiceActive
      ? "· 이용안내"
      : null;

  function closeAll() {
    setMobileOpen(false);
    setSeoulOpen(false);
    setServiceOpen(false);
  }

  function handleDropdownMouseLeave(
    event: ReactMouseEvent<HTMLDivElement>,
    closeDropdown: () => void,
  ) {
    closeDropdown();

    const activeElement = document.activeElement;
    if (
      activeElement instanceof HTMLElement &&
      event.currentTarget.contains(activeElement)
    ) {
      activeElement.blur();
    }
  }

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        closeAll();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`header${mobileOpen ? " header--open" : ""}`}
    >
      <div className="header__inner">
        <div className="header__row">
          <Link
            href="/"
            className="header__brand"
            aria-label={`${siteName}, 홈으로`}
            onClick={closeAll}
          >
            <span className="header__brand-name">{siteName}</span>
            {brandContext && (
              <span className="header__brand-context" aria-hidden="true">
                {brandContext}
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
            <div
              className={`header__dropdown${isSeoulActive ? " header__dropdown--active" : ""}${seoulOpen ? " header__dropdown--open" : ""}`}
              onMouseLeave={(event) =>
                handleDropdownMouseLeave(event, () => setSeoulOpen(false))
              }
            >
              <div className="header__dropdown-group">
                <Link
                  href={SEOUL_REGIONS_PATH}
                  className={`header__dropdown-label${pathname === SEOUL_REGIONS_PATH ? " header__dropdown-label--active" : ""}`}
                  onClick={closeAll}
                >
                  서울
                </Link>
                <button
                  type="button"
                  className="header__dropdown-trigger"
                  aria-expanded={seoulOpen}
                  aria-controls="header-dropdown-seoul"
                  aria-label="서울 하위 지역 열기"
                  onClick={() => {
                    setSeoulOpen((prev) => !prev);
                    setServiceOpen(false);
                  }}
                >
                  <svg
                    className="header__dropdown-arrow"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 5.25L7 9.25L11 5.25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div id="header-dropdown-seoul" className="header__dropdown-menu">
                {seoulRegions.map((region) => {
                  const href = getRegionLandingPath(region.slug);
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={region.slug}
                      href={href}
                      className={`header__dropdown-link${isActive ? " header__dropdown-link--active" : ""}`}
                      onClick={closeAll}
                    >
                      {region.district}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div
              className={`header__dropdown${isServiceActive ? " header__dropdown--active" : ""}${serviceOpen ? " header__dropdown--open" : ""}`}
              onMouseLeave={(event) =>
                handleDropdownMouseLeave(event, () => setServiceOpen(false))
              }
            >
              <div className="header__dropdown-group">
                <Link
                  href={serviceRootLink.href}
                  className={`header__dropdown-label${pathname?.startsWith(serviceRootLink.href) ? " header__dropdown-label--active" : ""}`}
                  onClick={closeAll}
                >
                  이용안내
                </Link>
                <button
                  type="button"
                  className="header__dropdown-trigger"
                  aria-expanded={serviceOpen}
                  aria-controls="header-dropdown-service"
                  aria-label="이용안내 하위 메뉴 열기"
                  onClick={() => {
                    setServiceOpen((prev) => !prev);
                    setSeoulOpen(false);
                  }}
                >
                  <svg
                    className="header__dropdown-arrow"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 5.25L7 9.25L11 5.25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                id="header-dropdown-service"
                className="header__dropdown-menu"
              >
                {serviceDropdownLinks.map(({ label, href }) => {
                  const isActive = pathname?.startsWith(href) ?? false;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`header__dropdown-link${isActive ? " header__dropdown-link--active" : ""}`}
                      onClick={closeAll}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
            </div>
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
