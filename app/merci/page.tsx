import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Message envoyé - JP Insurance",
  description: "Votre demande a bien été envoyée.",
};

export default function MerciPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center bg-white pt-24 pb-12 px-4">
      <div className="container-custom text-center max-w-lg mx-auto">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-navy mb-3">
          Message envoyé
        </h1>
        <p className="text-muted text-lg mb-8">
          Votre demande a bien été reçue. Nous vous recontacterons dans les
          meilleurs délais.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[14px] font-semibold text-sm bg-navy text-white border border-transparent hover:bg-navy-light transition-all"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
