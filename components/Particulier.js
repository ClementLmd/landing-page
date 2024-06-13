import Head from "next/head";
import styles from "../styles/Particulier.module.css";
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
      collection. Petit rouleur ? Nos offres s’adaptent au mieux à votre
      profil grâce à nos formules au kilomètre.`,
    },
    {
      image: "images/items/yacht.jpeg",
      title: "Plaisance, bateau",
      text: `Semi-rigide, voilier, péniche, nous travaillons avec des compagnies
      répondant aux mieux à vos besoins pour garder l’esprit tranquille
      lors de vos excursions marines.`,
    },
    {
      image: "images/items/house.jpeg",
      title: "Habitation",
      text: `Peu importe votre type de bien, nous nous adaptons pour trouver
      l’offre qui vous convient le mieux. Nous travaillons ensemble votre
      étude pour couvrir également vos contenus, notamment ceux les plus
      précieux.`,
    },
    {
      image: "images/items/stethoscope.jpeg",
      title: "Mutuelle",
      text: `Le cabinet dispose d’un large choix de garanties en complémentaire
      santé. Nous proposons un accompagnement avant la souscription pour
      cibler et anticiper au mieux vos besoins afin d’être couvert au
      mieux.`,
    },
    {
      image: "images/items/glass.jpeg",
      title: "Accidents de la vie",
      text: `La garantie des accidents de la vie est disponible pour intervenir
      sur les conséquences des accidents subies au cours de votre vie
      privée. Notre cabinet dispose d’exemples d’indemnisations précis.`,
    },
    {
      image: "images/items/woman.jpeg",
      title: "Assurance emprunteur",
      text: `Il n’a jamais été aussi facile et rapide de changer d’assurances
      emprunteur. Notre cabinet s’occupe de toutes les démarches,
      notamment de résiliation auprès de votre assurance actuelle.`,
    },
  ];

  const items = itemsData.map((item, index) => {
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
        <title>Assurance du Particulier - JP Insurance</title>
        <meta
          name="description"
          content="Découvrez nos solutions d'assurance pour les particuliers."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.title}>
            Protéger ce qui nous appartient est essentiel
          </h2>
          <p className={styles.paragraph}>
            <span>
              JP Insurance dispose d’une palette de solutions nécessaires à
              votre couverture.
            </span>
            <br />
            <span>Nos offres s’adapteront au mieux à votre profil.</span>
          </p>
        </section>

        <div className={styles.items}>{items}</div>
      </main>
    </div>
  );
}
