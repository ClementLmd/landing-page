"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/NavBar.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      !(event.target as Element).closest(`.${styles.menuItems}`) &&
      !(event.target as Element).closest(`.${styles.burger}`)
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
      <Link href="/">
        <img className={styles.logo} src="/images/logo.jpg" alt="logo" />
      </Link>
      <div className={styles.menuItems}>
        <ul onClick={openMenu} className={menuOpen ? `${styles.active}` : ""}>
          <li className={pathname === "/" ? styles.activeLink : ""}>
            <Link href="/">Le Cabinet</Link>
          </li>
          <li
            className={pathname === "/professionnel" ? styles.activeLink : ""}
          >
            <Link href="/professionnel">Assurance du Professionnel</Link>
          </li>
          <li className={pathname === "/particulier" ? styles.activeLink : ""}>
            <Link href="/particulier">Assurance du Particulier</Link>
          </li>
          <li className={pathname === "/contact" ? styles.activeLink : ""}>
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
