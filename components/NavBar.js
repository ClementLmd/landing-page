import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <h1>JP Insurance</h1>
      <div className={styles.menuItems}>
        <ul className={menuOpen ? `${styles.active}` : ""}>
          <li>
            <Link href="/">Le Cabinet</Link>
          </li>
          <li>
            <Link href="/particulier">Assurance du Particulier</Link>
          </li>
          <li>
            <Link href="/professionnel">Assurance du Professionnel</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className={styles.burger}
        onClick={openMenu}
      />
    </nav>
  );
}
