export default function Contact() {
  const addresses = [
    {
      city: "BORDEAUX",
      address: "5 Rue Fénélon",
      postal: "33000",
    },
    {
      city: "PARIS",
      address: "13 Rue de Laborde",
      postal: "75008",
    },
    {
      city: "BOIS-GUILLAUME",
      address: "65 Rue Reine des Bois",
      postal: "76230",
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-24 pb-12">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold border border-accent/20">
              Contact
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-navy">
            Contactez-nous
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Une question ? Un projet ? N&apos;hésitez pas à nous contacter, nous
            serons ravis de vous accompagner.
          </p>
        </section>

        {/* Contact Information */}
        <section className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Phone */}
            <div className="bg-white rounded-card p-8 border border-line shadow-card hover:border-accent/40 transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-semibold text-navy">
                  Téléphone
                </h3>
              </div>
              <a
                href="tel:+33684853528"
                className="text-accent hover:text-navy text-lg font-medium transition-colors"
              >
                06 84 85 35 28
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-card p-8 border border-line shadow-card hover:border-accent/40 transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-semibold text-navy">
                  Email
                </h3>
              </div>
              <a
                href="mailto:contact@jpassurances.fr"
                className="text-accent hover:text-navy text-lg font-medium transition-colors break-all"
              >
                contact@jpassurances.fr
              </a>
            </div>
          </div>

          {/* Offices */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center text-navy">
              Nos bureaux
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {addresses.map((addr, index) => (
                <div
                  key={index}
                  className="bg-white rounded-card p-6 border border-line shadow-card hover:border-accent/40 hover:shadow-cta hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <svg
                        className="w-5 h-5 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-display font-bold text-navy">
                      {addr.city}
                    </h3>
                  </div>
                  <p className="text-muted mb-1">{addr.address}</p>
                  <p className="text-muted">{addr.postal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Mentions */}
        <section id="mentions-legales" className="max-w-4xl mx-auto scroll-mt-32 lg:scroll-mt-24">
          <div className="bg-panel rounded-card p-8 md:p-12 border border-line">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-center text-navy">
              Mentions légales
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Le cabinet JP INSURANCE sis 5 Rue Fénélon 33000 Bordeaux est
                enregistré au RCS BORDEAUX n° 980 140 370, et au registre
                d&apos;immatriculation d&apos;intermédiaire d&apos;assurance ORIAS sous le n°
                24000001 (cette immatriculation peut être vérifiée sur le site{" "}
                <a
                  href="https://www.orias.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-navy underline"
                >
                  www.orias.fr
                </a>
                ).
              </p>
              <p>
                En cas de réclamation ou de contestation de votre part, nous vous
                invitons à vous adresser au cabinet ; vous pouvez également
                contacter l&apos;Autorité de contrôle prudentiel et de Résolution
                (ACPR) : 61 rue Taitbout 75009 Paris.
              </p>
              <p className="pt-4 border-t border-line text-ink">
                <strong className="text-navy">JP INSURANCE</strong>
                <br />
                5 RUE FENELON 33000 BORDEAUX
                <br />
                06.84.85.35.28
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
