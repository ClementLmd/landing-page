import Item from "./Item";

export default function Particulier() {
  const itemsData = [
    {
      image: "images/items/road.jpeg",
      title: "Automobile et 2 roues",
      text: `JP Insurance est présent sur tous les types de conducteurs : bon
      conducteur, jeune conducteur, malussé, résilié. Le cabinet est
      spécialisé également sur tous types de véhicules : véhicules
      classiques, véhicules haut de gamme, camping-car, véhicule de
      collection. Petit rouleur ? Nos offres s'adaptent au mieux à votre
      profil grâce à nos formules au kilomètre.`,
    },
    {
      image: "images/items/yacht.jpeg",
      title: "Plaisance, bateau",
      text: `Semi-rigide, voilier, péniche, nous travaillons avec des compagnies
      répondant aux mieux à vos besoins pour garder l'esprit tranquille
      lors de vos excursions marines.`,
    },
    {
      image: "images/items/house.jpeg",
      title: "Habitation",
      text: `Peu importe votre type de bien, nous nous adaptons pour trouver
      l'offre qui vous convient le mieux. Nous travaillons ensemble votre
      étude pour couvrir également vos contenus, notamment ceux les plus
      précieux.`,
    },
    {
      image: "images/items/stethoscope.jpeg",
      title: "Mutuelle",
      text: `Le cabinet dispose d'un large choix de garanties en complémentaire
      santé. Nous proposons un accompagnement avant la souscription pour
      cibler et anticiper au mieux vos besoins afin d'être couvert au
      mieux.`,
    },
    {
      image: "images/items/glass.jpeg",
      title: "Accidents de la vie",
      text: `La garantie des accidents de la vie est disponible pour intervenir
      sur les conséquences des accidents subies au cours de votre vie
      privée. Notre cabinet dispose d'exemples d'indemnisations précis.`,
    },
    {
      image: "images/items/woman.jpeg",
      title: "Assurance emprunteur",
      text: `Il n'a jamais été aussi facile et rapide de changer d'assurances
      emprunteur. Notre cabinet s'occupe de toutes les démarches,
      notamment de résiliation auprès de votre assurance actuelle.`,
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-24 pb-12">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold border border-accent/20">
              Assurance Particulier
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-navy">
            Protéger ce qui nous appartient est essentiel
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            <span>
              JP Insurance dispose d&apos;une palette de solutions nécessaires à
              votre couverture.
            </span>
            <br />
            <span className="text-accent font-medium">
              Nos offres s&apos;adapteront au mieux à votre profil.
            </span>
          </p>
        </section>

        {/* Items Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {itemsData.map((item, index) => (
              <Item
                key={index}
                image={item.image}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto mt-20 text-center">
          <div className="bg-panel rounded-card p-8 md:p-12 border border-line">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-navy">
              Besoin d&apos;un devis personnalisé ?
            </h2>
            <p className="text-muted mb-8 text-lg">
              Contactez-nous pour trouver l&apos;assurance qui vous correspond
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-navy text-white rounded-xl font-semibold hover:bg-navy-light hover:scale-105 transition-all duration-300"
            >
              Nous contacter
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
