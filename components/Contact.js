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
            <li>5 Rue Fénélon, 33000, BORDEAUX</li>
            <hr className={styles.divider} />
            <li>13 Rue de Laborde, 75008, PARIS</li>
            <hr className={styles.divider} />
            <li>65 Rue Reine des Bois, 76230, BOIS-GUILLAUME</li>
          </ul>
        </section>
        <section className={styles.legalMentions}>
          <h2>Mentions légales</h2>
          <p>
            Le cabinet JP INSURANCE sis 5 Rue Fénélon 33000 Bordeaux est
            enregistré au RCS BORDEAUX n° 980 140 370, et au registre
            d'immatriculation d'intermédiaire d'assurance ORIAS sous le
            n°24000001 (cette immatriculation peut être vérifiée sur le site
            www.orias.fr).{" "}
          </p>
          <p>
            En cas de réclamation ou de contestation de votre part, nous vous
            invitons à vous adresser au cabinet ; vous pouvez également
            contacter l'Autorité de contrôle prudentiel et de Résolution (ACPR)
            : 61 rue Taitbout 75009 Paris.
          </p>
          <p> JP INSURANCE 5 RUE FENELON 33000 BORDEAUX . T 06.84.85.35.28</p>
        </section>
      </main>
    </div>
  );
}
