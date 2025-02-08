import styles from "../styles/Contact.module.css";

export default function Contact() {
  const addresses = [
    {
      city: "BORDEAUX",
      address: "5 Rue Fénélon",
      postal: "33000",
    },
    {
      city: "PARIS",
      address: "13 Rue de Laborde",
      postal: "75008",
    },
    {
      city: "BOIS-GUILLAUME",
      address: "65 Rue Reine des Bois",
      postal: "76230",
    },
  ];

  return (
    <div>
      <main className={styles.container}>
        <section className={styles.title}>
          <h1>Contactez-nous</h1>
        </section>

        <section className={styles.contact}>
          <div className={styles.contactItem}>
            <span className={styles.label}>Téléphone :</span>
            <a href="tel:+33684853528">06 84 85 35 28</a>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.label}>Email :</span>
            <a href="mailto:contact@jpassurances.fr">contact@jpassurances.fr</a>
          </div>

          <div className={styles.addressSection}>
            <h2 className={styles.addressTitle}>Nos bureaux</h2>
            <div className={styles.addressGrid}>
              {addresses.map((addr, index) => (
                <div key={index} className={styles.addressCard}>
                  <h3>{addr.city}</h3>
                  <p>{addr.address}</p>
                  <p>{addr.postal}</p>
                </div>
              ))}
            </div>
          </div>
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
          <p> JP INSURANCE 5 RUE FENELON 33000 BORDEAUX 06.84.85.35.28</p>
        </section>
      </main>
    </div>
  );
}
