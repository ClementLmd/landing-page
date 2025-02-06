import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Le Cabinet - JP Insurance</title>
        <meta
          name="description"
          content="Découvrez le cabinet JP Insurance et ses services d'assurance."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.container}>
        <section className={styles.title}>
          <h1>Prêt à économiser sur vos assurances ?</h1>
          <p>Obtenez votre devis dès maintenant !</p>
        </section>

        <section className={styles.cabinetInfo}>
          <h2>Le cabinet</h2>
          <p>
            Doté d’une expérience de plus de 8 ans dans les activités
            d’assurance, Julien Plichta a fondé le cabinet JP Insurance, dans le
            but d’accompagner ses clients particuliers et professionnels tout au
            long de la vie de leurs contrats et dans toute la France.
          </p>
          <p>
            Nous sommes entourés d’un réseau de compagnies d’assurances et
            d’expert techniques prêts à vous conseiller et accompagner de la
            souscription jusqu’au sinistre, tout en suivant l’évolution de votre
            contrat en fonction de votre situation.
          </p>
          <p>
            Le cabinet est spécialisé dans l’optimisation de vos assurances.
            Trouver la meilleure offre est notre métier,{" "}
            <strong>laissez-vous guider</strong>.
          </p>
        </section>
      </main>
    </div>
  );
}
