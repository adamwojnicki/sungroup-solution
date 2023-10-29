import styles from "./hero.module.css";

import Container from "../Container";
import Button from "../Button";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.textContent}>
          <p className={styles.eyebrow}>CUPRA Formentor</p>
          <h1 className={styles.headline}>
            Wejdź do świata Cupra. Poznaj prawdziwą moc i&nbsp;sportowego ducha
            marki.
          </h1>
          <Button href="#" variant="primary-light">
            Ruszaj na jazdę testową
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
