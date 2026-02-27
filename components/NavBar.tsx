"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const HEADER_OFFSET_PX = 112;
const CONTACT_OFFSET_PX = 140; /* extra offset so form is visible */

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = isHome
    ? [
        { href: "#cabinet", label: "Le cabinet" },
        { href: "#solutions", label: "Solutions" },
        { href: "#process", label: "Méthode" },
      ]
    : [
        { href: "/#cabinet", label: "Le cabinet" },
        { href: "/#solutions", label: "Solutions" },
        { href: "/#process", label: "Méthode" },
      ];

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const id = href.replace(/^.*#/, "");
    if (!id || !isHome) return;
    e.preventDefault();
    closeMenu();
    requestAnimationFrame(() => {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const offset =
            id === "contact" ? CONTACT_OFFSET_PX : HEADER_OFFSET_PX;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        }
      }, 150);
    });
  };

  return (
    <nav className="sticky top-0 z-10 bg-white/82 backdrop-blur-md border-b border-line saturate-[1.4]">
      <div className="container-custom px-4">
        <div className="flex items-center justify-between py-3 gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 min-w-[200px] lg:min-w-[240px]"
            onClick={closeMenu}
          >
            <img
              src="/images/logo.jpeg"
              alt="JP Insurance"
              className="h-10 w-auto block"
            />
            <div>
              <div className="font-bold tracking-wider text-[13px] text-navy">
                JP INSURANCE
              </div>
              <div className="text-xs text-muted mt-0.5">
                Courtage en assurance • France entière
              </div>
            </div>
          </Link>

          <div className="hidden md:flex gap-4 items-center text-muted text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="no-underline hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex gap-2 items-center">
            <a
              href="tel:+33684853528"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[14px] font-bold text-sm bg-panel border border-line hover:shadow-card hover:-translate-y-px transition-all"
              title="Appeler"
            >
              📞 Appeler
            </a>
            <a
              href={isHome ? "#contact" : "/#contact"}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[14px] font-semibold text-sm bg-navy text-white border border-transparent hover:bg-navy-light hover:-translate-y-px hover:shadow-card transition-all"
            >
              📅 Prendre RDV
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-ink hover:bg-panel transition-colors"
            aria-label="Menu"
          >
            <FontAwesomeIcon
              icon={menuOpen ? faX : faBars}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-line ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="block py-3 rounded-lg text-base font-medium text-ink hover:bg-panel"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+33684853528"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 py-3 rounded-lg text-base font-medium text-ink bg-panel hover:bg-line/50 transition-colors"
          >
            📞 Appeler
          </a>
          <a
            href={isHome ? "#contact" : "/#contact"}
            onClick={(e) =>
              handleAnchorClick(e, isHome ? "#contact" : "/#contact")
            }
            className="block py-3 rounded-lg text-base font-semibold bg-navy text-white text-center"
          >
            📅 Prendre RDV
          </a>
        </div>
      </div>
    </nav>
  );
}
