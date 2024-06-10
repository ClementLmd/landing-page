import Head from "next/head";
import styles from "../styles/Particulier.module.css";

export default function Particulier() {
  return (
    <div>
      <Head>
        <title>Particulier - JP Insurance</title>
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
            JP Insurance dispose d’une palette de solutions nécessaires à votre
            couverture. Nos offres s’adapteront au mieux à votre profil.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subtitle}>Automobile et 2 roues</h3>
          <p className={styles.paragraph}>
            JP Insurance est présent sur tous les types de conducteurs : bon
            conducteur, jeune conducteur, malussé, résilié. Le cabinet est
            spécialisé également sur tous types de véhicules : véhicules
            classiques, véhicules haut de gamme, camping-car, véhicule de
            collection. Petit rouleur ? Nos offres s’adaptent au mieux à votre
            profil grâce à nos formules au kilomètre.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subtitle}>Plaisance, bateau</h3>
          <p className={styles.paragraph}>
            Semi-rigide, voilier, péniche, nous travaillons avec des compagnies
            répondant aux mieux à vos besoins pour garder l’esprit tranquille
            lors de vos excursions marines.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subtitle}>Habitation</h3>
          <p className={styles.paragraph}>
            Peu importe votre type de bien, nous nous adaptons pour trouver
            l’offre qui vous convient le mieux. Nous travaillons ensemble votre
            étude pour couvrir également vos contenus, notamment ceux les plus
            précieux.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subtitle}>Mutuelle</h3>
          <p className={styles.paragraph}>
            Le cabinet dispose d’un large choix de garanties en complémentaire
            santé. Nous proposons un accompagnement avant la souscription pour
            cibler et anticiper au mieux vos besoins afin d’être couvert au
            mieux.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subtitle}>Accidents de la vie</h3>
          <p className={styles.paragraph}>
            La garantie des accidents de la vie est disponible pour intervenir
            sur les conséquences des accidents subies au cours de votre vie
            privée. Notre cabinet dispose d’exemples d’indemnisations précis.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subtitle}>Assurance emprunteur</h3>
          <p className={styles.paragraph}>
            Il n’a jamais été aussi facile et rapide de changer d’assurances
            emprunteur. Notre cabinet s’occupe de toutes les démarches,
            notamment de résiliation auprès de votre assurance actuelle.
          </p>
        </section>
      </main>
    </div>
  );
}
