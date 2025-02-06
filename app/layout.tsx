import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cabinet Assurance",
  description: "Cabinet de courtage en assurance",
  icons: {
    icon: "/images/logo.jpg",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Cabinet Assurance",
    description: "Cabinet de courtage en assurance",
    images: ["/images/logo.jpg"],
    type: "website",
  },
};
