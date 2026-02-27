"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero + Form */}
      <section
        className="relative pt-[74px] pb-8 overflow-hidden bg-gradient-to-b from-panel/85 to-white"
        id="hero"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-100"
          style={{
            background:
              "radial-gradient(ellipse 560px at 50% -80px, rgba(13,27,42,.16), transparent)",
          }}
        />
        <div className="container-custom relative px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-7 items-stretch">
            <div className="flex flex-col justify-center">
              <div className="text-muted font-semibold tracking-widest uppercase text-xs">
                Professionnels • Risques • Stratégie
              </div>
              <h1 className="font-display text-4xl lg:text-[46px] leading-[1.08] mt-3 mb-3 text-navy">
                Protégez votre activité. Sécurisez votre croissance.
              </h1>
              <p className="text-base text-muted leading-7 mb-4">
                Une approche premium et pragmatique : audit des risques,
                optimisation des contrats, et accompagnement durable — partout
                en France.
              </p>
              <div className="flex flex-wrap gap-2 my-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[14px] font-semibold text-sm bg-navy text-white border border-transparent hover:bg-navy-light transition-all hover:-translate-y-px hover:shadow-lg"
                >
                  📅 Audit pro / Prise de rendez-vous
                </a>
                <a
                  href="tel:+33684853528"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[14px] font-semibold text-sm bg-white border border-line hover:shadow-card transition-all"
                >
                  📞 +33 6 84 85 35 28
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Audit confidentiel", "Sans engagement", "Réponse rapide", "Solutions sur-mesure"].map(
                  (label) => (
                    <span
                      key={label}
                      className="text-sm text-ink bg-white/75 border border-line py-2 px-3 rounded-full"
                    >
                      {label}
                    </span>
                  )
                )}
              </div>
            </div>

            <div
              className="bg-white border border-line rounded-card shadow-card p-4 lg:p-5 scroll-mt-32 lg:scroll-mt-24"
              id="contact"
            >
              <h3 className="text-navy font-semibold text-base mb-2">
                Demander un rendez-vous
              </h3>
              <p className="text-muted text-sm mb-4">
                Décrivez votre activité.
              </p>
              <form
                action="https://formsubmit.co/julienplichta@gmail.com"
                method="POST"
                className="grid gap-2"
              >
                <input type="hidden" name="_subject" value="Nouveau contact - Professionnels (JP Insurance)" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://www.jpassurances.fr/merci" />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    name="Prénom"
                    placeholder="Prénom"
                    required
                    className="w-full px-3 py-3 rounded-[14px] border border-line text-sm outline-none focus:border-accent/55 focus:ring-4 focus:ring-accent/10"
                  />
                  <input
                    name="Nom"
                    placeholder="Nom"
                    required
                    className="w-full px-3 py-3 rounded-[14px] border border-line text-sm outline-none focus:border-accent/55 focus:ring-4 focus:ring-accent/10"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    name="Email"
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full px-3 py-3 rounded-[14px] border border-line text-sm outline-none focus:border-accent/55 focus:ring-4 focus:ring-accent/10"
                  />
                  <input
                    name="Téléphone"
                    type="tel"
                    placeholder="Téléphone"
                    required
                    className="w-full px-3 py-3 rounded-[14px] border border-line text-sm outline-none focus:border-accent/55 focus:ring-4 focus:ring-accent/10"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    name="Entreprise"
                    placeholder="Entreprise"
                    required
                    className="w-full px-3 py-3 rounded-[14px] border border-line text-sm outline-none focus:border-accent/55 focus:ring-4 focus:ring-accent/10"
                  />
                  <select
                    name="Besoin"
                    required
                    className="w-full px-3 py-3 rounded-[14px] border border-line text-sm outline-none focus:border-accent/55 focus:ring-4 focus:ring-accent/10 bg-white"
                  >
                    <option value="" disabled>
                      Votre besoin
                    </option>
                    <option>RC Pro</option>
                    <option>Multirisque professionnelle</option>
                    <option>Décennale</option>
                    <option>Protection du dirigeant</option>
                    <option>Flotte auto</option>
                    <option>Protection juridique</option>
                    <option>Mutuelle / Prévoyance pro</option>
                    <option>Placements & optimisation patrimoniale</option>
                    <option>Optimisation de contrats</option>
                  </select>
                </div>
                <textarea
                  name="Message"
                  placeholder="Secteur, effectif, contrats en place (facultatif)"
                  rows={4}
                  className="w-full px-3 py-3 rounded-[14px] border border-line text-sm outline-none focus:border-accent/55 focus:ring-4 focus:ring-accent/10 resize-y min-h-[96px]"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-[14px] font-semibold text-sm bg-navy text-white border border-transparent hover:bg-navy-light transition-all"
                >
                  Envoyer la demande
                </button>
                <p className="text-xs text-muted leading-snug">
                  En envoyant ce formulaire, vous acceptez d&apos;être recontacté
                  par JP Insurance. Données utilisées uniquement pour traiter
                  votre demande.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Le cabinet */}
      <section className="py-11 px-4 scroll-mt-32 lg:scroll-mt-24" id="cabinet">
        <div className="container-custom">
          <h2 className="font-display text-3xl text-navy mb-3">
            Le cabinet
          </h2>
          <p className="text-muted mb-5 leading-7">
            Fort de son expérience dans les activités d&apos;assurance, Julien
            Plichta a fondé JP Insurance pour accompagner ses clients
            professionnels partout en France,{" "}
            <strong className="text-ink">
              de la souscription jusqu&apos;au sinistre
            </strong>
            , avec un suivi dans le temps au rythme de l&apos;évolution de votre
            activité.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-line rounded-card p-5">
              <div className="text-muted font-semibold tracking-widest uppercase text-xs">
                Réseau & expertise
              </div>
              <h3 className="text-navy font-semibold mt-2 mb-2">
                Un réseau de compagnies & d&apos;experts techniques
              </h3>
              <p className="text-muted text-sm leading-7">
                JP Insurance s&apos;appuie sur un réseau de compagnies
                partenaires et d&apos;experts techniques, pour vous conseiller
                et vous accompagner à chaque étape — y compris en cas de
                sinistre.
              </p>
            </div>
            <div className="bg-white border border-line rounded-card p-5">
              <div className="text-muted font-semibold tracking-widest uppercase text-xs">
                Spécialité
              </div>
              <h3 className="text-navy font-semibold mt-2 mb-2">
                Optimisation de vos assurances
              </h3>
              <p className="text-muted text-sm leading-7">
                Trouver la meilleure offre et les garanties réellement utiles
                est notre métier. Nous recherchons une couverture{" "}
                <strong className="text-ink">défendable</strong> et{" "}
                <strong className="text-ink">cohérente financièrement</strong>.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {[
              { icon: "🧭", title: "Vision risques", desc: "Cartographie claire : responsabilités, exploitation, biens, dirigeant." },
              { icon: "🧾", title: "Contrats lisibles", desc: "Garanties adaptées, exclusions maîtrisées, arbitrages concrets." },
              { icon: "🤝", title: "Suivi durable", desc: "Un interlocuteur dédié : ajustements, renouvellements, sinistres." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-line rounded-card shadow-card p-4"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-accent/10 border border-accent/20 text-lg">
                  {item.icon}
                </div>
                <h3 className="text-navy font-semibold text-base mt-2 mb-1">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approche stratégique */}
      <section className="py-11 px-4 bg-panel border-y border-line">
        <div className="container-custom">
          <h2 className="font-display text-3xl text-navy mb-3">
            Une approche stratégique de l&apos;assurance pro
          </h2>
          <p className="text-muted mb-5">
            Votre assurance doit protéger l&apos;activité et le dirigeant,
            tout en restant cohérente financièrement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "🔍", title: "Audit des risques", desc: "Analyse de l'activité, obligations, responsabilités, exposition réelle." },
              { icon: "⚖️", title: "Garanties justes", desc: "Couverture utile, exclusions anticipées, clauses cohérentes." },
              { icon: "⚡", title: "Réactivité", desc: "Un process court, des réponses rapides, et un suivi dans le temps." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-line rounded-card shadow-card p-4"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-accent/10 border border-accent/20 text-lg">
                  {item.icon}
                </div>
                <h3 className="text-navy font-semibold text-base mt-2 mb-1">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-11 px-4 scroll-mt-32 lg:scroll-mt-24" id="solutions">
        <div className="container-custom">
          <h2 className="font-display text-3xl text-navy mb-3">
            Solutions
          </h2>
          <p className="text-muted mb-5 leading-7">
            Deux univers, une même exigence : des couvertures lisibles,
            cohérentes et défendables.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-line rounded-card p-5">
              <h3 className="text-navy font-semibold mb-1">
                Professionnel
              </h3>
              <p className="text-muted text-sm mb-3 leading-7">
                Adaptées à votre secteur, votre taille et vos risques.
              </p>
              <ul className="text-muted text-sm leading-8 list-disc pl-5 mb-4">
                <li>Responsabilité Civile Professionnelle (RC Pro)</li>
                <li>Multirisque Professionnelle</li>
                <li>Assurance Décennale</li>
                <li>Protection du Dirigeant</li>
                <li>Assurance Flotte Automobile</li>
                <li>Protection Juridique</li>
                <li>Mutuelle / Prévoyance professionnelle</li>
                <li>Placements & optimisation patrimoniale</li>
                <li>Optimisation de contrats existants</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/professionnel"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[14px] font-semibold text-sm bg-navy text-white border border-transparent hover:bg-navy-light transition-all"
                >
                  Assurance du pro →
                </Link>
                <a
                  href="tel:+33684853528"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[14px] font-semibold text-sm bg-white border border-line hover:shadow-card transition-all"
                >
                  📞 Appeler
                </a>
              </div>
            </div>
            <div className="bg-white border border-line rounded-card p-5">
              <h3 className="text-navy font-semibold mb-1">
                Particulier
              </h3>
              <p className="text-muted text-sm mb-3 leading-7">
                Des couvertures solides, lisibles, et cohérentes avec votre vie.
              </p>
              <ul className="text-muted text-sm leading-8 list-disc pl-5 mb-4">
                <li>Assurance Auto</li>
                <li>Assurance Habitation</li>
                <li>Mutuelle Santé</li>
                <li>Prévoyance</li>
                <li>Assurance Emprunteur</li>
                <li>Placements & optimisation patrimoniale</li>
                <li>Optimisation de contrats existants</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/particulier"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[14px] font-semibold text-sm bg-navy text-white border border-transparent hover:bg-navy-light transition-all"
                >
                  Assurance du particulier →
                </Link>
                <a
                  href="tel:+33684853528"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[14px] font-semibold text-sm bg-white border border-line hover:shadow-card transition-all"
                >
                  📞 Appeler
                </a>
              </div>
            </div>
          </div>
          <div className="mt-5 rounded-[26px] bg-gradient-to-br from-navy to-navy-light text-white p-8 shadow-cta relative overflow-hidden">
            <div
              className="absolute -right-[120px] -top-[30px] w-[520px] h-[520px] rounded-full opacity-100"
              style={{
                background:
                  "radial-gradient(circle closest-side, rgba(255,255,255,.18), transparent)",
              }}
            />
            <div className="relative flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl lg:text-3xl text-white m-0">
                  Objectif
                </h2>
                <p className="mt-2 opacity-90 leading-6">
                  Réduire l&apos;exposition, optimiser le coût — sans
                  concessions sur l&apos;essentiel.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[14px] font-semibold text-sm bg-white text-navy hover:bg-gray-100 transition-all"
                >
                  📅 Prendre RDV
                </a>
                <a
                  href="tel:+33684853528"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[14px] font-semibold text-sm border border-white/35 text-white bg-transparent hover:bg-white/10 transition-all"
                >
                  📞 +33 6 84 85 35 28
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-11 px-4 bg-panel border-y border-line scroll-mt-32 lg:scroll-mt-24" id="process">
        <div className="container-custom">
          <h2 className="font-display text-3xl text-navy mb-3">
            Comment ça se passe ?
          </h2>
          <p className="text-muted mb-5">
            Simple, rapide, et cadré.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "1️⃣", title: "Échange", desc: "Compréhension de l'activité, des risques et des priorités." },
              { icon: "2️⃣", title: "Audit", desc: "Analyse des contrats existants + recommandations." },
              { icon: "3️⃣", title: "Déploiement", desc: "Mise en place, ajustements, puis suivi régulier." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-line rounded-card shadow-card p-4"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-accent/10 border border-accent/20 text-lg">
                  {item.icon}
                </div>
                <h3 className="text-navy font-semibold text-base mt-2 mb-1">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-7 rounded-[26px] bg-gradient-to-br from-navy to-navy-light text-white p-8 shadow-cta relative overflow-hidden">
            <div
              className="absolute -right-[120px] -top-[30px] w-[520px] h-[520px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle closest-side, rgba(255,255,255,.18), transparent)",
              }}
            />
            <div className="relative flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl text-white m-0">
                  Planifions votre audit professionnel
                </h2>
                <p className="mt-2 opacity-90">
                  Audit confidentiel • Sans engagement • France entière
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[14px] font-semibold text-sm bg-white text-navy hover:bg-gray-100 transition-all"
                >
                  📅 Prendre RDV
                </a>
                <a
                  href="tel:+33684853528"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[14px] font-semibold text-sm border border-white/35 text-white bg-transparent hover:bg-white/10 transition-all"
                >
                  📞 +33 6 84 85 35 28
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-20 p-2 bg-white/86 backdrop-blur-md border-t border-line">
        <div className="container-custom flex gap-2">
          <a
            href="#contact"
            className="flex-1 py-3 rounded-[14px] font-semibold text-sm bg-navy text-white text-center"
          >
            📅 RDV
          </a>
          <a
            href="tel:+33684853528"
            className="flex-1 py-3 rounded-[14px] font-semibold text-sm bg-white border border-line text-center"
          >
            📞 Appel
          </a>
        </div>
      </div>
      <div className="h-20 lg:hidden" aria-hidden />
    </main>
  );
}
