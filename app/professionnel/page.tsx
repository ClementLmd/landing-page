import ProfessionnelPage from "./professionnelPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assurance du Professionnel - JP Insurance",
  description: "Découvrez nos solutions d'assurance pour les professionnels.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Assurance du Professionnel - JP Insurance",
    description: "Découvrez nos solutions d'assurance pour les professionnels.",
    images: ["/images/logo.jpg"],
  },
};

export default ProfessionnelPage;
