import Head from "next/head";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact - JP Insurance</title>
        <meta
          name="description"
          content="Informations de contact du cabinet JP Insurance"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <section className={styles.title}>
          <h1>Contactez-nous</h1>
        </section>

        <section className={styles.contact}>
          <p>
            <span>Téléphone : </span>
            <a href="tel:+33684853528">06 84 85 35 28</a>
          </p>
          <p>
            <span>Email : </span>
            <a href="mailto:contact@jpassurances.fr">contact@jpassurances.fr</a>
          </p>
          <ul>
            <span>Adresses :</span>
            <li>5 Rue Fénélon 33000 BORDEAUX</li>
            <li>13 Rue de Laborde 75008 PARIS</li>
            <li>65 Rue Reine des Bois 76230 BOIS GUILLAUME</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
