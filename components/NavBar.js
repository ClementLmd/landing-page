import Link from "next/link";
import styles from "../styles/NavBar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Le Cabinet</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/particulier">Assurance du Particulier</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/professionnel">Assurance du Professionnel</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
