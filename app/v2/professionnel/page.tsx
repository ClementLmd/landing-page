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

export default ProfessionnelPage;

