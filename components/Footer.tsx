import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 pb-24 lg:pb-6 text-muted text-[13px] border-t border-line">
      <div className="container-custom px-4">
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
