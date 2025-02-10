import ContactPage from "./contactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - JP Insurance",
  description: "Informations de contact du cabinet JP Insurance",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Contact - JP Insurance",
    description: "Informations de contact du cabinet JP Insurance",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "JP Insurance Logo",
      },
    ],
  },
};

export default ContactPage;
