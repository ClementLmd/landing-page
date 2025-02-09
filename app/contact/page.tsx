import ContactPage from "./contactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - JP Insurance",
  description: "Informations de contact du cabinet JP Insurance",
  icons: {
    icon: "/images/logo.jpg",
  },
  openGraph: {
    title: "Contact - JP Insurance",
    description: "Informations de contact du cabinet JP Insurance",
    images: ["/images/logo.jpg"],
  },
};

export default ContactPage;
