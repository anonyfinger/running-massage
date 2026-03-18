"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { siteConfig, navGroups } from "@/lib/site-config";

export function Header() {
  const { siteName } = siteConfig;
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  function closeAll() {
    setMobileOpen(false);
    setOpenDropdown(null);
  }

  function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    closeAll();
    const el = document.getElementById(id);
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;
    el?.scrollIntoView({ behavior: isMobile ? "auto" : "smooth" });
  }

  function toggleDropdown(key: string) {
    setOpenDropdown((prev) => (prev === key ? null : key));
  }

  useEffect(() => {
    if (!openDropdown) return;
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openDropdown]);

  function handleDropdownMouseOut(e: React.MouseEvent) {
    if (!openDropdown) return;
    const related = e.relatedTarget as Node | null;
    if (!related || !dropdownRef.current?.contains(related)) {
      setOpenDropdown(null);
    }
  }

  return (
    <header className={`header${mobileOpen ? " header--open" : ""}`}>
      {openDropdown && (
        <div
          className="header__dropdown-backdrop"
          aria-hidden="true"
          onClick={() => setOpenDropdown(null)}
          onPointerEnter={() => setOpenDropdown(null)}
        />
      )}
      <div className="header__inner">
        <div className="header__row">
          <Link href="/" className="header__brand" onClick={closeAll}>
            {pathname === "/massage"
              ? "출장마사지"
              : pathname === "/anma"
                ? "출장안마"
                : pathname === "/swedish"
                  ? "출장스웨디시"
                  : siteName}
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
            {navGroups
              .filter((group) => {
                // 홈페이지 전용 섹션(소개, 이용안내, FAQ, 예약문의)은 홈에서만 표시
                if (pathname !== "/") {
                  if (group.type === "link") return false;
                  if (group.type === "dropdown") return false;
                }
                return true;
              })
              .map((group) => {
                if (group.type === "route") {
                  const isActive = pathname?.startsWith(group.href);
                  return (
                    <Link
                      key={group.href}
                      href={group.href}
                      className={`header__nav-link${isActive ? " header__nav-link--active" : ""}`}
                      onClick={closeAll}
                    >
                      {group.label}
                    </Link>
                  );
                }
                if (group.type === "link") {
                  return (
                    <a
                      key={group.id}
                      href={`#${group.id}`}
                      className="header__nav-link"
                      onClick={(e) => handleAnchorClick(e, group.id)}
                    >
                      {group.label}
                    </a>
                  );
                }

                const isOpen = openDropdown === group.label;
                return (
                  <div
                    key={group.label}
                    ref={isOpen ? dropdownRef : undefined}
                    className={`header__dropdown${isOpen ? " header__dropdown--open" : ""}`}
                    onMouseOut={isOpen ? handleDropdownMouseOut : undefined}
                  >
                    <button
                      type="button"
                      className="header__dropdown-trigger"
                      aria-expanded={isOpen}
                      aria-haspopup="menu"
                      onClick={() => toggleDropdown(group.label)}
                    >
                      {group.label}
                      <svg
                        className="header__dropdown-arrow"
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 1l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div className="header__dropdown-menu" role="menu">
                      {group.items.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          role="menuitem"
                          className="header__dropdown-link"
                          onClick={(e) => handleAnchorClick(e, item.id)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            {pathname === "/" ? (
              <a
                href="#contact"
                className="header__cta"
                aria-label="연결하기"
                onClick={(e) => handleAnchorClick(e, "contact")}
              >
                연결하기
              </a>
            ) : (
              <Link
                href="/#contact"
                className="header__cta"
                aria-label="연결하기"
                onClick={closeAll}
              >
                연결하기
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
