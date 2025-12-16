"use client";

import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import "../styles/globals.css";

export default function RootLayout({
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
