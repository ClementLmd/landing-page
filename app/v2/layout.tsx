"use client";

import Footer from "../../components/v2/Footer";
import Navbar from "../../components/v2/NavBar";
import "../../styles/globals-v2.css";

export default function V2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
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

