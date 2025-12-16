import { Metadata } from "next";
import Home from "../../components/v2/Home";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "JP Insurance - Version 2",
  description: "Cabinet de courtage en assurance",
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "JP Insurance",
    description: "Cabinet de courtage en assurance",
    images: [
      {
        url: "/favicon.png",
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

