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
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium border border-primary-600/30">
            Assurance Particulier
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
          Protéger ce qui nous appartient est essentiel
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          <span>
            JP Insurance dispose d'une palette de solutions nécessaires à
            votre couverture.
          </span>
          <br />
          <span className="text-primary-400 font-medium">
            Nos offres s'adapteront au mieux à votre profil.
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
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Besoin d'un devis personnalisé ?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Contactez-nous pour trouver l'assurance qui vous correspond
          </p>
          <a
            href="/v2/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold shadow-lg shadow-primary-600/50 hover:shadow-xl hover:shadow-primary-600/50 hover:scale-105 transition-all duration-300"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </main>
  );
}

