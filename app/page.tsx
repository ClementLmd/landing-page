import { Metadata } from "next";
import Home from "../components/Home";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Cabinet Assurance",
  description: "Cabinet de courtage en assurance",
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Cabinet Assurance",
    description: "Cabinet de courtage en assurance",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "JP Insurance Logo",
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return <Home />;
}
