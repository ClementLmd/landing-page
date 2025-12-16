"use client";

import { usePathname } from "next/navigation";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isV2Route = pathname?.startsWith("/v2");

  // Si on est sur une route v2, on ne charge pas le layout racine
  // car le layout v2 s'en occupe
  if (isV2Route) {
    return (
      <html lang="fr">
        <body>{children}</body>
      </html>
    );
  }

  return (
    <html lang="fr">
      <body>
        <div className="layout">
          <Navbar />
          <div className="content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
