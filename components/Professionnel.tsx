import Item from "./Item";

export default function Professionnel() {
  const itemsDataGoods = [
    {
      image: "images/items/responsabilite-civile-pro.png",
      title: "Responsabilité civile",
      text: `La responsabilité civile professionnelle est souvent le « permis de
      travail » de votre activité. Notre cabinet travaille avec plusieurs
      compagnies d'assurances disposées à répondre au mieux, en fonction
      de votre activité, pour couvrir sa responsabilité civile. Parce que
      votre activité évolue à chaque instant, nous réévaluons ensemble au
      moins une fois par an votre contrat afin d'avoir la protection et la
      cotisation la plus juste.`,
    },
    {
      image: "images/items/dommage-biens.jpg",
      title: "Dommages aux biens",
      text: `Protéger le cœur de votre activité est essentiel. Nos offres répondent à un très grand nombre d'activités pour vous protéger en cas de sinistre. Nous vous accompagnons au mieux pour définir ensemble la meilleure offre et vous garantir notamment en perte d'exploitations et bris de machine.
      Commerçant, vous stockez ? Nos contrats s'adaptent à votre activité et aux différences de stock en fonction des évènements.
      Nous intervenons sur tous types de superficies.`,
    },
    {
      image: "images/items/decennale.png",
      title: "Décennale",
      text: `Déjà installé ? Créateur ? Résilié ? Jamais assuré ? Nous définissons ensemble la
            meilleure offre pour garantir votre activité et permettre son
            développement. Nos compagnies s'adaptent en fonction de chaque
            profil et des activités exercées. Nous construisons ensemble votre
            étude pour avoir la meilleure offre.`,
    },
    {
      image: "images/items/protection-juridique.jpg",
      title: "Protection juridique",
      text: `Ne laissez pas les litiges empêcher le développement de votre
      activité, déléguez ; la protection juridique vous accompagne dès la
      naissance du litige. Frais d'avocat, frais d'expertises,
      expert-comptable en cas de contrôle fiscal, le cabinet dispose de
      solutions prêtes à vous soulager.`,
    },
    {
      image: "images/items/flotte-auto.jpg",
      title: "Flotte automobile",
      text: `Propre compte, transport public de marchandises TPM, nos offres
      flotte automobile couvrent toutes les activités à partir de 5
      véhicules. Nous construisons ensemble votre projet.`,
    },
    {
      image: "images/items/risques-speciaux.jpg",
      title: "Risques spéciaux",
      text: `Evènement, spectacle, exposition ? Nous travaillons avec les
      compagnies spécialisées dans vos activités.`,
    },
    {
      image: "images/items/garage.jpg",
      title: "Garage",
      text: `Négociant ? Réparateur ? Nos offres répondent à votre activité et à
      sa protection.`,
    },
  ];

  const itemsDataProtection = [
    {
      image: "images/items/mutuelle.jpg",
      title: "Mutuelle",
      text: `Nos complémentaires santé répondent au dispositif Madelin. Nous
      proposons un accompagnement avant la souscription pour cibler et
      anticiper au mieux vos besoins afin d'être couvert au mieux. Les
      garanties sont entièrement modulables en fonction de vos besoins.
      Votre complémentaire santé est sur mesure.`,
    },
    {
      image: "images/items/prevoyance.jpg",
      title: "Prévoyance",
      text: `Qu'arrive-t-il en cas d'arrêt de votre activité à la suite d'une
      maladie, incapacité, invalidité pour vos revenus ? Comment sont
      couverts vos proches en cas de décès ? Notre cabinet évalue avec
      vous la meilleure formule pour conserver une situation financière
      stable avec un contrat sur-mesure.`,
    },
    {
      image: "images/items/assurance-collective.jpg",
      title: "Assurance collective",
      text: `Notre cabinet est disposé à répondre aux exigences des conventions
      collectives. Ensemble nous construisons votre offre. Vous soulager
      en tant que chef d'entreprise est nécessaire. Chaque salarié dispose
      de son application pour suivre l'évolution de ses garanties et
      remboursements. Nous nous occupons également de toute la mise en
      place du contrat et des affiliations.`,
    },
  ];

  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-20">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium border border-primary-600/30">
            Assurance Professionnel
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
          Protégez votre activité professionnelle
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Des solutions d'assurance adaptées à votre entreprise pour vous
          permettre de vous concentrer sur votre activité en toute sérénité.
        </p>
      </section>

      {/* Section: Protéger vos biens */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Protéger vos biens
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {itemsDataGoods.map((item, index) => (
            <Item
              key={index}
              image={item.image}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </section>

      {/* Section: Vous protéger */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Vous protéger
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {itemsDataProtection.map((item, index) => (
            <Item
              key={index}
              image={item.image}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto mt-20 text-center">
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Un accompagnement sur mesure pour votre entreprise
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Contactez-nous pour une étude personnalisée de vos besoins
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold shadow-lg shadow-primary-600/50 hover:shadow-xl hover:shadow-primary-600/50 hover:scale-105 transition-all duration-300"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </main>
  );
}
