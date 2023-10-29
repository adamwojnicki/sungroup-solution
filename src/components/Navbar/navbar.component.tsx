import Image from "next/image";

import styles from "./navbar.module.css";
import Container from "../Container";
import Button from "../Button";

const Navbar = () => {
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
            <strong>+48 58 506 65 65</strong>
            <Button href="#" variant="primary">
              Zapytaj o ofertę
            </Button>
            <Button href="#" variant="secondary">
              Umów jazdę próbną
            </Button>
          </div>
          <div className={styles.hamburger}>
            <button>
              <Image
                src="/bars-solid.svg"
                alt="menu mobile"
                width={36}
                height={36}
              />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
