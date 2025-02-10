import ParticulierPage from "./particulierPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assurance du Particulier - JP Insurance",
  description: "Découvrez nos solutions d'assurance pour les particuliers.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Assurance du Particulier - JP Insurance",
    description: "Découvrez nos solutions d'assurance pour les particuliers.",
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

export default ParticulierPage;
