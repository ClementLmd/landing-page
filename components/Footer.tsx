"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <footer
      className={`py-6 text-muted text-[13px] border-t border-line ${isHome ? "pb-24 lg:pb-6" : ""}`}
    >
      <div className="container-custom px-4 text-center">
        © {new Date().getFullYear()} JP Insurance — Courtier en assurance —
        ORIAS n° 24000001 — Sous le contrôle de l&apos;ACPR •{" "}
        <Link href="/contact" className="text-ink hover:underline">
          Contact
        </Link>{" "}
        •{" "}
        <Link href="/contact#mentions-legales" className="text-ink hover:underline">
          Mentions légales
        </Link>{" "}
        •{" "}
        <a href="tel:+33684853528" className="text-ink hover:underline">
          +33 6 84 85 35 28
        </a>
      </div>
    </footer>
  );
}
