import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center bg-white pt-24 pb-12 px-4">
      <div className="container-custom text-center max-w-lg mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-3">
          Page introuvable
        </h1>
        <p className="text-muted text-lg mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
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
