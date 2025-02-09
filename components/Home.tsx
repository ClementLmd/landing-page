import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <main className={styles.container}>
        <section className={styles.cabinetInfo}>
          <h1>Le cabinet</h1>
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
