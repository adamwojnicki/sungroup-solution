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
            <Image
              src="/cupra_logo.svg"
              alt="Cupra logo"
              width={142}
              height={21}
            />
          </div>
          <nav>
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
            {/* TODO: FIX SPACING */}
            <strong>+48 58 506 65 65</strong>
            <Button variant="primary">Zapytaj o ofertę</Button>
            <Button variant="secondary">Umów jazdę próbną</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
