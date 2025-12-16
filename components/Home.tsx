export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium border border-primary-600/30">
              Cabinet de courtage en assurance
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            JP Insurance
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Votre partenaire de confiance pour l'optimisation de vos assurances
          </p>
        </div>
      </section>

      {/* Cabinet Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Le Cabinet
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300">
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                  Doté d'une expérience de plus de{" "}
                  <span className="text-primary-400 font-semibold">
                    8 ans
                  </span>{" "}
                  dans les activités d'assurance, Julien Plichta a fondé le
                  cabinet JP Insurance, dans le but d'accompagner ses clients
                  particuliers et professionnels tout au long de la vie de leurs
                  contrats et dans toute la France.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300">
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                  Nous sommes entourés d'un réseau de{" "}
                  <span className="text-primary-400 font-semibold">
                    compagnies d'assurances
                  </span>{" "}
                  et d'experts techniques prêts à vous conseiller et accompagner
                  de la souscription jusqu'au sinistre, tout en suivant
                  l'évolution de votre contrat en fonction de votre situation.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300">
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                  Le cabinet est spécialisé dans{" "}
                  <span className="text-primary-400 font-semibold">
                    l'optimisation de vos assurances
                  </span>
                  . Trouver la meilleure offre est notre métier,{" "}
                  <strong className="text-white font-bold">
                    laissez-vous guider
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <a
                href="/particulier"
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold shadow-lg shadow-primary-600/50 hover:shadow-xl hover:shadow-primary-600/50 hover:scale-105 transition-all duration-300"
              >
                Assurance Particulier
              </a>
              <a
                href="/professionnel"
                className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-xl font-semibold border border-slate-700 hover:border-primary-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                Assurance Professionnel
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
