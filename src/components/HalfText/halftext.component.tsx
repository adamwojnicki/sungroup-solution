import Image, { StaticImageData } from "next/image";

import styles from "./halftext.module.css";

import Container from "../Container";

const HalfText = ({
  reverse,
  paddingTop,
  paddingBottom,
  imageSrc,
  imageAlt,
  children,
}: {
  reverse?: boolean;
  paddingTop?: boolean;
  paddingBottom?: boolean;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className={`${styles.halfText} ${paddingTop && styles.paddingTop} ${
        paddingBottom && styles.paddingBottom
      }`}
    >
      <Container>
        <div className={`${styles.flex} ${reverse && styles.flexReverse}`}>
          <figure className={styles.figure}>
            <Image src={imageSrc} alt={imageAlt} />
          </figure>
          <div
            className={`
            ${styles.textContent} 
            ${reverse ? styles.moveRight : styles.moveLeft}`}
          >
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HalfText;
