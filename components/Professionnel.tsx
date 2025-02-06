import Head from "next/head";
import styles from "../styles/Professionnel.module.css";
import Item from "./Item";

export default function Professionnel() {
  const itemsDataGoods = [
    {
      image: "images/items/responsabilite-civile-pro.png",
      title: "Responsabilité civile",
      text: `La responsabilité civile professionnelle est souvent le « permis de
      travail » de votre activité. Notre cabinet travaille avec plusieurs
      compagnies d’assurances disposées à répondre au mieux, en fonction
      de votre activité, pour couvrir sa responsabilité civile. Parce que
      votre activité évolue à chaque instant, nous réévaluons ensemble au
      moins une fois par an votre contrat afin d’avoir la protection et la
      cotisation la plus juste.`,
    },
    {
      image: "images/items/dommage-biens.jpg",
      title: "Dommages aux biens",
      text: `Protéger le cœur de votre activité est essentiel. Nos offres répondent à un très grand nombre d’activités pour vous protéger en cas de sinistre. Nous vous accompagnons au mieux pour définir ensemble la meilleure offre et vous garantir notamment en perte d’exploitations et bris de machine.
      Commerçant, vous stockez ? Nos contrats s’adaptent à votre activité et aux différences de stock en fonction des évènements.
      Nous intervenons sur tous types de superficies.`,
    },
    {
      image: "images/items/decennale.png",
      title: "Décennale",
      text: `Déjà installé ? Créateur ? Résilié ? Jamais assuré ? Nous définissons ensemble la
            meilleure offre pour garantir votre activité et permettre son
            développement. Nos compagnies s’adaptent en fonction de chaque
            profil et des activités exercées. Nous construisons ensemble votre
            étude pour avoir la meilleure offre.`,
    },
    {
      image: "images/items/protection-juridique.jpg",
      title: "Protection juridique",
      text: `Ne laissez pas les litiges empêcher le développement de votre
      activité, déléguez ; la protection juridique vous accompagne dès la
      naissance du litige. Frais d’avocat, frais d’expertises,
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
      anticiper au mieux vos besoins afin d’être couvert au mieux. Les
      garanties sont entièrement modulables en fonction de vos besoins.
      Votre complémentaire santé est sur mesure.`,
    },
    {
      image: "images/items/prevoyance.jpg",
      title: "Prévoyance",
      text: `Qu’arrive-t-il en cas d’arrêt de votre activité à la suite d’une
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
      en tant que chef d’entreprise est nécessaire. Chaque salarié dispose
      de son application pour suivre l’évolution de ses garanties et
      remboursements. Nous nous occupons également de toute la mise en
      place du contrat et des affiliations.`,
    },
  ];

  const itemsGoods = itemsDataGoods.map((item, index) => {
    return (
      <Item
        key={index}
        image={item.image}
        title={item.title}
        text={item.text}
      />
    );
  });

  const itemsProtection = itemsDataProtection.map((item, index) => {
    return (
      <Item
        key={index}
        image={item.image}
        title={item.title}
        text={item.text}
      />
    );
  });

  return (
    <div>
      <Head>
        <title>Assurance du Professionnel - JP Insurance</title>
        <meta
          name="description"
          content="Découvrez nos solutions d'assurance pour les professionnels."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.title}>Protéger vos biens</h2>
        </section>
        <div className={styles.itemsGoods}>{itemsGoods}</div>
        <section className={styles.section}>
          <h2 className={styles.title}>Vous protéger</h2>
        </section>
        <div className={styles.itemsProtection}>{itemsProtection}</div>
      </main>
    </div>
  );
}
