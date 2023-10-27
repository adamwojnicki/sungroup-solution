import Image from "next/image";

import styles from "./carousel-button.module.css";

const CarouselButton = ({
  className,
  direction,
}: {
  className: string;
  direction: "next" | "prev";
}) => {
  return (
    <button className={`${className} ${styles.button}`}>
      <Image src={`/${direction}.svg`} width={8} height={14} alt={direction} />
    </button>
  );
};

export default CarouselButton;
