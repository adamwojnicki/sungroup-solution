"use client";
import { useState } from "react";

import Image from "next/image";

import styles from "./navbar.module.css";
import Container from "../Container";
import Button from "../Button";

const Navbar = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <header className={styles.navbar}>
      <Container>
        <div className={styles.flex}>
          <div className="logo">
            <a href="#">
              <Image
                src="/cupra_logo.svg"
                alt="Cupra logo"
                width={142}
                height={21}
              />
            </a>
          </div>
          <nav className={styles.nav}>
            <a className={styles.menuItem} href="#">
              Samochody
            </a>
            <a className={styles.menuItem} href="#">
              Jazda próbna
            </a>
            <a className={styles.menuItem} href="#">
              Oferta
            </a>
            <a className={styles.menuItem} href="#">
              Salony Cupra
            </a>
          </nav>
          <div className={styles.ctas}>
            <a href="tel:#" className={styles.tel}>
              <strong>+48 58 506 65 65</strong>
            </a>
            <Button href="#" variant="primary">
              Zapytaj o ofertę
            </Button>
            <Button href="#" variant="secondary">
              Umów jazdę próbną
            </Button>
          </div>
          <div className={styles.hamburger}>
            <button onClick={() => setMobileNavActive(!mobileNavActive)}>
              <Image
                src={mobileNavActive ? "/close.svg" : "/hamburger-menu.svg"}
                alt="menu mobile"
                width={48}
                height={48}
              />
            </button>
          </div>
        </div>
      </Container>
      <div
        className={`
          ${styles.mobileMenu} 
          ${mobileNavActive ? styles.mobileMenuActive : ""}
        `}
      >
        <Container narrow>
          <nav className={styles.mobileNav}>
            <a className={styles.mobileMenuItem} href="#">
              Samochody
            </a>
            <a className={styles.mobileMenuItem} href="#">
              Jazda próbna
            </a>
            <a className={styles.mobileMenuItem} href="#">
              Oferta
            </a>
            <a className={styles.mobileMenuItem} href="#">
              Salony Cupra
            </a>
          </nav>
          <div className={styles.mobileCtas}>
            <a href="tel:#" className={styles.tel}>
              <strong>+48 58 506 65 65</strong>
            </a>
            <Button href="#" variant="primary">
              Zapytaj o ofertę
            </Button>
            <Button href="#" variant="secondary">
              Umów jazdę próbną
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
