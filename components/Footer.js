import Head from "next/head";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      Le cabinet JP INSURANCE sis 5 Rue Fénélon 33000 Bordeaux est enregistré au
      RCS BORDEAUX n° 980 140 370, et au registre d'immatriculation
      d'intérmédiaire d'assurance ORIAS sous le n°24000001 (cette
      immatriculation peut être vérifiée sur le site www.orias.fr). En cas de
      réclamation ou de contestation de votre part, nous vous invtions à vous
      adresser au cabinet ; vous pouvez également contacter l'Autorité de
      contrôle prudentiel et de Résolution (ACPR) : 61 rue Taitbout 75009 Paris.
      JP INSURANCE 5 RUE FENELON 33000 BORDEAUX . T 06.84.85.35.28
    </div>
  );
}
