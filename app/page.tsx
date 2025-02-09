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
    icon: "/images/logo.jpg",
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

export default function Page() {
  return <Home />;
}
