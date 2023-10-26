import Image from "next/image";

import Container from "../Container";
import Button from "../Button";
import styles from "./mosaic.module.css";

import img1 from "@/assets/cupra_1-sm.jpg";
import img2 from "@/assets/cupra_2-sm.jpg";

const Mosaic = () => {
  return (
    <section className={styles.mosaic}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.txtTop}>
            <h2>WYPRÓBUJ</h2>
            <p>
              Zobacz, poczuj i przekonaj się, czym jest CUPRA. Poznaj samochody,
              które są wyjątkowym połączeniem technologii, mocy, elegancji i
              komfortu.
            </p>
          </div>
          <div className={styles.figLeft}>
            <figure>
              <Image src={img2} width={787} height={519} alt="Cupra" />
              <figcaption>
                Design inspirowany wyścigami, stworzony z niezwykłą dbałością o
                detale.
              </figcaption>
            </figure>
          </div>
          <div className={styles.figRight}>
            <figure>
              <Image src={img1} width={553} height={737} alt="Cupra" />
              <figcaption>
                Design inspirowany wyścigami, stworzony z niezwykłą dbałością o
                detale.
              </figcaption>
            </figure>
          </div>
          <div className={styles.txtBtm}>
            <h3>TYLKO DLA ODWAŻNYCH</h3>
            <p>
              Model CUPRA, który idealnie wpisuje się w DNA marki. Unikalny SUV
              coupé, wyjątkowy, odważny i innowacyjny – zapewni Ci to, co
              najlepsze w marce CUPRA.
            </p>
            <Button href="#" variant="primary-light">
              Umów jazdę próbną
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Mosaic;
