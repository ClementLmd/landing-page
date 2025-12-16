"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { href: "/v2", label: "Le Cabinet" },
    { href: "/v2/professionnel", label: "Assurance Professionnel" },
    { href: "/v2/particulier", label: "Assurance Particulier" },
    { href: "/v2/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/v2"
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <img
              src="/images/logo.jpg"
              alt="JP Insurance Logo"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-600/50"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon
              icon={menuOpen ? faX : faBars}
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-primary-600 text-white shadow-lg"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

