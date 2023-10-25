import Image from "next/image";

import Container from "../Container";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.flex}>
          <div className={styles.col}>SEAT CUPRA S.A.U. 2022 ®</div>
          <div className={styles.col}>
            <a className={styles.link} href="#">
              Obowiązek informacyjny
            </a>
            <a className={styles.link} href="#">
              Polityka cookies
            </a>
          </div>
          <div className={`${styles.col} ${styles.media}`}>
            <a href="#">
              <Image
                width={24}
                height={24}
                src="/instagram.svg"
                alt="Instagram"
              />
            </a>
            <a href="#">
              <Image width={24} height={24} src="/vimeo.svg" alt="Vimeo" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
