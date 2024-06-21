import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      !event.target.closest(`.${styles.menuItems}`) &&
      !event.target.closest(`.${styles.burger}`)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className={styles.navbar}>
      <img
        className={styles.logo}
        href="/"
        src="/images/logo.jpg"
        alt="logo"
      ></img>
      <div className={styles.menuItems}>
        <ul onClick={openMenu} className={menuOpen ? `${styles.active}` : ""}>
          <li>
            <Link href="/">Le Cabinet</Link>
          </li>
          <li>
            <Link href="/professionnel">Assurance du Professionnel</Link>
          </li>
          <li>
            <Link href="/particulier">Assurance du Particulier</Link>
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
