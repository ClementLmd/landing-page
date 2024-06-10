import Head from "next/head";
import styles from "../styles/Professionnel.module.css";

export default function Professionnel() {
  return (
    <div>
      <Head>
        <title>Professionnel - JP Insurance</title>
        <meta
          name="description"
          content="Découvrez nos solutions d'assurance pour les professionnels."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.title}>Protéger vos biens</h2>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subtitle}>Responsabilité civile</h3>
          <p className={styles.paragraph}>
            La responsabilité civile professionnelle est souvent le « permis de
            travail » de votre activité. Notre cabinet travaille avec plusieurs
            compagnies d’assurances disposées à répondre au mieux, en fonction
            de votre activité, pour couvrir sa responsabilité civile. Parce que
            votre activité évolue à chaque instant, nous réévaluons ensemble au
            moins une fois par an votre contrat afin d’avoir la protection et la
            cotisation la plus juste.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subtitle}>Dommages aux biens</h3>
          <p className={styles.paragraph}>
            Protéger le cœur de votre activité est essentiel. Nos offres
            répondent à un très grand nombre d’activités pour vous protéger en
            cas de sinistre. Nous vous accompagnons au mieux pour définir
            ensemble la meilleure offre et vous garantir notamment en perte
            d’exploitations et bris de machine. Commerçant, vous stockez ? Nos
            contrats s’adaptent à votre activité et aux différences de stock en
            fonction des évènements. Nous intervenons sur tous types de
            superficies.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subtitle}>Décennale</h3>
          <p className={styles.paragraph}>
            Créateur ? Résilié ? Jamais assuré ? Nous définissons ensemble la
            meilleure offre pour garantir votre activité et permettre son
            développement. Nos compagnies s’adaptent en fonction de chaque
            profil et des activités exercées. Nous construisons ensemble votre
            étude pour avoir la meilleure offre.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subtitle}>Protection juridique</h3>
          <p className={styles.paragraph}>
            Ne laissez pas les litiges empêcher le développement de votre
            activité, déléguez ; la protection juridique vous accompagne dès la
            naissance du litige. Frais d’avocat, frais d’expertises,
            expert-comptable en cas de contrôle fiscal, le cabinet dispose de
            solutions prêtes à vous soulager.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subtitle}>Flotte automobile</h3>
          <p className={styles.paragraph}>
            Propre compte, transport public de marchandises TPM, nos offres
            flotte automobile couvrent toutes les activités à partir de 5
            véhicules. Nous construisons ensemble votre projet.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subtitle}>Risques spéciaux</h3>
          <p className={styles.paragraph}>
            Evènement, spectacle, exposition ? Nous travaillons avec les
            compagnies spécialisées dans vos activités.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subtitle}>Garage</h3>
          <p className={styles.paragraph}>
            Négociant ? Réparateur ? Nos offres répondent à votre activité et à
            sa protection.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Vous protéger</h2>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subtitle}>Mutuelle</h3>
          <p className={styles.paragraph}>
            Nos complémentaires santé répondent au dispositif Madelin. Nous
            proposons un accompagnement avant la souscription pour cibler et
            anticiper au mieux vos besoins afin d’être couvert au mieux. Les
            garanties sont entièrement modulables en fonction de vos besoins.
            Votre complémentaire santé est sur mesure.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subtitle}>Prévoyance</h3>
          <p className={styles.paragraph}>
            Qu’arrive-t-il en cas d’arrêt de votre activité à la suite d’une
            maladie, incapacité, invalidité pour vos revenus ? Comment sont
            couverts vos proches en cas de décès ? Notre cabinet évalue avec
            vous la meilleure formule pour conserver une situation financière
            stable avec un contrat sur-mesure.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subtitle}>Assurance collective</h3>
          <p className={styles.paragraph}>
            Notre cabinet est disposé à répondre aux exigences des conventions
            collectives. Ensemble nous construisons votre offre. Vous soulager
            en tant que chef d’entreprise est nécessaire. Chaque salarié dispose
            de son application pour suivre l’évolution de ses garanties et
            remboursements. Nous nous occupons également de toute la mise en
            place du contrat et des affiliations.
          </p>
        </section>
      </main>
    </div>
  );
}
